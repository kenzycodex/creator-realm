
import React from 'react';
import { Globe, CheckCircle, CreditCard, Users, Target, Heart } from 'lucide-react';

const WhySection = () => {
  const features = [
    {
      title: 'Global Earning Power',
      description: 'Access international opportunities and earn in stronger currencies while working from anywhere in Africa.',
      icon: Globe,
      color: 'text-yellow-600'
    },
    {
      title: 'Verified African Talent',
      description: 'Work with pre-vetted professionals who understand the unique challenges and opportunities in Africa.',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Seamless Payments',
      description: 'Get paid quickly and securely through our integrated payment system designed for African creators.',
      icon: CreditCard,
      color: 'text-blue-600'
    },
    {
      title: 'Community-Driven Support',
      description: 'Join a supportive community of creators who help each other grow and succeed.',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Smart Job Matching',
      description: 'Our AI-powered system matches you with opportunities that fit your skills and preferences.',
      icon: Target,
      color: 'text-red-600'
    },
    {
      title: 'Built for Africa, Open to the World',
      description: 'A platform created specifically for African talent to connect with global opportunities.',
      icon: Heart,
      color: 'text-pink-600'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Why <span className="text-blue-600">Creator Realm</span> is<br />
            Right for you?
          </h2>
          <div className="flex justify-center space-x-8 text-sm mt-8">
            <span className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-2 px-4">Jobs</span>
            <span className="text-gray-500 hover:text-blue-600 transition-colors pb-2 px-4 cursor-pointer">Talents</span>
            <span className="text-gray-500 hover:text-blue-600 transition-colors pb-2 px-4 cursor-pointer">All</span>
            <span className="text-gray-500 hover:text-blue-600 transition-colors pb-2 px-4 cursor-pointer">Companies</span>
            <span className="text-gray-500 hover:text-blue-600 transition-colors pb-2 px-4 cursor-pointer">Freelancers</span>
            <span className="text-gray-500 hover:text-blue-600 transition-colors pb-2 px-4 cursor-pointer">Agency</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                <div className={`${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
