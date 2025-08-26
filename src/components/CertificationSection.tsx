import React from 'react';
import { ScrollAnimation, AnimatedText } from './ScrollAnimations';

const CertificationSection: React.FC = () => {
  return (
    <section className="w-full bg-black py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
              <span className="text-red-400 text-sm font-medium">Global Certifications</span>
            </div>
            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Switzer', sans-serif" }}>
                <span className="bg-gradient-to-r from-white via-gray-300 to-gray-200 bg-clip-text text-transparent">
                  Trusted & Certified
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={0.6}>
              <AnimatedText 
                className="text-gray-400 text-lg max-w-2xl mx-auto"
                delay={0.8}
                stagger={0.05}
              >
                Internationally recognized certifications that demonstrate our commitment to excellence in cybersecurity and quality management.
              </AnimatedText>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Main Content */}
          <ScrollAnimation animation="fadeInLeft" delay={0.3}>
            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-8 border border-white/10">
                <ScrollAnimation animation="fadeInUp" delay={0.5}>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Switzer', sans-serif" }}>
                    <span className="text-red-400">At Cybersecurity Umbrella</span>, we deliver enterprise-grade security solutions backed by global standards.
                  </h3>
                </ScrollAnimation>
                <ScrollAnimation animation="fadeInUp" delay={0.7}>
                  <AnimatedText 
                    className="text-gray-300 text-lg leading-relaxed mb-6"
                    delay={0.9}
                    stagger={0.05}
                  >
                    Our ISO 27001-certified information security and ISO 9001-certified quality management systems ensure your organization stays protected, compliant, and ahead of emerging threats while maintaining the highest standards of excellence.
                  </AnimatedText>
                </ScrollAnimation>
              
              {/* Key Benefits */}
              <ScrollAnimation animation="fadeInUp" delay={1.1}>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Enterprise Security Standards",
                    "Global Compliance", 
                    "Quality Assurance",
                    "Risk Management"
                  ].map((benefit, index) => (
                    <ScrollAnimation key={benefit} animation="fadeInUp" delay={1.3 + index * 0.1}>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
            </div>
          </ScrollAnimation>
          
          {/* Right Side - Certifications */}
          <ScrollAnimation animation="fadeInRight" delay={0.5}>
            <div className="space-y-8">
              <ScrollAnimation animation="fadeInUp" delay={0.7}>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    Globally certified in security and quality, we ensure trust and efficiency.
                  </h3>
                  <AnimatedText 
                    className="text-gray-400 text-base"
                    delay={0.9}
                    stagger={0.05}
                  >
                    Stay secure, agile, and prepared for the digital future with our certified solutions.
                  </AnimatedText>
                </div>
              </ScrollAnimation>
            
            {/* Certification Badges */}
            <ScrollAnimation animation="fadeInUp" delay={1.1}>
              <div className="flex flex-col sm:flex-row gap-6">
                {/* ISO 27001 Badge */}
                <ScrollAnimation animation="scaleIn" delay={1.3}>
                  <div className="flex-1 glass-card border border-yellow-500/30 rounded-2xl p-6 text-center group hover:border-yellow-400/50 hover:shadow-glow transition-all duration-300">
                <div className="w-28 h-28 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-yellow-900 text-xs font-bold">CERTIFIED</div>
                    <div className="text-yellow-900 text-xl font-bold">ISO 27001</div>
                    <div className="text-yellow-900 text-xs font-bold">CERTIFIED</div>
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2 text-lg">Information Security</h4>
                <p className="text-gray-400 text-sm">
                  Information Security Management System
                </p>
                <div className="mt-4 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-500 rounded-full mx-auto"></div>
              </div>
              </ScrollAnimation>
              
              {/* ISO 9001 Badge */}
              <ScrollAnimation animation="scaleIn" delay={1.5}>
                <div className="flex-1 glass-card border border-yellow-500/30 rounded-2xl p-6 text-center group hover:border-yellow-400/50 hover:shadow-glow transition-all duration-300">
                <div className="w-28 h-28 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-yellow-900 text-xs font-bold">CERTIFIED</div>
                    <div className="text-yellow-900 text-xl font-bold">ISO 9001</div>
                    <div className="text-yellow-900 text-xs font-bold">CERTIFIED</div>
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2 text-lg">Quality Management</h4>
                <p className="text-gray-400 text-sm">
                  Quality Management System
                </p>
                <div className="mt-4 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-500 rounded-full mx-auto"></div>
              </div>
              </ScrollAnimation>
            </div>
            </ScrollAnimation>
            
            {/* Trust Indicators */}
            <ScrollAnimation animation="fadeInUp" delay={1.7}>
              <div className="flex flex-wrap items-center gap-6 pt-6">
                {[
                  { color: "green", text: "Globally Recognized", delay: 0 },
                  { color: "blue", text: "Industry Standard", delay: 1 },
                  { color: "purple", text: "Enterprise Ready", delay: 2 }
                ].map((indicator, index) => (
                  <ScrollAnimation key={indicator.text} animation="fadeInUp" delay={1.9 + index * 0.1}>
                    <div className="flex items-center space-x-2">
                      <div 
                        className={`w-3 h-3 bg-${indicator.color}-500 rounded-full animate-pulse`} 
                        style={{ animationDelay: `${indicator.delay}s` }}
                      ></div>
                      <span className={`text-${indicator.color}-400 text-sm font-medium`}>{indicator.text}</span>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection; 