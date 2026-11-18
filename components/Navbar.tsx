"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github, ArrowUpRight } from "lucide-react";
import { profile, navSections } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px" }
    );

    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function goTo(id: string) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 transition-all duration-300 md:px-12",
          scrolled ? "py-3.5" : "py-6"
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 border-b border-line bg-void/80 backdrop-blur-md transition-opacity duration-300",
            scrolled ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Brand logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2.5 font-display text-sm font-semibold tracking-wide text-ink"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-surface font-mono text-xs text-accent transition-colors group-hover:border-accent/40">
            JM
          </span>
          <span className="hidden sm:inline font-medium text-ink/90">
            {profile.name}
          </span>
        </a>

        {/* Desktop navigation bar */}
        <nav className="hidden items-center gap-1 rounded-full border border-line bg-surface/70 px-3 py-1.5 backdrop-blur-md md:flex">
          {navSections.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => goTo(s.id)}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors",
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-line-strong bg-surface-elevated"
                    transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {isActive && <span className="h-1 w-1 rounded-full bg-accent" />}
                  {s.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* GitHub & Quick Action buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            <Github size={14} />
            <span>GitHub</span>
            <ArrowUpRight size={12} className="opacity-60" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface text-ink md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 border-b border-line bg-void/95 px-6 py-8 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-3">
              {navSections.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => goTo(s.id)}
                  className="flex items-center justify-between py-2 text-left font-display text-lg text-ink/90 transition-colors hover:text-accent"
                >
                  <span>{s.label}</span>
                  <span className="font-mono text-xs text-muted">0{idx + 1}</span>
                </button>
              ))}

              <div className="mt-4 border-t border-line pt-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-line bg-surface p-3 font-mono text-xs text-ink"
                >
                  <span className="flex items-center gap-2">
                    <Github size={16} /> GitHub Profile
                  </span>
                  <ArrowUpRight size={14} className="text-accent" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
