import React from 'react';
 

const IndustriesTargetedSection = () => {
  
  return (
         <section className="w-full bg-black relative overflow-hidden pt-12 pb-8">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-16 left-16 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-24 w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-24 left-1/3 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '4.5s' }}></div>
        <div className="absolute top-32 left-2/3 w-2 h-2 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '6s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '7.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
                     {/* Enhanced Title with gradient */}
          <div className="mb-3">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
             Industries{' '}
             <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
               Targeted
             </span>
           </h2>
         </div>
         <div className="mb-2">
           <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
             <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
             Q1 2025 report summary
           </span>
         </div>
         
                     {/* Enhanced Description with better typography */}
          <div className="mb-10 max-w-3xl">
            <p className="text-[17px] lg:text-xl text-gray-300 leading-8">
              In Q1 2025, cyberattacks surged across multiple sectors, with{' '}
              <span className="inline-flex items-center gap-2 text-white font-semibold bg-red-500/10 px-3 py-1.5 rounded-lg border border-red-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> five industries
              </span>{' '}
              standing out as the most frequently targeted, based on{' '}
              <span className="inline-flex items-center gap-2 text-white font-semibold bg-red-500/10 px-3 py-1.5 rounded-lg border border-red-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> average weekly attacks
              </span>{' '}
              per organization.
            </p>
          </div>

                     {/* Compact glass stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl">
            <div className="relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur min-h-[140px] transition-all duration-300 hover:border-red-500/30 hover:shadow-glow">
              <div className="flex items-center gap-3 mb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-red-400"><path d="M5 4h14M7 8h10M9 12h6M11 16h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                <span className="text-sm text-white/80">Analysis Period</span>
              </div>
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Q1 2025</div>
              <div className="text-xs text-gray-400 mt-1">Latest threat intelligence</div>
            </div>
            <div className="relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur min-h-[140px] transition-all duration-300 hover:border-red-500/30 hover:shadow-glow">
              <div className="flex items-center gap-3 mb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-red-400"><path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                <span className="text-sm text-white/80">Critical Industries</span>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white">5</div>
              <div className="text-xs text-gray-400 mt-1">Most vulnerable sectors</div>
            </div>
            <div className="relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur min-h-[140px] transition-all duration-300 hover:border-red-500/30 hover:shadow-glow">
              <div className="flex items-center gap-3 mb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-red-400"><path d="M5 5h14v14H5z" stroke="currentColor" strokeWidth="2"/><path d="M5 9h14" stroke="currentColor" strokeWidth="2"/><path d="M9 5v14" stroke="currentColor" strokeWidth="2"/></svg>
                <span className="text-sm text-white/80">Attack Frequency</span>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white">Weekly</div>
              <div className="text-xs text-gray-400 mt-1">Ongoing threat monitoring</div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default IndustriesTargetedSection; 