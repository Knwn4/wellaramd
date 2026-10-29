import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — WellaraMD",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="October 29, 2026"
      draft={false}
      intro="These Terms & Conditions are a binding agreement between you and WellaraMD LLC governing your access to and use of the WellaraMD website and services. By creating an account, submitting an intake, or otherwise using the services, you agree to these Terms. If you do not agree, do not use the services."
      sections={[
        {
          heading: "Who can use the service",
          body: "You must be at least 18 years old and physically located in a US state where the services are available at the time of your evaluation. Some treatments and features are not available in every state. You agree to provide accurate, complete information and to use the services only for yourself, unless you are a legally authorized representative acting on another person's behalf.",
        },
        {
          heading: "What WellaraMD is",
          body: "WellaraMD LLC is a technology company that connects patients with independent, licensed healthcare providers and US-licensed pharmacies through its platform partner, MyDose. WellaraMD is not a pharmacy and does not practice medicine. It does not diagnose, prescribe, or dispense medication, and does not influence whether a prescription is issued. Using the site does not by itself create a provider-patient relationship; that relationship is formed only if and when a licensed provider accepts you following an evaluation.",
        },
        {
          heading: "Prescription products",
          body: "All medications offered are prescription-only. A prescription is issued only if, and only where, a licensed provider determines it is clinically appropriate for you after an evaluation, and only where permitted by the law of your state. Submitting an intake does not guarantee that a prescription will be issued. Some treatments are FDA-approved medications and others are compounded medications prepared by licensed US pharmacies under FDA-regulated 503A or 503B authority; the specific compounded formulation has not undergone separate FDA approval, and FDA-approved alternatives may be available.",
        },
        {
          heading: "Pricing, plans & billing",
          body: "Prices shown on the site are illustrative until confirmed at evaluation, and your final price is disclosed before you are charged. Your consultation fee is charged at checkout. The cost of treatment is placed as a temporary hold and charged only if your provider approves treatment; if you are not approved, the hold is released and you are not charged for medication. Where you enroll in a monthly or multi-month plan, recurring charges are disclosed before you are billed and renew automatically until you cancel.",
        },
        {
          heading: "Cancellations & refunds",
          body: "You may cancel at any time through your patient portal or by contacting support@wellaramd.com or (866) 667-5276. Cancel at least 48 hours before your next renewal to avoid being charged for the next shipment. Consultation fees are non-refundable once the consultation is completed. Because prescription medications cannot be returned once dispensed, orders are generally non-refundable after the pharmacy has filled them. If an order arrives damaged or incorrect, contact us within 14 days of delivery and we will work with the pharmacy to make it right.",
        },
        {
          heading: "Acceptable use & prohibited conduct",
          body: "You agree not to misuse the platform, misrepresent your identity, age, location, or health information, resell or divert any medication, or use the services for anyone other than yourself without authorization. You agree not to interfere with the security or operation of the services or to use them for any unlawful purpose. We may suspend or terminate access for conduct that violates these Terms or applicable law.",
        },
        {
          heading: "Medical disclaimer & limitation of liability",
          body: "The site is provided for general educational purposes and is not a substitute for professional medical advice, diagnosis, or treatment. Individual results vary and are not guaranteed. To the fullest extent permitted by law, WellaraMD LLC and its platform partners are not liable for the independent clinical decisions of providers or pharmacies, and total liability for any claim relating to the services is limited to the amount you paid for the services giving rise to the claim. Nothing in these Terms limits liability that cannot be limited under applicable law. WellaraMD is not for emergencies; if you have a medical emergency call 911.",
        },
        {
          heading: "Governing law, disputes & changes",
          body: "These Terms are governed by the laws of the State of California, without regard to its conflict-of-laws rules, and you agree to the exclusive jurisdiction of the state and federal courts located in Orange County, California, except where applicable law provides otherwise. We may update these Terms from time to time; material changes will be posted here with a new effective date, and your continued use of the services after changes take effect constitutes acceptance of the updated Terms.",
        },
      ]}
    />
  );
}
