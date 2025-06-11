
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ExperienceSection from '../components/ExperienceSection';
import OpportunitiesSection from '../components/OpportunitiesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import NetworkSection from '../components/NetworkSection';
import WhySection from '../components/WhySection';
import UserTestimonials from '../components/UserTestimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ExperienceSection />
      <OpportunitiesSection />
      <TestimonialsSection />
      <NetworkSection />
      <WhySection />
      <UserTestimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
