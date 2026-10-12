"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "Who is WellaraMD for?",
    a: "Women navigating perimenopause, menopause, thyroid and metabolic changes, or anyone who has been told their labs are 'normal' while still feeling unwell. Care is delivered entirely online and reviewed by licensed providers.",
  },
  {
    q: "Do I need insurance?",
    a: "No. Pricing is transparent and your medical review, treatment, and shipping are quoted up front. There are no membership requirements or hidden fees.",
  },
  {
    q: "What if I'm not approved for treatment?",
    a: "If a provider determines a treatment isn't clinically appropriate for you, you aren't charged for it. A provider will always explain the reasoning and, where possible, suggest alternatives.",
  },
  {
    q: "How long does delivery take?",
    a: "Once your intake is reviewed and a prescription is approved, treatments typically ship within a few business days in discreet packaging.",
  },
  {
    q: "Are these treatments FDA approved?",
    a: "Some are FDA-approved medications. Others are compounded preparations, which are not FDA-approved for safety or effectiveness and are prescribed only when clinically appropriate by a licensed provider. Your physician will tell you which is which.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ivory py-14 lg:py-28 border-t border-[var(--line-soft)]">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
        <div>
          <h2 className="display text-ink text-[2.4rem] lg:text-[3.4rem] leading-[1.02]">
            Frequently
            <br />
            <span className="display-i">asked questions</span>
          </h2>
          <p className="muted text-[1rem] mt-5 max-w-sm">
            Common questions about treatment, the medical review, and how care works.
          </p>
        </div>

        <div>
          {ITEMS.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="border-b border-[var(--line)]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-ink text-[1.08rem] font-medium">{it.q}</span>
                  <span
                    className="shrink-0 w-7 h-7 rounded-full border border-[var(--line)] flex items-center justify-center text-ink-2 transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: isOpen ? 320 : 0, opacity: isOpen ? 1 : 0 }}
                >
                  <p className="muted text-[0.98rem] leading-relaxed pb-6 pr-10">
                    {it.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
