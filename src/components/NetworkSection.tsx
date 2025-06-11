
import React from 'react';

const NetworkSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Build Your<br />
              Network: Creator<br />
              Realm Community
            </h2>
            <p className="text-blue-100 text-lg">
              Connect with like-minded creators, share experiences, and grow together in our vibrant community.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Join Community
            </button>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">JOIN OUR TECH FAMILY OF OVER</h3>
                <div className="text-5xl font-bold text-yellow-400">20K+</div>
                <p className="text-blue-200">TALENTED INDIVIDUALS</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <h4 className="font-semibold">GRASSROOTS</h4>
                  <p className="text-sm text-blue-200">Support from the ground up</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <h4 className="font-semibold">MENTORSHIP</h4>
                  <p className="text-sm text-blue-200">Learn from industry experts</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <h4 className="font-semibold">COLLABORATION</h4>
                  <p className="text-sm text-blue-200">Work together on exciting projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
