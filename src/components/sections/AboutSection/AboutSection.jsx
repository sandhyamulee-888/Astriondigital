import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Building2
} from 'lucide-react';
import { ABOUT_ASTRION, CORPORATE_BRAND_SECTION } from '../../../data/about';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Button from '../../common/Button/Button';
import ScrollReveal from '../../common/Motion/ScrollReveal';
import './AboutSection.css';

export default function AboutSection() {
  const brandPillars = [
    {
      id: 'product-ownership',
      title: 'Product Ownership',
      desc: 'Complete architectural control, proprietary IP ownership, and dedicated product roadmap execution.',
      icon: <Layers size={20} />,
      accentColor: 'var(--brand-blue)'
    },
    {
      id: 'strategic-vision',
      title: 'Strategic Vision',
      desc: 'Long-term corporate foundation and governance ensuring continuous value creation for enterprise clients.',
      icon: <ShieldCheck size={20} />,
      accentColor: 'var(--brand-orange)'
    },
    {
      id: 'continuous-innovation',
      title: 'Continuous Innovation',
      desc: 'Engineering intelligent technology products that help businesses operate efficiently, intelligently, and effectively.',
      icon: <Sparkles size={20} />,
      accentColor: '#00D2FF'
    },
    {
      id: 'enterprise-growth',
      title: 'Enterprise Growth',
      desc: 'Scalable multi-product expansion framework designed to power mission-critical operations worldwide.',
      icon: <TrendingUp size={20} />,
      accentColor: '#10B981'
    }
  ];

  return (
    <section className="section about-section" id="about" aria-labelledby="about-heading">
      <div className="about-ambient-glow" aria-hidden="true" />

      <div className="container">
        {/* Section Header: CORPORATE BRAND */}
        <ScrollReveal yOffset={24}>
          <SectionHeader
            icon={<Building2 size={16} />}
            label={CORPORATE_BRAND_SECTION.label}
            title={CORPORATE_BRAND_SECTION.title}
            description={CORPORATE_BRAND_SECTION.description}
            action={
              <Link to="/about" className="arrow-link">
                <span>View Brand Architecture</span>
                <ArrowUpRight size={16} />
              </Link>
            }
          />
        </ScrollReveal>

        {/* Bento Grid: Corporate Foundation & Flagship Product */}
        <ScrollReveal yOffset={24} delay={0.08}>
          <div className="about-bento-top-row">
            {/* Left Bento: Official Corporate Positioning Statement */}
            <div className="about-narrative-card">
              <div className="card-top-indicator">
                <span className="mono-label narrative-badge">
                  <ShieldCheck size={14} className="badge-icon-blue" />
                  <span>CORPORATE POSITIONING STATEMENT</span>
                </span>
                <span className="corporate-id-chip mono-tag">CIN // PRIVATE LIMITED</span>
              </div>

              <h3 className="narrative-headline">
                The corporate foundation for intelligent enterprise technology
              </h3>

              <p className="narrative-lead">
                {ABOUT_ASTRION.lead}
              </p>

              <div className="positioning-flagship-box">
                <div className="flagship-title-row">
                  <Sparkles size={16} className="sparkle-icon" />
                  <span className="flagship-label mono-tag">FLAGSHIP ENTERPRISE PRODUCT</span>
                </div>
                <p className="flagship-statement-text">
                  {ABOUT_ASTRION.flagshipStatement}
                </p>
                <div className="foundation-badge mono-tag">
                  <CheckCircle2 size={14} className="check-icon-orange" />
                  <span>{ABOUT_ASTRION.foundationStatement}</span>
                </div>
              </div>

              <div className="about-actions-group">
                <Button to="/about" variant="primary" size="md" icon="arrow">
                  Corporate Architecture
                </Button>
                <Button to="/xenedion" variant="secondary" size="md" icon="arrow">
                  Discover XENedion ERP
                </Button>
              </div>
            </div>

            {/* Right Bento: Brand Hierarchy Card */}
            <div className="brand-arch-summary-card">
              <div className="arch-card-header">
                <span className="mono-label arch-badge">
                  <Layers size={14} className="badge-icon-orange" />
                  <span>BRAND ARCHITECTURE // SYSTEM MATRIX</span>
                </span>
                <h4 className="arch-card-title">Corporate &amp; Product Hierarchy</h4>
              </div>

              {/* Tier 1: Parent Company */}
              <div className="arch-tier-block parent-tier">
                <div className="tier-tag-row">
                  <span className="mono-tag tier-badge">
                    <Building2 size={13} />
                    <span>PARENT COMPANY // CORPORATE ENTITY</span>
                  </span>
                </div>
                <h3 className="tier-entity-name">ASTRION DIGITAL</h3>
                <p className="tier-mandate">
                  Product Ownership &bull; Strategy &bull; Innovation &bull; Growth
                </p>
              </div>

              {/* Hierarchy Connector with Animated Flow Indicator */}
              <div className="arch-connector-line">
                <div className="connector-pulse"></div>
                <span className="connector-pill mono-tag">FLAGSHIP PRODUCT OF ASTRION</span>
              </div>

              {/* Tier 2: Flagship Product */}
              <div className="arch-tier-block product-tier">
                <div className="tier-tag-row">
                  <span className="mono-tag tier-badge flagship-tag">
                    <Sparkles size={13} />
                    <span>FLAGSHIP ENTERPRISE PLATFORM</span>
                  </span>
                </div>
                <h3 className="tier-product-name">XENedion</h3>
                <p className="tier-product-tagline">
                  &ldquo;One Platform. Your Entire Business.&rdquo;
                </p>
                <p className="tier-product-desc">
                  Integrated enterprise resource planning platform connecting core functions, finance, supply chain, and organizational visibility.
                </p>
                <Link to="/xenedion" className="tier-explore-link mono-tag">
                  <span>Explore XENedion Architecture</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Brand Architecture Pillars Bento Grid */}
        <ScrollReveal yOffset={24} delay={0.12}>
          <div className="about-pillars-bar">
            <div className="pillars-header">
              <span className="mono-tag pillars-tag">
                <Layers size={13} />
                <span>ASTRION DIGITAL BRAND ARCHITECTURE PILLARS</span>
              </span>
              <span className="mono-tag pillars-subtag">
                ENTERPRISE GOVERNANCE &bull; CONTINUOUS VALUE
              </span>
            </div>

            <div className="pillars-bento-grid">
              {brandPillars.map((pillar, idx) => (
                <div key={pillar.id} className="pillar-bento-card">
                  <div className="pillar-card-top">
                    <div 
                      className="pillar-icon-box"
                      style={{ 
                        color: pillar.accentColor,
                        borderColor: `rgba(255, 255, 255, 0.12)`
                      }}
                    >
                      {pillar.icon}
                    </div>
                  </div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
