"use client";

import { useEffect, useRef, useState } from "react";

/* ============================================================================
   Homepage hero — full-bleed muted/looping background video with the headline,
   subcopy, CTAs and trust badges overlaid (the modern telehealth pattern).
   Respects prefers-reduced-motion (holds on the poster) and gives a manual
   pause/play control. The clip is decorative only; no tracking, no sound.
   ========================================================================== */

const LINE = "Medicine that finally listens to women";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const words = LINE.split(" ");
  let charIndex = 0;
  const delayFor = () => `${160 + charIndex++ * 22}ms`;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      v.pause();
      setPlaying(false);
      return;
    }
    v.play().catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="top" className="relative overflow-hidden min-h-[100dvh] flex items-center">
      {/* background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        poster="/lifestyle/pep-hero.png"
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        <source src="/hero/hero.mp4" type="video/mp4" />
      </video>

      {/* legibility scrims */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-[1180px] w-full px-5 lg:px-8 py-24">
        {/* eyebrow pill tags */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="rounded-full bg-[#C7D9B8] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#3c4a33]">
            New
          </span>
          <span className="rounded-full bg-white/12 backdrop-blur ring-1 ring-white/30 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.08em] text-white">
            Built for women
          </span>
        </div>

        <h1 className="display text-white text-[3rem] sm:text-[4.4rem] lg:text-[5.6rem] leading-[1.0] max-w-[15ch]">
          {words.map((w, wi) => {
            const accent = w === "listens" || w === "women";
            return (
              <span key={wi} className="inline-block whitespace-nowrap">
                {[...w].map((ch, ci) => (
                  <span
                    key={ci}
                    className="letter"
                    style={{ animationDelay: delayFor(), color: accent ? "#C7D9B8" : undefined }}
                  >
                    {ch}
                  </span>
                ))}
                {wi < words.length - 1 && (
                  <span className="letter" style={{ animationDelay: delayFor() }}>
                    &nbsp;
                  </span>
                )}
              </span>
            );
          })}
        </h1>

        {/* frosted offer card */}
        <div className="mt-8 max-w-lg rounded-[22px] bg-white/12 backdrop-blur-md ring-1 ring-white/20 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
          <p className="text-white text-[1.02rem] leading-relaxed">
            <span className="font-medium">
              Weight, metabolic and longevity care, built for women.
            </span>{" "}
            <span className="text-white/75">
              Reviewed by licensed physicians and delivered to your door.
            </span>
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <a href="#treatments" className="btn btn-light">Find your treatment</a>
            <a
              href="#treatments"
              className="text-white/85 text-[0.9rem] underline underline-offset-4 hover:text-white transition-colors"
            >
              Browse treatments
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
          {["Physician reviewed", "US licensed pharmacies", "No membership required"].map((t) => (
            <span key={t} className="flex items-center gap-2 eyebrow-s text-white/70">
              <span className="w-1 h-1 rounded-full bg-white/50" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* pause / play control */}
      <button
        onClick={toggle}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="absolute bottom-6 right-6 z-10 h-11 w-11 rounded-full bg-white/15 backdrop-blur ring-1 ring-white/30 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
      >
        {playing ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2" aria-hidden>
        <span className="eyebrow-s text-white/60">Scroll</span>
        <span className="w-px h-7 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
