import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/creator-logo-dark.png" 
                alt="Creator Realm Logo"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Find job</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Find talent</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Post job</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Why us</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Community</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">More</a>
            </nav>

            {/* Desktop Right side */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="px-4 xl:px-6 py-2 border border-blue-200 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors">
                Login
              </button>
              <button className="bg-blue-600 text-white px-4 xl:px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Sign Up
              </button>
            </div>

            {/* Mobile/Tablet Right side */}
            <div className="flex lg:hidden items-center space-x-2">
              <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
                Sign Up
              </button>
              <button onClick={toggleMenu} className="p-2">
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-gray-600" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`lg:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-50' : 'opacity-0'
            }`}
            onClick={toggleMenu}
          />
          
          {/* Slide-out Menu */}
          <div className="relative ml-auto h-full w-80 max-w-sm bg-white shadow-2xl">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <img
                src="/creator-logo-dark.png" 
                alt="Creator Realm Logo"
                className="h-8 w-auto object-contain"
              />
              <button 
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="p-6">
              {/* Navigation Links */}
              <nav className="space-y-1 mb-8">
                <a 
                  href="#" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 group"
                  onClick={toggleMenu}
                >
                  <span>Find job</span>
                  <svg className="ml-auto w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 group"
                  onClick={toggleMenu}
                >
                  <span>Find talent</span>
                  <svg className="ml-auto w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 group"
                  onClick={toggleMenu}
                >
                  <span>Post job</span>
                  <svg className="ml-auto w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="flex items-center px-4 py-3 text-blue-600 bg-blue-50 rounded-lg font-medium transition-all duration-200 group"
                  onClick={toggleMenu}
                >
                  <span>Why us</span>
                  <svg className="ml-auto w-4 h-4 text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 group"
                  onClick={toggleMenu}
                >
                  <span>Community</span>
                  <svg className="ml-auto w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 group"
                  onClick={toggleMenu}
                >
                  <span>More</span>
                  <svg className="ml-auto w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </nav>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  className="w-full px-4 py-3 border-[1px] border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                  onClick={toggleMenu}
                >
                  Login
                </button>
                <button 
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  onClick={toggleMenu}
                >
                  Sign Up
                </button>
              </div>

              {/* Footer Info */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  Join thousands of creators building global careers
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;