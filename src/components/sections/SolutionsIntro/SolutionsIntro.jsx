import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Layers, 
  Sparkles, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Cloud, 
  Database, 
  Network 
} from 'lucide-react';
import { SOLUTIONS } from '../../../data/solutions';
import Button from '../../common/Button/Button';
import ScrollReveal from '../../common/Motion/ScrollReveal';
import './SolutionsIntro.css';

const DOMAIN_ICONS = {
  'digital-transformation': <Layers size={14} />,
  'ai-intelligent-automation': <Sparkles size={14} />,
  'software-development': <Code2 size={14} />,
  'erp': <Cpu size={14} />,
  'cybersecurity': <ShieldCheck size={14} />,
  'cloud-infrastructure': <Cloud size={14} />,
  'data-business-intelligence': <Database size={14} />,
  'integration-api': <Network size={14} />
};

export default function SolutionsIntro() {
  return (
    <section className="section solutions-intro-section" id="solutions" aria-labelledby="solutions-heading">
      {/* Background Technology Image Layer */}
      <div className="solutions-intro-bg" aria-hidden="true">
        <img 
          src="/solutions-bg.jpg" 
          alt="" 
          className="solutions-intro-bg-img" 
        />
        <div className="solutions-intro-overlay"></div>
        <div className="solutions-intro-glow"></div>
      </div>

      <div className="container solutions-intro-container">
        <ScrollReveal yOffset={24}>
          <div className="solutions-intro-card">
            <div className="solutions-intro-header">
              <div className="mono-label intro-badge">
                <Layers size={14} />
                <span>SOLUTIONS &amp; CAPABILITIES</span>
              </div>

              <h2 id="solutions-heading" className="solutions-intro-title">
                Technology engineered to connect and scale the entire enterprise
              </h2>

              <p className="solutions-intro-lead">
                Astrion delivers cohesive multi-disciplinary capabilities designed to modernize core operating infrastructure, automate mission-critical workflows, enforce zero-trust resilience, and unlock sustained enterprise scale.
              </p>

              <div className="solutions-intro-actions">
                <Button to="/solutions" variant="primary" size="lg" icon="arrow">
                  Explore Solutions
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Request Solution Briefing
                </Button>
              </div>
            </div>

            {/* Quick 8-Pillar Capability Matrix Preview */}
            <div className="solutions-pillars-preview">
              <div className="preview-bar-title mono-tag">
                <span>ENTERPRISE CAPABILITY DOMAINS</span>
                <span className="mono-tag preview-note">EXPLORE DEDICATED BLUEPRINTS</span>
              </div>

              <div className="pillars-chips-grid">
                {SOLUTIONS.map((item) => (
                  <Link 
                    key={item.id} 
                    to={`/solutions/${item.id}`} 
                    className="pillar-chip-link"
                  >
                    <span className="chip-icon">{DOMAIN_ICONS[item.id] || <Layers size={14} />}</span>
                    <span className="chip-label">{item.title}</span>
                    <ArrowUpRight size={14} className="chip-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
