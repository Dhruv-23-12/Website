import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollAnimation, AnimatedText } from './ScrollAnimations';

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col overflow-hidden pt-16 md:pt-24">
    {/* Video Background */}
    <div className="absolute inset-0 w-full h-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay: transparent at the very top so navbar looks fully transparent */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/50"></div>
      {/* Stronger bottom fade to blend video into page background */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 sm:h-56 md:h-72 bg-gradient-to-b from-transparent to-black" />
    </div>
    
    {/* Main Content - Perfect center positioning */}
    <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center flex-1 flex items-center justify-center">
      <div className="w-full">
        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          {/* Welcome Badge */}
          <span className="inline-block px-5 py-2 mb-6 rounded-full glass-badge-2 text-white font-semibold tracking-wide text-sm">
            ✦ Welcome to Cybersecurity Umbrella 
          </span>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInUp" delay={0.4}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Switzer', sans-serif" }}>
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-200 bg-clip-text text-transparent">Secure Today. Lead Tomorrow.</span><br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-200 bg-clip-text text-transparent">Cybersecurity services</span>
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInUp" delay={0.6}>
          <AnimatedText 
            className="text-xl md:text-2xl text-tech-gray mb-12 max-w-3xl mx-auto leading-relaxed"
            delay={0.8}
            stagger={0.05}
          >
            Our vision is to become a global leader in cybersecurity innovation, empowering enterprises, governments, educators, and digital organizations with secure, intelligent, and scalable platforms.
          </AnimatedText>
        </ScrollAnimation>
        
        {/* Call-to-Action Buttons */}
        <ScrollAnimation animation="fadeInUp" delay={1.0}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="ghost"
              className="group rounded-full border-2 border-primary/80 bg-transparent text-white px-8 py-4 text-lg font-semibold transition-colors duration-300 hover:bg-primary hover:border-primary hover:text-primary-foreground ring-1 ring-[hsl(var(--primary)/0.35)] ring-offset-1 ring-offset-transparent drop-shadow-[0_0_10px_hsl(var(--primary)/0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary)/0.6)] focus-visible:ring-offset-2"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              variant="ghost"
              className="group rounded-full border-2 border-primary/80 bg-transparent text-white px-8 py-4 text-lg font-semibold transition-colors duration-300 hover:bg-primary hover:border-primary hover:text-primary-foreground ring-1 ring-[hsl(var(--primary)/0.35)] ring-offset-1 ring-offset-transparent drop-shadow-[0_0_10px_hsl(var(--primary)/0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary)/0.6)] focus-visible:ring-offset-2"
            >
              Watch Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </section>
);

export default HeroSection;
