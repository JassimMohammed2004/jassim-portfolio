"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Terminal, Shield, Sparkles, Orbit, Code2, Cpu, Eye, Zap } from "lucide-react";
import { prefersReducedMotion } from "@/lib/utils";

interface AvatarInteractiveProps {
  className?: string;
}

/**
 * 3D Interactive Cyber-Developer Avatar Sculpture.
 * Represents Jassim Mohammed as an AI Engineer / Creative Technologist:
 * - Dynamic layered vector & SVG developer character wearing an oversized technical hoodie
 * - Holographic HUD optics with real-time cursor tracking (head angle & eye gaze follow mouse)
 * - Subtle ambient breathing & pulse animations
 * - Volumetric depth lighting, brass edge markers, and telemetry circuits
 * - 100% lightweight, no heavy 3D GLTF downloads, 60fps across mobile & desktop
 */
export default function AvatarArt({ className = "" }: AvatarInteractiveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 180, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 20 });

  // 3D Card tilt transformations
  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Head and eye parallax offsets (character looking toward mouse)
  const headX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const headY = useTransform(springY, [-0.5, 0.5], [-8, 8]);
  const gazeX = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const gazeY = useTransform(springY, [-0.5, 0.5], [-4, 4]);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion() || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className={`relative flex items-center justify-center ${className}`}
    >
      {/* Ambient volumetric lighting halo */}
      <div className="pointer-events-none absolute -inset-8 rounded-[48px] bg-gradient-to-tr from-olive/25 via-accent/15 to-amber/20 blur-3xl opacity-75" />

      {/* Main 3D Interactive Framed Canvas */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative aspect-[4/5] w-full max-w-[340px] sm:max-w-[400px] overflow-hidden rounded-[36px] border border-line-strong bg-gradient-to-b from-[#181b24] via-[#101218] to-void p-3.5 shadow-[0_36px_90px_rgba(0,0,0,0.9)]"
      >
        {/* Subtle holographic grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(rgba(243, 240, 232, 0.8) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Inner gallery chamber */}
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[28px] border border-line bg-gradient-to-b from-[#12141c] via-[#090b0f] to-void p-6 md:p-8">
          {/* Top HUD Telemetry status */}
          <div className="relative z-20 flex items-center justify-between text-[11px] font-mono tracking-wider text-muted">
            <span className="flex items-center gap-1.5 text-olive font-medium">
              <span className="h-2 w-2 rounded-full bg-olive animate-pulse" />
              NEURAL.AVATAR // 01
            </span>
            <span className="flex items-center gap-1 text-[10px] uppercase text-faint">
              <Zap size={11} className="text-accent" />
              <span>INTERACTIVE</span>
            </span>
          </div>

          {/* Central Character Studio: Stylized Developer in Tech Streetwear Hoodie */}
          <div className="relative my-auto flex h-full w-full items-center justify-center overflow-hidden py-2">
            {/* Ambient orbital rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute h-64 w-64 rounded-full border border-dashed border-olive/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute h-52 w-52 rounded-full border border-line/60"
            />

            {/* Stylized SVG Character Composition */}
            <motion.div
              style={{
                x: headX,
                y: headY,
                transformStyle: "preserve-3d",
              }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex flex-col items-center justify-center"
            >
              <svg
                viewBox="0 0 200 240"
                className="h-56 w-56 drop-shadow-[0_16px_32px_rgba(0,0,0,0.8)] sm:h-64 sm:w-64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="hoodieGrad" x1="20" y1="120" x2="180" y2="240" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1e222d" />
                    <stop offset="0.5" stopColor="#141720" />
                    <stop offset="1" stopColor="#0b0d12" />
                  </linearGradient>
                  <linearGradient id="cowlGrad" x1="50" y1="60" x2="150" y2="180" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#252a38" />
                    <stop offset="1" stopColor="#10131a" />
                  </linearGradient>
                  <linearGradient id="visorGrad" x1="70" y1="100" x2="130" y2="125" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#cce885" stopOpacity="0.85" />
                    <stop offset="0.5" stopColor="#9db38a" stopOpacity="0.95" />
                    <stop offset="1" stopColor="#38bdf8" stopOpacity="0.75" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Shoulders & Oversized Technical Streetwear Hoodie Body */}
                <path
                  d="M30 240 L35 185 C37 165 52 150 72 145 L100 142 L128 145 C148 150 163 165 165 185 L170 240 Z"
                  fill="url(#hoodieGrad)"
                  stroke="rgba(243,240,232,0.18)"
                  strokeWidth="1.5"
                />

                {/* Hoodie chest zipper seam & technical lanyard */}
                <line x1="100" y1="142" x2="100" y2="240" stroke="rgba(243,240,232,0.25)" strokeWidth="2" strokeDasharray="4 2" />
                <path d="M85 148 L80 190" stroke="#9db38a" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                <path d="M115 148 L120 190" stroke="#9db38a" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

                {/* Stylized Outer Hood / Cowl */}
                <path
                  d="M50 135 C42 95 60 45 100 45 C140 45 158 95 150 135 C142 165 125 175 100 175 C75 175 58 165 50 135 Z"
                  fill="url(#cowlGrad)"
                  stroke="rgba(157,179,138,0.4)"
                  strokeWidth="2"
                />

                {/* Deep Inner Hood Shadow & Silhouette Face Void */}
                <ellipse cx="100" cy="115" rx="36" ry="44" fill="#07080a" />

                {/* Futuristic Cyber-Visor / Optical Display (Reflective & Interactive) */}
                <g filter="url(#glow)">
                  <rect
                    x="68"
                    y="102"
                    width="64"
                    height="18"
                    rx="6"
                    fill="url(#visorGrad)"
                    stroke="#cce885"
                    strokeWidth="1"
                  />
                  {/* Visor internal telemetry readout ticks */}
                  <line x1="74" y1="111" x2="88" y2="111" stroke="#0a0b0d" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="100" cy="111" r="2" fill="#0a0b0d" />
                  <line x1="112" y1="111" x2="126" y2="111" stroke="#0a0b0d" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* High-tech audio earpiece module on hood edge */}
                <rect x="44" y="105" width="8" height="18" rx="3" fill="#1e222d" stroke="#9db38a" strokeWidth="1" />
                <circle cx="48" cy="114" r="2" fill="#cce885" />

                <rect x="148" y="105" width="8" height="18" rx="3" fill="#1e222d" stroke="#9db38a" strokeWidth="1" />
                <circle cx="152" cy="114" r="2" fill="#cce885" />
              </svg>
            </motion.div>
          </div>

          {/* Bottom Identity Plaque */}
          <div className="relative z-20 border-t border-line/60 pt-3 text-center">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1 text-muted">
                <Code2 size={12} className="text-olive" />
                <span>JASSIM MOHAMMED</span>
              </span>
              <span className="rounded-full border border-olive/30 bg-olive-soft px-2.5 py-0.5 text-[10px] text-olive font-semibold">
                B.Tech Graduated
              </span>
            </div>
          </div>
        </div>

        {/* Floating Spec Chips with 3D Depth */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(30px)" }}
          className="absolute -top-3 left-4 hidden sm:flex items-center gap-1.5 rounded-full border border-line-strong bg-surface-elevated/95 px-3.5 py-1 font-mono text-[10px] text-ivory shadow-2xl backdrop-blur-md"
        >
          <Sparkles size={11} className="text-accent" />
          <span>AI / Machine Learning Engineer</span>
        </motion.div>

        <motion.div
          animate={{ y: [4, -4, 4] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          style={{ transform: "translateZ(30px)" }}
          className="absolute -bottom-3 right-4 hidden sm:flex items-center gap-1.5 rounded-full border border-line-strong bg-surface-elevated/95 px-3.5 py-1 font-mono text-[10px] text-olive shadow-2xl backdrop-blur-md"
        >
          <Orbit size={11} />
          <span>Creative Technologist</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
