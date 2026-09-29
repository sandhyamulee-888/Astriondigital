import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { INDUSTRIES } from '../../../data/industries';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Button from '../../common/Button/Button';
import { ScrollReveal } from '../../common/Motion/ScrollReveal';
import './IndustriesSection.css';

export default function IndustriesSection() {
  const [activeIndustryId, setActiveIndustryId] = useState(INDUSTRIES[0].id);
  const [mobileExpandedId, setMobileExpandedId] = useState(INDUSTRIES[0].id);

  const selectedIndustry = INDUSTRIES.find((i) => i.id === activeIndustryId) || INDUSTRIES[0];

  const toggleMobileAccordion = (id) => {
    setMobileExpandedId(mobileExpandedId === id ? null : id);
  };

  return (
    <section className="section industries-section" id="industries" aria-labelledby="industries-heading">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            label="03 / INDUSTRIES"
            title="Built around how industries actually operate."
            description="Astrion engineers sector-specific technology architectures tailored to complex operating workflows, supply networks, and strict compliance regimes."
          />
        </ScrollReveal>

        {/* Desktop Split Interaction */}
        <ScrollReveal delay={0.1}>
          <div className="industries-desktop-layout">
          {/* Left Vertical Numbered Navigation */}
          <div className="industries-vertical-nav" role="tablist" aria-label="Industries list">
            {INDUSTRIES.map((ind) => {
              const isActive = ind.id === activeIndustryId;
              return (
                <button
                  key={ind.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`industry-nav-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveIndustryId(ind.id)}
                >
                  <span className="ind-nav-num mono-tag">{ind.num}</span>
                  <span className="ind-nav-name">{ind.name}</span>
                  <ArrowRight size={16} className="ind-nav-arrow" />
                </button>
              );
            })}
          </div>

          {/* Right Dynamic Content Panel */}
          <div className="industry-content-display">
            <div className="industry-display-inner" key={selectedIndustry.id}>
              <div className="ind-display-top">
                <span className="mono-label ind-display-num">
                  {selectedIndustry.num} / SECTOR BLUEPRINT
                </span>
                <h3 className="ind-display-name">{selectedIndustry.name}</h3>
                <h4 className="ind-display-headline">{selectedIndustry.headline}</h4>
                <p className="ind-display-desc">{selectedIndustry.description}</p>
              </div>

              {/* Relevant Capabilities Pills */}
              <div className="ind-capabilities-block">
                <span className="mono-tag ind-block-label">RELEVANT CAPABILITIES</span>
                <div className="ind-chips-row">
                  {selectedIndustry.capabilities.map((cap, idx) => (
                    <span key={idx} className="ind-cap-chip">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Deliverables / Outcomes */}
              <div className="ind-outcomes-block">
                <span className="mono-tag ind-block-label">OPERATIONAL CAPABILITIES</span>
                <ul className="ind-outcomes-list">
                  {selectedIndustry.outcomes.map((outcome, idx) => (
                    <li key={idx} className="ind-outcome-item">
                      <CheckCircle2 size={16} className="ind-check-icon" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="ind-display-cta">
                <Button
                  to={`/industries/${selectedIndustry.id}`}
                  variant="primary"
                  size="md"
                  icon="arrow"
                >
                  Explore {selectedIndustry.name}
                </Button>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Mobile Accordion View */}
        <ScrollReveal delay={0.1}>
          <div className="industries-mobile-accordion">
            {INDUSTRIES.map((ind) => {
              const isExpanded = mobileExpandedId === ind.id;
              return (
                <div key={ind.id} className="ind-accordion-item">
                  <button
                    className={`ind-accordion-trigger ${isExpanded ? 'active' : ''}`}
                    onClick={() => toggleMobileAccordion(ind.id)}
                    aria-expanded={isExpanded}
                  >
                    <span className="ind-accordion-title-wrap">
                      <span className="mono-tag ind-accordion-num">{ind.num}</span>
                      <span className="ind-accordion-name">{ind.name}</span>
                    </span>
                    <ChevronDown
                      size={18}
                      className={`ind-accordion-chevron ${isExpanded ? 'rotated' : ''}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="ind-accordion-panel">
                      <h4 className="ind-mobile-headline">{ind.headline}</h4>
                      <p className="ind-mobile-desc">{ind.description}</p>

                      <div className="ind-mobile-chips">
                        <span className="mono-tag ind-block-label">CAPABILITIES</span>
                        <div className="ind-chips-row">
                          {ind.capabilities.map((cap, idx) => (
                            <span key={idx} className="ind-cap-chip">{cap}</span>
                          ))}
                        </div>
                      </div>

                      <div className="ind-mobile-cta">
                        <Button
                          to={`/industries/${ind.id}`}
                          variant="primary"
                          size="sm"
                          icon="arrow"
                        >
                          Explore {ind.name}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
