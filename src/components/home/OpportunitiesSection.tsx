import React from 'react';

const OpportunitiesSection = () => {
  const categories = [
    {
      title: 'App Development',
      tasks: '431 tasks available',
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
      iconPath: '/svgs/skill/app-development.svg'
    },
    {
      title: 'Web Development',
      tasks: '431 tasks available',
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
      iconPath: '/svgs/skill/web-development.svg'
    },
    {
      title: 'Management',
      tasks: '431 tasks available',
      iconColor: 'text-red-500',
      bgColor: 'bg-red-50',
      iconPath: '/svgs/skill/management.svg'
    },
    {
      title: 'UX Writing',
      tasks: '946 tasks available',
      iconColor: 'text-gray-500',
      bgColor: 'bg-gray-50',
      iconPath: '/svgs/skill/ux-writing.svg'
    },
    {
      title: 'Design',
      tasks: '140 tasks available',
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
      iconPath: '/svgs/skill/design.svg'
    },
    {
      title: 'Marketing',
      tasks: '225 tasks available',
      iconColor: 'text-teal-500',
      bgColor: 'bg-teal-50',
      iconPath: '/svgs/skill/marketing.svg'
    },
    {
      title: 'Sales',
      tasks: '765 tasks available',
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
      iconPath: '/svgs/skill/sales.svg'
    },
    {
      title: 'Finance',
      tasks: '525 tasks available',
      iconColor: 'text-pink-500',
      bgColor: 'bg-pink-50',
      iconPath: '/svgs/skill/finance.svg'
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2a2a5a] mb-3 sm:mb-4 leading-tight">
            Diverse Opportunities Awaits
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
            Our vast array of jobs encompasses developing, UI/UX design, data analysis and much
            more. There's always a new challenge to keep you engaged and ensure your skills remain
            sharp and relevant
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer transform"
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 ${category.bgColor} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out`}
              >
                <img 
                  src={category.iconPath} 
                  alt={category.title}
                  className="w-6 h-6"
                />
              </div>

              {/* Content */}
              <div className="space-y-1">
                <h3 className="text-sm sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                  {category.title}
                </h3>
                <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                  {category.tasks}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-out">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;