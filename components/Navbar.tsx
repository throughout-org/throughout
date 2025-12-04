import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Image 
              src="/images/logo.png" 
              alt="Throoout Logo" 
              width={280}
              height={80}
              className="h-15 w-auto"
              priority
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-500 transition-colors">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-500 transition-colors">About</a>
            <a href="/services" className="text-gray-700 hover:text-blue-500 transition-colors">Services</a>
            <a href="/why-us" className="text-gray-700 hover:text-blue-500 transition-colors">Why Us</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-500 transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
