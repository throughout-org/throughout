"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/src/sanity/client";

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
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-24 overflow-hidden sm:px-6 lg:px-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-sky-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute rounded-full bottom-20 left-1/2 w-96 h-96 bg-blue-400/30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative mx-auto text-center max-w-7xl">
          {/* <div className="inline-block mb-6">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-white rounded-full shadow-lg bg-linear-to-r from-blue-600 to-blue-400">
              Insights
            </span>
          </div> */}
          {/* Badge */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-gradient-to-r from-blue-500 to-sky-500"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500"></span>
              </span>
              <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text">
                Insights
              </span>
            </div>
          </div>
          <h1 className="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
            <span className="block text-gray-900">Blog</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 sm:text-2xl">
            The latest insights, ideas and perspectives at Throoout.
          </p>
        </div>
      </section>

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
        <section className="px-4 mx-auto mt-10 max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((post) => (
              <div
                key={post._id}
                className="relative flex flex-col p-4 overflow-hidden transition-all duration-500 bg-white shadow-xl group rounded-3xl hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 bg-linear-to-br from-sky-400 via-blue-200 to-indigo-300 group-hover:opacity-10" />

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
                  className="object-cover w-full transition-transform duration-500 h-52 rounded-2xl group-hover:scale-105"
                  quality={75}
                  priority
                />
                <div className="relative z-10 flex flex-col justify-between flex-1 p-4">
                  <div>
                    <div className="">
                      <span className="px-3 py-1 text-xs font-semibold text-gray-700 rounded-lg shadow bg-linear-to-r from-gray-200 via-gray-100 to-white">
                        {post.date}
                      </span>
                    </div>
                    <h2 className="mt-3 mb-3 font-bold text-gray-900 transition-all duration-300 text-1xl group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-sky-600 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="mb-4 text-base text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex justify-start w-full">
                    <a
                      href={`/insights/${
                        post.slug && post.slug.current ? post.slug.current : ""
                      }`}
                      className="inline-flex items-center gap-2 px-6 py-3 mt-auto font-semibold text-center text-white transition-all duration-300 rounded-full shadow-lg bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500 hover:scale-105 hover:shadow-2xl"
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
                    </a>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 h-1 transition-transform duration-500 origin-left transform scale-x-0 bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500 group-hover:scale-x-100" />
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
                        ? "bg-linear-to-r from-blue-500 to-sky-400 text-white shadow "
                        : "bg-white text-gray-700 border border-blue-200 hover:bg-blue-50 ") +
                      "px-5 py-2 rounded-full font-bold transition-all hover:scale-105"
                    }
                  >
                    {i + 1}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
