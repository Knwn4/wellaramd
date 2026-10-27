/**
 * WellaraMD resources (SEO articles).
 *
 * Editorial + compliance rules for anything added here:
 *  - WellaraMD does NOT market or sell hormone therapy (HRT, testosterone,
 *    estrogen, enclomiphene). Keep articles on weight, metabolic, longevity,
 *    and general women's-health education only. No hormone-treatment content.
 *  - No cure / guarantee / before-after claims, no "struggling with…" framing.
 *  - Educational, not medical advice. Every article renders the standard
 *    disclaimer + "a licensed provider decides" automatically (see the article
 *    page), so body copy stays informational.
 *  - Compounded medications are "not FDA-approved"; say so wherever relevant.
 *  - No fabricated "medically reviewed by Dr. X" byline — we have no named
 *    providers. Byline is the WellaraMD team.
 *  - Cite reputable sources (FDA, NIH/NIDDK, Mayo) in `sources`.
 *  - Article paths are NOT on the analytics tracked-path allowlist, so no ad
 *    pixel runs on them. Keep it that way.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  dek: string;
  description: string;
  pillar: "Weight" | "Metabolic" | "Longevity" | "Guides";
  updated: string; // ISO date
  readMins: number;
  blocks: Block[];
  sources: { label: string; url: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "glp1-for-weight-what-to-know",
    title: "GLP-1 medications for weight: what they are and how they work",
    dek: "Semaglutide and tirzepatide come up in every conversation about weight now. Here is what the medications actually are, how they work, and what a provider weighs before prescribing one.",
    description:
      "A plain-English explainer on GLP-1 medications like semaglutide and tirzepatide: how they work for weight, who a licensed provider evaluates, FDA-approved vs. compounded, and realistic expectations.",
    pillar: "Weight",
    updated: "2026-10-27",
    readMins: 5,
    blocks: [
      {
        type: "p",
        text: "GLP-1 medications have changed how clinicians approach weight, but the names get thrown around without much explanation. Here is a straightforward look at what they are and how a licensed provider decides whether one is appropriate.",
      },
      { type: "h2", text: "What GLP-1 medications are" },
      {
        type: "p",
        text: "GLP-1 stands for glucagon-like peptide-1, a natural signal your gut releases after you eat. Medications in this class mimic that signal. Semaglutide acts on the GLP-1 pathway; tirzepatide acts on GLP-1 and a second pathway called GIP. Both are prescription medications, given as a weekly injection or, in some protocols, other forms.",
      },
      { type: "h2", text: "How they work" },
      {
        type: "ul",
        items: [
          "They slow how quickly the stomach empties, so you feel full longer after a meal.",
          "They reduce appetite and the constant background of food cues for many people.",
          "They support steadier blood-sugar and insulin response, which is why some were first developed for type 2 diabetes.",
        ],
      },
      { type: "h2", text: "FDA-approved vs. compounded" },
      {
        type: "p",
        text: "Some GLP-1 products are FDA-approved brand medications. Others are compounded preparations made by licensed US pharmacies under FDA-regulated 503A or 503B authority. A compounded formulation has not undergone separate FDA approval. A provider will tell you which is which, and FDA-approved options may be available.",
      },
      { type: "h2", text: "What a provider weighs before prescribing" },
      {
        type: "p",
        text: "A GLP-1 is not right for everyone. Before prescribing, a licensed provider reviews your health history, current medications, and any conditions that would make the medication unsafe. They set realistic expectations and go over side effects, which commonly include nausea, especially early on. Not everyone is approved, and that review is the point.",
      },
      {
        type: "p",
        text: "Results vary from person to person and depend on dose, adherence, diet, and activity. No specific outcome is guaranteed, and a GLP-1 works best alongside, not instead of, sustainable habits.",
      },
    ],
    sources: [
      { label: "FDA — Medications Containing Semaglutide", url: "https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/medications-containing-semaglutide-marketed-type-2-diabetes-or-weight-loss" },
      { label: "NIH / NIDDK — Prescription Medications to Treat Overweight & Obesity", url: "https://www.niddk.nih.gov/health-information/weight-management/prescription-medications-treat-overweight-obesity" },
      { label: "FDA — Compounding and the FDA", url: "https://www.fda.gov/drugs/human-drug-compounding/compounding-and-fda-questions-and-answers" },
    ],
  },
  {
    slug: "how-online-weight-care-works",
    title: "How online weight care works, and when to see someone in person",
    dek: "What a telehealth visit for weight and metabolic care actually involves, start to finish, and the situations where an in-person visit is the right call.",
    description:
      "A step-by-step look at how online weight and metabolic care works through a telehealth platform, what a licensed provider reviews, and when an in-person visit is needed instead.",
    pillar: "Weight",
    updated: "2026-10-27",
    readMins: 4,
    blocks: [
      {
        type: "p",
        text: "Telehealth has made it possible to start weight and metabolic care without sitting in a waiting room. It isn't right for every situation, but for many people it's a straightforward way to start a conversation with a licensed provider. Here's how the process actually works.",
      },
      { type: "h2", text: "The steps, start to finish" },
      {
        type: "ul",
        items: [
          "You complete an online intake with your health history, current medications, and goals. It takes a few minutes.",
          "A provider licensed in your state reviews it. Where state law requires it, they meet with you by video or phone.",
          "The provider decides whether a treatment is medically appropriate. Not everyone is approved, and that's the point of the review.",
          "If a treatment is approved, a US-licensed pharmacy fills it and ships it to you.",
          "Care continues through your patient portal, where you can message your care team, report side effects, and ask about dose adjustments.",
        ],
      },
      { type: "h2", text: "What a provider is looking at" },
      {
        type: "p",
        text: "A good intake isn't a formality. The provider is checking that a treatment fits your history, won't interact with your other medications, and is safe given any conditions you have. In some cases they'll ask for lab work before deciding. Saying no, or asking for more information, is part of responsible care.",
      },
      { type: "h2", text: "When an in-person visit is the better choice" },
      {
        type: "p",
        text: "Online care has real limits. You should see someone in person for anything that needs a physical exam or urgent attention, for example new or severe symptoms. Telehealth is a complement to in-person care, not a replacement for it, and a responsible provider will tell you when an office visit is the right step.",
      },
      { type: "h2", text: "A note on how WellaraMD fits in" },
      {
        type: "p",
        text: "WellaraMD is a telehealth company, not a medical practice or a pharmacy. Care is delivered by independent, licensed providers, and prescriptions are filled by US-licensed pharmacies, through our platform. Some treatments may be compounded; compounded medications are not FDA-approved. A licensed provider decides what, if anything, is appropriate for you.",
      },
    ],
    sources: [
      { label: "NIH / NIDDK — Prescription Medications to Treat Overweight & Obesity", url: "https://www.niddk.nih.gov/health-information/weight-management/prescription-medications-treat-overweight-obesity" },
      { label: "FDA — Compounding and the FDA", url: "https://www.fda.gov/drugs/human-drug-compounding/compounding-and-fda-questions-and-answers" },
    ],
  },
  {
    slug: "weight-and-longevity-care-cost",
    title: "What weight and longevity care costs without insurance",
    dek: "How cash-pay telehealth pricing is structured, what's included, and what you actually pay and when.",
    description:
      "A plain-English breakdown of what weight and longevity telehealth care costs without insurance: the consultation fee, what's included, and when you're charged.",
    pillar: "Guides",
    updated: "2026-10-27",
    readMins: 4,
    blocks: [
      {
        type: "p",
        text: "One of the most common questions about online care is the simplest: what does it actually cost? Cash-pay telehealth is priced differently from an insurance-based clinic, and the structure is usually clearer. Here's how it works.",
      },
      { type: "h2", text: "You pay a small fee to be reviewed" },
      {
        type: "p",
        text: "When you submit your intake, a $20 consultation fee is charged so a licensed provider can review your health and decide whether a treatment is appropriate. That fee covers the review itself and is not refundable, because the provider does the work regardless of the outcome.",
      },
      { type: "h2", text: "You're only charged for treatment if you're approved" },
      {
        type: "p",
        text: "At the time you submit, a hold is placed on your card for the treatment amount, but it is only a hold. If a provider decides a treatment isn't right for you, that hold is released and you are not charged for medication. You pay the full treatment price only once a provider approves it.",
      },
      { type: "h2", text: "What's included in the price" },
      {
        type: "ul",
        items: [
          "The online visit with a provider licensed in your state",
          "Medication from a US-licensed pharmacy, if approved",
          "Shipping to your door",
          "Messaging with your care team and follow-ups as your provider directs",
        ],
      },
      { type: "h2", text: "What changes the cost" },
      {
        type: "p",
        text: "The treatment price depends on what's prescribed and the dosing a provider recommends, so it varies by person. The important part is that you see the price before you commit to anything, there are no membership fees layered on top, and you can cancel at any time.",
      },
      { type: "h2", text: "Why cash-pay, not insurance" },
      {
        type: "p",
        text: "Cash-pay pricing trades insurance paperwork for transparency. You know the number up front instead of waiting on claims, prior authorizations, and surprise bills. For many people that predictability is the point.",
      },
    ],
    sources: [
      { label: "FDA — Compounding and the FDA", url: "https://www.fda.gov/drugs/human-drug-compounding/compounding-and-fda-questions-and-answers" },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
