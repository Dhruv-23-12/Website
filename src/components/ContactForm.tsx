import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

// Google Apps Script endpoint URL - replace with your actual Google Apps Script URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwvNUCaf_bD6h8IzdbbRokLxPrqdK813ZbLJcErTv0FN9wnUvzCjHLJuIEHcTFdTgV2/exec';

// TypeScript interfaces
interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  serviceInterest: string;
  projectDetails: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  projectDetails?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: '',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});

  // Service options matching the existing contact page
  const services = [
    'Advisory & Assurance',
    'Assessment & Review',
    'Innovation & Development',
    'Cyber-SOC',
    'Training & Awareness'
  ];

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
    
    // Clear general error
    if (error) {
      setError('');
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      console.log('Sending data to Google Sheets:', {
        timestamp: new Date().toISOString(),
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        phone: formData.phone.trim(),
        serviceInterest: formData.serviceInterest,
        projectDetails: formData.projectDetails.trim()
      });

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          phone: formData.phone.trim(),
          serviceInterest: formData.serviceInterest,
          projectDetails: formData.projectDetails.trim()
        })
      });

      // Since we're using no-cors mode, we can't check response status
      // The Google Apps Script will handle the data processing
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          company: '',
          phone: '',
          serviceInterest: '',
          projectDetails: ''
        });
      }, 3000);

    } catch (err) {
      setIsSubmitting(false);
      setError('Failed to send message. Please try again or contact us directly.');
      console.error('Form submission error:', err);
    }
  };

  return (
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
          {/* Error message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-sm p-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Full Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
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
                className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="john@company.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>
          
          {/* Company and Phone Row */}
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
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
          
          {/* Service Interest */}
          <div>
            <label htmlFor="serviceInterest" className="block text-sm font-semibold text-gray-700 mb-2">
              Service Interest
            </label>
            <select
              id="serviceInterest"
              name="serviceInterest"
              value={formData.serviceInterest}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors"
            >
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
          </div>
          
          {/* Project Details */}
          <div>
            <label htmlFor="projectDetails" className="block text-sm font-semibold text-gray-700 mb-2">
              Project Details *
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleInputChange}
              rows={6}
              className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600 resize-none transition-colors ${
                errors.projectDetails ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
            />
            {errors.projectDetails && (
              <p className="text-red-500 text-sm mt-1">{errors.projectDetails}</p>
            )}
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-3 px-6 rounded-sm font-semibold hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
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
  );
};

export default ContactForm;
