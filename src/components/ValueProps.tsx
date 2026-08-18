import Reveal from "./Reveal";

const PROPS = [
  {
    title: "Physician reviewed",
    body: "A licensed provider reads your intake and confirms a treatment is right for you before anything is prescribed.",
    icon: <IconCheckShield />,
  },
  {
    title: "Specialists in women's health",
    body: "Hormones, perimenopause, and metabolic care are the whole practice — not a side category.",
    icon: <IconBloom />,
  },
  {
    title: "Licensed US pharmacies",
    body: "Every therapy is dispensed from US-based licensed pharmacies, with sourcing you can ask about.",
    icon: <IconFlask />,
  },
  {
    title: "Discreet delivery",
    body: "Your treatment ships to your door in plain packaging, with ongoing monitoring built in.",
    icon: <IconParcel />,
  },
];

export default function ValueProps() {
  return (
    <section className="bg-ivory py-16 lg:py-24 border-t border-[var(--line-soft)]">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        {/* Top: copy + supporting image */}
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-16 items-center">
          <Reveal>
            <span className="eyebrow text-ink-2">Why WellaraMD</span>
            <h2 className="display text-ink text-[2.4rem] lg:text-[3.4rem] leading-[1.03] mt-4">
              Bringing real hormone care home,
              <br />
              <span className="display-i">100% online.</span>
            </h2>
            <p className="muted text-[1.05rem] mt-6 max-w-md leading-relaxed">
              Most women are told their labs are &ldquo;normal&rdquo; and sent
              home. We measure what actually matters, treat what we find, and stay
              with you as your body changes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#evaluation" className="btn btn-ink">Find your treatment</a>
              <a href="#how-it-works" className="btn btn-outline-dark">How it works</a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="rounded-[var(--r)] overflow-hidden aspect-[4/5] lg:aspect-[4/4.6]">
                <img
                  src="/lifestyle/women.jpg"
                  alt=""
                  aria-hidden
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(0.88) sepia(0.1)" }}
                />
              </div>
              {/* small stat card */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-ivory2 border border-[var(--line)] rounded-2xl px-5 py-4 shadow-[0_24px_48px_-28px_rgba(20,20,20,0.4)]">
                <p className="eyebrow text-ink-2/70">Typical timeline</p>
                <p className="display text-ink text-[1.9rem] mt-1.5 leading-none">
                  3&ndash;5 days
                </p>
                <p className="muted text-[0.78rem] mt-1">
                  from approval to your door
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom: value props with icons */}
        <div className="mt-16 lg:mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {PROPS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="border-t border-ink pt-5">
                <span className="text-ink block mb-4">{p.icon}</span>
                <h3 className="text-ink text-[1.05rem] font-medium">{p.title}</h3>
                <p className="muted text-[0.92rem] mt-2.5 leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- line icons ---- */
function IconCheckShield() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconBloom() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <circle cx="12" cy="9" r="4.5" />
      <path d="M12 13.5V21M9 18h6" strokeLinecap="round" />
    </svg>
  );
}
function IconFlask() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3" strokeLinejoin="round" />
      <path d="M7.5 15h9" strokeLinecap="round" />
    </svg>
  );
}
function IconParcel() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M3 8l9-4 9 4v8l-9 4-9-4V8z" strokeLinejoin="round" />
      <path d="M3 8l9 4 9-4M12 12v8" strokeLinejoin="round" />
    </svg>
  );
}
