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
        // Architectural Dark & Warm Ivory Palette
        void: "#0a0b0d",             // Deep graphite obsidian
        surface: "#121418",          // Rich dark architectural charcoal
        "surface-elevated": "#191c22", // Elevated stone
        panel: "#121418",
        line: "rgba(238, 235, 227, 0.08)",
        "line-strong": "rgba(238, 235, 227, 0.16)",
        
        // Editorial Warm Ivory & Muted Tones
        ivory: "#f3f0e8",            // Warm editorial ivory (primary text)
        "ivory-muted": "#d8d4c8",    // Soft stone
        ink: "#f3f0e8",
        muted: "#96948a",            // Muted cement
        faint: "#55544e",            // Subtle slate
        
        // Distinctive Creative Accents
        olive: "#9db38a",            // Muted olive / sage
        "olive-dim": "rgba(157, 179, 138, 0.25)",
        "olive-soft": "rgba(157, 179, 138, 0.08)",
        accent: "#cce885",           // Luminous chartreuse / lime silk
        "accent-dim": "rgba(204, 232, 133, 0.28)",
        "accent-soft": "rgba(204, 232, 133, 0.08)",
        "accent-hover": "#daf593",
        amber: "#df9b56",            // Warm raw amber accent
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.26em",
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
