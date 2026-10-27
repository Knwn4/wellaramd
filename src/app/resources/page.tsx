import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Educational guides on women's weight, metabolic, and longevity health from WellaraMD. Clear, sourced, and reviewed for accuracy. Not medical advice.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  // Newest first.
  const articles = [...ARTICLES].sort((a, b) => b.updated.localeCompare(a.updated));

  return (
    <main className="bg-ivory text-ink min-h-screen">
      <header className="mx-auto max-w-[1100px] px-5 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="logo text-[1.5rem] tracking-tight">
          wellara<span className="align-super text-[0.62em] ml-[1px]">MD</span>
        </Link>
        <Link href="/faq" className="eyebrow text-ink-2 hover:text-ink">FAQ</Link>
      </header>

      <section className="mx-auto max-w-[1100px] px-5 lg:px-8 pt-8 lg:pt-14 pb-10">
        <p className="eyebrow text-ink-2 mb-4">Resources</p>
        <h1 className="display text-[2.4rem] lg:text-[3.2rem] leading-[1.03] max-w-[18ch]">
          Clear answers on weight, metabolic, and longevity health.
        </h1>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-2 max-w-[42rem]">
          Educational guides written plainly and backed by reputable sources.
          This is information, not medical advice. A licensed provider decides
          what is appropriate for you.
        </p>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 lg:px-8 pb-20 lg:pb-28">
        <ul className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {articles.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/resources/${a.slug}`}
                className="press group flex flex-col h-full rounded-[var(--r)] bg-ivory2 border border-[var(--line-soft)] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-32px_rgba(20,20,20,0.4)]"
              >
                <span className="eyebrow text-muted">{a.pillar} · {a.readMins} min read</span>
                <h2 className="display text-[1.45rem] leading-snug mt-3">{a.title}</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">{a.dek}</p>
                <span className="mt-5 text-[0.85rem] font-medium text-ink group-hover:underline">
                  Read guide →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}
