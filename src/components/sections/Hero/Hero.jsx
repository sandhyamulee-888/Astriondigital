import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cloud, Activity, Layers } from 'lucide-react';
import Button from '../../common/Button/Button';
import HeroVisual from '../HeroVisual/HeroVisual';
import './Hero.css';

export default function Hero() {
  const proofBarItems = [
    { label: '100% Real-Time Data Sync', icon: <Activity size={16} /> },
    { label: 'Simple, Scalable Cloud Setup', icon: <Cloud size={16} /> },
    { label: 'Enterprise-Grade Data Security', icon: <ShieldCheck size={16} /> }
  ];

  return (
    <section className="hero-section" aria-label="Astrion Digital Enterprise Overview">
      {/* Dynamic Ambient Background Glows */}
      <div className="hero-ambient-glow-left" aria-hidden="true" />
      <div className="hero-ambient-glow-right" aria-hidden="true" />
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="container hero-container">
        {/* Left Column: Modern Enterprise Presentation */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top Live Beacon Badge */}
          <div className="hero-status-pill">
            <span className="hero-status-indicator"></span>
            <span className="mono-tag status-text">
              ENTERPRISE SOFTWARE PRODUCTS
            </span>
          </div>

          <h1 className="hero-headline">
            The Company Behind{' '}
            <span className="hero-gradient-text">Intelligent Enterprise Software.</span>
          </h1>

          <p className="hero-subheadline-lead">
            Astrion Digital develops purposeful technology products that help businesses operate more efficiently, intelligently, and effectively — powered by our flagship platform, XENedion ERP.
          </p>

          <div className="hero-cta-group">
            <Button
              to="/xenedion"
              variant="primary"
              size="lg"
              icon="arrow"
            >
              Explore XENedion ERP
            </Button>
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
            >
              Book a Live Demo
            </Button>
          </div>

          {/* Proof Bar (Below Buttons) */}
          <div className="hero-proof-bar">
            {[
              { label: 'Enterprise Software Products', icon: <Layers size={16} /> },
              { label: 'XENedion Flagship ERP', icon: <Activity size={16} /> },
              { label: 'Innovation & Business Tech', icon: <ShieldCheck size={16} /> }
            ].map((item, idx) => (
              <div key={idx} className="proof-bar-item">
                <span className="proof-bar-icon">{item.icon}</span>
                <span className="proof-bar-text">{item.label}</span>
              </div>
            ))}
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
