"use client";

/* Unbranded product renders (SVG, no label text).
   LegitScript round 2 (Oct 2026): the old PNG renders carried a "wellora" label
   on the vial / pen / dropper / tube, which implied WellaraMD compounds the
   medication. These vector renders depict NO label and NO branding. Do not
   reintroduce a product label (blank or otherwise) here. */

import { useId } from "react";

type ProductName = "vial" | "pen" | "capsules" | "dropper" | "labkit";

export function Product({
  name,
  className = "",
  delay = 0,
  float = true,
  style = {},
}: {
  name: ProductName;
  className?: string;
  delay?: number;
  float?: boolean;
  style?: React.CSSProperties;
}) {
  const uid = useId().replace(/[:]/g, "");
  const g = (s: string) => `${uid}-${s}`;

  return (
    <svg
      viewBox="0 0 200 300"
      role="img"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
      className={`prod-shadow select-none pointer-events-none ${float ? "floaty" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms`, ...style }}
    >
      <defs>
        <linearGradient id={g("amber")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#DB9256" />
          <stop offset="0.5" stopColor="#B4652C" />
          <stop offset="1" stopColor="#89491D" />
        </linearGradient>
        <linearGradient id={g("gold")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E9D1A1" />
          <stop offset="0.5" stopColor="#C9A86A" />
          <stop offset="1" stopColor="#A57E3E" />
        </linearGradient>
        <linearGradient id={g("frost")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F6F3EC" />
          <stop offset="0.55" stopColor="#E4DECF" />
          <stop offset="1" stopColor="#CFC7B5" />
        </linearGradient>
        <linearGradient id={g("white")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FCFAF4" />
          <stop offset="0.5" stopColor="#ECE7DB" />
          <stop offset="1" stopColor="#D7D0C1" />
        </linearGradient>
      </defs>

      {name === "vial" && (
        <g>
          <rect x="56" y="92" width="88" height="176" rx="30" fill={`url(#${g("amber")})`} />
          <rect x="68" y="106" width="18" height="150" rx="9" fill="#fff" opacity="0.2" />
          <rect x="80" y="72" width="40" height="28" rx="6" fill={`url(#${g("amber")})`} opacity="0.92" />
          <rect x="72" y="44" width="56" height="34" rx="9" fill={`url(#${g("gold")})`} />
          <rect x="72" y="46" width="56" height="7" rx="3.5" fill="#fff" opacity="0.28" />
        </g>
      )}

      {name === "pen" && (
        <g>
          <rect x="84" y="24" width="32" height="60" rx="15" fill="#E7EFF1" opacity="0.75" />
          <rect x="82" y="76" width="36" height="12" rx="4" fill={`url(#${g("gold")})`} />
          <rect x="82" y="86" width="36" height="150" rx="16" fill={`url(#${g("white")})`} />
          <rect x="90" y="96" width="7" height="130" rx="3.5" fill="#fff" opacity="0.55" />
          <ellipse cx="100" cy="250" rx="26" ry="18" fill={`url(#${g("gold")})`} />
          <ellipse cx="100" cy="246" rx="22" ry="12" fill="#fff" opacity="0.18" />
        </g>
      )}

      {name === "dropper" && (
        <g>
          <rect x="86" y="26" width="28" height="42" rx="12" fill="#3B3B3B" />
          <rect x="78" y="64" width="44" height="22" rx="6" fill={`url(#${g("gold")})`} />
          <rect x="64" y="86" width="72" height="170" rx="26" fill={`url(#${g("frost")})`} />
          <rect x="76" y="98" width="15" height="140" rx="7.5" fill="#fff" opacity="0.5" />
        </g>
      )}

      {name === "capsules" && (
        <g>
          <g transform="rotate(-20 92 150)">
            <rect x="40" y="128" width="110" height="46" rx="23" fill={`url(#${g("amber")})`} />
            <rect x="40" y="128" width="55" height="46" rx="23" fill="#8A4A1E" />
            <rect x="52" y="136" width="86" height="8" rx="4" fill="#fff" opacity="0.28" />
          </g>
          <g transform="rotate(16 112 168)">
            <rect x="66" y="150" width="110" height="46" rx="23" fill={`url(#${g("amber")})`} />
            <rect x="121" y="150" width="55" height="46" rx="23" fill="#8A4A1E" />
            <rect x="78" y="158" width="86" height="8" rx="4" fill="#fff" opacity="0.28" />
          </g>
        </g>
      )}

      {name === "labkit" && (
        <g>
          <rect x="78" y="40" width="44" height="214" rx="22" fill="#EEF0F1" opacity="0.55" stroke="#D6D2C7" strokeWidth="2" />
          <rect x="82" y="150" width="36" height="100" rx="18" fill="#7E1C22" />
          <rect x="88" y="60" width="9" height="150" rx="4.5" fill="#fff" opacity="0.5" />
          <rect x="74" y="30" width="52" height="26" rx="8" fill={`url(#${g("gold")})`} />
          <rect x="74" y="32" width="52" height="6" rx="3" fill="#fff" opacity="0.28" />
        </g>
      )}
    </svg>
  );
}

/* Phone app mockup used in the Labs section */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[240px] h-[490px] rounded-[38px] bg-[#0e0e0e] p-2.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]">
      <div className="w-full h-full rounded-[30px] bg-cream overflow-hidden relative">
        {/* notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0e0e0e] rounded-full z-10" />
        <div className="pt-9 px-5">
          <p className="text-[0.7rem] muted">9:41</p>
          <p className="text-[1.4rem] text-ink mt-3 font-medium">Insights</p>
          <p className="text-[0.78rem] muted mt-1">Your results are in. Let&rsquo;s dig in.</p>

          {/* ring */}
          <div className="mt-6 flex justify-center">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="52" fill="none" stroke="#E7E0D2" strokeWidth="10" />
                <circle cx="60" cy="60" r="52" fill="none" stroke="#323232" strokeWidth="10" strokeLinecap="round" strokeDasharray="240 400" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[1.6rem] text-ink font-semibold">78</span>
                <span className="text-[0.6rem] muted">130 markers</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-2.5">
            {[
              ["Markers", "Optimal", "#323232"],
              ["Vitamin D", "Improving", "#A9803F"],
              ["A1c", "In range", "#323232"],
            ].map(([k, v, c]) => (
              <div key={k} className="flex items-center justify-between bg-white rounded-xl px-3.5 py-2.5">
                <span className="text-[0.8rem] text-ink">{k}</span>
                <span className="text-[0.72rem] font-medium" style={{ color: c as string }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
