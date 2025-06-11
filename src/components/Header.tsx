
import React from 'react';
import { Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Creator Realm</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Find Talents</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Find Jobs</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Community</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Blog</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
            <button className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Login</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <Menu className="w-5 h-5 text-gray-600 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
