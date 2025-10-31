import React from 'react';
import cyberPng from '../assets/cyber.png';

const CoreSecurityServices: React.FC = () => {
  const services = [
    {
      id: "01",
      title: "Advisory & Assurance",
      description: "We help organizations build strong cybersecurity foundations through expert advisory, robust governance, and practical controls. From preventing data leaks to ensuring backup readiness and compliance, we enable continuous improvement through policy guidance, risk tracking, and a clear maturity roadmap."
    },
    {
      id: "02", 
      title: "Assessment & Review",
      description: "Our assessments identify security gaps across mobile apps, cloud environments, and APIs. By aligning with risk tolerance and business goals, we strengthen defenses against evolving threats like phishing and smishing through structured reviews and architectural best practices."
    },
    {
      id: "03",
      title: "Automation & Development", 
      description: "We drive intelligent security transformation through AI, automation, and secure development practices. Our custom solutions offer speed, scalability, and resilience, empowering organizations to adapt rapidly to changing threat landscapes."
    },
    {
      id: "04",
      title: "Cyber-SOC",
      description: "Our modern Cyber-SOC integrates endpoint, cloud, and network security with real-time monitoring, patching, and threat intelligence. We detect, triage, and respond to threats, including zero-day exploits, through a proactive, technology-driven approach."
    },
    {
      id: "05",
      title: "Training & Awareness",
      description: "We cultivate a security-first culture through phishing simulations, targeted training, and timely insights. With continuous reporting and threat intelligence updates, we empower employees and stakeholders to stay alert and informed."
    }
  ];

  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
              <span className="text-white/70 text-xs font-medium">Core Services</span>
            </div>
            
            <div className="animate-fade-in-delay">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-white">
                We offer <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Core security services</span>
              </h2>
            </div>
            
            <div className="animate-fade-in-delay-2">
              <p className="text-white/70 text-base max-w-xl mx-auto">
                Comprehensive cybersecurity solutions designed to protect your organization's digital assets and infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content with Image and Services */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto mb-12">
          {/* Left Side - Image */}
          <div className="animate-fade-in-delay">
            <div className="relative order-2 md:order-1 h-full">
              <div className="relative z-10 h-full">
                <img 
                  src={cyberPng} 
                  alt="Cybersecurity Services" 
                  className="w-full h-full object-cover rounded-xl shadow-xl md:rounded-2xl md:shadow-2xl"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl md:rounded-2xl"></div>
              </div>
              {/* Background glow */}
              <div className="absolute inset-0 bg-white/10 blur-2xl rounded-xl md:rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Right Side - Services List (No Scrolling) */}
          <div className="animate-fade-in-delay-2">
            <div className="order-1 md:order-2 bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 h-full">
              <div className="space-y-4 md:space-y-6">
                {services.map((service, index) => (
                  <div 
                    key={service.id} 
                    className="group animate-fade-in"
                    style={{
                      animationDelay: `${0.7 + index * 0.1}s`
                    }}
                  >
                    {/* Service number and title */}
                    <div className="flex items-center mb-2 md:mb-3">
                      <div className="bg-white text-black rounded-lg w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-bold text-xs mr-2 md:mr-3">
                        {service.id}
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-white group-hover:text-white/70 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/70 leading-relaxed text-xs md:text-sm mb-3 md:mb-4 text-justify">
                      {service.description}
                    </p>
                    
                    {/* Divider */}
                    {index < services.length - 1 && (
                      <div className="w-full h-px bg-white/20"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreSecurityServices;