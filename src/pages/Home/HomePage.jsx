import React from 'react';
import Hero from '../../components/sections/Hero/Hero';
import ProblemSection from '../../components/sections/ProblemSection/ProblemSection';
import AboutSection from '../../components/sections/AboutSection/AboutSection';
import XenedionFeature from '../../components/sections/XenedionFeature/XenedionFeature';
import IndustriesSection from '../../components/sections/IndustriesSection/IndustriesSection';
import FinalCTA from '../../components/sections/FinalCTA/FinalCTA';

export default function HomePage() {
  return (
    <main id="main-content" className="homepage-content">
      {/* Section 1: Hero (The All-in-One Software to Run Your Entire Business) */}
      <Hero />

      {/* Section 2: The Operational Problem You Solve */}
      <ProblemSection />

      {/* Section 3: Why Astrion Digital (Built for Speed. Designed for Total Clarity) */}
      <AboutSection />

      {/* Section 4: Product Showcase (XENedion ERP) */}
      <XenedionFeature />

      {/* Section 5: Industry Blueprints */}
      <IndustriesSection />

      {/* Section 6: Bottom Call to Action (Closing) */}
      <FinalCTA />
    </main>
  );
}
