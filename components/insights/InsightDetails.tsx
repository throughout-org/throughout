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
  return parsed.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

const body = "text-[17px] leading-8 text-ink/85 sm:text-lg sm:leading-[1.85]";

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h2 className="font-display mb-5 mt-14 text-[1.75rem] font-[720] sm:text-3xl">{children}</h2>,
    h2: ({ children }) => <h2 className="font-display mb-5 mt-14 text-[1.75rem] font-[720] sm:text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-4 mt-10 text-xl font-semibold sm:text-2xl">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="my-10 border-l-2 border-signal pl-6 text-xl leading-8 text-sapphire">{children}</blockquote>,
    normal: ({ children }) => <p className={`mb-6 ${body}`}>{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className={`mb-7 ml-5 list-disc space-y-2 marker:text-signal ${body}`}>{children}</ul>,
    number: ({ children }) => <ol className={`mb-7 ml-5 list-decimal space-y-2 marker:font-mono marker:text-sm marker:text-ink-2 ${body}`}>{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    code: ({ children }) => <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-[0.9em] text-sapphire">{children}</code>,
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const external = href.startsWith("http");
      return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="font-medium text-sapphire underline decoration-pale decoration-2 underline-offset-4 transition-colors hover:decoration-signal">{children}</a>;
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = imageBuilder.image(value).width(1400).fit("max").auto("format").url();
      return (
        <figure className="my-12">
          <Image src={src} alt={value.alt || ""} width={1400} height={875} sizes="(min-width: 1024px) 768px, 100vw" className="h-auto w-full rounded-md bg-mist" />
          {value.caption && <figcaption className="mt-3 font-mono text-xs text-ink-2">{value.caption}</figcaption>}
        </figure>
      );
    },
  },
};

function Author({ author }: { author: Author }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-mist text-xs font-semibold text-sapphire">
        {author.avatarUrl ? (
          <Image src={author.avatarUrl} alt="" fill sizes="44px" className="object-cover" />
        ) : (
          <span aria-hidden="true">{author.name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase()}</span>
        )}
      </div>
      <div>
        <p className="text-sm font-semibold">{author.name}</p>
        {author.role && <p className="text-sm text-ink-2">{author.role}</p>}
      </div>
    </div>
  );
}

export default function InsightDetails({ post }: InsightDetailsProps) {
  if (!post) {
    return (
      <main className="mx-auto min-h-[60vh] max-w-3xl px-4 py-24 sm:px-6">
        <h1 className="font-display text-4xl font-[720]">Post not found</h1>
        <p className="mt-4 text-ink-2">This post may have moved or is no longer available.</p>
        <Link href="/insights" className="link-draw mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sapphire"><FiArrowLeft aria-hidden="true" /> All posts</Link>
      </main>
    );
  }

  const coverImage = typeof post.image === "string" ? post.image : post.image?.asset?.url;

  return (
    <main className="bg-canvas text-ink">
      <article>
        <header className="mx-auto max-w-4xl px-4 pb-10 pt-12 sm:px-6 lg:pt-20">
          <Link href="/insights" className="link-draw inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink-2 hover:text-ink">
            <FiArrowLeft aria-hidden="true" /> All posts
          </Link>
          <p className="mt-8 font-mono text-xs text-ink-2">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.category?.length > 0 && <> · {post.category.join(", ")}</>}
          </p>
          <h1 className="font-display mt-4 text-[clamp(2.1rem,5vw,3.75rem)] font-[750]">{post.title}</h1>
          {post.excerpt && <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-2 sm:text-xl sm:leading-9">{post.excerpt}</p>}
          {post.author && <div className="mt-8 border-t border-hairline pt-6"><Author author={post.author} /></div>}
        </header>

        {coverImage && (
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[10px] bg-mist">
              <Image src={coverImage} alt="" fill priority sizes="(min-width: 1152px) 1152px, 100vw" className="object-cover" />
            </div>
          </div>
        )}

        <div className="mx-auto max-w-[44rem] px-4 pb-24 pt-14 sm:px-6 lg:pb-32">
          {Array.isArray(post.content) ? (
            <PortableText value={post.content} components={portableTextComponents} />
          ) : (
            <p className={`whitespace-pre-line ${body}`}>{post.content}</p>
          )}

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-ink pt-8">
            <Link href="/insights" className="link-draw inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-sapphire">
              <FiArrowLeft aria-hidden="true" /> All posts
            </Link>
            <Link href="/#contact" className="link-draw inline-flex min-h-11 items-center text-sm font-semibold text-ink">
              Building something? Talk to us
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
