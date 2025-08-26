import React, { useRef, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from '../assets/tab1.jpg';
import laptop2 from '../assets/tab2.jpg';
import thirdImage from '../assets/laptop 4.png';

// Enhanced features with icon (emoji placeholder, swap for SVG/image as needed)
const features = [
  { icon: '🤖', title: 'Automated Compliance Audits', description: 'Automate up to 90% of audit challenges with AI-powered compliance monitoring and reporting.' },
  { icon: '📊', title: 'Real-Time Security Dashboard', description: 'Get a holistic, real-time view of your security program with business-aligned metrics.' },
  { icon: '🛡️', title: 'Best-in-class Framework Support', description: 'Built-in support for NIST 800-53, ISO 27000 series, SEBI CSCRF, SEC, OSFI, RBI and more.' },
  { icon: '☁️', title: 'Cloud & On-Premises Deployment', description: 'Flexible deployment options that fit your infrastructure and security requirements.' },
  { icon: '🔒', title: 'Advanced Threat Detection', description: 'Proactive threat identification and response with machine learning algorithms.' },
  { icon: '🔄', title: 'Continuous Monitoring', description: '24/7 continuous security monitoring with real-time alerts and notifications.' },
];

const stats = [
  { label: 'Active Users', value: '10K+' },
  { label: 'Uptime', value: '99.99%' },
  { label: 'Integrations', value: '50+' },
  { label: 'CXO Adoption', value: 'Global' },
];

const services = [
  { icon: '🛡️', title: 'Security Program Management', description: 'Comprehensive security program oversight with automated policy enforcement and compliance tracking.' },
  { icon: '📄', title: 'Compliance Tracking', description: 'Real-time compliance monitoring across multiple frameworks with automated reporting and alerts.' },
  { icon: '📊', title: 'Vulnerability Monitoring', description: 'Continuous vulnerability assessment with prioritized remediation recommendations and tracking.' },
  { icon: '⚙️', title: 'Policy Management', description: 'Centralized policy creation, distribution, and enforcement with version control and audit trails.' },
  { icon: '⚠️', title: 'Incident Response Readiness', description: 'Proactive incident response planning with automated workflows and communication protocols.' },
];

const achievements = [
  {
    icon: '📈',
    value: '90%',
    title: 'Audit Automation',
    description: 'Automate up to 90% of audit challenges with our AI-powered platform',
  },
  {
    icon: '⏰',
    value: '24/7',
    title: 'Continuous Monitoring',
    description: 'Round-the-clock security monitoring with real-time threat detection',
  },
  {
    icon: '🛡️',
    value: '99.9%',
    title: 'System Uptime',
    description: 'Enterprise-grade reliability with guaranteed service availability',
  },
  {
    icon: '✔️',
    value: '100+',
    title: 'Compliance Frameworks',
    description: 'Support for NIST, ISO, SEBI, SEC, OSFI, RBI and many more frameworks',
  },
];

// Animation hooks for each section
function useSectionAnimation(count: number): [React.MutableRefObject<HTMLElement | null>, boolean[]] {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(Array(count).fill(false));
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let triggered = false;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered) {
          triggered = true;
          Array(count).fill(0).forEach((_, idx) => {
            setTimeout(() => {
              setVisible((prev) => {
                const updated = [...prev];
                updated[idx] = true;
                return updated;
              });
            }, idx * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [count]);
  return [sectionRef, visible];
}

const ProductCXO: React.FC = () => {
  // Key Features animation
  const [featureSectionRef, visibleFeatures] = useSectionAnimation(6);
  // Services animation
  const [servicesSectionRef, visibleServices] = useSectionAnimation(5);
  // Achievements animation
  const [achievementsSectionRef, visibleAchievements] = useSectionAnimation(4);

  const scrollToNext = () => {
    const nextSection = document.getElementById('features-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-background text-white font-sans min-h-screen">
      <Header />
      
      {/* Hero Section - Updated with ProductJourney styling */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between flex-1">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <span className="inline-block px-5 py-2 mb-6 rounded-full glass-badge text-white font-semibold tracking-wide text-sm">
              ✦ CXO Product Suite
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Switzer', sans-serif" }}>
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-200 bg-clip-text text-transparent">
                CXO Risk Management App
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-tech-gray mb-12 max-w-3xl md:max-w-lg leading-relaxed">
              Showcase your product's value for CXOs and decision makers. Tailor this section to highlight your unique selling points.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center">
              <Button 
                className="btn-tech-primary text-lg px-12 py-6 bg-red-500 hover:bg-red-600 border-none text-white"
                onClick={scrollToNext}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
            <img 
              src={heroImage} 
              alt="CXO Dashboard" 
              className="max-w-xs md:max-w-md lg:max-w-lg w-full h-auto rounded-xl shadow-lg object-contain"
              style={{ background: 'rgba(0,0,0,0.02)' }}
            />
          </div>
        </div>
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer"
          onClick={scrollToNext}
        >
          <ChevronDown className="w-10 h-10 text-primary drop-shadow-glow" />
        </div>
      </section>

      {/* New Image/Text Section - Updated styling */}
      <section className="py-24 bg-gradient-to-br from-background to-card relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image on the left */}
            <div className="flex justify-center">
              <img 
                src={heroImage} 
                alt="CXO Product Step" 
                className="w-full max-w-xl h-auto object-contain rounded-2xl shadow-2xl"
                style={{ minHeight: '400 px' }}
              />
            </div>
            {/* Text on the right */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Threat Intelligence Dashboard</h2>
              <p className="text-lg md:text-xl text-tech-gray mb-4">A centralized tracking system that displays user engagement with reports and training materials. It monitors who has viewed, not viewed, or left reports unfinished, allowing organizations to track progress effectively.</p>
              <p className="text-lg md:text-xl text-tech-gray">These labels indicate user engagement status, whether a report has been read, left pending, or received no response, helping organizations monitor awareness and participation.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Text-Left, Image-Right Section - Updated styling */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text on the left */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Threat Intelligence Dashboard</h2>
              <p className="text-lg md:text-xl text-tech-gray mb-6">A centralized tracking system that displays user engagement with reports and training materials. It monitors who has viewed, not viewed, or left reports unfinished, allowing organizations to track progress effectively.
              These labels indicate user engagement status, whether a report has been read, left pending, or received no response, helping organizations monitor awareness and participation.</p>
            </div>
            {/* Image on the right */}
            <div className="flex justify-center">
              <img src={thirdImage} alt="Executive Insights" className="w-full max-w-xl h-auto object-contain rounded-2xl shadow-2xl" style={{ maxHeight: '420px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Updated with ProductJourney card styling */}
      <section id="features-section" className="py-24 bg-background" ref={featureSectionRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key <span className="text-primary">Features</span>
            </h2>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Comprehensive tools designed specifically for executive decision-making and strategic oversight
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`card-tech relative animate-fade-in-up transition-all duration-700 ease-out ${visibleFeatures[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} hover:scale-[1.04] hover:-translate-y-1`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="card-tech glass-effect p-6 shadow-xl border border-red-500/30 hover:border-red-400 transition-all"
                  style={{
                    boxShadow: '0 8px 32px rgba(220,38,38,0.10), 0 0 32px 0 rgba(6,182,212,0.10)',
                    background: 'rgba(20,20,24,0.85)',
                    borderRadius: '1rem',
                    minHeight: '200px',
                    width: '100%',
                    color: 'white',
                    fontWeight: 400,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  <div className="w-14 h-14 flex items-center justify-center mb-4 bg-red-500 rounded-xl shadow-md">
                    <span className="text-2xl text-white">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-tech-gray leading-relaxed">{feature.description}</p>
                  {/* Mirrored reflection effect */}
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '40px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 100%)',
                    opacity: 0.25,
                    pointerEvents: 'none',
                    borderBottomLeftRadius: '1rem',
                    borderBottomRightRadius: '1rem',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section - Updated styling */}
      <section className="py-24 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="card-tech p-8 rounded-xl shadow-xl border border-red-500/30">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">{stat.value}</div>
                <div className="text-tech-gray text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services/Capabilities Section - Updated styling */}
      <section className="py-24 bg-background" ref={servicesSectionRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              The accelerating pace of technological change presents both opportunities and significant challenges for information security leaders. Our comprehensive services address these evolving needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`card-tech relative animate-fade-in-up ${service.title === 'Incident Response Readiness' ? 'md:col-span-2' : ''} transition-all duration-700 ease-out ${visibleServices[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} hover:scale-[1.04] hover:-translate-y-1`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="card-tech glass-effect p-6 shadow-xl border border-red-500/30 hover:border-red-400 transition-all"
                  style={{
                    boxShadow: '0 8px 32px rgba(220,38,38,0.10), 0 0 32px 0 rgba(6,182,212,0.10)',
                    background: 'rgba(20,20,24,0.85)',
                    borderRadius: '1rem',
                    minHeight: '180px',
                    width: '100%',
                    color: 'white',
                    fontWeight: 400,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  <div className="w-14 h-14 flex items-center justify-center mb-4 bg-red-500 rounded-xl shadow-md">
                    <span className="text-2xl text-white">{service.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-tech-gray flex-1 leading-relaxed">{service.description}</p>
                  <a href="#" className="mt-4 text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 group w-fit transition-colors duration-300">
                    Learn More <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  {/* Mirrored reflection effect */}
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '40px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 100%)',
                    opacity: 0.25,
                    pointerEvents: 'none',
                    borderBottomLeftRadius: '1rem',
                    borderBottomRightRadius: '1rem',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Achievements Section - Updated styling */}
      <section className="py-24 bg-gradient-to-br from-background to-card" ref={achievementsSectionRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We Have <span className="text-primary">Achieved</span>
            </h2>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              To address the evolving challenges, CSU has developed a native-based audit and compliance application, which automates up to 90% of the audit challenges, making it an easy solution to stay compliant.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((ach, idx) => (
              <div key={idx} className={`card-tech relative animate-fade-in-up transition-all duration-700 ease-out ${visibleAchievements[idx] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} hover:scale-[1.05] hover:-translate-y-1`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="card-tech glass-effect p-8 shadow-xl border border-red-500/30 hover:border-red-400 transition-all flex flex-col items-center text-center"
                  style={{
                    boxShadow: '0 8px 32px rgba(220,38,38,0.10), 0 0 32px 0 rgba(6,182,212,0.10)',
                    background: 'rgba(20,20,24,0.85)',
                    borderRadius: '1rem',
                    minHeight: '200px',
                    width: '100%',
                    color: 'white',
                    fontWeight: 400,
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  <div className="w-14 h-14 flex items-center justify-center mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-md">
                    <span className="text-2xl text-white">{ach.icon}</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">{ach.value}</div>
                  <div className="text-lg font-semibold text-white mb-1">{ach.title}</div>
                  <div className="text-tech-gray text-sm leading-relaxed">{ach.description}</div>
                  {/* Mirrored reflection effect */}
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '40px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 100%)',
                    opacity: 0.25,
                    pointerEvents: 'none',
                    borderBottomLeftRadius: '1rem',
                    borderBottomRightRadius: '1rem',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section - Updated with ProductJourney styling */}
      <section className="py-24 bg-gradient-to-br from-background to-card relative overflow-hidden">
        {/* Animated background network */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1920 1080">
            <defs>
              <linearGradient id="ctaConnection" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(348 100% 50%)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(348 100% 50%)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M100,200 Q600,100 1200,300 T1600,500"
              stroke="url(#ctaConnection)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M200,800 Q700,600 1400,400 T1700,900"
              stroke="url(#ctaConnection)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="text-primary">Business?</span>
            </h2>
            
            <p className="text-xl text-tech-gray mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact us to learn how our CXO-focused solutions can drive value for your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="btn-tech-primary text-lg px-12 py-6 bg-red-500 hover:bg-red-600 border-none text-white shadow-glow hover:shadow-[0_0_40px_hsl(348_100%_50%)] transition-all duration-300">
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <p className="text-tech-gray mt-8 text-sm">
              Ready to elevate your executive security intelligence? Let's discuss your needs.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ProductCXO;