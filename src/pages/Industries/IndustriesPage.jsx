import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowUpRight, CheckCircle2, ShieldCheck, Factory, Truck, ShoppingCart, Briefcase, Car, Globe, Shirt } from 'lucide-react';
import { INDUSTRIES, INDUSTRIES_PAGE_HEADER } from '../../data/industries';
import Button from '../../components/common/Button/Button';
import './IndustriesPage.css';

export default function IndustriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getIndustryIcon = (id) => {
    switch (id) {
      case 'manufacturing': return <Factory size={22} />;
      case 'distribution': return <Truck size={22} />;
      case 'retail': return <ShoppingCart size={22} />;
      case 'garments': return <Shirt size={22} />;
      case 'professional-services': return <Briefcase size={22} />;
      case 'automotive': return <Car size={22} />;
      default: return <Globe size={22} />;
    }
  };

  return (
    <div className="inner-page industries-main-page">
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
            <span className="breadcrumb-current">INDUSTRIES</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              INDUSTRIES // OPERATIONAL MANAGEMENT SOLUTIONS
            </div>

            <h1 className="inner-hero-title">
              {INDUSTRIES_PAGE_HEADER.tagline}
            </h1>

            <p className="inner-hero-lead">
              {INDUSTRIES_PAGE_HEADER.description}
            </p>
          </div>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="section">
        <div className="container">
          <div className="industries-grid-list">
            {INDUSTRIES.map((ind) => (
              <div key={ind.id} className="industry-sector-card">
                <div className="sector-card-top">
                  <div className="sector-icon-box">{getIndustryIcon(ind.id)}</div>
                  <span className="sector-num mono-tag">INDUSTRY SOLUTION</span>
                </div>

                <h2 className="sector-name">{ind.name}</h2>
                <h3 className="sector-headline">{ind.headline}</h3>
                <div className="sector-desc-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  {(ind.paragraphs || [ind.description]).map((para, idx) => (
                    <p key={idx} className="sector-desc" style={{ margin: 0, lineHeight: '1.6' }}>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Key Business Areas */}
                <div className="sector-outcomes-box">
                  <span className="mono-tag outcomes-label">KEY BUSINESS AREAS:</span>
                  <ul className="sector-outcomes-list">
                    {(ind.keyBusinessAreas || ind.outcomes).map((area, idx) => (
                      <li key={idx} className="sector-outcome-item">
                        <CheckCircle2 size={13} className="outcome-check" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sector-card-footer">
                  <Link to={ind.href || `/industries/${ind.id}`} className="sector-explore-btn">
                    <span>{ind.ctaText || `Explore ${ind.name} Solutions`}</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="commitment-card">
            <div className="commitment-header">
              <div className="mono-label">
                <ShieldCheck size={16} />
                <span>DOMAIN CONSULTATION</span>
              </div>
              <h3>Need an integrated operating environment for your business?</h3>
            </div>
            <p className="commitment-text">
              Astrion Digital focuses on delivering integrated business management solutions that address the operational needs of different industries. Talk to our team to discover how XENedion can transform your operations.
            </p>
            <div className="commitment-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Request a Product Demonstration
              </Button>
              <Button to="/solutions/erp" variant="secondary" size="md">
                Explore XENedion ERP
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
