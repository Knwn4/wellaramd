import Reveal from "./Reveal";
import { Product } from "./Visuals";
import Tilt from "./Tilt";
import Spotlight from "./Spotlight";
import { getCatalog, selectFeatured, type Treatment } from "@/lib/catalog";

type ProductName = "pen" | "vial" | "dropper" | "capsules" | "labkit";

/** Pick a product render for a treatment based on its category/name. */
function productFor(t: Treatment, i: number): ProductName {
  const n = t.name.toLowerCase();
  if (/semaglutide|tirzepatide|retatrutide|glp/.test(n)) return "pen";
  if (/nad|b12|glutathione/.test(n)) return "capsules";
  if (t.categories.includes("sleep") || /dsip|epithalon/.test(n)) return "dropper";
  if (t.categories.includes("recovery") || /bpc|tb-500/.test(n)) return "vial";
  return (["vial", "pen", "dropper", "capsules"] as const)[i % 4];
}

/** Human-readable tag from normalized categories. */
function tagFor(t: Treatment): string {
  const label: Record<string, string> = {
    "weight-loss": "Weight & metabolic",
    longevity: "Longevity",
    recovery: "Recovery & repair",
    sleep: "Sleep",
    energy: "Cellular energy",
    "hormones-women": "Women's hormones",
    "hormones-men": "Men's hormones",
    "sexual-health": "Sexual health",
    immunity: "Immunity",
    focus: "Focus",
    performance: "Performance",
    "gut-health": "Gut health",
  };
  return t.categories.map((c) => label[c]).find(Boolean) ?? "Physician prescribed";
}

export default async function Breakthrough() {
  const { treatments, isFallback } = await getCatalog();
  const items = selectFeatured(treatments, 4);

  return (
    <section className="bg-ivory px-3 lg:px-5 pt-6">
      <Spotlight
        radius={460}
        className="mx-auto max-w-[1440px] rounded-[var(--r)] grain overflow-hidden px-6 lg:px-16 py-16 lg:py-24"
        style={{ background: "linear-gradient(165deg, #202528 0%, #131618 92%)" }}
      >
        <div className="relative z-10">
          <Reveal className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-rule" style={{ background: "#FFFEF8" }} />
              <span className="eyebrow" style={{ color: "#FFFEF8" }}>The WellaraMD Formulary</span>
            </div>
            <h2 className="display text-ivory text-[2.8rem] lg:text-[4.2rem] leading-[1.02]">
              Your longevity{" "}
              <span className="display-i" style={{ color: "#FFFEF8" }}>breakthrough</span>
              <br />
              is here.
            </h2>
            <p className="mt-5 text-ivory/65 text-[1.05rem] max-w-lg">
              A curated formulary of physician prescribed peptide and metabolic
              therapies, matched precisely to your labs and goals.
            </p>
            {process.env.NODE_ENV !== "production" && (
              <p className="mt-4 inline-flex items-center gap-2 text-[0.7rem] tracking-wide rounded-full border border-white/15 px-3 py-1 text-ivory/50">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: isFallback ? "#9A6D2A" : "#5FA47C" }}
                />
                {isFallback
                  ? "fallback catalog (no platform key)"
                  : `live catalog · ${treatments.length} treatments from platform`}
              </p>
            )}
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((it, i) => (
              <Reveal key={it.id} delay={i * 80}>
                <a
                  href="#evaluation"
                  className="press group block rounded-2xl p-5 h-full border border-white/[0.06] transition-colors hover:bg-white/[0.06]"
                  style={{ background: "rgba(255,255,255,0.035)" }}
                >
                  <div className="relative w-full h-44 mb-4 flex items-center justify-center">
                    <div
                      className="absolute w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"
                      style={{ background: "radial-gradient(circle, rgba(236,213,203,0.6), transparent 65%)" }}
                    />
                    <div
                      className="absolute w-28 h-28 rounded-full blur-2xl opacity-40"
                      style={{ background: "radial-gradient(circle, rgba(236,213,203,0.35), transparent 66%)" }}
                    />
                    <Tilt max={22} className="relative h-[150%] w-[60%]">
                      <Product name={productFor(it, i)} float delay={i * 500} className="h-full w-full object-contain" />
                    </Tilt>
                  </div>
                  <p className="text-ivory text-[1.4rem] display leading-tight">{it.name}</p>
                  <p className="text-ivory/55 text-[0.85rem] mt-1">{tagFor(it)}</p>

                  {it.priceMonthly !== null && (
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-baseline justify-between">
                      <span className="text-ivory text-[0.95rem]">
                        ${it.priceMonthly.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        <span className="text-ivory/45 text-[0.78rem]"> / mo</span>
                      </span>
                      {it.discounts.length > 0 && (
                        <span className="text-[0.7rem]" style={{ color: "#FFFEF8" }}>
                          save {Math.max(...it.discounts.map((d) => d.percent))}%
                        </span>
                      )}
                    </div>
                  )}
                  <span className="chev inline-block mt-3 text-[0.85rem]" style={{ color: "#FFFEF8" }} aria-hidden>Learn more ›</span>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a href="#evaluation" className="btn btn-gold" style={{ background: "#FFFEF8", color: "#141414" }}>Find your Rx match</a>
            <a href="#treatments" className="btn btn-outline-light">
              View all {treatments.length} treatments
            </a>
          </div>

          <p className="mt-10 text-ivory/40 text-[0.78rem] max-w-3xl leading-relaxed">
            Compounded products are not approved nor evaluated for safety,
            effectiveness, or quality by the FDA. Prescription products require an
            evaluation with a licensed provider who will determine if a
            prescription is appropriate. Individual results may vary.
          </p>
        </div>
      </Spotlight>
    </section>
  );
}
