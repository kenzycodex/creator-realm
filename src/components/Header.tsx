// src/components/Header.tsx
import React from 'react';
import { Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/creator-logo-dark.png" 
              alt="Creator Realm Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Find job</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Find talent</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Post job</a>
            <a href="#" className="text-blue-600 font-medium">Why us</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Community</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">More</a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
          <button className="px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors hidden md:block">Login</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
            <Menu className="w-5 h-5 text-gray-600 md:hidden cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
