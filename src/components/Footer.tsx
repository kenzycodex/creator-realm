import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1A52] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-2">
            {/* Logo Image */}
            <div className="flex items-center">
              <img
                src="/creator-logo-light.png" 
                alt="Creator Realm Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-snug max-w-xs lg:max-w-sm">
              Creator Realm is a freelance platform empowering African talents to connect with global clients, earn in dollars, and grow their creative careers beyond borders.
            </p>
          </div>

          {/* For Clients */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">For Clients</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Browse Freelancers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Client FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Sign Up as Client
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Log In
                </a>
              </li>
            </ul>
          </div>

          {/* For Talents */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">For Talents</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Find Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Create Profile
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Talent Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Freelance Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Talent FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Sign Up as Talent
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Log In
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Blog/Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Help Desk
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Report a Problem
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Partnership Inquiry
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          {/* Address and Social Media Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            {/* Address and Phone */}
            <div className="space-y-1 text-sm text-gray-300">
              <p>30, Bello Street,</p>
              <p>Orile Iganmu,</p>
              <p>Surulere, Lagos.</p>
              <p className="mt-2">+234 704 0586 342</p>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-start space-y-3">
              <span className="text-sm text-gray-300 font-medium">Follow us on</span>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-gray-300 hover:bg-blue-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-gray-300 hover:bg-blue-700 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-gray-300 hover:bg-pink-600 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright at Bottom Center */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-300">©Creator Realm 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
