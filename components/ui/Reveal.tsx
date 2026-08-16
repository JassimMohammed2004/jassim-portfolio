"use client";

import { motion } from "framer-motion";
import { fadeUp, revealViewport } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}) {
  const MotionTag = Tag === "li" ? motion.li : motion.div;
  return (
    <MotionTag
      className={cn(className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
