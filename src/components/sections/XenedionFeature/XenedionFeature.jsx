import React from 'react';
import { DollarSign, Layers, Users, UserCheck } from 'lucide-react';
import { XENEDION_DATA } from '../../../data/xenedion';
import Button from '../../common/Button/Button';
import XenedionVisual from '../XenedionVisual/XenedionVisual';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../common/Motion/ScrollReveal';
import './XenedionFeature.css';

const PILLAR_ICONS = {
  DollarSign: <DollarSign size={20} />,
  Layers: <Layers size={20} />,
  Users: <Users size={20} />,
  UserCheck: <UserCheck size={20} />
};

export default function XenedionFeature() {
  return (
    <section className="section xenedion-section" id="xenedion" aria-labelledby="xenedion-heading">
      <div className="xenedion-ambient-glow" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <ScrollReveal yOffset={24}>
          <div className="xenedion-header-row">
            <div className="xenedion-titles">
              <div className="mono-label xenedion-tag">{XENEDION_DATA.tag}</div>
              <h2 id="xenedion-heading" className="product-showcase-title">
                {XENEDION_DATA.headline}
              </h2>
              <p className="product-copy">{XENEDION_DATA.copy}</p>
              <div className="mono-tag" style={{ color: 'var(--brand-blue, #00d2ff)', marginTop: '10px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#00d2ff' }}></span>
                <span>Corporate Foundation &bull; Long-Term Vision &bull; Backed by Astrion Digital</span>
              </div>
            </div>

            <div className="xenedion-header-cta">
              <Button
                to={XENEDION_DATA.ctaHref}
                variant="primary"
                size="lg"
                icon="arrow"
              >
                {XENEDION_DATA.ctaText}
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Grid (4 Core Pillars) */}
        <StaggerContainer staggerDelay={0.08} className="xenedion-pillars-grid">
          {(XENEDION_DATA.showcasePillars || []).map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="xenedion-pillar-card">
                <div className="pillar-card-top">
                  <div className="pillar-icon-box">
                    {PILLAR_ICONS[item.icon] || <Layers size={20} />}
                  </div>
                  <h3 className="pillar-title">{item.title}</h3>
                </div>
                <p className="pillar-desc">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Product Visual Architecture */}
        <ScrollReveal yOffset={30} delay={0.08}>
          <div className="xenedion-visual-block">
            <XenedionVisual />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
