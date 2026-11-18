"use client";

import { motion } from "framer-motion";
import Section from "./ui/Section";
import { skillCategories } from "@/data/portfolio";
import { Code2, BrainCircuit, BarChart3, Server, Wrench } from "lucide-react";
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
      label="Capabilities & Tooling"
      title="Categorized Technology Matrix"
      description="A structured index of validated languages, machine learning frameworks, data libraries, and software engineering tools."
    >
      <motion.div
        variants={staggerContainer(0.08, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((cat) => {
          const Icon = categoryIcons[cat.category] || Code2;
          return (
            <motion.div
              key={cat.category}
              variants={cardItem}
              whileHover={{ y: -3, borderColor: "rgba(255, 255, 255, 0.18)" }}
              transition={{ duration: 0.25 }}
              className="flex h-full flex-col justify-between rounded-xl border border-line bg-surface p-6 transition-colors hover:bg-surface-elevated/90"
            >
              <div>
                {/* Category header */}
                <div className="flex items-center gap-3 border-b border-line pb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-surface-elevated text-accent transition-transform duration-200 group-hover:scale-105">
                    <Icon size={16} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-medium text-ink">
                      {cat.category}
                    </h3>
                    <span className="font-mono text-[10px] text-faint">
                      {cat.skills.length} confirmed tools
                    </span>
                  </div>
                </div>

                {/* Sequentially animated skill badges */}
                <motion.div
                  variants={staggerContainer(0.04, 0.1)}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={badgeItem}
                      whileHover={{ scale: 1.05, borderColor: "rgba(197, 248, 42, 0.5)", color: "#f5f5f5" }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex cursor-default items-center gap-1.5 rounded-md border border-line bg-surface-elevated/80 px-2.5 py-1 font-mono text-xs text-ink/90 transition-colors"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent/80" />
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <div className="mt-6 border-t border-line/40 pt-3 text-[11px] font-mono text-faint">
                Active in ongoing engineering
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
