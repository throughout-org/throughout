export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Badge */}
        <div className="text-center mb-8">
          <span
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-sm font-semibold rounded-full shadow-lg"
            style={{
              boxShadow: '0 6px 32px 0 rgba(56,189,248,0.18), 0 2px 12px 0 rgba(99,102,241,0.10)',
              transition: 'all 0.25s cubic-bezier(.4,2,.6,1)',
            }}
          >
            ✨ Innovative Software Solutions
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-8 mt-8">
          <span className="block text-gray-900 mb-2">We Build</span>
          <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent pb-4 font-bold">
            Smart Digital Solutions
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Transform your ideas into powerful web and mobile applications with cutting-edge technology and expert engineering
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="/services"
            className="group relative px-8 py-4 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white text-lg font-extrabold rounded-full overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/30 backdrop-blur-md"
            style={{
              boxShadow: '0 6px 32px 0 rgba(56,189,248,0.18), 0 2px 12px 0 rgba(99,102,241,0.10)',
              transition: 'all 0.25s cubic-bezier(.4,2,.6,1)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Services
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="/contact"
            className="px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-full border-2 border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Trust Indicators */}
        {/* <div className="flex flex-wrap justify-center gap-8 text-center">
          {['10+ Projects Delivered', 'Expert Team', 'Modern Tech Stack', '24/7 Support'].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
