import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mission Concepcion Sports Park</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The Premier Youth Sports Complex in South Texas. Home to world-class facilities for basketball, volleyball, baseball, softball, and more.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/pages/Mission-Concepción-Sports-Park/155276924538047" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Facilities</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/rates/volleyball" className="text-gray-400 hover:text-white transition-colors duration-200">12 Volleyball Courts</Link>
              </li>
              <li>
                <Link to="/rates/basketball" className="text-gray-400 hover:text-white transition-colors duration-200">6 Basketball Courts</Link>
              </li>
              <li>
                <Link to="/rates/baseball-softball" className="text-gray-400 hover:text-white transition-colors duration-200">7 Baseball/Softball Fields</Link>
              </li>
              <li className="text-gray-400">Soccer Fields</li>
              <li className="text-gray-400">On-Site Concessions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">714 E. Theo Ave.<br />San Antonio, TX 78210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a href="tel:2104778900" className="text-gray-400 hover:text-white transition-colors duration-200">(210) 477-8900</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:info@mcsportspark.org" className="text-gray-400 hover:text-white transition-colors duration-200">info@mcsportspark.org</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mission Concepcion Sports Park. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
