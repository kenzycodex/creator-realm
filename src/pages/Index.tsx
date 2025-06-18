// src/pages/Index.tsx
import React from 'react';
import Header from '../components/home/Header';
import HeroSection from '../components/home/HeroSection';
import ExperienceSection from '../components/home/ExperienceSection';
import OpportunitiesSection from '../components/home/OpportunitiesSection';
import BestCreatorsSection from '../components/home/BestCreatorsSection';
import CommunityNetworkSection from '../components/home/CommunityNetworkSection';
import WhyCreatorRealmSection from '../components/home/WhyCreatorRealmSection';
import TestimonialSection from '../components/home/TestimonialSection'
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
      <CommunityNetworkSection />
      <WhyCreatorRealmSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
