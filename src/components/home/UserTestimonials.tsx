
import React from 'react';

const UserTestimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            What Our <span className="text-blue-600">users</span> Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                  alt="Akinola Abdullahi"
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Akinola Abdullahi</h3>
                <p className="text-blue-600 font-medium mb-6">Product Designer</p>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                  "Creator Realm has transformed my career completely. I've connected with amazing clients globally and built lasting professional relationships. The platform truly understands the African creative ecosystem and provides exactly what we need to succeed."
                </blockquote>
                <div className="flex justify-center md:justify-start text-yellow-400 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTestimonials;
