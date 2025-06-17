import React from 'react';

const BestCreatorsSection = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          {/* Left - Title */}
          <div className="space-y-2">
            <p className="text-sm text-gray-500 font-medium">Top Creators</p>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1a1a3a] leading-tight">
              Best Creators
              <br />& Clients.
            </h2>
          </div>

          {/* Right - Description and Search */}
          <div className="space-y-6">
            <p className="text-gray-600 text-base leading-relaxed">
              Leverage the job finder's company review section to gain insights into employee
              experiences at different companies.
            </p>

            {/* Search Section */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search for a companies"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
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

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Scribal Pay Large Card */}
          <div className="relative bg-[#e8f0ff] rounded-3xl p-8 overflow-hidden min-h-[400px]">
            {/* Cut-out corner for arrow */}
            <div
              className="absolute top-0 right-0 w-20 h-20 bg-white"
              style={{
                clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)',
              }}
            ></div>

            {/* Arrow positioned in cut-out */}
            <div className="absolute top-4 right-4">
              <div className="w-12 h-12 bg-[#2a2a5a] rounded-2xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </div>
            </div>

            <div className="pr-6">
              <div className="mb-8">
                <div className="w-16 h-16 bg-[#1a5cff] rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 8.26L23 12l-7.91 1.74L12 22l-3.09-8.26L1 12l7.91-1.74L12 2z" />
                  </svg>
                </div>
                <h4 className="text-sm text-gray-500 font-medium mb-4">Scribal Pay</h4>
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a3a] mb-4 leading-tight">
                Scribal Pay is a popular Digital Banking Platform
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Scribal Pay is an all-in-one app for sending money, paying bills, buying airtime,
                and scheduling payments
              </p>
            </div>
          </div>

          {/* Scribal Pay Small Card */}
          <div className="relative bg-[#fff5f5] rounded-3xl p-6 overflow-hidden min-h-[280px]">
            {/* Cut-out corner at bottom right */}
            <div
              className="absolute bottom-0 right-0 w-16 h-16 bg-white"
              style={{
                clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%)',
              }}
            ></div>

            {/* Arrow positioned in bottom cut-out */}
            <div className="absolute bottom-4 right-4">
              <div className="w-10 h-10 bg-[#ef4444] rounded-xl flex items-center justify-center shadow-md">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </div>
            </div>

            <div className="pb-6">
              <div className="mb-6">
                <div className="w-12 h-12 bg-[#1a5cff] rounded-xl flex items-center justify-center shadow-md mb-4">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 8.26L23 12l-7.91 1.74L12 22l-3.09-8.26L1 12l7.91-1.74L12 2z" />
                  </svg>
                </div>
                <h4 className="text-xs text-red-500 font-medium mb-3">Scribal Pay</h4>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a3a] mb-3 leading-tight">
                Techstar is a Tech Giant
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Google is a major player in the tech industry, shaping how people access
                information, communicate and consume entertainment.
              </p>
            </div>
          </div>

          {/* Abtan Creation Card */}
          <div className="relative bg-[#fffbf0] rounded-3xl p-6 overflow-hidden min-h-[320px]">
            {/* Cut-out corner for arrow */}
            <div
              className="absolute top-0 right-0 w-16 h-16 bg-white"
              style={{
                clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)',
              }}
            ></div>

            {/* Arrow positioned in cut-out */}
            <div className="absolute top-4 right-4">
              <div className="w-10 h-10 bg-[#f97316] rounded-xl flex items-center justify-center shadow-md">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </div>
            </div>

            <div className="pr-6">
              <div className="mb-6">
                <div className="w-12 h-12 bg-[#8b4513] rounded-xl flex items-center justify-center shadow-md mb-4">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />
                    <path d="M12 14C14.2 14 16 15.8 16 18V20H8V18C8 15.8 9.8 14 12 14Z" />
                  </svg>
                </div>
                <h4 className="text-xs text-orange-500 font-medium mb-3">Abtan Creation</h4>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a3a] mb-3 leading-tight">
                Abtan Creation deals with Design, Tech & People.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Overall, Abtan Creation is a tech Company that deals with Digital design, Gadgets
                for techies and also people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestCreatorsSection;
