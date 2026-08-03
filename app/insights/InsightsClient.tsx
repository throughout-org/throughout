"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Author = {
  name: string;
  role?: string;
  avatarUrl?: string;
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  content: Record<string, unknown>;
  category: string[];
  date: string;
  image?: { asset?: { url: string } } | string;
  excerpt: string;
  author?: Author | null;
};

interface InsightsClientProps {
  posts: Post[];
}

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as [number, number, number, number];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay: Math.min(i, 8) * 0.08 },
  }),
};

function getImageSrc(image: Post["image"]) {
  if (typeof image === "string") return image;
  if (image?.asset?.url) return image.asset.url;
  return "/images/insights/placeholder.png";
}

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const PER_PAGE = 6;

export default function InsightsClient({ posts }: InsightsClientProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((post) => post.category?.forEach((c) => set.add(c)));
    return ["All", ...Array.from(set).sort()];
  }, [posts]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory =
        category === "All" || post.category?.includes(category);
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt?.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [posts, search, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleSearchChange(value: string) {
    setSearch(value);
    setPage(1);
  }

  function handleCategoryChange(value: string) {
    setCategory(value);
    setPage(1);
  }

  return (
    <div className="min-h-screen bg-white pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Ideas, engineering notes, and product thinking from the Throughout
            team.
          </p>
        </div>

        {/* Search + Category filter */}
        <div className="mx-auto mt-10 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search"
              className="w-full rounded-full border border-slate-200 bg-white px-5 py-2.5 pr-11 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-500"
            />
            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
          <div className="relative w-full sm:w-48">
            <select
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full appearance-none rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-sky-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-white text-slate-900">
                  {cat}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-16">
          {filtered.length === 0 ? (
            <div className="py-20 text-center text-slate-500">
              No insights match your search.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
                {paginated.map((post, i) => (
                  <motion.div
                    key={post._id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="show"
                    custom={i}
                    className="group overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
                  >
                    <Link
                      href={`/insights/${post.slug?.current || ""}`}
                      className="block"
                    >
                      <div className="p-6 pb-4">
                        <div className="mb-4 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-slate-500">
                          <span>{formatDate(post.date)}</span>
                          {post.category?.length > 0 && (
                            <span>{post.category.join(", ")}</span>
                          )}
                        </div>
                        <h2 className="text-2xl font-bold leading-snug text-slate-950 transition-colors duration-300 group-hover:text-sky-700 sm:text-3xl">
                          {post.title}
                        </h2>
                        {post.author && (
                          <div className="mt-4 flex items-center gap-3">
                            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-slate-100">
                              {post.author.avatarUrl ? (
                                <Image
                                  src={post.author.avatarUrl}
                                  alt={post.author.name}
                                  fill
                                  sizes="36px"
                                  className="object-cover"
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center text-xs font-bold text-slate-500">
                                  {post.author.name
                                    .split(" ")
                                    .map((part) => part[0])
                                    .slice(0, 2)
                                    .join("")
                                    .toUpperCase()}
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-950">
                                {post.author.name}
                              </p>
                              {post.author.role && (
                                <p className="text-xs text-slate-500">
                                  {post.author.role}
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                        <Image
                          src={getImageSrc(post.image)}
                          alt={post.title}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-16 flex justify-center">
                  <nav className="inline-flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => setPage(i + 1)}
                        className={
                          (page === i + 1
                            ? "bg-slate-950 text-white shadow"
                            : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50") +
                          " rounded-full px-4 py-2 text-sm font-semibold transition"
                        }
                      >
                        {i + 1}
                      </button>
                    ))}
                  </nav>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
