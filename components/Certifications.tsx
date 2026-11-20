"use client";

import { motion } from "framer-motion";
import { Award, Globe, ShieldCheck } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { certifications, languages } from "@/data/portfolio";
import { cardItem, staggerContainer } from "@/lib/animations";

export default function Certifications() {
  return (
    <Section
      id="credentials"
      index="07"
      label="CHAPTER 07 // VALIDATION"
      title="Credentials &amp; Proficiencies"
      description="Verified training milestones, technical certifications, and multilingual competencies."
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
            whileHover={{ y: -3, borderColor: "rgba(157, 179, 138, 0.45)" }}
            transition={{ duration: 0.2 }}
            className="flex items-start gap-5 rounded-[32px] border border-line-strong bg-gradient-to-b from-[#141620] via-[#0d0f15] to-void p-7 md:p-9 transition-colors shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface-elevated text-olive transition-transform duration-200 group-hover:scale-105">
              <Award size={24} strokeWidth={1.8} />
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
            whileHover={{ borderColor: "rgba(157, 179, 138, 0.35)" }}
            className="flex flex-wrap items-center gap-3 rounded-[28px] border border-line-strong bg-gradient-to-b from-[#12141c] to-void p-7 md:p-8 transition-colors shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center gap-2 text-muted mr-3 font-mono text-xs uppercase tracking-wider">
              <Globe size={16} className="text-olive" />
              <span>Languages</span>
            </div>
            {languages.map((l) => (
              <motion.span
                key={l}
                whileHover={{ scale: 1.05, borderColor: "rgba(157, 179, 138, 0.6)" }}
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
