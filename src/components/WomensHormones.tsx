import Reveal from "./Reveal";

const ADDRESSED = [
  "Perimenopause & menopause",
  "Estrogen & progesterone balance",
  "Thyroid & energy",
  "Sleep, mood & libido",
];

export default function WomensHormones() {
  return (
    <section id="womens-health" className="bg-sand py-14 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <Reveal>
            <span className="eyebrow text-gold">Women&rsquo;s Hormone Health</span>
            <h2 className="display text-ink text-[2.8rem] lg:text-[4.2rem] leading-[1.03] mt-4">
              Balance isn&rsquo;t a buzzword.
              <br />
              <span className="display-i text-gold">It&rsquo;s a lab value.</span>
            </h2>
            <p className="mt-6 muted text-[1.08rem] leading-relaxed max-w-lg">
              Too often, women are told their labs are &ldquo;normal&rdquo; while
              they feel anything but. We measure what others dismiss, and design a
              protocol around it, guided by physicians who specialize in hormones.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3.5 max-w-md">
              {ADDRESSED.map((a) => (
                <div key={a} className="flex gap-3 items-start">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full border border-gold flex items-center justify-center text-gold text-[0.6rem]">✦</span>
                  <span className="text-ink-2 text-[0.98rem]">{a}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#evaluation" className="btn btn-emerald">Begin your evaluation</a>
              <a href="#blueprint" className="btn btn-outline-dark">Am I in perimenopause?</a>
            </div>
          </Reveal>

          {/* Portrait */}
          <Reveal delay={120} className="relative">
            <div className="relative rounded-[var(--r)] overflow-hidden aspect-[4/5] grain">
              <img
                src="/lifestyle/women.jpg"
                alt="WellaraMD member"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,20,20,0.4), transparent 55%)" }} />
            </div>

            {/* floating lab card */}
            <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-ivory2 rounded-2xl shadow-[0_28px_56px_-30px_rgba(20,20,20,0.6)] border border-[var(--line-soft)] p-5 w-[210px]">
              <div className="text-[0.68rem] tracking-[0.14em] uppercase muted">Your panel</div>
              {[
                ["Estradiol", "Balanced", "#323232"],
                ["Progesterone", "Restored", "#323232"],
                ["TSH (thyroid)", "In range", "#323232"],
              ].map(([k, v, c]) => (
                <div key={k} className="flex items-center justify-between mt-2.5">
                  <span className="text-ink-2 text-[0.82rem]">{k}</span>
                  <span className="text-[0.76rem] font-medium" style={{ color: c }}>{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
