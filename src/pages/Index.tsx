// src/pages/Index.tsx
import React from 'react';
import Header from '../components/home/Header';
import HeroSection from '../components/home/HeroSection';
import ExperienceSection from '../components/home/ExperienceSection';
import OpportunitiesSection from '../components/home/OpportunitiesSection';
import BestCreatorsSection from '../components/home/BestCreatorsSection';
import CTASection from '../components/home/CTASection';
import Footer from '../components/home/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <OpportunitiesSection />
      <BestCreatorsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
