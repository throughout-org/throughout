"use client";

import Image from "next/image";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

export default function TechStackSection() {
  const badgeText = "TECHNOLOGY";
  const headline = "Our Tech Stack";
  const intro =
    "We work with industry-leading technologies to build modern, scalable solutions";

  const techStack = [
    { name: "React", icon: "/images/tech/react.svg" },
    { name: "Next.js", icon: "/images/tech/nextjs.svg" },
    { name: "Laravel", icon: "/images/tech/laravel.svg" },
    { name: "Node.js", icon: "/images/tech/nodejs.svg" },
    { name: "Python", icon: "/images/tech/python.svg" },
    { name: "Nest.js", icon: "/images/tech/nestjs.svg" },
    { name: "MySQL", icon: "/images/tech/mysql.svg" },
    { name: "PostgreSQL", icon: "/images/tech/postgresql.svg" },
    { name: "MongoDB", icon: "/images/tech/mongodb.svg" },
    { name: "Redis", icon: "/images/tech/redis.svg" },
    { name: "Docker", icon: "/images/tech/docker.svg" },
    { name: "AWS", icon: "/images/tech/aws.svg" },
    { name: "GCP", icon: "/images/tech/gcp.svg" },
    { name: "Kubernetes", icon: "/images/tech/kubernetes.svg" },
    { name: "Git", icon: "/images/tech/git.svg" },
    { name: "Tailwind", icon: "/images/tech/tailwind.svg" },
    { name: "Shopify", icon: "/images/tech/shopify.svg" },
    { name: "WordPress", icon: "/images/tech/wordpress.svg" },
    { name: "Stripe", icon: "/images/tech/stripe.svg" },
    { name: "OpenAI", icon: "/images/tech/openai.svg" },
  ];

  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="px-4 mx-auto mb-16 max-w-7xl sm:px-6 lg:px-8">
        <ServiceSectionHeader
          badgeText={badgeText}
          headline={headline}
          intro={intro}
        />
      </div>

      {/* Scrolling Tech Icons - Full Width */}
      <div className="relative py-8 overflow-hidden">
        <div className="flex gap-6 animate-scroll-left">
          {/* Duplicate the array twice for seamless infinite scroll */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className={`group relative flex-shrink-0 w-[160px] animate-float`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card */}
              <div className="relative h-full p-6 transition-all duration-500 border shadow-lg bg-white/80 backdrop-blur-sm rounded-4xl border-gray-200/50 hover:shadow-2xl hover:-translate-y-2">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-br from-sky-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-sky-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 rounded-4xl"></div>

                {/* Content */}
                <div className="relative flex flex-col items-center gap-4">
                  {/* Icon Container with Glow Effect */}
                  <div className="relative">
                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-white via-white to-gray-100 rounded-4xl blur-md group-hover:opacity-40"></div>
                    <div className="relative flex items-center justify-center w-16 h-16 transition-transform duration-500 bg-gradient-to-br rounded-4xl group-hover:scale-110">
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
                    <span className="text-sm font-bold text-gray-800 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-blue-600 group-hover:bg-clip-text">
                      {tech.name}
                    </span>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 w-8/12 h-1 transition-transform duration-500 transform scale-x-0 -translate-x-1/2 rounded-full left-1/2 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 group-hover:scale-x-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
