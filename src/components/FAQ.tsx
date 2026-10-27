"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "What is WellaraMD?",
    a: "A telehealth company focused on weight, metabolic, and longevity care. We connect you with independent, licensed providers and US-licensed pharmacies through our platform partner, MyDose. WellaraMD is not a medical practice or pharmacy and does not itself diagnose, treat, or dispense medication.",
  },
  {
    q: "Is a prescription guaranteed?",
    a: "No. A prescription is issued only if a licensed provider determines a treatment is medically appropriate for you after reviewing your health information. If you are not approved, you are not charged for medication.",
  },
  {
    q: "Are these medications FDA-approved?",
    a: "Some are FDA-approved medications. Others are compounded medications prepared by licensed US pharmacies under FDA-regulated 503A or 503B authority; the specific compounded formulation has not undergone separate FDA approval. Your provider will tell you which is which, and FDA-approved alternatives may be available.",
  },
  {
    q: "Do you accept insurance?",
    a: "No. Services are self-pay with transparent pricing and no membership or hidden fees. You may be able to use an HSA or FSA card, depending on your plan.",
  },
  {
    q: "Which states do you serve?",
    a: "All 50 states, though availability of specific treatments may vary by state. You must be physically located in a state we serve at the time of your evaluation.",
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
          <a href="/faq" className="inline-flex items-center gap-1.5 eyebrow text-ink mt-6 hover:opacity-70 transition-opacity">
            See all FAQs <span aria-hidden>→</span>
          </a>
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
