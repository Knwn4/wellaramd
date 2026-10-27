"use client";

import { useRef } from "react";
import { Product } from "./Visuals";
import type { Treatment } from "@/lib/catalog/types";

type ProductName = "pen" | "vial" | "dropper" | "capsules" | "labkit";

function renderFor(t: Treatment): ProductName {
  const n = t.name.toLowerCase();
  if (/semaglutide|tirzepatide|retatrutide|glp|lipo/.test(n)) return "pen";
  if (/nad|b12|glutathione/.test(n)) return "capsules";
  if (/dsip|epithalon|selank|semax/.test(n)) return "dropper";
  return "vial";
}

/** Short all-caps descriptor under the product name. */
function descriptorFor(t: Treatment): string {
  const n = t.name.toLowerCase();
  if (/tirzepatide/.test(n)) return "GLP-1 + GIP injection";
  if (/semaglutide/.test(n)) return "GLP-1 injection";
  if (/retatrutide/.test(n)) return "Next-generation GLP-1";
  if (/nad\+/.test(n)) return "Cellular energy support";
  if (/glutathione/.test(n)) return "Antioxidant, immune support";
  if (/b12|methylcobalamin/.test(n)) return "Energy and mood support";
  if (/sermorelin|tesamorelin|ipamorelin|cjc/.test(n)) return "Longevity peptide";
  if (/bpc|tb-500/.test(n)) return "Recovery and tissue repair";
  if (/epithalon/.test(n)) return "Longevity peptide";
  if (/ghk/.test(n)) return "Skin and collagen support";
  if (/kisspeptin|gonadorelin/.test(n)) return "Hormone signalling support";
  if (/dsip/.test(n)) return "Sleep support peptide";
  if (/dihexa|semax|selank/.test(n)) return "Cognitive support peptide";
  if (/mots-c|5-amino/.test(n)) return "Metabolic support peptide";
  if (/thymosin/.test(n)) return "Immune support peptide";
  return "Physician prescribed";
}

/** Where "Get started" sends the patient: direct booking link → intake base → on-page CTA. */
function intakeHref(t: Treatment): string {
  if (t.formUrl && t.formUrl.length > 0) return t.formUrl;
  const base = process.env.NEXT_PUBLIC_MYDOSE_INTAKE_URL;
  if (base && t.intakeFormId) {
    return `${base}${base.includes("?") ? "&" : "?"}form=${t.intakeFormId}`;
  }
  return "#evaluation";
}

export default function CategoryRow({
  index,
  title,
  blurb,
  treatments,
  ctaLabel,
  bgImage,
}: {
  index: string;
  title: string;
  blurb: string;
  treatments: Treatment[];
  ctaLabel: string;
  bgImage: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) =>
    ref.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  if (treatments.length === 0) return null;

  return (
    <section className="bg-ivory pt-6">
      {/* Image band with category title over it */}
      <div className="relative">
        <div className="relative h-[440px] lg:h-[520px] overflow-hidden">
          <img
            src={bgImage}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "grayscale(0.9) sepia(0.12) brightness(0.95)" }}
          />
          {/* legibility scrim */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(20,20,20,0.72) 0%, rgba(20,20,20,0.4) 45%, rgba(20,20,20,0.12) 100%)",
            }}
          />

          <div className="relative h-full mx-auto max-w-[1440px] px-5 lg:px-8 pt-12 lg:pt-16">
            <h2 className="display text-ivory text-[3.4rem] sm:text-[5rem] lg:text-[6.4rem] leading-[0.95]">
              {title}
            </h2>
            <div className="mt-6 max-w-sm">
              <span className="eyebrow text-ivory/60">{index}</span>
              <p className="text-ivory/85 text-[0.98rem] mt-3 leading-relaxed">
                {blurb}
              </p>
            </div>
          </div>
        </div>

        {/* Product cards overlapping the image */}
        <div className="relative z-10 -mt-[150px] lg:-mt-[170px]">
          <div
            ref={ref}
            className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 lg:px-8 pb-2 mx-auto max-w-[1440px]"
          >
            {treatments.map((t) => {
              const href = intakeHref(t);
              const external = href.startsWith("http");
              return (
              <article
                key={t.id}
                className="group shrink-0 snap-start w-[270px] sm:w-[300px] rounded-2xl bg-ivory2 border border-[var(--line-soft)] shadow-[0_28px_56px_-32px_rgba(20,20,20,0.45)] overflow-hidden flex flex-col"
              >
                {/* header */}
                <div className="px-5 pt-5">
                  <h3 className="text-ink text-[1.02rem] font-medium leading-tight">
                    {t.name}
                    <sup className="ml-1 font-mono text-[0.58rem] text-ink-2">Rx</sup>
                  </h3>
                  <p className="eyebrow text-ink-2/70 mt-1.5 leading-snug">
                    {descriptorFor(t)}
                  </p>
                </div>

                {/* product */}
                <div className="relative h-[210px] flex items-center justify-center px-5">
                  <Product
                    name={renderFor(t)}
                    float={false}
                    className="h-[88%] w-[64%] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* price */}
                <div className="px-5 pb-4 flex items-baseline gap-2">
                  {t.priceMonthly !== null && (
                    <span className="text-ink text-[1rem] font-medium">
                      ${Number.isInteger(t.priceMonthly) ? t.priceMonthly.toLocaleString() : t.priceMonthly.toFixed(2)}
                      <span className="muted text-[0.72rem] font-normal"> / mo</span>
                    </span>
                  )}
                  {t.discounts.length > 0 && (
                    <span className="font-mono text-[0.6rem] rounded-full px-2 py-0.5 border border-[var(--line)] text-ink-2">
                      −{Math.max(...t.discounts.map((d) => d.percent))}%
                    </span>
                  )}
                </div>

                {/* footer — single CTA to the product's booking page */}
                <div className="mt-auto border-t border-[var(--line-soft)]">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="block py-3.5 text-center text-[0.85rem] font-medium bg-ink text-ivory hover:bg-ink-2 transition-colors"
                  >
                    Get started
                  </a>
                </div>
              </article>
              );
            })}
          </div>

          <div className="mx-auto max-w-[1440px] px-5 lg:px-8 mt-8 flex items-center justify-between">
            <a href="#treatments" className="btn btn-outline-dark">{ctaLabel}</a>
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Previous"
                className="w-11 h-11 rounded-full bg-ink text-ivory hover:bg-ink-2 transition-colors flex items-center justify-center"
              >
                ←
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Next"
                className="w-11 h-11 rounded-full bg-ink text-ivory hover:bg-ink-2 transition-colors flex items-center justify-center"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
