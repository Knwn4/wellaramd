import type { Treatment } from "./types";

/**
 * WellaraMD product catalog — the official product & pricing sheet.
 * Source of truth for what the site sells.
 *
 * Each product carries the MyDose intake form it routes to (`intakeFormId`,
 * pulled live from the platform's /intake-forms list). The "Get started" CTA
 * builds the patient link from NEXT_PUBLIC_MYDOSE_INTAKE_URL + that form id, so
 * once Open Intake is enabled in MyDose and its base URL is set, all 14 products
 * link to their exact form automatically — no per-product URLs to paste.
 */

const t = (
  id: string,
  name: string,
  categories: string[],
  forms: { form: string; priceMonthly: number }[],
  intake: { id: string; name: string },
  formUrl = "" // direct MyDose booking link — overrides intake routing when set
): Treatment => ({
  id,
  name,
  categories,
  description: "",
  priceMonthly: Math.min(...forms.map((f) => f.priceMonthly)),
  consultPrice: null,
  discounts: [],
  bloodTests: 0,
  published: true,
  source: "static",
  forms: forms.map((f) => ({ ...f, formUrl: "" })),
  formUrl,
  intakeFormId: intake.id,
  intakeFormName: intake.name,
});

// MyDose direct booking links (patient/book-consultation), keyed by product.
const BOOK = {
  enclomiphene: "https://app.mydose.ai/patient/book-consultation/9f81732b-018b-4f6a-999f-91492f7767af?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=f7be458d-a489-4de2-a8f6-bad7a76e2a95",
  ghkCu: "https://app.mydose.ai/patient/book-consultation/2d7cbb55-90ef-4868-960b-70b76a3d56d3?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=ac726036-c236-4a84-8c0c-8c82f4c7bf5a",
  nadStk: "https://app.mydose.ai/patient/book-consultation/fa9c995a-1c0a-4dca-a074-6a3118d4b61c?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=08883c7c-1391-49fb-86ed-d083382696b7",
  sermorelinStk: "https://app.mydose.ai/patient/book-consultation/d6e9ef5d-0347-45f9-9ab1-20105418d00f?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=4dbef679-87c3-41ec-b675-f1add89dbf35",
  tesamorelin: "https://app.mydose.ai/patient/book-consultation/01813fa6-87c6-412f-9d00-f0814a3e136e?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=e6a46f15-e936-4c93-80cc-db3e8952abd2",
  semaB12: "https://app.mydose.ai/patient/book-consultation/22008918-ddf7-426b-a328-96d807dadd09?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=84404c59-bf37-472e-92b6-c54b533c8f97",
  tirzB12: "https://app.mydose.ai/patient/book-consultation/aabe46cd-994e-4da3-8723-e2ab5dc89bbf?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=81a0da8b-7df9-4650-a0d9-c590b7feaf00",
  // products not on the original sheet — priced at consultation for now
  glutathione: "https://app.mydose.ai/patient/book-consultation/9d1aff6b-0a9f-4547-b25b-d9fd67152bd2?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=dc13b414-cf58-41a9-9081-d1e86daec397",
  finasteride: "https://app.mydose.ai/patient/book-consultation/86d82d19-7943-4c59-8eb5-03586011b45c?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=298ba3a3-65f3-451b-89a6-c5eeeb3183b5",
  b12: "https://app.mydose.ai/patient/book-consultation/3f5d2189-5ac4-4e37-a0d4-9a0e90f28b7a?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=4808de1b-cffe-4ed2-8096-d0178e9e3020",
  motsc: "https://app.mydose.ai/patient/book-consultation/07abd252-f0a3-4b3c-9ca1-be3bdee58b7d?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=352032c1-688c-49d0-a681-03cc69ffbc1b",
  bpc157: "https://app.mydose.ai/patient/book-consultation/2024e31f-02a1-4139-a723-da8a6e209832?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=5560ef55-be22-418e-93e9-3487fc1ee398",
  pt141: "https://app.mydose.ai/patient/book-consultation/937f88d8-3f19-4de3-86f4-051b765ac5a7?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=9198b373-3384-409c-856d-3bcbcd48293a",
  cjcIpa: "https://app.mydose.ai/patient/book-consultation/57cfef95-4179-4970-b29c-53e31b36f2ac?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=db7f6343-ba34-451a-82ca-95af00bf6c9e",
  wolverine: "https://app.mydose.ai/patient/book-consultation/977c431e-391c-4303-9ae6-045f28296bfa?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=98f815fd-e7ba-46dd-a735-be9be3ed1eaa",
  retatrutide: "https://app.mydose.ai/patient/book-consultation/87c04bcd-914a-4405-8ae5-ec8605031e50?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=7a5077c0-9931-49b2-83f4-fcd128c5fd1e",
  semaB6: "https://app.mydose.ai/patient/book-consultation/1f008329-4b00-46ce-b330-80daafa78903?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=8cbd6acb-8a1c-4020-924e-fc4b3a909fb8",
  tirzB6: "https://app.mydose.ai/patient/book-consultation/740dcb5c-6757-48c5-a207-912c2e17cf50?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=d1114918-28ad-44ad-8158-21d0764718b8",
  tirzOnd: "https://app.mydose.ai/patient/book-consultation/3029da6e-521c-4d71-bc49-bcb35c73f05f?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=70b34cbc-8a0a-4982-9330-ac001b7d7758",
  semaOnd: "https://app.mydose.ai/patient/book-consultation/3fa83af8-05af-4ea4-90b3-48c1e355066d?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=c85cbb99-4fb7-4a01-8f2b-2935e98ed278",
  tirzMicro: "https://app.mydose.ai/patient/book-consultation/cd57d09b-479b-4205-abcb-f04df832df3c?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=e453f3ad-9429-4158-8afe-93089e767289",
  tirzB12Micro: "https://app.mydose.ai/patient/book-consultation/05091009-95b2-48b7-a02d-bd10f2f34c17?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=3ae82fe5-206c-4012-a4e0-5471d36210d7",
};

