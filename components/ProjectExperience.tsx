"use client";

import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { experience } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function ProjectExperience() {
  return (
    <Section
      id="experience"
      index="04"
      label="Work History"
      title="Practical Experience"
      description="Hands-on internship experiences in Python application development, data analysis, and predictive modeling."
    >
      <div className="relative border-l border-line pl-6 md:pl-8 ml-2 md:ml-4 space-y-10">
        {experience.map((exp, i) => (
          <Reveal key={exp.organization + exp.role} delay={i * 0.1} className="relative">
            {/* Timeline node */}
            <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-line-strong bg-void">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>

            <div className="rounded-xl border border-line bg-surface p-6 md:p-8 transition-all hover:border-line-strong hover:bg-surface-elevated">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-4">
                <div className="flex items-center gap-2">
                  <Briefcase size={15} className="text-accent" />
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">
                    {exp.organization}
                  </span>
                </div>
                <span className="rounded-full border border-line bg-surface px-2.5 py-0.5 font-mono text-[11px] text-faint">
                  {exp.period}
                </span>
              </div>

              <h3 className="mt-4 font-display text-lg font-medium text-ink md:text-xl">
                {exp.role}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                {exp.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
