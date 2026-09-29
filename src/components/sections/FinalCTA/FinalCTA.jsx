import React from 'react';
import Button from '../../common/Button/Button';
import { ScrollReveal } from '../../common/Motion/ScrollReveal';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="section final-cta-section theme-dark" aria-labelledby="cta-heading">
      {/* Background Architectural Grid Lines */}
      <div className="cta-tech-grid-bg" aria-hidden="true">
        <div className="tech-grid-line line-h-1"></div>
        <div className="tech-grid-line line-h-2"></div>
        <div className="tech-grid-line line-v-1"></div>
        <div className="tech-grid-line line-v-2"></div>
      </div>

      <div className="cta-ambient-glow" aria-hidden="true"></div>

      <div className="container final-cta-container">
        <ScrollReveal yOffset={30}>
          <div className="mono-label cta-pre-label">
            <span className="cta-status-dot"></span>
            ENGAGE WITH ASTRION ARCHITECTS
          </div>

          <h2 id="cta-heading" className="cta-headline">
            What could your enterprise become next?
          </h2>

          <p className="cta-subheading">
            Let’s build it together.
          </p>

          <p className="cta-desc">
            Connect directly with enterprise technology architects to explore modernizing
            your core operations, deploying intelligent automation, or evaluating XENedion ERP.
          </p>

          <div className="cta-action-wrap">
            <Button
              to="/contact"
              variant="dark-primary"
              size="lg"
              icon="arrow"
            >
              Start a Conversation
            </Button>
          </div>

          {/* Technical Footer Bar */}
          <div className="cta-meta-bar">
            <span className="mono-tag">CONFIDENTIAL ENTERPRISE ENGAGEMENTS</span>
            <span className="mono-tag">//</span>
            <span className="mono-tag">NDAS &amp; TAILORED ARCHITECTURAL SESSIONS</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
