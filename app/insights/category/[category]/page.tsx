import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticlesByCategory, getCategoryBySlug, insightCategories } from "@/lib/insights";

// Static content; tells the Cloudflare build to cache it at the edge.
export const dynamic = "force-static";

type Params = { category: string };
const siteUrl = "https://www.throughout.io";

function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric", timeZone: "UTC",
  });
}

export function generateStaticParams() {
  return insightCategories.map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category not found", robots: { index: false, follow: false } };
  const url = `${siteUrl}/insights/category/${category.slug}`;
  const title = `${category.title} Insights`;
  return {
    title, description: category.description, alternates: { canonical: url },
    openGraph: { title: `${title} | Throughout`, description: category.description, url, siteName: "Throughout (PVT) LTD", type: "website", images: ["/opengraph-image.png"] },
    twitter: { card: "summary_large_image", title: `${title} | Throughout`, description: category.description, images: ["/twitter-image.png"] },
  };
}

export default async function InsightCategoryPage({ params }: { params: Promise<Params> }) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const posts = getArticlesByCategory(category.name);
  const url = `${siteUrl}/insights/category/${category.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage", "@id": `${url}#collection`, url, name: `${category.title} insights`, description: category.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@type": "ItemList", itemListElement: posts.map((post, index) => ({ "@type": "ListItem", position: index + 1, url: post.canonicalUrl, name: post.title })) },
      },
      {
        "@type": "BreadcrumbList", "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${siteUrl}/insights` },
          { "@type": "ListItem", position: 3, name: category.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="bg-canvas text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
        <nav aria-label="Breadcrumb" className="font-mono text-xs text-ink-2">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-ink">Home</Link></li><li aria-hidden="true">/</li>
            <li><Link href="/insights" className="hover:text-ink">Insights</Link></li><li aria-hidden="true">/</li>
            <li className="text-ink" aria-current="page">{category.title}</li>
          </ol>
        </nav>
        <h1 className="font-display mt-8 text-[clamp(2.5rem,6vw,4.75rem)] font-[750]">{category.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-2">{category.description}</p>
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Insight categories">
          {insightCategories.map((item) => (
            <li key={item.slug}>
              <Link href={`/insights/category/${item.slug}`} aria-current={item.slug === category.slug ? "page" : undefined}
                className={`inline-flex min-h-9 items-center rounded-full border px-4 text-sm font-medium transition-colors ${item.slug === category.slug ? "border-sapphire bg-sapphire text-on-sapphire" : "border-hairline-strong hover:bg-mist"}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32" aria-label={`${category.title} articles`}>
        {posts.length === 0 ? (
          <p className="border-t border-ink py-10 text-ink-2">No articles in this category yet.</p>
        ) : (
          <ol className="border-t border-ink">
            {posts.map((post) => (
              <li key={post.slug} className="border-b border-hairline">
                <Link href={`/insights/${post.slug}`} className="group grid gap-6 py-10 md:grid-cols-12 md:gap-10">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-mist md:col-span-4">
                    <Image src={post.coverImage} alt={post.coverImageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="md:col-span-8">
                    <p className="font-mono text-xs text-ink-2"><time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time> · {post.readingMinutes} min read</p>
                    <h2 className="font-display mt-3 text-[clamp(1.5rem,2.6vw,2.25rem)] font-[720] transition-colors group-hover:text-sapphire">{post.title}</h2>
                    <p className="mt-4 line-clamp-3 max-w-2xl leading-7 text-ink-2">{post.excerpt}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </section>
    </main>
  );
}
