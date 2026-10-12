import Reveal from "./Reveal";

const STEPS = [
  {
    n: "[01]",
    title: "Share your history",
    body: "Complete a free medical intake and symptom history. It takes a few minutes and costs nothing.",
  },
  {
    n: "[02]",
    title: "Physician review",
    body: "A licensed provider reviews your history and labs, then decides whether treatment is appropriate for you.",
  },
  {
    n: "[03]",
    title: "Delivered & monitored",
    body: "Approved treatment ships discreetly to your door, and your physician keeps following your progress.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ink text-ivory py-14 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <Reveal className="mb-14">
          <span className="eyebrow text-ivory/60">How it works</span>
          <h2 className="display text-ivory text-[2.4rem] lg:text-[3.4rem] leading-[1.03] mt-3 max-w-2xl">
            A quick, guided path to treatment.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="border-t border-ivory/25 pt-6">
                <span className="eyebrow text-ivory/60">{s.n}</span>
                <h3 className="display text-ivory text-[1.7rem] mt-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-ivory/65 text-[0.96rem] mt-3 leading-relaxed">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <a href="#evaluation" className="btn btn-light">Find your treatment</a>
        </div>
      </div>
    </section>
  );
}
