/* Real 3D product renders (generated, hims-style). Transparent PNGs in /public/products. */

type ProductName = "vial" | "pen" | "capsules" | "dropper" | "labkit";

export function Product({
  name,
  className = "",
  delay = 0,
  float = true,
  style = {},
}: {
  name: ProductName;
  className?: string;
  delay?: number;
  float?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <img
      src={`/products/${name}.png`}
      alt=""
      aria-hidden
      className={`prod-shadow select-none pointer-events-none ${float ? "floaty" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms`, ...style }}
    />
  );
}

/* Phone app mockup used in the Labs section */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[240px] h-[490px] rounded-[38px] bg-[#0e0e0e] p-2.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]">
      <div className="w-full h-full rounded-[30px] bg-cream overflow-hidden relative">
        {/* notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0e0e0e] rounded-full z-10" />
        <div className="pt-9 px-5">
          <p className="text-[0.7rem] muted">9:41</p>
          <p className="text-[1.4rem] text-ink mt-3 font-medium">Insights</p>
          <p className="text-[0.78rem] muted mt-1">Your results are in. Let&rsquo;s dig in.</p>

          {/* ring */}
          <div className="mt-6 flex justify-center">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="52" fill="none" stroke="#E7E0D2" strokeWidth="10" />
                <circle cx="60" cy="60" r="52" fill="none" stroke="#323232" strokeWidth="10" strokeLinecap="round" strokeDasharray="240 400" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[1.6rem] text-ink font-semibold">78</span>
                <span className="text-[0.6rem] muted">130 markers</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-2.5">
            {[
              ["Testosterone", "Optimal", "#323232"],
              ["Vitamin D", "Improving", "#A9803F"],
              ["A1c", "In range", "#323232"],
            ].map(([k, v, c]) => (
              <div key={k} className="flex items-center justify-between bg-white rounded-xl px-3.5 py-2.5">
                <span className="text-[0.8rem] text-ink">{k}</span>
                <span className="text-[0.72rem] font-medium" style={{ color: c as string }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
