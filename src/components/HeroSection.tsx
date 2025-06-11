// src/components/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Where African<br />
                Talent Meets Global<br />
                <span className="text-blue-600">Opportunity.</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Join a thriving community of African freelancers and creators 
                connecting with clients worldwide. Get paid in dollars. Work 
                on your terms.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Product Design</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Front-end Dev</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Content Writer</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Brand Designer</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Graphics Design</span>
            </div>

            {/* Social Proof */}
            <div className="pt-8">
              <p className="text-sm text-gray-600 mb-4">Several companies are opening vacancies here</p>
              <div className="flex items-center space-x-6">
                {/* Company logos would go here */}
                <div className="flex items-center space-x-4 opacity-60">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=500&fit=crop&crop=face"
                alt="African professional working"
                className="w-full h-auto object-cover rounded-lg"
              />
              
              {/* Floating Arrow */}
              <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
                <svg className="w-16 h-16 text-red-500" viewBox="0 0 100 100" fill="none">
                  <path d="M20 50 L70 30 L65 45 L80 50 L65 55 L70 70 Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Search for a job */}
          <div className="text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-4">
              Search for a job
            </button>
          </div>

          {/* Stats */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 8v10l4-2 4 2V8" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">25,000+</span>
            </div>
            <p className="text-sm text-gray-600">Jobs</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">50+</span>
            </div>
            <p className="text-sm text-gray-600">Currencies</p>
          </div>
        </div>

        {/* Review */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="flex -space-x-1">
              <img className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612b742?w=32&h=32&fit=crop&crop=face" alt="User" />
              <img className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" alt="User" />
              <img className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" alt="User" />
            </div>
            <span className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">5.0</span> ⭐⭐⭐⭐⭐ 
              <span className="ml-2">60k Plus Talents Found Their Dream Job</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;