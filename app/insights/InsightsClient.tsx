"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiSearch } from "react-icons/fi";

type Author = { name: string; role?: string; avatarUrl?: string };
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

const PER_PAGE = 7;

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function PostMeta({ post }: { post: Post }) {
  return (
    <div className="space-y-4">
      {post.author && (
        <div className="flex items-center gap-3.5">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-200 text-sm font-bold text-slate-700 ring-1 ring-slate-200">
            {post.author.avatarUrl ? (
              <Image src={post.author.avatarUrl} alt={post.author.name} fill sizes="56px" className="object-cover" />
            ) : (
              <span aria-hidden="true">{post.author.name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase()}</span>
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-bold text-slate-950 sm:text-lg">{post.author.name}</p>
            {post.author.role && <p className="mt-0.5 truncate text-sm text-slate-500">{post.author.role}</p>}
          </div>
        </div>
      )}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        {post.category?.[0] && <><span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300" /><span>{post.category[0]}</span></>}
      </div>
    </div>
  );
}

export default function InsightsClient({ posts }: { posts: Post[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => ["All", ...Array.from(new Set(posts.flatMap((post) => post.category || []))).sort()], [posts]);
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return posts.filter((post) =>
      (category === "All" || post.category?.includes(category)) &&
      (!query || post.title.toLowerCase().includes(query) || post.excerpt?.toLowerCase().includes(query)),
    );
  }, [posts, search, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const visiblePosts = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const updateSearch = (value: string) => { setSearch(value); setPage(1); };
  const updateCategory = (value: string) => { setCategory(value); setPage(1); };

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Insights</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-6xl">Useful thinking for digital teams.</h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600">Practical notes on engineering, product design, AI, marketing, and building capable teams.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-slate-200 pb-8">
            <div className="relative w-full max-w-lg">
              <input aria-label="Search insights" id="insights-search" type="search" value={search} onChange={(event) => updateSearch(event.target.value)} placeholder="Search insights" className="min-h-11 w-full rounded-full border border-slate-300 bg-white py-2.5 pl-4 pr-11 text-sm outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100" />
              <FiSearch className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            </div>
            <div aria-label="Filter insights by category" className="mt-4 flex min-w-0 flex-wrap gap-2">
              {categories.map((item) => <button key={item} type="button" onClick={() => updateCategory(item)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${category === item ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}>{item}</button>)}
            </div>
          </div>

          {visiblePosts.length === 0 ? (
            <div className="py-24 text-center"><h2 className="text-2xl font-bold">No matching insights</h2><p className="mt-3 text-slate-600">Try another search or category.</p></div>
          ) : (
            <>
              <div>
                {visiblePosts.map((post) => (
                  <article key={post._id} className="border-b border-slate-200 py-10 sm:py-12">
                    <Link href={`/insights/${post.slug.current}`} className="group block">
                      <PostMeta post={post} />
                      <h2 className="mt-5 max-w-6xl text-2xl font-extrabold leading-tight tracking-[-0.025em] transition group-hover:text-sky-700 sm:text-3xl lg:text-4xl">{post.title}</h2>
                      {post.excerpt && <p className="mt-4 max-w-6xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{post.excerpt}</p>}
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700">Read article <FiArrowRight className="transition group-hover:translate-x-1" aria-hidden="true" /></span>
                    </Link>
                  </article>
                ))}
              </div>

              {totalPages > 1 && <nav aria-label="Insights pagination" className="mt-16 flex justify-center gap-2">{Array.from({ length: totalPages }, (_, index) => <button key={index + 1} type="button" aria-current={page === index + 1 ? "page" : undefined} onClick={() => setPage(index + 1)} className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition ${page === index + 1 ? "bg-slate-950 text-white" : "border border-slate-300 hover:bg-slate-50"}`}>{index + 1}</button>)}</nav>}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
