import React from 'react';
import Hero from '../../components/sections/Hero/Hero';
import AboutSection from '../../components/sections/AboutSection/AboutSection';
import SolutionsIntro from '../../components/sections/SolutionsIntro/SolutionsIntro';
import XenedionFeature from '../../components/sections/XenedionFeature/XenedionFeature';
import IndustriesSection from '../../components/sections/IndustriesSection/IndustriesSection';
import CaseStudiesSection from '../../components/sections/CaseStudiesSection/CaseStudiesSection';
import FinalCTA from '../../components/sections/FinalCTA/FinalCTA';

export default function HomePage() {
  return (
    <main id="main-content" className="homepage-content">
      {/* Hero: Strategic Value Proposition & Connected Architecture Visual */}
      <Hero />

      {/* About: Executive Foundation, Pedigree & Key Enterprise Metrics */}
      <AboutSection />

      {/* Solutions: Concise 1-2 Line Intro + Explore Solutions CTA */}
      <SolutionsIntro />

      {/* XENedion ERP: Flagship Connected Operational Platform */}
      <XenedionFeature />

      {/* Industries: Operational Sector Blueprints */}
      <IndustriesSection />

      {/* Case Studies: Real-World Transformation Proof Points */}
      <CaseStudiesSection />

      {/* Final Strategic Conversion CTA */}
      <FinalCTA />
    </main>
  );
}
