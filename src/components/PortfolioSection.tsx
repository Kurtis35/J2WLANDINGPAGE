import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce SEO Success',
    category: 'SEO',
    description: 'Increased organic traffic by 215% and conversions by 180% for a major South African online retailer.',
    image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    results: ['215% organic traffic increase', '180% conversion rate improvement', '3x ROI on marketing spend'],
  },
  {
    title: 'Local Business Growth',
    category: 'Local SEO',
    description: 'Transformed online presence for a Cape Town restaurant, resulting in 300% more bookings within 6 months.',
    image: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    results: ['300% increase in bookings', 'Top 3 Google Maps ranking', '4.8-star average review rating'],
  },
  {
    title: 'Social Media Campaign',
    category: 'Social Media',
    description: 'Generated 15,000+ leads for a B2B software company through targeted LinkedIn and Facebook campaigns.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    results: ['15,000+ qualified leads', '27% conversion to demo', '22% reduction in CAC'],
  },
  {
    title: 'E-commerce Website Redesign',
    category: 'Web Design',
    description: 'Revamped outdated website, resulting in 45% lower bounce rate and 85% increase in mobile conversions.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    results: ['45% lower bounce rate', '85% increase in mobile conversions', '3.2s faster page load time'],
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Success Stories</h2>
          <p className="text-lg text-gray-600">
            Real results for real businesses. See how we've helped companies like yours achieve their digital marketing goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-6">
                  <h4 className="font-medium text-sm text-gray-500 mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm">
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;