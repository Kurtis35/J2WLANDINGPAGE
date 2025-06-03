import React from 'react';
import { Search, BarChart2, Layout, DollarSign, Mail, FileCheck } from 'lucide-react';

const serviceItems = [
  {
    icon: <Search className="h-8 w-8" />,
    title: 'SEO & Google Ranking',
    description: 'Boost your visibility with strategic SEO that puts you at the top of search results.',
  },
  {
    icon: <BarChart2 className="h-8 w-8" />,
    title: 'Social Media Marketing',
    description: 'Engage your audience with compelling content and targeted campaigns across platforms.',
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: 'WordPress & Website Design',
    description: 'Custom, responsive websites that captivate visitors and drive conversions.',
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: 'PPC & Ad Campaigns',
    description: 'Maximize ROI with data-driven ad campaigns that target your ideal customers.',
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: 'Email Marketing',
    description: 'Nurture leads and retain customers with personalized email strategies.',
  },
  {
    icon: <FileCheck className="h-8 w-8" />,
    title: 'Content Strategy',
    description: 'Engage your audience with compelling, relevant content that drives action.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services\" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
          <p className="text-lg text-gray-600">
            Comprehensive digital marketing solutions to elevate your brand and drive measurable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-lg bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href="#contact"
                className="text-indigo-600 font-medium inline-flex items-center hover:text-indigo-800 transition-colors"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-colors"
          >
            Get a Custom Quote
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;