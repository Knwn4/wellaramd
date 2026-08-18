"use client";

import { useRef } from "react";

/**
 * 3D cursor-tilt wrapper. Follows the pointer for an interactive,
 * tactile feel on the product renders. Respects reduced motion.
 */
export default function Tilt({
  children,
  max = 14,
  className = "",
  scale = 1.04,
}: {
  children: React.ReactNode;
  max?: number;
  className?: string;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.transform = `rotateY(${px * max}deg) rotateX(${-py * max}deg) scale(${scale})`;
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <div className={`tilt-scene ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div ref={ref} className="tilt w-full h-full">
        {children}
      </div>
    </div>
  );
}
