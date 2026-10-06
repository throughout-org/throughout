import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/src/sanity/client";

const siteUrl = "https://www.throughout.io";
const pagePath = "/insights";
const imageLicenseUrl = `${siteUrl}/privacy-policy#terms-of-service`;
const acquireLicensePageUrl = `${siteUrl}/#contact`;

type Author = {
  name: string;
  role?: string;
  avatarUrl?: string;
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string[];
  date: string;
  image?: { asset?: { url: string } } | string;
  excerpt: string;
  author?: Author | null;
};

async function fetchPosts(): Promise<Post[]> {
  const posts = await client.fetch(
    `*[_type == "post"] | order(date desc) {
      _id,
      title,
      slug,
      category,
      date,
      image {
        asset->{url}
      },
      excerpt,
      author->{
        name,
        role,
        "avatarUrl": image.asset->url
      }
    }`,
  );

  return Array.isArray(posts) ? posts : [];
}

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export const metadata: Metadata = {
  title: "Blog: Software Development, Design, AI & SEO",
  description:
    "Practical notes from an offshore software development studio: building websites, MVPs and SaaS, UI/UX design, AI automation and SEO.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Blog: Software Development, Design, AI & SEO | Throughout",
    description:
      "Practical notes from an offshore software development studio: building websites, MVPs and SaaS, UI/UX design, AI automation and SEO.",
    url: `${siteUrl}${pagePath}`,
    siteName: "Throughout (PVT) LTD",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog: Software Development, Design, AI & SEO | Throughout",
    description:
      "Practical notes from an offshore software development studio: building websites, MVPs and SaaS, UI/UX design, AI automation and SEO.",
    images: ["/twitter-image"],
  },
};

export default async function InsightsPage() {
  const posts = await fetchPosts();

  const imageObjects = posts
    .filter(
      (post) => typeof post.image !== "string" && Boolean(post.image?.asset?.url),
    )
    .map((post) => ({
      "@context": "https://schema.org",
      "@type": "ImageObject",
      contentUrl: typeof post.image === "string" ? post.image : post.image?.asset?.url,
      name: post.title,
      description: post.excerpt || post.title,
      license: imageLicenseUrl,
      acquireLicensePage: acquireLicensePageUrl,
      creditText: "Throughout (PVT) LTD Insights",
      creator: {
        "@type": "Organization",
        name: "Throughout (PVT) LTD",
      },
      copyrightNotice: "© Throughout (PVT) LTD",
    }));

  return (
    <>
      {imageObjects.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": imageObjects,
            }),
          }}
        />
      )}
      <main className="bg-canvas text-ink">
        <header className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
          <p className="font-mono text-xs text-ink-2">Blog · {posts.length} posts</p>
          <h1 className="font-display mt-5 text-[clamp(2.5rem,6vw,4.75rem)] font-[750]">
            Notes from the studio.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink-2">
            What we learn building products for clients and for ourselves: engineering, design, AI and growth.
          </p>
        </header>

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
          {posts.length === 0 ? (
            <p className="border-t border-hairline py-16 text-ink-2">No posts yet. Check back soon.</p>
          ) : (
            <ol className="border-t border-ink">
              {posts.map((post) => {
                const cover = typeof post.image === "string" ? post.image : post.image?.asset?.url;
                return (
                  <li key={post._id} className="border-b border-hairline">
                    <Link href={`/insights/${post.slug.current}`} className="group grid gap-6 py-10 md:grid-cols-12 md:gap-10">
                      {cover && (
                        <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-mist md:col-span-4">
                          <Image src={cover} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                        </div>
                      )}
                      <div className={cover ? "md:col-span-8" : "md:col-span-12"}>
                        <p className="font-mono text-xs text-ink-2">
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
                          {post.category?.[0] && <> · {post.category[0]}</>}
                        </p>
                        <h2 className="font-display mt-3 text-[clamp(1.5rem,2.6vw,2.25rem)] font-[720] transition-colors group-hover:text-sapphire">
                          {post.title}
                        </h2>
                        {post.excerpt && <p className="mt-4 line-clamp-3 max-w-2xl leading-7 text-ink-2">{post.excerpt}</p>}
                        {post.author && (
                          <p className="mt-5 text-sm text-ink-2">
                            <span className="font-semibold text-ink">{post.author.name}</span>
                            {post.author.role && <> · {post.author.role}</>}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ol>
          )}
        </section>
      </main>
    </>
  );
}
