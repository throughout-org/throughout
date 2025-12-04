export default function WhyChooseUsSection() {
  const benefits = [
    { title: 'Expert Team', description: 'Experienced developers with proven track records', icon: '👥', color: 'from-blue-500 to-cyan-500' },
    { title: 'Agile Process', description: 'Flexible and iterative development', icon: '🔄', color: 'from-purple-500 to-pink-500' },
    { title: 'Quality Code', description: 'Clean, maintainable, tested code', icon: '✅', color: 'from-green-500 to-emerald-500' },
    { title: 'On-Time Delivery', description: 'Meeting deadlines consistently', icon: '⏱️', color: 'from-orange-500 to-red-500' },
    { title: '24/7 Support', description: 'Always here when you need us', icon: '🛟', color: 'from-indigo-500 to-blue-500' },
    { title: 'Best Value', description: 'Competitive pricing, premium quality', icon: '💰', color: 'from-pink-500 to-rose-500' },
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Throoout</span>
        </h2>
        <p className="text-gray-600">Your success is our priority</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105"
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:rotate-12 transition-transform duration-300`}>
              {item.icon}
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
