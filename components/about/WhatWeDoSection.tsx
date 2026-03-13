import { FiMonitor, FiSmartphone, FiCloud, FiCpu } from "react-icons/fi";

export default function WhatWeDoSection() {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications',
      icon: <FiMonitor />,
      color: 'from-blue-200 to-cyan-50'
    },
    {
      title: 'Mobile Apps',
      description: 'iOS & Android native apps',
      icon: <FiSmartphone />,
      color: 'from-blue-200 to-cyan-50'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable infrastructure',
      icon: <FiCloud />,
      color: 'from-blue-200 to-cyan-50'
    },
    {
      title: 'AI & ML',
      description: 'Intelligent automation',
      icon: <FiCpu />,
      color: 'from-blue-200 to-cyan-50'
    },
  ];

  return (
    <div className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-900">
          What <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">We Do</span>
        </h2>
        <p className="text-gray-600">Comprehensive technology solutions for modern businesses</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative p-6 transition-all duration-300 bg-white border border-gray-100 shadow-md group rounded-2xl hover:shadow-xl hover:-translate-y-2"
          >
            <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              {service.icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900">{service.title}</h3>
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
