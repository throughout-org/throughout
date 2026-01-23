"use client";

import Image from "next/image";
import { portfolioProjects } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ProjectDetailProps {
  params: {
    id: string;
  };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const project = portfolioProjects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-16 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Portfolio
            </Link>
          </div>
          <h1 className="mb-4 text-5xl font-bold text-gray-900 sm:text-6xl">
            {project.title}
          </h1>
          <p className="mb-6 text-xl text-gray-600">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid max-w-5xl grid-cols-1 gap-12 mx-auto lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Challenge */}
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                The Challenge
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                The Solution
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {project.solution}
              </p>
            </div>

            {/* Results */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Results Achieved
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.results.map((result, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold text-gray-700">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Client Info */}
            <div className="p-6 mb-6 bg-gray-50 rounded-xl">
              <h3 className="mb-2 text-sm font-semibold text-gray-600 uppercase">
                Client
              </h3>
              <p className="text-2xl font-bold text-gray-900">
                {project.clientName}
              </p>
            </div>

            {/* Technologies */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="mb-4 text-sm font-semibold text-gray-600 uppercase">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Interested in a Similar Project?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Let&apos;s discuss how we can help transform your business with
            custom solutions tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-bold text-blue-600 transition-colors duration-300 bg-white rounded-full shadow-lg hover:bg-gray-100"
          >
            Start Your Project
            <svg
              className="w-5 h-5"
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
      </section>

      {/* Related Projects */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-bold text-gray-900">
            More Projects
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/portfolio/${relatedProject.id}`}
                  className="overflow-hidden transition-all duration-300 shadow-lg group rounded-xl hover:shadow-2xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {relatedProject.clientName}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
