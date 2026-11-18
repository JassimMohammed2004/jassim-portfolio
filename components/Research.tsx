"use client";

import { FileText, Presentation } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { research, seminars } from "@/data/portfolio";

export default function Research() {
  return (
    <Section
      id="research"
      index="06"
      label="Scholarly Work"
      title="Research &amp; Academic Presentations"
      description="Exploration into applied machine vision, sustainable agriculture, and technical seminar participation."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {research.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.08}>
            <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-surface p-7 transition-all hover:border-line-strong hover:bg-surface-elevated">
              <div>
                <div className="flex items-center gap-2 text-accent">
                  <FileText size={16} strokeWidth={1.8} />
                  <span className="font-mono text-xs uppercase tracking-wider">
                    {r.type}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-medium leading-snug text-ink md:text-xl">
                  {r.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {r.description}
                </p>
              </div>

              <div className="mt-6 border-t border-line/60 pt-3 font-mono text-[11px] text-faint">
                Academic Presentation
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {seminars.length > 0 && (
        <Reveal delay={0.16} className="mt-6">
          <div className="rounded-xl border border-line bg-surface/60 p-6 md:p-7">
            <div className="flex items-center gap-2 text-muted mb-4 font-mono text-xs uppercase tracking-wider">
              <Presentation size={15} className="text-accent" />
              <span>Conferences &amp; Academic Seminars</span>
            </div>

            {seminars.map((s) => (
              <div
                key={s.title}
                className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3"
              >
                <div>
                  <h4 className="font-display text-base font-medium text-ink">
                    {s.title}
                  </h4>
                  <p className="mt-0.5 text-xs text-muted">Organized by {s.organizer}</p>
                </div>
                <span className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-faint">
                  {s.role}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </Section>
  );
}
