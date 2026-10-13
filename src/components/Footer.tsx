const MYDOSE_LOGIN = "https://app.mydose.ai/";

const COLUMNS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Treatments",
    links: [
      { label: "Browse all", href: "#treatments" },
      { label: "Weight & metabolic", href: "#treatments" },
      { label: "Hormone & longevity", href: "#treatments" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Our providers", href: "#physicians" },
      { label: "FAQs", href: "#faq" },
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
          <p className="text-white/40 text-[0.76rem] leading-relaxed max-w-4xl">
            WellaraMD connects patients with independent, licensed healthcare
            providers and US-licensed pharmacies. The information on this site is
            for general educational purposes and is not a substitute for
            professional medical advice, diagnosis, or treatment. All treatments
            are prescription-only and are dispensed solely where a licensed
            provider determines they are clinically appropriate following an
            evaluation. Products are not available in all states, and availability
            is subject to applicable law. Must be 18 or older. Individual results
            vary and are not guaranteed. Compounded medications are not approved or
            evaluated by the FDA for safety, effectiveness, or quality. Questions?
            Contact support@wellaramd.com.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-white/55 text-[0.8rem]">
            <a href="/terms" className="hover:text-white">Terms &amp; Conditions</a>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/telehealth-consent" className="hover:text-white">Telehealth Consent</a>
            <a href="/" className="hover:text-white">Home</a>
          </div>
          <p className="mt-6 text-white/40 text-[0.78rem]">
            © {new Date().getFullYear()} WellaraMD. All rights reserved.
          </p>
          {/* TODO (LegitScript): replace with exact registered legal entity name,
              and add physical business address + phone once provided by client. */}
        </div>
      </div>

      {/* giant wordmark watermark */}
      <div className="select-none pointer-events-none leading-none -mb-[3vw]">
        <span className="logo block text-center lowercase text-white/[0.06] text-[26vw]">wellara</span>
      </div>
    </footer>
  );
}
