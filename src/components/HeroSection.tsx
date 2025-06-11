
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Where African<br />
                Talent Meets Global<br />
                Opportunity.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join a thriving community of creators and find your next big opportunity or discover exceptional talent from across Africa.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600 ml-3">
                  <span className="font-semibold text-gray-900">5.0</span> ★★★★★
                </span>
              </div>
              <span className="text-sm text-gray-600">Trusted by creators worldwide</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/c06d51bd-1090-438a-bf68-41cfc80867bb.png" 
                alt="Professional African talent" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
