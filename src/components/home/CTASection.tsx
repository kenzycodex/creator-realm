import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-[#e4e9ff] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          {/* Left Side Content */}
          <div className="space-y-4 text-left">
            <p className="text-sm text-[#6b4cff] font-medium">Lets Find your dream Job</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a3a] leading-tight">
              Ready to take
              <br />
              your Career to
              <br />
              the next Level
            </h1>
            <p className="text-base text-[#4a4a6a] pt-2 max-w-lg">
              Join thousands of African creators building global careers from anywhere.
            </p>
          </div>

          {/* Right Side - Cards and Form */}
          <div className="space-y-8">
            {/* Floating Job Cards */}
            <div className="relative h-52 sm:h-48 lg:h-32 flex justify-center lg:justify-start">
              {/* Card 1 - Abtan Creation */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 sm:left-4 sm:translate-x-0 lg:left-0 bg-[#fff9e6] shadow-lg rounded-xl p-4 sm:p-5 w-[280px] sm:w-[300px] lg:w-[280px] rotate-[-12deg] sm:rotate-[-8deg] hover:rotate-[-6deg] sm:hover:rotate-[-4deg] transition-transform duration-300 z-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                    <img 
                      src="/svgs/companies/abtan-creation.svg" 
                      alt="Abtan Creation"
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-[#6b4cff] font-medium mb-2">Abtan Creation</p>
                    <p className="text-sm font-bold text-[#2a2a5a]">Senior UI/UX Designer</p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Scribal Pay */}
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 sm:top-20 sm:right-4 sm:left-auto sm:translate-x-0 lg:left-[320px] lg:top-6 bg-white shadow-lg rounded-xl p-4 sm:p-5 w-[280px] sm:w-[300px] lg:w-[280px] rotate-[12deg] sm:rotate-[8deg] hover:rotate-[6deg] sm:hover:rotate-[4deg] transition-transform duration-300 z-20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                    <img 
                      src="/svgs/companies/scribal-pay.svg" 
                      alt="Scribal Pay"
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-[#6b4cff] font-medium mb-2">Scribal Pay</p>
                    <p className="text-sm font-bold text-[#2a2a5a]">Financial Analyst</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-3">
              <p className="text-sm text-[#6b4cff] font-medium">Subscribe to our Newsletter</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6b4cff] focus:border-transparent bg-white text-gray-700 placeholder-gray-400"
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
                <button className="bg-[#4a3aff] hover:bg-[#3b2ee0] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;