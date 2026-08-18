import Magnetic from "./Magnetic";
import Spotlight from "./Spotlight";

export default function Hero() {
  return (
    <section id="top" className="relative bg-emerald text-ivory overflow-hidden">
      <div className="relative min-h-[92vh] flex items-center">
        {/* Immersive portrait */}
        <img
          src="/lifestyle/hero-women.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[72%_top] slowzoom"
        />
        {/* plum scrim for legibility on the left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(20,20,20,0.94) 0%, rgba(20,20,20,0.72) 34%, rgba(20,20,20,0.28) 60%, rgba(20,20,20,0.05) 82%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1240px] w-full px-5 lg:px-8 py-24">
          <div className="max-w-xl">
            <div className="rise flex items-center gap-3 mb-6" style={{ animationDelay: "80ms" }}>
              <span className="gold-rule" style={{ background: "#FFFEF8" }} />
              <span className="eyebrow" style={{ color: "#FFFEF8" }}>
                Women&rsquo;s Longevity Medicine
              </span>
            </div>

            <h1 className="display text-ivory text-[3.4rem] sm:text-[4.6rem] lg:text-[5.6rem] leading-[0.98]">
              <span className="rise inline-block" style={{ animationDelay: "180ms" }}>
                Feel like
              </span>{" "}
              <span className="rise inline-block display-i" style={{ animationDelay: "300ms", color: "#FFFEF8" }}>
                yourself again.
              </span>
            </h1>

            <p className="rise mt-7 text-ivory/80 text-[1.14rem] leading-relaxed max-w-md" style={{ animationDelay: "440ms" }}>
              Physician-guided hormone, metabolic, and longevity care built for
              women. Perimenopause through menopause and every year after.
            </p>

            <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "560ms" }}>
              <Magnetic href="#evaluation" className="btn btn-light shadow-lg">
                Begin your evaluation
              </Magnetic>
              <a href="#assessment" className="btn btn-outline-light">
                Take the 2-minute assessment
              </a>
            </div>

            <div className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.8rem] text-ivory/60" style={{ animationDelay: "680ms" }}>
              <span className="flex items-center gap-2"><Dot /> Board-certified physicians</span>
              <span className="flex items-center gap-2"><Dot /> Bioidentical hormones</span>
              <span className="flex items-center gap-2"><Dot /> Concierge care</span>
            </div>
          </div>
        </div>

        {/* Floating interactive hormone panel */}
        <Spotlight
          radius={320}
          className="hidden lg:block absolute right-8 xl:right-16 bottom-12 z-10 rounded-2xl border border-white/15 w-[300px] p-6"
          style={{ background: "rgba(20,20,20,0.5)", backdropFilter: "blur(16px)" }}
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="eyebrow" style={{ color: "#FFFEF8" }}>Your panel</span>
              <span className="text-ivory/40 text-[0.66rem] uppercase tracking-widest">Preview</span>
            </div>
            <div className="mt-5 space-y-4">
              {[
                ["Estradiol", "Balanced"],
                ["Progesterone", "Restored"],
                ["Thyroid (TSH)", "Optimal"],
                ["Biological age", "−8 yrs"],
              ].map(([k, v], i) => (
                <div key={k} className="flex items-center justify-between">
                  <span className="text-ivory/70 text-[0.9rem]">{k}</span>
                  <span className="text-[0.85rem] font-medium" style={{ color: i === 3 ? "#FFFEF8" : "#F1E2DC" }}>{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-ivory/55 text-[0.8rem]">Next physician review</span>
              <span className="text-ivory text-[0.8rem]">6 days</span>
            </div>
          </div>
        </Spotlight>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="w-1 h-1 rounded-full inline-block" style={{ background: "#FFFEF8" }} />;
}
