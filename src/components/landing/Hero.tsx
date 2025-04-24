// components/Hero.tsx
import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build Something <span className="text-indigo-600">Incredible</span> Today
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Launch your project faster with our intuitive platform. Get started in minutes and scale seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/signup" className="inline-block bg-indigo-600 text-white font-medium py-3 px-6 rounded-md hover:bg-indigo-700 transition duration-300 text-center">
                Get Started for Free
              </Link>
              <Link href="#features" className="inline-block bg-white text-indigo-600 border border-indigo-600 font-medium py-3 px-6 rounded-md hover:bg-indigo-50 transition duration-300 text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="bg-indigo-100 rounded-lg p-2 shadow-lg">
              <div className="bg-white rounded-md overflow-hidden shadow-md">
                <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center">
                  <div className="flex space-x-2 ml-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-6 bg-gray-50">
                  {/* Placeholder for dashboard/app preview */}
                  <div className="h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md flex items-center justify-center">
                    <p className="text-white font-medium text-lg">Your Amazing Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;