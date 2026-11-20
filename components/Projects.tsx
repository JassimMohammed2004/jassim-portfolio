"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, CheckCircle2, Terminal } from "lucide-react";
import Section from "./ui/Section";
import Magnetic from "./ui/Magnetic";
import ProjectArtwork from "./ui/ProjectArtwork";
import { projects, ProjectItem } from "@/data/portfolio";
import { cardItem, staggerContainer } from "@/lib/animations";

function CinematicProjectStage({ project, index }: { project: ProjectItem; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      variants={cardItem}
      data-cursor="card"
      className="project-card group relative overflow-hidden rounded-[28px] border border-line-strong bg-gradient-to-b from-surface via-[#2d3035] to-void p-6 md:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-line-strong"
    >
      <div className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-14 ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}>
        {/* Visual Artwork Installation (7 cols) */}
        <div className="lg:col-span-7">
          <motion.div
            whileHover={{ scale: 1.018 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-2xl shadow-2xl"
          >
            <ProjectArtwork id={project.id} />
          </motion.div>
        </div>

        {/* Text Editorial Details (5 cols) */}
        <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
          <div>
            {/* Act / Chapter & Category tag */}
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-line-strong bg-surface-elevated font-semibold text-accent">
                0{index + 1}
              </span>
              <span className="font-semibold tracking-wider text-accent uppercase">
                {project.chapter}
              </span>
            </div>

            {/* Title & Subtitle with Expressive Typography */}
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ivory sm:text-3xl md:text-4xl">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-accent font-medium">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            {/* Architectural Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-6 space-y-2 border-t border-line/60 pt-4">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-faint">
                  Architectural Foundation
                </span>
                <ul className="space-y-1.5 text-xs text-muted/90">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Tech Badges & Actions */}
          <div className="border-t border-line/60 pt-5">
            <div className="mb-6 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-line bg-surface-elevated/90 px-3 py-1 font-mono text-[11px] text-ivory-muted transition-colors hover:text-ivory hover:border-accent/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              {/* GitHub action button */}
              {project.githubUrl ? (
                <Magnetic strength={0.2}>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 font-bold text-[#1e2024] transition-colors hover:bg-accent-hover"
                  >
                    <Github size={14} />
                    <span>View Repository</span>
                    <ArrowUpRight size={13} />
                  </motion.a>
                </Magnetic>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3.5 py-2 text-faint">
                  <Github size={13} />
                  <span>Repository in Staging</span>
                </span>
              )}

              {/* Live demo button */}
              {project.liveUrl && (
                <Magnetic strength={0.2}>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3.5 py-2 text-accent transition-colors hover:border-accent"
                  >
                    <span>Live Demonstration</span>
                    <ExternalLink size={13} />
                  </motion.a>
                </Magnetic>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      label="CHAPTER 03 // INSTALLATIONS"
      title="Interactive Systems Showcase"
      description="Three distinct production-grade systems spanning cybersecurity network telemetry, acoustic conversational AI, and distributed knowledge synchronization."
    >
      <motion.div
        variants={staggerContainer(0.15, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="space-y-16"
      >
        {projects.map((p, idx) => (
          <CinematicProjectStage key={p.id} project={p} index={idx} />
        ))}
      </motion.div>
    </Section>
  );
}
