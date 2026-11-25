import type { Metadata } from "next";
import Image from "next/image";
import { STATIC_CATALOG } from "@/lib/catalog/static";
import type { Treatment } from "@/lib/catalog/types";
import { COMPOUNDER_NOTE } from "@/lib/compliance";
import { GoalTile, ProtocolCard } from "@/components/ProtocolGroup";

/* ============================================================================
   /peptides — paid landing page (the ad destination for peptide traffic)

   Design is modeled on the Hers "Peptides+" LP (split hero + goal-grouped
   protocols + safety + what's-included + FAQ), rebuilt in WellaraMD's cream/ink
   palette with OUR compliant peptide lineup.

   LEAN FUNNEL (TJ, Nov 2026): the hero right panel is a 1-TAP GOAL ROUTER, not a
   quiz. Each goal is a real <a> to that product's MyDose consultation link, so
   the single neutral Lead fires on click-through (Analytics.tsx listens for any
   booking-link click on a tracked path). MyDose owns the clinical intake — this
   page asks NO health questions. Keep it that way.

   COMPLIANCE: products shown are the LegitScript-compliant active lineup only
   (NAD+, Sermorelin, Glutathione, B12). Do NOT add BPC-157 / GHK-Cu / CJC-Ipa /
   Tesamorelin / Retatrutide here — they were pulled for LegitScript. No results
   claims, no before/after, compounded pill + compounder note everywhere.

   >>> TJ: CONFIRM BEFORE THIS GOES LIVE <<<
   1. Prices mirror the MyDose sheet (NAD+ 262.50, Sermorelin 300, Glutathione
      349, B12 165). Confirm they still match the rate card.
   2. Compounded peptides are heavily restricted on Meta. Confirm the ad
      channel/angle before pointing paid traffic here.
   ========================================================================== */

export const metadata: Metadata = {
  title: "Start peptides",
  description:
    "Peptide and longevity therapy built for women. Prescribed and guided by licensed US providers, compounded by a US-licensed pharmacy, shipped to your door.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/peptides" },
};

/* ── Catalog pulls (DRY — booking links + prices come from the product sheet) ── */
const byId = (id: string): Treatment =>
  STATIC_CATALOG.find((t) => t.id === id) ?? STATIC_CATALOG[0];

const NAD = byId("nad");
const SERMORELIN = byId("sermorelin");
const GLUTATHIONE = byId("glutathione-inj");
const B12 = byId("methylcobalamin-b12");
const PT141 = byId("pt-141");

/* ── Hero 1-tap router: each goal routes straight to a product's MyDose link ── */
const GOALS: { label: string; note: string; product: Treatment; tint: string; icon: string }[] = [
  { label: "Longevity & anti-aging", note: "NAD+", product: NAD, tint: "linear-gradient(135deg,#EDF2EA,#D7E4CC)", icon: "M12 4l1.6 5.4L19 11l-5.4 1.6L12 18l-1.6-5.4L5 11l5.4-1.6z" },
  { label: "Energy & recovery", note: "Sermorelin", product: SERMORELIN, tint: "linear-gradient(135deg,#F5ECDF,#E9DAC2)", icon: "M13 3L6 13h5l-1 8 8-11h-5l1-7z" },
  { label: "Skin & glow", note: "Glutathione", product: GLUTATHIONE, tint: "linear-gradient(135deg,#F2E8EE,#E4D0DC)", icon: "M12 3c0 0 6 5.5 6 10a6 6 0 11-12 0c0-4.5 6-10 6-10z" },
  { label: "Everyday wellness", note: "Vitamin B12", product: B12, tint: "linear-gradient(135deg,#E8F0EC,#D2E3D9)", icon: "M12 20S4 15 4 9.5A3.5 3.5 0 0112 7a3.5 3.5 0 018 2.5C20 15 12 20 12 20z" },
];

/* ── Goal-grouped protocols (the Hers lifestyle groupings, our products).
   Each group leads with a lifestyle image tile; its vials sit on a soft tint. ── */
