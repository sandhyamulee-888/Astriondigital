import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FileDown, 
  FileText,
  Layers, 
  CheckCircle2, 
  Download,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { RESOURCES_DATA } from '../../data/insights';
import Button from '../../components/common/Button/Button';
import './InsightsPage.css';

export default function ResourcesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inner-page resources-main-page">
      {/* Hero Section */}
      <section className="inner-hero-section">
        <div className="inner-hero-bg" aria-hidden="true">
          <img src="/solutions-bg.jpg" alt="" className="inner-hero-bg-img" />
          <div className="inner-hero-overlay"></div>
        </div>

        <div className="container inner-hero-container">
          <div className="inner-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            <Link to="/insights">INSIGHTS</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">RESOURCES</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              INSIGHTS // PRACTICAL MANAGEMENT RESOURCES
            </div>

            <h1 className="inner-hero-title">
              {RESOURCES_DATA.headline}
            </h1>

            <p className="inner-hero-lead">
              {RESOURCES_DATA.lead}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section">
        <div className="container">

          {/* Resource Topics You Will Find Here */}
          <div 
            style={{ 
              background: '#FFFFFF', 
              border: '1px solid var(--border-light)', 
              borderRadius: '16px', 
              padding: '28px',
              marginBottom: '36px',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)'
            }}
          >
            <div style={{ marginBottom: '16px' }}>
              <span className="mono-tag" style={{ color: 'var(--brand-blue)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                TOPIC DIRECTORY
              </span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                Resource Topics you will find here:
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
              {RESOURCES_DATA.topics.map((topic, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    padding: '12px 16px', 
                    background: 'var(--bg-secondary)', 
                    borderRadius: '8px',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Downloadable Resources Cards Grid */}
          <div style={{ marginBottom: '48px' }}>
            <div className="section-header-compact" style={{ marginBottom: '24px' }}>
              <span className="mono-tag" style={{ color: 'var(--text-tertiary)', fontWeight: 700 }}>
                CURATED MATERIALS
              </span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', margin: '4px 0 0' }}>
                Downloadable Resources
              </h2>
            </div>

            <div className="resources-grid-list">
              {RESOURCES_DATA.downloadables.map((res, idx) => {
                const isFeatured = idx === 0;
                return (
                  <Link 
                    key={res.id} 
                    to="/contact" 
                    className={`resource-item-card ${isFeatured ? 'featured-resource-card' : ''}`}
                    aria-label={`Explore ${res.title}`}
                  >
                    <div className="resource-card-top">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="resource-type mono-tag">{res.category}</span>
                        {isFeatured && <span className="featured-pill mono-tag">FEATURED GUIDE</span>}
                      </div>
                      <span className="resource-format mono-tag">
                        <span>{res.format}</span>
                      </span>
                    </div>

                    <h3 className="resource-title">{res.title}</h3>
                    <p className="resource-desc" style={{ marginBottom: 0 }}>{res.desc}</p>
                  </Link>
                );
              })}
            </div>

            {/* Section Level CTA */}
            <div className="resources-section-cta">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Explore Resources
              </Button>
            </div>
          </div>

          {/* Strategic Consultation Banner */}
          <div className="commitment-card">
            <div className="commitment-header">
              <div className="mono-label">
                <ShieldCheck size={16} />
                <span>EXPERT GUIDANCE</span>
              </div>
              <h3>Need assistance choosing the right technology path?</h3>
            </div>
            <p className="commitment-text">
              Our specialists work with growing and established enterprises to assess their workflows, review ERP readiness, and guide digital transformation initiatives.
            </p>
            <div className="commitment-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Schedule a Consultation
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
