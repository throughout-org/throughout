"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  content: Record<string, unknown>;
  category: string[];
  date: string;
  image?: { asset?: { url: string } } | string;
  excerpt: string;
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
    <div className="min-h-screen bg-dark pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-400">
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
              className="w-full rounded-full border border-border bg-card px-5 py-2.5 pr-11 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-accent2/60"
            />
            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
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
              className="w-full appearance-none rounded-full border border-border bg-card px-5 py-2.5 text-sm text-slate-300 outline-none transition focus:border-accent2/60"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-card text-white">
                  {cat}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
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
                    className="group overflow-hidden rounded-2xl border border-border transition-colors duration-300 hover:border-accent2/40"
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
                        <h2 className="text-2xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-accent2 sm:text-3xl">
                          {post.title}
                        </h2>
                      </div>
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-card">
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
                            ? "bg-accent text-white"
                            : "bg-card text-slate-400 hover:text-white") +
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
