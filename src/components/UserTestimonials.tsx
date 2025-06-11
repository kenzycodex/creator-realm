
import React from 'react';

const UserTestimonials = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            What Our users Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/c06d51bd-1090-438a-bf68-41cfc80867bb.png"
                  alt="Akinola Abdullahi"
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Akinola Abdullahi</h3>
                <p className="text-gray-600 mb-4">Product Designer</p>
                <blockquote className="text-lg text-gray-700 italic">
                  "Creator Realm has transformed my career. I've connected with amazing clients globally and built lasting professional relationships. The platform truly understands the African creative ecosystem."
                </blockquote>
                <div className="flex text-yellow-400 mt-4">
                  ★★★★★
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
