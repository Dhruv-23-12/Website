import { Card } from "@/components/ui/card";
import iconAI from "@/assets/icon-ai.jpg";
import iconSecurity from "@/assets/icon-security.jpg";
import iconNetwork from "@/assets/icon-network.jpg";
import iconPerformance from "@/assets/icon-performance.jpg";

const FeatureHighlights = () => (
  <section className="pt-0 pb-24 bg-tech-darker">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Built for the <span className="text-primary">future</span>
        </h2>
        <p className="text-xl text-tech-gray max-w-2xl mx-auto">
          Experience next-generation AI capabilities designed to accelerate your innovation
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[{
          icon: iconAI,
          title: "Advanced AI Models",
          description: "State-of-the-art machine learning algorithms that adapt and evolve with your data"
        }, {
          icon: iconSecurity,
          title: "Enterprise Security",
          description: "Bank-grade encryption and security protocols to protect your most sensitive data"
        }, {
          icon: iconNetwork,
          title: "Global Network",
          description: "Distributed infrastructure ensuring low latency and high availability worldwide"
        }, {
          icon: iconPerformance,
          title: "Lightning Fast",
          description: "Optimized performance delivering results in milliseconds, not minutes"
        }].map((feature, index) => (
          <Card key={index} data-lov-id={`feature-${index}`} className="glass-card group hover:scale-105 transition-transform duration-300 w-full max-w-md mx-auto">
            <div className="w-16 h-16 mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <img src={feature.icon} alt={feature.title} className="w-10 h-10 object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-tech-gray leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureHighlights; 