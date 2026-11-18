"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Mail } from "lucide-react";
import Scene from "./Scene";
import { profile } from "@/data/portfolio";

export default function Hero() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] flex-col justify-between overflow-hidden px-6 pt-32 pb-12 md:px-12 md:pt-40 md:pb-16"
    >
      <Scene />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Availability status badge */}
        {profile.availableForWork && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs text-muted">
              Available for AI/ML &amp; Software roles
            </span>
          </motion.div>
        )}

        {/* Name & Role */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-accent" />
            <p className="font-mono text-xs font-semibold uppercase tracking-widest2 text-accent">
              {profile.role}
            </p>
          </div>

          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
        </motion.div>

        {/* Main headline & concise introduction */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-muted sm:text-xl md:text-2xl font-normal leading-relaxed text-balance"
        >
          {profile.tagline}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-void transition-all hover:bg-accent-hover"
          >
            <span>View Projects</span>
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </button>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-ink transition-colors hover:border-line-strong hover:bg-surface-elevated"
          >
            <Github size={15} />
            <span>GitHub</span>
            <ArrowUpRight size={13} className="text-muted" />
          </a>

          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted transition-colors hover:border-line-strong hover:text-ink hover:bg-surface-elevated"
          >
            <Mail size={15} />
            <span>Contact</span>
          </button>
        </motion.div>
      </div>

      {/* Subtle indicator bar */}
      <div className="relative z-10 mx-auto mt-16 w-full max-w-6xl border-t border-line/60 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-faint">
          <span>Kottayam, Kerala, India</span>
          <span>Core Focus: Machine Learning • Data Pipelines • Software Engineering</span>
        </div>
      </div>
    </section>
  );
}
