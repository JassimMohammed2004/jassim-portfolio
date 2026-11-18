"use client";

import { useRef, MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { prefersReducedMotion } from "@/lib/utils";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number; // Distance multiplier for magnetic attraction (default 0.28)
}

/**
 * Premium magnetic interaction wrapper.
 * Smoothly shifts the button towards the pointer within its bounding box,
 * then gently springs back to origin on mouse exit.
 * Automatically disabled on touch screens and when reduced-motion is requested.
 */
export default function Magnetic({ children, className = "", strength = 0.28 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Responsive spring physics
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.2 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion()) return;
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    x.set(distanceX);
    y.set(distanceY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
