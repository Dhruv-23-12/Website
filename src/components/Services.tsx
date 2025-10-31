import React from 'react';
import { Code, Shield, Smartphone, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Solutions',
      description: 'Tailored applications built with cutting-edge technologies to solve your unique business challenges.',
      features: ['Full-stack Development', 'API Integration', 'Database Design', 'Cloud Architecture']
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security audits, compliance frameworks, and protection against modern threats.',
      features: ['Security Audits', 'GDPR Compliance', 'Penetration Testing', 'Risk Assessment']
    },
    {
      icon: Smartphone,
      title: 'Mobile & Web Apps',
      description: 'Cross-platform mobile and progressive web applications with exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Progressive Web Apps', 'UI/UX Design']
    },
    {
      icon: Building2,
      title: 'Enterprise SaaS Platforms',
      description: 'Scalable software-as-a-service platforms designed for enterprise-level performance.',
      features: ['Multi-tenant Architecture', 'Auto-scaling', 'Analytics Dashboard', 'Enterprise Integration']
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-full mb-4">
              Our Expertise
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive software solutions tailored to your business needs
          </p>
          <div className="flex justify-center">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold group"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white border border-gray-200 p-10 rounded-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-black relative overflow-hidden"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="bg-black text-white p-4 rounded-sm mr-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-4 group/item">
                      <div className="w-2 h-2 bg-black rounded-full group-hover/item:scale-125 transition-transform"></div>
                      <span className="text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;