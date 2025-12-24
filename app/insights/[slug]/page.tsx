'use client';
import { useParams } from 'next/navigation';
import { Insights } from '@/data/insights';
import Image from 'next/image';

export default function InsightDetailPage() {
  const params = useParams();
  // Ensure params and params.slug exist and are a string (Next.js may provide it as string or array)
  const slug = params && 'slug' in params && params.slug
    ? Array.isArray(params.slug)
      ? params.slug[0]
      : params.slug
    : '';
  const insight = Insights.find(i => i.slug === slug);

  if (!insight) {
    return <div className="text-center py-24">Insight not found.</div>;
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
          <li className="text-gray-700 font-semibold truncate max-w-xs" title={insight.title}>{insight.short || insight.title}</li>
        </ol>
      </nav>
      <h1 className="text-4xl font-bold mb-4">{insight.title}</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {insight.category.map((cat, idx) => (
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
          src={insight.image}
          alt={insight.title}
          width={1200}
          height={600}
          className="w-full h-auto rounded-xl"
          quality={75}
          priority
        />
      </div>
      <div className="text-lg text-gray-700 mb-8" dangerouslySetInnerHTML={{ __html: insight.content }} />
      <a href="/insights" className="text-blue-600 hover:underline">← Back to Insights</a>

      {/* Related Insights Section */}
      <section className="w-full  mx-auto   mt-20">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Related Insights</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {(() => {
              const relatedPosts = Insights.filter(i =>
                i.id !== insight.id &&
                i.category.some(cat => insight.category.includes(cat))
              );
              if (relatedPosts.length === 0) {
                return (
                  <div className="col-span-3 text-center text-gray-400 py-12 text-lg font-semibold">
                    No related posts to show.
                  </div>
                );
              }
              return relatedPosts.map((related) => (
                <div
                  key={related.id}
                  className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col w-full max-w-md mx-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-200 to-indigo-300 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0" />
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-52 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="relative p-8 flex-1 flex flex-col z-10">
                    <div className="absolute top-4 ">
                      <span className="px-3 py-1 bg-gradient-to-r from-gray-200 via-gray-100 to-white text-gray-700 text-xs font-semibold rounded-lg shadow">
                        {related.date}
                      </span>
                    </div>
                    <h2 className="mt-5 text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-sky-600 transition-all duration-300 line-clamp-2">
                      {related.title}
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-3 text-base">{related.excerpt}</p>
                    <div className="w-full flex justify-end">
                      <a
                        href={`/insights/${related.slug}`}
                        className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center"
                      >
                        Read More
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
                </div>
              ));
            })()}
        </div>
      </section>
    </div>
  );
}
