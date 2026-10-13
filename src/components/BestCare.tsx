import Reveal from "./Reveal";

export default function BestCare() {
  return (
    <section
      id="physicians"
      className="relative overflow-hidden py-14 lg:py-28"
      style={{ background: "linear-gradient(180deg, #F6F4EA 0%, #FFFEF8 100%)" }}
    >
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          {/* Copy — mirrors the "Care that stays with you" block below (order flipped: figure left) */}
          <Reveal className="order-1 lg:order-2">
            <h2 className="display text-ink text-[2.6rem] sm:text-[3.4rem] lg:text-[4.2rem] leading-[1.02]">
              The best care,
              <br />
              by the best in medicine.
            </h2>

            <div className="mt-8 pt-6 border-t border-[var(--line)] max-w-md">
              <p className="eyebrow text-ink-2">Physician led, never a call center</p>
              <p className="muted text-[1rem] mt-4 leading-relaxed">
                Behind every detail is a network of licensed, US-based providers who
                review your intake, prescribe only what is appropriate for you, and
                keep adjusting as your body changes.
              </p>
              <a href="#evaluation" className="btn btn-ink mt-8">
                Start your evaluation
              </a>
            </div>
          </Reveal>

          {/* Figure + floating credential cards */}
          <Reveal delay={120} className="order-2 lg:order-1">
            <div className="relative flex flex-col items-center gap-4 lg:min-h-[660px] lg:flex-row lg:items-end lg:justify-center lg:gap-0">
              <img
                src="/lifestyle/physician-cut.png"
                alt=""
                aria-hidden
                className="relative z-10 h-[320px] sm:h-[420px] lg:h-[620px] w-auto object-contain"
              />

              {/* Board certified — top left on desktop, stacked on mobile */}
              <div className="relative w-full max-w-[340px] lg:absolute lg:z-20 lg:left-0 lg:top-12 lg:w-[220px] rounded-2xl border border-[var(--line)] bg-white/75 backdrop-blur-md shadow-[0_24px_48px_-28px_rgba(34,34,34,0.35)] p-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-ink/[0.06] flex items-center justify-center text-ink">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div className="leading-tight">
                    <div className="text-ink text-[0.9rem] font-medium">Licensed providers</div>
                    <div className="muted text-[0.74rem]">US-based network</div>
                  </div>
                </div>
              </div>

              {/* Experience stat — mid right on desktop, stacked on mobile */}
              <div className="relative w-full max-w-[340px] lg:absolute lg:z-20 lg:right-0 lg:top-[36%] lg:w-[190px] rounded-2xl border border-[var(--line)] bg-white/75 backdrop-blur-md shadow-[0_24px_48px_-28px_rgba(34,34,34,0.35)] p-4">
                <p className="eyebrow text-ink-2/70">Online care</p>
                <p className="display text-ink text-[2rem] mt-1.5 leading-none">100%</p>
                <p className="muted text-[0.76rem] mt-1">no clinic visits</p>
              </div>

              {/* Name card — bottom on desktop, stacked on mobile */}
              <div className="relative w-full max-w-[340px] lg:absolute lg:z-20 lg:left-2 lg:bottom-6 lg:w-[250px] rounded-2xl border border-[var(--line)] bg-ink text-ivory shadow-[0_28px_56px_-30px_rgba(34,34,34,0.6)] p-4">
                <p className="display text-ivory text-[1.35rem] leading-tight">
                  Your care team
                </p>
                <p className="font-mono text-[0.6rem] uppercase tracking-wider text-ivory/55 mt-1.5">
                  Licensed, US-based providers
                </p>
                <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between">
                  <span className="text-ivory/60 text-[0.74rem]">1:1 guidance</span>
                  <span className="text-ivory text-[0.74rem]">Always</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
