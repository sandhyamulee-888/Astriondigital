import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ShieldCheck,
  Award,
  ArrowRight
} from 'lucide-react';
import { CASE_STUDIES_DATA } from '../../data/insights';
import Button from '../../components/common/Button/Button';
import './InsightsPage.css';

export default function CaseStudiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inner-page case-studies-main-page">
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
            <span className="breadcrumb-current">CASE STUDIES</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              INSIGHTS // CASE STUDIES
            </div>

            <h1 className="inner-hero-title" style={{ marginBottom: '10px' }}>
              Case Studies
            </h1>

            <p className="inner-hero-lead" style={{ color: 'var(--brand-blue, #1C75BD)', fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', fontWeight: 600, marginBottom: '16px', lineHeight: '1.3' }}>
              Real Business Challenges. Practical Technology Solutions.
            </p>

            <div style={{ maxWidth: '820px' }}>
              <p style={{ color: 'var(--text-secondary, #475569)', fontSize: '1.0625rem', lineHeight: '1.65', marginBottom: '10px' }}>
                Every business has unique operational challenges. Our case studies will showcase how integrated technology and structured business processes can help organisations improve the way they operate.
              </p>
              <p style={{ color: 'var(--text-secondary, #475569)', fontSize: '1.0625rem', lineHeight: '1.65', margin: 0 }}>
                Explore customer stories covering business challenges, solution approaches, implementation experiences and measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section">
        <div className="container">

          {/* Case Studies Format Framework */}
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
                STANDARDIZED EVALUATION FRAMEWORK
              </span>
              <h2 style={{ fontSize: '1.375rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                Our Case studies have the following format:
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
              {CASE_STUDIES_DATA.formatSteps.map((step, idx) => (
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
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment Card */}
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
                <ShieldCheck size={18} />
                <span>CUSTOMER VALIDATION PROTOCOL</span>
              </div>
              <h3 style={{ marginTop: '8px', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Verified Customer Stories Commitment
              </h3>
            </div>
            <p className="commitment-text" style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--text-primary)', margin: 0 }}>
              <strong>Commitment:</strong> {CASE_STUDIES_DATA.commitment}
            </p>
            <div className="commitment-actions" style={{ marginTop: '24px' }}>
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                {CASE_STUDIES_DATA.ctaText}
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
