import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Code, Shield, Smartphone, Building2, ArrowRight, CheckCircle, Star, Users, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      // Delay to ensure DOM is ready after route render
      const timeoutId = window.setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const headerOffset = 96; // account for fixed header
          const elementPosition = el.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 50);
      return () => window.clearTimeout(timeoutId);
    }
  }, [location.hash]);
  const services = [
    {
      icon: Code,
      title: 'Custom Software Solutions',
      description: 'Tailored applications built with cutting-edge technologies to solve your unique business challenges.',
      features: ['Full-stack Development', 'API Integration', 'Database Design', 'Cloud Architecture'],
      benefits: ['Scalable solutions', 'Custom workflows', 'Integration ready', 'Future-proof technology'],
      pricing: 'Starting from $15,000'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security audits, compliance frameworks, and protection against modern threats.',
      features: ['Security Audits', 'GDPR Compliance', 'Penetration Testing', 'Risk Assessment'],
      benefits: ['Regulatory compliance', 'Threat protection', 'Security monitoring', 'Incident response'],
      pricing: 'Starting from $8,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile & Web Apps',
      description: 'Cross-platform mobile and progressive web applications with exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Progressive Web Apps', 'UI/UX Design'],
      benefits: ['Cross-platform', 'Native performance', 'Offline capability', 'App store ready'],
      pricing: 'Starting from $12,000'
    },
    {
      icon: Building2,
      title: 'Enterprise SaaS Platforms',
      description: 'Scalable software-as-a-service platforms designed for enterprise-level performance.',
      features: ['Multi-tenant Architecture', 'Auto-scaling', 'Analytics Dashboard', 'Enterprise Integration'],
      benefits: ['Enterprise-grade', 'Auto-scaling', 'Multi-tenant', 'Analytics included'],
      pricing: 'Starting from $25,000'
    }
  ];

  const serviceIds = [
    'custom-software',
    'cybersecurity',
    'mobile-web-apps',
    'enterprise-saas'
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Code, number: '1000+', label: 'Projects Delivered' },
    { icon: Star, number: '4.9/5', label: 'Client Rating' },
    { icon: Zap, number: '99.9%', label: 'Uptime SLA' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a comprehensive project roadmap.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the solution architecture and creates detailed wireframes.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using agile methodology with continuous testing.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing maintenance and support.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-full">
                Our Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8">
              Comprehensive Software Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
              From custom development to enterprise platforms, we deliver innovative solutions that drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                Get Free Consultation
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 font-semibold text-lg">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-gray-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Anchor target for Organizational Training & Awareness */}
          <div id="organizational-training-awareness" className="-mt-24 pt-24"></div>
          {/* Organizational Training & Awareness Content */}
          <div className="mb-24 rounded-2xl border-2 border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white px-8 md:px-12 py-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Organizational Training & Awareness</h2>
              <p className="text-gray-200 max-w-3xl">Build a culture of security where every employee is a proactive defender.</p>
            </div>
            <div className="bg-white px-8 md:px-12 py-12 space-y-12">
              <section>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Cybersecurity Awareness Training</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cybersecurity today is not just about security; it is about awareness. Studies show that most breaches begin with human error—misplaced clicks, weak passwords, or phishing attempts. Our training equips employees to recognize and prevent threats before they cause damage, turning your workforce into an active layer of protection. Through carefully designed modules, simulations, and practical guidance, employees learn how to identify risks, respond quickly, and contribute to a secure workplace.
                </p>
              </section>
              <section>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Security Awareness Programs That Build Lasting Resilience</h3>
                <p className="text-gray-700 leading-relaxed">
                  Technology alone cannot protect your organization if people are unprepared. Our programs go beyond one‑time lectures or generic courses. They are built around real‑world scenarios—phishing attempts, social engineering, and ransomware—that employees encounter daily. Interactive and industry‑specific, these programs help teams gain knowledge and the confidence to apply it, making your organization more resilient to evolving threats. We regularly update content with the latest threat intelligence so training stays current and effective.
                </p>
              </section>
              <section>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Employee Cybersecurity Training for Every Role</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every employee—from executives to interns—contributes to safeguarding data. We tailor training to roles and responsibilities: senior leaders learn strategic risk, compliance, and regulatory duties, while operational teams practice safe email, device, and data‑handling routines. Remote and hybrid work patterns are addressed to keep users secure wherever they log in. The result: practical tools and awareness that reduce risk and support compliance across the organization.
                </p>
              </section>
              <section>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Why Awareness Training Matters for Business Success</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cybersecurity is a core business priority. A single mistake can expose sensitive data, trigger costly downtime, and erode customer trust. Investing in cybersecurity awareness training and structured programs reduces breach likelihood, supports regulatory requirements, and builds a culture of shared responsibility. When people understand the impact of their actions, they protect both company and customer data.
                </p>
                <ul className="grid md:grid-cols-2 gap-3 list-none">
                  <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-black"></span><span className="text-gray-700">Strengthens long‑term resilience and security culture</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-black"></span><span className="text-gray-700">Supports compliance with industry and regulatory standards</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-black"></span><span className="text-gray-700">Improves client trust and brand reputation</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-black"></span><span className="text-gray-700">Transforms employees into proactive defenders</span></li>
                </ul>
              </section>
              <div className="pt-4">
                <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold">
                  Schedule Awareness Training
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in delivering cutting-edge software solutions that transform businesses
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                id={serviceIds[index]}
                className="group bg-white border-2 border-gray-200 p-10 rounded-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-black relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="bg-black text-white p-4 rounded-lg mr-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-black group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-black mb-4 text-lg">Key Features:</h4>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-black mb-4 text-lg">Benefits:</h4>
                    <div className="space-y-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-black">{service.pricing}</div>
                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 group-hover:gap-3">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality delivery and successful project outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-white to-gray-200 text-black text-sm font-semibold rounded-full">
                🚀 Get Started
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Let's discuss how we can help you achieve your business goals with our innovative software solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-white to-gray-100 text-black px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 font-semibold text-lg shadow-lg">
                <span className="flex items-center gap-3">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-black transition-all duration-500 font-semibold text-lg transform hover:scale-105 shadow-lg">
                <span className="flex items-center gap-3">
                  View Case Studies
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;

