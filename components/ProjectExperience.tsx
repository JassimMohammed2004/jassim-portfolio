"use client";

import { motion } from "framer-motion";
import Section from "./ui/Section";
import { experience } from "@/data/portfolio";
import { Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import { cardItem, staggerContainer } from "@/lib/animations";

export default function ProjectExperience() {
  return (
    <Section
      id="experience"
      index="04"
      label="CHAPTER 04 // ODYSSEY"
      title="Field Journey &amp; Milestones"
      description="Practical industry internships across Python engineering, dataset preprocessing, and predictive data science pipelines."
    >
      <div className="relative border-l border-line pl-6 md:pl-10 ml-2 md:ml-4">
        {/* Animated timeline vertical beam */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -left-[1px] top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-olive via-olive/30 to-transparent"
        />

        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="space-y-12"
        >
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.organization + exp.role}
              variants={cardItem}
              className="relative"
            >
              {/* Timeline node */}
              <motion.span
                whileHover={{ scale: 1.3 }}
                className="absolute -left-[31px] md:-left-[43px] top-2 flex h-4 w-4 items-center justify-center rounded-full border border-line-strong bg-void transition-colors hover:border-olive"
              >
                <span className="h-2 w-2 rounded-full bg-olive" />
              </motion.span>

              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(157, 179, 138, 0.45)" }}
                transition={{ duration: 0.2 }}
                className="rounded-[32px] border border-line-strong bg-gradient-to-b from-[#14161f] via-[#0d0f15] to-void p-7 md:p-10 transition-colors shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-4">
                  <div className="flex items-center gap-2.5">
                    <Briefcase size={17} className="text-olive" />
                    <span className="font-mono text-xs uppercase tracking-wider text-ivory font-semibold">
                      {exp.organization}
                    </span>
                  </div>
                  <span className="rounded-full border border-olive/30 bg-olive-soft px-3.5 py-0.5 font-mono text-[11px] text-olive font-medium">
                    {exp.period}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="font-mono text-xs text-faint">STAGE 0{idx + 1} &mdash;</span>
                  <h3 className="font-display text-xl font-bold text-ivory md:text-2xl">
                    {exp.role}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted max-w-2xl">
                  {exp.description}
                </p>

                <div className="mt-6 pt-4 border-t border-line/40 flex items-center gap-2 text-xs font-mono text-muted">
                  <CheckCircle2 size={13} className="text-olive" />
                  <span>Verified internship training &amp; practical implementation</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
