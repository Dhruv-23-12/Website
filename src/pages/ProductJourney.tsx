import React, { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Lightbulb, BookOpen, Code, Puzzle, BarChart3, Globe } from "lucide-react";
import vrImage from "@/assets/vrimage.png";

// Timeline milestone data
const milestones = [
  {
    date: "March 2023",
    title: "Spark of Innovation",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    description: "In the early months of 2023, as organizations worldwide faced mounting pressure of advancements in cyberthreats and made bold cybersecurity decisions that risked long term consequences, security teams were drowning in manual spreadsheets - they had budgets with very little clarity on how to manage security programs effectively and communicate outcomes and expectations to the executive deck. Our leaders at Cybersecurity Umbrella recognized these fallacies which can bring resilient solutions."
  },
  {
    date: "Early 2023",
    title: "Laying the Foundation",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    description: "The first half of 2023 was our deep-dive phase. Our team immersed themselves in the intricacies of compliance frameworks, studying everything from ISO 27001 to SOC 2, NIST to PCI-DSS. We weren't just building a product; we were architecting a solution that would understand compliance the way seasoned auditors do—but with the speed and accuracy only technology can provide. By mid-2023, we contracted some motivated team of developers, compliance specialists, and security engineers. The technical blueprints were drawn, the confidence was crystallized, and our management team were eager to see what we would build."
  },
  {
    date: "July 2023 - June 2024",
    title: "First Breakthrough",
    icon: <Code className="h-8 w-8 text-primary" />,
    description: "In July 2023, the first lines of code were written for what would become our flagship Automated Gap Analysis Tool. Our development team worked tirelessly, fueled by the vision of revolutionizing how organizations approach compliance readiness. The challenge was immense: how do you teach an application to think like a compliance expert? Month by month, our gap analysis product evolved. We developed proprietary algorithms that could map business intelligence to compliance assessments, identify hidden interdependencies, and surface gaps that auditors might overlook. June 2024 marked a pivotal moment in the development. Our first prototype was complete."
  },
  {
    date: "2023-2024",
    title: "Expanding the Vision",
    icon: <Puzzle className="h-8 w-8 text-primary" />,
    description: "But great companies don't stop at one solution. While our gap analysis tool was taking shape, we recognized another critical need in the cybersecurity ecosystem. Risk management was fragmented, reactive, and disconnected from compliance efforts. The idea for our Risk Register Tool was born from this insight. By February 2024, we had launched parallel development on our risk management platform. The vision was ambitious: create an integrated ecosystem where gap analysis and risk management worked in sync completing the story of an audit results and afterworks. Organizations could finally see the complete picture of their cybersecurity posture in one unified platform."
  },
  {
    date: "October 2024",
    title: "Second Innovation",
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    description: "October 2024 brought another milestone that our team will never forget. Our Risk Register Tool prototype was ready, featuring risk identification, automated assessment workflows, and predictive analytics that could forecast emerging threats. More importantly, it seamlessly integrated with our gap analysis platform, creating something unprecedented in the market. Beta customers described it as 'the missing piece we never knew we needed.' The tool didn't just track risks—it connected them to compliance requirements, business processes, and remediation strategies. It was risk management reimagined for the modern enterprise."
  },
  {
    date: "2025 and Beyond",
    title: "The Future Unfolds",
    icon: <Globe className="h-8 w-8 text-primary" />,
    description: "As we write this story, Cybersecurity Umbrella stands at the threshold of our next chapter. Our integrated platform combines the power of automated gap analysis with intelligent risk management, all enhanced by cutting-edge AI that learns and adapts to each organization's unique needs. We've transformed from a startup with a bold vision into a company that's reshaping how organizations approach cybersecurity compliance. But this is just the beginning. Our roadmap extends far beyond where we are today—international expansion, advanced predictive analytics, and partnerships that will bring our innovation to organizations worldwide."
  }
];

// Testimonials for the journey
const journeyTestimonials = [
  {
    quote: "Cybersecurity Umbrella's platform let us focus on strategy, not spreadsheets. The automation is a game-changer.",
    author: "CISO, Fintech Enterprise",
    role: "Chief Information Security Officer",
    rating: 5
  },
  {
    quote: "The integrated gap analysis and risk management tools provide the complete picture we've been missing for years.",
    author: "Compliance Manager",
    role: "Healthcare Organization",
    rating: 5
  },
  {
    quote: "Our audit preparation time reduced by 90%. The platform caught gaps we would have missed manually.",
    author: "Security Auditor",
    role: "Big Four Consulting",
    rating: 5
  }
];

// Hero Section Component
const ProductJourneyHero: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const nextSection = document.getElementById('timeline-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between flex-1">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <span className="inline-block px-5 py-2 mb-6 rounded-full glass-badge text-white font-semibold tracking-wide text-sm">
            ✦ Product Journey 
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Switzer', sans-serif" }}>
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-200 bg-clip-text text-transparent">
              Streamlining the CISO Role Through Product Innovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-tech-gray mb-12 max-w-3xl md:max-w-lg leading-relaxed">
            From vision to reality – our journey to empower cybersecurity leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center">
            <Button 
              className="btn-tech-primary text-lg px-12 py-6 bg-red-500 hover:bg-red-600 border-none text-white"
              onClick={scrollToNext}
            >
              Explore Our Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        {/* Right: Image reverted to plain style */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
          <img 
            src={vrImage} 
            alt="Product Journey VR" 
            className="max-w-xs md:max-w-md lg:max-w-lg w-full h-auto rounded-xl shadow-lg object-contain"
            style={{ background: 'rgba(0,0,0,0.02)' }}
          />
        </div>
      </div>
      {/* Scroll indicator */}
      <div 
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer"
        onClick={scrollToNext}
      >
        <ChevronDown className="w-10 h-10 text-primary drop-shadow-glow" />
      </div>
    </section>
  );
};

