import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop - 100,
          behavior: 'smooth'
        });
        setIsOpen(false);
      }
    }
  };

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
              onClick={handleNavClick}
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#why-choose-us"
              onClick={handleNavClick}
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#portfolio"
              onClick={handleNavClick}
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#pricing"
              onClick={handleNavClick}
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              onClick={handleNavClick}
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
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
              onClick={handleNavClick}
              className="block py-2 text-base font-medium hover:text-indigo-600"
            >
              Services
            </a>
            <a
              href="#why-choose-us"
              onClick={handleNavClick}
              className="block py-2 text-base font-medium hover:text-indigo-600"
            >
              Why Choose Us
            </a>
            <a
              href="#portfolio"
              onClick={handleNavClick}
              className="block py-2 text-base font-medium hover:text-indigo-600"
            >
              Portfolio
            </a>
            <a
              href="#pricing"
              onClick={handleNavClick}
              className="block py-2 text-base font-medium hover:text-indigo-600"
            >
              Pricing
            </a>
            <a
              href="#about"
              onClick={handleNavClick}
              className="block py-2 text-base font-medium hover:text-indigo-600"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="block py-2 text-base font-medium bg-indigo-600 text-white px-4 rounded-md hover:bg-indigo-700 transition-colors"
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