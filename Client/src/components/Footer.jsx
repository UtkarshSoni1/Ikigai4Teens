import React from 'react';
import { FiTwitter, FiInstagram, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
          {/* Left Section - Copyright and Brand */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I4T</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">Ikigai4Teens</span>
            </div>
            <p className="text-sm text-gray-600">
              &copy; {currentYear} Ikigai4Teens. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 max-w-md">
              Empowering teens to discover their purpose through AI-powered career guidance.
            </p>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-1">
            <nav className="flex flex-wrap items-center gap-1 text-sm" aria-label="Footer navigation">
              <a 
                href="/privacy-policy" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 px-3 py-1 rounded hover:bg-gray-100"
              >
                Privacy Policy
              </a>
              <span className="text-gray-300 hidden md:inline">|</span>
              
              <a 
                href="/terms" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 px-3 py-1 rounded hover:bg-gray-100"
              >
                Terms of Service
              </a>
              <span className="text-gray-300 hidden md:inline">|</span>
              
              <a 
                href="/contact" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 px-3 py-1 rounded hover:bg-gray-100"
              >
                Contact
              </a>
              <span className="text-gray-300 hidden md:inline">|</span>
              
              <a 
                href="/sitemap" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 px-3 py-1 rounded hover:bg-gray-100"
              >
                Sitemap
              </a>
            </nav>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 font-medium">Connect with us:</span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://twitter.com/ikigai4teens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-cyan-600 transition-colors duration-200 transform hover:scale-110"
                  aria-label="Follow us on Twitter"
                >
                  <FiTwitter className="w-5 h-5" />
                </a>
                
                <a
                  href="https://instagram.com/utk.arsh_soni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-pink-600 transition-colors duration-200 transform hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <FiInstagram className="w-5 h-5" />
                </a>
                
                <a
                  href="https://linkedin.com/company/ikigai4teens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-700 transition-colors duration-200 transform hover:scale-110"
                  aria-label="Connect on LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                
                <a
                  href="https://github.com/utkarshsoni1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200 transform hover:scale-110"
                  aria-label="View our GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                
                <a
                  href="mailto:support@ikigai4teens.com"
                  className="text-gray-500 hover:text-green-600 transition-colors duration-200 transform hover:scale-110"
                  aria-label="Email us"
                >
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-sm text-gray-500">
              Built with ❤️ by Utkarsh Soni
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
