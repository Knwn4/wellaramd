import Reveal from "./Reveal";

const STANDARDS = [
  { label: "LegitScript", sub: "Certified telehealth", icon: <IconShield /> },
  { label: "HIPAA", sub: "Compliant & encrypted", icon: <IconLock /> },
  { label: "503A / 503B", sub: "Licensed pharmacies", icon: <IconFlask /> },
  { label: "Physician", sub: "Supervised, always", icon: <IconSteth /> },
];

const STATUS = [
  { name: "Testosterone therapy", status: "Available", tone: "ok" },
  { name: "Sermorelin / GH support", status: "Available", tone: "ok" },
  { name: "BPC-157", status: "By prescription", tone: "muted" },
  { name: "GLP-1 (Semaglutide)", status: "Available", tone: "ok" },
  { name: "Select research peptides", status: "Under FDA review", tone: "warn" },
];

export default function Compliance() {
  return (
    <section id="where-we-stand" className="marble py-14 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow text-gold">Where We Stand</span>
          <h2 className="display text-ink text-[2.8rem] lg:text-[4.4rem] leading-[1.03] mt-4">
            Every vial. Every batch.
            <br />
            <span className="display-i text-gold">Verified.</span>
          </h2>
          <p className="mt-6 muted text-[1.08rem] leading-relaxed">
            As regulation around compounded therapies evolves, we do the opposite
            of the industry. We put our sourcing, pharmacies, and legal standing in
            plain sight.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1.05fr_0.95fr] gap-6 items-stretch">
          {/* Certificate of Analysis provenance card */}
          <Reveal>
            <div
              className="relative h-full rounded-[var(--r)] overflow-hidden grain p-8 lg:p-10"
              style={{ background: "radial-gradient(130% 110% at 15% 0%, #323232, #141414 82%)" }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-goldSoft">
                    <IconSeal />
                    <span className="eyebrow" style={{ color: "#FFFEF8" }}>Certificate of Analysis</span>
                  </div>
                  <p className="display text-ivory text-[2rem] mt-3 leading-tight">Batch WM-2026-0417</p>
                </div>
                <span className="text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 border border-white/15 rounded-full px-2.5 py-1">
                  Illustrative
                </span>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5">
                {[
                  ["Compound", "BPC-157 5mg"],
                  ["Purity", "99.4%"],
                  ["Pharmacy", "503B outsourcing facility"],
                  ["Sterility", "Passed (USP <71>)"],
                  ["Endotoxin", "Within limits"],
                  ["Released", "Apr 2026"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="text-ivory/50 text-[0.72rem] tracking-wide uppercase">{k}</div>
                    <div className="text-ivory text-[1.02rem] mt-1">{v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-9 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-ivory/55 text-[0.82rem]">Verify with your physician on request</span>
                <span className="text-goldSoft text-[0.85rem]" aria-hidden>View →</span>
              </div>
            </div>
          </Reveal>

          {/* Standards + commitment */}
          <Reveal delay={120}>
            <div className="h-full flex flex-col">
              <div className="grid grid-cols-2 gap-4">
                {STANDARDS.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-ivory2 border border-[var(--line-soft)] p-5">
                    <span className="text-gold">{s.icon}</span>
                    <div className="text-ink font-medium text-[1.05rem] mt-3">{s.label}</div>
                    <div className="muted text-[0.82rem] mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[var(--line)] p-6 flex-1">
                <h3 className="display text-ink text-[1.6rem]">Our standing, in the open</h3>
                <ul className="mt-4 space-y-3">
                  {STATUS.map((r) => (
                    <li key={r.name} className="flex items-center justify-between border-b border-[var(--line-soft)] pb-3 last:border-0 last:pb-0">
                      <span className="text-ink-2 text-[0.95rem]">{r.name}</span>
                      <StatusPill status={r.status} tone={r.tone} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-8 muted text-[0.76rem] text-center max-w-3xl mx-auto leading-relaxed">
          Certification seals, batch data, and status shown are illustrative
          placeholders. Official LegitScript certification, live Certificates of
          Analysis, and current legal status are published once verified. WellaraMD
          does not dispense any therapy where not clinically or legally appropriate.
        </p>
      </div>
    </section>
  );
}

function StatusPill({ status, tone }: { status: string; tone: string }) {
  const map: Record<string, { bg: string; fg: string }> = {
    ok: { bg: "rgba(39,75,120,0.10)", fg: "#323232" },
    muted: { bg: "rgba(21,24,26,0.06)", fg: "#6E695F" },
    warn: { bg: "rgba(169,128,63,0.12)", fg: "#9A6D2A" },
  };
  const c = map[tone] || map.muted;
  return (
    <span className="text-[0.76rem] font-medium rounded-full px-3 py-1" style={{ background: c.bg, color: c.fg }}>
      {status}
    </span>
  );
}

/* --- line icons --- */
function IconShield() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function IconLock() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3" strokeLinecap="round"/></svg>;
}
function IconFlask() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3" strokeLinejoin="round"/></svg>;
}
function IconSteth() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6 3v5a4 4 0 008 0V3" strokeLinecap="round"/><path d="M10 14v2a5 5 0 0010 0v-2" strokeLinecap="round"/><circle cx="20" cy="11" r="2"/></svg>;
}
function IconSeal() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="10" r="6"/><path d="M9 15l-1 6 4-2 4 2-1-6" strokeLinejoin="round"/></svg>;
}
