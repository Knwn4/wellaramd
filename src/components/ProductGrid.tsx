"use client";

import { useEffect, useMemo, useState } from "react";
import { Product } from "./Visuals";
import type { Treatment } from "@/lib/catalog/types";
import { COMPOUNDED_LABEL, COMPOUNDER_NOTE } from "@/lib/compliance";

type ProductName = "pen" | "vial" | "dropper" | "capsules" | "labkit";

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

function renderFor(t: Treatment): ProductName {
  const n = t.name.toLowerCase();
  const forms = (t.forms ?? []).map((f) => f.form.toLowerCase());
  if (/semaglutide|tirzepatide|retatrutide|glp/.test(n)) return "pen";
  if (forms.includes("oral")) return "capsules";
  if (forms.includes("sublingual") || forms.includes("topical")) return "dropper";
  if (/nad|b12|glutathione/.test(n)) return "capsules";
  return "vial";
}

/** "Injectable · Sublingual" etc. */
function formsLabel(t: Treatment): string | null {
  if (!t.forms || t.forms.length === 0) return null;
  return t.forms.map((f) => f.form).join(" · ");
}

/**
 * Where "Start" sends the patient. Priority:
 *   1. an explicit per-product formUrl (if ever set)
 *   2. the MyDose Open-Intake base URL + this product's intake form id
 *   3. the on-page evaluation CTA (until the base URL is configured)
 */
function intakeHref(t: Treatment): string {
  if (t.formUrl && t.formUrl.length > 0) return t.formUrl;
  const base = process.env.NEXT_PUBLIC_MYDOSE_INTAKE_URL;
  if (base && t.intakeFormId) {
    return `${base}${base.includes("?") ? "&" : "?"}form=${t.intakeFormId}`;
  }
  return "#evaluation";
}

function primaryLabel(t: Treatment): string {
  const c = ORDER.find((o) => t.categories.includes(o)) ?? t.categories[0];
  return LABELS[c] ?? "Physician prescribed";
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
            <span className="eyebrow text-ink-2">The Formulary</span>
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

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {visible.map((t) => {
            const multi = (t.forms?.length ?? 0) > 1;
            const href = intakeHref(t);
            const external = href.startsWith("http");
            const tint = tintFor(t);
            return (
              <a
                key={t.id}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="press group rounded-[var(--r)] bg-ivory2 border border-[var(--line-soft)] overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-32px_rgba(20,20,20,0.4)]"
              >
                {/* Tinted product stage — the per-category colour that gives the grid life */}
                <div
                  className="relative h-[230px] lg:h-[250px] flex items-center justify-center overflow-hidden"
                  style={{ background: tint.bg }}
                >
                  <span
                    className="absolute top-3.5 left-3.5 z-10 rounded-full bg-white/70 backdrop-blur-sm px-2.5 py-1 font-mono text-[0.56rem] uppercase tracking-wider"
                    style={{ color: tint.ink }}
                  >
                    {primaryLabel(t)}
                  </span>
                  <span className="absolute top-3.5 right-3.5 z-10 font-mono text-[0.6rem] uppercase tracking-wider text-ink-2/70">
                    Rx
                  </span>
                  <Product
                    name={renderFor(t)}
                    float={false}
                    className="h-[82%] w-[66%] object-contain transition-transform duration-500 group-hover:scale-[1.06] drop-shadow-[0_18px_30px_-16px_rgba(34,34,34,0.45)]"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-ink font-medium text-[1.05rem] leading-tight">
                    {t.name}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-[0.64rem]">
                    {formsLabel(t) && (
                      <span className="rounded-full bg-sand px-2 py-0.5 font-medium text-ink-2 ring-1 ring-[var(--line-soft)]">
                        {formsLabel(t)}
                      </span>
                    )}
                    {t.compounded && (
                      <span className="rounded-full border border-[var(--line)] px-2 py-0.5 uppercase tracking-wider text-ink-2">
                        {COMPOUNDED_LABEL}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto pt-4 flex items-end justify-between">
                    <span className="text-ink text-[1.05rem] font-medium">
                      {t.priceMonthly !== null ? (
                        <>
                          {multi && <span className="muted text-[0.72rem] font-normal">from </span>}
                          ${Number.isInteger(t.priceMonthly) ? t.priceMonthly.toLocaleString() : t.priceMonthly.toFixed(2)}
                          <span className="muted text-[0.74rem] font-normal"> / mo</span>
                        </>
                      ) : (
                        <span className="muted text-[0.85rem]">At consultation</span>
                      )}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/[0.06] text-ink transition group-hover:bg-ink group-hover:text-ivory">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>

                  {t.compounded && (
                    <p className="mt-3 pt-3 border-t border-[var(--line-soft)] text-[0.62rem] leading-snug text-ink-2/60">
                      {COMPOUNDER_NOTE}
                    </p>
                  )}
                </div>
              </a>
            );
          })}
        </div>

        {filtered.length > PAGE && (
          <div className="mt-12 flex justify-center">
            <button onClick={() => setExpanded((v) => !v)} className="btn btn-outline-dark">
              {expanded ? "Show less" : `Show all ${filtered.length}`}
            </button>
          </div>
        )}
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
