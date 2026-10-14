import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — WellaraMD",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="Draft — pending review"
      intro="Your privacy matters. This template summarizes, in plain language, how the final Privacy Policy will describe the information we collect, how it is used, and the choices you have. Protected health information is handled in accordance with applicable law, including HIPAA where it applies."
      sections={[
        {
          heading: "Information we collect",
          body: "Account and contact details, health and intake information you provide, payment information processed by our payment provider, and standard technical data such as device and usage information.",
        },
        {
          heading: "How we use your information",
          body: "To connect you with licensed providers and pharmacies, to facilitate your evaluation and any prescribed treatment, to process payments, to communicate with you, and to operate and improve the service.",
        },
        {
          heading: "How information is shared",
          body: "With the independent providers and US-licensed pharmacies involved in your care, and with service providers that support our operations under appropriate agreements. We do not sell your personal health information.",
        },
        {
          heading: "Protected health information (HIPAA)",
          body: "Where HIPAA applies, protected health information is handled under a Notice of Privacy Practices, which will be linked here. Providers and pharmacies maintain their own records as required by law.",
        },
        {
          heading: "Data security",
          body: "We use administrative, technical, and physical safeguards designed to protect your information. No method of transmission or storage is completely secure.",
        },
        {
          heading: "Your choices & rights",
          body: "Depending on your state, you may have rights to access, correct, or delete certain information, and to opt out of some communications. The final policy will describe how to exercise these rights.",
        },
        {
          heading: "Cookies & tracking",
          body: "We use cookies and similar technologies for site functionality and analytics. Details and controls will be described in the final policy.",
        },
        {
          heading: "Contact",
          body: "For privacy questions or requests, contact privacy@wellaramd.com. WellaraMD LLC, 1081 N Tustin Ave, Ste 115, PMB #4026, Anaheim, CA 92807. Toll-free (866) 667-5276.",
        },
      ]}
    />
  );
}
