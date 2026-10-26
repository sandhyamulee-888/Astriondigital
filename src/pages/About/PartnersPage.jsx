import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Shield, Cloud, Database, Cpu, Lock, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PARTNERS } from '../../data/about';
import Button from '../../components/common/Button/Button';
import './AboutPage.css';

export default function PartnersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inner-page partners-page">
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
            <span className="breadcrumb-current">STRATEGIC PARTNERS</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <Handshake size={14} />
              <span>ABOUT // STRATEGIC PARTNERS</span>
            </div>

            <h1 className="inner-hero-title">
              Strategic Partners: Global Infrastructure &amp; Implementation Allies.
            </h1>

            <p className="inner-hero-lead">
              Collaborating with leading cloud infrastructure and regional implementation partners to deliver reliable software deployment worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="section">
        <div className="container">
          <div className="partners-deep-grid">
            {PARTNERS.map((partner) => (
              <div key={partner.id} className="partner-deep-card">
                <div className="partner-card-header-row">
                  <span className="partner-tier-badge mono-label">{partner.tier}</span>
                  <span className="partner-cat-badge mono-tag">{partner.category}</span>
                </div>

                <h2 className="partner-title">{partner.name}</h2>
                <p className="partner-description">{partner.desc}</p>

                <div className="partner-technologies-box">
                  <span className="mono-tag tech-box-label">SUPPORTED CAPABILITIES &amp; CONNECTORS</span>
                  <div className="partner-chips-wrap">
                    {partner.tech.map((t, idx) => (
                      <span key={idx} className="partner-tech-pill mono-tag">
                        <CheckCircle2 size={12} className="tech-check-icon" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ecosystem Commitment */}
          <div className="ecosystem-banner">
            <div className="ecosystem-text">
              <span className="mono-label">SOVEREIGNTY &amp; OPEN STANDARDS</span>
              <h3>Open Standards &amp; Architecture Portability</h3>
              <p>
                Our integration architecture relies strictly on industry-standard protocols—OpenAPI, gRPC, OpenTofu, Delta Lake, and Kubernetes—ensuring your enterprise maintains comprehensive operational portability across all infrastructure environments.
              </p>
            </div>
            <div className="ecosystem-actions">
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Discuss Ecosystem Integration
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
