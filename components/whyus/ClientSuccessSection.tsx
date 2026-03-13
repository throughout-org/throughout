import { FiTarget, FiStar, FiDollarSign, FiZap } from 'react-icons/fi';

export default function ClientSuccessSection() {
  const stats = [
    { value: '50+', label: 'Projects Completed', icon: <FiTarget /> },
    { value: '99%', label: 'Client Satisfaction', icon: <FiStar /> },
    { value: '45%', label: 'Cost Reduction', icon: <FiDollarSign /> },
    { value: '3x', label: 'Faster Delivery', icon: <FiZap /> },
  ];

  const testimonials = [
    {
      quote: 'Throoout delivered our project on time and exceeded our expectations. Their team is professional and highly skilled.',
      author: 'Tech Startup CEO',
      rating: 5
    },
    {
      quote: 'The quality of code and attention to detail is outstanding. Best development partner we\'ve worked with.',
      author: 'E-commerce Business Owner',
      rating: 5
    },
    {
      quote: 'Excellent communication throughout the project. They made the entire process smooth and stress-free.',
      author: 'Mobile App Founder',
      rating: 5
    },
  ];

  return (
    <div>
      {/* Success Metrics */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Proven <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-gray-600">Numbers that speak for themselves</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Testimonials */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            What <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-gray-600">Real feedback from real clients</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
