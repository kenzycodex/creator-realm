// src/pages/Index.tsx
import React from 'react';
import Header from '../components/home/Header';
import HeroSection from '../components/home/HeroSection';
import ExperienceSection from '../components/home/ExperienceSection';
import OpportunitiesSection from '../components/home/OpportunitiesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NetworkSection from '../components/home/NetworkSection';
import WhySection from '../components/home/WhySection';
import UserTestimonials from '../components/home/UserTestimonials';
import CTASection from '../components/home/CTASection';
import Footer from '../components/home/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <OpportunitiesSection />
      {/* <TestimonialsSection / */}
      {/* <NetworkSection /> */}
      {/* <WhySection /> */}
      {/* <UserTestimonials /> */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
