import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowUpRight, CheckCircle2, ShieldCheck, Factory, Truck, ShoppingCart, Briefcase, Car, Globe } from 'lucide-react';
import { INDUSTRIES } from '../../data/industries';
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
      case 'logistics': return <Truck size={22} />;
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
              SECTOR BLUEPRINTS // REAL-WORLD OPERATIONS
            </div>

            <h1 className="inner-hero-title">
              Software Built Around How Your Industry Actually Operates
            </h1>

            <p className="inner-hero-lead">
              Pre-built workflows and templates tailored specifically for Manufacturing, Distribution, Retail, Logistics, Professional Services, and Automotive.
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
                  <span className="sector-num mono-tag">BLUEPRINT</span>
                </div>

                <h2 className="sector-name">{ind.name}</h2>
                <h3 className="sector-headline">{ind.headline}</h3>
                <p className="sector-desc">{ind.description}</p>

                {/* Key Deliverables */}
                <div className="sector-outcomes-box">
                  <span className="mono-tag outcomes-label">OPERATIONAL OUTCOMES:</span>
                  <ul className="sector-outcomes-list">
                    {ind.outcomes.slice(0, 3).map((out, idx) => (
                      <li key={idx} className="sector-outcome-item">
                        <CheckCircle2 size={13} className="outcome-check" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sector-card-footer">
                  <Link to={`/industries/${ind.id}`} className="sector-explore-btn">
                    <span>Explore {ind.name} Blueprint</span>
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
              <h3>Need a custom operating blueprint for your sector?</h3>
            </div>
            <p className="commitment-text">
              Our industry solutions specialists evaluate your shop-floor telemetry, supply chain topology, and regulatory compliance standards to architect a bespoke solution.
            </p>
            <div className="commitment-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Schedule Sector Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