const GROUPS: {
  title: string;
  image: string;
  imagePos: string;
  tint: string;
  items: Treatment[];
}[] = [
  {
    title: "Longevity + Focus",
    image: "/lifestyle/pep-longevity.png",
    imagePos: "object-[50%_25%]",
    tint: "linear-gradient(180deg,#EDF2EA,#DBE7D2)",
    items: [NAD, B12],
  },
  {
    title: "Energy + Recovery",
    image: "/lifestyle/pep-energy.png",
    imagePos: "object-[50%_18%]",
    tint: "linear-gradient(180deg,#F5ECDF,#EADCC7)",
    items: [SERMORELIN, B12],
  },
  {
    title: "Skin + Glow",
    image: "/lifestyle/pep-skin.png",
    imagePos: "object-[50%_32%]",
    tint: "linear-gradient(180deg,#F2E8EE,#E6D4DF)",
    items: [GLUTATHIONE, B12],
  },
  {
    title: "Immunity + Repair",
    image: "/lifestyle/pep-immunity.png",
    imagePos: "object-[50%_18%]",
    tint: "linear-gradient(180deg,#E8F0EC,#D4E5DB)",
    items: [NAD, GLUTATHIONE],
  },
  {
    title: "Intimacy + Desire",
    image: "/lifestyle/pep-intimacy.png",
    imagePos: "object-[50%_32%]",
    tint: "linear-gradient(180deg,#F4E8E6,#EAD3CE)",
    items: [PT141],
  },
];

const SAFETY = [
  "Active ingredients from FDA-registered facilities",
  "Clinically guided protocols, never one size fits all",
  "Prescribed by providers licensed in your state",
  "Filled by US-licensed pharmacies",
  "Each vial tested for purity and potency",
  "Safely stored, handled, and shipped to your door",
];

const INCLUDED = [
  "An online visit with a provider licensed in your state",
  "A personalized plan, if it is medically appropriate for you",
  "Medication from a US-licensed pharmacy, shipped to your door",
  "A dosing plan and a clear how-to-inject guide",
  "Unlimited messaging with your care team",
  "Refills and adjustments as your provider directs",
];

const FAQ = [
  {
    q: "Why do peptides require a prescription?",
    a: "These are prescription-only therapies. A provider licensed in your state reviews your health history and decides whether a treatment is appropriate before anything is prescribed or shipped.",
  },
  {
    q: "Are these FDA approved?",
    a: "No. The compounded peptides, coenzymes, and vitamins shown here are not FDA approved and have not been evaluated by the FDA for safety, effectiveness, or quality. They are compounded by a US-licensed pharmacy for the individual patient.",
  },
  {
    q: "How are WellaraMD peptides made and handled?",
    a: "Prescriptions are filled by a US-licensed 503A pharmacy using active ingredients from FDA-registered facilities. Each vial is tested for purity and potency, then stored, handled, and packed for shipment.",
  },
  {
    q: "How are these treatments taken?",
    a: "Most are injectable. Your provider and your how-to guide walk you through dosing and administration, and your care team is a message away if you have questions.",
  },
  {
    q: "What does it cost to start, and what if I am not approved?",
    a: "A $20 consultation fee applies when you submit your intake, and it is not refundable. The rest is only a temporary hold at that point, and it is released if you are not approved. You are charged in full only once a licensed provider approves your treatment, and not everyone is approved.",
  },
  {
    q: "Who is it for, and where is it available?",
    a: "Adults 18 and older located in a state where our services are available at the time of their visit. Availability varies by state.",
  },
];

/* ── Primary CTA — a real MyDose booking link so the neutral Lead fires ── */
function Cta({
  href,
  className = "",
  label = "See your options",
}: {
  href: string;
  className?: string;
  label?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`btn btn-ink press ${className}`}
    >
      {label}
    </a>
  );
}

/* GoalTile + ProtocolCard now live in @/components/ProtocolGroup (shared with the homepage). */

/* ── Soft tinted feature card — brings the page's category colors into the
   safety and "what you get" lists so they match the protocol tiles. ── */
const FTINTS = [
  "linear-gradient(135deg,#EDF2EA,#DDE8D5)",
  "linear-gradient(135deg,#F5ECDF,#ECDFCB)",
  "linear-gradient(135deg,#F2E8EE,#E7D6E0)",
  "linear-gradient(135deg,#E8F0EC,#D8E7DE)",
  "linear-gradient(135deg,#F4E8E6,#ECD9D3)",
  "linear-gradient(135deg,#EDECF3,#E1DEEA)",
];
function Feature({ text, i }: { text: string; i: number }) {
  return (
    <div
      className="flex items-start gap-3.5 rounded-2xl p-4 lg:p-5"
      style={{ background: FTINTS[i % FTINTS.length] }}
    >
      <span className="mt-[1px] flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/75">
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-ink" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-[0.96rem] text-ink leading-snug pt-1">{text}</span>
    </div>
  );
}

export default function PeptidesPage() {
  return (
    <main className="bg-ivory text-ink">
      {/* slim top bar */}
      <header className="w-full px-5 lg:px-10 h-20 flex items-center justify-between">
        <a href="/" aria-label="WellaraMD home" className="logo text-[1.5rem] tracking-tight hover:opacity-80 transition-opacity">
          wellara<span className="align-super text-[0.62em] ml-[1px]">MD</span>
        </a>
        <a href="#protocols" className="eyebrow-s hidden sm:block text-ink-2 hover:text-ink transition-colors">
          Browse protocols
        </a>
      </header>

      {/* ───────────────── Hero — full-bleed split (Hers style): image + curved router panel ───────────────── */}
      <section id="start" className="relative">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] lg:min-h-[86vh]">
          {/* left — full-bleed lifestyle image, overlaid headline + compounded badge */}
          <div className="relative min-h-[58vh] lg:min-h-full">
            <Image
              src="/lifestyle/pep-hero.png"
              alt="A woman at ease"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover object-[50%_28%]"
            />
            {/* readability scrim */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/45" />
            <div className="absolute inset-0 p-7 lg:p-14 flex flex-col">
              <p className="eyebrow-s text-white/80">Peptides · Longevity · Vitality</p>
              <h1 className="display text-white text-[2.6rem] sm:text-[3.2rem] lg:text-[3.9rem] leading-[1.02] mt-4 max-w-[12ch]">
                Elevate your routine with peptides.
              </h1>
              <p className="mt-5 text-white/85 text-[1.05rem] leading-relaxed max-w-[24rem]">
                Peptide and longevity therapy, prescribed and guided by licensed
                US providers.
              </p>
              {/* frosted compounded badge */}
              <div className="mt-auto">
                <div className="inline-flex items-center gap-3 rounded-[26px] bg-white/15 backdrop-blur-md ring-1 ring-white/25 px-5 py-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/products/hero-vial.png" alt="" aria-hidden className="h-12 w-auto" />
                  <span className="text-white text-[0.72rem] leading-tight uppercase tracking-[0.18em] font-mono">
                    Compounded<br />in the U.S.A.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* right — white panel scooping into the image, with the 1-tap router */}
          <div className="relative z-10 flex items-center bg-ivory2 -mt-10 lg:mt-0 lg:-ml-16 rounded-t-[40px] lg:rounded-t-none lg:rounded-tl-[52px] lg:rounded-bl-[140px] shadow-[0_-24px_48px_-32px_rgba(20,20,20,0.3)] lg:shadow-[-30px_0_60px_-40px_rgba(20,20,20,0.3)]">
            <div className="w-full max-w-[540px] mx-auto px-7 py-12 lg:px-16 lg:py-10">
              <p className="eyebrow-s text-ink-2">What is your goal?</p>
              <h2 className="display text-[1.8rem] lg:text-[2.2rem] mt-3 max-w-[16ch]">
                Pick a goal. We route you to the right visit.
              </h2>
              <div className="mt-7 flex flex-col gap-3">
                {GOALS.map((g) => (
                  <a
                    key={g.label}
                    href={g.product.formUrl || "#protocols"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press group flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-ivory px-4 py-3.5 hover:border-ink hover:shadow-[0_18px_36px_-24px_rgba(20,20,20,0.5)] transition-all"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: g.tint }}>
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink" fill="none" stroke="currentColor" strokeWidth="1.7">
                        <path d={g.icon} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="flex flex-col flex-1">
                      <span className="text-[1.02rem] text-ink">{g.label}</span>
                      <span className="text-[0.78rem] text-muted">{g.note}</span>
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink/[0.06] text-ink transition group-hover:bg-ink group-hover:text-ivory">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
              <a href="#protocols" className="mt-5 inline-block text-[0.9rem] text-ink-2 underline underline-offset-4 hover:text-ink transition-colors">
                Not sure yet? See all protocols
              </a>
              <p className="mt-6 text-[0.8rem] text-muted leading-relaxed">
                100% online. A $20 consultation fee applies when you start. You are
                only charged for treatment if a licensed provider approves you. Not
                everyone is approved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── Protocols by goal ───────────────── */}
      <section id="protocols" className="border-t border-[var(--line-soft)] bg-ivory2">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8 py-16 lg:py-24">
          {/* header row — heading left, eligibility CTA right (Hers) */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="eyebrow-s text-ink-2 mb-4">The protocols</p>
              <h2 className="display text-[2rem] lg:text-[2.8rem] max-w-[14ch]">
                Take it to the next level.
              </h2>
              <p className="mt-4 muted text-[1.02rem] max-w-xl">
                Grouped by what you want to work on. A licensed provider decides
                what is right for you at your visit.
              </p>
            </div>
            <a href="#start" className="btn btn-ink press shrink-0 self-start sm:self-auto">
              See if you’re eligible
            </a>
          </div>

          <div className="mt-12 space-y-5">
            {GROUPS.map((grp) => (
              <div key={grp.title} className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                <GoalTile
                  title={grp.title}
                  image={grp.image}
                  imagePos={grp.imagePos}
                  wide={grp.items.length < 2}
                />
                {grp.items.map((t, i) => (
                  <ProtocolCard key={`${grp.title}-${t.id}-${i}`} t={t} tint={grp.tint} />
                ))}
              </div>
            ))}
          </div>

          <p className="mt-12 text-[0.8rem] text-muted leading-relaxed max-w-[52rem]">
            Compounded peptides, coenzymes, and vitamins shown here are emerging
            therapies that have not been subject to robust clinical trials, are
            not FDA approved, and have not been evaluated by the FDA for safety,
            effectiveness, or quality. Groupings reflect lifestyle and preference,
            not a claim about what any product can or cannot do. {COMPOUNDER_NOTE}
          </p>
        </div>
      </section>

      {/* ───────────────── Access treatment the right way (safety) ───────────────── */}
      <section className="mx-auto max-w-[1180px] px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="eyebrow-s text-ink-2 mb-4">The right way</p>
            <h2 className="display text-[2rem] lg:text-[2.6rem] max-w-[14ch]">
              Access treatment the right way.
            </h2>
            <p className="mt-5 text-ink-2 leading-relaxed max-w-[26rem]">
              No gray-market vials, no guesswork. Real providers, US-licensed
              pharmacies, and testing at every step.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {SAFETY.map((item, i) => (
              <Feature key={item} text={item} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Included with every plan ───────────────── */}
      <section className="border-t border-[var(--line-soft)] bg-sand">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
            <div>
              <p className="eyebrow-s text-ink-2 mb-4">What you get</p>
              <h2 className="display text-[2rem] lg:text-[2.6rem] max-w-[16ch]">
                Covered at every step.
              </h2>
              <p className="mt-5 text-ink-2 leading-relaxed max-w-[26rem]">
                One price per protocol. Your visit and your care team are included,
                and your plan adjusts as your body changes.
              </p>
              <Cta href={NAD.formUrl || "#protocols"} className="mt-8" label="See your options" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {INCLUDED.map((item, i) => (
                <Feature key={item} text={item} i={i + 3} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── FAQ ───────────────── */}
      <section className="border-t border-[var(--line-soft)]">
        <div className="mx-auto max-w-[800px] px-5 lg:px-8 py-16 lg:py-24">
          <p className="eyebrow-s text-ink-2 mb-8 text-center">Questions</p>
          <div className="divide-y divide-[var(--line-soft)]">
            {FAQ.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="display text-[1.2rem]">{f.q}</h3>
                <p className="mt-2.5 text-[0.98rem] leading-relaxed text-ink-2">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Final CTA ───────────────── */}
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8 py-20 lg:py-28 text-center">
          <h2 className="display text-[2.2rem] lg:text-[3rem] max-w-[18ch] mx-auto">
            Peptide care, done the right way.
          </h2>
          <p className="mt-5 text-ivory/70 max-w-[32rem] mx-auto leading-relaxed">
            Pick your goal and start your online visit. A licensed provider will
            review your health and decide what is right for you.
          </p>
          <Cta href="#start" className="mt-9 !bg-ivory !text-ink hover:!bg-blush" label="Pick your goal" />
        </div>
      </section>

      {/* ───────────────── Legal footer (slim) ───────────────── */}
      <footer className="bg-ivory2 border-t border-[var(--line-soft)]">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8 py-12 text-[0.8rem] leading-relaxed text-muted space-y-4">
          <p>
            WellaraMD LLC is a telehealth technology company, not a medical
            practice or a pharmacy. Medical services are provided by independent,
            licensed healthcare providers, and prescriptions are filled by
            US-licensed pharmacies. A licensed provider determines whether any
            treatment is medically appropriate for you, and not everyone is
            approved.
          </p>
          <p>
            Some treatments may be compounded. Compounded medications are not
            reviewed by the FDA for safety, effectiveness, or manufacturing
            quality. {COMPOUNDER_NOTE} This page is for general information and is
            not medical advice.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-ink-2">
            <a href="/" className="hover:text-ink">Home</a>
            <a href="/faq" className="hover:text-ink">FAQs</a>
            <a href="/privacy" className="hover:text-ink">Privacy Policy</a>
            <a href="/terms" className="hover:text-ink">Terms</a>
            <a href="/telehealth-consent" className="hover:text-ink">Telehealth Consent</a>
          </div>
          <p className="pt-2">
            WellaraMD LLC · 1081 N Tustin Ave, Ste 115, PMB #4026, Anaheim, CA
            92807 · (866) 667-5276
          </p>
        </div>
      </footer>
    </main>
  );
}
