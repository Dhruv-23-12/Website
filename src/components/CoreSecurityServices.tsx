import React from 'react';
import passImage from '@/assets/pass.png';
import { ScrollAnimation, AnimatedText } from './ScrollAnimations';

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
        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
              <span className="text-red-400 text-xs font-medium">Core Services</span>
            </div>
            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Switzer', sans-serif" }}>
                We offer Core security services
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={0.6}>
              <AnimatedText 
                className="text-gray-400 text-base max-w-xl mx-auto"
                delay={0.8}
                stagger={0.05}
              >
                Comprehensive cybersecurity solutions designed to protect your organization's digital assets and infrastructure.
              </AnimatedText>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
        
        {/* Main Content with Image and Services */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto mb-12">
          
          {/* Left Side - Image */}
          <ScrollAnimation animation="fadeInLeft" delay={0.3}>
            <div className="relative order-2 md:order-1">
              <div className="relative z-10">
                <img 
                  src={passImage} 
                  alt="Cybersecurity Services" 
                  className="w-full h-auto rounded-xl shadow-xl md:rounded-2xl md:shadow-2xl"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl md:rounded-2xl"></div>
              </div>
              {/* Background glow */}
              <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-xl md:rounded-2xl -z-10"></div>
            </div>
          </ScrollAnimation>
          
          {/* Right Side - Services in Scrollable Box */}
          <ScrollAnimation animation="fadeInRight" delay={0.5}>
            <div className="order-1 md:order-2 bg-gray-900/50 border border-gray-800 rounded-xl p-4 md:p-6 h-64 md:h-80 lg:h-96 overflow-y-auto hide-scrollbar" style={{
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* Internet Explorer 10+ */
            }}>
              <div className="space-y-4 md:space-y-6">
                {services.map((service, index) => (
                  <ScrollAnimation key={service.id} animation="fadeInUp" delay={0.7 + index * 0.1}>
                    <div className="group">
                  {/* Service number and title */}
                  <div className="flex items-center mb-2 md:mb-3">
                    <div className="bg-red-500 text-white rounded-lg w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-bold text-xs mr-2 md:mr-3">
                      {service.id}
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-xs md:text-sm mb-3 md:mb-4">
                    {service.description}
                  </p>
                  
                  {/* Divider */}
                  {index < services.length - 1 && (
                    <div className="w-full h-px bg-gray-700"></div>
                  )}
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
        

      </div>
    </section>
  );
};

export default CoreSecurityServices; 