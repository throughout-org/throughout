import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import { createImageUrlBuilder } from "@sanity/image-url";
import { FiArrowLeft } from "react-icons/fi";
import { client } from "@/src/sanity/client";

const imageBuilder = createImageUrlBuilder(client);

type Author = {
  name: string;
  role?: string;
  avatarUrl?: string;
};

type Insight = {
  _id: string;
  title: string;
  slug: { current: string } | string;
  content: TypedObject[] | string;
  category: string[];
  date: string;
  image?: { asset?: { url: string } } | string;
  excerpt: string;
  author?: Author | null;
};

interface InsightDetailsProps {
  post: Insight | null;
}

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h2 className="mb-5 mt-12 text-3xl font-extrabold tracking-tight text-slate-950">{children}</h2>,
    h2: ({ children }) => <h2 className="mb-5 mt-12 text-3xl font-extrabold tracking-tight text-slate-950">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-4 mt-10 text-2xl font-bold tracking-tight text-slate-950">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="my-8 border-l-4 border-sky-500 pl-6 text-xl font-medium italic leading-8 text-slate-700">{children}</blockquote>,
    normal: ({ children }) => <p className="mb-6 text-[17px] leading-8 text-slate-700 sm:text-lg">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="mb-7 ml-6 list-disc space-y-2 text-[17px] leading-8 text-slate-700 marker:text-sky-600 sm:text-lg">{children}</ul>,
    number: ({ children }) => <ol className="mb-7 ml-6 list-decimal space-y-2 text-[17px] leading-8 text-slate-700 marker:font-bold marker:text-sky-700 sm:text-lg">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-slate-950">{children}</strong>,
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const external = href.startsWith("http");
      return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-900">{children}</a>;
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = imageBuilder.image(value).width(1400).fit("max").auto("format").url();
      return (
        <figure className="my-10 overflow-hidden rounded-2xl bg-slate-100">
          <Image src={src} alt={value.alt || ""} width={1400} height={875} sizes="(min-width: 1024px) 768px, 100vw" className="h-auto w-full" />
          {value.caption && <figcaption className="px-4 py-3 text-center text-sm text-slate-500">{value.caption}</figcaption>}
        </figure>
      );
    },
  },
};

export default function InsightDetails({ post }: InsightDetailsProps) {
  if (!post) {
    return (
      <main className="mx-auto min-h-[70vh] max-w-3xl px-4 pb-20 pt-40 text-center sm:px-6">
        <h1 className="text-3xl font-extrabold text-slate-950">Insight not found</h1>
        <p className="mt-4 text-slate-600">This article may have moved or is no longer available.</p>
        <Link href="/insights" className="mt-8 inline-flex items-center gap-2 font-bold text-sky-700"><FiArrowLeft aria-hidden="true" /> Back to Insights</Link>
      </main>
    );
  }

  const coverImage = typeof post.image === "string" ? post.image : post.image?.asset?.url;

  return (
    <main className="bg-white text-slate-950">
      <article>
        <header className="border-b border-slate-200 px-4 pb-14 pt-32 sm:px-6 sm:pb-16 sm:pt-40 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-sky-700"><FiArrowLeft aria-hidden="true" /> Insights</Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.category?.map((category) => (
                <span key={category} className="rounded-full bg-sky-50 px-3 py-1.5 text-sky-800">{category}</span>
              ))}
            </div>

            <h1 className="mt-6 max-w-5xl text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">{post.title}</h1>
            {post.excerpt && <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600 sm:text-xl">{post.excerpt}</p>}

            {post.author && (
              <div className="mt-8 flex items-center gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-200 text-sm font-bold text-slate-700 ring-1 ring-slate-200">
                  {post.author.avatarUrl ? (
                    <Image src={post.author.avatarUrl} alt={post.author.name} fill sizes="56px" className="object-cover" />
                  ) : (
                    <span aria-hidden="true">{post.author.name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase()}</span>
                  )}
                </div>
                <div>
                  <p className="text-base font-bold text-slate-950">{post.author.name}</p>
                  {post.author.role && <p className="mt-0.5 text-sm text-slate-500">{post.author.role}</p>}
                </div>
              </div>
            )}
          </div>
        </header>

        <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {coverImage && (
              <div className="relative mb-14 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100 sm:rounded-3xl">
                <Image src={coverImage} alt={post.title} fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
              </div>
            )}

            <div className="mx-auto max-w-3xl">
              {Array.isArray(post.content) ? (
                <PortableText value={post.content} components={portableTextComponents} />
              ) : (
                <p className="whitespace-pre-line text-lg leading-8 text-slate-700">{post.content}</p>
              )}

              <div className="mt-14 border-t border-slate-200 pt-8">
                <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:text-sky-900"><FiArrowLeft aria-hidden="true" /> Back to all insights</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
