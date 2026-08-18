"use client";

import { useMemo, useState } from "react";
import { Product } from "./Visuals";
import type { Treatment } from "@/lib/catalog/types";

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

  const filtered = useMemo(
    () =>
      active === "all"
        ? treatments
        : treatments.filter((t) => t.categories.includes(active)),
    [treatments, active]
  );

  const visible = expanded ? filtered : filtered.slice(0, PAGE);

  return (
    <section id="treatments" className="bg-ivory py-20 lg:py-28 border-t border-[var(--line-soft)]">
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
            return (
              <a
                key={t.id}
                href={href}
                data-product={t.name}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="press group rounded-[var(--r)] bg-ivory2 border border-[var(--line-soft)] overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-32px_rgba(20,20,20,0.4)]"
              >
                <div className="relative h-[230px] lg:h-[260px] flex items-center justify-center bg-ivoryCard/60">
                  <span className="absolute top-4 left-4 font-mono text-[0.6rem] uppercase tracking-wider border border-[var(--line)] rounded px-1.5 py-0.5 text-ink-2">
                    Rx
                  </span>
                  {formsLabel(t) && (
                    <span className="absolute top-4 right-4 font-mono text-[0.58rem] uppercase tracking-wider text-ink-2/70">
                      {formsLabel(t)}
                    </span>
                  )}
                  <Product
                    name={renderFor(t)}
                    float={false}
                    className="h-[88%] w-[70%] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="eyebrow text-ink-2/70">{primaryLabel(t)}</div>
                  <h3 className="text-ink font-medium text-[1.05rem] mt-2 leading-tight">
                    {t.name}
                  </h3>

                  <div className="mt-auto pt-4 flex items-baseline justify-between">
                    <span className="text-ink text-[1rem] font-medium">
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
                    <span className="font-mono text-[0.62rem] text-ink-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Start →
                    </span>
                  </div>
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
