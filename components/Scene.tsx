"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/utils";

/**
 * Cinematic Studio Atmosphere Canvas.
 * Generates slow, sweeping architectural light curtains, subtle atmospheric depth,
 * and high-definition particle illumination in warm ivory and muted olive tones.
 * Provides rich visual depth and subtle parallax reaction without distracting from content.
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

      // Create atmospheric ambient light blooms
      orbs = [
        {
          x: width * 0.25,
          y: height * 0.3,
          radius: Math.min(width, height) * 0.45,
          color: "rgba(157, 179, 138, 0.07)", // Olive aura
          vx: 0.12,
          vy: 0.08,
        },
        {
          x: width * 0.75,
          y: height * 0.5,
          radius: Math.min(width, height) * 0.5,
          color: "rgba(204, 232, 133, 0.05)", // Muted chartreuse silk
          vx: -0.1,
          vy: 0.1,
        },
        {
          x: width * 0.5,
          y: height * 0.8,
          radius: Math.min(width, height) * 0.4,
          color: "rgba(223, 155, 86, 0.04)", // Warm amber horizon
          vx: 0.08,
          vy: -0.09,
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

      // Render floating cinematic ambient light orbs
      for (const orb of orbs) {
        orb.x += orb.vx + Math.sin(t) * 0.2;
        orb.y += orb.vy + Math.cos(t * 0.8) * 0.2;

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

      // Cursor spotlight interaction
      if (mouse.x > 0 && mouse.y > 0) {
        const spot = ctx!.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          width < 768 ? 220 : 380
        );
        spot.addColorStop(0, "rgba(204, 232, 133, 0.04)");
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
      {/* Studio lighting top/bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void opacity-80" />
      {/* Subtle atmospheric architectural scan lines */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(rgba(243, 240, 232, 0.4) 1px, transparent 1px)`,
          backgroundSize: "100% 4px",
        }}
      />
    </div>
  );
}
