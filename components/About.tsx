"use client";

import { motion } from "framer-motion";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { profile } from "@/data/portfolio";
import { Cpu, Database, Network, ShieldCheck, GraduationCap, CheckCircle, Terminal, Sparkles, Orbit } from "lucide-react";
import { cardItem, staggerContainer } from "@/lib/animations";

const focusAreas = [
  {
    icon: Cpu,
    title: "Artificial Intelligence & Models",
    desc: "Developing high-precision pattern recognition, statistical classifiers, and integrating large language models into modular production pipelines.",
    tag: "TENSORS // PYTORCH",
  },
  {
    icon: Database,
    title: "Data Science & Feature Discovery",
    desc: "End-to-end dataset preprocessing, exploratory mathematical analysis, and structured dataset curation using Python, SQL, NumPy, and Pandas.",
    tag: "ETL // NORMALIZATION",
  },
  {
    icon: Network,
    title: "Software Engineering & APIs",
    desc: "Architecting modular, maintainable codebases with performant REST APIs using FastAPI, Flask, asynchronous workflows, and modern JavaScript.",
    tag: "REST // MICROSERVICES",
  },
  {
    icon: ShieldCheck,
    title: "Defensive Telemetry & Integrity",
    desc: "Focusing on secure data handling, network intrusion detection methodologies, and disciplined software development practices.",
    tag: "SECURITY // TELEMETRY",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      label="CHAPTER 01 // GENESIS"
      title="Engineering Practical Intelligence"
      description="A disciplined engineering mindset blending mathematical data modeling with reliable, scalable software."
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Narrative bio card with architectural gallery layout */}
        <Reveal>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
            className="flex h-full flex-col justify-between rounded-[32px] border border-line-strong bg-gradient-to-b from-surface via-[#2d3034] to-void p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-olive/30 bg-olive-soft px-3.5 py-1 font-mono text-xs text-olive font-medium">
                <GraduationCap size={15} />
                <span>B.Tech AI &amp; Data Science — Graduated</span>
              </div>

              <h3 className="font-display text-2xl font-bold tracking-tight text-ivory md:text-3xl">
                Background &amp; Architectural Focus
              </h3>

              {profile.bio.map((paragraph, idx) => (
                <p key={idx} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}

              <p className="text-sm leading-relaxed text-ivory-muted/90 font-mono">
                My work is driven by the conviction that machine intelligence should be rigorously validated, mathematically sound, and delivered through clean, resilient software architecture.
              </p>
            </div>

            <div className="mt-8 border-t border-line/60 pt-6">
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-faint block uppercase">Degree Status</span>
                  <span className="text-ivory font-semibold mt-1 flex items-center gap-1.5">
                    <CheckCircle size={13} className="text-olive" />
                    Completed &amp; Graduated
                  </span>
                </div>
                <div>
                  <span className="text-faint block uppercase">Location Base</span>
                  <span className="text-ivory font-medium mt-1 block">{profile.location}</span>
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
                whileHover={{ x: 4, borderColor: "rgba(245, 158, 11, 0.4)" }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl border border-line bg-surface/75 p-6 transition-colors hover:bg-surface-elevated"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-elevated text-olive transition-transform duration-300 group-hover:scale-105">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <h4 className="font-display text-base font-semibold text-ivory transition-colors group-hover:text-olive">
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
