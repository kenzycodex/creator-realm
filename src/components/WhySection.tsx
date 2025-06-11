
import React from 'react';

const WhySection = () => {
  const features = [
    {
      title: 'Global Earning Power',
      description: 'Access international opportunities and earn in stronger currencies while working from anywhere in Africa.',
      icon: '💰',
      color: 'text-yellow-600'
    },
    {
      title: 'Verified African Talent',
      description: 'Work with pre-vetted professionals who understand the unique challenges and opportunities in Africa.',
      icon: '✅',
      color: 'text-green-600'
    },
    {
      title: 'Seamless Payments',
      description: 'Get paid quickly and securely through our integrated payment system designed for African creators.',
      icon: '💳',
      color: 'text-blue-600'
    },
    {
      title: 'Community-Driven Support',
      description: 'Join a supportive community of creators who help each other grow and succeed.',
      icon: '🤝',
      color: 'text-purple-600'
    },
    {
      title: 'Smart Job Matching',
      description: 'Our AI-powered system matches you with opportunities that fit your skills and preferences.',
      icon: '🎯',
      color: 'text-red-600'
    },
    {
      title: 'Built for Africa, Open to the World',
      description: 'A platform created specifically for African talent to connect with global opportunities.',
      icon: '🌍',
      color: 'text-green-600'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why Creator Realm is<br />
            Right for you?
          </h2>
          <div className="flex justify-center space-x-8 text-sm">
            <span className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Jobs</span>
            <span className="text-gray-500">Talents</span>
            <span className="text-gray-500">All</span>
            <span className="text-gray-500">Companies</span>
            <span className="text-gray-500">Freelancers</span>
            <span className="text-gray-500">Agency</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className={`text-3xl mb-4 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
