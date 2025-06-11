
import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Experience<br />
              <span className="text-blue-600">With Number</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Our platform has helped thousands of creators and businesses connect and grow together.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="text-center space-y-2 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-blue-600">92%</div>
              <div className="text-sm text-gray-600">Client satisfaction rate with our platform</div>
            </div>
            <div className="text-center space-y-2 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-purple-600">90%</div>
              <div className="text-sm text-gray-600">Projects completed successfully</div>
            </div>
            <div className="text-center space-y-2 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-green-600">88%</div>
              <div className="text-sm text-gray-600">Repeat clients and long-term partnerships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
