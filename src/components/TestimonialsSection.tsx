
import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Best Creators<br />
            & Clients.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-600 text-white p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">T</span>
              </div>
              <div>
                <h3 className="font-semibold">Techstar is a Tech Giant</h3>
                <p className="text-blue-200 text-sm">Business</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              "Working with Creator Realm has been incredible. We found amazing talent that helped scale our business."
            </p>
            <div className="flex text-yellow-400">
              ★★★★★
            </div>
          </div>

          <div className="bg-orange-500 text-white p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-orange-500 font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="font-semibold">African Creation deals with Design, Tech & People.</h3>
                <p className="text-orange-200 text-sm">Creative Agency</p>
              </div>
            </div>
            <p className="text-orange-100 mb-4">
              "The platform connected us with clients who truly value our creative work and African perspective."
            </p>
            <div className="flex text-yellow-400">
              ★★★★★
            </div>
          </div>

          <div className="bg-red-500 text-white p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-red-500 font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="font-semibold">Desital Roy is a popular Digital Backing Platform</h3>
                <p className="text-red-200 text-sm">Fintech</p>
              </div>
            </div>
            <p className="text-red-100 mb-4">
              "Creator Realm helped us find the right tech talent to build our digital banking solutions."
            </p>
            <div className="flex text-yellow-400">
              ★★★★★
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
