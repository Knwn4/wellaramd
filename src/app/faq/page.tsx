import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ — WellaraMD",
  description:
    "Answers about how WellaraMD works, providers and prescriptions, medications and safety, pharmacies, shipping, pricing, and privacy.",
};

type QA = { q: string; a: React.ReactNode };
type Group = { title: string; items: QA[] };

const GROUPS: Group[] = [
  {
    title: "About WellaraMD",
    items: [
      {
        q: "What is WellaraMD?",
        a: "WellaraMD LLC is a telehealth company focused on hormone, metabolic, and longevity care. We connect patients with independent, licensed healthcare providers and US-licensed pharmacies through our platform partner, MyDose. WellaraMD is not a medical practice or a pharmacy, and does not itself diagnose, treat, or dispense medication.",
      },
      {
        q: "How does it work?",
        a: (
          <ol className="list-decimal pl-5 space-y-1.5 marker:text-ink-2/50">
            <li><strong>Complete an online intake.</strong> Create an account and answer questions about your health history, symptoms, and current medications.</li>
            <li><strong>Provider review.</strong> A provider licensed in your state reviews your intake and, where required by state law, meets with you by video or phone.</li>
            <li><strong>Treatment decision.</strong> Your provider decides whether a treatment is medically appropriate. Not everyone is approved.</li>
            <li><strong>Pharmacy fulfillment.</strong> If a prescription is issued, a licensed pharmacy fills it and ships it to you.</li>
            <li><strong>Ongoing care.</strong> You can message your care team, report side effects, and request follow-ups through your patient portal.</li>
          </ol>
        ),
      },
      {
        q: "Who is WellaraMD for?",
        a: "Adults 18 and older who are located in a state where our services are available at the time of their visit.",
      },
    ],
  },
  {
    title: "Providers and prescriptions",
    items: [
      { q: "Who are the providers?", a: "Providers are licensed physicians, nurse practitioners, and physician assistants with NVP Medical Group or MDSide, PLLC, the medical practices that deliver care through our platform partner, MyDose Health. Each provider holds an active license in the state where you are located and makes all medical decisions independently. WellaraMD does not influence whether a prescription is issued." },
      { q: "Is a prescription guaranteed?", a: "No. A prescription is issued only if a licensed provider determines a treatment is medically appropriate for you after reviewing your health information. If you are not approved, you are not charged for medication." },
      { q: "Do I need a video visit?", a: "It depends on your state and the treatment. Some states and medications require a live video or phone consultation. Others allow your provider to review your intake asynchronously. Your provider will follow the requirements of your state." },
      { q: "How do you verify my identity?", a: "We verify your identity and location before your evaluation, which may include a photo ID and other information required by your provider or state law." },
      { q: "Can I talk to my provider after I start treatment?", a: "Yes. You can message your care team through your patient portal to ask questions, report side effects, or request a dose adjustment." },
      { q: "Do you accept insurance?", a: "No. WellaraMD services are self-pay. You may be able to use an HSA or FSA card, depending on your plan." },
    ],
  },
  {
    title: "Medications and safety",
    items: [
      { q: "Are these medications FDA-approved?", a: "Some treatments are FDA-approved medications. Others are compounded medications, prepared by licensed US compounding pharmacies operating under FDA-regulated 503A or 503B authority. The specific compounded formulation has not undergone separate FDA approval. Your provider will tell you whether your treatment is FDA-approved or compounded, and FDA-approved alternatives may be available." },
      { q: "What is a compounded GLP-1 protocol?", a: "It is a physician-supervised protocol for patients pursuing meaningful weight loss, using a GLP-1 medication customized for you and prepared by a licensed compounding pharmacy. It is prescribed only when your provider determines it is appropriate for you." },
      { q: "What results can I expect?", a: "Individual results vary. Outcomes depend on adherence to your treatment plan, lifestyle factors, and individual biological response. No specific outcome is guaranteed. Your provider will talk with you about realistic goals, risks, and side effects before you begin." },
      { q: "What are the side effects?", a: "Every medication has possible side effects. Your provider will review them with you, and the pharmacy includes medication information with your order. Contact your care team right away if you have side effects, and call 911 for any severe reaction." },
      { q: "Can I stop or change my medication?", a: "Talk with your provider before stopping or changing any medication, so they can advise you on doing it safely." },
    ],
  },
  {
    title: "Pharmacies, shipping, and availability",
    items: [
      { q: "Which pharmacies fill my prescription?", a: "Prescriptions are filled by US-licensed pharmacies in the MyDose network that are licensed to dispense in your state. Our partner pharmacies are Pharmacy Hub and Striker." },
      { q: "How long does delivery take?", a: "Most orders ship within a few business days after your prescription is approved and arrive in discreet packaging. Some medications ship cold and must be refrigerated on arrival." },
      { q: "Which states do you serve?", a: "Services are available in all 50 states. Availability of specific treatments may vary by state. You must be physically located in a state we serve at the time of your evaluation, and your shipping address must be in a state we serve." },
      { q: "Do you ship internationally?", a: "No. We ship only to addresses in the United States, within the states where our providers and pharmacies are licensed." },
    ],
  },
  {
    title: "Pricing, billing, and refunds",
    items: [
      { q: "What does the price include?", a: "Listed monthly prices include your provider evaluation, medication, and standard shipping. Your final price is confirmed before you pay. There are no membership fees or hidden fees." },
      { q: "When am I charged?", a: "Your consultation fee is charged at checkout. The cost of your treatment is placed as a temporary hold on your card and is charged only if your provider approves treatment. If you are not approved, the hold is released and you are not charged for medication. Consultation fees are non-refundable once the consultation is completed." },
      { q: "Is this a subscription?", a: "Yes. Monthly plans renew automatically each month until you cancel. Multi-month plans, such as a 3-month plan, ship your medication one month at a time over the length of the plan. Each shipment requires an active prescription, and your provider may check in before refills." },
      { q: "How do I cancel?", a: "You can cancel at any time through your patient portal or by contacting support@wellaramd.com or (866) 667-5276. Cancel at least 48 hours before your next renewal to avoid being charged for the next shipment. Cancellation stops future renewals; the current billing period is not prorated or refunded." },
      { q: "What is your refund policy?", a: "If your provider does not approve a prescription, you are not charged for medication. Because prescription medications cannot be returned once dispensed, orders are generally non-refundable after the pharmacy has filled them. If your order arrives damaged or incorrect, contact us within 14 days of delivery and we will work with the pharmacy to make it right." },
    ],
  },
  {
    title: "Privacy, emergencies, and contact",
    items: [
      {
        q: "Is my information private?",
        a: (
          <>Yes. Your health information is protected under HIPAA and applicable state law. We never sell your personal or health information. See our{" "}
            <a href="/privacy" className="text-ink underline underline-offset-2">Privacy Policy</a> for details.</>
        ),
      },
      { q: "What if I have a medical emergency?", a: "WellaraMD is not for emergencies. If you have a medical emergency, call 911 or go to the nearest emergency room. If you are in crisis, call or text 988." },
      {
        q: "How do I contact you?",
        a: (
          <ul className="list-disc pl-5 space-y-1 marker:text-ink-2/50">
            <li>Email: support@wellaramd.com</li>
            <li>Phone: (866) 667-5276 (toll-free), Mon–Fri, 9am–5pm Pacific Time</li>
            <li>Mail: WellaraMD LLC, 1081 N Tustin Ave, Ste 115, PMB #4026, Anaheim, CA 92807</li>
          </ul>
        ),
      },
    ],
  },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["What is WellaraMD?", "WellaraMD LLC is a telehealth company focused on hormone, metabolic, and longevity care. We connect patients with independent, licensed healthcare providers and US-licensed pharmacies through our platform partner, MyDose. WellaraMD is not a medical practice or a pharmacy."],
    ["How does it work?", "Complete an online intake, a provider licensed in your state reviews it and (where required) meets with you, your provider decides whether a treatment is medically appropriate, and if a prescription is issued a licensed pharmacy fills and ships it. You can message your care team through the patient portal."],
    ["Is a prescription guaranteed?", "No. A prescription is issued only if a licensed provider determines a treatment is medically appropriate for you after reviewing your health information. If you are not approved, you are not charged for medication."],
    ["Are these medications FDA-approved?", "Some are FDA-approved medications. Others are compounded medications prepared by licensed US pharmacies under FDA-regulated 503A or 503B authority; the specific compounded formulation has not undergone separate FDA approval. FDA-approved alternatives may be available."],
    ["Do you accept insurance?", "No. Services are self-pay with transparent pricing and no membership or hidden fees. You may be able to use an HSA or FSA card, depending on your plan."],
    ["Which states do you serve?", "All 50 states, though availability of specific treatments may vary by state. You must be physically located in a state we serve at the time of your evaluation."],
    ["Which pharmacies fill my prescription?", "US-licensed pharmacies in the MyDose network that are licensed to dispense in your state. Our partner pharmacies are Pharmacy Hub and Striker."],
    ["What is your refund policy?", "If your provider does not approve a prescription, you are not charged for medication. Because prescription medications cannot be returned once dispensed, orders are generally non-refundable after the pharmacy has filled them. If your order arrives damaged or incorrect, contact us within 14 days of delivery."],
    ["Is my information private?", "Yes. Your health information is protected under HIPAA and applicable state law. We never sell your personal or health information."],
  ].map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <header className="bg-ivory border-b border-[var(--line-soft)] sticky top-0 z-40">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="logo text-[1.6rem] leading-none text-ink lowercase tracking-tight">
            wellara<span className="uppercase text-gold">MD</span>
          </a>
          <a href="/" className="eyebrow text-ink-2 hover:text-ink transition-colors">← Back to site</a>
        </div>
      </header>

      <main className="bg-ivory">
        <div className="mx-auto max-w-[820px] px-5 lg:px-8 py-12 lg:py-24">
          <span className="eyebrow text-ink-2">Help</span>
          <h1 className="display text-ink text-[2.6rem] lg:text-[3.6rem] leading-[1.04] mt-3">
            Frequently asked questions
          </h1>
          <p className="muted text-[1.05rem] leading-relaxed mt-5">
            How care works, providers and prescriptions, medications and safety, pharmacies, pricing,
            and privacy. For medical questions, message your care team through your patient portal.
          </p>

          <div className="mt-12 space-y-12">
            {GROUPS.map((g) => (
              <section key={g.title}>
                <h2 className="eyebrow text-ink-2 border-b border-[var(--line-soft)] pb-3">{g.title}</h2>
                <div className="mt-6 space-y-7">
                  {g.items.map((it) => (
                    <div key={it.q}>
                      <h3 className="text-ink text-[1.08rem] font-medium">{it.q}</h3>
                      <div className="muted text-[0.98rem] leading-relaxed mt-2 space-y-2">
                        {typeof it.a === "string" ? <p>{it.a}</p> : it.a}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[var(--line)] bg-ivoryCard/60 p-6">
            <h2 className="text-ink text-[1.05rem] font-medium">Important information</h2>
            <div className="muted text-[0.9rem] leading-relaxed mt-3 space-y-3">
              <p>MyDose.ai is a software platform for licensed healthcare providers. It does not diagnose, prescribe, or dispense medication. All prescriptions are issued by independently licensed US physicians based on individual patient evaluation. All medications are dispensed by licensed US pharmacies.</p>
              <p>Compounded medications are prepared by licensed US compounding pharmacies operating under FDA-regulated 503A or 503B authority. The specific compounded formulation has not undergone separate FDA approval. FDA-approved alternatives may be available; patients should discuss options with their prescribing physician.</p>
              <p>Individual results vary. Outcomes depend on adherence to your treatment plan, lifestyle factors, and individual biological response. No specific outcome is guaranteed. All medications carry potential risks and side effects; review your informed consent and discuss any concerns with your physician.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
