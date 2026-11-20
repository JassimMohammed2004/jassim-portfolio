"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Mic, Users, Activity, Layers, Cpu, Radio, Sparkles, Terminal, Volume2, ShieldCheck, Binary, Network } from "lucide-react";

interface ProjectArtworkProps {
  id: string;
}

/**
 * Immersive Cinematic Project Installations:
 * 1. Network Intrusion Detection System:
 *    - Deep dark cybersecurity telemetry with tactical grid, red & amber threat vectors,
 *      pulsing perimeter nodes, streaming hex packet feeds, and classified status meters.
 * 2. Alexa AI Voice Assistant:
 *    - Acoustic voice interface with dynamic harmonic sound waves, animated frequency meters,
 *      speech-to-text NLP intent nodes, and warm amber atmospheric glow.
 * 3. Collabify AI:
 *    - Distributed collaborative AI workspace with orbiting microservice satellites (FastAPI, LLM, Realtime Canvas),
 *      chartreuse silk mesh nodes, and multi-tenant telemetry.
 */
export default function ProjectArtwork({ id }: ProjectArtworkProps) {
  if (id === "nids-ml") {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[32px] border border-rose/30 bg-gradient-to-br from-[#2a1725] via-[#1a101c] to-void p-6 md:p-9 shadow-[0_24px_50px_rgba(234,153,156,0.15)]">
        {/* Subtle atmospheric dusty rose flare */}
        <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(234,153,156,0.18),transparent_70%)]" />

        {/* Tactical cyber matrix grid with soft violet tint */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(234,153,156,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(234,153,156,0.2) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono text-rose">
            <span className="flex items-center gap-2">
              <ShieldAlert size={15} className="animate-pulse" />
              <span>DEFENSIVE_TELEMETRY // NIDS.ML</span>
            </span>
            <span className="rounded-full border border-rose/40 bg-rose/10 px-3 py-0.5 text-[10px] text-rose font-semibold tracking-wider">
              STREAM: INSPECTED
            </span>
          </div>

          {/* Central Security Radar Vector Art with Dusty Rose & Violet Accents */}
          <div className="relative my-auto flex items-center justify-center py-4">
            <div className="relative flex h-44 w-44 items-center justify-center">
              {/* Concentric radar rings */}
              <div className="absolute inset-0 rounded-full border border-rose/30 animate-ping opacity-20" />
              <div className="absolute h-36 w-36 rounded-full border border-rose/25" />
              <div className="absolute h-24 w-24 rounded-full border border-dashed border-violet/40" />
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-rose/60 bg-[#251522] text-rose shadow-[0_0_36px_rgba(234,153,156,0.35)]">
                <Activity size={26} />
              </div>

              {/* Data packet satellite dots */}
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 block"
              >
                <span className="absolute top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-rose shadow-[0_0_10px_#ea999c]" />
                <span className="absolute bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_8px_#c4a7e7]" />
              </motion.span>
            </div>
          </div>

          {/* Bottom Telemetry Ticker */}
          <div className="flex items-center justify-between border-t border-rose/20 pt-3 text-[10px] font-mono text-muted">
            <span className="flex items-center gap-1.5 text-rose">
              <Binary size={12} />
              <span>INTRUSION_BENCHMARK: MULTI_CLASS</span>
            </span>
            <span className="text-faint">LATENCY: &lt; 0.04ms</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === "alexa-voice-assistant") {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[32px] border border-peach/30 bg-gradient-to-br from-[#291b26] via-[#1b1222] to-void p-6 md:p-9 shadow-[0_24px_50px_rgba(245,194,165,0.14)]">
        {/* Subtle acoustic peach & sunset orange glow */}
        <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(245,194,165,0.18),transparent_70%)]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `radial-gradient(rgba(245,194,165,0.4) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono text-peach">
            <span className="flex items-center gap-2">
              <Mic size={15} />
              <span>ACOUSTIC_SPECTRUM // VOICE.AI</span>
            </span>
            <span className="rounded-full border border-peach/40 bg-peach/10 px-3 py-0.5 text-[10px] text-peach font-semibold tracking-wider">
              INTENT: PARSED
            </span>
          </div>

          {/* Harmonic Equalizer Waveform Art with Peach to Lavender Gradient */}
          <div className="relative my-auto flex items-end justify-center gap-2.5 py-4 h-36">
            {[40, 72, 28, 95, 58, 100, 82, 35, 90, 48, 75, 38, 62, 25].map((height, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${height * 0.35}%`, `${height}%`, `${height * 0.25}%`] }}
                transition={{
                  duration: 1.4 + (i % 5) * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.06,
                }}
                className="w-2.5 rounded-full bg-gradient-to-t from-orange/30 via-peach to-pink shadow-[0_0_14px_rgba(245,194,165,0.4)]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-peach/20 pt-3 text-[10px] font-mono text-muted">
            <span className="flex items-center gap-1.5 text-peach">
              <Volume2 size={12} />
              <span>SAMPLE_RATE: 44.1kHz // STEREO</span>
            </span>
            <span className="text-faint">NLP_PIPELINE: STREAMING</span>
          </div>
        </div>
      </div>
    );
  }

  // Collabify AI artwork with pastel lavender, soft blue, and pink
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[32px] border border-accent/30 bg-gradient-to-br from-[#1e1c32] via-[#141224] to-void p-6 md:p-9 shadow-[0_24px_50px_rgba(196,167,231,0.15)]">
      <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(196,167,231,0.18),transparent_70%)]" />

      {/* Hexagonal collaborative lattice */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(196,167,231,0.2) 25%, transparent 25%), linear-gradient(-45deg, rgba(196,167,231,0.2) 25%, transparent 25%)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-mono text-accent">
          <span className="flex items-center gap-2">
            <Users size={15} />
            <span>COLLABORATIVE_SYNTHESIS // LLM</span>
          </span>
          <span className="rounded-full border border-accent/40 bg-accent-soft px-3 py-0.5 text-[10px] text-ivory font-semibold tracking-wider">
            CANVAS: SYNCED
          </span>
        </div>

        {/* Distributed Nodes Network Artwork */}
        <div className="relative my-auto flex items-center justify-center py-4">
          <div className="relative flex h-36 w-full max-w-[280px] items-center justify-center">
            {/* Center Core Orchestration Hub */}
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent bg-[#241f3b] text-accent shadow-[0_0_36px_rgba(196,167,231,0.45)]">
              <Layers size={26} />
            </div>

            {/* Orbiting Satellite microservices */}
            <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1 text-[9px] font-mono text-ivory">
              <Cpu size={11} className="text-blue" />
              <span>FASTAPI.SRV</span>
            </div>
            <div className="absolute right-2 top-2 flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1 text-[9px] font-mono text-ivory">
              <Sparkles size={11} className="text-pink" />
              <span>LLM.CONTEXT</span>
            </div>
            <div className="absolute bottom-2 flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1 text-[9px] font-mono text-muted">
              <Radio size={11} className="text-peach" />
              <span>SHARED_CANVAS</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-accent/20 pt-3 text-[10px] font-mono text-muted">
          <span className="flex items-center gap-1.5 text-accent">
            <Network size={12} />
            <span>MICROSERVICES: MODULAR</span>
          </span>
          <span className="text-faint">SYNC_ENGINE: REALTIME</span>
        </div>
      </div>
    </div>
  );
}
