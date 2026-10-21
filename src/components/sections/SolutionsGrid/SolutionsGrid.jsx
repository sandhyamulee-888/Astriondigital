import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Shield, Cpu, Layers, Sparkles } from 'lucide-react';
import { SOLUTIONS, SOLUTION_CATEGORIES, SOLUTIONS_DIFFERENTIATORS } from '../../../data/solutions';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../common/Motion/ScrollReveal';
import Button from '../../common/Button/Button';
import './SolutionsGrid.css';

export default function SolutionsGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSolutions = activeCategory === 'all'
    ? SOLUTIONS
    : SOLUTIONS.filter((s) => s.category === activeCategory);

  return (
    <section className="section solutions-section" id="solutions" aria-labelledby="solutions-heading">
      {/* Professional Astrion Technology Background Image & Ambient Layer */}
      <div className="solutions-bg-layer" aria-hidden="true">
        <img 
          src="/solutions-bg.jpg" 
          alt="" 
          className="solutions-bg-img" 
        />
        <div className="solutions-bg-overlay"></div>
        <div className="solutions-bg-glow"></div>
      </div>

      <div className="container solutions-container">
        <ScrollReveal yOffset={24}>
          <SectionHeader
            label="SOLUTIONS & CAPABILITIES"
            title="Technology engineered to connect and scale the entire enterprise."
            description="Astrion delivers cohesive multi-disciplinary technology capabilities designed to modernize core operating infrastructure, automate complex workflows, enforce zero-trust security, and unlock sustained enterprise scale."
            action={
              <Button to="/solutions" variant="outline" size="md" icon="arrow">
                View All Capabilities
              </Button>
            }
          />
        </ScrollReveal>

        {/* Interactive Category Filter Tabs */}
        <ScrollReveal yOffset={16} delay={0.05}>
          <div className="solutions-category-nav" role="tablist" aria-label="Solution Categories">
            {SOLUTION_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                {cat.id === 'all' && <span className="cat-count">{SOLUTIONS.length}</span>}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Rich Enterprise Solutions Grid */}
        <div className="solutions-cards-wrapper">
          <StaggerContainer staggerDelay={0.06} className="capabilities-grid">
            {filteredSolutions.map((item) => (
              <StaggerItem key={item.id}>
                <div className="capability-card">
                  <div className="capability-card-inner">
                    {/* Top Meta Bar */}
                    <div className="capability-top">
                      <div className="capability-num-wrap">
                        <span className="capability-category-chip mono-tag">{item.categoryLabel}</span>
                      </div>
                      <Link 
                        to={`/solutions/${item.id}`}
                        className="capability-arrow-wrap"
                        aria-label={`View details for ${item.title}`}
                      >
                        <ArrowUpRight size={17} className="capability-arrow" />
                      </Link>
                    </div>

                    {/* Main Content */}
                    <div className="capability-body">
                      <h3 className="capability-title">
                        <Link to={`/solutions/${item.id}`}>{item.title}</Link>
                      </h3>
                      <div className="capability-tagline mono-tag">{item.tagline}</div>
                      <p className="capability-desc">{item.shortDesc}</p>

                      {/* Key Services Checklist */}
                      <div className="capability-services-box">
                        <span className="services-box-heading mono-tag">KEY CAPABILITIES</span>
                        <ul className="capability-services-list">
                          {item.services.map((srv, sIdx) => (
                            <li key={sIdx} className="capability-service-item">
                              <CheckCircle2 size={13} className="service-check-icon" />
                              <span>{srv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Architecture & Metrics Highlight Badge */}
                      <div className="capability-meta-highlights">
                        {item.metrics && (
                          <div className="metric-pill mono-tag">
                            <Sparkles size={12} className="metric-icon" />
                            <span>{item.metrics}</span>
                          </div>
                        )}
                        <div className="arch-pill mono-tag" title={item.architecture}>
                          <span className="arch-label">ARCH:</span> {item.architecture.split(',')[0]}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="capability-bottom">
                      <Link to={`/solutions/${item.id}`} className="capability-explore-btn">
                        <span>Explore Capability</span>
                        <ArrowUpRight size={14} />
                      </Link>
                      <div className="capability-hairline"></div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Enterprise Solutions Differentiators Banner */}
        <ScrollReveal yOffset={28} delay={0.1}>
          <div className="solutions-differentiators-banner">
            <div className="differentiators-header">
              <div className="mono-label diff-tag">
                <Shield size={14} />
                <span>WHY ENTERPRISES CHOOSE ASTRION</span>
              </div>
              <h3 className="diff-title">Architected for deterministic enterprise production.</h3>
            </div>

            <div className="differentiators-grid">
              {SOLUTIONS_DIFFERENTIATORS.map((diff, dIdx) => (
                <div key={dIdx} className="diff-item-card">
                  <h4 className="diff-item-title">{diff.title}</h4>
                  <p className="diff-item-desc">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
