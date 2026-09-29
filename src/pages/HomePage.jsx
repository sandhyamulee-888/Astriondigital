import React from 'react';
import Hero from '../components/sections/Hero/Hero';
import SolutionsGrid from '../components/sections/SolutionsGrid/SolutionsGrid';
import TransformationStatement from '../components/sections/TransformationStatement/TransformationStatement';
import XenedionFeature from '../components/sections/XenedionFeature/XenedionFeature';
import IndustriesSection from '../components/sections/IndustriesSection/IndustriesSection';
import ApproachSection from '../components/sections/ApproachSection/ApproachSection';
import AIFeature from '../components/sections/AIFeature/AIFeature';
import CaseStudiesSection from '../components/sections/CaseStudiesSection/CaseStudiesSection';
import InsightsSection from '../components/sections/InsightsSection/InsightsSection';
import FinalCTA from '../components/sections/FinalCTA/FinalCTA';

export default function HomePage() {
  return (
    <main id="main-content" className="homepage-content">
      {/* 1. Hero with Connected Ecosystem SVG */}
      <Hero />

      {/* 2. 01 / Capabilities Editorial Grid */}
      <SolutionsGrid />

      {/* 3. Transformation Principle Statement with Animated Line */}
      <TransformationStatement />

      {/* 4. 02 / XENedion ERP Platform & Architecture Mesh (#0A0B0D) */}
      <XenedionFeature />

      {/* 5. 03 / Industries Vertical Selector & Accordion */}
      <IndustriesSection />

      {/* 6. 04 / How We Work 4-Phase Connected Timeline */}
      <ApproachSection />

      {/* 7. 05 / Artificial Intelligence Tiered Architecture */}
      <AIFeature />

      {/* 8. 06 / Customer Impact Case Studies */}
      <CaseStudiesSection />

      {/* 9. 07 / Editorial Insights */}
      <InsightsSection />

      {/* 10. Final High-Impact Conversion CTA */}
      <FinalCTA />
    </main>
  );
}
