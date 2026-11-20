"use client";

import { motion } from "framer-motion";
import Section from "./ui/Section";
import { education } from "@/data/portfolio";
import { GraduationCap, CheckCircle2, Award } from "lucide-react";
import { cardItem, staggerContainer } from "@/lib/animations";

export default function Education() {
  return (
    <Section
      id="education"
      index="05"
      label="CHAPTER 05 // ACADEMY"
      title="Education &amp; Foundations"
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
              whileHover={{ y: -4, borderColor: isPrimary ? "rgba(157, 179, 138, 0.7)" : "rgba(238, 235, 227, 0.25)" }}
              transition={{ duration: 0.25 }}
              className={`flex h-full flex-col justify-between rounded-[32px] border p-8 transition-all ${
                isPrimary
                  ? "border-olive/50 bg-gradient-to-b from-[#181d28] via-[#0f121a] to-void shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                  : "border-line-strong bg-gradient-to-b from-[#13151d] via-[#0d0f15] to-void"
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-line pb-4 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-olive font-medium">
                    <GraduationCap size={17} />
                    <span>{e.period}</span>
                  </div>
                  <span className="rounded-full border border-olive/30 bg-olive-soft px-3 py-0.5 text-[11px] text-olive font-semibold">
                    {e.statusBadge}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-lg font-bold leading-snug text-ivory md:text-xl">
                  {e.degree}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {e.institution}
                </p>
              </div>

              <div className="mt-8 border-t border-line/60 pt-4">
                <div className="flex items-start gap-2 text-xs text-muted">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-olive" />
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
