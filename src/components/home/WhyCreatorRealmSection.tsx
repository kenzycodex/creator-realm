import React from "react";

const WhyCreatorRealmSection = () => {
  const cards = [
    {
      title: "Global Earning Power",
      description: "Freelancers can access international clients and earn in stronger currencies, helping them grow financially beyond local limitations.",
      iconPath: "/svgs/features/global-earning.svg",
      titleColor: "text-[#e26912]"
    },
    {
      title: "Verified African Talent",
      description: "Clients gain access to a curated pool of skilled African freelancers across tech, design, writing, and more — verified for quality.",
      iconPath: "/svgs/features/verified-talent.svg",
      titleColor: "text-[#281b7a]"
    },
    {
      title: "Seamless Payments",
      description: "Secure, dollar-based payment system for freelancers. Clients enjoy easy payment options including cards, PayPal, or crypto.",
      iconPath: "/svgs/features/seamless-payments.svg",
      titleColor: "text-[#038860]"
    },
    {
      title: "Community-Driven Support",
      description: "Engage with a supportive network of peers, mentors, and clients to exchange ideas, get feedback, and grow your career or project.",
      iconPath: "/svgs/features/community-support.svg",
      titleColor: "text-gray-800"
    },
    {
      title: "Smart Job Matching",
      description: "Powerful matching system helps clients find ideal freelancers, and freelancers discover jobs that match their exact skills and rates.",
      iconPath: "/svgs/features/job-matching.svg",
      titleColor: "text-gray-800"
    },
    {
      title: "Built for Africa, Open to the World",
      description: "Creator Realm understands the unique needs of African freelancers — while connecting them to global clients, tools, and income.",
      iconPath: "/svgs/features/africa-global.svg",
      titleColor: "text-gray-800"
    }
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      {/* Header and Badges */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1c1454] leading-tight mb-4">
          Why Creator Realm is <br className="hidden md:block" />
          Right for you?
        </h2>

        {/* Dynamic Shapes - Join Chips using SVGs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-6 mb-12">
          <img src="/svgs/text-shapes/join.svg" alt="Join" className="h-12" />
          <img src="/svgs/text-shapes/millions.svg" alt="Millions" className="h-12" />
          <img src="/svgs/text-shapes/of.svg" alt="Of" className="h-12" />
          <img src="/svgs/text-shapes/creators.svg" alt="Creators" className="h-12" />
          <img src="/svgs/text-shapes/today.svg" alt="Today" className="h-12" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-6">
            {/* Icon above heading */}
            <div className="flex justify-start mb-3">
              <img 
                src={card.iconPath} 
                alt={card.title}
                className="w-8 h-8"
              />
            </div>
            
            <h3 className={`text-lg font-bold ${card.titleColor} mb-2`}>
              {card.title}
            </h3>
            <p className="text-sm text-gray-700">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyCreatorRealmSection;