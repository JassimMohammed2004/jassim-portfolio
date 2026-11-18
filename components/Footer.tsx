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

        {/* Social and direct links */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            <Linkedin size={14} />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            <Mail size={14} />
            <span>Email</span>
          </a>
        </div>

        {/* Copyright notice */}
        <p className="font-mono text-xs text-faint">
          &copy; {currentYear} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
