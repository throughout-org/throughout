


import { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/src/sanity/client';
import { PortableText, PortableTextComponents } from '@portabletext/react';
// Custom components for PortableText to style lists
const ptComponents: PortableTextComponents = {
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 my-4 text-base text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 my-4 text-base text-gray-700">{children}</ol>
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
        }`
      );
      const found = data.find((i: any) => (i.slug?.current || i.slug) === slug);
      setInsight(found || null);
      setLoading(false);
    }
    fetchInsights();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <svg
          className="animate-spin h-10 w-10 text-blue-500 mb-4"
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
      <div className="text-center py-24 text-2xl text-gray-500">
        Coming soon: This insight will be available shortly.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 mt-20">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm mb-6" aria-label="Breadcrumb">
        <ol className="list-reset flex text-gray-500">
          <li>
            <a href="/insights" className="hover:text-blue-600 transition-colors">Insights</a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-700 font-semibold truncate max-w-xs" title={insight.title}>{insight.title}</li>
        </ol>
      </nav>
      <h1 className="text-4xl font-bold mb-4">{insight.title}</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {insight.category?.map((cat: string, idx: number) => (
          <span
            key={cat + idx}
            className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 via-sky-100 to-indigo-100 text-blue-900 text-xs font-semibold rounded-lg shadow-sm"
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="text-gray-500 mb-4">{insight.date}</div>
      <div className="w-full rounded-xl mb-8 overflow-hidden">
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
      <div className="text-lg text-gray-700 mb-8">
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

