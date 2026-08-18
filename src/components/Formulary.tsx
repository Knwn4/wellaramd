import Reveal from "./Reveal";
import { getCatalog, groupByCategory } from "@/lib/catalog";

export default async function Formulary() {
  const { treatments, isFallback } = await getCatalog();
  const groups = groupByCategory(treatments);

  return (
    <section id="treatments" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-gold">The Complete Formulary</span>
          <h2 className="display text-ink text-[2.8rem] lg:text-[4.2rem] leading-[1.03] mt-4">
            Every therapy,
            <br />
            <span className="display-i text-gold">in the open.</span>
          </h2>
          <p className="mt-6 muted text-[1.08rem] leading-relaxed">
            {treatments.length} physician prescribed protocols across{" "}
            {groups.length} categories. Every price includes your consultation and
            ongoing monitoring. Commit longer, pay less.
          </p>
        </Reveal>

        <div className="mt-14 space-y-12">
          {groups.map((g, gi) => (
            <Reveal key={g.slug} delay={gi * 60}>
              <div className="flex items-baseline gap-4 mb-5">
                <h3 className="display text-ink text-[1.9rem]">{g.label}</h3>
                <span className="h-px flex-1 bg-[var(--line)]" />
                <span className="muted text-[0.8rem]">{g.items.length}</span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {g.items.map((t) => (
                  <a
                    key={t.id}
                    href="#evaluation"
                    className="press group rounded-2xl bg-ivoryCard border border-[var(--line-soft)] p-5 flex flex-col hover:bg-blush/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-ink text-[1.05rem] font-medium leading-tight">
                        {t.name}
                      </span>
                      {t.discounts.length > 0 && (
                        <span className="shrink-0 text-[0.64rem] tracking-wide rounded-full px-2 py-0.5 bg-gold/12 text-gold">
                          −{Math.max(...t.discounts.map((d) => d.percent))}%
                        </span>
                      )}
                    </div>

                    {t.description && t.description !== t.name && (
                      <p className="muted text-[0.82rem] mt-1.5 line-clamp-2">
                        {t.description}
                      </p>
                    )}

                    <div className="mt-auto pt-4 flex items-baseline justify-between">
                      <span className="text-ink text-[1.05rem]">
                        {t.priceMonthly !== null ? (
                          <>
                            ${t.priceMonthly.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                            <span className="muted text-[0.76rem]"> / mo</span>
                          </>
                        ) : (
                          <span className="muted text-[0.85rem]">Price on evaluation</span>
                        )}
                      </span>
                      {t.bloodTests > 0 && (
                        <span className="muted text-[0.72rem]">{t.bloodTests} markers</span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 muted text-[0.76rem] max-w-3xl leading-relaxed">
          {isFallback
            ? "Representative pricing shown. "
            : "Pricing reflects the current clinical formulary. "}
          All therapies require evaluation by a licensed physician and are
          dispensed only where clinically appropriate. Consultation fees included
          where listed.
        </p>
      </div>
    </section>
  );
}
