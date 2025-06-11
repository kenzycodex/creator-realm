
import React from 'react';

const OpportunitiesSection = () => {
  const categories = [
    { title: 'App Development', icon: '📱', color: 'bg-purple-100 text-purple-600' },
    { title: 'Web Development', icon: '💻', color: 'bg-orange-100 text-orange-600' },
    { title: 'Management', icon: '📊', color: 'bg-red-100 text-red-600' },
    { title: 'UI Writing', icon: '✍️', color: 'bg-gray-100 text-gray-600' },
    { title: 'Design', icon: '🎨', color: 'bg-yellow-100 text-yellow-600' },
    { title: 'Marketing', icon: '📈', color: 'bg-green-100 text-green-600' },
    { title: 'Sales', icon: '📈', color: 'bg-blue-100 text-blue-600' },
    { title: 'Finance', icon: '💰', color: 'bg-pink-100 text-pink-600' }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Diverse Opportunities Awaits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a wide range of opportunities across different industries and skill sets. 
            Find the perfect match for your expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
