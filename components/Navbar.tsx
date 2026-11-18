"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github, ArrowUpRight } from "lucide-react";
import { profile, navSections } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 25);
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
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE.standard }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 transition-all duration-300 md:px-12",
          scrolled ? "py-3.5" : "py-6"
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 border-b border-line/60 bg-void/80 backdrop-blur-md transition-all duration-300",
            scrolled ? "opacity-100 shadow-[0_4px_24px_rgba(0,0,0,0.5)]" : "opacity-0"
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
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-surface font-mono text-xs text-accent transition-colors group-hover:border-accent/40"
          >
            JM
          </motion.span>
          <span className="hidden sm:inline font-medium text-ink/90 transition-colors group-hover:text-ink">
            {profile.name}
          </span>
        </a>

        {/* Desktop navigation bar */}
        <nav className="hidden items-center gap-1 rounded-full border border-line/80 bg-surface/75 px-3 py-1.5 backdrop-blur-md md:flex">
          {navSections.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => goTo(s.id)}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors duration-200",
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-line-strong bg-surface-elevated"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="h-1 w-1 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {s.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* GitHub & Quick Action buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            whileHover={{ y: -1.5 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-ink"
          >
            <Github size={14} />
            <span>GitHub</span>
            <ArrowUpRight size={12} className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
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
      </motion.header>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: EASE.standard }}
            className="fixed inset-x-0 top-[60px] z-40 border-b border-line bg-void/95 px-6 py-8 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navSections.map((s, idx) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  onClick={() => goTo(s.id)}
                  className="flex items-center justify-between py-2 text-left font-display text-lg text-ink/90 transition-colors hover:text-accent"
                >
                  <span className="flex items-center gap-2">
                    {active === s.id && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                    {s.label}
                  </span>
                  <span className="font-mono text-xs text-muted">0{idx + 1}</span>
                </motion.button>
              ))}

              <div className="mt-4 border-t border-line pt-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-line bg-surface p-3 font-mono text-xs text-ink transition-colors hover:border-accent/40"
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
