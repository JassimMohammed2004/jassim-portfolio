"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { skills, interests } from "@/data/portfolio";

type Node = {
  id: string;
  label: string;
  kind: "skill" | "interest";
  x: number;
  y: number;
};

const skillNodes: Node[] = skills.map((s, i) => ({
  id: `skill-${i}`,
  label: s,
  kind: "skill",
  x: 30,
  y: 30 + i * 40,
}));

const interestNodes: Node[] = interests.map((s, i) => ({
  id: `interest-${i}`,
  label: s,
  kind: "interest",
  x: 72,
  y: 8 + i * 28,
}));

const nodes = [...skillNodes, ...interestNodes];
const edges = skillNodes.flatMap((s) => interestNodes.map((n) => [s.id, n.id] as const));

export default function Skills() {
  const [active, setActive] = useState<Node | null>(null);
  const related = active
    ? edges
        .filter(([a, b]) => a === active.id || b === active.id)
        .map(([a, b]) => (a === active.id ? b : a))
    : [];

  return (
    <Section id="skills" index="02" label="Capabilities" title="Intelligence Stack">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="relative aspect-[16/11] w-full rounded-lg border border-line bg-panel/40 p-4">
            <svg viewBox="0 0 100 70" className="h-full w-full overflow-visible" role="img" aria-label="Skill and interest graph">
              {edges.map(([a, b], i) => {
                const na = nodes.find((n) => n.id === a)!;
                const nb = nodes.find((n) => n.id === b)!;
                const isRelated = active && (a === active.id || b === active.id);
                return (
                  <line
                    key={i}
                    x1={na.x}
                    y1={na.y}
                    x2={nb.x}
                    y2={nb.y}
                    stroke={isRelated ? "#e8a33d" : "#3a3a40"}
                    strokeWidth={isRelated ? 0.35 : 0.18}
                    opacity={isRelated ? 0.9 : 0.5}
                  />
                );
              })}

              {nodes.map((n) => {
                const isActive = active?.id === n.id;
                const isRelated = related.includes(n.id);
                const dim = active && !isActive && !isRelated;
                return (
                  <g
                    key={n.id}
                    onMouseEnter={() => setActive(n)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(n)}
                    onBlur={() => setActive(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={n.label}
                    style={{ cursor: "pointer", outline: "none" }}
                  >
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={n.kind === "skill" ? 2.6 : 1.9}
                      fill={isActive || isRelated ? "#e8a33d" : "#f5f5f4"}
                      opacity={dim ? 0.3 : 1}
                    />
                    <text
                      x={n.x}
                      y={n.kind === "skill" ? n.y - 5 : n.y + 4.5}
                      textAnchor="middle"
                      fontSize={n.kind === "skill" ? 3.4 : 2.6}
                      fontFamily="var(--font-mono)"
                      fill={dim ? "#5a5a60" : "#f5f5f4"}
                      opacity={dim ? 0.5 : 1}
                    >
                      {n.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex flex-col justify-center">
            <p className="section-label mb-3">
              {active ? (active.kind === "skill" ? "Core skill" : "Area of interest") : "Explore the graph"}
            </p>
            <motion.h3
              key={active?.id || "default"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3 font-display text-2xl text-ink md:text-3xl"
            >
              {active ? active.label : "Hover a node"}
            </motion.h3>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {active
                ? active.kind === "skill"
                  ? `${active.label} sits at the center of Jassim's technical toolkit and connects across his areas of interest.`
                  : `${active.label} is one of Jassim's areas of interest, connected to the core skills that support it.`
                : "Move your cursor over any node to see how skills and interests connect."}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
