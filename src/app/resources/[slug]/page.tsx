import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { ARTICLES, getArticle } from "@/lib/articles";

const BASE = "https://wellaramd.com";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not found" };
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/resources/${article.slug}` },
    openGraph: {
      type: "article",
      url: `${BASE}/resources/${article.slug}`,
      title: article.title,
      description: article.description,
      publishedTime: article.updated,
    },
  };
}

function articleJsonLd(a: NonNullable<ReturnType<typeof getArticle>>) {
  const text = a.blocks
    .map((b) => (b.type === "ul" ? b.items.join(" ") : b.text))
    .join(" ");
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: a.title,
    description: a.description,
    datePublished: a.updated,
    dateModified: a.updated,
    inLanguage: "en-US",
    wordCount: text.split(/\s+/).length,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/resources/${a.slug}` },
    author: { "@type": "Organization", name: "WellaraMD", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "WellaraMD LLC",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/icon.png` },
    },
    citation: a.sources.map((s) => s.url),
  };
}

function breadcrumbJsonLd(a: NonNullable<ReturnType<typeof getArticle>>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Resources", item: `${BASE}/resources` },
      { "@type": "ListItem", position: 2, name: a.title, item: `${BASE}/resources/${a.slug}` },
    ],
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  // Parse at midday so the date never shifts a day backward in negative-offset zones.
  const updated = new Date(`${article.updated}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="bg-ivory text-ink min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(article)) }} />

      <header className="mx-auto max-w-[760px] px-5 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="logo text-[1.5rem] tracking-tight">
          wellara<span className="align-super text-[0.62em] ml-[1px]">MD</span>
        </Link>
        <Link href="/resources" className="eyebrow text-ink-2 hover:text-ink">All resources</Link>
      </header>

      <article className="mx-auto max-w-[720px] px-5 lg:px-8 pt-6 lg:pt-10 pb-16">
        <p className="eyebrow text-ink-2 mb-4">{article.pillar} · {article.readMins} min read</p>
        <h1 className="display text-[2.2rem] lg:text-[2.9rem] leading-[1.05]">{article.title}</h1>
        <p className="mt-5 text-[1.1rem] leading-relaxed text-ink-2">{article.dek}</p>
        <p className="mt-5 text-[0.8rem] text-muted">
          By the WellaraMD team · Updated {updated}
        </p>

        <div className="mt-10 space-y-5">
          {article.blocks.map((b, i) => {
            if (b.type === "h2") {
              return (
                <h2 key={i} className="display text-[1.5rem] leading-snug pt-4">{b.text}</h2>
              );
            }
            if (b.type === "ul") {
              return (
                <ul key={i} className="space-y-2.5 pl-1">
                  {b.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-[1.02rem] leading-relaxed text-ink-2">
                      <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-ink shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-[1.05rem] leading-[1.75] text-ink-2">{b.text}</p>
            );
          })}
        </div>

        {/* Compliance disclaimer */}
        <div className="mt-12 rounded-2xl bg-sand border border-[var(--line-soft)] p-6 text-[0.86rem] leading-relaxed text-ink-2">
          This article is for general education and is not medical advice. A licensed
          provider decides whether any treatment is appropriate for you, and not everyone
          is approved. Some treatments may be compounded; compounded medications are not
          FDA-approved.
        </div>

        {/* Sources */}
        {article.sources.length > 0 && (
          <div className="mt-10">
            <p className="eyebrow text-ink-2 mb-3">Sources</p>
            <ul className="space-y-1.5">
              {article.sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[0.9rem] text-ink-2 underline underline-offset-2 hover:text-ink break-words"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Soft CTA to the neutral landing page */}
        <div className="mt-12 rounded-[var(--r)] bg-ink text-ivory p-8 text-center">
          <h2 className="display text-[1.6rem] lg:text-[2rem]">Talk to a licensed provider</h2>
          <p className="mt-3 text-ivory/70 max-w-[34rem] mx-auto leading-relaxed text-[0.98rem]">
            Weight, metabolic, and longevity care for women, reviewed online by licensed,
            US-based providers.
          </p>
          <Link href="/start" className="btn !bg-ivory !text-ink hover:!bg-blush mt-7">
            Check eligibility
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
