import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-indigo-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute right-0 top-0 h-full w-1/2 translate-x-1/2 transform text-indigo-500 opacity-20"
          fill="none"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M184 0L226 42L268 0L310 42L352 0L394 42L436 0L478 42L520 0V520L478 478L436 520L394 478L352 520L310 478L268 520L226 478L184 520L142 478L100 520L58 478L16 520L-26 478L-68 520L-110 478L-152 520L-194 478L-236 520V0L-194 42L-152 0L-110 42L-68 0L-26 42L16 0L58 42L100 0L142 42L184 0Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="100%" height="100%" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow? Let's Build Your Digital Empire.
          </h2>
          <p className="text-indigo-100 text-lg mb-10">
            Take the first step towards transforming your online presence and growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium flex items-center justify-center hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl"
            >
              Book a Free Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent text-white border border-white rounded-lg font-medium flex items-center justify-center hover:bg-indigo-700 transition-all"
            >
              Send Me a Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;