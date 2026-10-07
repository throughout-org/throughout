import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/insights";

const siteUrl = "https://www.throughout.io";

function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric", timeZone: "UTC",
  });
}

export const metadata: Metadata = {
  title: "Insights on Engineering, Product and Digital Delivery",
  description: "Practical engineering, product-building and implementation lessons from the Throughout team.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Throughout Insights", description: "Practical engineering, product-building and implementation lessons from the Throughout team.",
    url: `${siteUrl}/insights`, siteName: "Throughout (PVT) LTD", type: "website", images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image", title: "Throughout Insights",
    description: "Practical engineering, product-building and implementation lessons from the Throughout team.", images: ["/twitter-image"],
  },
};

export default function InsightsPage() {
  const posts = getAllArticles().filter((post) => !post.noIndex);
  return (
    <main className="bg-canvas text-ink">
      <header className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
        <p className="font-mono text-xs text-ink-2">Insights · {posts.length} articles</p>
        <h1 className="font-display mt-5 text-[clamp(2.5rem,6vw,4.75rem)] font-[750]">Notes from the studio.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-ink-2">Engineering, product-building and implementation lessons from work we have done ourselves.</p>
      </header>
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32" aria-label="Insight articles">
        <ol className="border-t border-ink">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-hairline">
              <Link href={`/insights/${post.slug}`} className="group grid gap-6 py-10 md:grid-cols-12 md:gap-10">
                <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-mist md:col-span-4">
                  <Image src={post.coverImage} alt={post.coverImageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="md:col-span-8">
                  <p className="font-mono text-xs text-ink-2">
                    <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time> · {post.category} · {post.readingMinutes} min read
                  </p>
                  <h2 className="font-display mt-3 text-[clamp(1.5rem,2.6vw,2.25rem)] font-[720] transition-colors group-hover:text-sapphire">{post.title}</h2>
                  <p className="mt-4 line-clamp-3 max-w-2xl leading-7 text-ink-2">{post.excerpt}</p>
                  <p className="mt-5 text-sm text-ink-2"><span className="font-semibold text-ink">{post.author.name}</span> · {post.author.role}</p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
