"use client";

import Image from "next/image";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

interface TechnologiesSectionProps {
  badgeText?: string;
  headline: string;
  description?: string;
  stack: {
    name: string;
    icon: string;
  }[];
}
export default function TechnologiesSection({
  badgeText = "TECHNOLOGIES",
  headline,
  description,
  stack,
}: TechnologiesSectionProps) {
  return (
    <section
      id="technologies"
      className="relative px-4 py-24 overflow-hidden sm:px-6 lg:px-8"
    >
      {/* Gradient Background */}
      {/* <div className="absolute inset-0 bg-linear-to-br from-sky-50 via-blue-50 to-cyan-50"></div> */}

      {/* Animated Background Blobs */}
      {/* <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-sky-300 mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bg-blue-300 rounded-full top-40 right-10 w-72 h-72 mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute rounded-full -bottom-8 left-1/2 w-72 h-72 bg-cyan-300 mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div> */}

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <ServiceSectionHeader
          badgeText={badgeText}
          headline={headline}
          intro={description}
        />

        {/* Tech Stack Grid */}
        <div className="relative py-8 overflow-hidden">
          <div
            className="flex gap-6 min-w-[200%] animate-scroll-ltr"
            style={{ willChange: "transform" }}
          >
            {/* Duplicate the array twice for seamless infinite scroll */}
            {[...stack, ...stack].map((tech, index) => (
              <div
                key={index}
                className="relative w-40 group shrink-0"
                style={{
                  animation: "float 6s ease-in-out infinite",
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Card */}
                <div className="relative h-full p-6 transition-all duration-500 border shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl border-gray-200/50 hover:shadow-2xl hover:-translate-y-2">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 transition-all duration-500 bg-linear-to-br from-sky-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-sky-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl"></div>

                  {/* Content */}
                  <div className="relative flex flex-col items-center gap-4">
                    {/* Icon Container with Glow Effect */}
                    <div className="relative">
                      <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-linear-to-br from-sky-400 to-blue-400 rounded-xl blur-md group-hover:opacity-40"></div>
                      <div className="relative flex items-center justify-center w-16 h-16 transition-transform duration-500 bg-linear-to-br from-gray-50 to-gray-100 rounded-xl group-hover:scale-110">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={48}
                          height={48}
                          className="object-contain transition-all duration-500 drop-shadow-sm group-hover:drop-shadow-lg"
                        />
                      </div>
                    </div>

                    {/* Tech Name */}
                    <div className="text-center">
                      <span className="text-sm font-bold text-gray-800 transition-all duration-300 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-sky-600 group-hover:to-blue-600 group-hover:bg-clip-text">
                        {tech.name}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  {/* <div className="absolute bottom-0 w-8/12 h-1 transition-transform duration-500 transform scale-x-0 -translate-x-1/2 rounded-full left-1/2 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 group-hover:scale-x-100"></div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
