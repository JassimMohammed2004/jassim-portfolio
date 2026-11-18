"use client";

import { motion } from "framer-motion";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { profile } from "@/data/portfolio";
import { Cpu, Database, Network, ShieldCheck } from "lucide-react";
import { cardItem, staggerContainer } from "@/lib/animations";

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
        {/* Narrative bio card */}
        <Reveal>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-line bg-surface p-7 md:p-9 space-y-5 transition-colors hover:border-line-strong hover:bg-surface-elevated/70"
          >
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
                whileHover={{ x: 3, borderColor: "rgba(255, 255, 255, 0.18)" }}
                transition={{ duration: 0.25 }}
                className="group rounded-xl border border-line bg-surface/60 p-6 transition-colors hover:bg-surface-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-accent transition-transform duration-300 group-hover:scale-105">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <h4 className="font-display text-base font-medium text-ink transition-colors group-hover:text-accent">
                    {area.title}
                  </h4>
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
