"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Check } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { profile } from "@/data/portfolio";

const inputClasses =
  "w-full border-b border-line bg-transparent py-3 font-body text-ink placeholder:text-faint focus:border-signal focus:outline-none transition-colors";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: no backend is wired up yet. This form is structured so a real
    // endpoint (e.g. Formspree, Resend, or a custom API route) can be
    // dropped in here — swap this handler for a fetch() call to that service.
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3200);
  }

  return (
    <Section id="contact" index="08" label="Reach out" title="Establish Connection">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr]">
        <Reveal>
          <form onSubmit={handleSubmit} className="max-w-lg space-y-8">
            <div>
              <label htmlFor="name" className="section-label mb-2 block">
                Name
              </label>
              <input id="name" name="name" required placeholder="Your name" className={inputClasses} />
            </div>
            <div>
              <label htmlFor="email" className="section-label mb-2 block">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="message" className="section-label mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="What would you like to talk about?"
                className={inputClasses + " resize-none"}
              />
            </div>

            <button
              type="submit"
              data-cursor="SEND"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-signal px-7 py-3 font-mono text-xs uppercase tracking-widest2 text-signal transition-colors hover:bg-signal hover:text-void"
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === "idle" ? (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2"
                  >
                    Send transmission
                  </motion.span>
                ) : (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2"
                  >
                    <Check size={14} /> Transmission received
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="space-y-5">
          <a
            href={`mailto:${profile.email}`}
            data-cursor="EMAIL"
            className="flex items-center gap-4 rounded-xl border border-line bg-panel/40 p-5 text-sm text-ink transition-colors hover:border-line-strong"
          >
            <Mail size={16} className="text-signal" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            data-cursor="CALL"
            className="flex items-center gap-4 rounded-xl border border-line bg-panel/40 p-5 text-sm text-ink transition-colors hover:border-line-strong"
          >
            <Phone size={16} className="text-signal" />
            {profile.phone}
          </a>
          <div className="flex items-center gap-4 rounded-xl border border-line bg-panel/40 p-5 text-sm text-ink">
            <MapPin size={16} className="text-signal" />
            {profile.location}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
