import React, { useState } from 'react';
import { Shield, Network, Code, Users, Cloud, Search, CheckCircle, ArrowRight, Target, Lock, Eye, ChevronDown, Bug, Database } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AssessmentReviewPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const subServices = [
    {
      id: 1,
      icon: Shield,
      title: 'Penetration Testing Services',
      description: 'Our penetration testing services go beyond simple scanning to replicate real adversarial behavior. Certified professionals conduct simulated intrusions to identify exploitable weaknesses whether through misconfigurations, privilege escalation, or lateral movement.',
      fullDescription: 'We also offer ethical hacking services using black-box, white-box, and grey-box testing to suit different business needs. The result is a clear, prioritized roadmap that highlights critical flaws and remediation steps.',
      features: ['Real adversarial behavior simulation', 'Certified professionals', 'Black-box, white-box, grey-box testing', 'Privilege escalation testing', 'Lateral movement analysis', 'Clear prioritized roadmap'],
      frameworks: ['OWASP', 'MITRE ATT&CK', 'NIST']
    },
    {
      id: 2,
      icon: Network,
      title: 'Network Penetration Testing',
      description: 'Securing the network perimeter is fundamental. Our network penetration testing examines internal and external environments, uncovering weak authentication, insecure protocols, misconfigured devices, and open ports.',
      fullDescription: 'Internal testing highlights risks if an attacker bypasses defenses, while external testing replicates internet-facing threats. Together, these methods ensure lateral movement and unauthorized access are stopped before they begin.',
      features: ['Internal & external testing', 'Weak authentication detection', 'Insecure protocol identification', 'Device misconfiguration review', 'Open port analysis', 'Lateral movement prevention'],
      frameworks: ['NIST', 'ISO 27001', 'MITRE ATT&CK']
    },
    {
      id: 3,
      icon: Search,
      title: 'Vulnerability Assessment Services',
      description: 'Our vulnerability assessment services combine automated scans with manual validation to ensure accuracy. We identify CVEs, misconfigurations, insecure defaults, and architectural flaws.',
      fullDescription: 'Continuous assessments are offered for dynamic environments such as hybrid clouds or DevOps pipelines, giving teams actionable insights to manage ever-shifting attack surfaces.',
      features: ['CVE identification', 'Configuration analysis', 'Insecure defaults detection', 'Architectural flaw assessment', 'Continuous assessments', 'DevOps pipeline integration'],
      frameworks: ['CVE', 'CWE', 'CVSS', 'NIST']
    },
    {
      id: 4,
      icon: Network,
      title: 'Network Vulnerability Assessment',
      description: 'A specialized layer of our service, network vulnerability assessment, reviews routers, switches, firewalls, wireless networks, and IoT endpoints.',
      fullDescription: 'We check for configuration drift, outdated patches, weak encryption, unnecessary services, and default credentials. This ensures your infrastructure backbone is hardened and resilient.',
      features: ['Router & switch analysis', 'Firewall configuration review', 'Wireless network security', 'IoT endpoint assessment', 'Configuration drift detection', 'Patch management review'],
      frameworks: ['CIS Controls', 'NIST', 'ISO 27001']
    },
    {
      id: 5,
      icon: Code,
      title: 'Application Security Code Review',
      description: 'Applications are a primary attack vector. Our application security code review identifies logic flaws, insecure libraries, improper input handling, and weak API implementations.',
      fullDescription: 'Using both automated static analysis and manual inspection, we uncover risks like SQL injection, cross-site scripting, and authentication weaknesses. The review is benchmarked against OWASP ASVS and SANS Top 25, ensuring best-practice alignment.',
      features: ['Logic flaw identification', 'Insecure library detection', 'Input handling validation', 'API security review', 'SQL injection testing', 'XSS vulnerability assessment'],
      frameworks: ['OWASP ASVS', 'SANS Top 25', 'CWE']
    },
    {
      id: 6,
      icon: Bug,
      title: 'Software Code Vulnerability Assessment',
      description: 'For large or custom systems, our software code vulnerability assessment evaluates entire architectures. We ensure that modules interact securely, inputs are validated across layers, and sensitive operations are shielded from misuse.',
      fullDescription: 'This service is particularly critical for organizations developing proprietary or regulated systems where compliance and resilience are non-negotiable.',
      features: ['Architecture evaluation', 'Module interaction security', 'Cross-layer input validation', 'Sensitive operation protection', 'Proprietary system analysis', 'Compliance validation'],
      frameworks: ['OWASP', 'NIST', 'ISO 27001', 'SOC2']
    },
    {
      id: 7,
      icon: Users,
      title: 'Simulated User Awareness Testing',
      description: 'Human behavior remains one of the weakest links. We simulate phishing, smishing, vishing, and quishing attacks to measure employee responses.',
      fullDescription: 'Results such as click rates and reporting frequency help shape stronger awareness programs.',
      features: ['Phishing simulations', 'Smishing attacks', 'Vishing campaigns', 'Quishing tests', 'Click rate analysis', 'Reporting frequency metrics'],
      frameworks: ['NIST Cybersecurity Framework', 'ISO 27001']
    },
    {
      id: 8,
      icon: Cloud,
      title: 'Cloud & Data Security Testing',
      description: 'Our reviews cover hybrid setups as well as cloud platforms, including AWS, Azure, and Google Cloud. Reviews include IAM roles, storage exposures, database security, and API audits.',
      fullDescription: 'Misconfigured services, unencrypted data, and monitoring gaps are identified before they are exploited.',
      features: ['AWS, Azure, Google Cloud review', 'IAM role analysis', 'Storage exposure detection', 'Database security audit', 'API security testing', 'Monitoring gap identification'],
      frameworks: ['CIS Controls', 'Cloud Security Alliance', 'NIST', 'SOC2']
    }
  ];

  const businessImpacts = [
    {
      icon: Target,
      title: 'Proactive Risk Reduction',
      description: 'Regular penetration testing services and vulnerability assessment services allow organizations to identify and remediate flaws before attackers exploit them.'
    },
    {
      icon: CheckCircle,
      title: 'Compliance Alignment',
      description: 'Standards like ISO 27001, PCI-DSS, SOC2, and GDPR require ongoing validation through network vulnerability assessments and application security code reviews.'
    },
    {
      icon: Lock,
      title: 'Improved Response Preparedness',
      description: 'Insights from software code vulnerability assessments and ethical hacking services enhance incident response strategies.'
    },
    {
      icon: Eye,
      title: 'Executive Clarity',
      description: 'Findings are mapped to business risks, giving leadership the visibility they need for decision-making.'
    },
    {
      icon: Code,
      title: 'Development Security',
      description: 'By embedding application security code review and software code vulnerability assessment early in the pipeline, teams reduce downstream risk and technical debt.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Security Assessments Completed' },
    { number: '99.2%', label: 'Critical Vulnerabilities Found' },
    { number: '48hrs', label: 'Average Report Delivery' },
    { number: '100%', label: 'Compliance Success Rate' }
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
                Service 02
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
              Assessment & Review
            </h1>
            <p className="text-2xl md:text-3xl text-black font-semibold mb-8">
              Know your exposure before attackers do
            </p>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
              Proactive security evaluations that identify vulnerabilities before adversaries do, 
              helping organizations close gaps and strengthen defenses with confidence.
            </p>
            
            {/* Service Dropdown Navigation */}
            <div className="mb-12">
              <div className="relative inline-block">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-white border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold flex items-center gap-2 min-w-[300px] justify-between"
                >
                  <span>{subServices[activeService].title}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-xl z-10 max-h-80 overflow-y-auto">
                    {subServices.map((service, index) => (
                      <button
                        key={service.id}
                        onClick={() => {
                          setActiveService(index);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-all duration-200 flex items-center gap-3 ${
                          activeService === index ? 'bg-gray-100 text-black' : 'text-gray-700'
                        }`}
                      >
                        <service.icon className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{service.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                Schedule Assessment
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 font-semibold text-lg">
                Download Methodology
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
                <div className="text-3xl md:text-4xl font-bold mb-2 text-white">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
              Why Assessment & Review Matters
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Security weaknesses are often found after it's too late, when attackers have already exploited them. 
                Potential impacts range from monetary losses to reputational harm and compliance violations. 
                A proactive approach changes this narrative.
              </p>
              <p>
                Our Assessment & Review service delivers structured evaluations of networks, applications, infrastructure, 
                and user behavior. Through a combination of automated tools and manual analysis, we simulate real-world 
                tactics used by adversaries.
              </p>
              <p>
                From network penetration testing to application security code review, our assessments are aligned with 
                frameworks such as OWASP, MITRE ATT&CK, and NIST. Each engagement is tailored to your environment, 
                ensuring precision, relevance, and measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Service Detail */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-black to-gray-900 p-8 text-white">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-4 rounded-lg mr-6">
                    {React.createElement(subServices[activeService].icon, { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      {subServices[activeService].title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {subServices[activeService].frameworks.map((framework, index) => (
                        <span key={index} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                          {framework}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">Service Overview</h3>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {subServices[activeService].description}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {subServices[activeService].fullDescription}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">Key Features & Capabilities</h3>
                    <div className="space-y-4">
                      {subServices[activeService].features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 font-semibold text-lg group">
                        Get Started with {subServices[activeService].title}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Overview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Complete Assessment Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of security assessment services covers every aspect of your digital infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subServices.map((service, index) => (
              <div 
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`cursor-pointer p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${
                  activeService === index 
                    ? 'border-black bg-gray-100' 
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <div className={`p-3 rounded-lg mb-4 inline-block ${
                  activeService === index ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className={`font-bold mb-2 ${
                  activeService === index ? 'text-black' : 'text-black'
                }`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description.substring(0, 100)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Business Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Assessments are not just technical exercises; they are strategic enablers for your organization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {businessImpacts.map((impact, index) => (
              <div key={index} className="text-center group">
                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <impact.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{impact.title}</h3>
                <p className="text-gray-600 leading-relaxed">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-white text-black text-sm font-semibold rounded-full">
                🛡️ Secure Your Organization
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Ready to Assess Your Security Posture?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Don't wait for attackers to find your vulnerabilities. Let our experts identify and help you remediate security gaps before they become breaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-black px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 font-semibold text-lg shadow-lg">
                <span className="flex items-center gap-3">
                  Schedule Security Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-black transition-all duration-500 font-semibold text-lg transform hover:scale-105 shadow-lg">
                <span className="flex items-center gap-3">
                  Download Sample Report
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

export default AssessmentReviewPage;