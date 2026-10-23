import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import { BookCallLink } from "@/components/BookCallLink";
import { caseStudies, caseStudyBySlug } from "@/data/caseStudies";
import { getArticleBySlug } from "@/lib/insights";

// Static content; tells the Cloudflare build to cache it at the edge.
export const dynamic = "force-static";

type Params = { slug: string };
const siteUrl = "https://www.throughout.io";
const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
const h2 = "font-display max-w-3xl text-[clamp(1.75rem,3.4vw,2.75rem)] font-[720]";
const primaryButton =
  "inline-flex min-h-12 items-center gap-2 rounded-md bg-sapphire px-6 text-sm font-semibold text-on-sapphire transition-colors hover:bg-sapphire/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) return { title: "Case study not found", robots: { index: false, follow: false } };
  const url = `${siteUrl}/case-studies/${study.slug}`;
  return {
    title: { absolute: study.seoTitle }, description: study.metaDescription, alternates: { canonical: url },
    openGraph: {
      type: "article", url, siteName: "Throughout (PVT) LTD", title: study.seoTitle, description: study.metaDescription,
      publishedTime: study.datePublished, modifiedTime: study.dateModified,
      images: [{ url: study.image, alt: study.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: study.seoTitle, description: study.metaDescription, images: [{ url: study.image, alt: study.imageAlt }] },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) notFound();
  const url = `${siteUrl}/case-studies/${study.slug}`;
  const insights = study.relatedInsights.map((related) => getArticleBySlug(related)).filter((post) => post !== null);
  const other = caseStudies.find((item) => item.slug !== study.slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article", "@id": `${url}#article`, headline: study.h1, description: study.summary, url, mainEntityOfPage: url,
        datePublished: study.datePublished, dateModified: study.dateModified, image: `${siteUrl}${study.image}`,
        articleSection: "Case study", about: study.services,
        author: { "@id": `${siteUrl}/#organization` }, publisher: { "@id": `${siteUrl}/#organization` },
        mentions: { "@type": "Organization", name: study.client, url: study.clientUrl },
      },
      {
        "@type": "BreadcrumbList", "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/#work` },
          { "@type": "ListItem", position: 3, name: study.client, item: url },
        ],
      },
      {
        "@type": "FAQPage", "@id": `${url}#faq`,
        mainEntity: study.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      },
    ],
  };

  return (
    <main className="bg-canvas text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className={`${container} pb-14 pt-12 lg:pb-20 lg:pt-20`}>
        <nav aria-label="Breadcrumb" className="font-mono text-xs text-ink-2">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-ink">Home</Link></li><li aria-hidden="true">/</li>
            <li><Link href="/#work" className="hover:text-ink">Work</Link></li><li aria-hidden="true">/</li>
            <li className="text-ink" aria-current="page">{study.client}</li>
          </ol>
        </nav>
        <p className="mt-10 font-mono text-xs text-ink-2">Case study · {study.period}</p>
        <h1 className="font-display mt-5 max-w-5xl text-[clamp(2.1rem,4.8vw,3.9rem)] font-[750]">{study.h1}</h1>
        <p className="mt-8 max-w-3xl border-l-2 border-signal pl-6 text-lg leading-8 text-ink/85">{study.summary}</p>
        <p className="mt-6 font-mono text-xs text-ink-2">{study.services.join(" · ")}</p>
      </header>

      <div className={container}>
        <div className="relative aspect-[16/9] overflow-hidden rounded-[10px] bg-mist">
          <Image src={study.image} alt={study.imageAlt} fill priority sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover object-top" />
        </div>
      </div>

      <section className="py-16 lg:py-24" aria-labelledby="metrics">
        <div className={container}>
          <h2 id="metrics" className={h2}>The numbers</h2>
          <dl className="mt-10 grid border-t border-ink md:grid-cols-2 md:gap-x-12">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="flex items-baseline justify-between gap-4 border-b border-hairline py-5">
                <dt className="text-ink-2">{metric.label}</dt>
                <dd className="font-display shrink-0 text-2xl font-[720] tabular-nums">
                  <span className="text-ink-3">{metric.before}</span><span className="mx-2 text-signal" aria-label="to">→</span><span className="text-sapphire">{metric.after}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-ink-2">{study.limits}</p>
        </div>
      </section>

      <section className="bg-mist py-16 lg:py-24" aria-labelledby="challenge">
        <div className={`${container} grid gap-10 lg:grid-cols-12`}>
          <h2 id="challenge" className={`${h2} lg:col-span-4`}>The starting point</h2>
          <div className="space-y-5 lg:col-span-8">
            {study.challenge.map((paragraph) => <p key={paragraph} className="text-lg leading-8 text-ink/85">{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="work">
        <div className={container}>
          <h2 id="work" className={h2}>What we did</h2>
          <ol className="mt-10 grid gap-x-12 border-t border-ink md:grid-cols-2">
            {study.work.map((item, index) => (
              <li key={item.title} className="border-b border-hairline py-7">
                <p className="font-mono text-xs text-ink-2">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="font-display mt-2 text-xl font-[720]">{item.title}</h3>
                <p className="mt-3 leading-7 text-ink-2">{item.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mist py-16 lg:py-24" aria-labelledby="results">
        <div className={`${container} grid gap-10 lg:grid-cols-12`}>
          <h2 id="results" className={`${h2} lg:col-span-4`}>What changed</h2>
          <ul className="ml-5 list-disc space-y-3 text-lg leading-8 marker:text-signal lg:col-span-8">
            {study.results.map((result) => <li key={result}>{result}</li>)}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="faq">
        <div className={`${container} grid gap-10 lg:grid-cols-12`}>
          <h2 id="faq" className={`${h2} lg:col-span-4`}>Questions, answered.</h2>
          <div className="divide-y divide-hairline border-y border-hairline lg:col-span-8">
            {study.faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span className="mt-0.5 text-2xl font-normal leading-none text-signal transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-2xl pb-6 leading-7 text-ink-2">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline py-16 lg:py-24" aria-labelledby="next">
        <div className={container}>
          <h2 id="next" className={h2}>Want this for your site?</h2>
          <p className="mt-5 max-w-xl leading-7 text-ink-2">We audit, fix and publish. See our <Link href="/services/marketing" className="font-medium text-sapphire underline underline-offset-4">SEO and GEO service</Link> or talk to us about your site.</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <BookCallLink className={primaryButton}>Book a free call <FiArrowRight aria-hidden="true" /></BookCallLink>
            <a href={study.clientUrl} target="_blank" rel="noopener noreferrer" className="link-draw inline-flex min-h-11 items-center text-sm font-semibold">Visit {study.client}</a>
          </div>
          {insights.length > 0 && (
            <>
              <p className="mt-14 font-mono text-xs text-ink-2">Related reading</p>
              <ul className="mt-3 space-y-1">
                {insights.map((post) => <li key={post.slug}><Link href={`/insights/${post.slug}`} className="link-draw inline-flex min-h-9 items-center text-sm font-semibold text-sapphire">{post.title}</Link></li>)}
              </ul>
            </>
          )}
          {other && <p className="mt-8 text-sm"><Link href={`/case-studies/${other.slug}`} className="link-draw font-semibold text-sapphire">Next case study: {other.client}</Link></p>}
        </div>
      </section>
    </main>
  );
}
