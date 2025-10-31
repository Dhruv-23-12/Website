import React from 'react';
import { Shield, Cpu, Cloud, Radar, Lock, AlertTriangle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CyberSOCPage: React.FC = () => {
  const capabilities = [
    { icon: Radar, title: '24/7 Monitoring', desc: 'Continuous visibility across endpoints, cloud, and network with enriched telemetry.' },
    { icon: AlertTriangle, title: 'Threat Detection', desc: 'Behavior analytics and IOC correlation to surface real incidents faster.' },
    { icon: Shield, title: 'Incident Response', desc: 'Playbooks and rapid containment to reduce dwell time and blast radius.' },
    { icon: Cpu, title: 'Automation', desc: 'SOAR-driven enrichment, triage, and response to scale operations efficiently.' },
    { icon: Cloud, title: 'Cloud Security', desc: 'Posture management, workload hardening, and identity protections across clouds.' },
    { icon: Lock, title: 'Vulnerability & Patch', desc: 'Risk-based prioritization and continuous remediation across your estate.' }
  ];

  const metrics = [
    { number: '24/7', label: 'Managed Coverage' },
    { number: '<10m', label: 'Mean Time To Detect' },
    { number: '<30m', label: 'Mean Time To Respond' },
    { number: '99.9%', label: 'Uptime & SLA' }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-full">
                Cyber-SOC
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
              Managed Detection and Response
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
              Modern SOC integrating telemetry, automation, and expert analysts to detect, triage, and respond—fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                Talk to SOC Team
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 font-semibold text-lg">
                Download SOC Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A modern Security Operations Center (SOC) is no longer a passive monitoring unit; it is the
              nerve center of organizational cyber defense. Threats evolve in scale and sophistication, and
              businesses require more than just alerts; they need actionable intelligence, real-time visibility,
              and precise response mechanisms.
            </p>
            <p>
              Our Cyber-SOC provides exactly that, blending expert analysts, advanced automation, and integrated
              SIEM solutions into a single operational ecosystem. At its foundation lies our proprietary platform
              that unifies security information and event management, threat intelligence, and automated escalation
              workflows. From interactive dashboards to seamless collaboration across Slack, Jira, email, and even
              toll-free voice calls, every element is designed for speed, accuracy, and resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-white">{m.number}</div>
                <div className="text-gray-300">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Services */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Sub-Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated capabilities that turn signals into action and outcomes.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-3">1. SIEM Monitoring & Threat Detection</h3>
              <p className="text-gray-700 leading-relaxed">
                We deploy and manage advanced SIEM solutions that deliver holistic monitoring across endpoints,
                cloud workloads, and on-premise assets. Our security information and event management framework
                correlates logs, flags anomalies, and detects emerging threats using behavior analytics and enriched
                intelligence. Through SIEM consulting services, we fine-tune rules, optimize alerts, and normalize
                data to minimize noise and maximize precision.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-3">2. Endpoint & Perimeter Monitoring</h3>
              <p className="text-gray-700 leading-relaxed">
                Using advanced EDR tools and perimeter defenses such as IDS/IPS and firewalls, we track ransomware
                attempts, privilege escalations, and zero-day exploits. Continuous oversight prevents lateral movement
                and keeps critical assets safe.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-3">3. SaaS & Cloud Security Monitoring</h3>
              <p className="text-gray-700 leading-relaxed">
                With businesses shifting to SaaS and multi-cloud environments, our SOC integrates directly into
                Microsoft 365, AWS, and Google Cloud. Unauthorized access attempts, misconfigurations, and shadow IT
                activities are flagged in real time and presented in a unified dashboard alongside on-prem events.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-3">4. Vulnerability & Patch Management</h3>
              <p className="text-gray-700 leading-relaxed">
                We deliver continuous vulnerability assessments and integrate results into remediation workflows. From
                network vulnerability assessments to patch validation, risks are prioritized based on severity and
                mapped to ticketing or patch systems for faster closure.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-3">5. Incident Response & Forensics</h3>
              <p className="text-gray-700 leading-relaxed">
                When threats escalate, our structured incident response playbooks ensure immediate containment. Alerts
                are escalated through Slack, Jira, or direct calls, enabling coordinated action. Beyond response, our
                digital forensics services investigate root causes through malware reverse engineering, memory analysis,
                and log correlation. Our cyber incident investigation framework provides detailed reports covering
                compromise points, attacker movements, and recovery paths. Comprehensive data breach analysis identifies
                stolen data, impacted systems, and compliance exposure.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-3">6. Threat Intelligence Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                We integrate global threat intelligence feeds, updating IOCs, attacker TTPs, and behavioral patterns in
                near real time. This ensures our SIEM solutions remain adaptive, closing visibility gaps before attackers
                exploit them.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-3">7. Security Reporting & Dashboards</h3>
              <p className="text-gray-700 leading-relaxed">
                Our executive dashboards translate technical events into meaningful insights. Analysts gain deep
                forensics visibility, while business leaders access concise reports on incident trends, exposure levels,
                and response metrics without technical complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Why Choose Us?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Cyber threats today are adaptive, multi-stage, and designed to evade traditional detection. A fragmented
                approach is no longer sufficient. Our Cyber-SOC delivers a centralized, intelligence-driven environment
                where monitoring, investigation, and response are seamlessly connected.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With SIEM solutions enhanced by SIEM consulting services, organizations gain clarity, precision, and
                contextual defense. Meanwhile, our digital forensics services, cyber incident investigation, and data
                breach analysis ensure that no compromise goes undetected and every incident is resolved with speed and
                accuracy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As your operations grow, our SOC scales offering both 24/7 coverage and co-managed models that strengthen
                your internal team. This isn’t just security monitoring; it’s a modern defense ecosystem designed for
                evolving threats.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Operating Models</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-black"></span><span>24/7 managed coverage with defined SLAs for detection and response.</span></li>
                <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-black"></span><span>Co-managed models that strengthen your internal team and processes.</span></li>
                <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-black"></span><span>Integrated collaboration via Slack, Jira, email, and toll-free voice calls.</span></li>
                <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-black"></span><span>Automated escalation workflows backed by playbooks and SOAR integrations.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unified visibility and response with intelligence-driven automation and proven playbooks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="group bg-white border-2 border-gray-200 p-8 rounded-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-black">
                <div className="bg-black text-white p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                  {React.createElement(cap.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{cap.title}</h3>
                <p className="text-gray-700 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-white text-black text-sm font-semibold rounded-full">
                🚀 Get Started
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Ready to Modernize Your SOC?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Partner with our Cyber-SOC for proactive defense, faster response, and measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-black px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 font-semibold text-lg shadow-lg">
                <span className="flex items-center gap-3">
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-black transition-all duration-500 font-semibold text-lg transform hover:scale-105 shadow-lg">
                <span className="flex items-center gap-3">
                  View Playbooks
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

export default CyberSOCPage;


