"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";

export default function Blueprint() {
  const [age, setAge] = useState(46);
  const [commit, setCommit] = useState(70); // protocol commitment %

  // biological-age reduction scales with commitment (up to ~9 years)
  const reduction = +((commit / 100) * 9).toFixed(1);
  const bioAge = Math.max(21, +(age - reduction).toFixed(1));

  const metrics = [
    { label: "Energy & vitality", value: 40 + commit * 0.58 },
    { label: "Sleep quality", value: 46 + commit * 0.52 },
    { label: "Recovery & repair", value: 38 + commit * 0.6 },
    { label: "Metabolic health", value: 44 + commit * 0.54 },
  ];

  // ring geometry
  const R = 78;
  const C = 2 * Math.PI * R;
  const pct = Math.min(1, reduction / 9);

  return (
    <section
      id="blueprint"
      className="relative px-3 lg:px-5 py-6"
    >
      <Spotlight
        radius={520}
        className="mx-auto max-w-[1440px] rounded-[var(--r)] grain overflow-hidden px-6 lg:px-16 py-16 lg:py-24"
        style={{ background: "radial-gradient(130% 110% at 15% 0%, #323232, #141414 78%)" }}
      >
        {/* botanical accent */}
        <svg className="absolute right-[-4%] top-[-8%] w-[42%] max-w-[560px] opacity-[0.12] pointer-events-none" viewBox="0 0 400 400" fill="none" aria-hidden>
          <g stroke="#FFFEF8" strokeWidth="1">
            <path d="M200 380C200 260 150 210 90 180c60-30 110-80 110-180 0 100 50 150 110 180-60 30-110 80-110 200z" />
            <ellipse cx="200" cy="200" rx="150" ry="150" opacity="0.5" />
          </g>
        </svg>

        <div className="relative grid lg:grid-cols-2 gap-14 items-center">
          {/* Copy + controls */}
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-rule" style={{ background: "#FFFEF8" }} />
              <span className="eyebrow" style={{ color: "#FFFEF8" }}>Your Longevity Blueprint</span>
            </div>
            <h2 className="display text-ivory text-[2.8rem] lg:text-[4rem] leading-[1.02]">
              See the years
              <br />
              <span className="display-i" style={{ color: "#FFFEF8" }}>you could reclaim.</span>
            </h2>
            <p className="mt-5 text-ivory/70 text-[1.05rem] max-w-md">
              Move the sliders to preview how a physician guided protocol could
              shift your biological age and vitality over time.
            </p>

            <div className="mt-10 space-y-8 max-w-md">
              <Slider
                label="Your age"
                value={age}
                min={30}
                max={70}
                suffix=" yrs"
                onChange={setAge}
              />
              <Slider
                label="Protocol commitment"
                value={commit}
                min={0}
                max={100}
                suffix="%"
                onChange={setCommit}
              />
            </div>
          </Reveal>

          {/* Interactive readout */}
          <Reveal delay={120}>
            <div
              className="rounded-2xl p-8 lg:p-10 border border-white/12"
              style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))" }}
            >
              <div className="flex items-center gap-8">
                {/* ring */}
                <div className="relative shrink-0" style={{ width: 176, height: 176 }}>
                  <svg viewBox="0 0 176 176" className="w-full h-full -rotate-90">
                    <circle cx="88" cy="88" r={R} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="10" />
                    <circle
                      cx="88" cy="88" r={R} fill="none" stroke="#FFFEF8" strokeWidth="10" strokeLinecap="round"
                      strokeDasharray={C}
                      strokeDashoffset={C * (1 - pct)}
                      style={{ transition: "stroke-dashoffset 0.5s cubic-bezier(0.22,1,0.36,1)" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-ivory/55 text-[0.66rem] tracking-[0.15em] uppercase">Biological age</span>
                    <span className="display text-ivory text-[3.2rem] leading-none mt-1">{bioAge}</span>
                    <span className="text-[0.78rem]" style={{ color: "#FFFEF8" }}>
                      −{reduction} yrs
                    </span>
                  </div>
                </div>

                {/* metrics */}
                <div className="flex-1 space-y-4">
                  {metrics.map((m) => (
                    <div key={m.label}>
                      <div className="flex justify-between text-[0.8rem] text-ivory/75 mb-1.5">
                        <span>{m.label}</span>
                        <span style={{ color: "#FFFEF8" }}>{Math.round(Math.min(99, m.value))}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/12 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${Math.min(99, m.value)}%`,
                            background: "linear-gradient(90deg, #222222, #FFFEF8)",
                            transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#evaluation" className="btn btn-gold w-full mt-9" style={{ background: "#FFFEF8", color: "#141414" }}>
                Build my real blueprint
              </a>
              <p className="text-center text-ivory/40 text-[0.72rem] mt-3">
                Illustrative preview. Your plan is designed by a WellaraMD physician.
              </p>
            </div>
          </Reveal>
        </div>
      </Spotlight>
    </section>
  );
}

function Slider({
  label, value, min, max, suffix, onChange,
}: {
  label: string; value: number; min: number; max: number; suffix: string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex justify-between items-baseline mb-3">
        <span className="text-ivory/80 text-[0.95rem]">{label}</span>
        <span className="display text-ivory text-[1.6rem]">
          {value}
          <span className="text-ivory/55 text-[0.9rem] ml-0.5">{suffix}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        className="wellora-range w-full"
        style={{
          background: `linear-gradient(90deg, #FFFEF8 ${pct}%, rgba(255,255,255,0.15) ${pct}%)`,
        }}
      />
    </div>
  );
}
