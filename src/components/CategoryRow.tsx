"use client";

import { useRef } from "react";
import type { Treatment } from "@/lib/catalog/types";
import { COMPOUNDER_NOTE } from "@/lib/compliance";
import { ProtocolCard } from "@/components/ProtocolGroup";

/**
 * Homepage category row — the cinematic image banner with a horizontal-scroll
 * carousel of products overlapping it. The product boxes are the shared tinted
 * ProtocolCard (same as /peptides), so the two surfaces read identically. Each
 * card routes to its MyDose booking link, firing the site-wide neutral Lead.
 */
export default function CategoryRow({
  index,
  title,
  blurb,
  treatments,
  ctaLabel,
  bgImage,
  tint,
}: {
  index: string;
  title: string;
  blurb: string;
  treatments: Treatment[];
  ctaLabel: string;
  bgImage: string;
  tint: string;
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

        {/* Product cards overlapping the image — tinted peptides-style boxes */}
        <div className="relative z-10 -mt-[150px] lg:-mt-[170px]">
          <div
            ref={ref}
            className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 lg:px-8 pb-2 mx-auto max-w-[1440px]"
          >
            {treatments.map((t) => (
              <ProtocolCard
                key={t.id}
                t={t}
                tint={tint}
                className="shrink-0 snap-start w-[260px] sm:w-[290px] shadow-[0_24px_48px_-28px_rgba(20,20,20,0.35)]"
              />
            ))}
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

          {/* Compounder note (kept from the old card, now once per row) */}
          <p className="mx-auto max-w-[1440px] px-5 lg:px-8 mt-4 text-[0.72rem] leading-relaxed text-ink-2/55">
            {COMPOUNDER_NOTE}
          </p>
        </div>
      </div>
    </section>
  );
}
