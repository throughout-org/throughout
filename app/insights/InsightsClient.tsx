"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/src/sanity/client";
import InnerBanner from "@/components/ui/InnerBanner";
import AntigravityParticles from "@/components/ui/AntigravityParticles";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

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

export default function InsightsClient() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const perPage = 6; // Show 6 insights per page
  const totalPages = Math.ceil(posts.length / perPage);
  const paginated = posts.slice((page - 1) * perPage, page * perPage);

  useEffect(() => {
    async function fetchBlogs() {
      const data = await client.fetch(
        `*[_type == "post"] | order(date desc) {
          _id,
          title,
          slug,
          content,
          category,
          date,
          image {
            asset->{url}
          },
          excerpt
        }`,
      );
      setPosts(data);
    }
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="relative flex min-h-[78vh] items-stretch isolate">
        <div className="absolute inset-0 h-full w-full">
          <AntigravityParticles />
        </div>
        <div className="relative z-10 flex w-full items-center justify-center pt-20 sm:pt-24 lg:pt-28">
          <InnerBanner
            badgeText="Insights"
            title={
              <>
                Ideas for Building Better <br className="hidden md:block" />
                Digital Products
              </>
            }
            description="The latest thinking from Throughout on software engineering, automation, product strategy, and practical technology decisions."
            cta={
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-900/15 transition hover:bg-sky-700 hover:shadow-xl"
                >
                  Talk to Us
                  <span aria-hidden="true">-&gt;</span>
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-bold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg"
                >
                  View Our Work
                </Link>
              </div>
            }
            isBackgroundColored={false}
          />
        </div>
      </div>

      {/* Insights Grid */}
      {posts.length === 0 ? (
        <div className="flex items-center justify-center py-20 col-span-full">
          <svg
            className="w-10 h-10 mb-4 text-blue-500 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </div>
      ) : (
        <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ServiceSectionHeader
              badgeText="LATEST INSIGHTS"
              headline="Practical Notes From the Work"
              intro="Short reads on the decisions, systems, and patterns behind reliable digital products."
            />
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {paginated.map((post) => (
                <div
                  key={post._id}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
                >
                  <Image
                    src={
                      typeof post.image === "string"
                        ? post.image
                        : post.image &&
                            "asset" in post.image &&
                            post.image.asset &&
                            post.image.asset.url
                          ? post.image.asset.url
                          : "/images/insights/placeholder.png"
                    }
                    alt={post.title}
                    width={600}
                    height={260}
                    className="h-52 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-[1.03]"
                    quality={75}
                    priority
                  />
                  <div className="relative z-10 flex flex-col justify-between flex-1 p-4">
                    <div>
                      <div className="">
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600">
                          {post.date}
                        </span>
                      </div>
                      <h2 className="mt-3 mb-3 line-clamp-2 text-xl font-bold text-slate-950 transition group-hover:text-sky-700">
                        {post.title}
                      </h2>
                      <p className="mb-4 line-clamp-3 text-base leading-7 text-slate-600">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex justify-start w-full">
                      <Link
                        href={`/insights/${
                          post.slug && post.slug.current
                            ? post.slug.current
                            : ""
                        }`}
                        className="mt-auto inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-sky-900/15 transition hover:bg-sky-700 hover:shadow-xl"
                      >
                        Read More
                        <svg
                          className="w-5 h-5 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 z-20 h-1 origin-left scale-x-0 bg-sky-600 transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              ))}
            </div>

            {totalPages > 6 && (
              <div className="flex justify-center mt-14">
                <nav className="inline-flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setPage(i + 1)}
                      className={
                        (page === i + 1
                          ? "bg-slate-950 text-white shadow "
                          : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 ") +
                        "px-5 py-2 rounded-full font-bold transition"
                      }
                    >
                      {i + 1}
                    </button>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
