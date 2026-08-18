import Reveal from "./Reveal";
import { Product } from "./Visuals";
import Tilt from "./Tilt";
import Spotlight from "./Spotlight";

export default function Science() {
  return (
    <section id="science" className="bg-ivory px-3 lg:px-5 py-6">
      <Spotlight
        radius={520}
        className="mx-auto max-w-[1440px] rounded-[var(--r)] grain overflow-hidden"
        style={{ background: "linear-gradient(160deg, #222222 0%, #141414 92%)" }}
      >
        <div className="relative grid lg:grid-cols-2">
          {/* LEFT — mechanism diagram */}
          <div className="relative px-6 lg:px-14 py-14 lg:py-20">
            <Reveal>
              <div className="flex items-center gap-6 flex-wrap">
                <div>
                  <span className="eyebrow" style={{ color: "#FFFEF8" }}>The Science</span>
                  <h3 className="display text-ivory text-[2.4rem] lg:text-[3rem] leading-[1.02] mt-2">
                    Precision at the
                    <br />
                    cellular level
                  </h3>
                </div>
                <a
                  href="#evaluation"
                  className="btn btn-sm"
                  style={{ background: "transparent", color: "#FFFEF8", border: "1px solid rgba(255,254,248,0.5)" }}
                >
                  See the science
                </a>
              </div>
            </Reveal>

            {/* diagram */}
            <div className="relative mt-8 h-[340px]">
              {/* leader lines (desktop) */}
              <svg className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none" viewBox="0 0 520 340" fill="none" aria-hidden>
                <g stroke="#FFFEF8" strokeWidth="1.25" opacity="0.8">
                  <path d="M150 96 L150 150 L232 214" />
                  <path d="M372 84 L372 150 L300 210" />
                  <circle cx="150" cy="96" r="3.5" fill="#FFFEF8" stroke="none" />
                  <circle cx="372" cy="84" r="3.5" fill="#FFFEF8" stroke="none" />
                </g>
              </svg>

              {/* labels */}
              <div className="lg:absolute lg:left-0 lg:top-[64px] max-w-[190px] mb-6 lg:mb-0">
                <p className="text-ivory text-[0.98rem] font-medium">Signals the pituitary</p>
                <p className="text-ivory/55 text-[0.86rem] mt-1 leading-snug">
                  Restores your body&rsquo;s own growth hormone rhythm.
                </p>
              </div>
              <div className="lg:absolute lg:right-0 lg:top-[52px] max-w-[200px] mb-8 lg:mb-0 lg:text-right">
                <p className="text-ivory text-[0.98rem] font-medium">Amplifies repair</p>
                <p className="text-ivory/55 text-[0.86rem] mt-1 leading-snug">
                  Accelerates cellular recovery and lean tissue.
                </p>
              </div>

              {/* central vial */}
              <div className="lg:absolute lg:left-1/2 lg:bottom-0 lg:-translate-x-1/2 flex justify-center">
                <Tilt max={16} className="w-[150px] h-[260px]">
                  <Product name="vial" className="h-full w-full object-contain" />
                </Tilt>
              </div>
            </div>
          </div>

          {/* RIGHT — dramatic product + titration gauge */}
          <div className="relative px-6 lg:px-14 py-14 lg:py-20 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col items-center text-center">
            <Reveal className="w-full flex flex-col items-center">
              <span
                className="text-[0.66rem] tracking-[0.16em] uppercase px-3 py-1 rounded-full mb-6"
                style={{ border: "1px solid rgba(255,254,248,0.5)", color: "#FFFEF8" }}
              >
                New protocol
              </span>
              <h3 className="display text-ivory text-[2.8rem] lg:text-[3.8rem] leading-[1.02]">
                Restore your
                <br />
                <span className="display-i" style={{ color: "#FFFEF8" }}>baseline.</span>
              </h3>

              {/* glowing product */}
              <div className="relative my-8 h-[220px] w-full flex items-center justify-center">
                <div
                  className="absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-60"
                  style={{ background: "radial-gradient(circle, rgba(255,254,248,0.55), transparent 65%)" }}
                />
                <Tilt max={18} className="relative h-[220px] w-[70%]">
                  <Product name="pen" className="h-full w-full object-contain" />
                </Tilt>
              </div>

              {/* titration gauge */}
              <div className="relative w-full max-w-[320px]">
                <p className="text-ivory/70 text-[0.8rem] mb-2">Titrated to you</p>
                <svg viewBox="0 0 320 70" className="w-full" fill="none" aria-hidden>
                  {Array.from({ length: 21 }).map((_, i) => {
                    const t = i / 20;
                    const angle = Math.PI * (1 - t);
                    const cx = 160 + Math.cos(angle) * 130;
                    const cy = 68 - Math.sin(angle) * 56;
                    const cx2 = 160 + Math.cos(angle) * (i === 10 ? 112 : 120);
                    const cy2 = 68 - Math.sin(angle) * (i === 10 ? 48 : 52);
                    const active = i === 10;
                    return (
                      <line
                        key={i}
                        x1={cx} y1={cy} x2={cx2} y2={cy2}
                        stroke={active ? "#FFFEF8" : "rgba(247,243,235,0.35)"}
                        strokeWidth={active ? 2.5 : 1}
                        strokeLinecap="round"
                      />
                    );
                  })}
                </svg>
              </div>

              <a href="#evaluation" className="btn mt-8" style={{ background: "#FFFEF8", color: "#141414" }}>
                Explore the protocol
              </a>
            </Reveal>
          </div>
        </div>

        <p className="relative px-6 lg:px-14 pb-10 text-ivory/40 text-[0.76rem] max-w-3xl leading-relaxed">
          *Individual results vary. Peptide therapies are prescribed only after
          evaluation by a licensed physician where clinically appropriate and are
          not evaluated by the FDA.
        </p>
      </Spotlight>
    </section>
  );
}
