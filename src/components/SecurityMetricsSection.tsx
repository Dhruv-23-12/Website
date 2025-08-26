import { useState, useEffect } from "react";
import cyberSphere from "@/assets/cyber-sphere.jpg";
import tab1 from "@/assets/tab1.jpg";
import tab2 from "@/assets/tab2.jpg";
import vrImage from "@/assets/vrimage.png";
import heroGlobe from "@/assets/hero-globe.jpg";

const SecurityMetricsSection = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [graphAnimationStarted, setGraphAnimationStarted] = useState(false);
  const [percentageAnimationStarted, setPercentageAnimationStarted] = useState(false);
  const [percentageValue, setPercentageValue] = useState(0);
  const [graphLinesAnimated, setGraphLinesAnimated] = useState(false);
  const [graphPointsAnimated, setGraphPointsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationStarted(true), 300);
    const graphTimer = setTimeout(() => setGraphAnimationStarted(true), 800);
    const graphLinesTimer = setTimeout(() => setGraphLinesAnimated(true), 1200);
    const graphPointsTimer = setTimeout(() => setGraphPointsAnimated(true), 1800);
    const percentageTimer = setTimeout(() => setPercentageAnimationStarted(true), 2400);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(graphTimer);
      clearTimeout(graphLinesTimer);
      clearTimeout(graphPointsTimer);
      clearTimeout(percentageTimer);
    };
  }, []);

  // Animate percentage value from 0 to 71
  useEffect(() => {
    if (percentageAnimationStarted) {
      const duration = 2000; // 2 seconds
      const steps = 71;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        setPercentageValue(currentStep);

        if (currentStep >= 71) {
          clearInterval(interval);
        }
      }, stepDuration);
      
      return () => clearInterval(interval);
    }
  }, [percentageAnimationStarted]);

  // Cyber resilience data for the line graph
  const resilienceData = [
    { year: "2022", small: 30, large: 5 },
    { year: "2023", small: 15, large: 10 },
    { year: "2024", small: 25, large: 7 },
    { year: "2025", small: 35, large: 5 }
  ];

  // Recommended items for four-card section
  const recommended = [
    {
      image: tab1,
      title: "Leading the Way with Quantum and Multicloud Security",
      cta: "See what is new"
    },
    {
      image: tab2,
      title: "Introducing Cortex Cloud ASPM",
      cta: "Discover now"
    },
    {
      image: heroGlobe,
      title: "Virtual Event: AppSec's New Horizon",
      cta: "Secure your spot"
    },
    {
      image: vrImage,
      title: "A 3X Gartner® Magic Quadrant™ Leader in EPP",
      cta: "Get the report"
    }
  ];


  return (
    <section className="w-full relative overflow-hidden py-20">
      {/* Background with red glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-red-700 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-badge-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-red-300 font-medium">Real-time Analytics</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Switzer', sans-serif" }}>
            Security Performance Metrics
          </h2>
          
          <p className="text-xl text-tech-gray max-w-3xl mx-auto">
            Monitor and analyze your cybersecurity posture with real-time metrics and advanced analytics
          </p>
        </div>

        {/* Visual Data Visualization */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Simple Animated Graph */}
          <div className={`glass-card p-8 rounded-2xl border border-white/10 shadow-tech transition-all duration-1000 ${
            graphAnimationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className={`text-xl font-semibold text-white mb-6 transition-all duration-800 ${
              graphAnimationStarted ? 'opacity-100' : 'opacity-0'
            }`} style={{ fontFamily: "'Switzer', sans-serif" }}>
              Smaller organizations are struggling to ensure cyber resilience, while larger organizations show steady progress
            </h3>
            
            <div className="relative h-64 mb-6">
              {/* Background grid pattern */}
              <div className={`absolute inset-0 opacity-20 transition-all duration-2000 ${
                graphAnimationStarted ? 'opacity-20' : 'opacity-0'
              }`}>
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              {/* Y-axis labels */}
              <div className={`absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 transition-all duration-1000 ${
                graphAnimationStarted ? 'opacity-100' : 'opacity-0'
              }`}>
                <span>40%</span>
                <span>30%</span>
                <span>20%</span>
                <span>10%</span>
                <span>0%</span>
              </div>
              
              {/* Y-axis line */}
              <div className={`absolute left-8 top-0 w-px h-full bg-white transition-all duration-1000 ${
                graphAnimationStarted ? 'opacity-100' : 'opacity-0'
              }`}></div>
              
              {/* X-axis line */}
              <div className={`absolute left-8 bottom-8 w-full h-px bg-white transition-all duration-1000 ${
                graphAnimationStarted ? 'opacity-100' : 'opacity-0'
              }`}></div>
              
              {/* X-axis labels */}
              <div className={`absolute left-8 bottom-0 w-full flex justify-between text-xs text-gray-400 transition-all duration-1000 ${
                graphAnimationStarted ? 'opacity-100' : 'opacity-0'
              }`}>
                {resilienceData.map((data) => (
                  <span key={data.year}>{data.year}</span>
                ))}
              </div>
              
              {/* Animated Area Fill Graph */}
              <svg className="absolute left-8 top-0 w-full h-full" style={{ width: 'calc(100% - 2rem)' }}>
                {/* Small organizations area fill */}
                <defs>
                  <linearGradient id="smallAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#EF4444" stopOpacity="0.2"/>
                  </linearGradient>
                  <pattern id="smallPattern" patternUnits="userSpaceOnUse" width="10" height="10">
                    <rect width="10" height="10" fill="url(#smallAreaGradient)"/>
                    <path d="M0,10 L10,0" stroke="#EF4444" strokeWidth="1" opacity="0.3"/>
                  </pattern>
                </defs>
                
                                 {/* Area fill path - Complete graph area */}
                 <path
                   d={`M 0 100 L 0 ${100 - (resilienceData[0].small * 2.5)} L 33.33 ${100 - (resilienceData[1].small * 2.5)} L 66.66 ${100 - (resilienceData[2].small * 2.5)} L 100 ${100 - (resilienceData[3].small * 2.5)} L 100 100 Z`}
                   fill="url(#smallAreaGradient)"
                   className={`transition-all duration-3000 ease-out ${
                     graphLinesAnimated ? 'opacity-100' : 'opacity-0'
                   }`}
                   style={{
                     clipPath: graphLinesAnimated ? 'none' : 'inset(0 0 0 100%)',
                     transitionDelay: '500ms'
                   }}
                 />
                
                {/* Main line */}
                <path
                  d={`M 0 ${100 - (resilienceData[0].small * 2.5)} L 33.33 ${100 - (resilienceData[1].small * 2.5)} L 66.66 ${100 - (resilienceData[2].small * 2.5)} L 100 ${100 - (resilienceData[3].small * 2.5)}`}
                  stroke="#EF4444"
                  strokeWidth="3"
                  fill="none"
                  className={`transition-all duration-3000 ease-out ${
                    graphLinesAnimated ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    strokeDasharray: graphLinesAnimated ? 'none' : '500',
                    strokeDashoffset: graphLinesAnimated ? '0' : '500',
                    filter: 'drop-shadow(0 0 4px rgba(239, 68, 68, 0.5))'
                  }}
                />
                
                {/* Data points */}
                {resilienceData.map((data, index) => (
                  <g key={`small-point-${index}`}>
                    <circle
                      cx={`${index * 33.33}%`}
                      cy={`${100 - (data.small * 2.5)}%`}
                      r="5"
                      fill="white"
                      stroke="#EF4444"
                      strokeWidth="2"
                      className={`transition-all duration-800 ease-out ${
                        graphPointsAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                      style={{ 
                        transitionDelay: `${index * 300}ms`,
                        filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.8))'
                      }}
                    />
                  </g>
                ))}
              </svg>
            </div>
            
            {/* Enhanced legend */}
            <div className={`flex justify-center gap-6 text-sm transition-all duration-1000 ${
              graphPointsAnimated ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Small Organizations</span>
              </div>
            </div>
          </div>

          {/* Large Statistic with enhanced 71% animation */}
          <div className={`glass-card p-8 rounded-2xl border border-white/10 shadow-tech text-center transition-all duration-1000 hover:shadow-2xl hover:border-red-500/30 ${
            percentageAnimationStarted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
          }`}>
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto relative">
                {/* Circular progress background */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="8"
                    className="transition-all duration-1000"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="8"
                    strokeDasharray="283"
                    className="transition-all duration-3000 ease-out"
                    style={{ 
                      strokeDashoffset: percentageAnimationStarted ? `${283 - (283 * percentageValue / 100)}` : '283',
                      filter: percentageAnimationStarted ? 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.5))' : 'none'
                    }}
                  />
                </svg>
                
                {/* Percentage text with counting animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span 
                    className={`text-5xl font-bold text-white transition-all duration-2000 ease-out ${
                      percentageAnimationStarted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                    style={{ fontFamily: "'Switzer', sans-serif" }}
                  >
                    {percentageValue}%
                  </span>
                </div>
                
                {/* Enhanced pulsing effect around the circle */}
                <div className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                  percentageAnimationStarted ? 'animate-pulse' : ''
                }`} style={{
                  background: 'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)'
                }}></div>
                
                {/* Rotating ring effect */}
                <div className={`absolute inset-0 rounded-full transition-all duration-2000 ${
                  percentageAnimationStarted ? 'animate-spin' : ''
                }`} style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(239, 68, 68, 0.1), transparent)',
                  animationDuration: '4s'
                }}></div>
                
                {/* Additional animated rings */}
                <div className={`absolute inset-0 rounded-full transition-all duration-3000 ${
                  percentageAnimationStarted ? 'animate-ping' : ''
                }`} style={{
                  background: 'radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 50%)',
                  animationDuration: '2s'
                }}></div>
                
                {/* Glowing particles around the circle */}
                {percentageAnimationStarted && (
                  <>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-red-700 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                  </>
                )}
              </div>
            </div>
            
            <p className={`text-lg text-tech-gray leading-relaxed transition-all duration-1000 ${
              percentageAnimationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`} style={{ transitionDelay: '500ms' }}>
              71% of cyber leaders at the Annual Meeting on Cybersecurity 2024 believe that small organizations have already reached a critical tipping point where they can no longer adequately secure themselves against the growing complexity of cyber risks.
            </p>
          </div>

          {/* Recommended four-card strip */}
          <div className="lg:col-span-2 mt-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="tracking-[0.35em] text-xs text-red-300/90 uppercase">Recommended</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommended.map((item, idx) => (
                <div
                  key={idx}
                  className={`glass-card rounded-2xl border border-white/10 p-3 flex items-center gap-4 transition-all duration-300 hover:border-red-500/30 hover:shadow-glow ${
                    animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-20 object-cover rounded-lg shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <div className="text-white text-sm font-semibold leading-snug line-clamp-2" style={{ fontFamily: "'Switzer', sans-serif" }}>
                      {item.title}
                    </div>
                    <div className="text-tech-gray text-xs mt-2">{item.cta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default SecurityMetricsSection;


