export default function CoreStrengthsSection() {
  const strengths = [
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality or attention to detail.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🏗️',
      title: 'Clean Architecture',
      description: 'Maintainable and scalable code structure following industry best practices.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💬',
      title: 'Clear Communication',
      description: 'Regular updates and a transparent process keeping you informed at every step.',
      color: 'from-sky-500 to-pink-500'
    },
    {
      icon: '🚀',
      title: 'Modern Tech Stack',
      description: 'Latest tools, frameworks, and best practices for cutting-edge solutions.',
      color: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Our <span className="bg-gradient-to-r from-blue-600 to-sky-300 bg-clip-text text-transparent pb-4 font-bold">Core Strengths</span>
        </h2>
        <p className="text-gray-600">We combine fast execution with clean, maintainable code and transparent communication — all on a modern tech stack.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {strengths.map((strength, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
          >
            <div className={`w-16 h-16 bg-gradient-to-br from-blue-500 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              {strength.icon}
            </div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">{strength.title}</h3>
            <p className="text-sm text-gray-600">{strength.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
