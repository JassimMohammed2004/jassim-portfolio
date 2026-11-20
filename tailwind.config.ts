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
        // Behance Concept Artist Reference Palette
        // Core Canvas: Dark Slate Charcoal / Matteboard (gallery presentation background)
        void: "#282a2e",             // Deep presentation slate / dark vignette
        surface: "#35383d",          // Core Canson matte-board canvas
        "surface-elevated": "#404348", // Elevated artwork process card
        panel: "#2d3034",            // Darker inset panel
        line: "rgba(255, 255, 255, 0.12)",
        "line-strong": "rgba(255, 255, 255, 0.22)",

        // Typography: Pure gallery white & clean neutral slate
        ivory: "#ffffff",            // High-contrast clean white headings
        "ivory-muted": "#e5e7eb",    // Secondary subtitles
        ink: "#ffffff",
        muted: "#9ca3af",            // Neutral caption & body text
        faint: "#6b7280",            // Technical metadata grey

        // Behance Concept Art Accent Palette
        accent: "#f59e0b",           // Warm ochre / golden amber
        "accent-dim": "rgba(245, 158, 11, 0.28)",
        "accent-soft": "rgba(245, 158, 11, 0.10)",
        "accent-hover": "#d97706",   // Deep warm amber hover
        amber: "#f59e0b",

        // Secondary Concept Art Accents
        olive: "#f59e0b",            // Unified with warm golden amber
        "olive-dim": "rgba(245, 158, 11, 0.25)",
        "olive-soft": "rgba(245, 158, 11, 0.10)",
        cyan: "#00e5ff",             // Sci-fi / magical cyan
        crimson: "#be185d",          // Character seal / focal crimson
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.25em",
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