/** Product priced from MyDose packages, no intake-form id (booking link drives the CTA). */
const np = (
  id: string,
  name: string,
  categories: string[],
  priceMonthly: number,
  forms: string[],
  formUrl: string
): Treatment => ({
  id,
  name,
  categories,
  description: "",
  priceMonthly,
  consultPrice: null,
  discounts: [],
  bloodTests: 0,
  published: true,
  source: "static",
  forms: forms.map((f) => ({ form: f, priceMonthly })),
  formUrl,
});

// MyDose intake form ids (from GET /intake-forms)
const F = {
  enclomiphene: { id: "8e838e0a-90bf-46a3-a460-bd730a7835d1", name: "Enclomiphene Citrate Intake" },
  hrtWomen: { id: "1bdf1e65-44e9-4f26-b75b-a1dc97e95cc9", name: "HRT Women Intake" },
  peptide: { id: "bdfe4f5e-bad6-4959-a1a8-37481e675151", name: "Peptide Intake" },
  antiAging: { id: "2d727800-e060-4ee6-bced-44f8ccf44473", name: "Anti-Aging Intake" },
  trt: { id: "73ca903d-b79a-47b4-b0c6-83ab5e7fb2bf", name: "TRT Intake" },
  semaglutide: { id: "38bffab1-2177-4458-8341-32a661678d6e", name: "Semaglutide Intake" },
  sermorelin: { id: "6d7bd5c3-dd06-46d2-8cb3-f3c7b1c4c9df", name: "Sermorelin Intake" },
  tesamorelin: { id: "ea7d58d3-b5eb-42c0-8718-e1eb5a289195", name: "Tesamorelin Intake" },
  tirzepatide: { id: "619239f8-ffc0-4c3c-984a-e1f380d63704", name: "Tirzepatide Intake" },
};

/**
 * Prices & categories mirror the live MyDose package list (source of truth for
 * what patients actually book and pay). Products with a booking link route
 * straight to their MyDose consultation page.
 */
