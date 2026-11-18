"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Scene from "./Scene";
import { profile } from "@/data/portfolio";

const READOUT = ["AI", "DATA", "SOFTWARE"];

function Readout() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % READOUT.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="inline-block w-[6.5ch] font-mono text-signal">
      {READOUT[i]}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-void">
      <Scene />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/10 via-transparent to-void" />

      <div className="relative z-10 flex flex-1 flex-col justify-between px-6 pb-10 pt-28 md:px-12 md:pb-14">
        {/* HUD row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest2 text-muted"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-ok" />
            System online
          </span>
          <span>
            Stack — <Readout />
          </span>
        </motion.div>

        {/* Main type */}
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="section-label mb-5"
          >
            {profile.role}
          </motion.p>

          <h1 className="font-display font-medium leading-[0.95] tracking-tight text-ink">
            {["JASSIM", "MOHAMMED"].map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.25 + i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[15vw] leading-[0.95] md:text-[7.2vw]"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-balance font-body text-base text-muted md:text-lg"
          >
            {profile.tagline}
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest2 text-faint"
        >
          <ArrowDown size={13} className="animate-blink" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
