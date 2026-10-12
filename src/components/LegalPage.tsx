import Footer from "./Footer";

type Section = { heading: string; body: string };

/**
 * Shared shell for legal/policy pages. Content is a plain-language *template*
 * clearly marked as pending legal review — not final binding policy text.
 */
export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <>
      <header className="bg-ivory border-b border-[var(--line-soft)] sticky top-0 z-40">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="logo text-[1.6rem] leading-none text-ink lowercase tracking-tight">
            wellara<span className="uppercase text-gold">MD</span>
          </a>
          <a href="/" className="eyebrow text-ink-2 hover:text-ink transition-colors">
            ← Back to site
          </a>
        </div>
      </header>

      <main className="bg-ivory">
        <div className="mx-auto max-w-[820px] px-5 lg:px-8 py-12 lg:py-24">
          <span className="eyebrow text-ink-2">Legal</span>
          <h1 className="display text-ink text-[2.6rem] lg:text-[3.4rem] leading-[1.04] mt-3">
            {title}
          </h1>
          <p className="muted text-[0.82rem] mt-3 font-mono">Last updated: {updated}</p>

          <div className="mt-7 rounded-2xl border border-[var(--line)] bg-ivoryCard/60 p-5">
            <p className="text-ink-2 text-[0.92rem] leading-relaxed">
              This is a working template, provided for preview while the final
              policy is being prepared with legal counsel. It is not yet a binding
              agreement. The finalized version will be posted here before the
              service is offered to patients.
            </p>
          </div>

          <p className="text-ink-2 text-[1.05rem] leading-relaxed mt-8">{intro}</p>

          <div className="mt-9 space-y-8">
            {sections.map((s, i) => (
              <section key={i}>
                <h2 className="text-ink text-[1.15rem] font-medium">
                  {i + 1}. {s.heading}
                </h2>
                <p className="muted text-[0.98rem] leading-relaxed mt-2">{s.body}</p>
              </section>
            ))}
          </div>

          <p className="muted text-[0.88rem] mt-12 border-t border-[var(--line-soft)] pt-6">
            Questions about this policy? Contact{" "}
            <a href="mailto:support@wellaramd.com" className="text-ink underline underline-offset-2">
              support@wellaramd.com
            </a>
            . WellaraMD Medical Group, Inc.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
