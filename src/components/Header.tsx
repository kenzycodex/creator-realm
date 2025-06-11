
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">Creator Realm</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Find Jobs</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Find Talent</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Community</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Blog</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 font-medium">Login</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
