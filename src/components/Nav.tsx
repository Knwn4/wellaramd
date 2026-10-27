"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="w-full bg-sand text-ink text-center text-[0.9rem] py-2.5 px-4">
        <span className="opacity-90">Modern metabolic and longevity care, built for women.</span>{" "}
        <a href="#evaluation" className="font-semibold underline underline-offset-2 inline-flex items-center gap-1">
          Begin your evaluation <span aria-hidden>→</span>
        </a>
      </div>

      {/* Nav */}
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#top" className="logo text-[1.9rem] leading-none text-ink lowercase tracking-tight">
              wellara<span className="uppercase text-gold">MD</span>
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://app.mydose.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light btn-sm border border-black/10"
              >
                Log in
              </a>
              <button
                aria-label="Menu"
                onClick={() => setOpen((v) => !v)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
              >
                <div className="flex flex-col gap-[5px]">
                  <span className={`block w-5 h-[1.5px] bg-ink transition-all ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
                  <span className={`block w-5 h-[1.5px] bg-ink transition-all ${open ? "opacity-0" : ""}`} />
                  <span className={`block w-5 h-[1.5px] bg-ink transition-all ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Slide-down menu panel */}
        <div
          className={`overflow-hidden transition-all duration-500 border-t border-black/5 ${
            open ? "max-h-[520px]" : "max-h-0"
          }`}
        >
          <div className="mx-auto max-w-[1440px] px-5 lg:px-8 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { h: "Treatments", items: [
                { l: "Browse all", href: "#treatments" },
                { l: "Weight & metabolic", href: "#treatments" },
                { l: "Longevity & peptides", href: "#treatments" },
              ] },
              { h: "How it works", items: [
                { l: "The process", href: "#how-it-works" },
                { l: "Labs", href: "#labs" },
                { l: "FAQs", href: "/faq" },
              ] },
              { h: "Company", items: [
                { l: "Our providers", href: "#physicians" },
                { l: "Start your evaluation", href: "#evaluation" },
                { l: "Contact", href: "mailto:support@wellaramd.com" },
              ] },
            ].map((col) => (
              <div key={col.h}>
                <div className="text-[0.72rem] uppercase tracking-[0.14em] muted mb-4">{col.h}</div>
                <ul className="space-y-3">
                  {col.items.map((it) => (
                    <li key={it.l}>
                      <a href={it.href} onClick={() => setOpen(false)} className="text-[1.05rem] text-ink hover:text-clay transition-colors">
                        {it.l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
