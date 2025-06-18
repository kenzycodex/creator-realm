import React, { useState, useEffect, useRef } from 'react';

const ExperienceSection = () => {
  const [counters, setCounters] = useState({ first: 0, second: 0, third: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { first: 92, second: 90, third: 88 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);

      setCounters({
        first: Math.floor(targets.first * easeOutProgress),
        second: Math.floor(targets.second * easeOutProgress),
        third: Math.floor(targets.third * easeOutProgress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepTime);
  };

  return (
    <section ref={sectionRef} className="bg-blue-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
            <p className="text-xs sm:text-sm text-[#2a2a5a] font-medium">Join Creator Realm Today</p>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#2a2a5a] leading-tight">
              Experience
              <br />
              With Number
            </h2>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
            {/* First Stat */}
            <div className="flex flex-col items-center space-y-3">
              <div className="text-4xl sm:text-5xl lg:text-4xl font-bold text-blue-500">
                {counters.first}%
              </div>
              <p className="text-sm sm:text-base lg:text-sm text-gray-700 leading-tight max-w-[200px] text-center">
                Users find relevant jobs according to skills
              </p>
            </div>

            {/* Second Stat with Red Divider */}
            <div className="flex flex-col items-center lg:border-l-2 lg:border-red-500 lg:pl-8 space-y-3">
              <div className="text-4xl sm:text-5xl lg:text-4xl font-bold text-blue-500">
                {counters.second}%
              </div>
              <p className="text-sm sm:text-base lg:text-sm text-gray-700 leading-tight max-w-[200px] text-center">
                Quick data filtering from companies
              </p>
            </div>

            {/* Third Stat with Red Divider */}
            <div className="flex flex-col items-center lg:border-l-2 lg:border-red-500 lg:pl-8 space-y-3 sm:col-span-2 lg:col-span-1 sm:justify-self-center lg:justify-self-start">
              <div className="text-4xl sm:text-5xl lg:text-4xl font-bold text-blue-500">
                {counters.third}%
              </div>
              <p className="text-sm sm:text-base lg:text-sm text-gray-700 leading-tight max-w-[200px] text-center">
                Top employers connect with users
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
