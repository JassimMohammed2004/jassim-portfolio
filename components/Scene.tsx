"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/utils";

/**
 * Atmospheric Background Canvas.
 * Blends slow, cinematic gradient currents, subtle ambient light waves,
 * and high-definition particle lattices in deep charcoal and muted lime.
 * Zero layout shifts, hardware-accelerated 60fps, touch-safe.
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

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
    }

    let particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx?.scale(dpr, dpr);

      const count = width < 768 ? 24 : 44;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          radius: Math.random() * 1.6 + 0.8,
          baseAlpha: Math.random() * 0.35 + 0.15,
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

    let time = 0;
    function render() {
      time += 0.006;
      ctx!.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Draw subtle cinematic radial glow under mouse or center
      const auraX = mouse.x > 0 ? mouse.x : width * 0.75;
      const auraY = mouse.y > 0 ? mouse.y : height * 0.35;
      const grad = ctx!.createRadialGradient(auraX, auraY, 10, auraX, auraY, width < 768 ? 240 : 420);
      grad.addColorStop(0, "rgba(197, 248, 42, 0.045)");
      grad.addColorStop(0.5, "rgba(56, 189, 248, 0.02)");
      grad.addColorStop(1, "transparent");
      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx + Math.sin(time + i) * 0.1;
        p.y += p.vy + Math.cos(time + i * 0.8) * 0.1;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse proximity gentle deflection
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          const force = (130 - dist) / 130;
          p.x += (dx / dist) * force * 1.5;
          p.y += (dy / dist) * force * 1.5;
        }

        ctx!.fillStyle = dist < 120 ? "#C5F82A" : `rgba(245, 245, 247, ${p.baseAlpha})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, dist < 120 ? p.radius + 0.6 : p.radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Draw faint topological network lines
      const maxDist = width < 768 ? 100 : 135;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.14;
            ctx!.strokeStyle = `rgba(197, 248, 42, ${alpha})`;
            ctx!.lineWidth = 0.65;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
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
      <canvas ref={canvasRef} className="h-full w-full opacity-70" />
      {/* Editorial top and bottom vignette overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(197,248,42,0.06),rgba(255,255,255,0))]" />
    </div>
  );
}
