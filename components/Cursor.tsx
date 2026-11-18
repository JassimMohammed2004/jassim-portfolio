"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { prefersReducedMotion } from "@/lib/utils";

export default function Cursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "card">("default");
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { stiffness: 320, damping: 28, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 320, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches || prefersReducedMotion()) {
      return;
    }

    setMounted(true);

    function onMouseMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    }

    function onMouseLeave() {
      setVisible(false);
    }

    function onMouseEnter() {
      setVisible(true);
    }

    function onMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isCard = target.closest("[data-cursor='card']") || target.closest(".project-card");
      if (isCard) {
        setCursorType("card");
        return;
      }

      const isClickable = target.closest("button, a, input, textarea, [role='button'], [data-cursor='pointer']");
      if (isClickable) {
        setCursorType("pointer");
        return;
      }

      setCursorType("default");
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [mouseX, mouseY, visible]);

  if (!mounted || !visible) return null;

  return (
    <>
      {/* Precision olive/ivory center dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 h-1.5 w-1.5 rounded-full bg-olive"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorType === "pointer" ? 0 : cursorType === "card" ? 1.4 : 1,
          opacity: cursorType === "pointer" ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Trailing architectural halo */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-olive/50"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorType === "pointer" ? 36 : cursorType === "card" ? 52 : 26,
          height: cursorType === "pointer" ? 36 : cursorType === "card" ? 52 : 26,
          backgroundColor:
            cursorType === "pointer"
              ? "rgba(157, 179, 138, 0.12)"
              : cursorType === "card"
              ? "rgba(157, 179, 138, 0.06)"
              : "transparent",
          borderColor:
            cursorType === "pointer"
              ? "rgba(157, 179, 138, 0.85)"
              : cursorType === "card"
              ? "rgba(157, 179, 138, 0.45)"
              : "rgba(243, 240, 232, 0.2)",
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </>
  );
}
