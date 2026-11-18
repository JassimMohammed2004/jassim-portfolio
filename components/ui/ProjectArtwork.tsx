"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Mic, Users, Activity, Layers, Cpu, Radio, Sparkles } from "lucide-react";

interface ProjectArtworkProps {
  id: string;
}

/**
 * High-End Studio Project Artwork Installations.
 * Bespoke artistic composition for each of the three systems:
 * 1. NIDS: Tactical radar telemetry sculpture with orbital packet sweeps & security vectors.
 * 2. Alexa Voice: Acoustic harmonic soundboard with pulsing gold/olive waveforms & frequency meters.
 * 3. Collabify AI: Distributed architectural node grid with floating microservice satellites.
 */
export default function ProjectArtwork({ id }: ProjectArtworkProps) {
  if (id === "nids-ml") {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-line-strong bg-gradient-to-br from-[#12151b] via-[#090a0d] to-void p-6 md:p-8">
        {/* Subtle olive radar illumination */}
        <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(157,179,138,0.14),transparent_70%)]" />

        {/* Tactical architectural grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(243,240,232,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,240,232,0.12) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono text-olive">
            <span className="flex items-center gap-2">
              <ShieldAlert size={15} />
              <span>TELEMETRY_PIPELINE.SEC</span>
            </span>
            <span className="rounded-full border border-olive/30 bg-olive-soft px-2.5 py-0.5 text-[10px] text-ivory">
              CLASSIFIER: ACTIVE
            </span>
          </div>

          {/* Central Security Radar Vector Art */}
          <div className="relative my-auto flex items-center justify-center py-4">
            <div className="relative flex h-40 w-40 items-center justify-center">
              {/* Concentric radar rings */}
              <div className="absolute inset-0 rounded-full border border-olive/30 animate-ping opacity-25" />
              <div className="absolute h-32 w-32 rounded-full border border-line-strong" />
              <div className="absolute h-20 w-20 rounded-full border border-dashed border-olive/45" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-olive bg-surface-elevated text-olive shadow-[0_0_28px_rgba(157,179,138,0.35)]">
                <Activity size={24} />
              </div>

              {/* Data packet satellite dots */}
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 block"
              >
                <span className="absolute top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_8px_#cce885]" />
              </motion.span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-line/60 pt-3 text-[10px] font-mono text-muted">
            <span>MODEL: SCALED_SVM + RANDOM_FOREST</span>
            <span>LATENCY: &lt; 0.05ms</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === "alexa-voice-assistant") {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-line-strong bg-gradient-to-br from-[#12151b] via-[#090a0d] to-void p-6 md:p-8">
        {/* Subtle acoustic amber/olive aura */}
        <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(223,155,86,0.12),transparent_70%)]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `radial-gradient(rgba(223,155,86,0.35) 1px, transparent 1px)`,
            backgroundSize: "26px 26px",
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono text-amber">
            <span className="flex items-center gap-2">
              <Mic size={15} />
              <span>ACOUSTIC_INFERENCE.NLP</span>
            </span>
            <span className="rounded-full border border-amber/30 bg-amber/10 px-2.5 py-0.5 text-[10px] text-ivory">
              LEXICAL PARSER
            </span>
          </div>

          {/* Harmonic Equalizer Waveform Art */}
          <div className="relative my-auto flex items-end justify-center gap-2.5 py-4 h-32">
            {[38, 64, 25, 92, 55, 100, 78, 30, 88, 45, 70, 35].map((height, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${height * 0.35}%`, `${height}%`, `${height * 0.25}%`] }}
                transition={{
                  duration: 1.5 + (i % 4) * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.07,
                }}
                className="w-2.5 rounded-full bg-gradient-to-t from-amber/20 via-amber to-ivory shadow-[0_0_12px_rgba(223,155,86,0.3)]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-line/60 pt-3 text-[10px] font-mono text-muted">
            <span>INTENT_MAPPING: REALTIME</span>
            <span>SAMPLE_RATE: 44.1kHz</span>
          </div>
        </div>
      </div>
    );
  }

  // Collabify AI artwork
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-line-strong bg-gradient-to-br from-[#12151b] via-[#090a0d] to-void p-6 md:p-8">
      <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(204,232,133,0.12),transparent_70%)]" />

      {/* Hexagonal mesh pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(204,232,133,0.2) 25%, transparent 25%), linear-gradient(-45deg, rgba(204,232,133,0.2) 25%, transparent 25%)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-mono text-accent">
          <span className="flex items-center gap-2">
            <Users size={15} />
            <span>DISTRIBUTED_SYNTHESIS</span>
          </span>
          <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 text-[10px] text-ivory">
            LLM AGENTIC
          </span>
        </div>

        {/* Distributed Nodes Network Artwork */}
        <div className="relative my-auto flex items-center justify-center py-4">
          <div className="relative flex h-36 w-full max-w-[260px] items-center justify-center">
            {/* Center Core Hub */}
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent bg-surface-elevated text-accent shadow-[0_0_32px_rgba(204,232,133,0.35)]">
              <Layers size={26} />
            </div>

            {/* Orbiting Satellite microservices */}
            <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-lg border border-line bg-surface px-2.5 py-1 text-[9px] font-mono text-ivory">
              <Cpu size={10} className="text-accent" />
              <span>FASTAPI</span>
            </div>
            <div className="absolute right-2 top-2 flex items-center gap-1.5 rounded-lg border border-line bg-surface px-2.5 py-1 text-[9px] font-mono text-ivory">
              <Sparkles size={10} className="text-olive" />
              <span>DOC.LLM</span>
            </div>
            <div className="absolute bottom-2 flex items-center gap-1.5 rounded-lg border border-line bg-surface px-2.5 py-1 text-[9px] font-mono text-muted">
              <Radio size={10} className="text-amber" />
              <span>REALTIME.SYNC</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-line/60 pt-3 text-[10px] font-mono text-muted">
          <span>PIPELINE: ASYNC_ORCHESTRATOR</span>
          <span>STATE: MULTI_TENANT</span>
        </div>
      </div>
    </div>
  );
}