export const STATIC_CATALOG: Treatment[] = [
  // ── Peptides, hormones & longevity (MyDose packages) ──────────────────
  t("glow", "GLOW Injection", ["recovery"], [{ form: "Injectable", priceMonthly: 249 }], F.peptide,
    "https://app.mydose.ai/patient/book-consultation/8d41e6df-cb33-4498-900a-3ca09fc6d7e0?location_id=loc_70c3de9e-f419-4021-bf4f-5cc664fc0ad3&overrideId=51d0ec0f-7587-4521-98eb-a75938f76d96"),
  np("glutathione-inj", "Glutathione Injectable", ["immunity", "longevity"], 349, ["Injectable"], BOOK.glutathione),
  t("nad", "NAD+ Injectable", ["longevity", "energy", "recovery", "focus"], [{ form: "Injectable", priceMonthly: 262.5 }], F.antiAging, BOOK.nadStk),
  np("finasteride", "Finasteride", ["hormones-men", "longevity"], 99, ["Oral"], BOOK.finasteride),
  np("methylcobalamin-b12", "Methylcobalamin B12", ["energy", "longevity"], 165, ["Injectable"], BOOK.b12),
  np("mots-c", "MOTS-C", ["weight-loss", "energy", "performance"], 475, ["Injectable"], BOOK.motsc),
  np("bpc-157", "BPC-157", ["recovery", "gut-health"], 275, ["Injectable"], BOOK.bpc157),
  t("tesamorelin", "Tesamorelin", ["longevity", "recovery", "performance"], [{ form: "Injectable", priceMonthly: 450 }], F.tesamorelin, BOOK.tesamorelin),
  t("sermorelin", "Sermorelin", ["longevity", "recovery", "performance"], [{ form: "Injectable", priceMonthly: 300 }], F.sermorelin, BOOK.sermorelinStk),
  np("pt-141", "PT-141", ["sexual-health"], 200, ["Injectable"], BOOK.pt141),
  np("cjc-ipamorelin", "CJC-1295 + Ipamorelin", ["gut-health", "sleep", "recovery", "longevity"], 275, ["Injectable"], BOOK.cjcIpa),
  np("wolverine", "Wolverine Injection", ["recovery"], 249, ["Injectable"], BOOK.wolverine),
  t("enclomiphene", "Enclomiphene", ["hormones-men"], [{ form: "Oral", priceMonthly: 199 }], F.enclomiphene, BOOK.enclomiphene),
  t("ghk-cu", "GHK-Cu", ["longevity"], [{ form: "Injectable", priceMonthly: 229 }], F.peptide, BOOK.ghkCu),

  // ── Weight & metabolic (MyDose packages) ──────────────────────────────
  t("semaglutide-b12", "Semaglutide + B12", ["weight-loss"], [{ form: "Injectable", priceMonthly: 300 }], F.semaglutide, BOOK.semaB12),
  t("tirzepatide-b12", "Tirzepatide + B12", ["weight-loss"], [{ form: "Injectable", priceMonthly: 249 }], F.tirzepatide, BOOK.tirzB12),
  np("tirzepatide-microdose", "Tirzepatide Microdosing", ["weight-loss"], 249, ["Sublingual"], BOOK.tirzMicro),
  np("retatrutide", "Retatrutide", ["weight-loss"], 450, ["Injectable"], BOOK.retatrutide),
  np("semaglutide-b6", "Semaglutide + B6", ["weight-loss"], 350, ["Injectable"], BOOK.semaB6),
  np("tirzepatide-b6", "Tirzepatide + B6", ["weight-loss"], 249, ["Injectable"], BOOK.tirzB6),
  np("tirzepatide-ondansetron", "Tirzepatide + Ondansetron ODT", ["weight-loss"], 189, ["ODT"], BOOK.tirzOnd),
  np("semaglutide-ondansetron", "Semaglutide + Ondansetron ODT", ["weight-loss"], 149, ["ODT"], BOOK.semaOnd),
  np("tirzepatide-b12-microdose", "Tirzepatide + B12 Microdose", ["weight-loss"], 199, ["Injectable"], BOOK.tirzB12Micro),
];
