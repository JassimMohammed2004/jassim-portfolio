"use client";

import { motion } from "framer-motion";
import Section from "./ui/Section";
import { experience } from "@/data/portfolio";
import { Briefcase } from "lucide-react";
import { cardItem, staggerContainer } from "@/lib/animations";

export default function ProjectExperience() {
  return (
    <Section
      id="experience"
      index="04"
      label="Work History"
      title="Field Experience &amp; Internships"
      description="Practical industry internships across Python engineering, dataset preprocessing, and predictive data science pipelines."
    >
      <div className="relative border-l border-line pl-6 md:pl-8 ml-2 md:ml-4">
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
          className="space-y-10"
        >
          {experience.map((exp) => (
            <motion.div
              key={exp.organization + exp.role}
              variants={cardItem}
              className="relative"
            >
              {/* Timeline node */}
              <motion.span
                whileHover={{ scale: 1.25 }}
                className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-line-strong bg-void transition-colors hover:border-olive"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-olive" />
              </motion.span>

              <motion.div
                whileHover={{ y: -2, borderColor: "rgba(157, 179, 138, 0.4)" }}
                transition={{ duration: 0.2 }}
                className="rounded-[28px] border border-line bg-surface p-7 md:p-9 transition-colors hover:bg-surface-elevated"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-4">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-olive" />
                    <span className="font-mono text-xs uppercase tracking-wider text-ivory font-medium">
                      {exp.organization}
                    </span>
                  </div>
                  <span className="rounded-full border border-line bg-surface-elevated px-3 py-0.5 font-mono text-[11px] text-muted">
                    {exp.period}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-ivory md:text-2xl">
                  {exp.role}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
