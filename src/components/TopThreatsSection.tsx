import React from 'react';
import threatsVideo from '../assets/Untitled design (3).mp4';

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
    {
     id: 6,
      title: "Compliance Risk Exposure",
      description: "Security non-compliance ranks among the top threats because it exposes critical gaps that attackers can easily exploit. Beyond regulatory penalties, it drives reputational and financial risks, making compliance a fundamental layer of business resilience and trust.",
    },
  ];

  // Only show threats with id 1, 2, 3, 4, and 5
  const filteredThreats = threats.filter(threat => [1, 2, 3, 4, 5,6].includes(threat.id));

  return (
    <section className="w-full bg-black py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={threatsVideo} type="video/mp4" />
      </video>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="animate-fade-in-delay">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-white tracking-tight" style={{ fontFamily: 'Inter, Switzer, sans-serif' }}>
                Top Threats In The World
              </h2>
            </div>
            <div className="animate-fade-in-delay-2">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium px-4 sm:px-0">
                Stay ahead of emerging cybersecurity challenges with our comprehensive analysis of the most critical threats facing organizations in 2025.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content: Responsive Grid Layout */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl mx-auto">
            {filteredThreats.map((threat, idx) => (
              <div 
                key={threat?.id || idx} 
                className={`animate-fade-in ${
                  filteredThreats.length === 5 && idx === 4 
                    ? 'md:col-span-2 xl:col-span-1 xl:col-start-2' 
                    : ''
                }`}
                style={{
                  animationDelay: `${0.2 + idx * 0.1}s`
                }}
              >
                <div className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow border-2 border-red-400">
                      <span className="text-black text-sm sm:text-base md:text-lg font-extrabold">{threat?.id}</span>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight" style={{ fontFamily: 'Inter, Switzer, sans-serif' }}>
                      {threat?.title}
                    </h3>
                  </div>
                  <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                    {threat?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="animate-fade-in-delay-4">
          <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 transition-all duration-500 transform hover:scale-105 bg-red-500/90 rounded-full shadow-xl border-2 border-red-400">
              <svg width="16" height="16" className="sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white font-semibold text-xs sm:text-sm md:text-base">Stay Protected with Advanced Threat Intelligence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopThreatsSection;