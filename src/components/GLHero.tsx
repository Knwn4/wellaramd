"use client";

import { useEffect, useRef, useState } from "react";

const LINE = "Medicine that finally listens to women";

type Vital = {
  label: string;
  value: string;
  unit?: string;
  dir: "up" | "down" | "steady";
  note: string;
  pos: string;
  w: string;
  rot: number;
  delay: number; // bob animation offset
  depth: number; // parallax strength
  dur: number; // bob duration (varied for organic motion)
  dim?: boolean; // background layer
};

/** Two layers of floating biomarker cards around the headline. */
const VITALS: Vital[] = [
  // foreground — large, sharp
  { label: "Estradiol",     value: "82",     unit: "pg/mL",  dir: "up",   note: "in range",  pos: "left-[2%] top-[11%]",      w: "w-[150px] lg:w-[178px]", rot: -5, delay: 0,    depth: 26, dur: 7.5 },
  { label: "Resting HR",    value: "58",     unit: "bpm",    dir: "down", note: "−6",         pos: "left-[9%] bottom-[9%]",    w: "w-[150px] lg:w-[176px]", rot: 4,  delay: 900,  depth: 34, dur: 8.5 },
  { label: "HRV",           value: "74",     unit: "ms",     dir: "up",   note: "+12",        pos: "right-[3%] top-[9%]",      w: "w-[150px] lg:w-[178px]", rot: 5,  delay: 450,  depth: 30, dur: 6.8 },
  { label: "Sleep score",   value: "91",     unit: "",       dir: "up",   note: "+8",         pos: "right-[9%] bottom-[11%]",  w: "w-[148px] lg:w-[172px]", rot: -4, delay: 1350, depth: 38, dur: 9 },
  // mid-ground — smaller, dim
  { label: "Progesterone",  value: "11",     unit: "ng/mL",  dir: "steady", note: "balanced", pos: "left-[9%] top-[26%]",     w: "w-[128px] lg:w-[150px]", rot: 3,  delay: 600,  depth: 12, dur: 6.2, dim: true },
  { label: "Cortisol",      value: "12",     unit: "µg/dL",  dir: "down", note: "−22%",       pos: "right-[9%] top-[25%]",    w: "w-[128px] lg:w-[150px]", rot: -6, delay: 1800, depth: 14, dur: 7.8, dim: true },
  { label: "Bio age",       value: "−4.2",   unit: "yrs",    dir: "down", note: "younger",    pos: "left-[29%] top-[3%]",     w: "w-[126px] lg:w-[146px]", rot: 6,  delay: 300,  depth: 16, dur: 8.2, dim: true },
  { label: "VO₂ max",       value: "41",     unit: "",       dir: "up",   note: "+5",         pos: "right-[28%] bottom-[4%]", w: "w-[124px] lg:w-[144px]", rot: -5, delay: 2100, depth: 18, dur: 7.1, dim: true },
  { label: "Vitamin D",     value: "48",     unit: "ng/mL",  dir: "up",   note: "optimal",    pos: "left-[0%] top-[48%]",     w: "w-[126px] lg:w-[148px]", rot: 5,  delay: 1200, depth: 22, dur: 8.8, dim: true },
  { label: "Testosterone",  value: "34",     unit: "ng/dL",  dir: "up",   note: "restored",   pos: "right-[0%] top-[51%]",    w: "w-[126px] lg:w-[148px]", rot: -6, delay: 2400, depth: 20, dur: 6.6, dim: true },
  { label: "Energy",        value: "+36%",   unit: "",       dir: "up",   note: "8 wks",      pos: "left-[22%] bottom-[5%]",  w: "w-[122px] lg:w-[142px]", rot: 4,  delay: 1650, depth: 15, dur: 7.4, dim: true },
  { label: "Deep sleep",    value: "1h 48m", unit: "",       dir: "up",   note: "+31m",       pos: "right-[22%] top-[5%]",    w: "w-[122px] lg:w-[142px]", rot: -3, delay: 750,  depth: 17, dur: 8.1, dim: true },
];

const GOOD = "#4a7c59"; // muted sage for positive movement

function VitalCard({ v }: { v: Vital }) {
  const arrow = v.dir === "up" ? "↑" : v.dir === "down" ? "↓" : "•";
  return (
    <div className="rounded-2xl bg-white/85 backdrop-blur-sm border border-[var(--line-soft)] shadow-[0_18px_44px_-26px_rgba(20,20,20,0.5)] px-3.5 py-3">
      <div className="eyebrow text-ink-2/70 text-[0.55rem]">{v.label}</div>
      <div className="flex items-baseline gap-1 mt-1.5">
        <span className="display text-ink text-[1.45rem] leading-none">{v.value}</span>
        {v.unit && <span className="muted text-[0.58rem]">{v.unit}</span>}
      </div>
      <div
        className="mt-2 flex items-center gap-1 font-mono text-[0.55rem] uppercase tracking-wide"
        style={{ color: v.dir === "steady" ? "rgba(74,74,74,0.6)" : GOOD }}
      >
        <span aria-hidden>{arrow}</span>
        {v.note}
      </div>
    </div>
  );
}

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
      <div className="drift-a absolute left-[38%] top-[34%] w-[30%] h-[36%] rounded-full blur-3xl opacity-40 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(74,124,89,0.06), transparent 70%)", animationDelay: "6s" }} aria-hidden />

      {/* Floating vitals field */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {VITALS.map((v, i) => (
          <div
            key={i}
            className={`absolute ${v.pos} ${v.w} hidden sm:block`}
            style={{
              transform: `translate3d(${pointer.x * v.depth}px, ${pointer.y * v.depth}px, 0)`,
              transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
              opacity: v.dim ? 0.9 : 1,
            }}
          >
            {/* base rotation, then bob/sway on top */}
            <div style={{ transform: `rotate(${v.rot}deg)` }}>
              <div className="bob" style={{ animationDuration: `${v.dur}s`, animationDelay: `${v.delay}ms` }}>
                <VitalCard v={v} />
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
