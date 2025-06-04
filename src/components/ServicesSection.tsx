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
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;