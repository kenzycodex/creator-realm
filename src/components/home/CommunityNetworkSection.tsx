import React from 'react';
import { ArrowRight } from "lucide-react";

const CommunityNetworkSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:items-center">
        {/* LEFT SECTION */}
        <div>
          <p className="text-gray-500 text-sm font-medium mb-2">Join our Community</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1c1454] leading-tight mb-6">
            Build Your <br />
            Network: Creator <br />
            Realm Community
          </h2>
          <p className="text-gray-600 text-base mb-6 max-w-md">
            Connect with fellow creators, share insights, and grow together in Africa's most vibrant
            freelance community.
          </p>
          <button className="bg-[#4f30e3] hover:bg-[#3b22c1] text-white font-semibold px-6 py-3 rounded-md transition">
            Get Started
          </button>
        </div>

        {/* RIGHT SECTION - Two Column Layout */}
        <div className="flex gap-4">
          {/* Left Column - Jobs in Tech & Designers */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Box 1 - Jobs in Tech */}
            <div className="bg-[#f4f7ff] border border-[#dce5fc] rounded-xl p-5 h-[220px] flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#1c1454] mb-2">JOBS IN TECH</h3>
                <p className="text-sm text-gray-700 leading-snug">
                  Many tech companies innovate and collaborative work environments.
                </p>
              </div>
              <button className="mt-4 text-white bg-[#4f30e3] hover:bg-[#3b22c1] text-xs font-medium px-3 py-3 rounded transition w-20">
                Details
              </button>
            </div>

            {/* Box 3 - Designers */}
            <div className="bg-[#fff5f5] border border-[#ffd6d6] rounded-xl p-5 h-[220px] flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#ef4444] mb-2">DESIGNERS</h3>
                <p className="text-sm text-gray-700 leading-snug">
                  Design jobs are all about creating visual components that communicate ideas and
                  information.
                </p>
              </div>
              <button className="mt-4 text-white bg-[#4f30e3] hover:bg-[#3b22c1] text-xs font-medium px-3 py-3 rounded transition w-20">
                Details
              </button>
            </div>
          </div>

          {/* Right Column - 20K+ Card & More Button */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Box 2 - 20K+ */}
            <div className="bg-[#fff8e6] border border-[#ffebad] rounded-xl p-5 flex flex-col justify-between h-[360px]">
              <div>
                <h2 className="text-3xl font-bold text-[#eaaa00] mb-1">20K+</h2>
                <p className="text-sm text-gray-700 mb-4 leading-snug">
                  Users have joined the community
                </p>
                <hr className="border-t border-[#e4c970] mb-3" />
                <h4 className="text-sm font-bold text-[#1c1454]">SALARIES IN TECH</h4>
                <p className="text-sm text-gray-700 mt-1">
                  Tech salaries are generally quite competitive compared to the average across all
                  occupations
                </p>
              </div>
              <button className="mt-6 text-white bg-[#4f30e3] hover:bg-[#3b22c1] text-xs font-medium px-3 py-3 rounded transition w-20">
                Details
              </button>
            </div>

            {/* Box 4 - More Button */}
            <div className="flex items-end">
							<button className="w-full text-white bg-[#4f30e3] hover:bg-[#3b22c1] font-semibold text-base px-6 py-3 rounded-md transition flex justify-center items-center gap-2">
								More
								<ArrowRight className="w-5 h-5" />
							</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityNetworkSection;