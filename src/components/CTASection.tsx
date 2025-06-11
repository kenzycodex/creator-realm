
import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Ready to take<br />
              your <span className="text-yellow-400">Career</span> to<br />
              the next Level
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Join thousands of African creators who have found success through our platform. Start your journey today and unlock global opportunities.
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              Get Started
            </button>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-white/30 transition-colors">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">CREATIVE AFRICA</h3>
                  <p className="text-sm text-blue-200">Design Excellence</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-white/30 transition-colors">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">TECHNICAL ANALYSIS</h3>
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
