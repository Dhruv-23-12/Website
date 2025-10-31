import React from 'react';
import { ChevronLeft, ChevronRight, BarChart3, Settings, Building2, Cloud, BarChart, Truck, Zap, Heart } from 'lucide-react';

interface CardItem {
  title: string;
  icon: React.ReactNode;
}

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
}

const WhyUsSection: React.FC = () => {
  const cards: CardItem[] = [
    { title: 'Transportation & Logistics', icon: <Truck className="w-6 h-6" /> },
    { title: 'Energy', icon: <Zap className="w-6 h-6" /> },
    { title: 'Healthcare & Medical', icon: <Heart className="w-6 h-6" /> },
  ];

  const services: ServiceItem[] = [
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Digital Product Development' },
    { icon: <BarChart className="w-6 h-6" />, title: 'AI Automation and Analytics' },
    { icon: <Building2 className="w-6 h-6" />, title: 'Cyber Forensic Investigation' },
    { icon: <Cloud className="w-6 h-6" />, title: 'Data Leakage Protection' },
    { icon: <Settings className="w-6 h-6" />, title: 'IT Risk Management' },
  ];

  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const amount = 280;
    container.scrollBy({ 
      left: direction === 'left' ? -amount : amount, 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* First Section - Why Us */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left copy */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-full mb-4">
                Why Us?
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Simple, Smart, Reliable.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              We eliminate complexity, leverage smart AI-driven expertise, 
              and provide a rock-solid, trusted partnership—backed by 
              global experts.
            </p>
          </div>

          {/* Right horizontal card list */}
          <div className="relative animate-fade-in-delay-2 pointer-events-none">
            {/* Controls */}
            <button
              aria-label="Scroll left"
              onClick={() => handleScroll('left')}
              className="hidden sm:flex pointer-events-auto absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/95 backdrop-blur border border-gray-200 hover:border-black text-black items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              aria-label="Scroll right"
              onClick={() => handleScroll('right')}
              className="hidden sm:flex pointer-events-auto absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/95 backdrop-blur border border-gray-200 hover:border-black text-black items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div 
              ref={scrollRef} 
              className="grid grid-cols-1 sm:flex gap-4 sm:gap-6 overflow-x-hidden sm:overflow-x-auto hide-scrollbar pb-4 sm:snap-x sm:snap-mandatory"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none' 
              }}
            >
              {cards.map((card, index) => (
                <div 
                  key={card.title} 
                  className="w-full sm:w-auto sm:min-w-[260px] md:min-w-[280px] bg-white border border-gray-200 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:border-black group relative sm:snap-start"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative h-48 p-6 flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                      <div className="bg-black text-white p-3 rounded-sm mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {card.icon}
                      </div>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-black font-semibold text-lg leading-tight group-hover:text-gray-800 transition-colors duration-300">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Section - We deliver breakthroughs */}
        <div className="animate-fade-in-delay-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              We deliver breakthroughs
            </h2>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
              with <span className="text-gray-600">expertise, speed, and reliability.</span>
            </h3>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group p-6 bg-white border border-gray-200 rounded-sm hover:border-black transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 text-black group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-black font-semibold text-sm leading-tight group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default WhyUsSection;