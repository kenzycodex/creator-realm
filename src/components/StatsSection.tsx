
import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">25,000+</div>
              <div className="text-gray-600 font-medium">Active Creators</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500">50+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500">$2M+</div>
              <div className="text-gray-600 font-medium">Total Earnings</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">Trusted companies are creating wonders here</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
