export default function WhyChooseUsSection() {
  const features = [
    { icon: '⚡', title: 'Fast Delivery', description: 'Quick turnaround without compromising quality' },
    { icon: '🏗️', title: 'Clean Architecture', description: 'Maintainable and scalable code structure' },
    { icon: '💬', title: 'Reliable Communication', description: 'Clear updates and transparent process' },
    { icon: '🚀', title: 'Modern Technologies', description: 'Latest tools and best practices' }
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-3 text-3xl">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
