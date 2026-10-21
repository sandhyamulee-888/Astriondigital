import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Database, Sparkles, Activity } from 'lucide-react';
import Button from '../../common/Button/Button';
import HeroVisual from '../HeroVisual/HeroVisual';
import { HERO_CONTENT } from '../../../data/about';
import './Hero.css';

export default function Hero() {
  const kpis = [
    { value: '99.99%', label: 'Platform Availability SLA', icon: <Activity size={14} /> },
    { value: '< 12ms', label: 'Deterministic Consensus', icon: <Cpu size={14} /> },
    { value: '11+', label: 'Integrated ERP Subsystems', icon: <Database size={14} /> },
    { value: 'SOC-2', label: 'Enterprise Security Architecture', icon: <ShieldCheck size={14} /> }
  ];

  return (
    <section className="hero-section" aria-label="Astrion Digital Enterprise Overview">
      {/* Dynamic Ambient Background Glows */}
      <div className="hero-ambient-glow-left" aria-hidden="true" />
      <div className="hero-ambient-glow-right" aria-hidden="true" />
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="container hero-container">
        {/* Left Column: Modern Enterprise SaaS Presentation */}
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
              ENTERPRISE PLATFORM ARCHITECTURE // v4.2 LIVE
            </span>
          </div>

          <h1 className="hero-headline">
            Engineering Intelligence into{' '}
            <span className="hero-gradient-text">Every Enterprise</span>
          </h1>

          <div className="hero-subhead-pill mono-tag">
            <Sparkles size={13} className="pill-sparkle" />
            <span>{HERO_CONTENT.subhead}</span>
          </div>

          <p className="hero-lead">
            {HERO_CONTENT.lead}
          </p>

          <div className="hero-cta-group">
            <Button
              to="/xenedion"
              variant="primary"
              size="lg"
              icon="arrow"
            >
              Discover XENedion ERP
            </Button>
            <Button
              to="/about"
              variant="secondary"
              size="lg"
              icon="external"
            >
              Brand Architecture &amp; Overview
            </Button>
          </div>

          {/* Interactive Enterprise Metric / KPI Strip */}
          <div className="hero-kpi-bar">
            {kpis.map((kpi, idx) => (
              <div key={idx} className="kpi-item">
                <div className="kpi-top">
                  <span className="kpi-icon">{kpi.icon}</span>
                  <span className="kpi-val">{kpi.value}</span>
                </div>
                <span className="kpi-label mono-tag">{kpi.label}</span>
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
