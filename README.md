# Jassim // Digital Intelligence Lab

Personal portfolio for Jassim Mohammed — Next.js 14, TypeScript, Tailwind, React Three Fiber.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's in here

- `app/` — Next.js App Router entry (`layout.tsx` for fonts/SEO, `page.tsx` composes the sections).
- `components/` — one component per section (`Hero`, `About`, `Skills`, `Projects`,
  `ProjectExperience`, `Education`, `Research`, `Certifications`, `Contact`, `Footer`),
  plus `Scene`/`NeuralNetwork` (the Three.js background) and `Navbar`/`Cursor`.
- `components/ui/` — small shared pieces (`Section`, `Reveal`).
- `data/portfolio.ts` — every piece of copy, all sourced from the resume. Edit here, not in components.
- `lib/` — animation variants, shared constants, small utilities.

## Notes

- **All content is data-driven.** If anything needs to change (wording, a new project,
  an updated certification), edit `data/portfolio.ts` — the components just render it.
- **The neural network background** (`components/NeuralNetwork.tsx`) is a real Three.js
  scene: instanced nodes, a single line-segment buffer for edges, instanced "data packet"
  spheres animating along edges, and an ambient particle field for depth. It reacts to the
  cursor (nodes push away and highlight near the pointer) and to scroll (the network morphs
  from an organic cloud toward a structured lattice as you scroll down the page). Node/packet
  counts scale down automatically on smaller or lower-power devices, and the whole scene is
  replaced with a static gradient when the visitor has `prefers-reduced-motion` on.
- **The contact form has no backend wired up.** It's built so a real endpoint — Formspree,
  Resend, or a custom API route — can be dropped into the `handleSubmit` function in
  `components/Contact.tsx`.
- **Fonts** (Space Grotesk / Inter / JetBrains Mono) load via `next/font/google`, which needs
  an internet connection the first time you build.

## Deploying

Works out of the box on Vercel: `vercel deploy`, or connect the repo in the Vercel dashboard.
