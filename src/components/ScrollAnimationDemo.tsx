import React from 'react';
import { ScrollAnimation, AnimatedText, ScrollProgressBar } from './ScrollAnimations';

const ScrollAnimationDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <ScrollProgressBar />
      
      <div className="container mx-auto px-6 py-20">
        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold text-center text-white mb-8">
            Scroll Animation Demo
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInUp" delay={0.4}>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Experience smooth scroll-triggered animations throughout your website
          </p>
        </ScrollAnimation>

        {/* Animation Types Demo */}
        <div className="space-y-32">
          {/* Fade In Up */}
          <ScrollAnimation animation="fadeInUp" delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Fade In Up</h2>
              <div className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
                <AnimatedText 
                  className="text-gray-300 text-lg"
                  delay={0.4}
                  stagger={0.1}
                >
                  This element fades in and slides up from below when it comes into view.
                </AnimatedText>
              </div>
            </div>
          </ScrollAnimation>

          {/* Fade In Down */}
          <ScrollAnimation animation="fadeInDown" delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Fade In Down</h2>
              <div className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
                <AnimatedText 
                  className="text-gray-300 text-lg"
                  delay={0.4}
                  stagger={0.1}
                >
                  This element fades in and slides down from above when it comes into view.
                </AnimatedText>
              </div>
            </div>
          </ScrollAnimation>

          {/* Fade In Left */}
          <ScrollAnimation animation="fadeInLeft" delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Fade In Left</h2>
              <div className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
                <AnimatedText 
                  className="text-gray-300 text-lg"
                  delay={0.4}
                  stagger={0.1}
                >
                  This element fades in and slides from the left when it comes into view.
                </AnimatedText>
              </div>
            </div>
          </ScrollAnimation>

          {/* Fade In Right */}
          <ScrollAnimation animation="fadeInRight" delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Fade In Right</h2>
              <div className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
                <AnimatedText 
                  className="text-gray-300 text-lg"
                  delay={0.4}
                  stagger={0.1}
                >
                  This element fades in and slides from the right when it comes into view.
                </AnimatedText>
              </div>
            </div>
          </ScrollAnimation>

          {/* Scale In */}
          <ScrollAnimation animation="scaleIn" delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Scale In</h2>
              <div className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
                <AnimatedText 
                  className="text-gray-300 text-lg"
                  delay={0.4}
                  stagger={0.1}
                >
                  This element fades in and scales up from a smaller size when it comes into view.
                </AnimatedText>
              </div>
            </div>
          </ScrollAnimation>

          {/* Slide In Up */}
          <ScrollAnimation animation="slideInUp" delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Slide In Up</h2>
              <div className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
                <AnimatedText 
                  className="text-gray-300 text-lg"
                  delay={0.4}
                  stagger={0.1}
                >
                  This element slides up from a greater distance when it comes into view.
                </AnimatedText>
              </div>
            </div>
          </ScrollAnimation>

          {/* Slide In Down */}
          <ScrollAnimation animation="slideInDown" delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Slide In Down</h2>
              <div className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
                <AnimatedText 
                  className="text-gray-300 text-lg"
                  delay={0.4}
                  stagger={0.1}
                >
                  This element slides down from a greater distance when it comes into view.
                </AnimatedText>
              </div>
            </div>
          </ScrollAnimation>

          {/* Staggered Cards */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Staggered Animations</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[1, 2, 3].map((item, index) => (
                <ScrollAnimation key={item} animation="fadeInUp" delay={0.2 + index * 0.2}>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Card {item}</h3>
                    <p className="text-gray-300">
                      This card animates with a staggered delay of {index * 0.2}s after the previous one.
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Animated Text Demo */}
          <ScrollAnimation animation="fadeInUp" delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Animated Text</h2>
              <div className="bg-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
                <AnimatedText 
                  className="text-gray-300 text-xl leading-relaxed"
                  delay={0.4}
                  stagger={0.05}
                >
                  Each word in this sentence animates individually with a slight delay, creating a typewriter-like effect that draws attention to your content and makes it more engaging for users.
                </AnimatedText>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationDemo;
