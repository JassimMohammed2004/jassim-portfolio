"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, Code2 } from "lucide-react";

interface AvatarArtProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Editorial Avatar & Monogram Composition for Jassim Mohammed.
 * Sits in an architectural multi-layer frame with floating geometric metadata,
 * subtle orbital rings, and dynamic lighting.
 * Built to be drop-in replaced by a real photograph whenever user adds one.
 */
export default function AvatarArt({ className = "", size = "lg" }: AvatarArtProps) {
  const isLarge = size === "lg";

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer ambient atmospheric aura */}
      <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-tr from-accent/15 via-transparent to-cyan/10 blur-2xl" />

      {/* Main framed architectural structure */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative aspect-square w-full max-w-[340px] sm:max-w-[400px] overflow-hidden rounded-3xl border border-line-strong bg-gradient-to-b from-surface-elevated via-surface to-void p-3 shadow-[0_24px_60px_rgba(0,0,0,0.8)] backdrop-blur-md"
      >
        {/* Subtle grid texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Inner viewport container */}
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-void via-surface to-void p-6 md:p-8">
          {/* Top telemetry status bar */}
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-faint">
            <span className="flex items-center gap-1.5 text-accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              SYSTEM.ACTIVE
            </span>
            <span className="flex items-center gap-1">
              <Code2 size={12} className="text-muted" />
              <span>AI/ML.ENG</span>
            </span>
          </div>

          {/* Central Monogram Artwork */}
          <div className="relative my-auto flex flex-col items-center justify-center py-6">
            {/* Concentric orbital rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute h-52 w-52 rounded-full border border-dashed border-accent/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute h-40 w-40 rounded-full border border-line/60"
            />

            {/* Glowing core badge */}
            <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-2xl border border-line-strong bg-gradient-to-tr from-surface via-surface-elevated to-surface shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
              {/* Corner tech marks */}
              <span className="absolute top-1.5 left-1.5 h-1.5 w-1.5 border-t border-l border-accent/60" />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 border-t border-r border-accent/60" />
              <span className="absolute bottom-1.5 left-1.5 h-1.5 w-1.5 border-b border-l border-accent/60" />
              <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 border-b border-r border-accent/60" />

              {/* Big bold typography monogram */}
              <div className="text-center font-display leading-none">
                <span className="block text-4xl font-bold tracking-tighter text-ink">
                  J<span className="text-accent font-light">M</span>
                </span>
                <span className="mt-1 block font-mono text-[9px] uppercase tracking-widest2 text-accent/90">
                  VERIFIED
                </span>
              </div>
            </div>

            {/* Spec label */}
            <div className="mt-5 text-center">
              <span className="font-display text-sm font-semibold tracking-wide text-ink">
                JASSIM MOHAMMED
              </span>
              <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-muted">
                B.Tech AI &amp; Data Science (Graduated)
              </span>
            </div>
          </div>

          {/* Bottom metadata tags */}
          <div className="flex items-center justify-between border-t border-line/60 pt-3 text-[10px] font-mono text-faint">
            <span className="flex items-center gap-1 text-muted">
              <Terminal size={11} className="text-accent" />
              <span>CORE.PY // ML</span>
            </span>
            <span>KER.IN</span>
          </div>
        </div>

        {/* Floating floating spec chips */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-6 -left-3 hidden sm:flex items-center gap-1.5 rounded-full border border-line-strong bg-surface-elevated/90 px-3 py-1 font-mono text-[10px] text-ink shadow-lg backdrop-blur-md"
        >
          <Sparkles size={11} className="text-accent" />
          <span>AI / ML Engineer</span>
        </motion.div>

        <motion.div
          animate={{ y: [4, -4, 4] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-8 -right-3 hidden sm:flex items-center gap-1.5 rounded-full border border-line-strong bg-surface-elevated/90 px-3 py-1 font-mono text-[10px] text-accent shadow-lg backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span>B.Tech Completed</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
