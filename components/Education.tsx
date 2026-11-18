"use client";

import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <Section
      id="education"
      index="05"
      label="Academic Background"
      title="Education &amp; Foundations"
      description="Formal training in Artificial Intelligence &amp; Data Science alongside strong foundational mathematics and sciences."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.08}>
            <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-surface p-6 md:p-7 transition-all hover:border-line-strong hover:bg-surface-elevated">
              <div>
                <div className="flex items-center justify-between border-b border-line pb-3 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-accent">
                    <GraduationCap size={15} />
                    <span>{e.period}</span>
                  </div>
                </div>

                <h3 className="mt-4 font-display text-base font-medium leading-snug text-ink md:text-lg">
                  {e.degree}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {e.institution}
                </p>
              </div>

              {e.detail && (
                <div className="mt-6 border-t border-line/60 pt-3">
                  <span className="inline-block rounded border border-line bg-surface-elevated px-2.5 py-1 font-mono text-xs text-accent">
                    {e.detail}
                  </span>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
