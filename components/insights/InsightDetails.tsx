import Image from "next/image";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import type { Article } from "@/lib/insights";

function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  });
}

const body = "text-[17px] leading-8 text-ink/85 sm:text-lg sm:leading-[1.85]";

function ArticleImage(props: { src?: string; alt?: string }) {
  if (!props.src) return null;
  return (
    <span className="relative my-12 block aspect-[16/10] overflow-hidden rounded-md bg-mist">
      <Image src={props.src} alt={props.alt || ""} fill sizes="(min-width: 1024px) 704px, 100vw" className="object-cover" />
    </span>
  );
}

const markdownOptions = {
  overrides: {
    h2: { props: { className: "font-display mb-5 mt-14 text-[1.75rem] font-[720] sm:text-3xl" } },
    h3: { props: { className: "mb-4 mt-10 text-xl font-semibold sm:text-2xl" } },
    p: { props: { className: `mb-6 ${body}` } },
    ul: { props: { className: `mb-7 ml-5 list-disc space-y-2 marker:text-signal ${body}` } },
    ol: { props: { className: `mb-7 ml-5 list-decimal space-y-2 marker:font-mono marker:text-sm marker:text-ink-2 ${body}` } },
    blockquote: { props: { className: "my-10 border-l-2 border-signal pl-6 text-xl leading-8 text-sapphire" } },
    a: { props: { className: "font-medium text-sapphire underline decoration-pale decoration-2 underline-offset-4 transition-colors hover:decoration-signal" } },
    code: { props: { className: "rounded bg-mist px-1.5 py-0.5 font-mono text-[0.9em] text-sapphire" } },
    pre: { props: { className: "my-8 overflow-x-auto rounded-md bg-ink p-5 font-mono text-sm leading-7 text-white [&>code]:!rounded-none [&>code]:!bg-transparent [&>code]:!p-0 [&>code]:!text-inherit" } },
    table: { props: { className: "my-8 w-full border-collapse text-left text-sm" } },
    th: { props: { className: "border-b border-ink px-3 py-3 font-semibold" } },
    td: { props: { className: "border-b border-hairline px-3 py-3 align-top" } },
    img: { component: ArticleImage },
  },
};

export default function InsightDetails({ post, relatedPosts }: { post: Article; relatedPosts: Article[] }) {
  const externalCta = post.cta.url.startsWith("http");
  return (
    <main className="bg-canvas text-ink">
      <article>
        <header className="mx-auto max-w-4xl px-4 pb-10 pt-12 sm:px-6 lg:pt-20">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-ink-2">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-ink">Home</Link></li><li aria-hidden="true">/</li>
              <li><Link href="/insights" className="hover:text-ink">Insights</Link></li><li aria-hidden="true">/</li>
              <li className="max-w-[28rem] truncate text-ink" aria-current="page">{post.title}</li>
            </ol>
          </nav>
          <p className="mt-8 font-mono text-xs text-ink-2">
            Published <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
            {post.updatedDate !== post.publishedDate && <> · Updated <time dateTime={post.updatedDate}>{formatDate(post.updatedDate)}</time></>}
            <> · {post.category} · {post.readingMinutes} min read</>
          </p>
          <h1 className="font-display mt-4 text-[clamp(2.1rem,5vw,3.75rem)] font-[750]">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-2 sm:text-xl sm:leading-9">{post.excerpt}</p>
          <div className="mt-8 border-t border-hairline pt-6">
            <p className="text-sm font-semibold">{post.author.name}</p><p className="text-sm text-ink-2">{post.author.role}</p>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[10px] bg-mist">
            <Image src={post.coverImage} alt={post.coverImageAlt} fill priority sizes="(min-width: 1152px) 1152px, 100vw" className="object-cover" />
          </div>
        </div>

        <div className="mx-auto max-w-[44rem] px-4 pb-24 pt-14 sm:px-6 lg:pb-32">
          <Markdown options={markdownOptions}>{post.content}</Markdown>
          <aside className="mt-16 border-y border-ink py-8" aria-label="Next step">
            <h2 className="font-display text-2xl font-[720]">{post.cta.label}</h2>
            <p className="mt-3 leading-7 text-ink-2">{post.cta.description}</p>
            <a href={post.cta.url} target={externalCta ? "_blank" : undefined} rel={externalCta ? "noopener noreferrer" : undefined} className="link-draw mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-sapphire">
              {post.cta.label} {externalCta && <FiArrowUpRight aria-hidden="true" />}
            </a>
          </aside>
          {relatedPosts.length > 0 && (
            <aside className="mt-14" aria-labelledby="related-insights">
              <h2 id="related-insights" className="font-display text-2xl font-[720]">Related insights</h2>
              <ul className="mt-5 divide-y divide-hairline border-y border-hairline">
                {relatedPosts.map((related) => (
                  <li key={related.slug}><Link href={`/insights/${related.slug}`} className="group block py-5">
                    <p className="font-mono text-xs text-ink-2">{formatDate(related.publishedDate)} · {related.readingMinutes} min read</p>
                    <h3 className="mt-2 font-display text-xl font-[700] group-hover:text-sapphire">{related.title}</h3>
                    <p className="mt-2 line-clamp-2 leading-7 text-ink-2">{related.excerpt}</p>
                  </Link></li>
                ))}
              </ul>
            </aside>
          )}
          <div className="mt-12"><Link href="/insights" className="link-draw inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-sapphire"><FiArrowLeft aria-hidden="true" /> All insights</Link></div>
        </div>
      </article>
    </main>
  );
}
