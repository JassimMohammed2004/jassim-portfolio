"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/utils";

/**
 * Concept Art Folio Atmosphere Canvas.
 * Generates slow, chiaroscuro lighting blooms inspired by the Behance concept art reference:
 * - Deep neutral slate background (#282a2e)
 * - Warm golden amber focal point glows (#f59e0b)
 * - Subtle sci-fi cyan edge rim glows (#00e5ff)
 * - Velvety atmospheric dispersion without distracting from artwork and typography
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

    interface LightOrb {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
    }

    let orbs: LightOrb[] = [];

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx?.scale(dpr, dpr);

      // Concept Art chiaroscuro lighting orbs
      orbs = [
        {
          x: width * 0.25,
          y: height * 0.35,
          radius: Math.min(width, height) * 0.45,
          color: "rgba(245, 158, 11, 0.07)", // Warm golden amber glow
          vx: 0.1,
          vy: 0.08,
        },
        {
          x: width * 0.78,
          y: height * 0.45,
          radius: Math.min(width, height) * 0.5,
          color: "rgba(0, 229, 255, 0.04)", // Sci-fi cyan rim glow
          vx: -0.09,
          vy: 0.09,
        },
        {
          x: width * 0.5,
          y: height * 0.82,
          radius: Math.min(width, height) * 0.4,
          color: "rgba(245, 158, 11, 0.05)", // Warm lantern horizon
          vx: 0.08,
          vy: -0.08,
        },
      ];
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
      t += 0.005;
      ctx!.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Render floating concept art chiaroscuro light blooms
      for (const orb of orbs) {
        orb.x += orb.vx + Math.sin(t) * 0.18;
        orb.y += orb.vy + Math.cos(t * 0.8) * 0.18;

        if (orb.x < -orb.radius) orb.x = width + orb.radius;
        if (orb.x > width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = height + orb.radius;
        if (orb.y > height + orb.radius) orb.y = -orb.radius;

        const radial = ctx!.createRadialGradient(
          orb.x,
          orb.y,
          orb.radius * 0.05,
          orb.x,
          orb.y,
          orb.radius
        );
        radial.addColorStop(0, orb.color);
        radial.addColorStop(1, "transparent");

        ctx!.fillStyle = radial;
        ctx!.beginPath();
        ctx!.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Cursor subtle ambient highlight
      if (mouse.x > 0 && mouse.y > 0) {
        const spot = ctx!.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          width < 768 ? 200 : 360
        );
        spot.addColorStop(0, "rgba(245, 158, 11, 0.035)");
        spot.addColorStop(1, "transparent");
        ctx!.fillStyle = spot;
        ctx!.fillRect(0, 0, width, height);
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
      <canvas ref={canvasRef} className="h-full w-full" />
      {/* Matte-board dark slate vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/90 via-transparent to-void/95 opacity-85" />
      {/* Fine-art studio paper grain */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
