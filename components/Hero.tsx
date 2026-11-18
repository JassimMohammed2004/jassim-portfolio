"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Mail, ShieldCheck, Compass } from "lucide-react";
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
    hidden: { opacity: 0, y: 22 },
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
      className="relative flex min-h-[96svh] flex-col justify-between overflow-hidden px-6 pt-32 pb-12 md:px-12 md:pt-36 md:pb-16"
    >
      <Scene />

      {/* Main Asymmetric Hero Stage */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          {/* Left Column: Expressive Editorial Typography & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Status & Degree Verified Tag */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/85 px-4 py-1.5 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-olive opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-olive" />
                </span>
                <span className="font-mono text-xs text-ivory">
                  Open for AI/ML &amp; Software Roles
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/50 px-3.5 py-1 font-mono text-xs text-muted backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>B.Tech AI &amp; DS — Graduated</span>
              </div>
            </motion.div>

            {/* Oversized Expressive Typography Name */}
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex items-center gap-3">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 44 }}
                  transition={{ duration: 0.8, delay: 0.25, ease: EASE.standard }}
                  className="h-[2px] bg-olive"
                />
                <p className="font-mono text-xs font-semibold uppercase tracking-widest2 text-olive">
                  AI &amp; Machine Learning Engineer
                </p>
              </div>

              <h1 className="font-display text-5xl font-extrabold tracking-tightest text-ivory sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92]">
                Jassim <br />
                <span className="text-ivory-muted font-light">Mohammed</span>
              </h1>
            </motion.div>

            {/* Impact Introduction */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-lg text-muted sm:text-xl font-normal leading-relaxed text-balance"
            >
              {profile.tagline}
            </motion.p>

            {/* Action CTAs with subtle magnetic physics */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <Magnetic strength={0.25}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo("projects")}
                  className="group flex items-center gap-2.5 rounded-xl bg-ivory px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-void transition-all hover:bg-accent shadow-[0_4px_24px_rgba(243,240,232,0.15)]"
                >
                  <span>Explore Systems</span>
                  <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
                </motion.button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo("contact")}
                  className="group flex items-center gap-2 rounded-xl border border-line-strong bg-surface px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-ivory transition-all hover:border-olive hover:bg-surface-elevated"
                >
                  <Mail size={14} className="text-olive" />
                  <span>Get in Touch</span>
                </motion.button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-line bg-surface/60 px-5 py-3.5 font-mono text-xs font-medium uppercase tracking-wider text-muted transition-all hover:border-line-strong hover:text-ivory"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} className="text-faint" />
                </motion.a>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Right Column: Distinctive Avatar & Identity Sculpture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE.standard }}
            className="flex justify-center lg:justify-end"
          >
            <AvatarArt />
          </motion.div>
        </div>
      </div>

      {/* Editorial Bottom Meta Strip with subtle scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative z-10 mx-auto mt-16 w-full max-w-6xl border-t border-line/60 pt-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-faint">
          <div className="flex items-center gap-2">
            <Compass size={13} className="text-olive" />
            <span>Kottayam, Kerala, India — Engineering Intelligence</span>
          </div>
          <button
            onClick={() => scrollTo("about")}
            className="group flex items-center gap-2 text-muted hover:text-ivory transition-colors cursor-pointer"
          >
            <span>Scroll to discover</span>
            <ArrowDown size={12} className="animate-bounce text-olive" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
