"use client";

import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { experience } from "@/data/portfolio";

export default function ProjectExperience() {
  return (
    <Section id="experience" index="04" label="Timeline" title="Field Experience">
      <div className="relative border-l border-line pl-8">
        {experience.map((exp, i) => (
          <Reveal key={exp.organization} delay={i * 0.08} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[41px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-signal bg-void" />
            <p className="section-label mb-2">{exp.type}</p>
            <h3 className="font-display text-xl text-ink md:text-2xl">{exp.role}</h3>
            <p className="mt-1 font-mono text-sm text-muted">{exp.organization}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
