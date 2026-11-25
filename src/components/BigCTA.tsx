import { Product } from "./Visuals";

const REPEAT = Array.from({ length: 8 });

/* Floating product renders that frame the final CTA (hidden on mobile). */
const FLOATERS: { name: "vial" | "pen" | "dropper" | "capsules" | "labkit"; pos: string; w: string; rot: number; op: number }[] = [
  { name: "vial", pos: "left-[5%] top-[16%]", w: "w-[92px] lg:w-[122px]", rot: -12, op: 0.8 },
  { name: "capsules", pos: "right-[6%] top-[12%]", w: "w-[80px] lg:w-[104px]", rot: 14, op: 0.7 },
  { name: "dropper", pos: "left-[9%] bottom-[14%]", w: "w-[78px] lg:w-[100px]", rot: 10, op: 0.7 },
  { name: "pen", pos: "right-[5%] bottom-[16%]", w: "w-[84px] lg:w-[110px]", rot: -10, op: 0.8 },
];

export default function BigCTA() {
  return (
    <section id="evaluation" className="bg-ivory pt-6 lg:pt-12">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[var(--r)] px-6 py-16 lg:py-24 text-center"
          style={{ background: "linear-gradient(135deg,#EEF3EA 0%,#F3E9EE 50%,#F6ECDE 100%)" }}
        >
          {/* floating product renders */}
          <div className="absolute inset-0 pointer-events-none hidden sm:block" aria-hidden>
            {FLOATERS.map((f, i) => (
              <div key={i} className={`absolute ${f.pos} ${f.w}`} style={{ opacity: f.op }}>
                <div style={{ transform: `rotate(${f.rot}deg)` }}>
                  <Product name={f.name} float={false} className="w-full h-auto object-contain drop-shadow-[0_18px_30px_-16px_rgba(34,34,34,0.35)]" />
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10">
            <span className="eyebrow-s text-ink-2">Ready to begin?</span>
            <h2 className="display text-ink text-[2.6rem] sm:text-[3.6rem] lg:text-[4.6rem] leading-[1.02] mt-4 max-w-[18ch] mx-auto">
              Feel like yourself again.
            </h2>
            <p className="muted text-[1.05rem] mt-6 max-w-lg mx-auto">
              Start with a free medical intake. A licensed provider reviews it and
              tells you honestly whether treatment is right for you.
            </p>
            <a href="#treatments" className="btn btn-ink mt-10">
              Find your treatment
            </a>
          </div>
        </div>
      </div>

      {/* Repeating marquee band */}
      <div className="mt-10 lg:mt-16 border-y border-[var(--line-soft)] bg-ink py-6 overflow-hidden">
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
