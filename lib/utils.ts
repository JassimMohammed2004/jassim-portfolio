import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Detects the user's reduced-motion preference. Safe to call on the client only. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Coarse device-capability heuristic used to scale back the Three.js scene. */
export function isLowPowerDevice(): boolean {
  if (typeof window === "undefined") return false;
  const cores = navigator.hardwareConcurrency || 4;
  const isSmallScreen = window.innerWidth < 768;
  return cores <= 4 || isSmallScreen;
}
