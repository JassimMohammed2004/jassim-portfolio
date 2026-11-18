"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { profile, traits } from "@/data/portfolio";

const ROWS = [
  { key: "NAME", value: profile.name },
  { key: "FIELD", value: "Artificial Intelligence & Data Science" },
  { key: "LOCATION", value: profile.location },
  { key: "FOCUS", value: "AI / Data / Software Engineering" },
];

function TypedLine({ text, start, speed = 18 }: { text: string; start: boolean; speed?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (count >= text.length) return;
    const id = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(id);
  }, [start, count, text, speed]);
  return <>{text.slice(0, count)}</>;
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <Section id="about" index="01" label="Profile" title="Initialize Profile">
      <div ref={ref} className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <Reveal>
          <div className="rounded-lg border border-line bg-panel/60 p-6 font-mono text-sm md:p-8">
            <div className="mb-5 flex items-center gap-2 border-b border-line pb-4 text-faint">
              <span className="h-2 w-2 rounded-full bg-signal-dim" />
              <span className="h-2 w-2 rounded-full bg-line-strong" />
              <span className="h-2 w-2 rounded-full bg-line-strong" />
              <span className="ml-2 text-xs">profile.sh</span>
            </div>

            <p className="mb-4 text-muted">
              <span className="text-signal">$</span> <TypedLine text="initialize_profile()" start={inView} />
            </p>

            <p className="mb-6 flex items-center gap-2 text-ok">
              <span className="h-1.5 w-1.5 rounded-full bg-ok" />
              SYSTEM ONLINE
            </p>

            <dl className="space-y-3">
              {ROWS.map((row, i) => (
                <div key={row.key} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="w-28 shrink-0 text-faint">{row.key}</dt>
                  <dd className="text-ink">
                    <TypedLine text={row.value} start={inView} speed={10} />
                    {i === ROWS.length - 1 && (
                      <span className="ml-0.5 inline-block h-4 w-[2px] animate-blink bg-signal align-middle" />
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-center">
          <p className="mb-6 text-balance text-lg leading-relaxed text-muted">
            An AI &amp; Data Science engineering student focused on building systems at the
            intersection of intelligent software, data and secure computation.
          </p>
          <ul className="space-y-3">
            {traits.map((trait) => (
              <li key={trait} className="flex items-start gap-3 border-t border-line pt-3 text-sm text-ink">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                {trait}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
