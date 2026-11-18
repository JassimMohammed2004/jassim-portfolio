"use client";

import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { skillCategories } from "@/data/portfolio";
import { Code2, BrainCircuit, BarChart3, Server, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "Programming Languages": Code2,
  "AI & Machine Learning": BrainCircuit,
  "Data & Analytics": BarChart3,
  "Backend & Development": Server,
  "Tools & Platforms": Wrench,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="Capabilities & Tooling"
      title="Categorized Technology Matrix"
      description="A structured index of validated languages, machine learning frameworks, data libraries, and software engineering tools."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, idx) => {
          const Icon = categoryIcons[cat.category] || Code2;
          return (
            <Reveal key={cat.category} delay={idx * 0.06}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-surface p-6 transition-all hover:border-line-strong hover:bg-surface-elevated">
                <div>
                  {/* Category header */}
                  <div className="flex items-center gap-3 border-b border-line pb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-surface-elevated text-accent">
                      <Icon size={16} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-medium text-ink">
                        {cat.category}
                      </h3>
                      <span className="font-mono text-[10px] text-faint">
                        {cat.skills.length} confirmed tools
                      </span>
                    </div>
                  </div>

                  {/* Skills badge list */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface-elevated/80 px-2.5 py-1 font-mono text-xs text-ink/90 transition-colors hover:border-accent/40 hover:text-ink"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent/70" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-line/40 pt-3 text-[11px] font-mono text-faint">
                  Active in ongoing engineering
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
