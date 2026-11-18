import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core "lab" surfaces — near-black, never pure #000
        void: "#0a0a0b",
        surface: "#0f0f11",
        panel: "#141417",
        line: "rgba(245,245,244,0.08)",
        "line-strong": "rgba(245,245,244,0.16)",
        ink: "#f5f5f4",
        muted: "#8a8a8f",
        faint: "#5a5a60",
        // Restrained phosphor-amber accent — instrumentation, not neon
        signal: "#e8a33d",
        "signal-dim": "rgba(232,163,61,0.35)",
        "signal-soft": "rgba(232,163,61,0.08)",
        ok: "#5fb88a",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        grain: "url('/grain.png')",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 2s ease-in-out infinite",
        marquee: "marquee 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
