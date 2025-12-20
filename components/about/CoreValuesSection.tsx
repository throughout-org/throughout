export default function CoreValuesSection() {
  const values = [
    { title: 'Innovation', description: 'Embracing new technologies', icon: '💡', color: 'from-yellow-500 to-orange-500' },
    { title: 'Excellence', description: 'Delivering quality work', icon: '⭐', color: 'from-blue-500 to-cyan-500' },
    { title: 'Integrity', description: 'Building trust & honesty', icon: '🤝', color: 'from-purple-500 to-pink-500' },
    { title: 'Growth', description: 'Continuous improvement', icon: '🚀', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Core Values</span>
        </h2>
        <p className="text-gray-600">Principles that guide everything we do</p>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {values.map((value, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105"
          >
            <div className={`w-12 h-12 bg-gradient-to-br from-blue-200 to-cyan-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {value.icon}
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
            <p className="text-sm text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
