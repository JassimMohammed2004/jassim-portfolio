"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import dynamic from "next/dynamic";
import { prefersReducedMotion, isLowPowerDevice } from "@/lib/utils";

const NeuralNetwork = dynamic(() => import("@/components/NeuralNetwork"), { ssr: false });

function AmbientParticles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.012} color="#5a5a60" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

/** Tracks how far the visitor has scrolled through the whole document, 0 → 1. */
function useScrollProgressRef() {
  const ref = useRef(0);
  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      ref.current = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return ref;
}

export default function Scene() {
  const scrollProgress = useScrollProgressRef();
  const reduced = typeof window !== "undefined" && prefersReducedMotion();
  const lowPower = typeof window !== "undefined" && isLowPowerDevice();

  if (reduced) {
    // Respect reduced-motion: render a still, low-cost gradient instead of an animated scene.
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(232,163,61,0.08),transparent_60%)]"
      />
    );
  }

  const nodeCount = lowPower ? 34 : 70;
  const packetCount = lowPower ? 8 : 18;

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, lowPower ? 1.3 : 1.8]}
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <NeuralNetwork scrollProgress={scrollProgress} nodeCount={nodeCount} packetCount={packetCount} />
          {!lowPower && <AmbientParticles count={90} />}
        </Suspense>
      </Canvas>
    </div>
  );
}
