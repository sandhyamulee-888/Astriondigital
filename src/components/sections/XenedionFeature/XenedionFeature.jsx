import React from 'react';
import { XENEDION_DATA } from '../../../data/xenedion';
import Button from '../../common/Button/Button';
import XenedionVisual from '../XenedionVisual/XenedionVisual';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../common/Motion/ScrollReveal';
import './XenedionFeature.css';

export default function XenedionFeature() {
  return (
    <section className="section xenedion-section" id="xenedion" aria-labelledby="xenedion-heading">
      <div className="xenedion-ambient-glow" aria-hidden="true" />

      <div className="container">
        {/* Editorial Section Header */}
        <ScrollReveal yOffset={24}>
          <div className="xenedion-header-row">
            <div className="xenedion-titles">
              <div className="mono-label xenedion-tag">{XENEDION_DATA.tag}</div>
              <div className="product-title-group">
                <span className="product-brand-wordmark">{XENEDION_DATA.productName} &bull; {XENEDION_DATA.role}</span>
                <h2 id="xenedion-heading" className="product-subheading">
                  &ldquo;{XENEDION_DATA.tagline}&rdquo;
                </h2>
                <div className="product-category-sub mono-tag">{XENEDION_DATA.categoryHeadline}</div>
              </div>
              <p className="product-copy">{XENEDION_DATA.copy}</p>
              <div className="xenedion-foundation-note mono-tag">
                {XENEDION_DATA.corporateFoundation}
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

        {/* Product Visual Architecture */}
        <ScrollReveal yOffset={30} delay={0.08}>
          <div className="xenedion-visual-block">
            <XenedionVisual />
          </div>
        </ScrollReveal>

        {/* 3 Architecture Value Highlights */}
        <StaggerContainer staggerDelay={0.08} className="xenedion-highlights-grid">
          {XENEDION_DATA.capabilitiesHighlight.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="highlight-col">
                <div className="highlight-num mono-tag">ARCHITECTURE PILLAR</div>
                <h4 className="highlight-title">{item.title}</h4>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
