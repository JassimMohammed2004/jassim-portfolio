"use client";

import { Sprout, Eye } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { research, seminars } from "@/data/portfolio";

const ICONS = [Sprout, Eye];

export default function Research() {
  return (
    <Section id="research" index="06" label="Publications" title="Research Lab">
      <div className="grid gap-4 md:grid-cols-2">
        {research.map((r, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-line bg-panel/40 p-7 transition-colors hover:border-line-strong md:p-8">
                <Icon size={20} className="mb-6 text-signal" strokeWidth={1.5} />
                <p className="section-label mb-2">{r.type}</p>
                <h3 className="font-display text-lg leading-snug text-ink md:text-xl">{r.title}</h3>
              </div>
            </Reveal>
          );
        })}
      </div>

      {seminars.length > 0 && (
        <Reveal delay={0.16} className="mt-4">
          <div className="rounded-xl border border-line bg-panel/20 p-7 md:p-8">
            <p className="section-label mb-2">Seminar</p>
            {seminars.map((s) => (
              <div key={s.title} className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg text-ink md:text-xl">{s.title}</h3>
                <span className="font-mono text-xs text-muted">{s.organizer}</span>
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </Section>
  );
}
