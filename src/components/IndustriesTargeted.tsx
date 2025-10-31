import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  percent: number;
  text: string;
}

const statsData: StatItem[] = [
  {
    percent: 17,
    text:
      'Gartner forecasts that generative AI will play a role in 17% of cyberattacks and data breaches by 2027.'
  },
  {
    percent: 71,
    text:
      'At the 2024 Annual Meeting on Cybersecurity, 71% of cyber leaders agreed that small organizations can’t effectively manage increasing cyber risks.'
  },
  {
    percent: 60,
    text:
      '60% of organizations indicated that geopolitical conflicts have shaped their cybersecurity strategies.'
  }
];

const StatBar: React.FC<{ percent: number; isVisible: boolean }> = ({ percent, isVisible }) => {
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    if (isVisible) {
      const timeoutId = window.setTimeout(() => setWidth(`${percent}%`), 50);
      return () => window.clearTimeout(timeoutId);
    }
  }, [isVisible, percent]);

  return (
    <div className="w-full">
      <div className="relative h-12 sm:h-12 lg:h-14 rounded-full bg-white/5 border border-white/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
        <div
          className="absolute left-1 top-1 bottom-1 rounded-full transition-all duration-700 ease-out bg-gradient-to-r from-red-500 via-red-500 to-red-400 shadow-[0_0_24px_rgba(239,68,68,0.45)]"
          style={{ width: `calc(${width} - 0.5rem)` }}
        >
          <div className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-0.5 rounded-full bg-white text-red-600 text-sm font-extrabold shadow">
            {percent}%
          </div>
        </div>
      </div>
    </div>
  );
};

const IndustriesTargeted: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-8 sm:py-12 lg:py-16 relative overflow-hidden"
    >
      {/* Solid black background */}
      <div className="absolute inset-0 z-0 bg-black" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Grid */}
        <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-start">
          {/* Divider with label */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
            <div className="h-full w-px bg-white/20" />
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 rotate-90">
              <span className="text-xs tracking-[0.35em] text-white/60">IN 2024</span>
            </div>
          </div>
          {/* Left: Headline and copy */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-tight">
              Cybersecurity has an <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">effectiveness</span>
              <br className="hidden sm:block" />
              <span className="text-white/80">problem.</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
              Today, security isn’t working for most organizations. Despite growing investments, breaches continue to appear in the headlines every day. We believe the cause of this paradox is because operationalizing security is too hard. Our company was built to make it work.
            </p>
            <div className="pt-2">
              <a href="#" className="text-sm text-white/70 hover:text-white inline-flex items-center gap-2">
                Source
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-8">
            {statsData.map((item) => (
              <div key={item.text} className="space-y-3">
                <p className="text-white/90 text-base sm:text-lg">
                  {item.text}
                </p>
                <StatBar percent={item.percent} isVisible={isVisible} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesTargeted;