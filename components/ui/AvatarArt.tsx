"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Sparkles, Orbit } from "lucide-react";

/**
 * Editorial Studio Monogram & Identity Sculpture.
 * Distinctive 3D-style architectural composition with deep basalt textures,
 * floating brushed gold/olive metallic rings, warm ivory typography, and refractive depth.
 * Ready for drop-in replacement by an actual photo whenever added.
 */
export default function AvatarArt() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Ambient warm atmospheric halo */}
      <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-gradient-to-tr from-olive/20 via-accent/10 to-amber/15 blur-3xl opacity-70" />

      {/* Main architectural framed obelisk */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative aspect-[4/5] w-full max-w-[320px] sm:max-w-[380px] overflow-hidden rounded-[32px] border border-line-strong bg-gradient-to-b from-surface-elevated via-surface to-void p-3 shadow-[0_32px_80px_rgba(0,0,0,0.85)]"
      >
        {/* Subtle architectural grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(rgba(243, 240, 232, 0.6) 1px, transparent 1px)`,
            backgroundSize: "22px 22px",
          }}
        />

        {/* Inner gallery capsule */}
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[24px] border border-line bg-gradient-to-b from-[#14161c] via-[#0d0e12] to-void p-6 md:p-8">
          {/* Header status bar */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-muted">
            <span className="flex items-center gap-1.5 text-olive font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-olive animate-pulse" />
              IDENT // 01-JM
            </span>
            <span className="text-[10px] uppercase text-faint">EST. 2026</span>
          </div>

          {/* Central Monogram Sculpture */}
          <div className="relative my-auto flex flex-col items-center justify-center py-4">
            {/* Ambient slow rotating orbital bands */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute h-56 w-56 rounded-full border border-dashed border-olive/25"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute h-44 w-44 rounded-full border border-line/60"
            />

            {/* Central Identity Vault Emblem */}
            <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-3xl border border-line-strong bg-gradient-to-tr from-[#161820] via-[#1f222d] to-[#12141a] shadow-[0_12px_40px_rgba(0,0,0,0.7)]">
              {/* Corner brass rivets */}
              <span className="absolute top-2 left-2 h-1.5 w-1.5 rounded-full bg-olive/40" />
              <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-olive/40" />
              <span className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-olive/40" />
              <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-olive/40" />

              {/* Monogram display */}
              <div className="text-center font-display">
                <span className="block text-5xl font-bold tracking-tighter text-ivory">
                  J<span className="text-olive font-light">M</span>
                </span>
                <span className="mt-1 block font-mono text-[9px] uppercase tracking-widest2 text-accent">
                  ENGINEERING
                </span>
              </div>
            </div>

            {/* Nameplate & Credentials */}
            <div className="mt-6 text-center">
              <h2 className="font-display text-base font-semibold tracking-wide text-ivory">
                JASSIM MOHAMMED
              </h2>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                B.Tech Artificial Intelligence &amp; DS
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-olive/30 bg-olive-soft px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-olive">
                <Shield size={10} />
                <span>Degree Graduated</span>
              </div>
            </div>
          </div>

          {/* Footer telemetry */}
          <div className="flex items-center justify-between border-t border-line/60 pt-3 text-[10px] font-mono text-faint">
            <span className="flex items-center gap-1 text-muted">
              <Terminal size={11} className="text-olive" />
              <span>SYS.ONLINE</span>
            </span>
            <span>KERALA, IN</span>
          </div>
        </div>

        {/* Floating Spec Tags */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 left-4 hidden sm:flex items-center gap-1.5 rounded-full border border-line-strong bg-surface-elevated/95 px-3.5 py-1 font-mono text-[10px] text-ivory shadow-xl backdrop-blur-md"
        >
          <Sparkles size={11} className="text-accent" />
          <span>Machine Learning Systems</span>
        </motion.div>

        <motion.div
          animate={{ y: [4, -4, 4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute -bottom-3 right-4 hidden sm:flex items-center gap-1.5 rounded-full border border-line-strong bg-surface-elevated/95 px-3.5 py-1 font-mono text-[10px] text-olive shadow-xl backdrop-blur-md"
        >
          <Orbit size={11} />
          <span>Full-Stack Development</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
