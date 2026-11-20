"use client";

import { motion } from "framer-motion";
import { FileText, Presentation, Microscope, ExternalLink } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { research, seminars } from "@/data/portfolio";
import { cardItem, staggerContainer } from "@/lib/animations";

export default function Research() {
  return (
    <Section
      id="research"
      index="06"
      label="CHAPTER 06 // INQUIRY"
      title="Research Lab &amp; Publications"
      description="Applied machine vision architectures, sustainable agricultural AI models, and technical symposium participation."
    >
      <motion.div
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="grid gap-6 md:grid-cols-2"
      >
        {research.map((r, idx) => (
          <motion.div
            key={r.title}
            variants={cardItem}
            whileHover={{ y: -4, borderColor: "rgba(157, 179, 138, 0.45)" }}
            transition={{ duration: 0.2 }}
            className="flex h-full flex-col justify-between rounded-[32px] border border-line-strong bg-gradient-to-b from-[#141620] via-[#0d0f15] to-void p-8 md:p-10 transition-colors shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-olive font-medium">
                  <FileText size={17} strokeWidth={1.8} />
                  <span className="font-mono text-xs uppercase tracking-wider">
                    {r.type}
                  </span>
                </div>
                <span className="font-mono text-xs text-faint">PAPER 0{idx + 1}</span>
              </div>

              <h3 className="mt-5 font-display text-xl font-bold leading-snug text-ivory md:text-2xl">
                {r.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {r.description}
              </p>
            </div>

            <div className="mt-8 border-t border-line/60 pt-4 flex items-center justify-between font-mono text-[11px] text-faint">
              <span>ACADEMIC DEFENSE</span>
              <span className="text-olive">PRESENTED</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {seminars.length > 0 && (
        <Reveal delay={0.16} className="mt-8">
          <motion.div
            whileHover={{ borderColor: "rgba(157, 179, 138, 0.35)" }}
            className="rounded-[32px] border border-line-strong bg-gradient-to-b from-[#12141c] to-void p-7 md:p-10 transition-colors shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center gap-2 text-muted mb-4 font-mono text-xs uppercase tracking-wider">
              <Presentation size={17} className="text-olive" />
              <span>Conferences &amp; Academic Symposia</span>
            </div>

            {seminars.map((s) => (
              <div
                key={s.title}
                className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4"
              >
                <div>
                  <h4 className="font-display text-lg font-bold text-ivory">
                    {s.title}
                  </h4>
                  <p className="mt-0.5 text-xs text-muted">Organized by {s.organizer}</p>
                </div>
                <span className="rounded-full border border-olive/30 bg-olive-soft px-4 py-1 font-mono text-xs text-olive font-medium">
                  {s.role}
                </span>
              </div>
            ))}
          </motion.div>
        </Reveal>
      )}
    </Section>
  );
}
