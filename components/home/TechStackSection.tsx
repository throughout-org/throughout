'use client';

import Image from 'next/image';

export default function TechStackSection() {
  const techStack = [
    { name: 'React', icon: '/images/tech/react.svg' },
    { name: 'Next.js', icon: '/images/tech/nextjs.svg' },
    { name: 'Laravel', icon: '/images/tech/laravel.svg' },
    { name: 'Node.js', icon: '/images/tech/nodejs.svg' },
    { name: 'Python', icon: '/images/tech/python.svg' },
    { name: 'Nest.js', icon: '/images/tech/nestjs.svg' },
    { name: 'MySQL', icon: '/images/tech/mysql.svg' },
    { name: 'PostgreSQL', icon: '/images/tech/postgresql.svg' },
    { name: 'MongoDB', icon: '/images/tech/mongodb.svg' },
    { name: 'Redis', icon: '/images/tech/redis.svg' },
    { name: 'Docker', icon: '/images/tech/docker.svg' },
    { name: 'AWS', icon: '/images/tech/aws.svg' },
    { name: 'GCP', icon: '/images/tech/gcp.svg' },
    { name: 'Kubernetes', icon: '/images/tech/kubernetes.svg' },
    { name: 'Git', icon: '/images/tech/git.svg' },
    { name: 'Tailwind', icon: '/images/tech/tailwind.svg' },
    { name: 'Shopify', icon: '/images/tech/shopify.svg' },
    { name: 'WordPress', icon: '/images/tech/wordpress.svg' },
    { name: 'Stripe', icon: '/images/tech/stripe.svg' },
    { name: 'OpenAI', icon: '/images/tech/openai.svg' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gray-900">Our</span>{' '}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent pb-4 font-bold">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We work with industry-leading technologies to build modern, scalable solutions
          </p>
        </div>
      </div>

      {/* Scrolling Tech Icons - Full Width */}
      <div className="relative overflow-hidden py-8">
        <div className="flex gap-6 animate-scroll-left">
          {/* Duplicate the array twice for seamless infinite scroll */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div 
              key={index}
              className={`group relative flex-shrink-0 w-[160px] animate-float`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card */}
              <div className="relative h-full p-6 bg-white/80 backdrop-blur-sm rounded-4xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-sky-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 rounded-4xl transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative flex flex-col items-center gap-4">
                  {/* Icon Container with Glow Effect */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-100 rounded-4xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br  rounded-4xl group-hover:scale-110 transition-transform duration-500">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="object-contain drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Tech Name */}
                  <div className="text-center">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {tech.name}
                    </span>
                  </div>
                </div>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8/12 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Global Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.85;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
          display: flex;
          width: fit-content;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
    

  );
}
