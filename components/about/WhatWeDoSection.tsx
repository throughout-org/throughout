export default function WhatWeDoSection() {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications',
      icon: '💻',
      color: 'from-blue-200 to-cyan-50'
    },
    {
      title: 'Mobile Apps',
      description: 'iOS & Android native apps',
      icon: '📱',
      color: 'from-blue-200 to-cyan-50'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable infrastructure',
      icon: '☁️',
      color: 'from-blue-200 to-cyan-50'
    },
    {
      title: 'AI & ML',
      description: 'Intelligent automation',
      icon: '🤖',
      color: 'from-blue-200 to-cyan-50'
    },
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          What <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">We Do</span>
        </h2>
        <p className="text-gray-600">Comprehensive technology solutions for modern businesses</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
          >
            <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              {service.icon}
            </div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
            <div className={`mt-4 inline-flex items-center gap-1 text-xs font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
              Learn More
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
