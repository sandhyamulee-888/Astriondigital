import React from 'react';
import { XENEDION_DATA } from '../../../data/xenedion';
import Button from '../../common/Button/Button';
import XenedionVisual from '../XenedionVisual/XenedionVisual';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../common/Motion/ScrollReveal';
import './XenedionFeature.css';

export default function XenedionFeature() {
  return (
    <section className="section xenedion-section theme-dark" id="xenedion" aria-labelledby="xenedion-heading">
      <div className="container">
        {/* Editorial Section Header on Dark */}
        <ScrollReveal yOffset={30}>
          <div className="xenedion-header-row">
            <div className="xenedion-titles">
              <div className="mono-label xenedion-tag">{XENEDION_DATA.tag}</div>
              <div className="product-title-group">
                <span className="product-brand-wordmark">{XENEDION_DATA.productName}</span>
                <h2 id="xenedion-heading" className="product-subheading">
                  {XENEDION_DATA.subheading}
                </h2>
              </div>
              <p className="product-copy">{XENEDION_DATA.copy}</p>
            </div>

            <div className="xenedion-header-cta">
              <Button
                to={XENEDION_DATA.ctaHref}
                variant="dark-primary"
                size="lg"
                icon="arrow"
              >
                {XENEDION_DATA.ctaText}
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Product Visual Architecture */}
        <ScrollReveal yOffset={36} delay={0.1}>
          <div className="xenedion-visual-block">
            <XenedionVisual />
          </div>
        </ScrollReveal>

        {/* 3 Architecture Value Highlights with Stagger and Hover */}
        <StaggerContainer staggerDelay={0.1} className="xenedion-highlights-grid">
          {XENEDION_DATA.capabilitiesHighlight.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="highlight-col">
                <div className="highlight-num mono-tag">0{idx + 1} // ARCHITECTURE</div>
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
