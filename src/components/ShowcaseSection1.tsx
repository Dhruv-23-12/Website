import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, Search, Sparkles } from "lucide-react";

const ShowcaseSection1 = () => (
  <section className="py-24 relative overflow-hidden min-h-[80vh] flex items-center">
    {/* Background Image */}
    <div
      className="absolute inset-0 w-full h-full z-0"
      style={{
        backgroundImage: "url('/src/assets/6684839a47fd287b7d32de38_get-started-with-neural-today-bg-cta-v1-intellitech-x-webflow-template.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.35,
        filter: "blur(2px)",
      }}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 z-10" />
    <div className="container mx-auto px-6 relative z-10">
      <Card className="p-12 rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <Badge className="bg-red-600/20 text-white border-red-500/30 flex items-center gap-2 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
              <Star className="h-4 w-4" />
              Get started
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Get started with <br /> IntelliTech today
            </h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur id in viverra enim fringilla leo sapien sed sit purus pellentesque sit sed magna morbi massa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg text-lg">
                Get started
              </Button>
              <Button
                variant="outline"
                className="border border-white/40 text-white rounded-full px-8 py-3 flex items-center gap-2 text-lg hover:bg-white/10"
              >
                View pricing <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 h-[32rem] bg-black/20 backdrop-blur-xl rounded-[3rem] p-2 shadow-2xl border border-white/10">
                <div className="w-full h-full bg-gray-900/80 backdrop-blur-md rounded-[2.5rem] relative overflow-hidden border border-white/5 flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 pt-3 pb-2">
                    <span className="text-white text-sm font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-3 h-2 border border-white rounded-sm"></div>
                    </div>
                  </div>
                  {/* 3D Sphere */}
                  <div className="flex-1 flex items-center justify-center">
                    {/* Replace with your sphere image or SVG */}
                    <img
                      src="/src/assets/6684839a47fd287b7d32de38_get-started-with-neural-today-bg-cta-v1-intellitech-x-webflow-template.jpg"
                      alt="3D Sphere"
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  {/* Floating Glass Panel */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-white" />
                    <span className="text-white text-base font-medium">Generate <span className="font-normal">3D sphere shape</span></span>
                  </div>
                </div>
              </div>
              {/* Shadows and Glows */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-56 h-6 bg-black/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-black/5 rounded-full blur-lg"></div>
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-red-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-blue-500/10 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </section>
);

export default ShowcaseSection1;