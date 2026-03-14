import Link from "next/link";
import { FiStar } from "react-icons/fi";
import Button from "../Button";

export default function HeroSection() {
  return (
    <section className="relative px-4 pt-32 pb-24 overflow-hidden sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50">
        <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-blue-300/20 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-blue-300/20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute rounded-full bottom-20 left-1/2 w-96 h-96 bg-blue-300/20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Badge */}
        <div className="mb-8 text-center">
          {/* <span
            className="inline-block px-4 py-2 text-sm font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-400"
            style={{
              boxShadow: '0 6px 32px 0 rgba(56,189,248,0.18), 0 2px 12px 0 rgba(99,102,241,0.10)',
              transition: 'all 0.25s cubic-bezier(.4,2,.6,1)',
            }}
          >
            <FiStar className="inline-block w-4 h-4 mr-1 text-yellow-400" /> Innovative Software Solutions
          </span> */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-gradient-to-r from-blue-500 to-sky-500"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500"></span>
            </span>
            <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text">
              Product Engineering Studio
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="mt-8 mb-8 text-4xl font-bold text-center sm:text-5xl lg:text-7xl">
          <span className="block mb-2 text-gray-900">
            Launch Your Product Faster
          </span>
          <span className="block pb-4 font-bold text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text">
            With a Dedicated Engineering Team
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-4xl mx-auto mb-12 text-xl leading-relaxed text-center text-gray-700 sm:text-2xl">
          From MVPs to enterprise platforms, we build fast, scalable software
          using modern technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-4 mb-16 sm:flex-row">
          <Button variant="primary" href="/portfolio" className="max-w-[280px]">
            View Our Work
          </Button>
          <Button variant="secondary" href="/contact" className="max-w-[280px]">
            Book a Free Call
          </Button>
        </div>

        {/* Trust Indicators */}
        {/* <div className="flex flex-wrap justify-center gap-8 text-center">
          {['10+ Projects Delivered', 'Expert Team', 'Modern Tech Stack', '24/7 Support'].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-xl text-green-500">✓</span>
              <span className="font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

