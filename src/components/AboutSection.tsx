import React from 'react';
import { Target, Users, Zap, Globe } from 'lucide-react';

const values = [
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Results-Driven',
    description: 'We focus on metrics that matter to your business, not vanity metrics that look good on paper.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Client-Centric',
    description: 'Your success is our success. We treat your business as if it were our own.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Innovation',
    description: 'We stay ahead of digital trends to give your business a competitive edge.',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Local Expertise, Global Mindset',
    description: 'South African roots with international digital marketing experience.',
  },
];

const AboutSection = () => {
  return (
    <section id="about\" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-indigo-600 font-medium">About J2W</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Why "Journey to Wealth" Exists</h2>
            <p className="text-gray-600 mb-6">
             36|  J2W was founded in 2025 with a simple mission: to help South African businesses grow through effective digital marketing strategies that deliver real results.            </p>
            <p className="text-gray-600 mb-6">
              We noticed that many businesses were being underserved by agencies that promised the world but delivered little. At J2W, we believe in transparency, integrity, and measurable results.
            </p>
            <p className="text-gray-600 mb-8">
              Our team combines local market knowledge with international expertise to create digital marketing strategies that work specifically for the South African context while meeting global standards.
            </p>
            <div className="flex items-center">
              <img
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Founder"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold"> Jaun Witbooi </h4>
                <p className="text-gray-500">Founder & CEO</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="J2W Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 z-10 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center mb-4">
                <div className="text-3xl font-bold text-indigo-600 mr-3">7</div>
                <div className="text-gray-800 font-medium">Years of Digital Marketing Excellence</div>
              </div>
              <div className="h-1 w-full bg-gray-100 mb-2">
                <div className="h-1 bg-indigo-600 w-3/4"></div>
              </div>
              <div className="text-sm text-gray-500">Helping businesses grow since 2018</div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-indigo-50 p-6 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
