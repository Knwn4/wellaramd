import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — WellaraMD",
  description:
    "How WellaraMD LLC collects, uses, stores, and shares information about visitors and patients.",
};

const UL = "list-disc pl-5 space-y-1.5 marker:text-ink-2/50";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 13, 2026"
      draft={false}
      contactEmail="privacy@wellaramd.com"
      intro={
        <>
          <p className="font-mono text-[0.82rem] text-ink-2">Effective date: October 13, 2026</p>
          <p>
            WellaraMD LLC (&ldquo;WellaraMD,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) operates
            wellaramd.com. This Privacy Policy explains how we collect, use, store, and share
            information about visitors and patients who use our website and the patient portal we make
            available through our platform partner.
          </p>
          <p>
            WellaraMD is not a medical practice or a pharmacy. Medical care is provided by licensed
            clinicians of NVP Medical Group or MDSide, PLLC (depending on your state), licensed medical
            practices; the practice that treats you is your healthcare provider and the HIPAA Covered
            Entity for your care. MyDose Health, LLC provides the patient portal, scheduling, billing,
            and administrative services as the practice&rsquo;s Business Associate, and MyDose.ai, LLC
            provides the underlying software platform. Prescriptions are dispensed by licensed US
            pharmacies.
          </p>
          <p>
            By using our website or services, you agree to this Privacy Policy. If you do not agree,
            please do not use our services.
          </p>
        </>
      }
      sections={[
        {
          heading: "Information we collect",
          body: (
            <>
              <p>We collect information you give us, information collected automatically, and information from our partners.</p>
              <ul className={UL}>
                <li><strong>Identity and contact information:</strong> name, date of birth, email address, phone number, and shipping address.</li>
                <li><strong>Health information:</strong> medical history, symptoms, medications, allergies, intake and questionnaire responses, lab results, photos or documents you upload, and messages with your care team.</li>
                <li><strong>Identity verification:</strong> information or images used to confirm your identity, as required by your provider or state law.</li>
                <li><strong>Order and payment information:</strong> treatments ordered, order history, and billing details. Card payments are processed by Stripe. We do not store full card numbers.</li>
                <li><strong>Device and usage information:</strong> IP address, browser type, device type, pages viewed, and similar data collected through cookies and related technologies.</li>
                <li><strong>Communications:</strong> emails, texts, and support requests you send us.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "How we use information",
          body: (
            <>
              <p>We use your information to provide and support your care, not to sell it.</p>
              <ul className={UL}>
                <li>Connect you with a licensed provider in your state and support your evaluation and treatment.</li>
                <li>Send prescriptions to a licensed pharmacy and arrange delivery.</li>
                <li>Verify your identity and location, including confirming you are in a state where services are available.</li>
                <li>Process payments, refunds, and billing questions.</li>
                <li>Communicate with you about your account, orders, appointments, and care.</li>
                <li>Operate, secure, and improve our website and services.</li>
                <li>Comply with legal, regulatory, and licensing obligations.</li>
              </ul>
              <p>We send marketing messages only with your consent where required. You can opt out at any time using the unsubscribe link or by contacting us. We never use your health information for marketing without your written authorization.</p>
              <p><strong>De-identified data.</strong> Our platform partner uses de-identified data, with all 18 HIPAA identifiers removed, to improve its clinical software and AI tools on its own infrastructure. De-identified data cannot identify you and is not used for marketing.</p>
            </>
          ),
        },
        {
          heading: "How we share information",
          body: (
            <>
              <p>We share information only as needed to provide your care and run our services. <strong>We do not sell your personal or health information.</strong></p>
              <ul className={UL}>
                <li><strong>MyDose Health, LLC and MyDose.ai, LLC:</strong> our platform partners, which provide the patient portal (app.mydose.ai), technology, scheduling, billing, and administrative support, under written agreements including Business Associate Agreements.</li>
                <li><strong>Your healthcare provider:</strong> licensed clinicians of NVP Medical Group or MDSide, PLLC, who review your information, evaluate you, and decide whether a prescription is appropriate.</li>
                <li><strong>Licensed pharmacies:</strong> pharmacies that fill and ship your prescriptions.</li>
                <li><strong>Payment processor:</strong> Stripe processes card payments under its own privacy policy.</li>
                <li><strong>Service providers:</strong> vendors that help us with hosting, email, customer support, and analytics, bound by confidentiality obligations.</li>
                <li><strong>Legal and safety reasons:</strong> when required by law, subpoena, or court order, to protect rights and safety, or to prevent fraud.</li>
                <li><strong>Business transfers:</strong> if WellaraMD is involved in a merger, acquisition, or sale of assets, subject to this Privacy Policy and applicable law.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "HIPAA and your health information",
          body: (
            <>
              <p>The medical practice that treats you (NVP Medical Group or MDSide, PLLC) is your healthcare provider and the Covered Entity under HIPAA. Your pharmacies are also covered entities. They protect your health information and describe your HIPAA rights, including access to and amendment of your medical records, in their Notice of Privacy Practices.</p>
              <p>When WellaraMD or MyDose handles health information on behalf of a provider or pharmacy, we do so as a business associate under a Business Associate Agreement and only as HIPAA permits. Health information you provide that is not covered by HIPAA is protected as described in this Privacy Policy and under applicable state law.</p>
              <p>The Notice of Privacy Practices for care delivered through our platform partner is available at{" "}
                <a href="https://health.mydose.ai/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-2">health.mydose.ai/privacy-policy</a>.</p>
            </>
          ),
        },
        {
          heading: "Cookies, analytics, and advertising",
          body: (
            <>
              <p>Our marketing website uses cookies and similar technologies to keep the site working, understand how visitors use it, and, if you allow it, measure our advertising.</p>
              <ul className={UL}>
                <li><strong>Essential cookies</strong> keep the site and portal secure and functional.</li>
                <li><strong>Analytics cookies</strong> tell us which pages are visited and how the site performs.</li>
                <li><strong>Advertising technologies</strong> (including Meta and Google pixels and tags) are used on our general marketing pages to measure ad performance and show WellaraMD ads to visitors on other sites. You can opt out of targeted advertising at any time through our cookie settings or by enabling Global Privacy Control in your browser.</li>
              </ul>
              <p>We do not place advertising pixels on intake, checkout, or patient portal pages, and we do not share health information with advertising platforms. You can manage cookies in your browser settings, and we honor Global Privacy Control signals where required by law.</p>
            </>
          ),
        },
        {
          heading: "Security, retention, and children",
          body: (
            <>
              <p><strong>Security.</strong> We and our partners use administrative, technical, and physical safeguards, including encryption in transit and at rest and role-based access controls. No system is completely secure, and we cannot guarantee absolute security.</p>
              <p><strong>Retention.</strong> We keep personal information only as long as needed to provide services, meet legal and regulatory obligations, and resolve disputes. Medical and pharmacy records are kept by providers and pharmacies for the periods required by state and federal law.</p>
              <p><strong>Children.</strong> Our services are only for adults 18 and older. We do not knowingly collect information from anyone under 18. If we learn that we have, we will delete it.</p>
            </>
          ),
        },
        {
          heading: "Your privacy rights",
          body: (
            <>
              <p>Depending on where you live, you may have the right to:</p>
              <ul className={UL}>
                <li>Know what personal information we collect and how we use and share it.</li>
                <li>Access or get a copy of your personal information.</li>
                <li>Correct inaccurate information.</li>
                <li>Delete your personal information, subject to legal record-keeping requirements.</li>
                <li>Opt out of targeted advertising, sale, or sharing of personal information.</li>
                <li>Withdraw consent and not be discriminated against for exercising your rights.</li>
              </ul>
              <p><strong>To make a request,</strong> email privacy@wellaramd.com or write to us at the address below. We will verify your identity before responding and reply within the time required by law. You may use an authorized agent where permitted. If we deny your request, you may appeal by replying to our decision.</p>
              <p><strong>California residents.</strong> Under the CCPA/CPRA, you have the rights listed above. We do not sell or share personal information for cross-context behavioral advertising using health information. Information governed by HIPAA or California&rsquo;s medical privacy law (CMIA) is handled under those laws.</p>
              <p><strong>Washington, Nevada, and Connecticut residents.</strong> We collect consumer health data only to provide the services you request, share it only as described in this policy or with your consent, and never sell it. Residents of these states may request access to or deletion of their consumer health data using the contact details below.</p>
              <p><strong>Other states.</strong> Residents of other states with consumer privacy laws may exercise the rights those laws provide using the same process.</p>
            </>
          ),
        },
        {
          heading: "Changes and contact",
          body: (
            <>
              <p>We may update this Privacy Policy from time to time. We will post the updated version on this page with a new effective date and, for material changes, notify you by email or on our website.</p>
              <p>Questions or requests:</p>
              <ul className={UL}>
                <li><strong>WellaraMD LLC</strong></li>
                <li>Mail: 1081 N Tustin Ave, Ste 115, PMB #4026, Anaheim, CA 92807</li>
                <li>Email: privacy@wellaramd.com</li>
                <li>Support: support@wellaramd.com</li>
                <li>Phone: (866) 667-5276 (toll-free)</li>
              </ul>
            </>
          ),
        },
      ]}
    />
  );
}
