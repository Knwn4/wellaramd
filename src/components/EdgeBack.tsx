import Reveal from "./Reveal";
import { Product } from "./Visuals";
import Tilt from "./Tilt";

const CARDS = [
  {
    title: "Testosterone therapy",
    sub: "to restore your drive",
    product: "vial" as const,
    scale: 1.0,
  },
  {
    title: "At-home labs",
    sub: "to map your hormones",
    product: "labkit" as const,
    scale: 1.0,
  },
];

export default function EdgeBack() {
  return (
    <section id="physicians" className="relative bg-ivory">
      {/* Immersive full-bleed photo */}
      <div className="relative min-h-[88vh] flex flex-col items-center justify-start text-center overflow-hidden pt-[13vh]">
        <img
          src="/lifestyle/hormone.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* tone: warm light top for legible dark headline + navy vignette + gold warmth */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(247,243,235,0.92) 0%, rgba(247,243,235,0.6) 22%, rgba(247,243,235,0.05) 44%, rgba(20,20,20,0.18) 74%, rgba(20,20,20,0.5) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(90% 55% at 50% 6%, rgba(247,243,235,0.7), transparent 55%)" }} />

        {/* Journey arc with pulsing gold nodes */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 760"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          aria-hidden
        >
          <path
            className="dash-flow"
            d="M-40 620 C 320 470, 560 360, 760 340 S 1180 250, 1500 150"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="1 15"
          />
          {[
            [150, 545],
            [400, 430],
            [760, 340],
            [1120, 262],
            [1420, 165],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle
                className="pulse-dot"
                cx={cx}
                cy={cy}
                r="12"
                fill="rgba(255,254,248,0.35)"
                style={{ animationDelay: `${i * 400}ms` }}
              />
              <circle cx={cx} cy={cy} r="4.5" fill="#FFFEF8" />
            </g>
          ))}
        </svg>

        {/* Content */}
        <Reveal className="relative z-10 px-5 max-w-3xl">
          <span className="eyebrow text-gold">Hormone Optimization</span>
          <h2 className="display text-ink text-[3rem] sm:text-[4.2rem] lg:text-[5rem] leading-[1.02] mt-4">
            Reclaim your edge with
            <br />
            <span className="display-i text-gold">precision hormone care.</span>
          </h2>
          <p className="mt-6 muted text-[1.1rem] max-w-xl mx-auto">
            Physician prescribed testosterone and hormone therapy, calibrated to
            your labs and monitored for life.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#evaluation" className="btn btn-light shadow-lg">Begin your evaluation</a>
            <a
              href="#blueprint"
              className="btn text-ivory backdrop-blur-sm hover:brightness-110"
              style={{ background: "rgba(20,20,20,0.55)", border: "1px solid rgba(247,243,235,0.25)" }}
            >
              Am I a candidate?
            </a>
          </div>
        </Reveal>
      </div>

      {/* Product cards overlapping the photo's lower edge */}
      <div className="relative z-20 mx-auto max-w-[1240px] px-5 lg:px-8 -mt-24 lg:-mt-28 grid md:grid-cols-2 gap-4 pb-6">
        {CARDS.map((c, i) => (
          <Reveal key={c.title} delay={i * 100}>
            <a
              href="#evaluation"
              className="press group relative overflow-hidden rounded-[var(--r)] bg-ivoryCard border border-[var(--line-soft)] h-[168px] flex items-center px-8 shadow-[0_30px_60px_-34px_rgba(20,20,20,0.5)] hover:bg-blush/45 transition-colors"
            >
              <div className="flex-1 relative z-10 max-w-[62%]">
                <p className="display text-ink text-[1.7rem] leading-tight">{c.title}</p>
                <p className="text-gold text-[1.05rem] mt-1">{c.sub}</p>
              </div>
              <Tilt max={16} className="absolute right-4 top-1/2 -translate-y-1/2 h-[80%] w-[40%]">
                <Product name={c.product} float={false} className="h-full w-full object-contain" style={{ transform: `scale(${c.scale})` }} />
              </Tilt>
              <span className="chev absolute right-5 bottom-5 text-ink/40 z-10" aria-hidden>›</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
