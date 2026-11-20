"use client";

import { motion } from "framer-motion";
import Section from "./ui/Section";
import { skillCategories } from "@/data/portfolio";
import { Code2, BrainCircuit, BarChart3, Server, Wrench, Sparkles, Orbit, Cpu } from "lucide-react";
import { badgeItem, cardItem, staggerContainer } from "@/lib/animations";

const categoryIcons: Record<string, React.ElementType> = {
  "Programming Languages": Code2,
  "AI & Machine Learning": BrainCircuit,
  "Data & Analytics": BarChart3,
  "Backend & Development": Server,
  "Tools & Platforms": Wrench,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="CHAPTER 02 // ARMORY"
      title="Architecture &amp; Intelligence Stack"
      description="An interactive technological matrix indexing validated languages, machine learning frameworks, data science libraries, and system tooling."
    >
      <motion.div
        variants={staggerContainer(0.08, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((cat, idx) => {
          const Icon = categoryIcons[cat.category] || Code2;
          return (
            <motion.div
              key={cat.category}
              variants={cardItem}
              whileHover={{ y: -4, borderColor: "rgba(157, 179, 138, 0.45)" }}
              transition={{ duration: 0.25 }}
              className="flex h-full flex-col justify-between rounded-[28px] border border-line-strong bg-gradient-to-b from-[#141720] via-[#0d0f15] to-void p-7 md:p-8 transition-colors shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
            >
              <div>
                {/* Category header */}
                <div className="flex items-center gap-3 border-b border-line pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-elevated text-olive transition-transform duration-200 group-hover:scale-105">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-ivory">
                      {cat.category}
                    </h3>
                    <span className="font-mono text-[10px] text-faint">
                      {cat.skills.length} verified technologies
                    </span>
                  </div>
                </div>

                {/* Sequentially animated skill badges */}
                <motion.div
                  variants={staggerContainer(0.04, 0.1)}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={badgeItem}
                      whileHover={{ scale: 1.05, borderColor: "rgba(157, 179, 138, 0.7)", color: "#f3f0e8" }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex cursor-default items-center gap-1.5 rounded-lg border border-line bg-surface-elevated/90 px-3 py-1.5 font-mono text-xs text-ivory-muted transition-colors"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-olive" />
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <div className="mt-8 border-t border-line/40 pt-3 flex items-center justify-between text-[11px] font-mono text-faint">
                <span>SECTOR 0{idx + 1}</span>
                <span className="text-olive">VALIDATED</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
