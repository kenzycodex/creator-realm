import React from 'react';

const BestCreatorsSection = () => {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          <div className="space-y-2">
            <p className="text-sm text-gray-500 font-medium">Top Creators</p>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2a2a5a] leading-tight">
              Best Creators
              <br />& Clients.
            </h2>
          </div>

          {/* Right Search */}
          <div className="space-y-6">
            <p className="text-gray-600 text-base leading-relaxed">
              Leverage the job finder's company review section to gain insights into employee
              experiences at different companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search for a companies"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              <button className="bg-[#4a3aff] hover:bg-[#3b2ee0] text-white px-8 py-3 rounded-lg font-semibold transition">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* 1. Scribal Pay */}
          <div className="relative h-[350px] sm:h-[380px] lg:h-[400px] overflow-hidden">
            {/* Card Background SVG */}
            <img 
              src="/svgs/cards/blue-card.svg" 
              alt="Card background"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl"
            />
            
            {/* Card Content */}
            <div className="relative z-10 p-4 sm:p-6 lg:p-8 h-full">
              {/* Arrow Icon - Top Right */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-5 lg:right-5">
                <img 
                  src="/svgs/arrow.svg" 
                  alt="Arrow"
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                />
              </div>

              <div className="pr-4 sm:pr-5 lg:pr-6">
                <div className="mb-6 sm:mb-7 lg:mb-8">
                  {/* Company Logo */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
                    <img 
                      src="/svgs/companies/scribal-pay.svg" 
                      alt="Scribal Pay"
                      className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12"
                    />
                  </div>
                  <h4 className="text-xs sm:text-sm text-gray-500 font-medium mb-3 sm:mb-4">Scribal Pay</h4>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1a1a3a] mb-3 sm:mb-4 leading-tight">
                  Scribal Pay is a popular Digital Banking Platform
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Scribal Pay is an all-in-one app for sending money, paying bills, buying airtime,
                  and scheduling payments
                </p>
              </div>
            </div>
          </div>

          {/* 2. Techstar */}
          <div className="relative h-[350px] sm:h-[380px] lg:h-[400px] overflow-hidden">
            {/* Card Background SVG */}
            <img 
              src="/svgs/cards/red-card.svg" 
              alt="Card background"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl"
            />
            
            {/* Card Content */}
            <div className="relative z-10 p-4 sm:p-6 lg:p-8 h-full">
              {/* Arrow Icon - Bottom Right */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-5 lg:right-5">
                <img 
                  src="/svgs/arrow.svg" 
                  alt="Arrow"
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                />
              </div>

              <div className="pb-12 sm:pb-14 lg:pb-16">
                <div className="mb-4 sm:mb-5 lg:mb-6">
                  <h4 className="text-xs sm:text-sm text-red-500 font-medium mb-2 sm:mb-3">Teens Center for intelligence</h4>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1a1a3a] mb-2 sm:mb-3 leading-tight">
                  Teens Center is an innovative teens corner
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Teens center is a major player in shaping how teenagers across information, communicate and consume 
                  entertainment.
                </p>
                
                {/* Company Logo - Bottom */}
                <div className="absolute bottom-16 left-4 sm:bottom-18 sm:left-6 lg:bottom-24 lg:left-8">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 flex items-center justify-center">
                    <img 
                      src="/svgs/companies/techstar.svg" 
                      alt="Techstar"
                      className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Abtan Creation */}
          <div className="relative h-[350px] sm:h-[380px] lg:h-[400px] overflow-hidden md:col-span-2 lg:col-span-1">
            {/* Card Background SVG */}
            <img 
              src="/svgs/cards/orange-card.svg" 
              alt="Card background"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl"
            />
            
            {/* Card Content */}
            <div className="relative z-10 p-4 sm:p-6 lg:p-8 h-full">
              {/* Arrow Icon - Top Right */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-5 lg:right-5">
                <img 
                  src="/svgs/arrow.svg" 
                  alt="Arrow"
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                />
              </div>

              <div className="pr-4 sm:pr-5 lg:pr-6">
                <div className="mb-4 sm:mb-5 lg:mb-6">
                  {/* Company Logo */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-3 sm:mb-4">
                    <img 
                      src="/svgs/companies/abtan-creation.svg" 
                      alt="Abtan Creation"
                      className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                    />
                  </div>
                  <h4 className="text-xs sm:text-sm text-orange-500 font-medium mb-2 sm:mb-3">Abtan Creation</h4>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1a1a3a] mb-2 sm:mb-3 leading-tight">
                  Abtan Creation deals with Design, Tech & People.
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Overall, Abtan Creation is a tech Company that deals with Digital design, Gadgets
                  for techies and also people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestCreatorsSection;