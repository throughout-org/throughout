"use client";

import Image from "next/image";
import { portfolioProjects } from "@/data/portfolio";
import { notFound } from "next/navigation";

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
        <div className="mx-auto max-w-5xl">
          <div className="mb-6">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
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
            </a>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-semibold text-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Challenge */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Challenge
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Solution
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Results Achieved
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <p className="text-gray-700 font-semibold">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Client Info */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">
                Client
              </h3>
              <p className="text-2xl font-bold text-gray-900">
                {project.clientName}
              </p>
            </div>

            {/* Technologies */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold"
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
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Interested in a Similar Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help transform your business with custom
            solutions tailored to your needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
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
          </a>
        </div>
      </section>

      {/* Related Projects */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            More Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <a
                  key={relatedProject.id}
                  href={`/portfolio/${relatedProject.id}`}
                  className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {relatedProject.clientName}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
