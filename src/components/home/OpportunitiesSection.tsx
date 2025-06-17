import React from 'react';

const OpportunitiesSection = () => {
  const categories = [
    {
      title: 'App Development',
      tasks: '431 tasks available',
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Web Development',
      tasks: '431 tasks available',
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Management',
      tasks: '431 tasks available',
      iconColor: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      title: 'UX Writing',
      tasks: '946 tasks available',
      iconColor: 'text-gray-500',
      bgColor: 'bg-gray-50',
    },
    {
      title: 'Design',
      tasks: '140 tasks available',
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Marketing',
      tasks: '225 tasks available',
      iconColor: 'text-teal-500',
      bgColor: 'bg-teal-50',
    },
    {
      title: 'Sales',
      tasks: '765 tasks available',
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Finance',
      tasks: '525 tasks available',
      iconColor: 'text-pink-500',
      bgColor: 'bg-pink-50',
    },
  ];

  const getIcon = (title) => {
    switch (title) {
      case 'App Development':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v16H7V4z" />
            <rect x="9" y="6" width="6" height="1" />
            <rect x="9" y="8" width="6" height="1" />
            <rect x="9" y="10" width="4" height="1" />
          </svg>
        );
      case 'Web Development':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.5 12L5 8.5L6.4 7.1L8.5 9.2L8.5 12ZM15.5 12L19 8.5L17.6 7.1L15.5 9.2L15.5 12ZM12 16L8 12L12 8L16 12L12 16Z" />
          </svg>
        );
      case 'Management':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V7.5L21 9ZM3 9L9 7.5V5.5L3 7V9ZM15 9.5C16.1 9.5 17 10.4 17 11.5V16.5C17 17.6 16.1 18.5 15 18.5H9C7.9 18.5 7 17.6 7 16.5V11.5C7 10.4 7.9 9.5 9 9.5H15Z" />
          </svg>
        );
      case 'UX Writing':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 4H18V16H16V4ZM6 4H8V16H6V4ZM12 4H14V16H12V4ZM4 18H20V20H4V18Z" />
          </svg>
        );
      case 'Design':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2ZM8 21L9.5 16.5L14 18L9.5 19.5L8 21Z" />
          </svg>
        );
      case 'Marketing':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4V8C14 9.1 13.1 10 12 10S10 9.1 10 8V4C10 2.9 10.9 2 12 2ZM19 8C20.1 8 21 8.9 21 10V14C21 15.1 20.1 16 19 16S17 15.1 17 14V10C17 8.9 17.9 8 19 8ZM5 12C6.1 12 7 12.9 7 14V18C7 19.1 6.1 20 5 20S3 19.1 3 18V14C3 12.9 3.9 12 5 12Z" />
          </svg>
        );
      case 'Sales':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3V21H21V19H5V3H3ZM21 7L15 13L11 9L7 13L5.5 11.5L11 6L15 10L19.5 5.5L21 7Z" />
          </svg>
        );
      case 'Finance':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15 16H9V14H15V16ZM15 12H9V10H15V12ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM19 6H5V5H19V6Z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
    }
  };

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Diverse Opportunities Awaits
          </h2>
          <p className="text-base text-gray-600 max-w-3xl leading-relaxed">
            Our vast array of jobs encompasses developing, UI/UX design, data analysis and much
            more. There's always a new challenge to keep you engaged and ensure your skills remain
            sharp and relevant
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer transform"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out`}
              >
                <div className={category.iconColor}>{getIcon(category.title)}</div>
              </div>

              {/* Content */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                  {category.tasks}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-out">
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-blue-600"
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
