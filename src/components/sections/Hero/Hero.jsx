import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Layers } from 'lucide-react';
import Button from '../../common/Button/Button';
import './Hero.css';

const HERO_BENEFITS = [
  {
    title: 'Connected Operations:',
    description: 'Integrate business functions into one unified platform.',
  },
  {
    title: 'Operational Efficiency:',
    description: 'Simplify workflows, reduce manual processes and improve productivity.',
  },
  {
    title: 'Business Visibility:',
    description: 'Access meaningful information and insights across your organisation.',
  },
  {
    title: 'Scalable Technology:',
    description: 'Build an operational foundation that grows with your business.',
  },
];

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

          {/* Main Heading (Kept unchanged) */}
          <h1 className="hero-headline">
            Technology That Moves{' '}
            <span className="hero-gradient-text">Business Forward</span>
          </h1>

          {/* Tagline directly below main heading */}
          <p className="hero-tagline">
            Run Smarter. Grow Faster. Stay Ahead.
          </p>

          {/* Description below tagline */}
          <p className="hero-description">
            Bring your business operations together with intelligent enterprise technology. Astrion Digital helps businesses simplify complexity, connect processes and gain the visibility they need to make better decisions and achieve sustainable growth.
          </p>

          {/* Four Business Benefits - Clean Bullet List without Boxes or Icons */}
          <ul className="hero-benefits-list" aria-label="Key business benefits">
            {HERO_BENEFITS.map((benefit, idx) => (
              <li key={idx} className="hero-benefit-item">
                <span className="hero-benefit-bullet" aria-hidden="true">•</span>
                <p className="hero-benefit-text">
                  <strong className="hero-benefit-title">{benefit.title}</strong>{' '}
                  <span className="hero-benefit-desc">{benefit.description}</span>
                </p>
              </li>
            ))}
          </ul>

          {/* Company Positioning Statement AFTER the four benefits */}
          <div className="hero-positioning-statement">
            <p className="positioning-statement-text">
              <span className="positioning-brand">Astrion Digital</span> as an enterprise technology and business transformation company, with <span className="positioning-platform">XENedion</span> as its flagship ERP platform.
            </p>
          </div>

          {/* CTA Buttons */}
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
