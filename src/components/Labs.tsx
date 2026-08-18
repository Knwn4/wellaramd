import Reveal from "./Reveal";
import CountUp from "./CountUp";

/* Floating glass biomarker cards arranged in perspective around the portrait */
type Card = {
  pos: string;
  rot: string;
  title: string;
  body?: React.ReactNode;
  wide?: boolean;
  hideSm?: boolean;
};

const CARDS: Card[] = [
  {
    pos: "left-[2%] top-[26%]",
    rot: "rotateY(14deg)",
    title: "Heart health",
    body: <Bar value={72} label="Strong" />,
  },
  {
    pos: "left-[6%] top-[54%]",
    rot: "rotateY(14deg)",
    title: "Nutrition",
    body: <span className="text-ivory/60 text-[0.72rem]">Balanced · improving</span>,
    hideSm: true,
  },
  {
    pos: "left-[9%] bottom-[8%]",
    rot: "rotateY(12deg)",
    title: "Metabolic health",
    body: <Bar value={64} label="On track" />,
    hideSm: true,
  },
  {
    pos: "right-[3%] top-[22%]",
    rot: "rotateY(-14deg)",
    title: "Estradiol",
    body: <span className="text-goldSoft text-[0.78rem] font-medium">Balanced</span>,
  },
  {
    pos: "right-[5%] top-[48%]",
    rot: "rotateY(-13deg)",
    title: "All 75 biomarkers",
    wide: true,
    body: <Ring />,
  },
  {
    pos: "right-[8%] bottom-[9%]",
    rot: "rotateY(-12deg)",
    title: "Biological age",
    body: <span className="text-goldSoft text-[0.78rem] font-medium">Tracked</span>,
    hideSm: true,
  },
];

export default function Labs() {
  return (
    <section id="labs" className="bg-ivory px-3 lg:px-5 py-6">
      <div
        className="relative mx-auto max-w-[1440px] rounded-[var(--r)] overflow-hidden min-h-[90vh]"
        style={{ background: "linear-gradient(178deg, #F8F7F0 0%, #ECECEC 28%, #4A4A4A 66%, #1A1A1A 100%)" }}
      >
        {/* portrait, centered, blends into the gradient */}
        <img
          src="/lifestyle/optimal.jpg"
          alt=""
          className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-auto max-w-none object-cover object-top"
        />
        {/* soft blend edges */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(248,247,240,0.6) 0%, transparent 22%, transparent 78%, rgba(26,26,26,0.5) 100%)" }} />

        {/* Headline */}
        <Reveal className="relative z-10 pt-14 lg:pt-16 text-center px-5">
          <span className="eyebrow" style={{ color: "#6A6A6A" }}>Labs by WellaraMD</span>
          <h2 className="display text-ink text-[2.8rem] lg:text-[4.2rem] leading-[1.02] mt-3">
            Get your labs.
            <br />
            <span className="display-i" style={{ color: "#222222" }}>Find your optimal.</span>
          </h2>
        </Reveal>

        {/* Floating cards */}
        <div className="absolute inset-0 z-10" style={{ perspective: "1400px" }}>
          {CARDS.map((c, i) => (
            <div
              key={i}
              className={`absolute ${c.pos} ${c.hideSm ? "hidden lg:block" : ""} ${c.wide ? "w-[190px]" : "w-[164px]"}`}
              style={{ transform: c.rot }}
            >
              <Reveal delay={i * 90}>
                <div
                  className="rounded-2xl px-4 py-3.5 border border-white/20"
                  style={{ background: "rgba(34,34,34,0.34)", backdropFilter: "blur(14px)", boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-ivory/85 text-[0.82rem] font-medium">{c.title}</span>
                    <span className="text-ivory/35 text-[0.7rem]" aria-hidden>›</span>
                  </div>
                  <div className="mt-2">{c.body}</div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="absolute bottom-10 inset-x-0 z-20 flex flex-wrap justify-center gap-3 px-5">
          <a href="#evaluation" className="btn btn-light shadow-lg">Start my labs</a>
          <a href="#blueprint" className="btn btn-outline-light">Learn more</a>
        </div>
      </div>
    </section>
  );
}

function Bar({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <div className="h-1.5 rounded-full bg-white/15 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${value}%`, background: "linear-gradient(90deg,#222222,#FFFEF8)" }} />
      </div>
      <span className="text-ivory/55 text-[0.7rem] mt-1.5 block">{label}</span>
    </div>
  );
}

function Ring() {
  const R = 15;
  const C = 2 * Math.PI * R;
  return (
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 40 40" className="-rotate-90 shrink-0">
        <circle cx="20" cy="20" r={R} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="4" />
        <circle cx="20" cy="20" r={R} fill="none" stroke="#FFFEF8" strokeWidth="4" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * 0.18} />
      </svg>
      <div className="leading-tight">
        <div className="display text-ivory text-[1.5rem]">
          <CountUp to={75} />
        </div>
        <div className="text-ivory/55 text-[0.68rem]">tracked</div>
      </div>
    </div>
  );
}
