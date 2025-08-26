import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

const ShowcaseSection2 = () => (
  <section className="py-24 bg-tech-darker">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <Card className="card-tech p-8 bg-background">
            <div className="text-sm text-tech-gray mb-4">// Deployment Pipeline</div>
            <div className="font-mono text-sm space-y-2">
              <div className="text-primary">$ intellitech deploy</div>
              <div className="text-tech-gray">→ Building AI model...</div>
              <div className="text-tech-gray">→ Optimizing performance...</div>
              <div className="text-tech-gray">→ Running tests...</div>
              <div className="text-green-400">✓ Deployed to 12 regions</div>
              <div className="text-green-400">✓ Auto-scaling enabled</div>
              <div className="text-green-400">🚀 Live in production</div>
            </div>
          </Card>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/50 rounded-full animate-pulse" />
        </div>
        <div className="order-1 lg:order-2">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            One-Click Deployment
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Deploy AI models
            <span className="text-primary"> in seconds</span>
          </h2>
          <p className="text-xl text-tech-gray mb-8 leading-relaxed">
            Go from development to production instantly with our streamlined deployment pipeline.
            No complex configuration, no lengthy setup processes.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Zero-config deployment",
              "Automatic scaling",
              "Global CDN distribution",
              "Real-time monitoring"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-tech-gray">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                {item}
              </li>
            ))}
          </ul>
          <Button className="btn-tech-primary">
            Start Deploying
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default ShowcaseSection2; 