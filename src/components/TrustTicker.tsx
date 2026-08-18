const CLAIMS = [
  "100% online process",
  "Board-certified physicians",
  "US-based licensed pharmacies",
  "Transparent pricing, no hidden fees",
  "Physician-reviewed protocols",
  "Discreet delivery",
  "Built for women",
];

export default function TrustTicker() {
  const row = [...CLAIMS, ...CLAIMS];
  return (
    <div className="bg-ivory border-y border-[var(--line-soft)] py-3 overflow-hidden">
      <div className="marquee-track">
        {row.map((c, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="eyebrow text-ink-2 whitespace-nowrap px-7">{c}</span>
            <span className="w-1 h-1 rounded-full bg-ink/25" />
          </div>
        ))}
      </div>
    </div>
  );
}
