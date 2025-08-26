import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Trusted by <span className="text-primary">innovators</span>
        </h2>
        <p className="text-xl text-tech-gray max-w-2xl mx-auto">
          See what industry leaders are saying about IntelliTech X
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            quote: "IntelliTech X transformed our data analytics capabilities. We now process insights 10x faster than before.",
            author: "Sarah Chen",
            role: "CTO, DataFlow Inc.",
            rating: 5
          },
          {
            quote: "The deployment pipeline is incredible. What used to take days now happens in minutes with zero downtime.",
            author: "Marcus Rodriguez",
            role: "Lead Engineer, TechCorp",
            rating: 5
          },
          {
            quote: "Their AI models are remarkably accurate. We've seen a 40% improvement in our prediction accuracy.",
            author: "Dr. Emily Watson",
            role: "Research Director, AI Labs",
            rating: 5
          }
        ].map((testimonial, index) => (
          <Card key={index} className="card-tech relative">
            <Quote className="h-8 w-8 text-primary mb-6" />
            <p className="text-lg text-tech-gray mb-6 leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-tech-gray">{testimonial.role}</div>
              </div>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-current" />
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 