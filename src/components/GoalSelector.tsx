"use client";

/**
 * Hero goal selector — the hims-style engagement hook.
 *
 * These chips do NOT collect health answers (MyDose owns intake, and /start is
 * on the analytics tracked-path allowlist as a marketing-only page). They simply
 * pre-filter the treatment grid and scroll the visitor to it, so cold traffic
 * self-selects a path instead of hitting a single dead-end CTA.
 */

const GOALS: { label: string; category: string }[] = [
  { label: "Lose weight", category: "weight-loss" },
  { label: "Energy & longevity", category: "longevity" },
  { label: "Not sure yet", category: "all" },
];

export default function GoalSelector() {
  function pick(category: string) {
    window.dispatchEvent(
      new CustomEvent("wellara:setTreatmentFilter", { detail: { category } })
    );
    const el = document.getElementById("treatments");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
      <p className="eyebrow text-ink-2 mb-3">What is your goal?</p>
      <div className="flex flex-wrap gap-2.5">
        {GOALS.map((g) => (
          <button
            key={g.category}
            type="button"
            onClick={() => pick(g.category)}
            className="press rounded-full border border-[var(--line)] bg-ivory2 px-5 py-2.5 text-[0.95rem] text-ink hover:border-ink hover:bg-ink hover:text-ivory transition-colors"
          >
            {g.label}
          </button>
        ))}
      </div>
    </div>
  );
}
