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
      updated="October 29, 2026"
      draft={false}
      intro="This Informed Consent explains how care is delivered by telehealth through WellaraMD and its platform partner, MyDose, and the benefits, limitations, and risks of receiving care remotely. Please read it carefully. You will be asked to acknowledge and accept this consent before a provider evaluates you, and your acceptance is recorded as part of your medical record."
      sections={[
        {
          heading: "What telehealth is",
          body: "Telehealth uses electronic communication to deliver care remotely. Your evaluation and follow-up may take place through secure messaging, questionnaires, phone, or video rather than an in-person visit. A healthcare provider licensed in your state reviews the information you submit and makes all clinical decisions independently. Where your state or a given medication requires a live video or phone consultation, one will be conducted before any treatment decision.",
        },
        {
          heading: "Benefits",
          body: "Telehealth can give you convenient access to licensed providers, ongoing monitoring and messaging with your care team, and discreet delivery of any prescribed treatment, without the travel and scheduling of an in-person visit.",
        },
        {
          heading: "Limitations & risks",
          body: "A remote evaluation may not be appropriate for every condition, and your provider may determine that an in-person visit, laboratory testing, or a referral is needed. Risks of telehealth include, in rare cases, information being insufficient for a sound clinical decision, delays caused by technology failures, and, despite reasonable safeguards, the possibility of a breach of electronic information. Providing incomplete or inaccurate information can affect the quality and safety of your care.",
        },
        {
          heading: "No guaranteed outcome",
          body: "Completing an intake or consultation does not guarantee that treatment will be prescribed. A prescription is issued only where a provider determines it is medically appropriate for you. Individual results vary and are not guaranteed, and all medications carry potential risks and side effects, which your provider and the dispensing pharmacy will share with you.",
        },
        {
          heading: "Prescriptions & compounded medications",
          body: "Any prescription is issued at the independent clinical judgment of a licensed provider, only where clinically appropriate and permitted by law in your state. Some treatments are FDA-approved and others are compounded by licensed US pharmacies under FDA-regulated 503A or 503B authority; the specific compounded formulation has not undergone separate FDA approval, and FDA-approved alternatives may be available. Your provider will tell you whether your treatment is FDA-approved or compounded.",
        },
        {
          heading: "Privacy of your information",
          body: "Your health information is protected under HIPAA and applicable state law and is used to provide and coordinate your care. It is handled as described in our Privacy Policy. We do not sell your personal or health information, and we do not share health information with advertising platforms.",
        },
        {
          heading: "Emergencies",
          body: "Telehealth is not for emergencies. If you have a medical emergency, call 911 or go to the nearest emergency room. If you are in crisis, call or text 988.",
        },
        {
          heading: "Your consent & right to withdraw",
          body: "Your participation in telehealth is voluntary. You have the right to withhold or withdraw your consent to telehealth at any time, without affecting your right to seek care in the future or by other means, by contacting support@wellaramd.com. By accepting this consent you confirm that you have read and understood it, that you have had the opportunity to ask questions, and that you consent to receive care by telehealth under the terms described here.",
        },
      ]}
    />
  );
}
