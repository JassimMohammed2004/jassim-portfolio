"use client";

import { motion } from "framer-motion";
import { Award, Globe } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { certifications, languages } from "@/data/portfolio";
import { cardItem, staggerContainer } from "@/lib/animations";

export default function Certifications() {
  return (
    <Section
      id="credentials"
      index="07"
      label="Credentials"
      title="Certifications &amp; Proficiencies"
      description="Verified training milestones, technical courses, and linguistic competencies."
    >
      <motion.div
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="grid gap-6 md:grid-cols-2"
      >
        {certifications.map((c) => (
          <motion.div
            key={c.title}
            variants={cardItem}
            whileHover={{ y: -3, borderColor: "rgba(255, 255, 255, 0.18)" }}
            transition={{ duration: 0.2 }}
            className="flex items-start gap-4 rounded-xl border border-line bg-surface p-6 transition-colors hover:bg-surface-elevated/90"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-elevated text-accent transition-transform duration-200 group-hover:scale-105">
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
          </motion.div>
        ))}
      </motion.div>

      {languages.length > 0 && (
        <Reveal delay={0.2} className="mt-8">
          <motion.div
            whileHover={{ borderColor: "rgba(255, 255, 255, 0.18)" }}
            className="flex flex-wrap items-center gap-3 rounded-xl border border-line bg-surface/50 p-6 transition-colors hover:bg-surface-elevated/70"
          >
            <div className="flex items-center gap-2 text-muted mr-2 font-mono text-xs uppercase tracking-wider">
              <Globe size={15} className="text-accent" />
              <span>Languages</span>
            </div>
            {languages.map((l) => (
              <motion.span
                key={l}
                whileHover={{ scale: 1.05, borderColor: "rgba(197, 248, 42, 0.5)" }}
                className="rounded-full border border-line bg-surface px-3.5 py-1 font-mono text-xs text-ink/90 transition-colors"
              >
                {l}
              </motion.span>
            ))}
          </motion.div>
        </Reveal>
      )}
    </Section>
  );
}
