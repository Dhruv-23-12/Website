import React, { useState } from 'react';

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
    answer: "A cybersecurity company protects your data, systems, and networks from threats like hacking and ransomware. It helps ensure your business stays secure, compliant, and resilient.",
  },
  {
    question: "What services does Cybersecurity Umbrella provide?",
    answer: "We offer end-to-end cybersecurity services, including audits, risk management, testing, automation, 24/7 SOC, and training.",
  },
  {
    question: "What products does Cybersecurity Umbrella offer?",
    answer: "Our products include the Gap Analysis, Risk App, DLP App, Training Portal, Gap Analysis Autofill, MeetingMind, Executive Summarizer, Bank Clearance Platform, Cybersecurity Insight Dashboard, EcoLens, and PhishShield—built to automate security workflows, enhance compliance, and prevent threats using AI.",
  },
  {
    question: "How can I protect my business from cyberattacks?",
    answer: "Start with assessments, testing, employee training, and DLP. Build or outsource a SOC to ensure active monitoring and response.",
  },
  {
    question: "What's the best way to prevent data breaches?",
    answer: "Use access controls, encryption, DLP, and employee training. Regular audits and AI-driven tools help close compliance gaps.",
  },
  {
    question: "Can I see a cybersecurity demo or real-life case study?",
    answer: "Yes. We offer product demos and real-world case studies showing how we improve security, compliance, and cost-efficiency.",
  },
  {
    question: "What kind of cybersecurity support do you provide?",
    answer: "We provide 24/7 SOC, incident response, training, and regular executive briefings to keep your business protected and informed.",
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


  return (
    <section className="bg-black py-8 md:py-20 px-3 md:px-0">
      <div className="animate-fade-in">
        <div className="max-w-full md:max-w-[900px] mx-auto text-center mb-4 md:mb-10 px-2">
          <div className="text-white italic text-xs md:text-base mb-1 md:mb-2 tracking-wide">
            // Frequently asked questions //
          </div>
          
          <div className="animate-fade-in-delay">
            <h2
              className="text-[20px] md:text-[40px] font-light text-white mb-2 md:mb-4 leading-[1.1]"
              style={{ fontFamily: "Inter, Poppins, sans-serif" }}
            >
              Have a <span className="font-bold text-white">question?</span>
            </h2>
          </div>
          
          <div className="animate-fade-in-delay-2">
            <p className="text-white text-xs md:text-lg leading-[1.4]">
            Ready to drive your business forward? 
Just because you haven’t identified a breach doesn’t mean you’re secure. 

            </p>
          </div>
        </div>
      </div>

      <div className="animate-fade-in-delay-3">
        <div className="max-w-full md:max-w-[900px] mx-auto flex flex-col gap-3 md:gap-8 px-1">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="animate-fade-in"
                style={{
                  animationDelay: `${1.0 + idx * 0.1}s`
                }}
              >
                <div
                  onMouseEnter={() => setOpenIndex(idx)}
                  onMouseLeave={() => setOpenIndex(-1)}
                >
                  <button
                    className={`flex flex-wrap gap-x-2 md:gap-x-0 items-baseline w-full text-left transition-colors duration-300 py-3 ${
                      isOpen ? "text-white font-bold" : "text-gray-500 font-bold hover:text-red-500"
                    }`}
                    style={{
                      fontSize: undefined,
                      fontFamily: "Inter, Poppins, sans-serif",
                      outline: "none",
                      lineHeight: 1.1,
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    {/* Question Number */}
                    <span
                      className={`mr-2 md:mr-6 font-mono shrink-0 ${
                        isOpen ? "text-white" : "text-gray-600"
                      }`}
                      style={{
                        
                        lineHeight: 1,
                      }}
                    >
                      <span className="text-sm md:text-3xl w-6 md:w-8 inline-block text-center">
                        {String(idx + 1).padStart(2, "0")}/
                      </span>
                    </span>

                    {/* Question Text */}
                    <span
                      className={`transition-colors duration-300 break-words leading-snug ${
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
                      className="text-white text-xs md:text-lg pl-6 md:pl-[6.5rem] pr-2 break-words"
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;