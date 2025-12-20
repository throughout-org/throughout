export default function AboutIntroSection() {
  return (
    <div className="max-w-4xl mx-auto mb-12">
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

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: '50+', label: 'Projects' },
          { value: '99%', label: 'Satisfaction' },
          { value: '7+', label: 'Services' },
          { value: '24/7', label: 'Support' },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
