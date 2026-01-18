import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/src/sanity/client";
import { PortableText, PortableTextComponents } from "@portabletext/react";
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

interface InsightDetailsProps {
  slug: string;
}

export default function InsightDetails({ slug }: InsightDetailsProps) {
  const [insight, setInsight] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInsights() {
      setLoading(true);
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
      const found = data.find((i: any) => (i.slug?.current || i.slug) === slug);
      setInsight(found || null);
      setLoading(false);
    }
    fetchInsights();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
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
    );
  }
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
      <div className="w-full mb-8 overflow-hidden rounded-xl">
        <Image
          src={insight.image?.asset?.url || insight.image}
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
