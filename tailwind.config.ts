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
        // Deep obsidian & rich charcoal palette
        void: "#070709",
        surface: "#0f0f13",
        "surface-elevated": "#15151c",
        panel: "#0f0f13",
        line: "rgba(255, 255, 255, 0.08)",
        "line-strong": "rgba(255, 255, 255, 0.16)",
        ink: "#f5f5f7",
        muted: "#94949e",
        faint: "#4e4e58",
        // Editorial Accent System
        accent: "#C5F82A", // Muted electric lime
        "accent-dim": "rgba(197, 248, 42, 0.28)",
        "accent-soft": "rgba(197, 248, 42, 0.08)",
        "accent-hover": "#D4F933",
        // Secondary editorial highlights for projects & badges
        cyan: "#38bdf8",
        violet: "#a78bfa",
        ok: "#22c55e",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.22em",
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
