import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightDetails from "@/components/insights/InsightDetails";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/insights";

type Params = { slug: string };
const siteUrl = "https://www.throughout.io";

export function generateStaticParams() {
  return getAllArticles().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getArticleBySlug(slug);
  if (!post) return { title: "Insight not found", robots: { index: false, follow: false } };

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    alternates: { canonical: post.canonicalUrl },
    robots: post.noIndex ? { index: false, follow: true } : { index: true, follow: true },
    authors: [{ name: post.author.name, url: post.author.url }],
    openGraph: {
      title: post.seoTitle, description: post.metaDescription, url: post.canonicalUrl, type: "article",
      siteName: "Throughout (PVT) LTD", publishedTime: post.publishedDate, modifiedTime: post.updatedDate,
      authors: [post.author.name], section: post.category,
      images: [{ url: post.coverImage, width: 1200, height: 675, alt: post.coverImageAlt }],
    },
    twitter: {
      card: "summary_large_image", title: post.seoTitle, description: post.metaDescription,
      images: [{ url: post.coverImage, alt: post.coverImageAlt }],
    },
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getArticleBySlug(slug);
  if (!post) notFound();
  const relatedPosts = getRelatedArticles(post);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting", "@id": `${post.canonicalUrl}#article`, headline: post.title,
        description: post.metaDescription, url: post.canonicalUrl, mainEntityOfPage: post.canonicalUrl,
        datePublished: post.publishedDate, dateModified: post.updatedDate,
        image: `${siteUrl}${post.coverImage}`,
        author: { "@type": post.author.type, name: post.author.name, ...(post.author.type === "Person" ? { jobTitle: post.author.role } : {}), url: post.author.url },
        publisher: {
          "@type": "Organization", name: "Throughout (PVT) LTD", url: siteUrl,
          logo: { "@type": "ImageObject", url: `${siteUrl}/images/logo.png` },
        },
        articleSection: post.category, keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
      },
      {
        "@type": "BreadcrumbList", "@id": `${post.canonicalUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${siteUrl}/insights` },
          { "@type": "ListItem", position: 3, name: post.title, item: post.canonicalUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <InsightDetails post={post} relatedPosts={relatedPosts} />
    </>
  );
}
