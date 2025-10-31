import React from 'react';
import brochurePdf from '../assets/csu_brochure.pdf';

const BrochureDownloadSection: React.FC = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch(brochurePdf);
      if (!response.ok) throw new Error('Failed to fetch brochure');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'csu_brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      // Fallback: try direct link (works if pdf is in public/)
      const link = document.createElement('a');
      link.href = '/csu_brochure.pdf';
      link.download = 'csu_brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="w-full bg-black py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
              <span className="text-white text-xs font-medium">Company Brochure</span>
            </div>
            
            <div className="animate-fade-in-delay">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Switzer', sans-serif" }}>
                <span className="text-white">
                  Get Our Complete Guide
                </span>
              </h2>
            </div>
            
            <div className="animate-fade-in-delay-2">
              <p className="text-white text-base max-w-xl mx-auto">
                Download our comprehensive cybersecurity solutions brochure to learn how we protect organizations worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div className="animate-fade-in-delay">
              <div className="space-y-6">
                <div className="animate-fade-in-delay-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Switzer', sans-serif" }}>
                    <span className="text-white">Comprehensive Overview</span> of Our Cybersecurity Services
                  </h3>
                </div>
                
                <div className="animate-fade-in-delay-3">
                  <p className="text-white text-base leading-relaxed mb-6">
                    Our detailed brochure covers everything from core security services to industry-specific solutions, helping you understand how we can protect your organization's digital assets.
                  </p>
                </div>

                {/* What's included */}
                <div className="animate-fade-in-delay-4">
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold text-lg">What's Included:</h4>
                    <div className="grid gap-2">
                      {[
                        "Core Security Services Overview",
                        "Industry-Specific Solutions", 
                        "Certification & Compliance Details",
                        "Case Studies & Success Stories"
                      ].map((item, index) => (
                        <div 
                          key={item} 
                          className="flex items-center space-x-3 animate-fade-in"
                          style={{
                            animationDelay: `${1.3 + index * 0.1}s`
                          }}
                        >
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          <span className="text-white text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Download Section */}
            <div className="animate-fade-in-delay-2">
              <div className="text-center">
                {/* Brochure icon */}
                <div className="animate-fade-in-delay-3">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center border border-red-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>

                {/* Brochure title */}
                <div className="animate-fade-in-delay-4">
                  <h4 className="text-white font-bold text-lg mb-2">CSU Brochure</h4>
                  <p className="text-white text-sm mb-4">
                    Comprehensive Cybersecurity Solutions Guide
                  </p>
                </div>

                {/* Download arrows */}
                <div className="animate-fade-in-delay-4">
                  <div className="flex justify-center space-x-1 mb-4">
                    <div className="w-1.5 h-1.5 border-r-2 border-b-2 border-white transform rotate-45 animate-bounce"></div>
                    <div className="w-1.5 h-1.5 border-r-2 border-b-2 border-white transform rotate-45 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  </div>
                </div>

                {/* Download button */}
                <div className="animate-fade-in-delay-4">
                  <button
                    onClick={handleDownload}
                    className="bg-gradient-to-r from-red-500/20 to-red-600/20 px-6 py-3 text-white font-medium rounded-lg border border-white/20 hover:border-red-500/50 transition-all duration-300 group relative overflow-hidden mb-4 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Brochure
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center justify-center space-x-4 text-xs text-white">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>PDF Format</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Secure Download</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureDownloadSection;