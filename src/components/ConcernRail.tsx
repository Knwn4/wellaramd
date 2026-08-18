"use client";

import { useRef } from "react";

const CARDS = [
  { label: "Perimenopause", img: "/lifestyle/cat-perimenopause.jpg", href: "#womens-health" },
  { label: "Menopause", img: "/lifestyle/cat-menopause.jpg", href: "#womens-health" },
  { label: "Weight & Metabolic", img: "/lifestyle/cat-weight.jpg", href: "#treatments" },
  { label: "Longevity", img: "/lifestyle/cat-longevity.jpg", href: "#blueprint" },
  { label: "Skin & Hair", img: "/lifestyle/cat-skin.jpg", href: "#treatments" },
  { label: "Sleep & Mood", img: "/lifestyle/cat-sleep.jpg", href: "#womens-health" },
];

export default function ConcernRail() {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="bg-ink py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="flex items-end justify-between mb-7">
          <div>
            <span className="eyebrow" style={{ color: "#FFFEF8" }}>Care, by concern</span>
            <h2 className="display text-ivory text-[2rem] lg:text-[2.6rem] mt-2 leading-tight">
              Where would you like to begin?
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full border border-white/20 text-ivory/80 hover:bg-white/10 hover:text-ivory transition-colors flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full border border-white/20 text-ivory/80 hover:bg-white/10 hover:text-ivory transition-colors flex items-center justify-center"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory pb-1 -mx-5 px-5 lg:mx-0 lg:px-0"
        >
          {CARDS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group relative shrink-0 snap-start w-[260px] sm:w-[300px] h-[420px] rounded-2xl overflow-hidden"
            >
              <img
                src={c.img}
                alt={c.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(20,20,20,0.88) 0%, rgba(20,20,20,0.25) 45%, rgba(20,20,20,0.05) 100%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="display text-ivory text-[1.7rem] leading-tight">{c.label}</h3>
                <span
                  className="block mt-2 h-[2px] rounded-full transition-all duration-500 w-10 group-hover:w-20"
                  style={{ background: "#FFFEF8" }}
                />
              </div>
              <span className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/25 text-ivory/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
