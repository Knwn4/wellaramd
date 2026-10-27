import type { Metadata } from "next";
import Image from "next/image";

/* ============================================================================
   /start — paid landing page (the ad destination)

   This page is the neutral-path LP that cold paid traffic lands on. It is on the
   analytics tracked-path allowlist, so the single neutral Lead fires when the
   visitor clicks through to MyDose. It asks NO health questions itself (that is
   the MyDose intake); it is marketing only. Keep it that way.

   HORMONE-STRIPPED (Oct 2026): this LP is now the weight / metabolic (GLP-1)
   destination, wired to the live Tirzepatide + B12 MyDose booking link. No
   hormone-therapy copy here.

   >>> TJ: CONFIRM BEFORE THIS GOES LIVE <<<
   1. HERO.priceFrom = 249 is the Tirzepatide + B12 package price from the MyDose
      sheet. Confirm it still matches the rate card (a price mismatch with MyDose
      is a trust/legal problem). Set to null to show the soft "one price" line.
   2. Meta ads: compounded GLP-1 is heavily restricted on Meta. Confirm the ad
      channel/angle before pointing paid traffic here.
   ========================================================================== */

const HERO = {
  // Live Tirzepatide + B12 (GLP-1) MyDose booking link — matches the catalog.
  bookingUrl:
    "https://app.mydose.ai/patient/book-consultation/aabe46cd-994e-4da3-8723-e2ab5dc89bbf?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=81a0da8b-7df9-4650-a0d9-c590b7feaf00",
  // Tirzepatide + B12 package price from the MyDose sheet. null = soft line.
  priceFrom: 249 as number | null,
  // MyDose consult fee charged on intake submission, non-refundable even on decline.
  consultFee: 20,
};

export const metadata: Metadata = {
  title: "Start your visit",
  description:
    "Weight, metabolic, and longevity care built for women. Reviewed by licensed, US-based providers and shipped to your door. Start your online visit.",
  // Paid LP — keep it out of organic search.
  robots: { index: false, follow: false },
  alternates: { canonical: "/start" },
};

const STEPS = [
  {
    n: "01",
    t: "Share your history",
    d: "Create an account and answer a few questions online about your health, symptoms, and goals. It takes a few minutes.",
  },
  {
    n: "02",
    t: "A licensed provider reviews",
    d: "A provider licensed in your state reviews your intake, and meets with you by video or phone where state law requires it.",
  },
  {
    n: "03",
    t: "Delivered to your door",
    d: "If a treatment is appropriate, a US-licensed pharmacy fills it and ships it discreetly. Your care continues through your portal.",
  },
];

const INCLUDED = [
  "An online visit with a provider licensed in your state",
  "A personalized plan, if it is medically appropriate for you",
  "Medication from a US-licensed pharmacy, shipped to your door",
  "Unlimited messaging with your care team",
  "Refills and adjustments as your provider directs",
  "Cancel anytime, no long-term commitment",
];

const WHY = [
  {
    t: "Built for women",
    d: "Not a men's clinic with a women's tab. Weight, metabolic, and longevity care designed around women's bodies and goals.",
  },
  {
    t: "Licensed, US-based providers",
    d: "Real, licensed clinicians review every plan. No AI doctors, no shortcuts, no guessing.",
  },
  {
    t: "One transparent price",
    d: "Your online visit and shipping are included. No membership games, no surprise fees.",
  },
  {
    t: "Private by design",
    d: "Discreet packaging and a platform built to keep your health information protected.",
  },
];

const FAQ = [
  {
    q: "Is this legitimate?",
    a: "Yes. WellaraMD LLC is a telehealth company, not a medical practice or pharmacy. We connect you with independent, licensed providers and US-licensed pharmacies through our platform partner, MyDose.",
  },
  {
    q: "Will I need lab work?",
    a: "Sometimes. Your provider may request labs depending on your health history and your state's requirements before deciding on a treatment.",
  },
  {
    q: "What does it cost to start, and what if I am not approved?",
    a: "A $20 consultation fee applies when you submit your intake, and it is not refundable. The rest of the cost is only a temporary hold at that point, and it is released if you are not approved. You are charged in full only once a licensed provider approves your treatment, and not everyone is approved.",
  },
  {
    q: "Who is it for?",
    a: "Adults 18 and older located in a state where our services are available at the time of their visit.",
  },
];

