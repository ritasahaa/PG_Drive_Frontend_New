import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">PG & Bike Rental</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for comfortable PG accommodations and reliable bike rentals. 
              Making your stay and travel convenient and affordable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200"><FaFacebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200"><FaTwitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200"><FaInstagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200"><FaLinkedin className="w-5 h-5" /></a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Home</Link></li>
              <li><Link to="/pg" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">PG Listings</Link></li>
              <li><Link to="/bikes" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Bike Rentals</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>PG Accommodation</li>
              <li>Bike Rentals</li>
              <li>24/7 Support</li>
              <li>Maintenance Service</li>
              <li>Insurance Coverage</li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3"><FaMapMarkerAlt className="w-4 h-4 text-blue-400" /><span>123 Main Street, City, State 12345</span></div>
              <div className="flex items-center space-x-3"><FaPhone className="w-4 h-4 text-blue-400" /><span>+91 9876543210</span></div>
              <div className="flex items-center space-x-3"><FaEnvelope className="w-4 h-4 text-blue-400" /><span>info@pgrental.com</span></div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">© {new Date().getFullYear()} PG & Bike Rental. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Terms of Service</Link>
              <Link to="/refund" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
