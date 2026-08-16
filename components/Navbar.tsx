"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navSections } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
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
          "fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 transition-all duration-500 md:px-12",
          scrolled ? "py-4" : "py-7"
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 border-b border-line bg-void/70 backdrop-blur-md transition-opacity duration-500",
            scrolled ? "opacity-100" : "opacity-0"
          )}
        />

        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            goTo("home");
          }}
          data-cursor="HOME"
          className="font-display text-sm font-medium tracking-widest2 text-ink"
        >
          JM<span className="text-signal">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navSections.map((s) => (
            <button
              key={s.id}
              data-cursor="VIEW"
              onClick={() => goTo(s.id)}
              className={cn(
                "relative rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-widest2 transition-colors",
                active === s.id ? "text-ink" : "text-muted hover:text-ink"
              )}
            >
              {active === s.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-panel"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">{s.label}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="z-10 text-ink md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-void px-8 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navSections.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => goTo(s.id)}
                  className="py-3 text-left font-display text-3xl text-ink"
                >
                  <span className="mr-3 font-mono text-sm text-signal">0{i + 1}</span>
                  {s.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
