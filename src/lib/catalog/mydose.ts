import type { Treatment } from "./types";

/**
 * MyDose Clinic API adapter.
 *
 * This is the ONLY file that knows about MyDose's API shape. If we move to a
 * different platform, add a sibling adapter with the same signature and swap the
 * provider in ./index.ts — the site's components never change.
 *
 * Docs: https://app.mydose.ai/api/clinic/v1/docs
 * Auth: Authorization: Bearer mdc_<env>_<secret>   (server-side only)
 */

type MyDosePackage = {
  id: string;
  name: string;
  categories?: string[] | null;
  description?: string | null;
  price?: number | null;
  consultationPrice?: number | null;
  commitmentDiscounts?: { months: number; enabled: boolean; discountPercent: number }[] | null;
  bloodTests?: unknown[] | null;
  visibleToPatients?: boolean | null;
};

const slug = (s: string) =>
  s.trim().toLowerCase().replace(/\s*\/\s*/g, "-").replace(/\s+/g, "-");

function mapPackage(p: MyDosePackage): Treatment {
  return {
    id: p.id,
    name: (p.name ?? "").trim(),
    categories: (p.categories ?? []).map(slug),
    description: (p.description ?? "").trim(),
    priceMonthly: typeof p.price === "number" ? p.price : null,
    consultPrice: typeof p.consultationPrice === "number" ? p.consultationPrice : null,
    discounts: (p.commitmentDiscounts ?? [])
      .filter((d) => d?.enabled)
      .map((d) => ({ months: d.months, percent: d.discountPercent }))
      .sort((a, b) => a.months - b.months),
    bloodTests: Array.isArray(p.bloodTests) ? p.bloodTests.length : 0,
    published: p.visibleToPatients === true,
    source: "mydose",
  };
}

export async function fetchMyDoseCatalog(): Promise<Treatment[]> {
  const base = process.env.MYDOSE_BASE_URL;
  const key = process.env.MYDOSE_API_KEY;
  if (!base || !key) throw new Error("MyDose credentials not configured");

  const res = await fetch(`${base}/packages`, {
    headers: { Authorization: `Bearer ${key}`, Accept: "application/json" },
    // Catalog changes rarely; re-check hourly.
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`MyDose /packages failed: ${res.status}`);
  }

  const json = (await res.json()) as { data?: MyDosePackage[] };
  const rows = json.data ?? [];
  return rows.map(mapPackage).filter((t) => t.name.length > 0);
}
