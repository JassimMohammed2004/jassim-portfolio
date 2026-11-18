"use client";

import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { profile } from "@/data/portfolio";
import { Cpu, Database, Network, ShieldCheck } from "lucide-react";

const focusAreas = [
  {
    icon: Cpu,
    title: "Machine Learning & AI",
    desc: "Developing pattern recognition models, predictive algorithms, and integrating LLMs into robust software applications.",
  },
  {
    icon: Database,
    title: "Data Science & Pipelines",
    desc: "End-to-end data processing, feature engineering, exploratory analysis, and structured dataset curation using Python and SQL.",
  },
  {
    icon: Network,
    title: "Software Engineering",
    desc: "Architecting modular, maintainable codebases with performant REST APIs using FastAPI, Flask, and modern JavaScript.",
  },
  {
    icon: ShieldCheck,
    title: "Practical Security & Integrity",
    desc: "Focusing on secure data handling, network intrusion detection methodologies, and disciplined software development practices.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      label="Profile & Philosophy"
      title="Engineering Practical Intelligence"
      description="A disciplined engineering approach blending mathematical data models with reliable, scalable software."
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Narrative bio */}
        <Reveal className="space-y-6">
          <div className="rounded-xl border border-line bg-surface p-7 md:p-9 space-y-5">
            <h3 className="font-display text-xl font-medium text-ink">
              About Jassim Mohammed
            </h3>
            {profile.bio.map((paragraph, idx) => (
              <p key={idx} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-line">
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-faint block uppercase">Degree Target</span>
                  <span className="text-ink font-medium mt-1 block">B.Tech AI &amp; DS (2026)</span>
                </div>
                <div>
                  <span className="text-faint block uppercase">Current Location</span>
                  <span className="text-ink font-medium mt-1 block">{profile.location}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Pillars / Technical Foundations */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.title} delay={idx * 0.08}>
                <div className="rounded-xl border border-line bg-surface/50 p-6 transition-all hover:border-line-strong hover:bg-surface-elevated">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-accent">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <h4 className="font-display text-base font-medium text-ink">
                      {area.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {area.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
