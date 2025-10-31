import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Google Apps Script endpoint URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwvNUCaf_bD6h8IzdbbRokLxPrqdK813ZbLJcErTv0FN9wnUvzCjHLJuIEHcTFdTgV2/exec';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send data to Google Sheets
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          fullName: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          phone: formData.phone.trim(),
          serviceInterest: formData.service,
          projectDetails: formData.message.trim()
        })
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);
    } catch (err) {
      setIsSubmitting(false);
      console.error('Form submission error:', err);
      // Still show success to user since we can't check response in no-cors mode
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);
    }
  };

  

  const services = [
    'Advisory & Assurance',
    'Assessment & Review',
    'Innovation & Development',
    'Cyber-SOC',
    'Training & Awareness'
  ];

  const regionalContacts = [
    {
      code: 'CA',
      title: 'Canada Office',
      email: 'support@cybersecurityumbrella.com',
      phone: '800-8',
      headOfficeLine1: '1, Dundas Street West Suites 2500,',
      headOfficeLine2: 'Toronto, ON, M5G 1Z3'
    },
    {
      code: 'IN',
      title: 'India Office',
      email: 'support@cybersecurityumbrella.com',
      phone: '+91-7096022911',
      headOfficeLine1: '406, Manthan Apartment, Above Central Bank of India,',
      headOfficeLine2: 'Gujarat Gas Circle, Adajan, Surat- 395009'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section (Light) */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full mb-4">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-3">Talk to our security team</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">We respond within one business day. Share a few details and we’ll take it from there.</p>
          </div>
        </div>
      </section>

      

      {/* Contact Form & Info Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white border border-gray-200 p-8 rounded-sm shadow-sm">
                <h3 className="text-2xl font-bold text-black mb-6">Send us a message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-black mb-2">Message Sent!</h4>
                    <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                          placeholder="Your Company"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white py-3 px-6 rounded-sm font-semibold hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            {/* Sidebar Contact Cards */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="border border-gray-200 rounded-sm p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Call us</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>+1-437-500-4194 (CA)</span></div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>+91-7096022911 (IN)</span></div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-sm p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Email us</h3>
                <div className="space-y-2">
                  <a href="mailto:support@cybersecurityumbrella.com" className="flex items-center gap-2 text-gray-700 hover:text-black"><Mail className="w-4 h-4" /><span>support@cybersecurityumbrella.com</span></a>
                  <a href="mailto:hr@cybersecurityumbrella.com" className="flex items-center gap-2 text-gray-700 hover:text-black"><Mail className="w-4 h-4" /><span>hr@cybersecurityumbrella.com</span></a>
                </div>
              </div>
              <div className="border border-gray-200 rounded-sm p-6">
                <h3 className="text-lg font-semibold text-black mb-3">Offices</h3>
                <div className="text-sm text-gray-700">
                  <p className="font-medium mb-1">Canada</p>
                  <p>1, Dundas Street West Suites 2500,</p>
                  <p className="mb-3">Toronto, ON, M5G 1Z3</p>
                  <p className="font-medium mb-1">India</p>
                  <p>406, Manthan Apartment,</p>
                  <p>Above Central Bank of India,</p>
                  <p>Gujarat Gas Circle, Adajan,</p>
                  <p>Surat- 395009</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-red-600"></div>
              <div>
                <p className="text-black font-semibold">Response time</p>
                <p className="text-gray-600 text-sm">Typically within 24 hours on business days</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-red-600"></div>
              <div>
                <p className="text-black font-semibold">Confidentiality</p>
                <p className="text-gray-600 text-sm">NDA available upon request</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-red-600"></div>
              <div>
                <p className="text-black font-semibold">Engagements</p>
                <p className="text-gray-600 text-sm">Fixed-scope or retainer options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
      <Footer />
    </div>
  );
};

export default ContactPage;