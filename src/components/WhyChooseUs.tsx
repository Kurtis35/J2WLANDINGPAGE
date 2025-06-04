import React from 'react';
import { Star, Users, Award, TrendingUp } from 'lucide-react';

const statsItems = [
  {
    icon: <Star className="h-7 w-7" />,
    value: '5-Star',
    label: 'Client Feedback',
  },
  {
    icon: <Users className="h-7 w-7" />,
    value: '25+',
    label: 'Successful Campaigns',
  },
  {
    icon: <Award className="h-7 w-7" />,
    value: '100%',
    label: 'Satisfaction Guarantee',
  },
  {
    icon: <TrendingUp className="h-7 w-7" />,
    value: '3x',
    label: 'Average ROI Increase',
  },
];

const testimonials = [
  {
    content:
      'Working with J2W transformed our online presence. Our organic traffic increased by 143% in just 3 months, and our conversion rate doubled!',
    author: 'Sarah Johnson',
    role: 'CEO, TechSolutions SA',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    content:
      'The J2W team delivers results, not promises. Their SEO and PPC campaigns helped us expand into new markets and increase our revenue by 70% year-over-year.',
    author: 'Michael Ndlovu',
    role: 'Marketing Director, EcoShop',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    content:
      'From website redesign to ongoing marketing support, J2W has been our trusted partner for growth. They understand the South African market like no other agency.',
    author: 'Lerato Molefe',
    role: 'Founder, AfriStyle',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us\" className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose J2W</h2>
          <p className="text-lg text-gray-600">
            Based in South Africa, serving worldwide with expertise, integrity, and proven results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {statsItems.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center"
            >
              <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4 text-indigo-600">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-12">What Our Clients Say</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm relative"
            >
              <div className="absolute -top-5 left-8">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.3333 13.3333H30V20H23.3333V13.3333ZM10 13.3333H16.6667V20H10V13.3333ZM23.3333 30C23.3333 26.6667 25 25 28.3333 25H30V20H23.3333V30ZM10 30C10 26.6667 11.6667 25 15 25H16.6667V20H10V30Z"
                    fill="#4F46E5"
                    fillOpacity="0.1"
                  />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 pt-4">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;