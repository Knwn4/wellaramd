const COLUMNS: { title: string; links: string[] }[] = [
  { title: "Treatments", links: ["Peptide Therapy", "Hormone Optimization", "Metabolic Reset", "Longevity Blueprint", "Testosterone"] },
  { title: "Company", links: ["About WellaraMD", "Our Physicians", "Careers", "Press", "Investors"] },
  { title: "Tools", links: ["Biomarker Panel", "Longevity Score", "Metabolic Calculator", "Hormone Quiz"] },
  { title: "Support", links: ["Member Login", "Help Center", "FAQs", "Billing", "Contact"] },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8 pt-14 lg:pt-20 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {COLUMNS.map((c) => (
            <div key={c.title}>
              <div className="text-[0.72rem] uppercase tracking-[0.14em] text-white/45 mb-5">{c.title}</div>
              <ul className="space-y-3.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/80 hover:text-white text-[0.98rem] transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4">
          {["f", "X", "○", "d"].map((s, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 transition-colors">
              {s}
            </a>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/10">
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
            © {new Date().getFullYear()} WellaraMD Medical Group, Inc. All rights reserved.
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
