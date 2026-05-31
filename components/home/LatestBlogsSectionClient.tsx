"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

type Post = {
  _id: string;
  title: string;
  slug: string;
  category: string[];
  date: string;
  imageUrl: string;
  excerpt: string;
};

interface Props {
  posts: Post[];
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function LatestBlogsSectionClient({ posts }: Props) {
  const visible = posts.slice(0, 4);

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="flex items-center justify-between mb-10"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Latest Blogs
          </h2>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
            >
              View blog
            </Link>
          </motion.div>
        </motion.div>

        {/* 4-column equal square grid */}
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {visible.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: EASE, delay: index * 0.09 }}
            >
              <Link href={`/insights/${post.slug}`} className="group block w-full">
                {/* Square image */}
                <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-slate-900">
                  <Image
                    src={post.imageUrl || "/images/insights/placeholder.png"}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  {post.category?.[0] && (
                    <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-800 backdrop-blur-sm">
                      {post.category[0]}
                    </span>
                  )}
                </div>

                {/* Text below image */}
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span>{post.date}</span>
                    {post.category?.[0] && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-slate-300 inline-block" />
                        <span>{post.category[0]}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-base font-bold leading-snug text-slate-950 line-clamp-2 mb-3 transition group-hover:text-sky-700">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 transition group-hover:text-sky-600">
                    Read blog
                    <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
