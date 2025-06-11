
import React from 'react';
import { Smartphone, Monitor, BarChart, PenTool, Palette, TrendingUp, ShoppingCart, DollarSign } from 'lucide-react';

const OpportunitiesSection = () => {
  const categories = [
    { title: 'App Development', icon: Smartphone, color: 'bg-purple-100 text-purple-600 hover:bg-purple-200' },
    { title: 'Web Development', icon: Monitor, color: 'bg-orange-100 text-orange-600 hover:bg-orange-200' },
    { title: 'Management', icon: BarChart, color: 'bg-red-100 text-red-600 hover:bg-red-200' },
    { title: 'UI Writing', icon: PenTool, color: 'bg-gray-100 text-gray-600 hover:bg-gray-200' },
    { title: 'Design', icon: Palette, color: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' },
    { title: 'Marketing', icon: TrendingUp, color: 'bg-green-100 text-green-600 hover:bg-green-200' },
    { title: 'Sales', icon: ShoppingCart, color: 'bg-blue-100 text-blue-600 hover:bg-blue-200' },
    { title: 'Finance', icon: DollarSign, color: 'bg-pink-100 text-pink-600 hover:bg-pink-200' }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Diverse Opportunities <span className="text-blue-600">Awaits</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a wide range of opportunities across different industries and skill sets. 
            Find the perfect match for your expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-lg">
                  {category.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
