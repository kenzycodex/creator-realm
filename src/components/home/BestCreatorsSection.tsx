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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* 1. Scribal Pay */}
          <div className="relative bg-[#e8f4ff] rounded-3xl p-8 h-[400px] border-2 border-[#b3d9ff] overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-white rounded-bl-[1.5rem]"></div>

            <div className="absolute top-5 right-5">
              <div className="w-20 h-20 bg-[#2a2a5a] rounded-2xl flex items-center justify-center shadow">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
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
                <div className="w-16 h-16 bg-[#1a5cff] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 8.26L23 12l-7.91 1.74L12 22l-3.09-8.26L1 12l7.91-1.74L12 2z" />
                  </svg>
                </div>
                <h4 className="text-sm text-gray-500 font-medium mb-4">Scribal Pay</h4>
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a3a] mb-4 leading-tight">
                Scribal Pay is a popular Digital Banking Platform
              </h3>
              <p className="text-gray-600 text-sm">
                Scribal Pay is an all-in-one app for sending money, paying bills, buying airtime,
                and scheduling payments
              </p>
            </div>
          </div>

          {/* 2. Techstar */}
          <div className="relative bg-[#fff5f5] rounded-3xl p-8 h-[400px] border-2 border-[#ffcccc] overflow-hidden">
            <div className="absolute bottom-0 right-0 w-28 h-28 bg-white rounded-tl-[1.5rem]"></div>

            <div className="absolute bottom-5 right-5">
              <div className="w-20 h-20 bg-[#ef4444] rounded-2xl flex items-center justify-center shadow">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <div className="w-14 h-14 bg-[#1a5cff] rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 8.26L23 12l-7.91 1.74L12 22l-3.09-8.26L1 12l7.91-1.74L12 2z" />
                  </svg>
                </div>
                <h4 className="text-sm text-red-500 font-medium mb-3">Scribal Pay</h4>
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a3a] mb-3 leading-tight">
                Techstar is a Tech Giant
              </h3>
              <p className="text-gray-600 text-sm">
                Google is a major player in the tech industry, shaping how people access
                information, communicate and consume entertainment.
              </p>
            </div>
          </div>

          {/* 3. Abtan Creation */}
          <div className="relative bg-[#fffbf0] rounded-3xl p-8 h-[400px] border-2 border-[#ffe4b3] overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-white rounded-bl-[1.5rem]"></div>

            <div className="absolute top-5 right-5">
              <div className="w-20 h-20 bg-[#f97316] rounded-2xl flex items-center justify-center shadow">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
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
                <div className="w-14 h-14 bg-[#8b4513] rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />
                    <path d="M12 14C14.2 14 16 15.8 16 18V20H8V18C8 15.8 9.8 14 12 14Z" />
                  </svg>
                </div>
                <h4 className="text-sm text-orange-500 font-medium mb-3">Abtan Creation</h4>
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a3a] mb-3 leading-tight">
                Abtan Creation deals with Design, Tech & People.
              </h3>
              <p className="text-gray-600 text-sm">
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