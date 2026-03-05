import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioProjects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Portfolio - Throoout`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Portfolio - Throoout`,
      description: project.shortDescription,
      url: `https://throoout.com/portfolio/${project.id}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { id } = await params;
  const project = portfolioProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-sky-300 border border-sky-400/30"
              >
                {cat}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">{project.description}</p>
          <p className="mt-3 text-sm text-gray-400">
            Client: <span className="text-white font-medium">{project.clientName}</span>
          </p>
        </div>
      </section>

      {/* Project Image */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Details */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Challenge */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <p className="text-gray-600 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Results</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.results.map((result, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100 text-center"
              >
                <p className="text-sm font-semibold text-gray-800">{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Link */}
        {project.link && (
          <div className="mt-12 text-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold text-white bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Visit Live Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}

        {/* Back CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            View All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
