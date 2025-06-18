import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Afanda Abdullahi',
      role: 'UI/UX Designer',
      quote:
        'I was using several job boards and getting overwhelmed, at Creator Realm, it saved me tons of time and I landed my dream job at a great company.',
      image: '/api/placeholder/300/300',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      quote:
        "Creator Realm transformed my freelance career. The platform's matching system helped me find high-quality clients that value my work.",
      image: '/api/placeholder/300/300',
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Content Writer',
      quote:
        'The community support and global reach of Creator Realm opened doors I never thought possible. Best decision for my career.',
      image: '/api/placeholder/300/300',
    },
    {
      id: 4,
      name: 'Amara Okafor',
      role: 'Graphic Designer',
      quote:
        'Finding international clients became so much easier. The payment system is seamless and the community is incredibly supportive.',
      image: '/api/placeholder/300/300',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left Section - Image Stack */}
          <div className="lg:col-span-2 relative flex justify-start lg:pl-8">
            <div className="relative w-96 h-96">
              {/* Background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-purple-100 to-white rounded-full opacity-60"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-purple-300 via-purple-200 to-purple-100 rounded-full opacity-70"></div>

              {/* Stacked Images */}
              <div className="absolute inset-8">
                {testimonials.map((testimonial, index) => {
                  const isActive = index === currentIndex;
                  const offset = index - currentIndex;

                  return (
                    <div
                      key={testimonial.id}
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                        isActive
                          ? 'z-30 scale-100 opacity-100 translate-x-0 translate-y-0'
                          : index < currentIndex
                          ? 'z-10 scale-90 opacity-40 -translate-x-4 -translate-y-2'
                          : 'z-20 scale-95 opacity-60 translate-x-2 translate-y-1'
                      }`}
                      style={{
                        transform: `
                          scale(${isActive ? 1 : 0.9 - Math.abs(offset) * 0.05}) 
                          translateX(${offset * 8}px) 
                          translateY(${offset * 4}px)
                        `,
                        zIndex: isActive ? 30 : 20 - Math.abs(offset),
                      }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-2">Creator Realm Users</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1c1454] leading-tight">
                What Our users Say
              </h2>
            </div>

            {/* Testimonial Content */}
            <div className="rounded-2xl p-4 shadow-sm min-h-[280px] flex flex-col justify-between">
              <div className="bg-[#e4e9ff] p-3 border border-gray-100 rounded-xl space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1c1454] mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-[#6366f1] text-sm font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>

                <blockquote className="text-gray-700 text-base leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-[#f59e0b] scale-110'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex space-x-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:border-gray-400 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:border-gray-400 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