function Cta({ className = "", label = "Check eligibility" }: { className?: string; label?: string }) {
  return (
    <a
      href={HERO.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-ink press ${className}`}
    >
      {label}
    </a>
  );
}

export default function StartPage() {
  return (
    <main className="bg-ivory text-ink">
      {/* slim top bar — wordmark only, no nav (paid LP keeps exits low) */}
      <header className="mx-auto max-w-[1180px] px-5 lg:px-8 h-20 flex items-center justify-between">
        <span className="logo text-[1.5rem] tracking-tight">
          wellara<span className="align-super text-[0.62em] ml-[1px]">MD</span>
        </span>
        <span className="eyebrow hidden sm:block text-ink-2">Weight care for women</span>
      </header>

      {/* ───────────────── Hero ───────────────── */}
      <section className="mx-auto max-w-[1180px] px-5 lg:px-8 pt-6 lg:pt-10 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <p className="eyebrow text-ink-2 mb-5">Weight · Metabolic · Longevity</p>
            <h1 className="display text-[2.6rem] sm:text-[3.3rem] lg:text-[3.9rem] leading-[1.02]">
              Medicine that finally listens to women.
            </h1>
            <p className="mt-6 text-[1.08rem] leading-relaxed text-ink-2 max-w-[30rem]">
              Weight, metabolic, and longevity care built for women. Reviewed by
              licensed, US-based providers and delivered to your door.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <Cta />
              <span className="text-[0.86rem] text-muted">
                {HERO.priceFrom
                  ? `From $${HERO.priceFrom}/mo · visit & shipping included`
                  : "One transparent price · visit & shipping included"}
              </span>
            </div>
            <p className="mt-5 text-[0.82rem] text-muted max-w-[29rem]">
              100% online. A {`$${HERO.consultFee}`} consultation fee applies when you
              start. You are only charged for treatment if a licensed provider approves
              you. Not everyone is approved.
            </p>
          </div>

          {/* visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-[460px] mx-auto rounded-[var(--r)] overflow-hidden bg-ivoryCard">
              <Image
                src="/lifestyle/hero-women.jpg"
                alt="A woman at ease"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 460px"
                className="object-cover"
              />
            </div>
            {/* floating product render */}
            <div className="hidden sm:block absolute -left-4 lg:-left-8 bottom-10 w-[150px] lg:w-[180px] drop-shadow-[0_24px_48px_-24px_rgba(20,20,20,0.5)]">
              <Image
                src="/products/dropper.png"
                alt="WellaraMD treatment"
                width={360}
                height={480}
                className="w-full h-auto"
              />
            </div>
            {/* floating trust card */}
            <div className="hidden sm:flex absolute -right-3 lg:-right-6 top-8 items-center gap-3 bg-ivory2 border border-[var(--line-soft)] rounded-2xl px-4 py-3 shadow-[0_24px_48px_-28px_rgba(20,20,20,0.4)]">
              <span className="h-2 w-2 rounded-full bg-ink" />
              <span className="text-[0.78rem] leading-tight text-ink-2">
                Reviewed by<br />licensed US providers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── How it works ───────────────── */}
      <section className="border-t border-[var(--line-soft)] bg-ivory2">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8 py-16 lg:py-24">
          <p className="eyebrow text-ink-2 mb-4">How it works</p>
          <h2 className="display text-[2rem] lg:text-[2.6rem] max-w-[22ch]">
            Three steps, all from home.
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8 lg:gap-12">
            {STEPS.map((s) => (
              <div key={s.n}>
                <span className="eyebrow text-muted">{s.n}</span>
                <h3 className="display text-[1.35rem] mt-3">{s.t}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-2">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── What's included ───────────────── */}
      <section className="mx-auto max-w-[1180px] px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="eyebrow text-ink-2 mb-4">What you get</p>
            <h2 className="display text-[2rem] lg:text-[2.6rem] max-w-[16ch]">
              One price. Everything handled.
            </h2>
            <p className="mt-5 text-ink-2 leading-relaxed max-w-[26rem]">
              No clinic visits, no insurance paperwork, no guesswork. Care that
              comes to you and adjusts as your body changes.
            </p>
            <Cta className="mt-8" />
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {INCLUDED.map((item) => (
              <li key={item} className="flex gap-3 text-[0.98rem] text-ink-2 leading-snug">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-ink shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────────── Why WellaraMD ───────────────── */}
      <section className="border-t border-[var(--line-soft)] bg-sand">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8 py-16 lg:py-24">
          <p className="eyebrow text-ink-2 mb-4">Why WellaraMD</p>
          <div className="grid md:grid-cols-2 gap-x-14 gap-y-10 mt-8">
            {WHY.map((w) => (
              <div key={w.t} className="border-t border-[var(--line)] pt-5">
                <h3 className="display text-[1.4rem]">{w.t}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-2 max-w-[30rem]">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Trust band ───────────────── */}
      <section className="mx-auto max-w-[1180px] px-5 lg:px-8 py-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center eyebrow text-muted">
          <span>Licensed US providers</span>
          <span className="h-1 w-1 rounded-full bg-[var(--line)]" />
          <span>US-licensed pharmacies</span>
          <span className="h-1 w-1 rounded-full bg-[var(--line)]" />
          <span>Private &amp; discreet</span>
        </div>
      </section>

      {/* ───────────────── Mini FAQ ───────────────── */}
      <section className="border-t border-[var(--line-soft)]">
        <div className="mx-auto max-w-[800px] px-5 lg:px-8 py-16 lg:py-24">
          <p className="eyebrow text-ink-2 mb-8 text-center">Questions</p>
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
            Care that is actually built for you.
          </h2>
          <p className="mt-5 text-ivory/70 max-w-[32rem] mx-auto leading-relaxed">
            Start your online visit today. A licensed provider will review your
            health and decide what is right for you.
          </p>
          <Cta className="mt-9 !bg-ivory !text-ink hover:!bg-blush" label="Check eligibility" />
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
            quality. This page is for general information and is not medical
            advice.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-ink-2">
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
