import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

const PROMISES = [
  "One physician, for life",
  "No surprise bills, ever",
  "Cancel or pause anytime",
];

type Tier = {
  name: string;
  price: string;
  cadence: string;
  desc: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

const TIERS: Tier[] = [
  {
    name: "Essential",
    price: "$199",
    cadence: "/ month",
    desc: "Physician guided care for those beginning to optimize.",
    features: [
      "Annual physician consultation",
      "Core biomarker panel",
      "One personalized protocol",
      "Secure messaging with your care team",
      "Member medication pricing",
    ],
    cta: "Get started",
  },
  {
    name: "Signature",
    price: "$399",
    cadence: "/ month",
    desc: "Comprehensive, proactive longevity care. Most chosen.",
    features: [
      "Quarterly physician reviews",
      "Full 75-biomarker panel",
      "Up to three combined protocols",
      "Quarterly re-tests & Blueprint updates",
      "A dedicated physician, for life",
      "Priority concierge access",
    ],
    featured: true,
    cta: "Begin your evaluation",
  },
  {
    name: "Private",
    price: "By invitation",
    cadence: "bespoke",
    desc: "A fully bespoke concierge practice for the discerning.",
    features: [
      "Dedicated personal physician",
      "Unlimited protocols & adjustments",
      "Genetic & epigenetic testing",
      "24/7 concierge medical access",
      "Private quarterly longevity assessments",
    ],
    cta: "Request an invitation",
  },
];

export default function Membership() {
  return (
    <section id="membership" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow text-gold">Membership</span>
          <h2 className="display text-ink text-[2.8rem] lg:text-[4.4rem] leading-[1.03] mt-4">
            One membership.
            <br />
            <span className="display-i text-gold">Everything included.</span>
          </h2>
          <p className="mt-6 muted text-[1.08rem] leading-relaxed">
            No à la carte labs. No surprise consult fees. Your evaluation, labs,
            protocol, and physician monitoring, bundled into one simple price.
          </p>
        </Reveal>

        {/* promises */}
        <Reveal delay={100} className="mt-9 flex flex-wrap justify-center gap-3">
          {PROMISES.map((p) => (
            <span
              key={p}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-ivory2 px-4 py-2 text-[0.85rem] text-ink-2"
            >
              <span className="text-gold text-[0.7rem]">✦</span>
              {p}
            </span>
          ))}
        </Reveal>

        {/* tiers */}
        <div className="mt-14 grid lg:grid-cols-3 gap-6 items-stretch">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <div
                className={`press h-full flex flex-col rounded-[var(--r)] p-8 lg:p-9 border transition-all duration-500 ${
                  t.featured
                    ? "border-transparent text-ivory shadow-[0_44px_80px_-44px_rgba(20,20,20,0.75)] lg:-translate-y-3"
                    : "bg-ivoryCard border-[var(--line)] hover:-translate-y-1"
                }`}
                style={t.featured ? { background: "radial-gradient(130% 100% at 50% 0%, #323232, #141414 82%)" } : undefined}
              >
                {t.featured && (
                  <span className="self-start mb-5 text-[0.62rem] tracking-[0.2em] uppercase bg-gold text-white px-3 py-1 rounded-full">
                    Most Chosen
                  </span>
                )}
                <h3 className={`display text-[2.1rem] ${t.featured ? "text-ivory" : "text-ink"}`}>{t.name}</h3>
                <p className={`mt-2 text-[0.92rem] leading-relaxed min-h-[2.8rem] ${t.featured ? "text-ivory/70" : "muted"}`}>
                  {t.desc}
                </p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className={`display text-[2.8rem] leading-none ${t.featured ? "text-goldSoft" : "text-emerald"}`}>
                    {t.price}
                  </span>
                  <span className={`text-[0.82rem] ${t.featured ? "text-ivory/55" : "muted"}`}>{t.cadence}</span>
                </div>

                <div className={`my-7 h-px ${t.featured ? "bg-white/15" : "bg-[var(--line)]"}`} />

                <ul className="space-y-3.5 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[0.92rem]">
                      <span className={t.featured ? "text-goldSoft" : "text-gold"}>✦</span>
                      <span className={t.featured ? "text-ivory/85" : "text-ink-2"}>{f}</span>
                    </li>
                  ))}
                </ul>

                {t.featured ? (
                  <Magnetic href="#evaluation" className="btn btn-gold mt-8 w-full" >
                    {t.cta}
                  </Magnetic>
                ) : (
                  <a href="#evaluation" className="btn btn-outline-dark mt-8 w-full">{t.cta}</a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 muted text-[0.76rem] text-center max-w-2xl mx-auto">
          Illustrative pricing shown for preview. Medication and labs are included
          at member rates; a physician determines clinical appropriateness. Final
          pricing confirmed at evaluation.
        </p>
      </div>
    </section>
  );
}
