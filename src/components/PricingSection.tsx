import React from 'react';
import { Check, X } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: 'R2,999',
    period: '/month',
    description: 'Perfect for small businesses just getting started with digital marketing.',
    features: [
      'SEO Audit & Basic Optimization',
      'Social Media Management (2 platforms)',
      'Monthly Performance Report',
      'Google Business Profile Setup',
      'Basic Content Creation (4 posts/month)',
    ],
    notIncluded: [
      'PPC Campaign Management',
      'Advanced SEO Strategy',
      'Website Development',
      'Email Marketing',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: 'R5,999',
    period: '/month',
    description: 'Ideal for established businesses looking to expand their digital presence.',
    features: [
      'Comprehensive SEO Strategy',
      'Social Media Management (4 platforms)',
      'PPC Campaign Management',
      'Content Marketing (8 posts/month)',
      'Email Marketing (1 campaign/month)',
      'Bi-weekly Performance Reports',
      'Competitor Analysis',
    ],
    notIncluded: [
      'Custom Website Development',
      'Video Production',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Elite',
    price: 'R9,999',
    period: '/month',
    description: 'All-inclusive solution for businesses serious about dominating their market.',
    features: [
      'Advanced SEO Strategy & Implementation',
      'Full Social Media Management',
      'Premium PPC Campaign Management',
      'Custom Content Strategy',
      'Email Marketing Automation',
      'Custom Website Development',
      'Conversion Rate Optimization',
      'Weekly Strategy Calls',
      'Dedicated Account Manager',
    ],
    notIncluded: [],
    cta: 'Get Started',
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            Flexible packages designed to fit your business needs and budget. No hidden fees, just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden border ${
                plan.popular ? 'border-indigo-600 shadow-lg' : 'border-gray-100 shadow-sm'
              } relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-8">
                  <h4 className="font-medium text-sm text-gray-500 mb-3">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-400">
                        <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      : 'bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
              <div className="px-8 py-4 bg-gray-50 text-center">
                <p className="text-sm text-gray-500">No contracts. Cancel anytime.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-600 mb-6">
            Let's build a tailored digital marketing strategy to meet your specific business needs and budget.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;