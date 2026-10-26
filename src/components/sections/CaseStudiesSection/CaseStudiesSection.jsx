import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, TrendingUp, Sparkles, Zap } from 'lucide-react';
import { CASE_STUDIES } from '../../../data/caseStudies';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Button from '../../common/Button/Button';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../common/Motion/ScrollReveal';
import './CaseStudiesSection.css';

const ROI_METRICS = {
  'industrial-manufacturing-modernization': { roi: 'Synchronized Ops', sub: 'Multi-Plant Visibility' },
  'global-distribution-fulfillment': { roi: 'High Precision', sub: 'Order Fulfillment Sync' },
  'enterprise-fleet-logistics': { roi: 'Optimized Routes', sub: 'Autonomous Dispatch' }
};

export default function CaseStudiesSection() {
  const featured = CASE_STUDIES.find((cs) => cs.featured);
  const previews = CASE_STUDIES.filter((cs) => !cs.featured);

  return (
    <section className="section case-studies-section" id="case-studies" aria-labelledby="case-studies-heading">
      <div className="case-studies-glow" aria-hidden="true" />

      <div className="container">
        <ScrollReveal yOffset={28}>
          <SectionHeader
            label="INSIGHTS // CASE STUDIES"
            title="Transformation in practice."
            description="Examine representative enterprise transformation architectures. Each engagement reflects our focus on engineering resilience, deterministic outcomes, and measurable operational efficiency."
            action={
              <Link to="/insights/case-studies" className="arrow-link">
                <span>View All Case Studies</span>
                <ArrowUpRight size={16} />
              </Link>
            }
          />
        </ScrollReveal>

        {/* 1 Large Featured + 2 Smaller Previews Layout */}
        <div className="case-studies-layout">
          {/* Featured Large Case Study Card */}
          {featured && (
            <ScrollReveal yOffset={36} className="featured-case-wrapper">
              <div className="featured-case-card">
                <div className="featured-case-inner">
                  <div className="featured-meta-bar">
                    <span className="mono-label featured-tag">
                      <Sparkles size={12} className="tag-sparkle" />
                      {featured.tag}
                    </span>
                    <span className="mono-tag featured-industry">{featured.industry}</span>
                  </div>

                  <div className="featured-roi-badge">
                    <TrendingUp size={16} className="roi-icon" />
                    <span className="roi-stat">{ROI_METRICS[featured.id]?.roi}</span>
                    <span className="roi-divider mono-tag">/</span>
                    <span className="roi-sub mono-tag">{ROI_METRICS[featured.id]?.sub}</span>
                  </div>

                  <h3 className="featured-case-title">{featured.title}</h3>
                  <p className="featured-case-desc">{featured.description}</p>

                  {/* Deliverables / Architectural Outcomes */}
                  <div className="featured-deliverables">
                    <span className="mono-tag deliverables-heading">ARCHITECTURAL DELIVERABLES</span>
                    <ul className="featured-del-list">
                      {featured.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="featured-del-item">
                          <CheckCircle2 size={16} className="featured-del-icon" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Grid */}
                  <div className="featured-tech-row">
                    {featured.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-badge mono-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="featured-case-footer">
                    <Button
                      to={featured.link}
                      variant="primary"
                      size="md"
                      icon="arrow"
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* 2 Smaller Previews Column */}
          <StaggerContainer staggerDelay={0.12} className="case-previews-column">
            {previews.map((item) => (
              <StaggerItem key={item.id}>
                <div className="preview-case-card">
                  <div className="preview-meta">
                    <span className="mono-label preview-tag">{item.tag}</span>
                    <span className="mono-tag preview-industry">{item.industry}</span>
                  </div>

                  <div className="preview-roi-pill">
                    <Zap size={13} className="preview-roi-icon" />
                    <span className="mono-tag preview-roi-val">{ROI_METRICS[item.id]?.roi}</span>
                  </div>

                  <h4 className="preview-title">{item.title}</h4>
                  <p className="preview-desc">{item.description}</p>

                  <div className="preview-tech-row">
                    {item.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-badge mono-tag">{tech}</span>
                    ))}
                  </div>

                  <Link to={item.link} className="preview-link arrow-link">
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
