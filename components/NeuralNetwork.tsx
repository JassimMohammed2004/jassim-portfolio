"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { SCENE_COLORS } from "@/lib/constants";

type Props = {
  /** 0 at hero, 1 by the time the visitor reaches the bottom of the page. */
  scrollProgress: React.MutableRefObject<number>;
  nodeCount?: number;
  packetCount?: number;
};

const NODE_COLOR = new THREE.Color(SCENE_COLORS.node);
const NODE_ACTIVE = new THREE.Color(SCENE_COLORS.nodeActive);
const PACKET_COLOR = new THREE.Color(SCENE_COLORS.packet);

/** Builds a set of node positions plus a "structured" target lattice used to
 *  morph the network from an organic cloud into an ordered grid on scroll. */
function useNodeField(count: number) {
  return useMemo(() => {
    const organic = new Float32Array(count * 3);
    const structured = new Float32Array(count * 3);

    const cols = Math.ceil(Math.sqrt(count));
    const spacing = 1.15;

    for (let i = 0; i < count; i++) {
      // Organic: points scattered through a flattened ellipsoid volume.
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3.2 * Math.cbrt(Math.random());
      organic[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      organic[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      organic[i * 3 + 2] = r * Math.cos(phi) * 0.9;

      // Structured: a quiet even grid, the "system settles" state.
      const col = i % cols;
      const row = Math.floor(i / cols);
      structured[i * 3] = (col - cols / 2) * spacing;
      structured[i * 3 + 1] = (row - cols / 2) * spacing * 0.7;
      structured[i * 3 + 2] = Math.sin(col * 0.6 + row * 0.4) * 0.6;
    }

    return { organic, structured };
  }, [count]);
}

/** Connects each node to its nearest few neighbours, capped so the graph stays sparse and legible. */
function buildEdges(positions: Float32Array, count: number, maxDist: number, maxDegree: number) {
  const edges: [number, number][] = [];
  const degree = new Array(count).fill(0);

  for (let i = 0; i < count; i++) {
    if (degree[i] >= maxDegree) continue;
    const ix = positions[i * 3],
      iy = positions[i * 3 + 1],
      iz = positions[i * 3 + 2];

    let best: { j: number; d: number }[] = [];
    for (let j = i + 1; j < count; j++) {
      if (degree[j] >= maxDegree) continue;
      const dx = ix - positions[j * 3];
      const dy = iy - positions[j * 3 + 1];
      const dz = iz - positions[j * 3 + 2];
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (d < maxDist) best.push({ j, d });
    }
    best.sort((a, b) => a.d - b.d);
    const take = best.slice(0, Math.max(0, maxDegree - degree[i]));
    for (const { j } of take) {
      edges.push([i, j]);
      degree[i]++;
      degree[j]++;
    }
  }
  return edges;
}

export default function NeuralNetwork({ scrollProgress, nodeCount = 70, packetCount = 18 }: Props) {
  const { organic, structured } = useNodeField(nodeCount);
  const edges = useMemo(() => buildEdges(organic, nodeCount, 2.1, 4), [organic, nodeCount]);

  const nodesRef = useRef<THREE.InstancedMesh>(null);
  const packetsRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const currentPositions = useRef(new Float32Array(organic));
  const mouseWorld = useRef(new THREE.Vector3(9999, 9999, 9999));
  const { viewport, pointer } = useThree();

  const edgePositions = useMemo(() => new Float32Array(edges.length * 2 * 3), [edges]);
  const packetAssignments = useMemo(
    () =>
      Array.from({ length: packetCount }, () => ({
        edge: edges[Math.floor(Math.random() * edges.length)],
        t: Math.random(),
        speed: 0.12 + Math.random() * 0.16,
      })),
    [edges, packetCount]
  );

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const morph = scrollProgress.current; // 0 -> 1 across the page

    // Project the pointer onto a world-space plane in front of the camera for proximity checks.
    mouseWorld.current.set(pointer.x * viewport.width * 0.5, pointer.y * viewport.height * 0.5, 0);

    // Gentle whole-scene parallax + rotation driven by cursor and scroll.
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.03 + pointer.x * delta * 0.05;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        pointer.y * 0.12,
        0.04
      );
      groupRef.current.position.z = THREE.MathUtils.lerp(0, -1.4, morph);
    }

    // Morph each node between its organic position and the structured lattice, with idle drift + cursor reaction.
    const pos = currentPositions.current;
    let nearestDist = Infinity;
    for (let i = 0; i < nodeCount; i++) {
      const bx = THREE.MathUtils.lerp(organic[i * 3], structured[i * 3], morph);
      const by = THREE.MathUtils.lerp(organic[i * 3 + 1], structured[i * 3 + 1], morph);
      const bz = THREE.MathUtils.lerp(organic[i * 3 + 2], structured[i * 3 + 2], morph);

      const drift = Math.sin(t * 0.6 + i) * 0.04;

      const dx = bx - mouseWorld.current.x;
      const dy = by - mouseWorld.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const push = dist < 1.4 ? (1.4 - dist) * 0.18 : 0;

      pos[i * 3] = bx + (dx / (dist || 1)) * push;
      pos[i * 3 + 1] = by + (dy / (dist || 1)) * push + drift;
      pos[i * 3 + 2] = bz;

      if (dist < nearestDist) nearestDist = dist;

      if (nodesRef.current) {
        const highlight = dist < 1.4 ? 1 - dist / 1.4 : 0;
        dummy.position.set(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
        const scale = 0.045 + highlight * 0.05;
        dummy.scale.setScalar(scale);
        dummy.updateMatrix();
        nodesRef.current.setMatrixAt(i, dummy.matrix);
        const color = NODE_COLOR.clone().lerp(NODE_ACTIVE, highlight);
        nodesRef.current.setColorAt(i, color);
      }
    }
    if (nodesRef.current) {
      nodesRef.current.instanceMatrix.needsUpdate = true;
      if (nodesRef.current.instanceColor) nodesRef.current.instanceColor.needsUpdate = true;
    }

    // Rebuild the edge line-segment buffer from the current (morphed) node positions.
    if (linesRef.current) {
      const arr = edgePositions;
      for (let e = 0; e < edges.length; e++) {
        const [a, b] = edges[e];
        arr[e * 6] = pos[a * 3];
        arr[e * 6 + 1] = pos[a * 3 + 1];
        arr[e * 6 + 2] = pos[a * 3 + 2];
        arr[e * 6 + 3] = pos[b * 3];
        arr[e * 6 + 4] = pos[b * 3 + 1];
        arr[e * 6 + 5] = pos[b * 3 + 2];
      }
      const attr = linesRef.current.geometry.getAttribute("position") as THREE.BufferAttribute;
      attr.array = arr;
      attr.needsUpdate = true;
    }

    // Data packets travel along their assigned edge, then hop to a new one.
    if (packetsRef.current) {
      for (let p = 0; p < packetAssignments.length; p++) {
        const pk = packetAssignments[p];
        pk.t += delta * pk.speed;
        if (pk.t > 1) {
          pk.t = 0;
          pk.edge = edges[Math.floor(Math.random() * edges.length)];
        }
        const [a, b] = pk.edge;
        const x = THREE.MathUtils.lerp(pos[a * 3], pos[b * 3], pk.t);
        const y = THREE.MathUtils.lerp(pos[a * 3 + 1], pos[b * 3 + 1], pk.t);
        const z = THREE.MathUtils.lerp(pos[a * 3 + 2], pos[b * 3 + 2], pk.t);
        dummy.position.set(x, y, z);
        dummy.scale.setScalar(0.032);
        dummy.updateMatrix();
        packetsRef.current.setMatrixAt(p, dummy.matrix);
      }
      packetsRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={SCENE_COLORS.edge} transparent opacity={0.35} />
      </lineSegments>

      <instancedMesh ref={nodesRef} args={[undefined, undefined, nodeCount]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial vertexColors toneMapped={false} />
      </instancedMesh>

      <instancedMesh ref={packetsRef} args={[undefined, undefined, packetCount]}>
        <sphereGeometry args={[1, 6, 6]} />
        <meshBasicMaterial color={PACKET_COLOR} toneMapped={false} transparent opacity={0.9} />
      </instancedMesh>
    </group>
  );
}
