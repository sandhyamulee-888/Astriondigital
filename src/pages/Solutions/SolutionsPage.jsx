import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Shield, 
  Sparkles, 
  Layers, 
  Cpu, 
  Database, 
  Network,
  Code2,
  ShieldCheck,
  Cloud,
  Globe
} from 'lucide-react';
import { SOLUTIONS, SOLUTION_CATEGORIES, SOLUTIONS_DIFFERENTIATORS } from '../../data/solutions';
import Button from '../../components/common/Button/Button';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../components/common/Motion/ScrollReveal';
import './SolutionsPage.css';

const DOMAIN_ICONS = {
  'digital-transformation': <Layers size={16} />,
  'ai-intelligent-automation': <Sparkles size={16} />,
  'software-development': <Code2 size={16} />,
  'erp': <Cpu size={16} />,
  'cybersecurity': <ShieldCheck size={16} />,
  'cloud-infrastructure': <Cloud size={16} />,
  'data-business-intelligence': <Database size={16} />,
  'integration-api': <Network size={16} />
};

const DIFF_ICONS = [
  <Sparkles size={18} />,
  <Globe size={18} />,
  <ShieldCheck size={18} />,
  <Cpu size={18} />
];

export default function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredSolutions = activeCategory === 'all'
    ? SOLUTIONS
    : SOLUTIONS.filter((s) => s.category === activeCategory);

  return (
    <div className="solutions-hub-page">
      {/* Hero Header with Background Visual */}
      <div className="solutions-hub-hero">
        <div className="solutions-hub-bg" aria-hidden="true">
          <img src="/solutions-bg.jpg" alt="" className="solutions-hub-bg-img" />
          <div className="solutions-hub-overlay"></div>
        </div>

        <div className="container solutions-hub-hero-container">
          {/* Breadcrumb */}
          <div className="hub-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">SOLUTIONS</span>
          </div>

          <div className="hub-hero-content">
            <div className="mono-label hub-badge">
              <Layers size={14} />
              <span>ENTERPRISE SOFTWARE CAPABILITIES</span>
            </div>

            <h1 className="hub-title">
              Software Capabilities Built for Intelligent Operations
            </h1>

            <p className="hub-lead">
              Astrion Digital engineers the technology pillars behind intelligent enterprise software. From our flagship XENedion ERP core to embedded AI automation, bank-grade cloud security, and real-time business intelligence—our platform capabilities eliminate spreadsheet chaos and empower businesses to scale.
            </p>
          </div>
        </div>
      </div>

      {/* Main Capabilities Section */}
      <section className="section solutions-hub-main">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="hub-filter-bar">
            <div className="hub-filter-label mono-tag">FILTER BY DOMAIN:</div>
            <div className="hub-category-tabs" role="tablist">
              {SOLUTION_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`hub-cat-tab ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  {cat.id === 'all' ? (
                    <span className="hub-cat-count">{SOLUTIONS.length}</span>
                  ) : (
                    <span className="hub-cat-count">{SOLUTIONS.filter(s => s.category === cat.id).length}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 8 Dedicated Capability Cards Grid */}
          <StaggerContainer staggerDelay={0.06} className="hub-cards-grid">
            {filteredSolutions.map((item) => (
              <StaggerItem key={item.id}>
                <div className="hub-solution-card">
                  <div className="hub-card-inner">
                    {/* Top Meta */}
                    <div className="hub-card-top">
                      <div className="hub-num-row">
                        <span className="hub-card-icon">{DOMAIN_ICONS[item.id] || <Layers size={16} />}</span>
                        <span className="hub-cat-badge mono-tag">{item.categoryLabel}</span>
                      </div>
                      <Link 
                        to={`/solutions/${item.id}`}
                        className="hub-card-arrow-link"
                        aria-label={`View ${item.title}`}
                      >
                        <ArrowUpRight size={17} />
                      </Link>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="hub-card-title">
                      <Link to={`/solutions/${item.id}`}>{item.title}</Link>
                    </h3>
                    <div className="hub-card-tagline mono-tag">{item.tagline}</div>
                    <p className="hub-card-desc">{item.shortDesc}</p>

                    {/* Key Capabilities Checklist */}
                    <div className="hub-services-checklist">
                      <span className="hub-checklist-heading mono-tag">KEY BENEFITS &amp; CAPABILITIES</span>
                      <ul className="hub-checklist-items">
                        {item.services.map((srv, sIdx) => (
                          <li key={sIdx} className="hub-check-item">
                            <CheckCircle2 size={13} className="hub-check-icon" />
                            <span>{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Architecture and Metrics */}
                    <div className="hub-card-meta-box">
                      {item.metrics && (
                        <div className="hub-metric-pill mono-tag">
                          <Sparkles size={12} className="hub-metric-icon" />
                          <span>{item.metrics}</span>
                        </div>
                      )}
                      <div className="hub-arch-row mono-tag">
                        <span className="hub-arch-title">ARCHITECTURE:</span> {item.architecture}
                      </div>
                    </div>

                    {/* CTA Bottom Link */}
                    <div className="hub-card-footer">
                      <Link to={`/solutions/${item.id}`} className="hub-explore-btn">
                        <span>Explore Capability</span>
                        <ArrowUpRight size={15} />
                      </Link>
                      <div className="hub-card-hairline"></div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Differentiators Banner */}
          <ScrollReveal yOffset={24} delay={0.1}>
            <div className="hub-differentiators-box">
              <div className="hub-diff-header">
                <div className="mono-label hub-diff-tag">
                  <Shield size={14} />
                  <span>WHY ENTERPRISES CHOOSE ASTRION</span>
                </div>
                <h3 className="hub-diff-title">
                  Enterprise power without the enterprise headaches.
                </h3>
              </div>

              <div className="hub-diff-grid">
                {SOLUTIONS_DIFFERENTIATORS.map((diff, dIdx) => (
                  <div key={diff.title || dIdx} className="hub-diff-card">
                    <span className="hub-diff-icon">{DIFF_ICONS[dIdx] || <CheckCircle2 size={18} />}</span>
                    <h4 className="hub-diff-heading">{diff.title}</h4>
                    <p className="hub-diff-desc">{diff.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Strategic CTA Conversion Bar */}
          <ScrollReveal yOffset={24} delay={0.15}>
            <div className="hub-bottom-cta">
              <div className="hub-cta-text">
                <span className="mono-label">READY TO SIMPLIFY OPERATIONS?</span>
                <h3>Ready to see what Astrion can do for your business?</h3>
                <p>Schedule a live 15-minute walkthrough to see our software modules in action.</p>
              </div>
              <div className="hub-cta-btn-wrap">
                <Button to="/contact" variant="primary" size="lg" icon="arrow">
                  Request a Demo
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
