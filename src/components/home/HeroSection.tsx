import React from 'react';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start relative">
          {/* Red line SVG positioned between sections */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <img
              src="/svgs/red-line.svg"
              alt="Curved connector"
              className="w-64 h-48"
            />
          </div>
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
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
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
              <div className="relative">
                {/* Blue line SVG - made bigger */}
                <div className="w-24 h-16 mb-6">
                  <img
                    src="/svgs/blue-line.svg"
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Testimonial container positioned at bottom right of blue line */}
                <div className="absolute top-8 left-20 bg-white border border-gray-200 shadow-md rounded-lg p-4 max-w-xs ml-8">
                  <div className="flex items-center space-x-3">
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
                    <span className="text-sm text-[#2a2a5a]">
                      <span className="text-blue-600 font-bold">60k</span> Plus Talents Found <br /> Their Dream Job
                    </span>
                  </div>
                </div>
              </div>

              {/* Company Logos Section */}
              <div className="space-y-4 mt-20">
                <p className="text-base font-bold text-[#2a2a5a]">Several companies are opening vacancies here</p>
                <div className="flex items-center space-x-4">
                  {/* Google */}
                  <img src="/svgs/company/google.svg" alt="Google" className="w-6 h-6 opacity-60" />
                  
                  {/* Apple */}
                  <img src="/svgs/company/apple.svg" alt="Apple" className="w-6 h-6 opacity-60" />

                  {/* Figma */}
                  <img src="/svgs/company/figma.svg" alt="Figma" className="w-6 h-6 opacity-60" />

                  {/* Windows */}
                  <img src="/svgs/company/windows.svg" alt="Windows" className="w-6 h-6 opacity-60" />

                  {/* Spotify */}
                  <img src="/svgs/company/spotify.svg" alt="Spotify" className="w-6 h-6 opacity-60" />

                  {/* Twitch */}
                  <img src="/svgs/company/twitch.svg" alt="Twitch" className="w-6 h-6 opacity-60" />
                  
                  {/* Zoom */}
                  <img src="/svgs/company/zoom.svg" alt="Zoom" className="w-6 h-6 opacity-60" />

                  {/* Dribble */}
                  <img src="/svgs/company/dribbble.svg" alt="Dribbble" className="w-6 h-6 opacity-60" />

                  {/* Messenger */}
                  <img src="/svgs/company/messenger.svg" alt="Messenger" className="w-6 h-6 opacity-60" />
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
                  src="/images/smiling-woman.png"
                  alt="African professional working"
                  className="w-full h-auto object-cover rounded-t-[5.5rem]"
                />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="flex gap-6">
              
              {/* Jobs Card */}
              <div className="bg-blue-50 p-5 py-12 rounded-tr-[3rem] rounded-bl-[3rem] text-center flex-1">
                <div className="flex items-center justify-center mb-4">
                  <img src="/svgs/briefcase.svg" alt="Jobs" className="w-14 h-14" />
                </div>
                <p className="text-sm font-medium" style={{ color: '#2a2a5a' }}>Jobs</p>
                <div className="text-3xl font-bold mt-1" style={{ color: '#2a2a5a' }}>
                  25,000<span style={{ color: '#4c4c7a' }}>+</span>
                </div>
              </div>

              {/* Currencies Card */}
              <div className="bg-red-50 p-5 py-12 rounded-tl-[3rem] rounded-br-[3rem] text-center flex-1">
                <div className="flex items-center justify-center mb-4">
                  <img src="/svgs/global.svg" alt="Currencies" className="w-14 h-14" />
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