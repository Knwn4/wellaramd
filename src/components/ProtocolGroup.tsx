import Image from "next/image";
import type { Treatment } from "@/lib/catalog/types";
import { productImage } from "@/lib/productImage";
import { COMPOUNDED_LABEL } from "@/lib/compliance";

/* ============================================================================
   Shared protocol display — the goal-grouped, tinted-card layout first built
   for /peptides and now reused on the homepage so both read identically.

   - GoalTile: the lifestyle image tile that leads a group row (carries the
     group name). `wide` spans two columns for single-product rows.
   - ProtocolCard: a treatment on a soft tinted stage (molecule-class pill,
     arrow, floating labelled vial, price, compounded label). The <a> points at
     the product's MyDose booking link, so the site-wide neutral Lead fires on
     click (Analytics.tsx), with no health data in the event.
   ========================================================================== */

/** Short molecule-class label shown on each card ("GLP-1", "Peptide", ...). */
export function moleculeClass(t: Treatment): string {
  const n = t.name.toLowerCase();
  if (/tirzepatide/.test(n)) return "GLP-1 · GIP";
  if (/semaglutide|retatrutide/.test(n)) return "GLP-1";
  if (/nad/.test(n)) return "Coenzyme";
  if (/methylcobalamin|b-?12/.test(n)) return "Vitamin";
  if (/sermorelin|tesamorelin|ipamorelin|cjc|bpc|pt-?141|glutathione|mots|ghk/.test(n))
    return "Peptide";
  return "Rx";
}

export function GoalTile({
  title,
  image,
  imagePos,
  wide = false,
}: {
  title: string;
  image: string;
  imagePos: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`relative col-span-2 rounded-[var(--r)] overflow-hidden min-h-[220px] lg:min-h-[360px] ${
        wide ? "lg:col-span-2" : "lg:col-span-1"
      }`}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 380px"
        className={`object-cover ${imagePos}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <h3 className="absolute bottom-5 left-5 display text-white text-[1.6rem] lg:text-[1.9rem] leading-[1.05] max-w-[7ch]">
        {title}
      </h3>
    </div>
  );
}

export function ProtocolCard({
  t,
  tint,
  className = "",
}: {
  t: Treatment;
  tint: string;
  className?: string;
}) {
  const href = t.formUrl || "#treatments";
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`press group relative flex flex-col rounded-[var(--r)] overflow-hidden p-5 min-h-[300px] lg:min-h-[360px] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-32px_rgba(20,20,20,0.4)] ${className}`}
      style={{ background: tint }}
    >
      <div className="flex items-start justify-between">
        <span className="rounded-full bg-white/80 backdrop-blur-sm px-2.5 py-1 text-[0.66rem] font-medium text-ink-2">
          {moleculeClass(t)}
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-ivory transition group-hover:bg-emerald">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <h3 className="mt-3 text-ink font-medium text-[1.2rem] leading-tight">{t.name}</h3>
      <div className="relative flex-1 flex items-center justify-center my-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={productImage(t)}
          alt={t.name}
          loading="lazy"
          className="h-[150px] lg:h-[170px] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.06] drop-shadow-[0_22px_26px_-14px_rgba(34,34,34,0.5)]"
        />
      </div>
      <div className="flex items-end justify-between gap-2">
        <span className="text-ink text-[1.05rem] font-medium">
          {t.priceMonthly !== null ? (
            <>
              ${Number.isInteger(t.priceMonthly) ? t.priceMonthly.toLocaleString() : t.priceMonthly.toFixed(2)}
              <span className="muted text-[0.72rem] font-normal"> / mo</span>
            </>
          ) : (
            <span className="muted text-[0.82rem]">At consultation</span>
          )}
        </span>
        {t.compounded && (
          <span className="text-[0.56rem] uppercase tracking-wide text-ink-2/75 text-right leading-tight max-w-[8.5rem]">
            {COMPOUNDED_LABEL}
          </span>
        )}
      </div>
    </a>
  );
}
