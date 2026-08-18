import Reveal from "./Reveal";
import { Product } from "./Visuals";

export default function MedicalSupport() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(180deg, #FFFEF8 0%, #F6F4EA 100%)" }}
    >
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <Reveal>
            <h2 className="display text-ink text-[2.6rem] sm:text-[3.4rem] lg:text-[4.2rem] leading-[1.02]">
              Care that stays
              <br />
              with you.
            </h2>

            <div className="mt-8 pt-6 border-t border-[var(--line)] max-w-md">
              <p className="eyebrow text-ink-2">Physician review, 100% online</p>
              <p className="muted text-[1rem] mt-4 leading-relaxed">
                A licensed provider reviews your intake and labs, decides what is
                actually appropriate for you, and keeps following your progress —
                adjusting as your body changes.
              </p>
              <a href="#evaluation" className="btn btn-ink mt-8">
                Find your treatment
              </a>
            </div>
          </Reveal>

          {/* Figure + floating UI */}
          <Reveal delay={120}>
            <div className="relative min-h-[520px] lg:min-h-[660px] flex items-end justify-center">
              <img
                src="/lifestyle/figure.png"
                alt=""
                aria-hidden
                className="relative z-10 h-[500px] lg:h-[640px] w-auto object-contain"
              />

              {/* Plan card — top right */}
              <div className="absolute z-20 right-0 lg:right-4 top-4 lg:top-10 w-[210px] rounded-2xl border border-[var(--line)] bg-white/70 backdrop-blur-md shadow-[0_24px_48px_-28px_rgba(34,34,34,0.35)] p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.6rem] uppercase tracking-wider text-ink-2 border border-[var(--line)] rounded px-1.5 py-0.5">
                    Your plan
                  </span>
                </div>
                <p className="display text-ink text-[1.5rem] mt-3 leading-tight">
                  Hormone Balance
                </p>
                <svg viewBox="0 0 160 40" className="w-full h-9 mt-2" fill="none" aria-hidden>
                  <polyline
                    points="0,30 26,26 52,28 78,20 104,16 130,12 160,8"
                    stroke="#222222"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex items-center justify-between mt-1">
                  <span className="muted text-[0.72rem]">Week 6 of 12</span>
                  <span className="font-mono text-[0.66rem] text-ink-2">On track</span>
                </div>
              </div>

              {/* Physician message — bottom left */}
              <div className="absolute z-20 left-0 bottom-16 lg:bottom-24 w-[290px] rounded-2xl border border-[var(--line)] bg-white/75 backdrop-blur-md shadow-[0_24px_48px_-28px_rgba(34,34,34,0.35)] p-4">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/lifestyle/physician.jpg"
                    alt=""
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-mono text-[0.62rem] uppercase tracking-wider text-ink-2">
                    Inbox · Dr. E. Vaughn
                  </span>
                </div>
                <p className="text-ink-2 text-[0.86rem] mt-3 leading-relaxed">
                  Your latest panel came back. I&rsquo;ve adjusted your dose
                  slightly — tell me how you feel by next week.
                </p>
              </div>

              {/* Prescription status — bottom right */}
              <div className="absolute z-20 right-0 bottom-2 lg:bottom-6 w-[250px] rounded-2xl border border-[var(--line)] bg-ink text-ivory shadow-[0_28px_56px_-30px_rgba(34,34,34,0.6)] p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-14 flex items-center justify-center shrink-0">
                    <Product name="vial" float={false} className="h-full w-full object-contain" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-ivory text-[1.02rem] font-medium">NAD+ Injectable</p>
                    <p className="font-mono text-[0.6rem] uppercase tracking-wider text-ivory/55 mt-1">
                      3 month plan
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
                  <span className="text-ivory/60 text-[0.74rem]">Order status</span>
                  <span className="text-ivory text-[0.74rem]">In transit</span>
                </div>
                <p className="font-mono text-[0.58rem] uppercase tracking-wider text-ivory/40 mt-2">
                  Prescribed by Dr. E. Vaughn
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
