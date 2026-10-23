import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import { BookCallLink } from "@/components/BookCallLink";
import { servicePageBySlug, servicePages } from "@/data/services";
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
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePageBySlug(slug);
  if (!service) return { title: "Service not found", robots: { index: false, follow: false } };
  const url = `${siteUrl}/services/${service.slug}`;
  return {
    title: { absolute: service.seoTitle },
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website", url, siteName: "Throughout (PVT) LTD", title: service.seoTitle, description: service.metaDescription,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: `Throughout, ${service.name}` }],
    },
    twitter: { card: "summary_large_image", title: service.seoTitle, description: service.metaDescription, images: ["/twitter-image.png"] },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = servicePageBySlug(slug);
  if (!service) notFound();

  const url = `${siteUrl}/services/${service.slug}`;
  const insights = service.relatedInsights.map((related) => getArticleBySlug(related)).filter((post) => post !== null);
  const others = servicePages.filter((page) => page.slug !== service.slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service", "@id": `${siteUrl}/#${service.schemaId}`, name: service.name, serviceType: service.serviceType,
        url, description: service.summary,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: ["Australia", "New Zealand", "Europe", "United Kingdom", "Middle East"],
        hasOfferCatalog: {
          "@type": "OfferCatalog", name: service.name,
          itemListElement: service.offers.map((offer) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: offer.title, description: offer.copy } })),
        },
      },
      {
        "@type": "WebPage", "@id": `${url}#webpage`, url, name: service.seoTitle, description: service.metaDescription,
        isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": `${siteUrl}/#${service.schemaId}` },
      },
      {
        "@type": "BreadcrumbList", "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/#services` },
          { "@type": "ListItem", position: 3, name: service.name, item: url },
        ],
      },
      {
        "@type": "FAQPage", "@id": `${url}#faq`,
        mainEntity: service.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      },
    ],
  };

  return (
    <main className="bg-canvas text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />

      <header className={`${container} pb-16 pt-12 lg:pb-24 lg:pt-20`}>
        <nav aria-label="Breadcrumb" className="font-mono text-xs text-ink-2">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-ink">Home</Link></li><li aria-hidden="true">/</li>
            <li><Link href="/#services" className="hover:text-ink">Services</Link></li><li aria-hidden="true">/</li>
            <li className="text-ink" aria-current="page">{service.name}</li>
          </ol>
        </nav>
        <p className="mt-10 font-mono text-xs text-ink-2">{service.eyebrow}</p>
        <h1 className="font-display mt-5 max-w-4xl text-[clamp(2.4rem,5.6vw,4.5rem)] font-[750]">{service.h1}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-2">{service.intro}</p>
        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
          <BookCallLink className={primaryButton}>Book a free call <FiArrowRight aria-hidden="true" /></BookCallLink>
          <Link href="/#work" className="link-draw inline-flex min-h-11 items-center text-sm font-semibold">See our work</Link>
        </div>
        <p className="mt-12 max-w-3xl border-l-2 border-signal pl-6 leading-8 text-ink/85">{service.summary}</p>
      </header>

      <section className="border-t border-hairline py-16 lg:py-24" aria-labelledby="offers">
        <div className={container}>
          <h2 id="offers" className={h2}>What we deliver</h2>
          <ul className="mt-12 grid gap-x-12 border-t border-ink md:grid-cols-2">
            {service.offers.map((offer) => (
              <li key={offer.title} className="border-b border-hairline py-7">
                <h3 className="font-display text-xl font-[720]">{offer.title}</h3>
                <p className="mt-3 leading-7 text-ink-2">{offer.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mist py-16 lg:py-24" aria-labelledby="process">
        <div className={container}>
          <h2 id="process" className={h2}>How an engagement runs</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((item, index) => (
              <li key={item.step} className="border-t border-ink pt-5">
                <p className="font-mono text-xs text-ink-2">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="font-display mt-2 text-xl font-[720]">{item.step}</h3>
                <p className="mt-3 leading-7 text-ink-2">{item.copy}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 font-mono text-xs text-ink-2">Tools and technology</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {service.stack.map((item) => (
              <li key={item} className="rounded-full border border-hairline-strong bg-canvas px-4 py-1.5 text-sm">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="proof">
        <div className={container}>
          <h2 id="proof" className={h2}>Proof, not promises</h2>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {service.proof.map((item) => (
              <li key={item.title} className="border-t border-ink pt-5">
                <p className="font-mono text-xs text-ink-2">{item.label}</p>
                <h3 className="font-display mt-2 text-xl font-[720]">
                  {item.href.startsWith("http") ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-sapphire">{item.title}</a>
                  ) : (
                    <Link href={item.href} className="hover:text-sapphire">{item.title}</Link>
                  )}
                </h3>
                <p className="mt-3 leading-7 text-ink-2">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-hairline py-16 lg:py-24" aria-labelledby="faq">
        <div className={`${container} grid gap-10 lg:grid-cols-12`}>
          <h2 id="faq" className={`${h2} lg:sticky lg:top-28 lg:col-span-4 lg:self-start`}>Questions, answered.</h2>
          <div className="divide-y divide-hairline border-y border-hairline lg:col-span-8">
            {service.faqs.map((faq) => (
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

      {insights.length > 0 && (
        <section className="bg-mist py-16 lg:py-24" aria-labelledby="insights">
          <div className={container}>
            <h2 id="insights" className={h2}>Read more</h2>
            <ul className="mt-10 grid gap-8 md:grid-cols-3">
              {insights.map((post) => (
                <li key={post.slug} className="border-t border-ink pt-5">
                  <p className="font-mono text-xs text-ink-2">{post.category} · {post.readingMinutes} min read</p>
                  <h3 className="font-display mt-2 text-xl font-[720]"><Link href={`/insights/${post.slug}`} className="hover:text-sapphire">{post.title}</Link></h3>
                  <p className="mt-3 line-clamp-3 leading-7 text-ink-2">{post.excerpt}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-16 lg:py-24" aria-labelledby="next">
        <div className={container}>
          <h2 id="next" className={h2}>Ready to talk about {service.name.toLowerCase()}?</h2>
          <p className="mt-5 max-w-xl leading-7 text-ink-2">A free 30-minute call, scheduled in your time zone. Bring the goal and the constraints; we will tell you what we would do.</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <BookCallLink className={primaryButton}>Book a free call <FiArrowRight aria-hidden="true" /></BookCallLink>
            <Link href="/#contact-form" className="link-draw inline-flex min-h-11 items-center text-sm font-semibold">Send a message</Link>
          </div>
          <p className="mt-14 font-mono text-xs text-ink-2">Also from Throughout</p>
          <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
            {others.map((other) => (
              <li key={other.slug}><Link href={`/services/${other.slug}`} className="link-draw inline-flex min-h-11 items-center text-sm font-semibold text-sapphire">{other.name}</Link></li>
            ))}
            <li><Link href="/#engagement-models" className="link-draw inline-flex min-h-11 items-center text-sm font-semibold text-sapphire">Dedicated development teams</Link></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
