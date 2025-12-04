export default function WhyChooseUsSection() {
  const features = [
    { icon: '⚡', title: 'Fast Delivery', description: 'Quick turnaround without compromising quality' },
    { icon: '🏗️', title: 'Clean Architecture', description: 'Maintainable and scalable code structure' },
    { icon: '💬', title: 'Reliable Communication', description: 'Clear updates and transparent process' },
    { icon: '🚀', title: 'Modern Technologies', description: 'Latest tools and best practices' }
  ];

  return (
    <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg mb-6">
            Why Us
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-sky-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
