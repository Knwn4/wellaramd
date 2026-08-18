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
      updated="Draft — pending review"
      intro="These Terms govern your use of the WellaraMD website and services. By using the site you agree to them. This template summarizes, in plain language, the areas the final Terms will cover."
      sections={[
        {
          heading: "Who can use the service",
          body: "You must be at least 18 years old and located in a state where the service is available. Some treatments and features may not be available in every state.",
        },
        {
          heading: "What WellaraMD is",
          body: "WellaraMD is a technology platform that connects patients with independent, licensed healthcare providers and US-licensed pharmacies. It is not itself a pharmacy or a medical practice, and using the site does not create a provider-patient relationship until you complete an evaluation.",
        },
        {
          heading: "Prescription products",
          body: "All medications offered are prescription-only. A prescription is issued only if, and where, a licensed provider determines it is clinically appropriate after an evaluation. Submitting an intake does not guarantee that a prescription will be issued.",
        },
        {
          heading: "Pricing, memberships & billing",
          body: "Prices shown are illustrative until confirmed at evaluation. Recurring charges, if any, are disclosed before you are billed. You can cancel or pause in line with the plan terms.",
        },
        {
          heading: "Cancellations & refunds",
          body: "The final refund and cancellation policy will be stated here, including any conditions specific to prescription and compounded products.",
        },
        {
          heading: "Acceptable use & prohibited conduct",
          body: "You agree not to misuse the platform, misrepresent your identity or health information, or use the service for anyone other than yourself without authorization.",
        },
        {
          heading: "Disclaimers & limitation of liability",
          body: "The site is provided for general educational purposes and is not a substitute for professional medical advice. Individual results vary and are not guaranteed. Liability limitations will be detailed in the final Terms.",
        },
        {
          heading: "Governing law & changes",
          body: "The governing law, dispute-resolution process, and how updates to these Terms are communicated will be specified in the final version.",
        },
      ]}
    />
  );
}
