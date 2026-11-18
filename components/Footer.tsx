"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-6 py-12 md:px-12 bg-void">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Brand and role */}
        <div>
          <p className="font-display text-base font-medium text-ink">
            {profile.name}
            <span className="ml-2 font-mono text-xs text-accent">/ AI &amp; Software</span>
          </p>
          <p className="mt-1 text-xs text-muted">
            Building intelligent, performant systems.
          </p>
        </div>

        {/* Social and direct links with subtle hover animation */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-muted">
          <motion.a
            whileHover={{ y: -1.5, color: "#f5f5f5" }}
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors"
          >
            <Github size={14} />
            <span>GitHub</span>
          </motion.a>

          <motion.a
            whileHover={{ y: -1.5, color: "#f5f5f5" }}
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors"
          >
            <Linkedin size={14} />
            <span>LinkedIn</span>
          </motion.a>

          <motion.a
            whileHover={{ y: -1.5, color: "#f5f5f5" }}
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 transition-colors"
          >
            <Mail size={14} />
            <span>Email</span>
          </motion.a>
        </div>

        {/* Copyright notice */}
        <p className="font-mono text-xs text-faint">
          &copy; {currentYear} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
