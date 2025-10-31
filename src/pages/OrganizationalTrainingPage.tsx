import React from 'react';
import { Users, Shield, GraduationCap, CheckCircle, ArrowRight, Brain, Target, Lock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrganizationalTrainingPage: React.FC = () => {
  const stats = [
    { number: '95%', label: 'Phishing Risk Reduction Potential' },
    { number: '10k+', label: 'Employees Trained' },
    { number: '4.9/5', label: 'Learner Satisfaction' },
    { number: '100%', label: 'Role-Based Coverage' }
  ];

  const programPillars = [
    { icon: GraduationCap, title: 'Awareness Foundations', points: ['Threat basics', 'Password hygiene', 'Safe browsing'] },
    { icon: Users, title: 'Role-Based Learning', points: ['Exec briefings', 'Ops practices', 'Remote work safety'] },
    { icon: Shield, title: 'Hands-on Simulations', points: ['Phishing drills', 'Social engineering', 'Ransomware playbooks'] },
    { icon: Brain, title: 'Continuous Improvement', points: ['Metrics & reporting', 'Refresher cycles', 'Threat intel updates'] }
  ];

  const businessBenefits = [
    { icon: Target, title: 'Risk Reduction', desc: 'Fewer incidents from human error and faster reporting.' },
    { icon: Lock, title: 'Compliance Support', desc: 'Aligns with industry and regulatory expectations.' },
    { icon: Shield, title: 'Resilient Culture', desc: 'Security becomes a shared responsibility across teams.' }
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
                Service 03
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
              Organizational Training & Awareness
            </h1>
            <p className="text-2xl md:text-3xl text-black font-semibold mb-8">
              Turn your people into proactive defenders
            </p>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
              Cybersecurity awareness training that empowers every role to recognize threats, respond quickly, and build a lasting culture of security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                Schedule Training
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 font-semibold text-lg">
                View Curriculum
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
              Why Awareness Training Matters
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Most breaches begin with human error—misplaced clicks, weak passwords, or phishing emails. Our training equips employees with the skills to recognize and prevent threats before they cause damage, turning your workforce into an active layer of protection.
              </p>
              <p>
                We go beyond generic courses with real‑world scenarios: phishing, social engineering, and ransomware incidents teams may face every day. Modules are interactive and updated regularly with current threat intelligence so learning stays relevant.
              </p>
              <p>
                Every role receives tailored guidance—from executive risk and compliance awareness to hands‑on safe practices for email, device usage, and data handling across remote and hybrid work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Pillars */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Program Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured, role‑based, and measurable—designed for lasting behavior change
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programPillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-black to-gray-900 p-6 text-white">
                  {React.createElement(pillar.icon, { className: 'w-8 h-8' })}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-4">{pillar.title}</h3>
                  <div className="space-y-3">
                    {pillar.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reduce incident likelihood, meet compliance, and build trust through security culture
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="text-center group bg-gray-50 rounded-xl p-8 border border-gray-100">
                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {React.createElement(benefit.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
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
                📘 Get Started
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Ready to Train Your Team?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Empower employees with practical skills and awareness to reduce risk and strengthen compliance—wherever they work.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-black px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 font-semibold text-lg shadow-lg">
                <span className="flex items-center gap-3">
                  Schedule Awareness Training
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-black transition-all duration-500 font-semibold text-lg transform hover:scale-105 shadow-lg">
                <span className="flex items-center gap-3">
                  Download Program Outline
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

export default OrganizationalTrainingPage;


