"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ShieldAlert, Mic, Users } from "lucide-react";
import Section from "./ui/Section";
import Magnetic from "./ui/Magnetic";
import { projects, ProjectItem } from "@/data/portfolio";
import { cardItem, staggerContainer } from "@/lib/animations";

const projectIcons: Record<string, React.ElementType> = {
  "nids-ml": ShieldAlert,
  "alexa-voice-assistant": Mic,
  "collabify-ai": Users,
};

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const Icon = projectIcons[project.id] || ShieldAlert;
  const cardRef = useRef<HTMLDivElement>(null);

  // Subtle 3D tilt tracking using spring physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      variants={cardItem}
      style={{ perspective: 800 }}
      data-cursor="card"
      className="project-card h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-accent/40 hover:bg-surface-elevated md:p-8"
      >
        {/* Subtle accent corner glow indicator on hover */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10">
          {/* Top category and index badge */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface-elevated text-accent transition-transform duration-300 group-hover:scale-105">
                <Icon size={16} strokeWidth={1.8} />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                {project.category}
              </span>
            </div>
            <span className="font-mono text-xs text-faint">0{index + 1}</span>
          </div>

          {/* Project Title */}
          <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-ink transition-colors duration-200 group-hover:text-accent md:text-2xl">
            {project.title}
          </h3>

          {/* Clear Description */}
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          {/* Technical Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-5 space-y-1.5 border-t border-line/60 pt-4">
              <span className="block font-mono text-[10px] uppercase tracking-wider text-faint">
                Key Architectural Highlights
              </span>
              <ul className="space-y-1 text-xs text-muted/90">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent/80" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Technology Stack & Action links */}
        <div className="relative z-10 mt-8 border-t border-line pt-6">
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-line bg-surface/80 px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:text-ink hover:border-line-strong"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            {/* GitHub repo button with magnetic pull */}
            {project.githubUrl ? (
              <Magnetic strength={0.22}>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-1.5 text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <Github size={13} />
                  <span>Repository</span>
                  <ArrowUpRight size={12} />
                </motion.a>
              </Magnetic>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-faint">
                <Github size={13} />
                <span>Repo in staging</span>
              </span>
            )}

            {/* Live demo button with magnetic pull */}
            {project.liveUrl ? (
              <Magnetic strength={0.22}>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent transition-colors hover:text-accent-hover"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight size={13} />
                </motion.a>
              </Magnetic>
            ) : (
              <span className="text-[11px] text-faint uppercase tracking-wider">
                Active System
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      label="Featured Systems"
      title="Engineering Project Showcase"
      description="Selected systems highlighting practical machine learning, voice AI, and intelligent collaboration architecture."
    >
      <motion.div
        variants={staggerContainer(0.12, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p, idx) => (
          <ProjectCard key={p.id} project={p} index={idx} />
        ))}
      </motion.div>
    </Section>
  );
}
