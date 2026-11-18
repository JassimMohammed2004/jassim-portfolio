"use client";

import { motion } from "framer-motion";
import Section from "./ui/Section";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";
import { cardItem, staggerContainer } from "@/lib/animations";

export default function Education() {
  return (
    <Section
      id="education"
      index="05"
      label="Academic Background"
      title="Education &amp; Foundations"
      description="Formal training in Artificial Intelligence &amp; Data Science alongside strong foundational mathematics and sciences."
    >
      <motion.div
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="grid gap-6 md:grid-cols-3"
      >
        {education.map((e) => (
          <motion.div
            key={e.degree}
            variants={cardItem}
            whileHover={{ y: -3, borderColor: "rgba(255, 255, 255, 0.18)" }}
            transition={{ duration: 0.2 }}
            className="flex h-full flex-col justify-between rounded-xl border border-line bg-surface p-6 md:p-7 transition-colors hover:bg-surface-elevated/90"
          >
            <div>
              <div className="flex items-center justify-between border-b border-line pb-3 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-accent">
                  <GraduationCap size={15} />
                  <span>{e.period}</span>
                </div>
              </div>

              <h3 className="mt-4 font-display text-base font-medium leading-snug text-ink md:text-lg">
                {e.degree}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-muted">
                {e.institution}
              </p>
            </div>

            {e.detail && (
              <div className="mt-6 border-t border-line/60 pt-3">
                <span className="inline-block rounded border border-line bg-surface-elevated px-2.5 py-1 font-mono text-xs text-accent">
                  {e.detail}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
