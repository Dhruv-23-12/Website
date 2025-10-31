import Header from '../components/Header';
import Footer from '../components/Footer';

const ResearchDevelopmentAutomationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-full">Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-6">Research, Development & Automation</h1>
            <p className="text-lg md:text-xl text-gray-600 mt-6 font-medium">Turn innovation into secure automation.</p>
          </div>

          <section className="mb-20">
            <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>Cybersecurity must evolve at the same pace as innovation. Attackers are leveraging artificial intelligence and automated exploitation to bypass static defenses, making reactive security insufficient. To keep ahead, organizations need systems that anticipate risks, adapt intelligently, and automate complex defenses.</p>
              <p>Our Research, Development & Automation service enables that capability. We merge domain-specific research with advanced engineering to deliver secure software development, adaptive threat detection, and custom security software solutions that reduce operational strain and improve visibility. Whether embedding application security development into DevOps, deploying autonomous detection agents, or automating compliance processes, we transform security challenges into scalable, future-ready tools.</p>
              <p>Through AI, behavioral analytics, and enterprise process engineering, our team builds solutions that are reliable, regulatory-aligned, and resilient. Automation not only accelerates detection and response but also strengthens teams against the growing scale and complexity of threats.</p>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-black">Sub-Services</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border-2 border-gray-200 rounded-2xl bg-white">
                <h3 className="text-2xl font-semibold text-black mb-3">1. AI-driven DLP Solutions</h3>
                <p className="text-gray-700">We design intelligent Data Loss Prevention systems that use machine learning to recognize patterns, monitor data in motion, and prevent unauthorized sharing. By adapting to behavior and workflows, these solutions minimize false positives and ensure only the right access under the right conditions. This is vital for industries where a single breach can carry major legal and reputational costs.</p>
              </div>
              <div className="p-8 border-2 border-gray-200 rounded-2xl bg-white">
                <h3 className="text-2xl font-semibold text-black mb-3">2. Awareness & Simulation Models</h3>
                <p className="text-gray-700">Human error is still a leading attack vector. We create automated phishing, smishing, and quishing simulations that adapt to user behavior. Unlike traditional static training, these tools deliver dynamic feedback, track performance over time, and help teams build a proactive security culture.</p>
              </div>
              <div className="p-8 border-2 border-gray-200 rounded-2xl bg-white">
                <h3 className="text-2xl font-semibold text-black mb-3">3. Custom Security Automation Tools</h3>
                <p className="text-gray-700">Every enterprise has unique risks. Our team develops custom security software solutions and lightweight automation scripts aligned to your IT landscape. From log enrichment to threat intelligence correlation and incident response playbooks, these tools integrate directly with your SOC stack, reducing manual overhead and improving consistency.</p>
              </div>
              <div className="p-8 border-2 border-gray-200 rounded-2xl bg-white">
                <h3 className="text-2xl font-semibold text-black mb-3">4. Research for Threat Detection</h3>
                <p className="text-gray-700">We conduct dedicated research into new attack patterns and convert insights into detection engines powered by AI. Using supervised and unsupervised learning, our systems identify anomalies such as lateral movement and credential theft threats that traditional rule-based systems miss.</p>
              </div>
              <div className="p-8 border-2 border-gray-200 rounded-2xl bg-white">
                <h3 className="text-2xl font-semibold text-black mb-3">5. Automation Strategy Consulting</h3>
                <p className="text-gray-700">Deploying automation requires careful planning. Our consulting service evaluates readiness, tool selection, and governance, ensuring each automation aligns with compliance frameworks and operational maturity. From automated patching to access workflows, every action is traceable and defensible.</p>
              </div>
              <div className="p-8 border-2 border-gray-200 rounded-2xl bg-white">
                <h3 className="text-2xl font-semibold text-black mb-3">6. Secure Software Development</h3>
                <p className="text-gray-700">The strongest protection comes when security is embedded at the design phase, not added as an afterthought. Our secure software development services integrate application security development best practices directly into your SDLC. We implement static and dynamic code analysis, dependency monitoring, and secure API/microservice architectures, balancing speed of delivery with resilience.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Strategic Value</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">As cyber risks scale in speed and sophistication, organizations cannot depend on manual operations or outdated tools. Research, development, and automation deliver four key benefits:</p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-800">
                <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-black"></span><span><span className="font-semibold">Operational Agility</span> – Automated tools respond in real time, improving efficiency without scaling headcount.</span></li>
                <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-black"></span><span><span className="font-semibold">Accelerated Detection & Response</span> – AI-driven agents reduce mean time to detect (MTTD) and mean time to respond (MTTR), cutting exposure windows.</span></li>
                <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-black"></span><span><span className="font-semibold">Context-Driven Defense</span> – Our custom security software solutions are designed around your unique infrastructure and processes, delivering stronger protection than off-the-shelf tools.</span></li>
                <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-black"></span><span><span className="font-semibold">Regulatory Readiness</span> – Continuous compliance monitoring and secure-by-design development help reduce violations and audit risks.</span></li>
              </ul>
              <div className="mt-8">
                <a href="/contact" className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold">Talk to our team</a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchDevelopmentAutomationPage;


