const MYDOSE_LOGIN = "https://app.mydose.ai/";

const COLUMNS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Treatments",
    links: [
      { label: "Browse all", href: "#treatments" },
      { label: "Weight & metabolic", href: "#treatments" },
      { label: "Longevity & peptides", href: "#treatments" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Our providers", href: "#physicians" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Log in", href: MYDOSE_LOGIN, external: true },
      { label: "Start your evaluation", href: "#evaluation" },
      { label: "Contact", href: "mailto:support@wellaramd.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8 pt-14 lg:pt-20 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
          {COLUMNS.map((c) => (
            <div key={c.title}>
              <div className="text-[0.72rem] uppercase tracking-[0.14em] text-white/45 mb-5">{c.title}</div>
              <ul className="space-y-3.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-white/80 hover:text-white text-[0.98rem] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="text-white/40 text-[0.76rem] leading-relaxed max-w-4xl space-y-3">
            <p>
              WellaraMD LLC connects patients with independent, licensed
              healthcare providers and US-licensed pharmacies. The information on
              this site is for general educational purposes and is not a
              substitute for professional medical advice, diagnosis, or treatment.
              All treatments are prescription-only, available only where a
              licensed provider determines they are clinically appropriate
              following an evaluation. Availability varies by state. Must be 18 or
              older.
            </p>
            <p>
              MyDose.ai is a software platform for licensed healthcare providers.
              It does not diagnose, prescribe, or dispense medication. All
              prescriptions are issued by independently licensed US physicians
              based on individual patient evaluation. All medications are
              dispensed by licensed US pharmacies.
            </p>
            <p>
              Compounded medications are prepared by licensed US compounding
              pharmacies operating under FDA-regulated 503A or 503B authority. The
              specific compounded formulation has not undergone separate FDA
              approval. FDA-approved alternatives may be available; patients should
              discuss options with their prescribing physician.
            </p>
            <p>
              Individual results vary. Outcomes depend on adherence to your
              treatment plan, lifestyle factors, and individual biological
              response. No specific outcome is guaranteed. All medications carry
              potential risks and side effects; review your informed consent and
              discuss any concerns with your physician. Questions? Contact
              support@wellaramd.com.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-white/55 text-[0.8rem]">
            <a href="/terms" className="hover:text-white">Terms &amp; Conditions</a>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/telehealth-consent" className="hover:text-white">Telehealth Consent</a>
            <a href="/" className="hover:text-white">Home</a>
          </div>
          <p className="mt-6 text-white/55 text-[0.8rem] leading-relaxed">
            WellaraMD LLC · 1081 N Tustin Ave, Ste 115, PMB #4026, Anaheim, CA 92807
            <br />
            Toll-free <a href="tel:+18666675276" className="hover:text-white">(866) 667-5276</a>
            {" · "}
            <a href="mailto:support@wellaramd.com" className="hover:text-white">support@wellaramd.com</a>
          </p>
          <p className="mt-4 text-white/40 text-[0.78rem]">
            © {new Date().getFullYear()} WellaraMD LLC. All rights reserved.
          </p>
        </div>
      </div>

      {/* giant wordmark watermark */}
      <div className="select-none pointer-events-none leading-none -mb-[3vw]">
        <span className="logo block text-center lowercase text-white/[0.06] text-[26vw]">wellara</span>
      </div>
    </footer>
  );
}
