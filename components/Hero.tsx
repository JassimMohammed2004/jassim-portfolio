"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Mail } from "lucide-react";
import Scene from "./Scene";
import { profile } from "@/data/portfolio";
import { EASE } from "@/lib/constants";

export default function Hero() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  // Animation variants for staggered sequential entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: EASE.standard,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] flex-col justify-between overflow-hidden px-6 pt-32 pb-12 md:px-12 md:pt-40 md:pb-16"
    >
      <Scene />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        {/* Availability status badge */}
        {profile.availableForWork && (
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 backdrop-blur-sm transition-colors hover:border-accent/40"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs text-muted">
                Available for AI/ML &amp; Software roles
              </span>
            </motion.div>
          </motion.div>
        )}

        {/* Name & Role */}
        <motion.div variants={itemVariants} className="space-y-3">
          <div className="flex items-center gap-3">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE.standard }}
              className="h-[1px] bg-accent"
            />
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
          variants={itemVariants}
          className="mt-6 max-w-2xl text-lg text-muted sm:text-xl md:text-2xl font-normal leading-relaxed text-balance"
        >
          {profile.tagline}
        </motion.p>

        {/* Action CTAs with subtle hover physics */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("projects")}
            className="group flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-void transition-all hover:bg-accent-hover shadow-[0_2px_12px_rgba(197,248,42,0.18)] hover:shadow-[0_4px_20px_rgba(197,248,42,0.28)]"
          >
            <span>View Projects</span>
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-ink transition-all hover:border-accent/40 hover:bg-surface-elevated"
          >
            <Github size={15} />
            <span>GitHub</span>
            <ArrowUpRight size={13} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted transition-all hover:border-line-strong hover:text-ink hover:bg-surface-elevated"
          >
            <Mail size={15} />
            <span>Contact</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Subtle indicator bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.9 }}
        className="relative z-10 mx-auto mt-16 w-full max-w-6xl border-t border-line/60 pt-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-faint">
          <span>Kottayam, Kerala, India</span>
          <span>Core Focus: Machine Learning • Data Pipelines • Software Engineering</span>
        </div>
      </motion.div>
    </section>
  );
}
