"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { certifications, softSkills, languages } from "@/data/portfolio";

function SoftSkillsRing() {
  const [hovered, setHovered] = useState<string | null>(null);
  const radius = 38;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[280px]">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#3a3a40" strokeWidth="0.4" strokeDasharray="1 3" />
        {softSkills.map((skill, i) => {
          const angle = (i / softSkills.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          const isHover = hovered === skill;
          return (
            <g
              key={skill}
              onMouseEnter={() => setHovered(skill)}
              onMouseLeave={() => setHovered(null)}
              tabIndex={0}
              role="button"
              aria-label={skill}
              onFocus={() => setHovered(skill)}
              onBlur={() => setHovered(null)}
              style={{ cursor: "pointer", outline: "none" }}
            >
              <circle cx={x} cy={y} r={isHover ? 5 : 3.4} fill={isHover ? "#e8a33d" : "#141417"} stroke="#e8a33d" strokeWidth="0.5" />
            </g>
          );
        })}
        <text x="50" y="47" textAnchor="middle" fontSize="4.5" fontFamily="var(--font-mono)" fill="#f5f5f4">
          {hovered || "SOFT"}
        </text>
        <text x="50" y="55" textAnchor="middle" fontSize="3" fontFamily="var(--font-mono)" fill="#5a5a60">
          {hovered ? "active" : "skills"}
        </text>
      </svg>
      <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-widest2 text-faint">
        {softSkills.map((s) => (
          <span key={s} className={s === hovered ? "text-signal" : ""}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <Section id="credentials" index="07" label="Verified" title="Credentials">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="flex items-start gap-4 rounded-xl border border-line bg-panel/40 p-6 transition-colors hover:border-line-strong">
                <BadgeCheck size={20} className="mt-0.5 shrink-0 text-signal" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-base text-ink md:text-lg">{c.title}</h3>
                  <p className="mt-1 font-mono text-xs text-muted">{c.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}

          {languages.length > 0 && (
            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-6">
                <span className="section-label">Languages</span>
                {languages.map((l) => (
                  <span key={l} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                    {l}
                  </span>
                ))}
              </div>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.1}>
          <SoftSkillsRing />
        </Reveal>
      </div>
    </Section>
  );
}
