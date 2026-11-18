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
        // Core background & surface palette (charcoal/deep black)
        void: "#09090b",
        surface: "#111114",
        "surface-elevated": "#17171c",
        panel: "#111114",
        line: "rgba(255, 255, 255, 0.08)",
        "line-strong": "rgba(255, 255, 255, 0.16)",
        ink: "#f5f5f5",
        muted: "#a1a1aa",
        faint: "#52525b",
        // Muted lime accent color
        accent: "#c5f82a",
        "accent-dim": "rgba(197, 248, 42, 0.28)",
        "accent-soft": "rgba(197, 248, 42, 0.08)",
        "accent-hover": "#d4f933",
        // System status
        ok: "#22c55e",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
