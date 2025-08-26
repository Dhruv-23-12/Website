import React from 'react';
import { ScrollAnimation, AnimatedText } from './ScrollAnimations';

interface Threat {
  id: number;
  title: string;
  description: string;
}

const TopThreatsSection: React.FC = () => {
  const threats: Threat[] = [
    {
      id: 1,
      title: "AI-Driven Malware",
      description: "Advanced AI-powered malware that can adapt and evolve in real-time, making traditional detection methods ineffective.",
    },
    {
      id: 2,
      title: "Ransomware-as-a-Service",
      description: "Sophisticated ransomware platforms sold to cybercriminals, making advanced attacks accessible to non-technical threat actors.",
    },
    {
      id: 3,
      title: "Insider Threats",
      description: "Malicious or negligent actions by employees, contractors, or partners with authorized access to systems.",
    },
    {
      id: 4,
      title: "Supply Chain Attacks",
      description: "Gartner predicts that by 2025, 45% of organizations will face supply chain attacks. Limited visibility into supplier security and growing system interdependencies make these threats more severe.",
    },
    {
      id: 5,
      title: "Social Engineering using Deepfake",
      description: "In 2025, social engineering, powered by generative AI, will be the top security threat. Attackers will go beyond phishing, using deepfake calls, SMS scams, and fake social media personas.",
    },
  ];

  // Only show threats with id 1, 4, 6, 9, and 10
  const filteredThreats = threats.filter(threat => [1, 2, 3, 4, 5].includes(threat.id));

  return (
    <section className="w-full bg-black py-16 relative overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, white 20px, white 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, white 20px, white 21px)`,
          backgroundSize: '21px 21px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <div className="text-center mb-12">
            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight" style={{ fontFamily: 'Inter, Switzer, sans-serif' }}>
                Top <span className="text-red-400">Threats</span> in the world
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={0.6}>
              <AnimatedText 
                className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium"
                delay={0.8}
                stagger={0.05}
              >
                Stay ahead of emerging cybersecurity challenges with our comprehensive analysis of the most critical threats facing organizations in 2025.
              </AnimatedText>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
        {/* Main Content: 2 left, shield, 2 right, 1 bottom center */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center justify-center relative gap-10">
            {/* Left column */}
            <ScrollAnimation animation="fadeInLeft" delay={0.3}>
              <div className="flex flex-col gap-16 flex-1">
                {[filteredThreats[0], filteredThreats[1]].map((threat, idx) => (
                  <ScrollAnimation key={threat?.id || idx} animation="fadeInUp" delay={0.5 + idx * 0.2}>
                    <div className="">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow border-2 border-red-400">
                          <span className="text-black text-lg font-extrabold">{threat?.id}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: 'Inter, Switzer, sans-serif' }}>{threat?.title}</h3>
                      </div>
                      <AnimatedText 
                        className="text-gray-300 text-sm md:text-base leading-relaxed font-medium"
                        delay={0.7 + idx * 0.2}
                        stagger={0.05}
                      >
                        {threat?.description}
                      </AnimatedText>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>
            {/* Shield center */}
            <ScrollAnimation animation="scaleIn" delay={0.4}>
              <div className="flex flex-col items-center justify-center px-4 order-first md:order-none">
                <div className="relative w-40 h-48 sm:w-48 sm:h-56 md:w-64 md:h-80 flex items-center justify-center">
                  {/* Glowing background */}
                  <div className="absolute inset-0 rounded-full bg-red-500/20 blur-2xl animate-pulse-slow z-0" />
                  <img 
                    src="/src/assets/shield1.png" 
                    alt="Cybersecurity Shield" 
                    className="w-full h-full object-contain drop-shadow-2xl relative z-10"
                  />
                </div>
              </div>
            </ScrollAnimation>
            {/* Right column */}
            <ScrollAnimation animation="fadeInRight" delay={0.5}>
              <div className="flex flex-col gap-10 md:gap-16 flex-1">
                {[filteredThreats[2], filteredThreats[3]].map((threat, idx) => (
                  <ScrollAnimation key={threat?.id || idx} animation="fadeInUp" delay={0.7 + idx * 0.2}>
                    <div className="">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow border-2 border-red-400">
                          <span className="text-black text-lg font-extrabold">{threat?.id}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: 'Inter, Switzer, sans-serif' }}>{threat?.title}</h3>
                      </div>
                      <AnimatedText 
                        className="text-gray-300 text-sm md:text-base leading-relaxed font-medium"
                        delay={0.9 + idx * 0.2}
                        stagger={0.05}
                      >
                        {threat?.description}
                      </AnimatedText>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>
          </div>
          {/* Bottom center threat */}
          <ScrollAnimation animation="slideInUp" delay={1.1}>
            <div className="w-full max-w-6xl mx-auto mt-12 px-0 sm:px-4">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow border-2 border-red-400">
                    <span className="text-black text-lg font-extrabold">{filteredThreats[4]?.id}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: 'Inter, Switzer, sans-serif' }}>
                    {filteredThreats[4]?.title}
                  </h3>
                </div>
                <AnimatedText 
                  className="text-gray-300 text-sm md:text-base leading-relaxed font-medium"
                  delay={1.3}
                  stagger={0.05}
                >
                  {filteredThreats[4]?.description}
                </AnimatedText>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        {/* CTA Section */}
        <ScrollAnimation animation="fadeInUp" delay={1.5}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 transition-all duration-500 transform hover:scale-105 bg-red-500/90 rounded-full shadow-xl border-2 border-red-400">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white font-semibold text-base">Stay Protected with Advanced Threat Intelligence</span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TopThreatsSection;