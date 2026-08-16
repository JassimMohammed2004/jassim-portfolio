"use client";

import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" index="05" label="Foundation" title="Academic Core">
      <div className="relative border-l border-line pl-8">
        {education.map((e, i) => (
          <Reveal key={e.degree + e.period} delay={i * 0.08} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[41px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-signal bg-void" />
            <p className="section-label mb-2">{e.period}</p>
            <h3 className="font-display text-xl text-ink md:text-2xl">{e.degree}</h3>
            <p className="mt-1 font-mono text-sm text-muted">{e.institution}</p>
            {e.detail && (
              <span className="mt-3 inline-block rounded border border-line px-2.5 py-1 font-mono text-xs text-signal">
                {e.detail}
              </span>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
