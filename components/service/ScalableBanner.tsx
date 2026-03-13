'use client';
import { FiStar } from "react-icons/fi";

interface ScalableBannerProps {
  headline: string;
  description: string;
}

export default function ScalableBanner({ headline, description }: ScalableBannerProps) {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br "></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-sky-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-sky-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-1000"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 border-4 border-blue-100/30 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-sky-100/30 rounded-lg animate-bounce-slow"></div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Content Container */}
        <div className="relative bg-white rounded-3xl p-12 sm:p-16 shadow-2xl border border-gray-100">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-sky-300 to-sky-200 opacity-20 blur-xl"></div>
          
          <div className="relative text-center space-y-6">
            {/* Badge */}
            {/* <div className="inline-block mb-4">
              <span className="px-5 py-2 bg-gradient-to-r from-blue-500 via-sky-500 to-sky-500 text-white text-sm font-bold rounded-full shadow-lg animate-pulse-subtle">
                <FiStar className="inline-block w-4 h-4 mr-1" /> Enterprise Ready
              </span>
            </div> */}
            
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-300 bg-clip-text text-transparent">
                {headline}
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              {description}
            </p>
            
            {/* Decorative Line */}
            <div className="flex justify-center items-center gap-3 pt-6">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-sky-500 to-sky-500 rounded-full animate-ping"></div>
              <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-sky-500 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom Floating Elements */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="w-3 h-3 bg-sky-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="w-3 h-3 bg-sky-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
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
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
