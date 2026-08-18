/**
 * Vendor-agnostic catalog types.
 *
 * The site's components ONLY ever consume these shapes — never a vendor's raw
 * API response. To move to a different telehealth platform, write a new adapter
 * that returns Treatment[] and register it in ./index.ts. No UI changes needed.
 */

export type Discount = {
  months: number;
  percent: number;
};

/** A delivery-system variant of a treatment (e.g. Injectable vs Sublingual). */
export type Form = {
  /** "Oral" | "Injectable" | "Sublingual" | "Topical" | … */
  form: string;
  priceMonthly: number;
  /** MyDose intake/order form URL for this variant (filled per product). */
  formUrl?: string;
};

export type Treatment = {
  /** Stable id from the source platform */
  id: string;
  name: string;
  /** Normalized category slugs, e.g. "longevity", "weight-loss", "hormones-women" */
  categories: string[];
  description: string;
  /** Monthly price in USD, or null if not priced */
  priceMonthly: number | null;
  /** One-off consult fee in USD */
  consultPrice: number | null;
  /** Volume/commitment discounts, ascending by months */
  discounts: Discount[];
  /** How many blood markers this protocol tracks */
  bloodTests: number;
  /** Whether the platform has this live to patients */
  published: boolean;
  /** Which adapter produced this record */
  source: "mydose" | "static";
  /** Delivery-system variants and their prices (empty when single-form). */
  forms?: Form[];
  /** MyDose intake/order form URL — where "Get started" sends the patient.
      Overrides the constructed intake link when set. */
  formUrl?: string;
  /** MyDose intake form this product routes to (from the platform's forms list). */
  intakeFormId?: string;
  intakeFormName?: string;
};

export type Catalog = {
  treatments: Treatment[];
  /** true when we fell back to bundled data (no key / vendor down / vendor swap) */
  isFallback: boolean;
  fetchedAt: string | null;
};