// Timeline Section Component - static left menu, dynamic right content
const TimelineSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const active = milestones[activeIndex];
  const contentRef = React.useRef<HTMLDivElement>(null);
  const sectionRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (idx: number) => {
    const root = contentRef.current;
    const el = sectionRefs.current[idx] as HTMLDivElement | null;
    if (!root || !el) return;
    const targetTop = el.offsetTop - (root.clientHeight - el.clientHeight) / 2;
    root.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
  };

  // Deep-link: read hash on mount and update when active changes
  useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
    if (!hash) return;
    const idx = milestones.findIndex(m => m.date.toLowerCase().replace(/\s+/g, '-') === hash.toLowerCase());
    if (idx >= 0) setActiveIndex(idx);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const newHash = milestones[activeIndex].date.toLowerCase().replace(/\s+/g, '-');
    if (window.location.hash !== `#${newHash}`) {
      history.replaceState(null, '', `#${newHash}`);
    }
  }, [activeIndex]);

  // Keyboard navigation scrolls to next/prev section
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setActiveIndex(i => {
          const next = Math.min(milestones.length - 1, i + 1);
          scrollToSection(next);
          return next;
        });
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setActiveIndex(i => {
          const prev = Math.max(0, i - 1);
          scrollToSection(prev);
          return prev;
        });
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Observe which section in the scroll container is most visible
  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;
    const sections = sectionRefs.current.filter(Boolean) as HTMLDivElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) {
          const idxAttr = vis.target.getAttribute('data-index');
          if (idxAttr) {
            const idx = parseInt(idxAttr, 10);
            if (!Number.isNaN(idx)) setActiveIndex(idx);
          }
        }
      },
      { root, threshold: [0.5, 0.75] }
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <section id="timeline-section" className="py-24 bg-background" style={{ marginTop: '100px' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-glow tracking-tight text-red-500">Our Product Journey</h2>
          <p className="text-xl max-w-3xl mx-auto font-light text-white">From concept to reality – the evolution of tools that redefine cybersecurity leadership</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: static months list */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28">
              <h3 className="text-2xl font-semibold mb-6">Timeline</h3>
              <ul className="space-y-3">
                {milestones.map((m, i) => (
                  <li key={i}>
                    <button
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors border ${i === activeIndex ? 'bg-red-500/10 border-red-500/40 text-white' : 'border-white/10 text-tech-gray hover:text-white hover:border-white/30'}`}
                      onClick={() => {
                        scrollToSection(i);
                        setActiveIndex(i);
                      }}
                      aria-current={i === activeIndex ? 'true' : 'false'}
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-5 w-5 items-center justify-center text-primary">{m.icon}</span>
                        <span className="font-medium">{m.date}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right: dynamic milestone content with scroll-snap */}
          <div className="lg:col-span-8">
            <div
              ref={contentRef}
              className="rounded-xl shadow-xl animate-fade-in-up p-0 max-h-[70vh] overflow-y-auto snap-y snap-mandatory no-scrollbar bg-background"
            >
              {milestones.map((m, i) => (
                <div
                  key={i}
                  ref={(el) => (sectionRefs.current[i] = el)}
                  data-index={i}
                  className={`p-8 min-h-[70vh] snap-center transition-all duration-500 ${i === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-70'}`}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-bold uppercase tracking-wider text-red-300 bg-red-900/30 px-3 py-1 rounded-full mr-4">{m.date}</span>
                    <span className="text-lg font-bold text-white flex items-center gap-2">{m.title}</span>
                  </div>
                  <p className="text-tech-gray text-lg leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA at the end of timeline */}
        <div className="flex justify-center mt-24">
          <Button className="btn-tech-primary text-lg px-12 py-6 bg-red-500 hover:bg-red-600 border-none text-white shadow-glow hover:shadow-[0_0_40px_hsl(348_100%_50%)] transition-all duration-300 animate-glow">
            Transform Your Compliance Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

// Animated Infographic Section
const InfographicSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background to-card relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Integrated <span className="text-primary">Ecosystem</span>
          </h2>
          <p className="text-xl text-tech-gray max-w-3xl mx-auto">
            Our unified platform combines automated gap analysis with intelligent risk management
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Animated SVG Ecosystem */}
          <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 800 300">
              <defs>
                <linearGradient id="gapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(348 100% 50%)" />
                  <stop offset="100%" stopColor="hsl(348 100% 60%)" />
                </linearGradient>
                <linearGradient id="riskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(348 100% 60%)" />
                  <stop offset="100%" stopColor="hsl(348 100% 50%)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Gap Analysis Tool */}
              <circle cx="150" cy="150" r="60" fill="url(#gapGradient)" filter="url(#glow)" className="animate-pulse" />
              <text x="150" y="160" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                Gap Analysis
              </text>
              <text x="150" y="175" textAnchor="middle" fill="white" fontSize="10">
                Tool
              </text>
              
              {/* Risk Register Tool */}
              <circle cx="650" cy="150" r="60" fill="url(#riskGradient)" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <text x="650" y="160" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                Risk Register
              </text>
              <text x="650" y="175" textAnchor="middle" fill="white" fontSize="10">
                Tool
              </text>
              
              {/* Connecting line with animation */}
              <line 
                x1="210" 
                y1="150" 
                x2="590" 
                y2="150" 
                stroke="hsl(348 100% 50%)" 
                strokeWidth="4" 
                className="animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
              
              {/* Data flow particles */}
              <circle cx="400" cy="150" r="3" fill="hsl(348 100% 50%)" className="animate-data-flow" style={{ animationDelay: '0.7s' }} />
              <circle cx="350" cy="150" r="2" fill="hsl(348 100% 50%)" className="animate-data-flow" style={{ animationDelay: '0.8s' }} />
              <circle cx="450" cy="150" r="2" fill="hsl(348 100% 50%)" className="animate-data-flow" style={{ animationDelay: '0.9s' }} />
            </svg>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-tech-gray text-lg max-w-2xl mx-auto leading-relaxed">
              Our integrated platform combines the power of automated gap analysis with intelligent risk management, 
              providing a unified view of your cybersecurity posture. Organizations can finally see the complete 
              picture of their cybersecurity compliance in one seamless platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Impact & Testimonials Section
const ImpactSection: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Impact & <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-tech-gray max-w-2xl mx-auto">
            See how our product journey has transformed cybersecurity leadership
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journeyTestimonials.map((testimonial, index) => (
            <div key={index} className="card-tech relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="absolute top-4 right-4 text-primary">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <p className="text-lg text-tech-gray mb-6 leading-relaxed pr-8">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-tech-gray">{testimonial.role}</div>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-primary fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Call to Action Section
const ProductJourneyCTA: React.FC = () => {
  return (
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
            Transform Your <span className="text-primary">Compliance Journey</span>
          </h2>
          
          <p className="text-xl text-tech-gray mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover how Cybersecurity Umbrella can revolutionize your organization's approach to cybersecurity governance. 
            Join the future of automated compliance and risk management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-tech-primary text-lg px-12 py-6 bg-red-500 hover:bg-red-600 border-none text-white shadow-glow hover:shadow-[0_0_40px_hsl(348_100%_50%)] transition-all duration-300">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" className="btn-tech-secondary text-lg px-12 py-6 border-primary/30 hover:border-primary/50">
              Watch Demo
            </Button>
          </div>
          
          <p className="text-tech-gray mt-8 text-sm">
            Ready to streamline your CISO role? Let's build the future together.
          </p>
        </div>
      </div>
    </section>
  );
};

// Main Product Journey Page
const ProductJourney: React.FC = () => {
  return (
    <main className="bg-background text-white font-sans min-h-screen">
      <Header />
      <ProductJourneyHero />
      <TimelineSection />
      <InfographicSection />
      <ImpactSection />
      <ProductJourneyCTA />
      <Footer />
    </main>
  );
};

export default ProductJourney;



