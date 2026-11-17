import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FileDown, 
  FileText, 
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
      <section className="inner-hero-section" style={{ paddingBottom: '20px' }}>
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
              INSIGHTS // RESOURCES
            </div>

            <h1 className="inner-hero-title" style={{ marginBottom: '10px' }}>
              Resources
            </h1>

            <p className="inner-hero-lead" style={{ color: 'var(--brand-blue, #1C75BD)', fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', fontWeight: 600, marginBottom: '16px', lineHeight: '1.3' }}>
              Practical Resources for Better Business Management.
            </p>

            <div style={{ maxWidth: '820px' }}>
              <p style={{ color: 'var(--text-secondary, #475569)', fontSize: '1.0625rem', lineHeight: '1.65', margin: 0 }}>
                Access useful resources designed to help business leaders, entrepreneurs and operational teams understand enterprise technology and make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section" style={{ paddingTop: '24px' }}>
        <div className="container">

          {/* 1. Resource Topics You Will Find Here */}
          <div 
            style={{ 
              background: '#FFFFFF', 
              border: '1px solid var(--border-light)', 
              borderRadius: '16px', 
              padding: '32px',
              marginBottom: '32px',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)'
            }}
          >
            <div style={{ marginBottom: '20px' }}>
              <span className="mono-tag" style={{ color: 'var(--brand-blue)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                TOPIC DIRECTORY
              </span>
              <h2 style={{ fontSize: '1.375rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                Resource Topics you will find here:
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
              {RESOURCES_DATA.topics.map((topic, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    padding: '14px 18px', 
                    background: 'var(--bg-secondary)', 
                    borderRadius: '8px',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Downloadable Resources */}
          <div 
            style={{ 
              background: '#FFFFFF', 
              border: '1px solid var(--border-light)', 
              borderRadius: '16px', 
              padding: '32px',
              marginBottom: '32px',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)'
            }}
          >
            <div style={{ marginBottom: '20px' }}>
              <span className="mono-tag" style={{ color: 'var(--brand-blue)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                CURATED MATERIALS
              </span>
              <h2 style={{ fontSize: '1.375rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                Downloadable Resources:
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
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <span className="resource-type mono-tag">{res.category}</span>
                        <span className="mono-tag" style={{ background: 'rgba(235, 100, 62, 0.1)', color: 'var(--brand-orange, #EB643E)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.6875rem', fontWeight: 700 }}>
                          Coming Soon
                        </span>
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
          </div>

          {/* 3. CTA Banner */}
          <div 
            className="commitment-card"
            style={{
              background: 'linear-gradient(135deg, rgba(28, 117, 189, 0.04) 0%, rgba(248, 250, 252, 0.95) 100%)',
              border: '1px solid rgba(28, 117, 189, 0.2)',
              borderRadius: '16px',
              padding: '32px',
              marginTop: 0
            }}
          >
            <div className="commitment-header" style={{ marginBottom: '14px' }}>
              <div className="mono-label" style={{ color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOpen size={18} />
                <span>MANAGEMENT RESOURCES</span>
              </div>
              <h3 style={{ marginTop: '8px', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Access Practical Guides &amp; Decision-Making Frameworks
              </h3>
            </div>
            <p className="commitment-text" style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--text-primary)', margin: 0 }}>
              Access useful resources designed to help business leaders, entrepreneurs and operational teams understand enterprise technology and make informed decisions.
            </p>
            <div className="commitment-actions" style={{ marginTop: '24px' }}>
              <Button to="/insights" variant="primary" size="md" icon="arrow">
                Explore Resources
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
