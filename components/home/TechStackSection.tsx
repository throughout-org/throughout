import Image from "next/image";
import ServiceSectionHeader from "@/components/service/ServiceSectionHeader";

export default function TechStackSection() {
  const badgeText = "TECHNOLOGY";
  const headline = "Technology Stack";
  const intro =
    "We work with proven technologies for fast, reliable, and maintainable product delivery.";

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
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader
          badgeText={badgeText}
          headline={headline}
          intro={intro}
        />
      </div>

      {/* Scrolling Tech Icons - Full Width */}
      <div className="relative overflow-hidden py-6">
        <div className="flex gap-6 animate-scroll-left">
          {/* Duplicate the array twice for seamless infinite scroll */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="group relative w-[144px] flex-shrink-0 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card */}
              <div className="relative h-full rounded-3xl border border-slate-200/70 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/10">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 rounded-3xl bg-sky-500/0 transition-all duration-300 group-hover:bg-sky-500/5"></div>

                {/* Content */}
                <div className="relative flex flex-col items-center gap-4">
                  {/* Icon Container with Glow Effect */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-slate-100 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={44}
                        height={44}
                        className="object-contain transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-md"
                      />
                    </div>
                  </div>

                  {/* Tech Name */}
                  <div className="text-center">
                    <span className="text-sm font-bold text-slate-800 transition-colors duration-300 group-hover:text-sky-700">
                      {tech.name}
                    </span>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-1/2 h-1 w-8/12 -translate-x-1/2 scale-x-0 rounded-full bg-sky-500 transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
