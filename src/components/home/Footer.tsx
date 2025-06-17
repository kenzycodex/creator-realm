import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1A52] text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4 lg:space-y-6 lg:col-span-2 sm:col-span-2">
            {/* Logo Image */}
            <div className="flex items-center">
              <img
                src="/creator-logo-light.png" 
                alt="Creator Realm Logo"
                className="h-10 lg:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs lg:max-w-sm">
              Creator Realm is a freelance platform empowering African talents to connect with global clients, earn in dollars, and grow their creative careers beyond borders.
            </p>
          </div>

          {/* For Clients */}
          <div className="space-y-3 lg:space-y-4">
            <h3 className="text-sm lg:text-base font-semibold text-white">For Clients</h3>
            <ul className="space-y-1.5 lg:space-y-2 text-xs lg:text-sm">
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
          <div className="space-y-3 lg:space-y-4">
            <h3 className="text-sm lg:text-base font-semibold text-white">For Talents</h3>
            <ul className="space-y-1.5 lg:space-y-2 text-xs lg:text-sm">
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
          <div className="space-y-3 lg:space-y-4">
            <h3 className="text-sm lg:text-base font-semibold text-white">Company</h3>
            <ul className="space-y-1.5 lg:space-y-2 text-xs lg:text-sm">
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
          <div className="space-y-3 lg:space-y-4">
            <h3 className="text-sm lg:text-base font-semibold text-white">Contact</h3>
            <ul className="space-y-1.5 lg:space-y-2 text-xs lg:text-sm">
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
        <div className="border-t border-gray-600 mt-8 lg:mt-12 pt-6 lg:pt-8">
          {/* Address and Social Media Row */}
          <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-start lg:items-center space-y-4 sm:space-y-0 lg:space-y-0">
            {/* Address and Phone */}
            <div className="space-y-1 text-xs lg:text-sm text-gray-300">
              <p>30, Bello Street,</p>
              <p>Orile Iganmu,</p>
              <p>Surulere, Lagos.</p>
              <p className="mt-2">+234 704 0586 342</p>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-start sm:items-end lg:items-start space-y-2 lg:space-y-3">
              <span className="text-xs lg:text-sm text-gray-300 font-medium">Follow us on</span>
              <div className="flex space-x-4 lg:space-x-5">
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright at Bottom Center */}
        <div className="text-center mt-6 lg:mt-8">
          <p className="text-xs lg:text-sm text-gray-300">©Creator Realm 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;