import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Lock } from 'lucide-react';
import Button from '../../common/Button/Button';
import { ScrollReveal } from '../../common/Motion/ScrollReveal';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="section final-cta-section" aria-labelledby="cta-heading">
      <div className="cta-ambient-glow" aria-hidden="true"></div>
      <div className="cta-ambient-mesh" aria-hidden="true"></div>

      <div className="container final-cta-container">
        <ScrollReveal yOffset={24}>
          <div className="cta-status-pill">
            <span className="cta-status-indicator"></span>
            <span className="mono-tag cta-status-text">
              DISCOVER XENEDION ERP // LIVE DEMOS AVAILABLE
            </span>
          </div>

          <h2 id="cta-heading" className="cta-headline">
            Ready to Simplify{' '}
            <span className="cta-gradient-word">How Your Business Operates?</span>
          </h2>

          <p className="cta-subheading-lead">
            See how XENedion can save your team hours every week and give you total clarity over your business.
          </p>

          <div className="cta-action-wrap">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon="arrow"
              className="cta-primary-btn"
            >
              Book Your Live Demo
            </Button>
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              icon="arrow"
            >
              Talk to Our Product Team
            </Button>
          </div>

          {/* Friendly Trust & Demo Guarantees */}
          <div className="cta-governance-strip">
            <div className="gov-item">
              <span style={{ fontSize: '14px', lineHeight: 1 }}>🔒</span>
              <span className="mono-tag">No Commitments Required</span>
            </div>
            <div className="gov-divider mono-tag" style={{ color: 'rgba(15, 23, 42, 0.3)' }}>•</div>
            <div className="gov-item">
              <span style={{ fontSize: '14px', lineHeight: 1 }}>⚡</span>
              <span className="mono-tag">Tailored Product Demo</span>
            </div>
            <div className="gov-divider mono-tag" style={{ color: 'rgba(15, 23, 42, 0.3)' }}>•</div>
            <div className="gov-item">
              <span style={{ fontSize: '14px', lineHeight: 1 }}>💬</span>
              <span className="mono-tag">Direct Access to Product Specialists</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
