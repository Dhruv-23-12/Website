import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white transform rotate-12 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-white transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Ready to Build Your Next Big Idea?
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Let's discuss your project and turn your vision into reality with our expert development team.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-white text-black px-12 py-5 rounded-sm font-semibold text-xl transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-2xl flex items-center gap-3">
            Book a Call
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group border-2 border-white text-white px-12 py-5 rounded-sm font-semibold text-xl transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-2xl">
            View Our Work
          </button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 mb-4">Or reach out directly</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400">
            <a href="mailto:hello@devcorp.com" className="hover:text-white transition-colors font-medium">
              hello@devcorp.com
            </a>
            <span className="hidden sm:block">•</span>
            <a href="tel:+15551234567" className="hover:text-white transition-colors font-medium">
              +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;