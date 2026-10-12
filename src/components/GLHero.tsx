"use client";

import { useEffect, useRef, useState } from "react";
import { Product } from "./Visuals";

const LINE = "Medicine that finally listens to women";

type Floater = {
  name: "vial" | "pen" | "dropper" | "capsules" | "labkit";
  pos: string;
  w: string;
  rot: number;
  delay: number; // bob animation offset
  depth: number; // parallax strength
  dur: number; // bob duration (varied for organic motion)
  dim?: boolean; // background layer
};

/** Two layers of floating product renders around the headline. */
const FLOATERS: Floater[] = [
  // foreground — large, sharp
  { name: "vial",     pos: "left-[3%] top-[11%]",      w: "w-[145px] lg:w-[185px]", rot: -14, delay: 0,    depth: 26, dur: 7.5 },
  { name: "dropper",  pos: "left-[10%] bottom-[9%]",   w: "w-[130px] lg:w-[168px]", rot: 11,  delay: 900,  depth: 34, dur: 8.5 },
  { name: "capsules", pos: "right-[4%] top-[9%]",      w: "w-[136px] lg:w-[176px]", rot: 13,  delay: 450,  depth: 30, dur: 6.8 },
  { name: "pen",      pos: "right-[10%] bottom-[11%]", w: "w-[122px] lg:w-[156px]", rot: -9,  delay: 1350, depth: 38, dur: 9 },
  // mid-ground — smaller, dim
  { name: "labkit",   pos: "left-[19%] top-[39%]",     w: "w-[86px] lg:w-[112px]",  rot: 7,   delay: 600,  depth: 12, dur: 6.2, dim: true },
  { name: "vial",     pos: "right-[19%] top-[37%]",    w: "w-[82px] lg:w-[106px]",  rot: -19, delay: 1800, depth: 14, dur: 7.8, dim: true },
  { name: "capsules", pos: "left-[30%] top-[3%]",      w: "w-[78px] lg:w-[100px]",  rot: 23,  delay: 300,  depth: 16, dur: 8.2, dim: true },
  { name: "dropper",  pos: "right-[29%] bottom-[4%]",  w: "w-[80px] lg:w-[104px]",  rot: -17, delay: 2100, depth: 18, dur: 7.1, dim: true },
  { name: "pen",      pos: "left-[1%] top-[49%]",      w: "w-[96px] lg:w-[124px]",  rot: 19,  delay: 1200, depth: 22, dur: 8.8, dim: true },
  { name: "capsules", pos: "right-[1%] top-[52%]",     w: "w-[92px] lg:w-[118px]",  rot: -22, delay: 2400, depth: 20, dur: 6.6, dim: true },
  { name: "vial",     pos: "left-[23%] bottom-[5%]",   w: "w-[76px] lg:w-[98px]",   rot: 15,  delay: 1650, depth: 15, dur: 7.4, dim: true },
  { name: "labkit",   pos: "right-[23%] top-[5%]",     w: "w-[74px] lg:w-[96px]",   rot: -12, delay: 750,  depth: 17, dur: 8.1, dim: true },
];

export default function GLHero() {
  const words = LINE.split(" ");
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // per-character stagger for the letter-split headline reveal
  let charIndex = 0;
  const delayFor = () => `${140 + charIndex++ * 22}ms`;

  const onMove = (e: React.MouseEvent) => {
    if (reduced.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    setPointer({
      x: (e.clientX - r.left) / r.width - 0.5,
      y: (e.clientY - r.top) / r.height - 0.5,
    });
  };

  return (
    <section
      id="top"
      onMouseMove={onMove}
      onMouseLeave={() => setPointer({ x: 0, y: 0 })}
      className="grain relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFEF8 0%, #F6F4EA 100%)" }}
    >
      {/* drifting ambient glows */}
      <div className="drift-a absolute -left-[12%] top-[8%] w-[48%] h-[58%] rounded-full blur-3xl opacity-60 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(34,34,34,0.06), transparent 70%)" }} aria-hidden />
      <div className="drift-b absolute -right-[10%] bottom-[4%] w-[46%] h-[54%] rounded-full blur-3xl opacity-60 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(34,34,34,0.05), transparent 70%)" }} aria-hidden />
      <div className="drift-a absolute left-[38%] top-[34%] w-[30%] h-[36%] rounded-full blur-3xl opacity-40 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(122,61,100,0.05), transparent 70%)", animationDelay: "6s" }} aria-hidden />

      {/* Floating meds field */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {FLOATERS.map((f, i) => (
          <div
            key={i}
            className={`absolute ${f.pos} ${f.w} hidden sm:block`}
            style={{
              transform: `translate3d(${pointer.x * f.depth}px, ${pointer.y * f.depth}px, 0)`,
              transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
              opacity: f.dim ? 0.85 : 1,
              filter: f.dim ? "blur(0.3px)" : "none",
            }}
          >
            {/* base rotation, then bob/sway on top */}
            <div style={{ transform: `rotate(${f.rot}deg)` }}>
              <div className="bob" style={{ animationDuration: `${f.dur}s`, animationDelay: `${f.delay}ms` }}>
                <Product name={f.name} float={false} className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-5 lg:px-8 min-h-[86vh] flex flex-col items-center justify-center text-center py-24">
        <h1 className="display text-ink text-[2.9rem] sm:text-[4.2rem] lg:text-[5.4rem] leading-[1.03] max-w-[16ch]">
          {words.map((w, wi) => (
            <span key={wi} className="inline-block whitespace-nowrap">
              {[...w].map((ch, ci) => (
                <span key={ci} className="letter" style={{ animationDelay: delayFor() }}>
                  {ch}
                </span>
              ))}
              {wi < words.length - 1 && (
                <span className="letter" style={{ animationDelay: delayFor() }}>
                  &nbsp;
                </span>
              )}
            </span>
          ))}
        </h1>

        <p className="muted text-[1.05rem] mt-6 max-w-lg">
          Hormone, metabolic, and longevity care built for women — reviewed by
          licensed physicians, delivered to your door.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#evaluation" className="btn btn-ink">Find your treatment</a>
          <a href="#treatments" className="btn btn-outline-dark">Browse treatments</a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {["Physician reviewed", "US licensed pharmacies", "No membership required"].map((t) => (
            <span key={t} className="flex items-center gap-2 eyebrow text-ink-2/70">
              <span className="w-1 h-1 rounded-full bg-ink/30" />
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" aria-hidden>
        <span className="eyebrow text-ink-2/50">Scroll</span>
        <span className="w-px h-7 bg-gradient-to-b from-ink/30 to-transparent" />
      </div>
    </section>
  );
}
