import React from "react";

const WhyCreatorRealmSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      {/* Header and Badges */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1c1454] leading-tight mb-4">
          Why Creator Realm is <br className="hidden md:block" />
          Right for you?
        </h2>

        {/* Dynamic Shapes - Join Chips */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-6 mb-12">
          <span className="bg-[#e8ecff] text-[#1c1454] text-sm font-medium px-4 py-2 rounded-full">Join</span>
          <span className="bg-[#ffecec] text-[#e02b2b] text-lg font-medium px-6 py-3 rounded-lg">Millions</span>
          <span className="bg-[#fffbe6] text-[#eaaa00] text-xs font-medium px-3 py-1 rounded-md">Of</span>
          <span className="bg-[#e6fff5] text-[#00a87e] text-base font-medium px-5 py-2 rounded-2xl">Creators</span>
          <span className="bg-[#ffecec] text-[#e02b2b] text-sm font-medium px-4 py-1 rounded-full">Today</span>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-[#e26912] mb-2 flex items-center gap-2">
            <span>🌐</span> Global Earning Power
          </h3>
          <p className="text-sm text-gray-700">
            Freelancers can access international clients and earn in stronger currencies, helping them grow financially beyond local limitations.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-[#281b7a] mb-2 flex items-center gap-2">
            <span>🪄</span> Verified African Talent
          </h3>
          <p className="text-sm text-gray-700">
            Clients gain access to a curated pool of skilled African freelancers across tech, design, writing, and more — verified for quality.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-[#038860] mb-2 flex items-center gap-2">
            <span>💳</span> Seamless Payments
          </h3>
          <p className="text-sm text-gray-700">
            Secure, dollar-based payment system for freelancers. Clients enjoy easy payment options including cards, PayPal, or crypto.
          </p>
        </div>

        {/* Card 4 */}
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
            <span>👥</span> Community-Driven Support
          </h3>
          <p className="text-sm text-gray-700">
            Engage with a supportive network of peers, mentors, and clients to exchange ideas, get feedback, and grow your career or project.
          </p>
        </div>

        {/* Card 5 */}
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
            <span>🧠</span> Smart Job Matching
          </h3>
          <p className="text-sm text-gray-700">
            Powerful matching system helps clients find ideal freelancers, and freelancers discover jobs that match their exact skills and rates.
          </p>
        </div>

        {/* Card 6 */}
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
            <span>🌍</span> Built for Africa, Open to the World
          </h3>
          <p className="text-sm text-gray-700">
            Creator Realm understands the unique needs of African freelancers — while connecting them to global clients, tools, and income.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyCreatorRealmSection;