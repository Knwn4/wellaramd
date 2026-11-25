"use client";

import { useEffect, useMemo, useState } from "react";
import type { Treatment } from "@/lib/catalog/types";
import { COMPOUNDER_NOTE } from "@/lib/compliance";
import { ProtocolCard } from "@/components/ProtocolGroup";

const LABELS: Record<string, string> = {
  "weight-loss": "Weight & Metabolic",
  "hormones-women": "Hormone Balance",
  "hormones-men": "Hormone Balance",
  longevity: "Longevity",
  recovery: "Recovery & Repair",
  sleep: "Sleep",
  energy: "Energy",
  "sexual-health": "Sexual Health",
  focus: "Focus",
  immunity: "Immunity",
  "gut-health": "Gut Health",
  performance: "Performance",
};

const ORDER = [
  "weight-loss",
  "hormones-women",
  "hormones-men",
  "longevity",
  "recovery",
  "performance",
  "sleep",
  "sexual-health",
  "energy",
  "focus",
  "immunity",
  "gut-health",
];

/* Per-category tinted product stage (the Club Cheat Code move). Muted, warm,
   feminine pastels that stay inside WellaraMD's luxury palette — they give the
   grid colour variety and make the vial pop instead of washing out on cream.
   bg = stage behind the product, ink = the category pill text on that stage. */
const TINT: Record<string, { bg: string; ink: string }> = {
  "weight-loss": { bg: "#EFE6E3", ink: "#7B574E" }, // warm rose-taupe
  "hormones-women": { bg: "#F0E7EC", ink: "#7C566A" }, // soft rose
  "hormones-men": { bg: "#E9EDEF", ink: "#51636B" }, // cool stone
  longevity: { bg: "#E8EEE6", ink: "#51664F" }, // soft sage
  recovery: { bg: "#F1EADF", ink: "#796A4C" }, // warm sand
  performance: { bg: "#E8ECEF", ink: "#53636C" }, // slate
  sleep: { bg: "#E8E9F1", ink: "#565A7C" }, // dusk
  "sexual-health": { bg: "#EFE5EB", ink: "#7A5570" }, // muted mauve
  energy: { bg: "#F4EADD", ink: "#886843" }, // warm peach
  focus: { bg: "#EAE7F1", ink: "#5E5880" }, // lavender
  immunity: { bg: "#E6EEEB", ink: "#4D675F" }, // eucalyptus
  "gut-health": { bg: "#ECEAE0", ink: "#6B6646" }, // olive
};
const DEFAULT_TINT = { bg: "#F0EEE7", ink: "#5E5A4E" };

function tintFor(t: Treatment) {
  const c = ORDER.find((o) => t.categories.includes(o)) ?? t.categories[0];
  return TINT[c] ?? DEFAULT_TINT;
}

/** A soft vertical gradient from the category tint, matching the /peptides cards. */
function gradientFor(t: Treatment): string {
  const { bg } = tintFor(t);
  return `linear-gradient(180deg, color-mix(in srgb, ${bg} 45%, #ffffff), ${bg})`;
}

const PAGE = 12;

export default function ProductGrid({ treatments }: { treatments: Treatment[] }) {
  const [active, setActive] = useState<string>("all");
  const [expanded, setExpanded] = useState(false);

  const cats = useMemo(() => {
    const present = new Set<string>();
    treatments.forEach((t) => t.categories.forEach((c) => present.add(c)));
    return ORDER.filter((c) => present.has(c));
  }, [treatments]);

  // The hero goal selector drives this filter via a window event (no URL coupling).
  useEffect(() => {
    function onSet(e: Event) {
      const cat = (e as CustomEvent).detail?.category as string | undefined;
      if (!cat) return;
      if (cat === "all" || cats.includes(cat)) {
        setActive(cat);
        setExpanded(false);
      }
    }
    window.addEventListener("wellara:setTreatmentFilter", onSet);
    return () => window.removeEventListener("wellara:setTreatmentFilter", onSet);
  }, [cats]);

  const filtered = useMemo(
    () =>
      active === "all"
        ? treatments
        : treatments.filter((t) => t.categories.includes(active)),
    [treatments, active]
  );

  const visible = expanded ? filtered : filtered.slice(0, PAGE);

  return (
    <section id="treatments" className="bg-ivory py-14 lg:py-28 border-t border-[var(--line-soft)]">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        {/* Header — headline left, filters right on desktop */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-10">
          <div>
            <span className="eyebrow-s text-ink-2">The Formulary</span>
            <h2 className="display text-ink text-[2.6rem] lg:text-[3.8rem] leading-[1.03] mt-3">
              Explore every treatment.
            </h2>
            <p className="muted text-[1.02rem] mt-4 max-w-xl">
              {treatments.length} physician-prescribed protocols. Filter by what
              you want to work on — every price includes your consultation.
            </p>
            <p className="muted text-[0.78rem] mt-3 max-w-xl">
              Prescription-only. A prescription is issued only after evaluation by
              a licensed provider, where clinically appropriate. Availability
              varies by state. Prices shown are illustrative until confirmed at
              evaluation.
            </p>
          </div>

          <div className="flex items-center gap-3 lg:pb-2">
            <span className="eyebrow text-ink-2/60 whitespace-nowrap">
              {filtered.length} shown
            </span>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          <Tab label="All" active={active === "all"} onClick={() => { setActive("all"); setExpanded(false); }} />
          {cats.map((c) => (
            <Tab
              key={c}
              label={LABELS[c] ?? c}
              active={active === c}
              onClick={() => { setActive(c); setExpanded(false); }}
            />
          ))}
        </div>

        {/* Grid — shared tinted ProtocolCard, same as /peptides and the homepage rows */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {visible.map((t) => (
            <ProtocolCard key={t.id} t={t} tint={gradientFor(t)} />
          ))}
        </div>

        {filtered.length > PAGE && (
          <div className="mt-12 flex justify-center">
            <button onClick={() => setExpanded((v) => !v)} className="btn btn-outline-dark">
              {expanded ? "Show less" : `Show all ${filtered.length}`}
            </button>
          </div>
        )}

        <p className="mt-10 text-[0.72rem] leading-relaxed text-ink-2/55 max-w-[52rem]">
          {COMPOUNDER_NOTE}
        </p>
      </div>
    </section>
  );
}

function Tab({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-[0.88rem] transition-colors border ${
        active
          ? "bg-ink text-ivory border-ink"
          : "bg-transparent text-ink-2 border-[var(--line)] hover:border-ink"
      }`}
    >
      {label}
    </button>
  );
}
