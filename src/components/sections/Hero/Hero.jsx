import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Layers } from 'lucide-react';
import Button from '../../common/Button/Button';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Astrion Digital Enterprise Overview">
      {/* Background Media with Pure White Seamless Left Transition */}
      <div className="hero-bg-media" aria-hidden="true">
        <img 
          src="/images/astrion-home-hero-bg.jpg" 
          alt="Astrion Digital Enterprise Software and XENedion ERP Platform" 
          className="hero-bg-media-img" 
        />
        <div className="hero-bg-fade-mask"></div>
      </div>

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
            Astrion Digital Private Limited is an enterprise software company focused on developing technology products that help businesses operate more efficiently, intelligently, and effectively — powered by our flagship platform, XENedion.
          </p>

          <div className="hero-cta-group">
            <Button
              to="/solutions/erp"
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
              { label: 'Innovation & Business Technology', icon: <ShieldCheck size={16} /> }
            ].map((item, idx) => (
              <div key={idx} className="proof-bar-item">
                <span className="proof-bar-icon">{item.icon}</span>
                <span className="proof-bar-text">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Clean open spacer to showcase the team and ERP dashboard */}
        <div className="hero-visual-col" aria-hidden="true" />
      </div>
    </section>
  );
}
