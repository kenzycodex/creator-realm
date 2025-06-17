import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2a2a5a] leading-tight">
                Where African
                <br />
                Talent Meets Global
                <br />
                <span>Opportunity.</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Join a thriving community of African freelancers and creators connecting with
                clients worldwide. Get paid in dollars. Work on your terms.
              </p>
            </div>

            {/* Search Input and CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search for a job"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Product Design
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Front-end Dev
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Content Writer
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Brand Designer
              </span>
              {/* <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Graphics Design
              </span> */}
            </div>

            {/* Social Proof - Testimonials */}
            <div className="pt-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  {/* <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg> */}
                </div>
                <div className="flex -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
                    alt="User"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
                    alt="User"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
                    alt="User"
                  />
                </div>
                <span className="text-sm text-gray-600">
                  60k Plus Talents Found Their Dream Job
                </span>
              </div>

              {/* Company Logos Section */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-[#2a2a5a]">Several companies are opening vacancies here</p>
                <div className="flex items-center space-x-6 opacity-40">
                  <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">G</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">A</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">F</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">M</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">S</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">T</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">N</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">Z</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="space-y-8">
            {/* Image Container */}
            <div className="relative">
              <div className="relative">
                <img
                  src="/images/office-woman.jpg"
                  alt="African professional working"
                  className="w-full h-auto object-cover rounded-t-[5.5rem]"
                />

                {/* Floating Arrow - More stylized curved design */}
                <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-10 hidden lg:block">
                  <svg className="w-24 h-20 text-red-500" viewBox="0 0 120 80" fill="none">
                    <path
                      d="M15 40 Q50 15 85 40 L80 35 L100 40 L80 45 L85 40 Q50 65 15 40"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              
              {/* Jobs Card */}
              <div className="bg-blue-50 p-5 rounded-tr-[3rem] rounded-bl-[3rem] text-center min-w-[150px] max-w-[200px] flex-1">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12" style={{ backgroundColor: '#2a2a5a', borderRadius: '0.75rem' }}>
                    <svg className="w-6 h-6 text-white m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 8v10l4-2 4 2V8"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm font-medium" style={{ color: '#2a2a5a' }}>Jobs</p>
                <div className="text-3xl font-bold mt-1" style={{ color: '#2a2a5a' }}>
                  25,000<span style={{ color: '#4c4c7a' }}>+</span>
                </div>
              </div>

              {/* Currencies Card */}
              <div className="bg-red-50 p-5 rounded-tl-[3rem] rounded-br-[3rem] text-center min-w-[150px] max-w-[200px] flex-1">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm font-medium text-red-600">Currencies</p>
                <div className="text-3xl font-bold mt-1 text-red-600">
                  50<span className="text-red-400">+</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;