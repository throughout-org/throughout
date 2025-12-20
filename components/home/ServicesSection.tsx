import Link from 'next/link';
import { services } from '@/data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white text-sm font-semibold rounded-full shadow-lg mb-6">
            What We Do
          </span> */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent pb-4 font-bold">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From web applications to AI solutions, we cover the full spectrum of modern software development
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group relative"
            >
              {/* Compact Card */}
              <div className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-transparent shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                {/* Gradient Accent Border */}
                <div className={`absolute inset-0 bg-gradient-to-br via-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="absolute inset-[1px] bg-white rounded-2xl"></div>
                
                {/* Hover Arrow Overlay */}
                <div className={`absolute pt-1 top-4 right-4 w-10 h-10 bg-gradient-to-br via-blue-400 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300`}>
                  <span className="text-white text-xl pb-2 font-bold">→</span>
                </div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br via-blue-200 rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-blue-200 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {service.hero.subheadline.substring(0, 80)}...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
