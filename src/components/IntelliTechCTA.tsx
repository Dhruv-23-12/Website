import React, { useState } from 'react';
import finalSvg from '../assets/final.svg';
import riskProductSvg from '../assets/RISK PRODCUT.svg';
import cxotrainigSvg from '../assets/CXO training.png';
import scoSvg from '../assets/soc.png';

// Type definitions
interface ProductTab {
  id: string;
  name: string;
  title: string;
  description: string;
}

const IntelliTechSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cxo-map');

  const productTabs: ProductTab[] = [
    {
      id: 'cxo-map',
      name: 'CXO MAP',
      title: 'Get Started With CXO MAP',
      description: 'A web/native platform that automates security audits with AI-driven precision—boosting efficiency by up to 90% and supporting real-time oversight through a dynamic CISO dashboard.',
    },
    {
      id: 'cxo-risk',
      name: 'CXO RISK',
      title: 'Get Started With CXO RISK',
      description: 'Advanced risk assessment and management platform that identifies vulnerabilities and provides comprehensive risk analysis.',
    },
    {
      id: 'cxo-training',
      name: 'CXO TRAINING',
      title: 'Get Started With CXO TRAINING',
      description: 'Interactive training modules designed to enhance cybersecurity awareness and skills across organizational levels.',
    },
    {
      id: 'soc-central',
      name: 'SOC CENTRAL',
      title: 'Get Started With SOC CENTRAL',
      description: 'Centralized security operations center that provides 24/7 monitoring, threat detection, and incident response.',
    },
  ];

  const activeProduct = productTabs.find(tab => tab.id === activeTab) || productTabs[0];

  // Dashboard mockup data
  const dashboardItems = [
    { title: 'Gap Analysis', icon: '📊', active: true },
    { title: 'Risk Assessment', icon: '🔍', active: false },
    { title: 'Compliance Questionnaire', icon: '📋', active: false },
    { title: 'Security Gap', icon: '🔒', active: false },
    { title: 'Asset Management', icon: '💼', active: false },
    { title: 'Vulnerability Assessment', icon: '🛡️', active: false },
    { title: 'Network Security Assessment', icon: '🌐', active: false },
    { title: 'Incident Response Plan', icon: '🚨', active: false },
    { title: 'Security Awareness Training', icon: '🎓', active: false },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: '#ffffff'
    }}>
      
      {/* Animated Background Lines disabled to keep gradients only inside glass card */}
      <div className="absolute inset-0 opacity-20 hidden"></div>

      {/* Section-wide Vector removed as per request */}

      <div className="relative z-10 py-10 sm:py-16 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight text-black">
              Our <span style={{ color: '#dc2626' }}>Products</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-black max-w-4xl mx-auto leading-relaxed font-light">
              Discover innovative solutions that empower your business with cutting-edge technology and intelligent automation designed for tomorrow's challenges.
            </p>
          </div>

          {/* Product Tabs - pill container with subtle border */}
          <div className="mb-10 sm:mb-16 flex justify-center px-1 max-w-full overflow-x-auto">
            <div
              className="inline-flex items-center gap-2 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap"
              style={{
                background: 'linear-gradient(180deg, rgba(240, 240, 240, 0.8) 0%, rgba(220, 220, 220, 0.6) 100%)',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 6px 20px rgba(0,0,0,0.1)'
              }}
            >
              {productTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-black'
                      : 'text-gray-700 hover:text-black'
                  }`}
                  style={{
                    background: activeTab === tab.id
                      ? 'rgba(0, 0, 0, 0.1)'
                      : 'transparent'
                  }}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Card with Enhanced Glassmorphism */}
          <div className="relative">
            <div 
              className="backdrop-blur-xl rounded-3xl shadow-2xl p-4 sm:p-6 md:p-12 relative z-10 overflow-visible"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.12) 0%, 
                    rgba(255, 255, 255, 0.06) 25%,
                    rgba(220, 38, 38, 0.08) 50%,
                    rgba(255, 255, 255, 0.04) 75%,
                    rgba(255, 255, 255, 0.08) 100%
                  )
                `,
                
              }}
            >
              {/* Backgrounds clipped to rounded card while allowing content overflow */}
              <div className="absolute inset-0 z-0 pointer-events-none rounded-3xl overflow-hidden">
                {/* In-card glow background (Ellipse 20.svg) */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}Ellipse 20.svg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.6,
                    filter: 'brightness(1.5) contrast(1.2)'
                  }}
                ></div>

                {/* In-card Vector lines */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}Vector.svg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    transform: 'scale(1.05) translateY(-20px)',
                    opacity: 0.8,
                    filter: 'brightness(0.3) invert(0)'
                  }}
                ></div>
              </div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                
                {/* Left Content */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6">
                      {activeProduct.title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 font-light">
                      {activeProduct.description}
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button 
                      className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-[15px] sm:text-[16px] text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                        boxShadow: '0 10px 25px rgba(220, 38, 38, 0.3)'
                      }}
                    >
                      Get Started
                    </button>
                    <button 
                      className="flex items-center justify-center gap-3 text-gray-700 hover:text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-300 group font-medium text-[15px] sm:text-[16px] border"
                      style={{
                        background: 'rgba(240, 240, 240, 0.95)',
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <span>View Pricing</span>
                      <svg 
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Right Side - Conditional Content */}
                <div className="relative">
                  {activeTab === 'cxo-map' ? (
                    <div className="w-full">
                      <img
                        src={finalSvg}
                        alt="CXO MAP"
                        className="w-full h-auto block bg-transparent"
                        style={{ backgroundColor: 'transparent' }}
                      />
                    </div>
                  ) : activeTab === 'cxo-risk' ? (
                    <div className="w-full">
                      <img
                        src={riskProductSvg}
                        alt="CXO Risk"
                        className="w-full h-auto block bg-transparent"
                        style={{ backgroundColor: 'transparent' }}
                      />
                    </div>
                  ) : activeTab === 'cxo-training' ? (
                    <div className="w-full">
                      <img
                        src={cxotrainigSvg}
                        alt="CXO Training"
                        className="w-full h-auto block bg-transparent"
                        style={{ backgroundColor: 'transparent' }}
                      />
                    </div>
                  ) : activeTab === 'soc-central' ? (
                    <div className="w-full">
                      <img
                        src={scoSvg}
                        alt="SOC Central"
                        className="w-full h-auto block bg-transparent"
                        style={{ backgroundColor: 'transparent' }}
                      />
                    </div>
                  ) : (
                    <div className="relative transform rotate-3 hover:rotate-1 transition-transform duration-700">
                      {/* Phone/Tablet Frame with Glass Effect */}
                      <div 
                        className="rounded-3xl p-6 shadow-2xl border"
                        style={{
                          background: `
                            linear-gradient(135deg, 
                              rgba(45, 45, 45, 0.9) 0%, 
                              rgba(35, 35, 35, 0.95) 25%,
                              rgba(40, 25, 30, 0.9) 50%,
                              rgba(35, 35, 35, 0.95) 75%,
                              rgba(45, 45, 45, 0.9) 100%
                            )
                          `,
                          borderColor: 'rgba(255, 255, 255, 0.15)',
                          boxShadow: `
                            0 25px 50px rgba(0, 0, 0, 0.5),
                            inset 0 1px 0 rgba(255, 255, 255, 0.1)
                          `
                        }}
                      >
                        
                        {/* Status Bar */}
                        <div className="flex justify-between items-center mb-6 px-2">
                          <div className="flex space-x-1">
                            <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                          </div>
                          <div className="text-gray-300 text-xs font-medium">9:41</div>
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                            <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                            <div className="w-1 h-1 bg-white rounded-full opacity-40"></div>
                          </div>
                        </div>

                        {/* Dashboard Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {dashboardItems.map((item, index) => (
                            <div
                              key={index}
                              className={`relative p-4 rounded-xl transition-all duration-300`}
                              style={{
                                background: item.active
                                  ? 'linear-gradient(135deg, rgba(220, 38, 38, 0.25) 0%, rgba(185, 28, 28, 0.15) 100%)'
                                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                                border: item.active 
                                  ? '1px solid rgba(220, 38, 38, 0.3)'
                                  : '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: item.active 
                                  ? '0 8px 20px rgba(220, 38, 38, 0.2)'
                                  : '0 4px 10px rgba(0, 0, 0, 0.1)'
                              }}
                            >
                              <div className="flex flex-col items-center text-center space-y-2">
                                <div className={`text-2xl ${item.active ? 'filter brightness-125' : 'opacity-70'}`}>
                                  {item.icon}
                                </div>
                                <div className={`text-xs font-medium leading-tight ${
                                  item.active ? 'text-white' : 'text-gray-300'
                                }`}>
                                  {item.title}
                                </div>
                              </div>
                              {item.active && (
                                <div 
                                  className="absolute inset-0 rounded-xl opacity-30"
                                  style={{
                                    background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, transparent 100%)'
                                  }}
                                ></div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Glow Effects */}
                      <div 
                        className="absolute inset-0 rounded-3xl blur-xl -z-10 transform scale-110"
                        style={{
                          background: `
                            radial-gradient(ellipse at center, 
                              rgba(220, 38, 38, 0.15) 0%, 
                              rgba(147, 51, 234, 0.08) 50%, 
                              transparent 100%
                            )
                          `
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes backgroundMove {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-10px) translateY(-10px); }
          50% { transform: translateX(-20px) translateY(10px); }
          75% { transform: translateX(-10px) translateY(20px); }
          100% { transform: translateX(0) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default IntelliTechSection;