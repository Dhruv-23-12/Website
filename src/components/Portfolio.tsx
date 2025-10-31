import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ibmColor from '../assets/IBM_Color.png';
import cityOfToronto from '../assets/cityoftoronto.jpg';
import telosTouch from '../assets/TelosTouch.jpg';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  const projects = [
    {
      title: 'City of Toronto',
      description: 'Secure digital banking solution serving 100k+ users with real-time transactions and advanced fraud detection.',
      image: cityOfToronto,
      industry: 'Public Sector / Municipality',
      year: '2016',
      challenge: 'The municipality needed to protect its digital infrastructure against potential cyberattacks while improving incident response readiness.',
      approach: [
        'Conducted penetration testing and risk assessments.',
        'Evaluated vulnerabilities in municipal digital infrastructure.',
        'Developed cybersecurity and incident response frameworks.'
      ],
      impact: [
        'Strengthened public sector digital resilience.',
        'Improved incident response readiness for cyber events.',
        'Reduced risks of disruption in municipal operations.'
      ]
    },
    {
      title: 'IBM Security',
      description: 'HIPAA-compliant platform streamlining patient management and medical records for healthcare providers.',
      image: ibmColor,
      industry: 'Enterprise Consulting',
      year: '2017',
      challenge: 'Global enterprises needed structured cybersecurity strategies to address threat intelligence, vulnerability management, and compliance frameworks at scale.',
      approach: [
        'Designed enterprise-grade security strategies for Fortune 500 clients.',
        'Conducted ISO 27000 maturity assessments.',
        'Built custom vulnerability databases.',
        'Applied CVSS-based risk modeling to prioritize threats.'
      ],
      impact: [
        'Reduced enterprise-wide vulnerability risks.',
        'Enhanced regulatory compliance across multiple clients.',
        'Established long-term risk management frameworks.'
      ]
    },
      {
        title: 'TelosTouch',
        description: 'AI-based fraud detection and SOC2 compliance solution for banking systems, strengthening financial data protection and reducing transaction risks.',
        image: telosTouch,
        industry: 'Banking & Finance',
        year: '2020',
        challenge: 'Banks faced risks of fraud, customer data breaches, and SOC2 compliance failures in an increasingly digital financial ecosystem.',
        approach: [
          'Deployed AI-based fraud detection tools.',
          'Conducted risk assessments to uncover vulnerabilities in banking systems.',
          'Enhanced customer service systems while aligning with SOC2 compliance requirements.'
        ],
        impact: [
          'Strengthened financial data protection.',
          'Reduced fraud attempts and transaction risks.',
          'Achieved and maintained SOC2 compliance.'
        ]
      }
  ];

  return (
    <section id="portfolio" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 border border-black transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 border border-black transform -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-full mb-4">
              Our Work
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            Case Studies
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real-world solutions that drive business growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gray-100 rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border border-gray-200 hover:border-gray-400 cursor-pointer"
              onClick={() => (project as any).challenge ? openModal(project) : null}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover filter grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-medium">Case Study</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-black">{selectedProject.title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Project Image */}
              <div className="mb-6">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Industry and Year */}
              {(selectedProject as any).industry && (selectedProject as any).year && (
                <div className="flex gap-6 mb-6 text-sm text-gray-500">
                  <span><strong>Industry:</strong> {(selectedProject as any).industry}</span>
                  <span><strong>Year:</strong> {(selectedProject as any).year}</span>
                </div>
              )}
              
              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {selectedProject.description}
              </p>
              
              {/* Challenge Section */}
              {(selectedProject as any).challenge && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-black mb-4">Challenge</h3>
                  <p className="text-gray-600 leading-relaxed">{(selectedProject as any).challenge}</p>
                </div>
              )}
              
              {/* Approach Section */}
              {(selectedProject as any).approach && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-black mb-4">Our Approach</h3>
                  <ul className="text-gray-600 space-y-3">
                    {(selectedProject as any).approach.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-black mr-3 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Impact Section */}
              {(selectedProject as any).impact && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-black mb-4">Impact</h3>
                  <ul className="text-gray-600 space-y-3">
                    {(selectedProject as any).impact.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-black mr-3 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;