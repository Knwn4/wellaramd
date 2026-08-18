import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Telehealth Informed Consent — WellaraMD",
  robots: { index: false },
};

export default function TelehealthConsentPage() {
  return (
    <LegalPage
      title="Telehealth Informed Consent"
      updated="Draft — pending review"
      intro="Telehealth uses electronic communication to deliver care remotely. This template summarizes, in plain language, what the final Informed Consent will cover so you understand how a remote evaluation works, its benefits, and its limitations before you begin."
      sections={[
        {
          heading: "What telehealth is",
          body: "Your evaluation and follow-up may take place through secure messaging, questionnaires, phone, or video rather than an in-person visit. A licensed provider reviews the information you submit.",
        },
        {
          heading: "Benefits",
          body: "Convenient access to licensed providers, ongoing monitoring, and discreet delivery of any prescribed treatment.",
        },
        {
          heading: "Limitations & risks",
          body: "A remote evaluation may not be appropriate for every condition, and a provider may determine that in-person care or additional testing is needed. Technology issues or incomplete information can affect care.",
        },
        {
          heading: "No guaranteed outcome",
          body: "Submitting an intake does not guarantee that treatment will be prescribed. Individual results vary and are not guaranteed.",
        },
        {
          heading: "Prescriptions",
          body: "Any prescription is issued at the independent clinical judgment of a licensed provider, only where clinically appropriate and permitted by law in your state.",
        },
        {
          heading: "Emergencies",
          body: "Telehealth is not for emergencies. If you have a medical emergency, call 911 or go to the nearest emergency room.",
        },
        {
          heading: "Your consent & right to withdraw",
          body: "Participation is voluntary, and you may withdraw your consent to telehealth at any time without affecting your right to seek care elsewhere. The final consent will include an acknowledgment you accept before an evaluation.",
        },
      ]}
    />
  );
}
