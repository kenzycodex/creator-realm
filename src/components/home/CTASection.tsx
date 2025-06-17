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
            <div className="relative h-36 lg:h-32 flex justify-center lg:justify-start">
              {/* Card 1 - Abtan Creation */}
              <div className="absolute top-0 left-2 lg:left-0 bg-[#fff9e6] shadow-lg rounded-xl p-5 w-[250px] lg:w-[280px] transform rotate-[-8deg] hover:rotate-[-4deg] transition-transform duration-300 z-10">
                <p className="text-xs text-[#6b4cff] font-medium mb-3">Abtan Creation</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#8b4513] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />
                      <path d="M12 14C14.2 14 16 15.8 16 18V20H8V18C8 15.8 9.8 14 12 14Z" />
                      <path d="M12 8C14.2 8 16 9.8 16 12S14.2 16 12 16S8 14.2 8 12S9.8 8 12 8Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1a1a3a]">Senior UI/UX</p>
                    <p className="text-sm font-bold text-[#1a1a3a]">Designer</p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Scribal Pay */}
              <div className="absolute top-4 right-2 lg:left-[320px] lg:top-6 bg-white shadow-lg rounded-xl p-5 w-[250px] lg:w-[280px] transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-300 z-20">
                <p className="text-xs text-[#6b4cff] font-medium mb-3">Scribal Pay</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1a1a3a] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 5V19H21V5H3ZM19 17H5V7H19V17Z" />
                      <path d="M7 9H17V11H7V9Z" />
                      <path d="M7 13H15V15H7V13Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1a1a3a]">Financial Analyst</p>
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
