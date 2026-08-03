"use client";

import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
// Custom components for PortableText to style lists
const ptComponents: PortableTextComponents = {
  list: {
    bullet: ({ children }) => (
      <ul className="pl-6 my-4 text-base text-gray-700 list-disc">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="pl-6 my-4 text-base text-gray-700 list-decimal">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
};

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

export default function InsightDetails({ post: insight }: InsightDetailsProps) {
  if (!insight) {
    return (
      <div className="py-24 text-2xl text-center text-gray-500">
        Coming soon: This insight will be available shortly.
      </div>
    );
  }

  return (
    <div className="max-w-5xl px-4 py-16 mx-auto mt-20">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="flex text-gray-500 list-reset">
          <li>
            <a
              href="/insights"
              className="transition-colors hover:text-blue-600"
            >
              Insights
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li
            className="max-w-xs font-semibold text-gray-700 truncate"
            title={insight.title}
          >
            {insight.title}
          </li>
        </ol>
      </nav>
      <h1 className="mb-4 text-4xl font-bold">{insight.title}</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {insight.category?.map((cat: string, idx: number) => (
          <span
            key={cat + idx}
            className="inline-block px-3 py-1 text-xs font-semibold text-blue-900 rounded-lg shadow-sm bg-gradient-to-r from-blue-100 via-sky-100 to-indigo-100"
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="mb-4 text-gray-500">{insight.date}</div>
      {insight.author && (
        <div className="mb-6 flex items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-200">
            {insight.author.avatarUrl ? (
              <Image
                src={insight.author.avatarUrl}
                alt={insight.author.name}
                fill
                sizes="40px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs font-bold text-slate-500">
                {insight.author.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}
              </div>
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {insight.author.name}
            </p>
            {insight.author.role && (
              <p className="text-xs text-slate-500">{insight.author.role}</p>
            )}
          </div>
        </div>
      )}
      <div className="w-full mb-8 overflow-hidden rounded-xl">
        <Image
          src={
            typeof insight.image === "string"
              ? insight.image
              : insight.image?.asset?.url || "/images/insights/placeholder.png"
          }
          alt={insight.title}
          width={1200}
          height={600}
          className="w-full h-auto rounded-xl"
          quality={75}
          priority
        />
      </div>
      <div className="mb-8 text-lg text-gray-700 blog-inner-content">
        {Array.isArray(insight.content) ? (
          <PortableText value={insight.content} components={ptComponents} />
        ) : (
          <span>{insight.content}</span>
        )}
      </div>
      {/* <a href="/insights" className="text-blue-600 hover:underline">← Back to Insights</a> */}
      {/* Related Insights Section (optional, can be implemented with another fetch if needed) */}
    </div>
  );
}
