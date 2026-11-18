"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/utils";

/**
 * High-performance 60fps geometric particle & lattice visual.
 * Subtly represents connected AI nodes, data pipelines, and graph topology.
 * Ultra-lightweight with zero extra bundle overhead, smooth across all screens.
 */
export default function Scene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const mouse = { x: -9999, y: -9999, targetX: -9999, targetY: -9999 };

    interface Node {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      radius: number;
    }

    let nodes: Node[] = [];

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx?.scale(dpr, dpr);

      // Distribute nodes across hero area
      const count = width < 768 ? 26 : 48;
      nodes = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          radius: Math.random() * 1.5 + 1,
        });
      }
    }

    resize();
    window.addEventListener("resize", resize);

    function onMouseMove(e: MouseEvent) {
      const rect = canvas?.getBoundingClientRect();
      if (!rect) return;
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    }

    function onMouseLeave() {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    let t = 0;
    function render() {
      t += 0.008;
      ctx!.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Update node positions
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx + Math.sin(t + i) * 0.12;
        n.y += n.vy + Math.cos(t + i * 0.7) * 0.12;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        // Mouse proximity repulsion
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          n.x += (dx / dist) * force * 1.8;
          n.y += (dy / dist) * force * 1.8;
        }
      }

      // Draw subtle lattice lines between neighboring nodes
      const maxDist = width < 768 ? 95 : 125;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.16;
            ctx!.strokeStyle = `rgba(197, 248, 42, ${alpha})`;
            ctx!.lineWidth = 0.75;
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isNear = dist < 120;

        ctx!.fillStyle = isNear ? "#c5f82a" : "rgba(245, 245, 245, 0.4)";
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, isNear ? n.radius + 0.8 : n.radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      animId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full opacity-65" />
      <div className="absolute inset-0 bg-gradient-to-b from-void/20 via-transparent to-void" />
    </div>
  );
}
