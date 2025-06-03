import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-indigo-600">
              J2W
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#why-choose-us"
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#portfolio"
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-5 py-2 rounded-md flex items-center text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a
              href="#services"
              className="block py-2 text-base font-medium hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#why-choose-us"
              className="block py-2 text-base font-medium hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Why Choose Us
            </a>
            <a
              href="#portfolio"
              className="block py-2 text-base font-medium hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#pricing"
              className="block py-2 text-base font-medium hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#about"
              className="block py-2 text-base font-medium hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-2 text-base font-medium bg-indigo-600 text-white px-4 rounded-md hover:bg-indigo-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;