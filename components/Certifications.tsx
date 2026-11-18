"use client";

import { Award, Globe } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { certifications, languages } from "@/data/portfolio";

export default function Certifications() {
  return (
    <Section
      id="credentials"
      index="07"
      label="Credentials"
      title="Certifications &amp; Proficiencies"
      description="Verified training milestones, technical courses, and linguistic competencies."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <div className="flex items-start gap-4 rounded-xl border border-line bg-surface p-6 transition-all hover:border-line-strong hover:bg-surface-elevated">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-elevated text-accent">
                <Award size={20} strokeWidth={1.8} />
              </div>
              <div className="flex-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                  {c.field}
                </span>
                <h3 className="mt-1 font-display text-base font-medium text-ink md:text-lg">
                  {c.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-muted">Issued by {c.issuer}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {languages.length > 0 && (
        <Reveal delay={0.2} className="mt-8">
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-line bg-surface/50 p-6">
            <div className="flex items-center gap-2 text-muted mr-2 font-mono text-xs uppercase tracking-wider">
              <Globe size={15} className="text-accent" />
              <span>Languages</span>
            </div>
            {languages.map((l) => (
              <span
                key={l}
                className="rounded-full border border-line bg-surface px-3.5 py-1 font-mono text-xs text-ink/90"
              >
                {l}
              </span>
            ))}
          </div>
        </Reveal>
      )}
    </Section>
  );
}
