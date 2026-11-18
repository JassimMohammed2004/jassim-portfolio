"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
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
      label="Get In Touch"
      title="Connect &amp; Collaborate"
      description="Available for AI/ML engineering positions, software development opportunities, and technical collaboration."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Direct Email Card with One-Click Copy */}
        <Reveal>
          <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-surface p-7 md:p-9">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-elevated px-3 py-1 font-mono text-xs text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Direct Communication
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold text-ink md:text-3xl">
                Let&apos;s build something intelligent.
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                Whether you have an opportunity in mind, want to discuss machine learning systems, or simply want to connect, feel free to reach out directly.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-line space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex-1 flex items-center justify-between rounded-lg border border-line bg-surface-elevated px-4 py-3 text-sm font-mono text-ink transition-colors hover:border-accent/40"
                >
                  <span className="flex items-center gap-2.5 truncate">
                    <Mail size={16} className="text-accent shrink-0" />
                    <span className="truncate">{profile.email}</span>
                  </span>
                  <ArrowUpRight size={14} className="text-muted shrink-0" />
                </a>

                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="flex items-center justify-center gap-2 rounded-lg border border-line bg-surface-elevated px-4 py-3 font-mono text-xs text-muted transition-colors hover:text-ink hover:border-line-strong"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-accent" />
                      <span className="text-accent">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Profiles & Contact Details */}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-between gap-4">
            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-line bg-surface p-6 transition-all hover:border-line-strong hover:bg-surface-elevated"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface-elevated text-ink transition-colors group-hover:text-accent">
                  <Github size={20} />
                </div>
                <div>
                  <h4 className="font-display text-base font-medium text-ink">
                    GitHub
                  </h4>
                  <p className="font-mono text-xs text-muted">@jassim-mohammed</p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-line bg-surface p-6 transition-all hover:border-line-strong hover:bg-surface-elevated"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface-elevated text-ink transition-colors group-hover:text-accent">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4 className="font-display text-base font-medium text-ink">
                    LinkedIn
                  </h4>
                  <p className="font-mono text-xs text-muted">jassim-mohammed</p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
            </a>

            {/* Telephone */}
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="group flex items-center justify-between rounded-xl border border-line bg-surface p-6 transition-all hover:border-line-strong hover:bg-surface-elevated"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface-elevated text-ink transition-colors group-hover:text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-display text-base font-medium text-ink">
                    Phone
                  </h4>
                  <p className="font-mono text-xs text-muted">{profile.phone}</p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 rounded-xl border border-line bg-surface p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface-elevated text-accent">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-display text-base font-medium text-ink">
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
