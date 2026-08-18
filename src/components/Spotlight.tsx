"use client";

import { useRef } from "react";

/**
 * Ambient cursor spotlight for dark sections — a soft champagne-gold light
 * that tracks the pointer, like light catching gold. Pure transform/opacity,
 * disabled under prefers-reduced-motion (see globals.css).
 */
export default function Spotlight({
  children,
  className = "",
  radius = 340,
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  radius?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--mx", `${mx}px`);
      el.style.setProperty("--my", `${my}px`);
    });
  };

  return (
    <div ref={ref} onMouseMove={onMove} className={`spotlight relative ${className}`} style={style}>
      <div
        className="spotlight-glow"
        style={{
          background: `radial-gradient(${radius}px circle at var(--mx, 50%) var(--my, 30%), rgba(255,254,248,0.16), transparent 62%)`,
        }}
      />
      {children}
    </div>
  );
}
