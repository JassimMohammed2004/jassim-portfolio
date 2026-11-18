"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ShieldAlert, Mic, Users } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { projects, ProjectItem } from "@/data/portfolio";

const projectIcons: Record<string, React.ElementType> = {
  "nids-ml": ShieldAlert,
  "alexa-voice-assistant": Mic,
  "collabify-ai": Users,
};

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const Icon = projectIcons[project.id] || ShieldAlert;

  return (
    <Reveal delay={index * 0.1}>
      <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface p-7 transition-all duration-300 hover:border-line-strong hover:bg-surface-elevated md:p-8">
        <div>
          {/* Top category and index badge */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface-elevated text-accent">
                <Icon size={16} strokeWidth={1.8} />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                {project.category}
              </span>
            </div>
            <span className="font-mono text-xs text-faint">0{index + 1}</span>
          </div>

          {/* Project Title */}
          <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-accent md:text-2xl">
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
        <div className="mt-8 border-t border-line pt-6">
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:text-ink"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            {/* GitHub repo button */}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-1.5 text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <Github size={13} />
                <span>Repository</span>
                <ArrowUpRight size={12} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-faint">
                <Github size={13} />
                <span>Repo in staging</span>
              </span>
            )}

            {/* Live demo button */}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent transition-colors hover:text-accent-hover"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={13} />
              </a>
            ) : (
              <span className="text-[11px] text-faint uppercase tracking-wider">
                Active System
              </span>
            )}
          </div>
        </div>
      </div>
    </Reveal>
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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <ProjectCard key={p.id} project={p} index={idx} />
        ))}
      </div>
    </Section>
  );
}
