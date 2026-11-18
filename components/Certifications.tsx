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
      description="Verified training milestones, technical courses, and multilingual competencies."
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
            whileHover={{ y: -3, borderColor: "rgba(157, 179, 138, 0.4)" }}
            transition={{ duration: 0.2 }}
            className="flex items-start gap-4 rounded-[28px] border border-line bg-surface p-7 md:p-8 transition-colors hover:bg-surface-elevated/90"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface-elevated text-olive transition-transform duration-200 group-hover:scale-105">
              <Award size={22} strokeWidth={1.8} />
            </div>
            <div className="flex-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                {c.field}
              </span>
              <h3 className="mt-1 font-display text-lg font-bold text-ivory">
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
            whileHover={{ borderColor: "rgba(157, 179, 138, 0.3)" }}
            className="flex flex-wrap items-center gap-3 rounded-[24px] border border-line bg-surface/60 p-7 transition-colors hover:bg-surface-elevated/75"
          >
            <div className="flex items-center gap-2 text-muted mr-3 font-mono text-xs uppercase tracking-wider">
              <Globe size={16} className="text-olive" />
              <span>Languages</span>
            </div>
            {languages.map((l) => (
              <motion.span
                key={l}
                whileHover={{ scale: 1.05, borderColor: "rgba(157, 179, 138, 0.5)" }}
                className="rounded-full border border-line bg-surface-elevated px-4 py-1.5 font-mono text-xs text-ivory transition-colors"
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
