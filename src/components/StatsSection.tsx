
import React from 'react';
import { Users, Globe, DollarSign } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">25,000+</div>
              <div className="text-gray-600 font-medium">Active Creators</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500">50+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500">$2M+</div>
              <div className="text-gray-600 font-medium">Total Earnings</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted companies are creating wonders here</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Microsoft</div>
            <div className="text-2xl font-bold text-gray-400">Google</div>
            <div className="text-2xl font-bold text-gray-400">Apple</div>
            <div className="text-2xl font-bold text-gray-400">Meta</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
