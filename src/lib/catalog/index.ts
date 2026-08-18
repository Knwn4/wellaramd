import type { Catalog, Treatment } from "./types";
import { STATIC_CATALOG } from "./static";
import { fetchMyDoseCatalog } from "./mydose";

export type { Treatment, Catalog, Discount } from "./types";

/**
 * Registry of platform adapters. Add a new telehealth vendor here and set
 * CATALOG_PROVIDER in .env.local — nothing else in the app changes.
 */
const ADAPTERS: Record<string, () => Promise<Treatment[]>> = {
  mydose: fetchMyDoseCatalog,
};

/**
 * Returns the treatment catalog from the configured platform, falling back to
 * bundled data if no provider is configured or the vendor call fails.
 * Never throws — the marketing site must always render.
 */
export async function getCatalog(): Promise<Catalog> {
  // The official WellaraMD product sheet is the source of truth for what we sell
  // and where each "Get started" links. Set CATALOG_PROVIDER=mydose to instead
  // pull the live platform catalog (e.g. for internal ops views).
  const provider = process.env.CATALOG_PROVIDER;
  const adapter = provider ? ADAPTERS[provider] : undefined;

  if (!adapter || !process.env.MYDOSE_API_KEY) {
    return { treatments: STATIC_CATALOG, isFallback: false, fetchedAt: null };
  }

  try {
    const treatments = await adapter();
    if (!treatments.length) {
      return { treatments: STATIC_CATALOG, isFallback: true, fetchedAt: null };
    }
    return {
      treatments,
      isFallback: false,
      fetchedAt: new Date().toISOString(),
    };
  } catch (err) {
    console.warn(`[catalog] ${provider} unavailable, using fallback:`, err);
    return { treatments: STATIC_CATALOG, isFallback: true, fetchedAt: null };
  }
}

/** Display labels + preferred display order for normalized category slugs. */
export const CATEGORY_LABELS: Record<string, string> = {
  longevity: "Longevity",
  "hormones-women": "Women's Hormones",
  "hormones-men": "Men's Hormones",
  recovery: "Recovery & Repair",
  "weight-loss": "Weight & Metabolic",
  energy: "Energy",
  sleep: "Sleep",
  "sexual-health": "Sexual Health",
  performance: "Performance",
  focus: "Focus",
  immunity: "Immunity",
  "gut-health": "Gut Health",
};

const CATEGORY_ORDER = Object.keys(CATEGORY_LABELS);

/** Group treatments by their primary (highest-priority) category. */
export function groupByCategory(
  treatments: Treatment[]
): { slug: string; label: string; items: Treatment[] }[] {
  const groups = new Map<string, Treatment[]>();

  for (const t of treatments) {
    const primary =
      CATEGORY_ORDER.find((c) => t.categories.includes(c)) ?? t.categories[0] ?? "other";
    if (!groups.has(primary)) groups.set(primary, []);
    groups.get(primary)!.push(t);
  }

  return [...groups.entries()]
    .sort((a, b) => {
      const ia = CATEGORY_ORDER.indexOf(a[0]);
      const ib = CATEGORY_ORDER.indexOf(b[0]);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    })
    .map(([slug, items]) => ({
      slug,
      label: CATEGORY_LABELS[slug] ?? "Other",
      items: items.sort((a, b) => a.name.localeCompare(b.name)),
    }));
}

/** Pick featured treatments for the homepage formulary, by category priority. */
export function selectFeatured(treatments: Treatment[], limit = 4): Treatment[] {
  const priority = ["longevity", "recovery", "weight-loss", "hormones-women"];
  const picked: Treatment[] = [];
  const seen = new Set<string>();

  for (const cat of priority) {
    const match = treatments.find(
      (t) => !seen.has(t.id) && t.categories.includes(cat) && t.priceMonthly !== null
    );
    if (match) {
      picked.push(match);
      seen.add(match.id);
    }
  }
  for (const t of treatments) {
    if (picked.length >= limit) break;
    if (!seen.has(t.id) && t.priceMonthly !== null) {
      picked.push(t);
      seen.add(t.id);
    }
  }
  return picked.slice(0, limit);
}
