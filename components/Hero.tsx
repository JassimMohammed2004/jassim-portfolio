"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Mail, ShieldCheck, Compass, Sparkles, Terminal } from "lucide-react";
import Scene from "./Scene";
import Magnetic from "./ui/Magnetic";
import AvatarArt from "./ui/AvatarArt";
import { profile } from "@/data/portfolio";
import { EASE } from "@/lib/constants";

export default function Hero() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: EASE.standard,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-6 pt-32 pb-12 md:px-12 md:pt-36 md:pb-16"
    >
      <Scene />

      {/* Atmospheric Concept Art Folio Title Watermark */}
      <div className="pointer-events-none absolute left-6 right-6 top-24 select-none overflow-hidden opacity-[0.04] md:left-12 md:top-20">
        <span className="block font-display text-[22vw] font-black tracking-tightest text-ivory leading-none">
          PORTFOLIO
        </span>
      </div>

      {/* Main Asymmetric Hero Stage */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          {/* Left Column: Expressive Typography & Cinematic Positioning */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            {/* Prologue Badge & Verification */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-md border border-line-strong bg-surface/90 px-4 py-1.5 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-xs text-ivory font-medium">
                  PROLOGUE // CONCEPT ART &amp; TECH 2026
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent-soft px-3.5 py-1 font-mono text-xs text-accent backdrop-blur-sm">
                <ShieldCheck size={13} />
                <span>B.Tech AI &amp; DS — Graduated</span>
              </div>
            </motion.div>

            {/* Oversized Concept Art Typography Name */}
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center gap-3">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.25, ease: EASE.standard }}
                  className="h-[2px] bg-accent"
                />
                <p className="font-mono text-xs font-semibold uppercase tracking-widest2 text-accent">
                  {profile.role}
                </p>
              </div>

              <h1 className="font-display text-5xl font-black tracking-tightest text-ivory sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92]">
                JASSIM <br />
                <span className="text-ivory-muted font-light tracking-tight">MOHAMMED</span>
              </h1>
            </motion.div>

            {/* Impact Introduction */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-lg text-muted sm:text-xl font-normal leading-relaxed text-balance"
            >
              {profile.tagline}
            </motion.p>

            {/* Action CTAs with warm golden amber styling */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Magnetic strength={0.25}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo("projects")}
                  className="group flex items-center gap-2.5 rounded-lg bg-accent px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-[#1e2024] transition-all hover:bg-accent-hover shadow-[0_4px_24px_rgba(245,158,11,0.25)]"
                >
                  <span>Explore Installations</span>
                  <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
                </motion.button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo("contact")}
                  className="group flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-ivory transition-all hover:border-accent hover:bg-surface-elevated"
                >
                  <Mail size={14} className="text-accent" />
                  <span>Direct Dialogue</span>
                </motion.button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-line bg-surface/60 px-5 py-3.5 font-mono text-xs font-medium uppercase tracking-wider text-muted transition-all hover:border-line-strong hover:text-ivory"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} className="text-faint" />
                </motion.a>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Right Column: Custom Interactive Avatar Sculpture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE.standard }}
            className="flex justify-center lg:justify-end"
          >
            <AvatarArt />
          </motion.div>
        </div>
      </div>

      {/* Concept Art Bottom Meta Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 mx-auto mt-16 w-full max-w-6xl border-t border-line/60 pt-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-faint">
          <div className="flex items-center gap-2">
            <Compass size={13} className="text-accent" />
            <span>Kottayam, Kerala, India — Autonomous Systems &amp; Neural Software</span>
          </div>
          <button
            onClick={() => scrollTo("about")}
            className="group flex items-center gap-2 text-muted hover:text-ivory transition-colors cursor-pointer"
          >
            <span>Scroll to Enter Chapter 01</span>
            <ArrowDown size={12} className="animate-bounce text-accent" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
