"use client";

import { useState, useRef, MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { projects } from "@/data/portfolio";

function Pipeline({ steps }: { steps: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-muted">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span className="rounded border border-line px-2.5 py-1.5 text-ink">{step}</span>
          {i < steps.length - 1 && (
            <motion.span
              className="text-signal"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.25 }}
            >
              →
            </motion.span>
          )}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project, onOpen }: { project: (typeof projects)[number]; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const relY = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setOffset({ x: relX * 10, y: relY * 10 });
  }

  return (
    <Reveal>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => setOffset({ x: 0, y: 0 })}
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        onClick={onOpen}
        data-cursor="OPEN"
        className="group cursor-pointer rounded-xl border border-line bg-panel/50 p-7 transition-colors hover:border-line-strong md:p-10"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs text-faint">{project.index}</span>
          <span className="flex items-center gap-2 rounded-full border border-signal-dim bg-signal-soft px-3 py-1 font-mono text-[10px] uppercase tracking-widest2 text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            {project.statusLabel}
          </span>
        </div>

        <h3 className="mt-6 max-w-lg font-display text-2xl font-medium leading-snug text-ink transition-colors group-hover:text-signal md:text-3xl">
          {project.title}
        </h3>

        {project.description && (
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{project.description}</p>
        )}

        {project.pipeline && <Pipeline steps={project.pipeline} />}

        <div className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest2 text-muted group-hover:text-ink">
          View details <ArrowUpRight size={13} />
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === openId) || null;

  return (
    <Section id="projects" index="03" label="Systems" title="Selected Systems">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={() => setOpenId(p.id)} />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-void/85 p-4 backdrop-blur-sm"
            onClick={() => setOpenId(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl rounded-xl border border-line-strong bg-surface p-8 md:p-10"
            >
              <button
                onClick={() => setOpenId(null)}
                aria-label="Close project details"
                className="absolute right-6 top-6 text-muted hover:text-ink"
              >
                <X size={18} />
              </button>
              <span className="font-mono text-xs text-faint">{active.index}</span>
              <h3 className="mt-3 font-display text-2xl text-ink md:text-3xl">{active.title}</h3>
              <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-signal-dim bg-signal-soft px-3 py-1 font-mono text-[10px] uppercase tracking-widest2 text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                {active.statusLabel}
              </span>
              {active.description && (
                <p className="mt-5 text-sm leading-relaxed text-muted">{active.description}</p>
              )}
              {active.pipeline && <Pipeline steps={active.pipeline} />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
