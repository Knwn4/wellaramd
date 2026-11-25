import type { Treatment } from "@/lib/catalog/types";

/**
 * Single source of truth for which realistic product image a treatment shows.
 * Used by BOTH the formulary grid (ProductGrid) and the homepage category
 * carousel (CategoryRow) so the same product always looks identical site-wide.
 *
 * Images are realistic vials with a GENERIC molecule label (drug name + Rx only,
 * no "Wellara" brand) — see the LegitScript note in components/Visuals.tsx. B-12
 * keeps its real pink liquid.
 */
export function productImage(t: Treatment): string {
  const n = t.name.toLowerCase();
  if (/semaglutide/.test(n)) return "/products/label-semaglutide.png";
  if (/tirzepatide/.test(n)) return "/products/label-tirzepatide.png";
  if (/methylcobalamin|b-?12/.test(n)) return "/products/label-b12.png";
  if (/glutathione/.test(n)) return "/products/label-glutathione.png";
  if (/sermorelin/.test(n)) return "/products/label-sermorelin.png";
  if (/pt-?141/.test(n)) return "/products/label-pt141.png";
  if (/nad/.test(n)) return "/products/label-nad.png";
  return "/products/label-semaglutide.png";
}
