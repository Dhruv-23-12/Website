import React from 'react';
import { ScrollAnimation, AnimatedText } from './ScrollAnimations';

// Replace the imageUrl values below with your final badge image URLs
const CERT_BADGES = [
  {
    id: 'iso-27001',
    imageUrl: 'src/assets/Asset 1 5.png',
    title: 'Information Security',
    description: 'Information Security Management System',
    alt: 'ISO 27001 Certified Badge'
  },
  {
    id: 'iso-9001',
    imageUrl: 'src/assets/9001 1.png',
    title: 'Quality Management',
    description: 'Quality Management System',
    alt: 'ISO 9001 Certified Badge'
  }
];

const CertificationSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white via-gray-100 to-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-black/5 via-transparent to-gray-500/5"></div>
      <div className="absolute top-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bg-black/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bg-gray-500/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-black/10 backdrop-blur-sm border border-black/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
              <span className="text-black/80 text-sm font-medium">Global Certifications</span>
            </div>
            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6" style={{ fontFamily: "'Switzer', sans-serif" }}>
                <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">Trusted & Certified</span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={0.6}>
              <AnimatedText 
                className="text-black/70 text-lg max-w-2xl mx-auto"
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
              <div className="bg-black/5 backdrop-blur-xl border border-black/10 rounded-2xl p-8 shadow-2xl">
                <ScrollAnimation animation="fadeInUp" delay={0.5}>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-6" style={{ fontFamily: "'Switzer', sans-serif" }}>
                    <span className="text-black">At Cybersecurity Umbrella</span>, we deliver enterprise-grade security solutions backed by global standards.
                  </h3>
                </ScrollAnimation>
                <ScrollAnimation animation="fadeInUp" delay={0.7}>
                  <AnimatedText 
                    className="text-black/70 text-lg leading-relaxed mb-6"
                    delay={0.9}
                    stagger={0.05}
                  >
                    Our ISO 27001-certified information security and ISO 9001-certified quality management systems ensure your organization stays protected, compliant, and ahead of emerging threats while maintaining the highest standards of excellence.
                  </AnimatedText>
                </ScrollAnimation>

                {/* Key Benefits */}
                <ScrollAnimation animation="fadeInUp" delay={1.1}>
                  <div className="grid md:grid-cols-2 gap-4">
                    {["Enterprise Security Standards", "Global Compliance", "Quality Assurance", "Risk Management"].map((benefit, index) => (
                      <ScrollAnimation key={benefit} animation="fadeInUp" delay={1.3 + index * 0.1}>
                        <div className="flex items-center space-x-3">
                          <div className="w-3.5 h-3.5 bg-black rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-black/80 text-sm">{benefit}</span>
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
                  <h3 className="text-xl font-semibold text-black">Globally certified in security and quality, we ensure trust and efficiency.</h3>
                  <AnimatedText 
                    className="text-black/70 text-base"
                    delay={0.9}
                    stagger={0.05}
                  >
                    Stay secure, agile, and prepared for the digital future with our certified solutions.
                  </AnimatedText>
                </div>
              </ScrollAnimation>

              {/* Certification Badges (pseudocode-style placeholders) */}
              <ScrollAnimation animation="fadeInUp" delay={1.1}>
                <div className="flex flex-col sm:flex-row gap-6">
                  {CERT_BADGES.map((badge, index) => (
                    <ScrollAnimation key={badge.id} animation="scaleIn" delay={1.3 + index * 0.2}>
                      <div className="flex-1 bg-black/5 backdrop-blur-xl border border-black/10 rounded-2xl p-6 text-center group hover:bg-black/10 hover:shadow-lg transition-all duration-300">
                        {/* IMAGE: raw badge without circular background */}
                        <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={badge.imageUrl}
                            alt={badge.alt}
                            className="max-h-28 w-auto mx-auto object-contain"
                          />
                        </div>
                        <h4 className="text-black font-semibold mb-2 text-lg">{badge.title}</h4>
                        <p className="text-black/70 text-sm">{badge.description}</p>
                        <div className="mt-4 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-500 rounded-full mx-auto"></div>
                      </div>
                    </ScrollAnimation>
                  ))}
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
                        <span className={`text-${indicator.color}-700 text-sm font-medium`}>{indicator.text}</span>
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