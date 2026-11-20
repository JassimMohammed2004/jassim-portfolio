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
        // Concept Artist Reference Palette: Atmospheric Dusk / Painterly Violet & Lavender
        // Core atmospheric background: Deep twilight violet-slate
        void: "#181524",               // Deep atmospheric twilight purple / night sky
        surface: "#242036",            // Soft painterly violet-charcoal surface
        "surface-elevated": "#302b46", // Elevated misty lavender-slate panel
        panel: "#1e1a2d",              // Recessed ambient violet panel
        line: "rgba(224, 215, 245, 0.12)",        // Translucent lavender hairline
        "line-strong": "rgba(235, 222, 255, 0.22)", // Defined lavender border

        // Typography: Warm white, misty lavender-grey, muted atmospheric tones
        ivory: "#fbf9fe",              // Warm soft white headings
        "ivory-muted": "#ddd6ed",      // Secondary soft lavender-grey
        ink: "#ffffff",
        muted: "#aba3c0",              // Muted dusky lavender-grey body text
        faint: "#7c7395",              // Soft atmospheric metadata

        // Primary Concept Art Accent: Lavender / Luminous Violet
        accent: "#c4a7e7",             // Radiant soft lavender
        "accent-dim": "rgba(196, 167, 231, 0.28)",
        "accent-soft": "rgba(196, 167, 231, 0.12)",
        "accent-hover": "#d6beff",     // Luminous lavender hover
        lavender: "#c4a7e7",
        violet: "#9d7cd8",
        purple: "#7e57c2",

        // Secondary Concept Art Accents: Pastel Pink, Soft Blue, Warm Peach & Muted Orange
        olive: "#c4a7e7",              // Unified with primary radiant lavender
        "olive-dim": "rgba(196, 167, 231, 0.25)",
        "olive-soft": "rgba(196, 167, 231, 0.12)",
        pink: "#f4b8e4",               // Pastel dreamlike pink
        rose: "#ea999c",               // Soft dusty rose
        peach: "#f5c2a5",              // Warm painterly peach
        orange: "#e59866",             // Muted dusk orange
        amber: "#f5c2a5",              // Peach / warm sunset amber
        blue: "#8caaee",               // Soft painterly sky blue
        cyan: "#85c1dc",               // Misty pastel cyan
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
