import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Award, CheckCircle2, ArrowRight, ShieldCheck, Users, Briefcase } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import './XenedionPage.css';

export default function XenedionPartnerProgramPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tiers = [
    {
      title: 'Certified Value-Added Resellers (VARs)',
      desc: 'Regional commercial partners providing localized consulting, licensing distribution, and frontline customer success.',
      badge: 'COMMERCIAL PARTNER'
    },
    {
      title: 'Global Systems Integrators (GSIs)',
      desc: 'Tier-1 enterprise advisory firms co-architecting multi-national XENedion deployments and custom domain extensions.',
      badge: 'INTEGRATION PARTNER'
    },
    {
      title: 'Independent Software Vendors (ISVs)',
      desc: 'Specialized SaaS and industrial IoT hardware providers building native certified plugins on the XENedion API Fabric.',
      badge: 'TECHNOLOGY ALLIANCE'
    }
  ];

  return (
    <div className="inner-page xenedion-partner-program-page">
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
            <Link to="/xenedion">XENEDION ERP</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">PARTNER PROGRAM</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <Handshake size={14} />
              <span>XENEDION // PARTNER PROGRAM</span>
            </div>

            <h1 className="inner-hero-title">
              Partner Program: Grow Your Consulting Practice with XENedion
            </h1>

            <p className="inner-hero-lead">
              Build and grow your consulting agency by implementing XENedion for your local enterprise clients with comprehensive training, co-selling resources, and ongoing recurring revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Tiers Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">PARTNERSHIP TIERS</div>
            <h2 className="section-title-compact">Empowering partners with world-class enablement.</h2>
          </div>

          <div className="values-cards-grid" style={{ marginBottom: '48px' }}>
            {tiers.map((tier, idx) => (
              <div key={idx} className="value-item-card">
                <span className="mono-tag" style={{ color: 'var(--brand-blue)', fontWeight: 700, display: 'block', marginBottom: '10px' }}>
                  {tier.badge}
                </span>
                <h3 className="value-title">{tier.title}</h3>
                <p className="value-desc">{tier.desc}</p>
              </div>
            ))}
          </div>

          {/* Partner Benefits Banner */}
          <div className="commitment-card">
            <div className="commitment-header">
              <div className="mono-label">
                <Award size={16} />
                <span>PARTNER ENABLEMENT &amp; CERTIFICATION</span>
              </div>
              <h3>Direct Access to Core Platform Engineers &amp; Sandbox APIs</h3>
            </div>
            <p className="commitment-text">
              Certified partners receive comprehensive architectural training, dedicated partner sandbox instances, co-marketing collateral, and tier-2 escalation support.
            </p>
            <div className="commitment-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Apply for Partner Certification
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
