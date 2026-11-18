"use client";

import { motion } from "framer-motion";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { profile } from "@/data/portfolio";
import { Cpu, Database, Network, ShieldCheck, GraduationCap, CheckCircle } from "lucide-react";
import { cardItem, staggerContainer } from "@/lib/animations";

const focusAreas = [
  {
    icon: Cpu,
    title: "Machine Learning & AI",
    desc: "Developing pattern recognition models, predictive algorithms, and integrating LLMs into robust software applications.",
    tag: "Tensor & Statistical Models",
  },
  {
    icon: Database,
    title: "Data Science & Pipelines",
    desc: "End-to-end data processing, feature engineering, exploratory analysis, and structured dataset curation using Python and SQL.",
    tag: "ETL & Feature Discovery",
  },
  {
    icon: Network,
    title: "Software Engineering",
    desc: "Architecting modular, maintainable codebases with performant REST APIs using FastAPI, Flask, and modern JavaScript.",
    tag: "Microservices & APIs",
  },
  {
    icon: ShieldCheck,
    title: "Practical Security & Integrity",
    desc: "Focusing on secure data handling, network intrusion detection methodologies, and disciplined software development practices.",
    tag: "Defensive Telemetry",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      label="Profile & Philosophy"
      title="Engineering Practical Intelligence"
      description="A disciplined engineering mindset blending mathematical data modeling with reliable, scalable software."
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Narrative bio card with editorial layout */}
        <Reveal>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
            className="flex h-full flex-col justify-between rounded-3xl border border-line-strong bg-gradient-to-b from-surface via-surface to-void p-7 md:p-10 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-elevated px-3 py-1 font-mono text-xs text-accent">
                <GraduationCap size={14} />
                <span>B.Tech AI &amp; Data Science — Graduated</span>
              </div>

              <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Background &amp; Architectural Focus
              </h3>

              {profile.bio.map((paragraph, idx) => (
                <p key={idx} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 border-t border-line/60 pt-6">
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-faint block uppercase">Degree Status</span>
                  <span className="text-ink font-semibold mt-1 flex items-center gap-1.5">
                    <CheckCircle size={13} className="text-accent" />
                    Completed &amp; Graduated
                  </span>
                </div>
                <div>
                  <span className="text-faint block uppercase">Location Base</span>
                  <span className="text-ink font-medium mt-1 block">{profile.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* Pillars / Technical Foundations with staggered appearance */}
        <motion.div
          variants={staggerContainer(0.09, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
        >
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                variants={cardItem}
                whileHover={{ x: 4, borderColor: "rgba(197, 248, 42, 0.4)" }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl border border-line bg-surface/70 p-6 transition-colors hover:bg-surface-elevated"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-elevated text-accent transition-transform duration-300 group-hover:scale-105">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <h4 className="font-display text-base font-semibold text-ink transition-colors group-hover:text-accent">
                      {area.title}
                    </h4>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                    {area.tag}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {area.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
