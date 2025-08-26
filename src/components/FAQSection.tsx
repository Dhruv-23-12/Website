import React, { useState } from 'react';
import { ScrollAnimation, AnimatedText } from './ScrollAnimations';

/**
 * FAQ Item Interface
 */
interface FAQItem {
  question: string;
  answer: string;
}

/**
 * FAQ Data
 */
const faqs: FAQItem[] = [
  {
    question: "What is a cybersecurity company, and why do you need one?",
    answer:
      "A cybersecurity company protects your data, systems, and networks from threats like hacking and ransomware. It helps ensure your business stays secure, compliant, and resilient.",
  },
  {
    question: "What services does Cybersecurity Umbrella provide?",
    answer:
      "We offer end-to-end cybersecurity services, including audits, risk management, testing, automation, 24/7 SOC, and training.",
  },
  {
    question: "What products does Cybersecurity Umbrella offer?",
    answer:
      "Our products include the Gap Analysis, Risk App, DLP App, Training Portal, Gap Analysis Autofill, MeetingMind, Executive Summarizer, Bank Clearance Platform, Cybersecurity Insight Dashboard, EcoLens, and PhishShield—built to automate security workflows, enhance compliance, and prevent threats using AI.",
  },
  {
    question: "How can I protect my business from cyberattacks?",
    answer:
      "Start with assessments, testing, employee training, and DLP. Build or outsource a SOC to ensure active monitoring and response.",
  },
  {
    question: "What’s the best way to prevent data breaches?",
    answer:
      "Use access controls, encryption, DLP, and employee training. Regular audits and AI-driven tools help close compliance gaps.",
  },
  {
    question: "Can I see a cybersecurity demo or real-life case study?",
    answer:
      "Yes. We offer product demos and real-world case studies showing how we improve security, compliance, and cost-efficiency.",
  },
  {
    question: "What kind of cybersecurity support do you provide?",
    answer:
      "We provide 24/7 SOC, incident response, training, and regular executive briefings to keep your business protected and informed.",
  },
];

/**
 * FAQSection Component
 * 
 * Displays frequently asked questions with expandable answers
 * and smooth animations for better user experience.
 */
const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  /**
   * Handle FAQ item toggle
   */
  const handleToggle = (index: number): void => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-black py-8 md:py-20">
      <ScrollAnimation animation="fadeInUp" delay={0.2}>
        <div className="max-w-full md:max-w-[900px] mx-auto text-center mb-4 md:mb-10 px-2">
          <div className="text-red-500 italic text-xs md:text-base mb-1 md:mb-2 tracking-wide">// Frequently asked questions //</div>
          <ScrollAnimation animation="fadeInUp" delay={0.4}>
            <h2
              className="text-[20px] md:text-[40px] font-light text-white mb-2 md:mb-4 leading-[1.1]"
              style={{ fontFamily: "Inter, Poppins, sans-serif" }}
            >
              Have a <span className="font-bold text-red-500">question?</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={0.6}>
            <AnimatedText 
              className="text-gray-200 text-xs md:text-lg leading-[1.4]"
              delay={0.8}
              stagger={0.05}
            >
              Lorem ipsum dolor sit amet consectetur. Lacus id turpis ut nulla dui proin nunc dui tellus blandit.
            </AnimatedText>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animation="fadeInUp" delay={0.8}>
        <div className="max-w-full md:max-w-[900px] mx-auto flex flex-col gap-3 md:gap-8 px-1">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollAnimation key={idx} animation="fadeInUp" delay={1.0 + idx * 0.1}>
                <div>
              <button
                className={`flex items-baseline w-full text-left transition-colors duration-300 ${
                  isOpen ? "text-white font-bold" : "text-gray-500 font-bold hover:text-red-500"
                }`}
                style={{
                  fontSize: undefined,
                  fontFamily: "Inter, Poppins, sans-serif",
                  outline: "none",
                  lineHeight: 1.1,
                }}
                onClick={() => handleToggle(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
              >
                {/* Question Number */}
                <span
                  className={`mr-2 md:mr-6 font-mono ${
                    isOpen ? "text-white" : "text-gray-600"
                  }`}
                  style={{
                    minWidth: 28,
                    lineHeight: 1,
                  }}
                >
                  <span className="text-sm md:text-3xl">
                    {String(idx + 1).padStart(2, "0")}/
                  </span>
                </span>
                
                {/* Question Text */}
                <span
                  className={`transition-colors duration-300 ${
                    isOpen ? "text-white" : "text-gray-500"
                  } text-sm md:text-2xl`}
                >
                  {faq.question}
                </span>
              </button>
              
              {/* FAQ Answer */}
              <div
                id={`faq-answer-${idx}`}
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen 
                    ? "max-h-[500px] md:max-h-[800px] opacity-100 mt-1 md:mt-3" 
                    : "max-h-0 opacity-0 mt-0"
                }`}
                style={{
                  transitionProperty: "max-height, opacity, margin-top",
                }}
              >
                <p
                  className="text-white text-xs md:text-lg pl-8 md:pl-[6.5rem] pr-2"
                  style={{
                    fontFamily: "Inter, Poppins, sans-serif",
                    fontWeight: 400,
                    maxWidth: 900,
                    lineHeight: 1.5,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default FAQSection;