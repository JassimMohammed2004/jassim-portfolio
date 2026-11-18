"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import Magnetic from "./ui/Magnetic";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  }

  return (
    <Section
      id="contact"
      index="08"
      label="Inquiries"
      title="Direct Connection &amp; Dialogue"
      description="Available for AI/ML engineering positions, software development opportunities, and high-impact technical collaboration."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Direct Email Card with One-Click Copy */}
        <Reveal>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25 }}
            className="flex h-full flex-col justify-between rounded-[32px] border border-line-strong bg-gradient-to-b from-surface via-surface to-void p-8 md:p-12 shadow-[0_24px_50px_rgba(0,0,0,0.6)]"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-olive/30 bg-olive-soft px-3.5 py-1 font-mono text-xs text-olive font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-olive animate-pulse" />
                Direct Communication
              </div>

              <h3 className="mt-6 font-display text-3xl font-extrabold text-ivory md:text-4xl">
                Let&apos;s build something extraordinary.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                Whether you have an engineering role in mind, want to discuss machine learning architectures, or simply want to connect, feel free to reach out directly.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-line/60 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Magnetic strength={0.2} className="flex-1">
                  <motion.a
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    href={`mailto:${profile.email}`}
                    className="flex w-full items-center justify-between rounded-xl border border-line bg-surface-elevated px-5 py-3.5 text-sm font-mono text-ivory transition-colors hover:border-olive/50"
                  >
                    <span className="flex items-center gap-2.5 truncate">
                      <Mail size={16} className="text-olive shrink-0" />
                      <span className="truncate">{profile.email}</span>
                    </span>
                    <ArrowUpRight size={14} className="text-muted shrink-0" />
                  </motion.a>
                </Magnetic>

                <Magnetic strength={0.25}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-line bg-surface-elevated px-5 py-3.5 font-mono text-xs text-muted transition-colors hover:text-ivory hover:border-olive/50"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-olive" />
                        <span className="text-olive font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </motion.button>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* Profiles & Contact Details */}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-between gap-4">
            {/* GitHub */}
            <Magnetic strength={0.15} className="w-full">
              <motion.a
                whileHover={{ x: 4, borderColor: "rgba(157, 179, 138, 0.4)" }}
                whileTap={{ scale: 0.99 }}
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-[24px] border border-line bg-surface p-6 transition-colors hover:bg-surface-elevated"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface-elevated text-ivory transition-colors group-hover:text-olive">
                    <Github size={22} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-ivory transition-colors group-hover:text-olive">
                      GitHub
                    </h4>
                    <p className="font-mono text-xs text-muted">@jassim-mohammed</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ivory" />
              </motion.a>
            </Magnetic>

            {/* LinkedIn */}
            <Magnetic strength={0.15} className="w-full">
              <motion.a
                whileHover={{ x: 4, borderColor: "rgba(157, 179, 138, 0.4)" }}
                whileTap={{ scale: 0.99 }}
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-[24px] border border-line bg-surface p-6 transition-colors hover:bg-surface-elevated"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface-elevated text-ivory transition-colors group-hover:text-olive">
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-ivory transition-colors group-hover:text-olive">
                      LinkedIn
                    </h4>
                    <p className="font-mono text-xs text-muted">jassim-mohammed</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ivory" />
              </motion.a>
            </Magnetic>

            {/* Telephone */}
            <Magnetic strength={0.15} className="w-full">
              <motion.a
                whileHover={{ x: 4, borderColor: "rgba(157, 179, 138, 0.4)" }}
                whileTap={{ scale: 0.99 }}
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="group flex items-center justify-between rounded-[24px] border border-line bg-surface p-6 transition-colors hover:bg-surface-elevated"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface-elevated text-ivory transition-colors group-hover:text-olive">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-ivory transition-colors group-hover:text-olive">
                      Phone
                    </h4>
                    <p className="font-mono text-xs text-muted">{profile.phone}</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ivory" />
              </motion.a>
            </Magnetic>

            {/* Location */}
            <div className="flex items-center gap-4 rounded-[24px] border border-line bg-surface p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface-elevated text-olive">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-ivory">
                  Location
                </h4>
                <p className="font-mono text-xs text-muted">{profile.location}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
