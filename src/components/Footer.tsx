import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import csuLogoWhite from '../assets/CSUlogo_white (1).png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Popular Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">POPULAR SERVICES</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Advisory & Assurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Assessment & Review</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Innovation & Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cyber-SOC</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Training & Awareness</a></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">PRODUCT</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Product</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About-Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact-Us</a></li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">OFFICES</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span role="img" aria-label="Canada flag" className="text-xl">🇨🇦</span>
                  <span className="text-white font-medium text-sm">Canada Region</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  1, Dundas Street West Suites 2500,<br />
                  Toronto, ON, M5G 1Z3
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span role="img" aria-label="India flag" className="text-xl">🇮🇳</span>
                  <span className="text-white font-medium text-sm">India Region</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  406, Manthan Apartment,<br />
                  Above Central Bank of India,<br />
                  Gujarat Gas Circle, Adajan,<br />
                  Surat- 395009
                </p>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">CONTACT US</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2"> 
                <span role="img" aria-label="Canada flag" className="text-base">🇨🇦</span>
                <span className="text-gray-400 text-sm">+1-437-500-4194</span>
              </div>
              <div className="flex items-center gap-2">
                <span role="img" aria-label="Canada flag" className="text-base">🇨🇦</span>
                <span className="text-gray-400 text-sm">+1-437-782-3696</span>
              </div>
              <div className="flex items-center gap-2">
                <span role="img" aria-label="India flag" className="text-base">🇮🇳</span>
                <span className="text-gray-400 text-sm">+91-7096022911</span>
              </div>
              
              <a href="mailto:support@cybersecurityumbrella.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <Mail className="w-5 h-5 text-gray-400" />
                <span>support@cybersecurityumbrella.com</span>
              </a>
              <a href="mailto:hr@cybersecurityumbrella.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <Mail className="w-5 h-5 text-gray-400" />
                <span>hr@cybersecurityumbrella.com</span>
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">FOLLOW US</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/cybersecurityumbrella/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Logo and Copyright */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="flex items-center gap-3">
                <img 
                  src={csuLogoWhite} 
                  alt="Cybersecurity Umbrella Logo" 
                  className="w-24 h-24 md:w-28 md:h-28 object-contain"
                />
                <div>

                </div>
              </div>
              <div className="text-gray-500 text-sm">
                <p>Copyright © Cybersecurity Umbrella</p>
        
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-900 rounded-lg p-6 w-full max-w-none lg:max-w-md">
              <h4 className="text-white font-semibold mb-4">Subscribe to our weekly newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded md:py-2 border border-gray-700 focus:border-red-600 focus:outline-none text-sm"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 md:py-2 rounded font-medium text-sm transition-colors w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;