"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Mic, Users, ArrowUpRight, Github, Activity, Layers, Cpu } from "lucide-react";

interface ProjectArtworkProps {
  id: string;
  accentColor: string;
}

/**
 * Editorial bespoke visual composition for each individual project.
 * Completely distinct visual language per project:
 * - Network Intrusion: Deep radar/telemetry lattice with packet packet nodes
 * - Alexa AI: Acoustic waveform geometry & voice frequency spectrum
 * - Collabify AI: Multi-node collaborative canvas & knowledge synthesis grid
 */
export default function ProjectArtwork({ id, accentColor }: ProjectArtworkProps) {
  if (id === "nids-ml") {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface-elevated via-void to-surface p-6">
        {/* Subtle radial radar sweep */}
        <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(197,248,42,0.12),transparent_70%)]" />

        {/* Tactical grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Content composition */}
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono text-accent">
            <span className="flex items-center gap-2">
              <ShieldAlert size={14} />
              <span>PACKET_TELEMETRY.CLASSIFIER</span>
            </span>
            <span className="rounded border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px]">
              0.04ms INFERENCE
            </span>
          </div>

          {/* Central Security Radar Vector Graphics */}
          <div className="relative my-auto flex items-center justify-center py-4">
            <div className="relative flex h-36 w-36 items-center justify-center">
              {/* Concentric rings */}
              <div className="absolute inset-0 rounded-full border border-accent/25 animate-ping opacity-30" />
              <div className="absolute h-28 w-28 rounded-full border border-line-strong" />
              <div className="absolute h-16 w-16 rounded-full border border-dashed border-accent/50" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent bg-surface-elevated text-accent shadow-[0_0_20px_rgba(197,248,42,0.3)]">
                <Activity size={22} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-line/60 pt-3 text-[10px] font-mono text-muted">
            <span>MODEL: SCALED_SVM + RANDOM_FOREST</span>
            <span>STATUS: VALIDATED</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === "alexa-voice-assistant") {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface-elevated via-void to-surface p-6">
        {/* Subtle acoustic soundwave glow */}
        <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.14),transparent_70%)]" />

        {/* Horizontal sound wave lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(rgba(56,189,248,0.4) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono text-cyan">
            <span className="flex items-center gap-2">
              <Mic size={14} />
              <span>ACOUSTIC_SPEECH.ENGINE</span>
            </span>
            <span className="rounded border border-cyan/40 bg-cyan/10 px-2 py-0.5 text-[10px]">
              NLP_PARSER: ACTIVE
            </span>
          </div>

          {/* Animated Equalizer Waveform Art */}
          <div className="relative my-auto flex items-end justify-center gap-2 py-4 h-28">
            {[42, 68, 28, 90, 55, 100, 72, 34, 85, 48, 62, 30].map((height, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${height * 0.4}%`, `${height}%`, `${height * 0.3}%`] }}
                transition={{
                  duration: 1.4 + (i % 4) * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.08,
                }}
                className="w-2.5 rounded-full bg-gradient-to-t from-cyan/30 via-cyan to-ink"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-line/60 pt-3 text-[10px] font-mono text-muted">
            <span>INTENT_MAPPING: MULTI_THREAD</span>
            <span>SAMPLE_RATE: 44.1kHz</span>
          </div>
        </div>
      </div>
    );
  }

  // Collabify AI default
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface-elevated via-void to-surface p-6">
      <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.14),transparent_70%)]" />

      {/* Hex/Lattice Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(167,139,250,0.2) 25%, transparent 25%), linear-gradient(-45deg, rgba(167,139,250,0.2) 25%, transparent 25%)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-mono text-violet">
          <span className="flex items-center gap-2">
            <Users size={14} />
            <span>INTELLIGENCE.COLLABORATIVE</span>
          </span>
          <span className="rounded border border-violet/40 bg-violet/10 px-2 py-0.5 text-[10px]">
            SYNTHESIS: READY
          </span>
        </div>

        {/* Distributed Nodes Network */}
        <div className="relative my-auto flex items-center justify-center py-4">
          <div className="relative flex h-36 w-full max-w-[240px] items-center justify-center">
            {/* Center hub */}
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet bg-surface-elevated text-violet shadow-[0_0_24px_rgba(167,139,250,0.3)]">
              <Layers size={22} />
            </div>

            {/* Orbiting nodes */}
            <div className="absolute left-2 top-3 flex items-center gap-1.5 rounded-lg border border-line bg-surface px-2.5 py-1 text-[9px] font-mono text-ink">
              <Cpu size={10} className="text-violet" />
              <span>FASTAPI.API</span>
            </div>
            <div className="absolute right-2 top-3 flex items-center gap-1.5 rounded-lg border border-line bg-surface px-2.5 py-1 text-[9px] font-mono text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-violet" />
              <span>LLM.PIPELINE</span>
            </div>
            <div className="absolute bottom-2 flex items-center gap-1.5 rounded-lg border border-line bg-surface px-2.5 py-1 text-[9px] font-mono text-muted">
              <span>SHARED_DOC.CANVAS</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-line/60 pt-3 text-[10px] font-mono text-muted">
          <span>MICROSERVICES: MODULAR</span>
          <span>SYNC: REALTIME</span>
        </div>
      </div>
    </div>
  );
}
