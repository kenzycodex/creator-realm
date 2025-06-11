import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="bg-blue-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-x-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-4">
            <p className="text-sm text-gray-700 font-medium">Join Creator Realm Today</p>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Experience
              <br />
              With Number
            </h2>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Stat */}
            <div className="text-left space-y-2 w-[200px]">
              <div className="text-4xl font-bold text-blue-500">92%</div>
              <p className="text-sm text-gray-700 leading-tight">
                Many users find relevant jobs according to skills
              </p>
            </div>

            {/* Second Stat with Red Divider */}
            <div className="relative md:border-l-2 md:border-red-500 md:pl-6 w-[210px]">
              <div className="text-left space-y-2">
                <div className="text-4xl font-bold text-blue-500">90%</div>
                <p className="text-sm text-gray-700 leading-tight">
                  Company data filtering is quick and efficient
                </p>
              </div>
            </div>

            {/* Third Stat with Red Divider */}
            <div className="relative md:border-l-2 md:border-red-500 md:pl-6 w-[200px]">
              <div className="text-left space-y-2">
                <div className="text-4xl font-bold text-blue-500">88%</div>
                <p className="text-sm text-gray-700 leading-tight">
                  Many top employers connect easily with users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
