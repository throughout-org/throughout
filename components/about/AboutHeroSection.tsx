export default function AboutHeroSection() {
  return (
    <section className="relative px-4 pt-32 pb-20 overflow-hidden sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50">
        <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-blue-300/20 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-blue-300/20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute rounded-full bottom-20 left-1/2 w-96 h-96 bg-blue-300/20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Badge */}
        <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-2 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-blue-500 to-sky-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-500 to-sky-500"></span>
            </span>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                Who We Are & Why Partner With Us
            </span>
          </div>
        </div>
         

        {/* Main Heading */}
        <h1 className="mb-6 text-5xl font-bold text-center sm:text-6xl lg:text-7xl">
          <span className="block mb-2 text-gray-900">Engineering   <span className="block pt-2 pb-2 font-bold text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text">
            Exceptional
          </span>
Digital Experiences</span>
        
        </h1>

        {/* <div className="w-20 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-sky-600"></div> */}

        {/* Subheading */}
        <p className="max-w-4xl mx-auto mb-12 text-xl leading-relaxed text-center text-gray-700 sm:text-2xl">
         A dedicated team combining expertise, innovation, and integrity to transform your ideas into impactful digital products.
        </p>
      </div>
    </section>
  );
}
