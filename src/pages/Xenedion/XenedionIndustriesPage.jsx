import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layers, CheckCircle2, ArrowRight, ArrowUpRight, Cpu } from 'lucide-react';
import { INDUSTRIES } from '../../data/industries';
import Button from '../../components/common/Button/Button';
import './XenedionPage.css';

export default function XenedionIndustriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inner-page xenedion-industries-page">
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
            <span className="breadcrumb-current">INDUSTRY BLUEPRINTS</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <Layers size={14} />
              <span>XENEDION // SECTOR PRE-CONFIGURATIONS</span>
            </div>

            <h1 className="inner-hero-title">
              XENedion Industry Blueprints: Pre-configured for operational realities.
            </h1>

            <p className="inner-hero-lead">
              Rather than forcing generic software onto specialized businesses, XENedion provides pre-packaged domain schemas, compliance rules, and automated workflow templates tailored to your sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Blueprints Grid */}
      <section className="section">
        <div className="container">
          <div className="modules-grid-full">
            {INDUSTRIES.map((ind) => (
              <div key={ind.id} className="module-card-item">
                <div className="module-card-header">
                  <span className="mono-tag" style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>
                    SECTOR BLUEPRINT
                  </span>
                  <Link to={`/industries/${ind.id}`} aria-label={`View ${ind.name} blueprint`}>
                    <ArrowUpRight size={16} style={{ color: 'var(--text-tertiary)' }} />
                  </Link>
                </div>

                <h2 className="module-name">{ind.name}</h2>
                <p className="module-desc">{ind.description}</p>

                <div style={{ marginBottom: '16px' }}>
                  <span className="mono-tag" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-tertiary)' }}>
                    PRE-CONFIGURED MODULES:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {ind.xenedionFocus.map((m, idx) => (
                      <span key={idx} className="mono-tag" style={{ padding: '2px 8px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: '4px' }}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="module-specs-row mono-tag">
                  <Link to={`/industries/${ind.id}`} style={{ color: 'var(--brand-blue)', fontWeight: 600 }}>
                    Explore Industry Blueprint →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="commitment-card">
            <div className="commitment-header">
              <div className="mono-label">
                <Cpu size={16} />
                <span>RAPID TIME TO VALUE</span>
              </div>
              <h3>Pre-Configured Data Ontologies Cut Deployment Timelines by 50%</h3>
            </div>
            <p className="commitment-text">
              Avoid building custom manufacturing execution logic or distribution routing from scratch. XENedion includes tested enterprise templates compliant with industry standards.
            </p>
            <div className="commitment-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Schedule Sector Consultation
              </Button>
              <Button to="/industries" variant="secondary" size="md">
                View All Industries
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
