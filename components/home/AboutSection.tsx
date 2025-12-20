export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">Throoout</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Main Description */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
              We are a dedicated engineering team passionate about crafting exceptional digital experiences. 
              Our expertise spans across modern web and mobile technologies, helping startups and businesses transform their ideas into reality.
            </p>

            {/* Specialization Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {[
                { label: 'Web Applications', color: 'from-blue-500 to-cyan-500' },
                { label: 'Mobile Apps', color: 'from-sky-500 to-pink-500' },
                { label: 'E-Commerce', color: 'from-orange-500 to-red-500' },
                { label: 'AI Solutions', color: 'from-green-500 to-emerald-500' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 rounded-lg bg-gradient-to-r ${item.color} text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  {item.label}
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-600 text-center leading-relaxed">
              We deliver products that are <span className="font-semibold text-gray-900">functional</span>, <span className="font-semibold text-gray-900">scalable</span>, and <span className="font-semibold text-gray-900">future-proof</span>.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
}
