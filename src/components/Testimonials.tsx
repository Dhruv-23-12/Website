import React from 'react';
import { Quote, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Their team delivered exceptional results, transforming our legacy system into a modern, scalable platform. The attention to security and performance was outstanding.",
      name: "Sarah Johnson",
      title: "CTO",
      company: "TechCorp Industries",
    },
    {
      quote: "Working with this team was a game-changer. They not only met our technical requirements but also provided strategic insights that improved our business processes.",
      name: "Michael Chen",
      title: "VP of Engineering",
      company: "InnovateX",
    },
    {
      quote: "The cybersecurity audit they conducted revealed critical vulnerabilities we weren't aware of. Their comprehensive approach saved us from potential disasters.",
      name: "Emily Rodriguez",
      title: "CISO",
      company: "SecureBank",
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-4">
              Testimonials
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            Client Testimonials
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            What our clients say about working with us
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-gray-50 p-10 rounded-sm group hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-black opacity-20 group-hover:opacity-30 transition-opacity" />
              
              <blockquote className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed relative z-10 font-medium">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-5">
                <div className="relative w-14 h-14">
                  <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <User className="w-7 h-7" />
                  </div>
                  {testimonial.image && testimonial.image.trim() !== '' && (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="absolute inset-0 w-14 h-14 rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 font-medium">{testimonial.title}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;