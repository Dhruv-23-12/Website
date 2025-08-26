  import React from 'react';
  import educationImg from '../assets/grid/education.png';
  import telecomImg from '../assets/grid/telecomuunication.png';
  import governmentImg from '../assets/grid/goverment.png';
  import healthcareImg from '../assets/grid/Healthcare & medical.png';
  import { ScrollAnimation, AnimatedText } from './ScrollAnimations';

  /**
   * Industry Item Interface
   */
  interface IndustryItem {
    image: string;
    title: string;
    stat: string;
    unit: string;
    desc: React.ReactNode;
  }

  /**
   * Industries Data
   */
  const industries: IndustryItem[] = [
    {
      image: educationImg,
      title: 'Education',
      stat: '4,484',
      unit: 'attacks',
      desc: (
        <>
          Educational institutions were the hardest hit, largely due to their broad attack surface, <span className="font-semibold text-white">limited cybersecurity funding</span>, and <span className="font-semibold text-white">high volume of personally identifiable information (PII)</span>.
        </>
      ),
    },
    {
      image: telecomImg,
      title: 'Telecommunications',
      stat: '2,664',
      unit: 'attacks',
      desc: (
        <>
          The telecommunications industry plays a critical role in <span className="font-semibold text-white">global connectivity</span>, making it an attractive target for threat actors aiming to disrupt essential services.
        </>
      ),
    },
    {
      image: governmentImg,
      title: 'Government',
      stat: '2,678',
      unit: 'attacks',
      desc: (
        <>
          Government agencies hold vast amounts of sensitive citizen data and critical national infrastructure. Their high-profile nature and <span className="font-semibold text-white">geopolitical significance</span> make them constant targets.
        </>
      ),
    },
    {
      image: healthcareImg,
      title: 'Healthcare & Medical',
      stat: '2,430',
      unit: 'attacks',
      desc: (
        <>
          The healthcare sector continues to face significant cyber risk due to the value of <span className="font-semibold text-white">electronic health records (EHRs)</span> and operational <span className="font-semibold text-white">dependency on interconnected medical devices</span>.
        </>
      ),
    },
  ];

  // Additional content to appear on the right side (as per user request)
  const automotive: IndustryItem = {
    image: '',
    title: 'Automotive',
    stat: '2,145',
    unit: 'attacks',
    desc: (
      <>
        As modern vehicles become increasingly connected through <span className="font-semibold text-white">digital ecosystems</span>, the automotive industry has emerged as a key cyber target. Threat actors focus on exploiting vulnerabilities in autonomous systems, supply chains, and customer data platforms, potentially aiming at intellectual property theft or supply chain disruption.
      </>
    ),
  };

  /**
   * IndustriesGridSection Component
   * 
   * Displays a grid of industry statistics with cybersecurity attack data
   * and smooth animations for better user experience.
   */
  const IndustriesGridSection: React.FC = () => {
    return (
      <section className="w-full bg-black py-16 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto space-y-10">
            {/* Top Row - Asymmetric */}
            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Grid - 66% width (2/3) */}
                <ScrollAnimation animation="fadeInLeft" delay={0.4}>
                  <div className="group relative">
                    <div className="relative rounded-2xl p-8 h-full flex flex-col justify-between bg-white/5 backdrop-blur border border-white/10 hover:border-red-500/40 hover:shadow-[0_10px_40px_rgba(239,68,68,0.25)] overflow-hidden transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${industries[0].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60"></div>
                      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 via-red-400 to-transparent"></div>
                      <div className="relative z-10 flex-1 flex flex-col justify-center">
                        <ScrollAnimation animation="fadeInUp" delay={0.6}>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {industries[0].title}
                          </h3>
                        </ScrollAnimation>
                        
                        <ScrollAnimation animation="fadeInUp" delay={0.8}>
                          <div className="flex items-baseline gap-3 mb-3">
                            <span className="text-3xl font-bold text-red-400">
                              {industries[0].stat}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-xs bg-white/10 text-gray-300 border border-white/10">
                              {industries[0].unit}
                            </span>
                          </div>
                        </ScrollAnimation>
                        
                        <ScrollAnimation animation="fadeInUp" delay={1.0}>
                          <div className="text-gray-400 text-base leading-relaxed mb-6">
                            {industries[0].desc}
                          </div>
                        </ScrollAnimation>
                        
                        <ScrollAnimation animation="fadeInUp" delay={1.2}>
                          <a
                            href="#"
                            className="inline-flex w-fit items-center gap-2 text-white/80 hover:text-white text-xs font-medium transition-colors mt-auto px-3 py-1 rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
                          >
                            Learn more
                            <span className="text-red-400">→</span>
                          </a>
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
                {/* Right grid columns */}
                <ScrollAnimation animation="fadeInRight" delay={0.6}>
                  <div className="group relative flex flex-col h-full">
                    <div className="relative rounded-2xl p-6 h-full flex flex-col justify-between bg-white/5 backdrop-blur border border-white/10 hover:border-red-500/40 hover:shadow-[0_10px_40px_rgba(239,68,68,0.25)] overflow-hidden transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${industries[1].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50"></div>
                      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 via-red-400 to-transparent"></div>
                      <div className="relative z-10">
                        <ScrollAnimation animation="fadeInUp" delay={0.8}>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {industries[1].title}
                          </h3>
                        </ScrollAnimation>
                        <ScrollAnimation animation="fadeInUp" delay={1.0}>
                          <div className="flex items-baseline gap-3 mb-3">
                            <span className="text-2xl font-bold text-red-400">
                              {industries[1].stat}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/10 text-gray-300 border border-white/10">
                              {industries[1].unit}
                            </span>
                          </div>
                        </ScrollAnimation>
                        <ScrollAnimation animation="fadeInUp" delay={1.2}>
                          <div className="text-gray-400 text-sm leading-relaxed mb-4">
                            {industries[1].desc}
                          </div>
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInRight" delay={0.6}>
                  <div className="group relative flex flex-col h-full">
                    <div className="relative rounded-2xl p-6 h-full flex flex-col justify-between bg-white/5 backdrop-blur border border-white/10 hover:border-red-500/40 hover:shadow-[0_10px_40px_rgba(239,68,68,0.25)] overflow-hidden transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50"></div>
                      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 via-red-400 to-transparent"></div>
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-2">{automotive.title}</h3>
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-2xl font-bold text-red-400">{automotive.stat}</span>
                          <span className="text-xs text-gray-400 font-medium">{automotive.unit}</span>
                        </div>
                        <div className="text-gray-400 text-sm leading-relaxed">
                          {automotive.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>
            {/* Bottom Row - Equal split */}
            <ScrollAnimation animation="fadeInUp" delay={0.8}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {industries.slice(2).map((industry, idx) => (
                  <ScrollAnimation key={idx} animation="fadeInUp" delay={1.0 + idx * 0.2}>
                    <div className="group relative flex flex-col h-full">
                      <div className="relative rounded-2xl p-6 h-full flex flex-col justify-between bg-white/5 backdrop-blur border border-white/10 hover:border-red-500/40 hover:shadow-[0_10px_40px_rgba(239,68,68,0.25)] overflow-hidden transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${industry.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50"></div>
                        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 via-red-400 to-transparent"></div>
                        <div className="relative z-10">
                          <ScrollAnimation animation="fadeInUp" delay={1.2 + idx * 0.2}>
                            <h3 className="text-xl font-bold text-white mb-2">
                              {industry.title}
                            </h3>
                          </ScrollAnimation>
                          
                          <ScrollAnimation animation="fadeInUp" delay={1.4 + idx * 0.2}>
                            <div className="flex items-baseline gap-2 mb-2">
                              <span className="text-2xl font-bold text-red-400">
                                {industry.stat}
                              </span>
                              <span className="text-xs text-gray-400 font-medium">
                                {industry.unit}
                              </span>
                            </div>
                          </ScrollAnimation>
                          
                          <ScrollAnimation animation="fadeInUp" delay={1.6 + idx * 0.2}>
                            <div className="text-gray-400 text-sm leading-relaxed mb-4">
                              {industry.desc}
                            </div>
                          </ScrollAnimation>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    );
  };

  export default IndustriesGridSection;