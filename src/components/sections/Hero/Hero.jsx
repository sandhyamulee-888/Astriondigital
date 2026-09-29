import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../common/Button/Button';
import HeroVisual from '../HeroVisual/HeroVisual';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Astrion Digital Enterprise Overview">
      <div className="container hero-container">
        {/* Left Column: Typography Dominance with Palantir Entrance */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-label mono-label">
            <span className="hero-label-indicator"></span>
            ASTRION DIGITAL / ENTERPRISE TECHNOLOGY
          </div>

          <h1 className="hero-headline">
            Engineering intelligence into every enterprise.
          </h1>

          <p className="hero-lead">
            Astrion Digital brings together transformation, AI, enterprise software,
            cloud, cybersecurity, data and connected platforms to help organisations
            build what comes next.
          </p>

          <div className="hero-cta-group">
            <Button
              to="/solutions"
              variant="primary"
              size="lg"
              icon="arrow"
            >
              Explore Our Solutions
            </Button>
            <Button
              to="/xenedion"
              variant="secondary"
              size="lg"
              icon="external"
            >
              Discover XENedion ERP
            </Button>
          </div>

          {/* Enterprise Metrics Bar / Architecture Pillars */}
          <div className="hero-pillars">
            <div className="pillar-item">
              <span className="pillar-num mono-tag">01</span>
              <span className="pillar-text">Autonomous AI Workflows</span>
            </div>
            <div className="pillar-divider">/</div>
            <div className="pillar-item">
              <span className="pillar-num mono-tag">02</span>
              <span className="pillar-text">Connected ERP Core</span>
            </div>
            <div className="pillar-divider">/</div>
            <div className="pillar-item">
              <span className="pillar-num mono-tag">03</span>
              <span className="pillar-text">Zero-Trust Cloud Mesh</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Ecosystem Visual */}
        <motion.div 
          className="hero-visual-col"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
