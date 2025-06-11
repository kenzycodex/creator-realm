
import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to take<br />
              your Career to<br />
              the next Level
            </h2>
            <p className="text-blue-100 text-lg">
              Join thousands of African creators who have found success through our platform. Start your journey today.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="font-semibold">CREATIVE AFRICA</h3>
                  <p className="text-sm text-blue-200">Design Excellence</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-semibold">TECHNICAL ANALYSIS</h3>
                  <p className="text-sm text-blue-200">Data Driven</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
