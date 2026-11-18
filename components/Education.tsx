"use client";

import { motion } from "framer-motion";
import Section from "./ui/Section";
import { education } from "@/data/portfolio";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { cardItem, staggerContainer } from "@/lib/animations";

export default function Education() {
  return (
    <Section
      id="education"
      index="05"
      label="Academic Pedigree"
      title="Education &amp; Academic Milestones"
      description="Formal graduation in Artificial Intelligence &amp; Data Science complemented by consistent mathematical foundations."
    >
      <motion.div
        variants={staggerContainer(0.12, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="grid gap-6 md:grid-cols-3"
      >
        {education.map((e, idx) => {
          const isPrimary = idx === 0;

          return (
            <motion.div
              key={e.degree}
              variants={cardItem}
              whileHover={{ y: -4, borderColor: isPrimary ? "rgba(197, 248, 42, 0.6)" : "rgba(255, 255, 255, 0.2)" }}
              transition={{ duration: 0.25 }}
              className={`flex h-full flex-col justify-between rounded-3xl border p-7 transition-all ${
                isPrimary
                  ? "border-accent/40 bg-gradient-to-b from-surface-elevated via-surface to-void shadow-[0_12px_32px_rgba(197,248,42,0.12)]"
                  : "border-line bg-surface/80"
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-line pb-4 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-accent">
                    <GraduationCap size={16} />
                    <span className="font-semibold">{e.period}</span>
                  </div>
                  <span className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-[11px] text-ink/90 font-medium">
                    {e.statusBadge}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-ink md:text-xl">
                  {e.degree}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {e.institution}
                </p>
              </div>

              <div className="mt-6 border-t border-line/60 pt-4">
                <div className="flex items-start gap-2 text-xs text-muted">
                  <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-accent" />
                  <span>{e.detail}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
