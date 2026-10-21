import React from 'react';
import { ShieldCheck, Sparkles, Lock } from 'lucide-react';
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
              ARCHITECT SESSIONS ACTIVE // ENTERPRISE ROADMAP CONSULTATIONS
            </span>
          </div>

          <h2 id="cta-heading" className="cta-headline">
            What could your enterprise{' '}
            <span className="cta-gradient-word">become next?</span>
          </h2>

          <p className="cta-subheading">
            Let’s engineer it together.
          </p>

          <p className="cta-desc">
            Connect directly with Astrion enterprise technology architects to explore modernizing
            your core operations, deploying intelligent automation, or evaluating flagship ERP platform XENedion.
          </p>

          <div className="cta-action-wrap">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon="arrow"
              className="cta-primary-btn"
            >
              Schedule Strategic Briefing
            </Button>
            <Button
              to="/solutions"
              variant="secondary"
              size="lg"
              icon="external"
            >
              Explore Solutions Portfolio
            </Button>
          </div>

          {/* Enterprise Governance Trust Badges */}
          <div className="cta-governance-strip">
            <div className="gov-item">
              <Lock size={14} className="gov-icon" />
              <span className="mono-tag">CONFIDENTIAL ENTERPRISE ENGAGEMENTS</span>
            </div>
            <div className="gov-divider mono-tag">//</div>
            <div className="gov-item">
              <ShieldCheck size={14} className="gov-icon" />
              <span className="mono-tag">NDAS &amp; TAILORED ARCHITECTURAL SESSIONS</span>
            </div>
            <div className="gov-divider mono-tag">//</div>
            <div className="gov-item">
              <Sparkles size={14} className="gov-icon" />
              <span className="mono-tag">DIRECT ACCESS TO PRINCIPAL ARCHITECTS</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
