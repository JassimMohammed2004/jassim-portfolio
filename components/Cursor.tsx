"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let ringX = 0,
      ringY = 0,
      mouseX = 0,
      mouseY = 0;

    function onMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
      }
    }

    function loop() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
      }
      requestAnimationFrame(loop);
    }

    function onOver(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      if (target) {
        setIsHover(true);
        setLabel(target.getAttribute("data-cursor") || "");
      } else {
        setIsHover(false);
        setLabel("");
      }
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    const raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${isHover ? "is-hover" : ""}`}>
        <span className="cursor-label">{label}</span>
      </div>
    </>
  );
}
