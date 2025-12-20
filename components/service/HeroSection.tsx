"use client";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA: string;
  badgeText?: string;
  trustIndicators?: string[];
}

export default function HeroSection({ 
  headline, 
  subheadline, 
  primaryCTA, 
  secondaryCTA,
  badgeText = "Trendy Design",
  trustIndicators = ["Free Consultation", "No Commitment Required", "Expert Team"]
}: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-sky-50 to-pink-50">
        {/* Animated Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-sky-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-sky-400/30 to-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-blue-500 to-sky-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-500 to-sky-500"></span>
            </span>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
              {badgeText}
            </span>
          </div>

          {/* Headline with Gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="block text-gray-900 mb-2">{headline.split(' ').slice(0, -2).join(' ')}</span>
            <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent pb-4 font-bold">
              {headline.split(' ').slice(-2).join(' ')}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed animate-fade-in-delay">
            {subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <a
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-sky-400 to-blue-600 text-white font-bold rounded-full overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                {primaryCTA}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            {/* <a
              href="#learn-more"
              className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 font-bold rounded-full border-2 border-gray-200 hover:border-sky-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              {secondaryCTA}
              <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a> */}
          </div>

          {/* Trust Indicators */}
          {/* <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600 animate-fade-in-delay-3">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{indicator}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.6s ease-out 0.4s both;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 0.6s ease-out 0.6s both;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
