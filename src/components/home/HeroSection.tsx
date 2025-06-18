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
              <p className="text-lg text-[#2a2a5a] leading-relaxed max-w-lg font-medium">
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
            </div>

            {/* Social Proof - Testimonials */}
            <div className="pt-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
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
              <div className="space-y-4">
                <p className="text-base font-bold text-[#2a2a5a]">Several companies are opening vacancies here</p>
                <div className="flex items-center space-x-8">
                  {/* Google */}
                  <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  
                  {/* Apple */}
                  <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>

                  {/* Microsoft */}
                  <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
                  </svg>

                  {/* Meta */}
                  <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>

                  {/* Amazon */}
                  <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.548.41-3.146.615-4.805.615-3.726 0-7.17-1.007-10.34-3.018-.126-.08-.19-.166-.19-.26 0-.08.046-.13.135-.18.09-.04.158-.06.21-.06.07 0 .12.01.16.04l.005-.01zm1.006-3.416c-.024-.19.09-.31.348-.365.25-.054.505-.082.76-.082.36 0 .725.054 1.095.165.37.11.69.285.96.525.27.24.405.54.405.9 0 .19-.045.35-.135.48-.09.13-.255.195-.495.195-.18 0-.33-.045-.45-.135-.12-.09-.18-.21-.18-.36 0-.11.03-.21.09-.3.06-.09.135-.135.225-.135.09 0 .165.03.225.09.06.06.09.135.09.225 0 .12-.045.225-.135.315-.09.09-.21.135-.36.135-.24 0-.405-.075-.495-.225-.09-.15-.135-.33-.135-.54 0-.42.135-.735.405-.945.27-.21.63-.315 1.08-.315.45 0 .825.105 1.125.315.3.21.45.495.45.855 0 .24-.06.45-.18.63-.12.18-.285.315-.495.405-.21.09-.435.135-.675.135-.36 0-.66-.075-.9-.225-.24-.15-.36-.375-.36-.675 0-.18.045-.33.135-.45.09-.12.21-.18.36-.18.12 0 .225.03.315.09.09.06.135.15.135.27 0 .09-.03.165-.09.225-.06.06-.135.09-.225.09-.06 0-.12-.015-.18-.045-.06-.03-.09-.075-.09-.135 0-.03.015-.06.045-.09.03-.03.06-.045.09-.045.03 0 .06.015.09.045.03.03.045.06.045.09 0 .06-.03.105-.09.135-.06.03-.12.045-.18.045-.12 0-.225-.045-.315-.135-.09-.09-.135-.195-.135-.315 0-.18.075-.33.225-.45.15-.12.345-.18.585-.18.21 0 .39.06.54.18.15.12.225.27.225.45 0 .15-.045.285-.135.405-.09.12-.21.18-.36.18-.12 0-.225-.03-.315-.09-.09-.06-.135-.15-.135-.27 0-.09.03-.165.09-.225.06-.06.135-.09.225-.09.06 0 .12.015.18.045.06.03.09.075.09.135 0 .03-.015.06-.045.09-.03.03-.06.045-.09.045-.03 0-.06-.015-.09-.045-.03-.03-.045-.06-.045-.09 0-.06.03-.105.09-.135.06-.03.12-.045.18-.045.12 0 .225.045.315.135.09.09.135.195.135.315 0 .18-.075.33-.225.45-.15.12-.345.18-.585.18-.21 0-.39-.06-.54-.18-.15-.12-.225-.27-.225-.45 0-.15.045-.285.135-.405.09-.12.21-.18.36-.18.12 0 .225.03.315.09.09.06.135.15.135.27 0 .09-.03.165-.09.225-.06.06-.135.09-.225.09-.06 0-.12-.015-.18-.045-.06-.03-.09-.075-.09-.135 0-.03.015-.06.045-.09.03-.03.06-.045.09-.045.03 0 .06.015.09.045.03.03.045.06.045.09 0 .06-.03.105-.09.135-.06.03-.12.045-.18.045-.12 0-.225-.045-.315-.135-.09-.09-.135-.195-.135-.315 0-.18.075-.33.225-.45.15-.12.345.18-.585.18-.21 0-.39-.06-.54-.18-.15-.12-.225-.27-.225-.45 0-.15.045-.285.135-.405.09-.12.21-.18.36-.18.12 0 .225.03.315.09.09.06.135.15.135.27 0 .09-.03.165-.09.225-.06.06-.135.09-.225.09-.06 0-.12-.015-.18-.045-.06-.03-.09-.075-.09-.135 0-.03.015-.06.045-.09.03-.03.06-.045.09-.045.03 0 .06.015.09.045.03.03.045.06.045.09 0 .06-.03.105-.09.135-.06.03-.12.045-.18.045-.12 0-.225-.045-.315-.135-.09-.09-.135-.195-.135-.315 0-.18.075-.33.225-.45.15-.12.345-.18.585-.18.21 0 .39.06.54.18.15.12.225.27.225.45 0 .15-.045.285-.135.405-.09.12-.21.18-.36.18-.12 0-.225-.03-.315-.09-.09-.06-.135-.15-.135-.27 0-.09.03-.165.09-.225.06-.06.135-.09.225-.09.06 0 .12.015.18.045.06.03.09.075.09.135 0 .03-.015.06-.045.09-.03.03-.06.045-.09.045-.03 0-.06-.015-.09-.045-.03-.03-.045-.06-.045-.09 0-.06.03-.105.09-.135.06-.03.12-.045.18-.045.12 0 .225.045.315.135.09.09.135.195.135.315 0 .18-.075.33-.225.45-.15.12-.345.18-.585.18-.21 0-.39-.06-.54-.18-.15-.12-.225-.27-.225-.45 0-.15.045-.285.135-.405.09-.12.21-.18.36-.18.12 0 .225.03.315.09.09.06.135.15.135.27 0 .09-.03.165-.09.225-.06.06-.135.09-.225.09-.06 0-.12-.015-.18-.045-.06-.03-.09-.075-.09-.135 0-.03.015-.06.045-.09.03-.03.06-.045.09-.045.03 0 .06.015.09.045.03.03.045.06.045.09 0 .06-.03.105-.09.135-.06.03-.12.045-.18.045-.12 0-.225-.045-.315-.135-.09-.09-.135-.195-.135-.315z"/>
                  </svg>

                  {/* Netflix */}
                  <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.71.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z"/>
                  </svg>
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
            <div className="flex gap-6">
              
              {/* Jobs Card */}
              <div className="bg-blue-50 p-5 py-12 rounded-tr-[3rem] rounded-bl-[3rem] text-center flex-1">
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
              <div className="bg-red-50 p-5 py-12 rounded-tl-[3rem] rounded-br-[3rem] text-center flex-1">
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