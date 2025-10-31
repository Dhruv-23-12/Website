import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import heroVideo from '../assets/Untitled design.mp4';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Make video play at half speed
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 sm:scale-100"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-24 sm:pt-32 pb-8">
        <div className="max-w-5xl mx-auto text-center mt-8 sm:mt-12">
          {/* Badge */}
          <div className="mb-4 sm:mb-6 animate-fade-in">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-black text-white text-xs sm:text-sm font-semibold rounded mb-4 sm:mb-6">
              🚀 Trusted by 50+ Companies Worldwide
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight sm:leading-tight md:leading-tight animate-fade-in px-2 sm:px-0">
            We Build Secure & Scalable Software That{' '}
            <span className="relative inline-block">
              Drives Growth
              <div className="absolute bottom-0 sm:bottom-1 left-0 w-full h-0.5 sm:h-1 bg-white transform origin-left animate-scale-x opacity-20"></div>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 animate-fade-in-delay max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Full-stack development • Cybersecurity • Mobile Apps • Enterprise Solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-delay-2 px-4 sm:px-0">
            <button className="group bg-black text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-sm font-semibold text-sm transition-all duration-300 hover:bg-gray-900 hover:scale-105 hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center">
              Start a Project
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group border-2 border-white text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-sm font-semibold text-sm transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center">
              <Play className="w-3.5 h-3.5" />
              View Portfolio
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 sm:mt-16 animate-fade-in-delay-3">
            <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4">Scroll to explore</p>
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white mx-auto animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;