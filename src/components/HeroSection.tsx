import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 -left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-800 font-medium text-sm mb-8 animate-fade-in">
            <Zap className="h-4 w-4 mr-2" />
            Digital Marketing Agency Based in South Africa
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent animate-fade-in-up">
            Turn Clicks Into Customers – Grow With J2W
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 animate-fade-in-up animation-delay-300">
            Expert Digital Marketing for Real Business Growth. We help South African businesses and global brands increase their online presence and convert leads.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
            <a
              href="#contact"
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium flex items-center justify-center hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
            >
              Get a Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#pricing"
              className="px-8 py-4 bg-white text-indigo-600 border border-indigo-200 rounded-lg font-medium flex items-center justify-center hover:bg-indigo-50 transition-all"
            >
              See Our Packages
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 opacity-80 animate-fade-in animation-delay-900">
            <img 
              src="https://images.pexels.com/photos/15031961/pexels-photo-15031961/free-img.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Client logo" 
              className="h-10 object-contain filter grayscale" 
            />
            <img 
              src="https://images.pexels.com/photos/15032020/pexels-photo-15032020/free-img.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Client logo" 
              className="h-10 object-contain filter grayscale" 
            />
            <img 
              src="https://images.pexels.com/photos/15032198/pexels-photo-15032198/free-img.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Client logo" 
              className="h-10 object-contain filter grayscale hidden sm:block" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;