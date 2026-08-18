const REPEAT = Array.from({ length: 8 });

export default function BigCTA() {
  return (
    <section id="evaluation" className="bg-ivory pt-20 lg:pt-28">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8 text-center">
        <span className="eyebrow text-ink-2">Ready to begin?</span>
        <h2 className="display text-ink text-[2.6rem] sm:text-[3.6rem] lg:text-[4.6rem] leading-[1.02] mt-4 max-w-[18ch] mx-auto">
          Feel like yourself again.
        </h2>
        <p className="muted text-[1.05rem] mt-6 max-w-lg mx-auto">
          Start with a free medical intake. A licensed provider reviews it and
          tells you honestly whether treatment is right for you.
        </p>
        <a href="#evaluation" className="btn btn-ink mt-10">
          Find your treatment
        </a>
      </div>

      {/* Repeating marquee band */}
      <div className="mt-16 lg:mt-24 border-y border-[var(--line-soft)] bg-ink py-6 overflow-hidden">
        <div className="marquee-track">
          {REPEAT.map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="display text-ivory text-[2rem] lg:text-[2.6rem] whitespace-nowrap px-8">
                Find your treatment
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-ivory/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
