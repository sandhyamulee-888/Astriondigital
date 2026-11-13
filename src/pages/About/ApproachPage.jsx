import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Search, Network, TrendingUp, ShieldCheck } from 'lucide-react';
import { OUR_APPROACH } from '../../data/about';
import Button from '../../components/common/Button/Button';
import './AboutPage.css';

export default function ApproachPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const icons = [
    <Search key="search" size={22} />,
    <Network key="network" size={22} />,
    <TrendingUp key="trending" size={22} />,
    <ShieldCheck key="shield" size={22} />
  ];

  return (
    <div className="inner-page approach-page">
      {/* Hero */}
      <section className="inner-hero-section">
        <div className="inner-hero-bg" aria-hidden="true">
          <img src="/solutions-bg.jpg" alt="" className="inner-hero-bg-img" />
          <div className="inner-hero-overlay"></div>
        </div>

        <div className="container inner-hero-container">
          <div className="inner-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            <Link to="/about">ABOUT</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">OUR APPROACH</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <Target size={14} />
              <span>ABOUT // IMPLEMENTATION PHILOSOPHY</span>
            </div>

            <h1 className="inner-hero-title">
              {OUR_APPROACH.heading}
            </h1>

            <div className="approach-intro-block" style={{ margin: '16px 0 0 0', textAlign: 'left' }}>
              {OUR_APPROACH.intro.map((para, idx) => (
                <p key={idx} className="approach-intro-para">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Principles Framework Section */}
      <section className="section">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">
              <span>CORE PRINCIPLES</span>
            </div>
            <h2 className="section-title-compact">Four Foundations of Technology Delivery</h2>
            <p className="section-desc-compact">
              Built on deep process understanding, unified architecture, measurable performance, and long-term scalability.
            </p>
          </div>

          <div className="approach-principles-grid" style={{ marginTop: '32px' }}>
            {OUR_APPROACH.principles.map((principle, idx) => (
              <div key={principle.num} className="principle-card">
                <div className="principle-card-top">
                  <span className="principle-num mono-tag">{principle.num}</span>
                  <span className="principle-icon-wrap" aria-hidden="true">
                    {icons[idx]}
                  </span>
                </div>
                <h3 className="principle-title">{principle.title}</h3>
                <p className="principle-desc">{principle.description}</p>
              </div>
            ))}
          </div>

          {/* Action CTA Banner */}
          <div className="about-cta-banner" style={{ marginTop: '56px' }}>
            <div className="about-cta-text">
              <span className="mono-label">READY TO TRANSFORM YOUR OPERATIONS?</span>
              <h3>Discuss Your Business Workflows With Our Team</h3>
              <p>Schedule a practical consultation to see how connected operations can accelerate your growth.</p>
            </div>
            <div className="about-cta-btn-wrap">
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
