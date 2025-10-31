// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import { useState } from "react";

// Import company logos
import ibmColor from '../assets/IBM_Color.png';
import vmwareColor from '../assets/VMware_color.png';
import splunkLogo from '../assets/Splunk.png';
import kasperskyLogo from '../assets/kaspersky.png';
import oceColor from '../assets/OCE-color.jpeg';
import orionColor from '../assets/orion-color.jpeg';
import flippColor from '../assets/flipp-color.png';
import zartekLogo from '../assets/zartek.jpeg';
import uplLogo from '../assets/uplcolor.jpg';

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by leading cybersecurity companies",
  logos = [
    {
      id: "logo-1",
      description: "IBM Security",
      image: ibmColor,
      className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100",
    },
    {
      id: "logo-2",
      description: "VMware",
      image: vmwareColor,
      className: "h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100",
    },
    {
      id: "logo-3",
      description: "Splunk",
      image: splunkLogo,
      className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100",
    },
    {
      id: "logo-4",
      description: "Kaspersky",
      image: kasperskyLogo,
      className: "h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100",
    },
    {
      id: "logo-5",
      description: "OCE",
      image: oceColor,
      className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100",
    },
    {
      id: "logo-6",
      description: "Orion",
      image: orionColor,
      className: "h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100",
    },
    {
      id: "logo-7",
      description: "Flipp",
      image: flippColor,
      className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100",
    },
    {
      id: "logo-8",
      description: "Zartek",
      image: zartekLogo,
      className: "h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100",
    },
    {
      id: "logo-9",
      description: "UPL",
      image: uplLogo,
      className: "h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100",
    },
  ],
}: Logos3Props) => {
  const [isPaused, setIsPaused] = useState(false);
  
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-black lg:text-4xl">
          {heading}
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Partnering with industry leaders to deliver cutting-edge cybersecurity solutions
        </p>
      </div>
      <div className="pt-8 md:pt-16 lg:pt-16">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-6xl overflow-hidden">
          <div 
            className="flex items-center space-x-12 md:space-x-16 lg:space-x-20"
            style={{
              animation: 'scroll 30s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center p-4"
              >
                <div className="group">
                  <img
                    src={logo.image}
                    alt={logo.description}
                    className={logo.className}
                    title={logo.description}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `
      }} />
    </section>
  );
};

export { Logos3 };
