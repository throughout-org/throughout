import matter from "gray-matter";
import { contentFiles } from "@/lib/generated/content";

export type ArticleAuthor = { name: string; role: string; type: "Person" | "Organization"; url?: string; avatar?: string };
export type ArticleCta = { label: string; description: string; url: string };

export type ArticleFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  author: ArticleAuthor;
  publishedDate: string;
  updatedDate: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  category: string;
  cluster: string;
  canonicalUrl: string;
  noIndex: boolean;
  coverImage: string;
  coverImageAlt: string;
  relatedArticles: string[];
  cta: ArticleCta;
};

export type Article = ArticleFrontmatter & { content: string; readingMinutes: number };

function requiredString(value: unknown, field: string, file: string): string {
  if (typeof value !== "string" || !value.trim()) throw new Error(`Invalid or missing '${field}' in ${file}`);
  return value.trim();
}

function stringArray(value: unknown, field: string, file: string): string[] {
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) {
    throw new Error(`Invalid or missing '${field}' in ${file}`);
  }
  return value;
}

function isoDate(value: unknown, field: string, file: string): string {
  const date = requiredString(value, field, file);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(`${date}T00:00:00Z`))) {
    throw new Error(`Invalid '${field}' date in ${file}; use YYYY-MM-DD`);
  }
  return date;
}

function parseArticle(file: string, fileName: string, raw: string): Article {
  const { data, content } = matter(raw);
  const author = data.author as Record<string, unknown> | undefined;
  const cta = data.cta as Record<string, unknown> | undefined;
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

  const slug = requiredString(data.slug, "slug", file);
  const expectedSlug = fileName.replace(/\.mdx?$/, "");
  if (slug !== expectedSlug) throw new Error(`Slug '${slug}' must match filename '${expectedSlug}' in ${file}`);
  if (author?.type !== "Person" && author?.type !== "Organization") {
    throw new Error(`Invalid 'author.type' in ${file}; use Person or Organization`);
  }

  return {
    title: requiredString(data.title, "title", file), slug,
    excerpt: requiredString(data.excerpt, "excerpt", file),
    author: {
      name: requiredString(author?.name, "author.name", file), role: requiredString(author?.role, "author.role", file),
      type: author.type,
      url: typeof author?.url === "string" ? author.url : undefined,
      avatar: typeof author?.avatar === "string" ? author.avatar : undefined,
    },
    publishedDate: isoDate(data.publishedDate, "publishedDate", file),
    updatedDate: isoDate(data.updatedDate, "updatedDate", file),
    seoTitle: requiredString(data.seoTitle, "seoTitle", file),
    metaDescription: requiredString(data.metaDescription, "metaDescription", file),
    primaryKeyword: requiredString(data.primaryKeyword, "primaryKeyword", file),
    secondaryKeywords: stringArray(data.secondaryKeywords, "secondaryKeywords", file),
    searchIntent: requiredString(data.searchIntent, "searchIntent", file),
    category: requiredString(data.category, "category", file), cluster: requiredString(data.cluster, "cluster", file),
    canonicalUrl: requiredString(data.canonicalUrl, "canonicalUrl", file), noIndex: Boolean(data.noIndex),
    coverImage: requiredString(data.coverImage, "coverImage", file),
    coverImageAlt: requiredString(data.coverImageAlt, "coverImageAlt", file),
    relatedArticles: stringArray(data.relatedArticles, "relatedArticles", file),
    cta: {
      label: requiredString(cta?.label, "cta.label", file),
      description: requiredString(cta?.description, "cta.description", file),
      url: requiredString(cta?.url, "cta.url", file),
    },
    content: content.trim().replace(/^#\s+[^\n]+\n+/, ""), readingMinutes: Math.max(1, Math.ceil(wordCount / 220)),
  };
}

export function getAllArticles(): Article[] {
  const articles = contentFiles
    .map(({ file, name, raw }) => parseArticle(file, name, raw))
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));

  const slugs = new Set<string>();
  for (const article of articles) {
    if (slugs.has(article.slug)) throw new Error(`Duplicate insight slug '${article.slug}'`);
    slugs.add(article.slug);
    const canonical = new URL(article.canonicalUrl);
    if (canonical.protocol !== "https:") throw new Error(`Canonical URL for '${article.slug}' must use HTTPS`);
  }
  for (const article of articles) {
    if (!insightCategories.some((category) => category.name === article.category)) {
      throw new Error(`Unknown category '${article.category}' in '${article.slug}'; add it to insightCategories`);
    }
  }
  for (const article of articles) {
    for (const relatedSlug of article.relatedArticles) {
      if (!slugs.has(relatedSlug)) throw new Error(`Unknown related article '${relatedSlug}' in '${article.slug}'`);
    }
  }
  return articles;
}

export function getArticleBySlug(slug: string): Article | null {
  return getAllArticles().find((article) => article.slug === slug) || null;
}

export function getRelatedArticles(article: Article): Article[] {
  const bySlug = new Map(getAllArticles().map((item) => [item.slug, item]));
  return article.relatedArticles.map((slug) => bySlug.get(slug)).filter((item): item is Article => Boolean(item));
}

/** Topic hubs for /insights. Every article's `category` must be one of these names. */
export const insightCategories = [
  { name: "Engineering", slug: "engineering", title: "Engineering", description: "Offshore software development, SaaS and MVP builds, Next.js, APIs and AI engineering, written by the team that ships them." },
  { name: "Design", slug: "design", title: "Design", description: "UI/UX and website design practice: handoff, redesigns, design systems and product clarity." },
  { name: "SEO & GEO", slug: "seo-geo", title: "SEO and GEO", description: "Technical SEO, content strategy and generative engine optimisation for visibility in Google, ChatGPT, Gemini and Perplexity." },
  { name: "Business", slug: "business", title: "Business", description: "Hiring offshore developers, costs, vendor choice and delivery models for founders and agencies." },
  { name: "Case study", slug: "case-study", title: "Case studies", description: "Documented client and product work with the numbers we actually recorded." },
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export function getCategoryBySlug(slug: string): InsightCategory | null {
  return insightCategories.find((category) => category.slug === slug) || null;
}

export function getArticlesByCategory(name: string): Article[] {
  return getAllArticles().filter((article) => article.category === name && !article.noIndex);
}
