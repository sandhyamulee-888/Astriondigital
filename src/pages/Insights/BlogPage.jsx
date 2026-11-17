import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Layers, 
  BookOpen, 
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { BLOGS_DATA } from '../../data/insights';
import Button from '../../components/common/Button/Button';
import './InsightsPage.css';

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inner-page blog-main-page">
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
            <span className="breadcrumb-current">BLOGS</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              INSIGHTS // BLOGS
            </div>

            <h1 className="inner-hero-title" style={{ marginBottom: '10px' }}>
              Blogs
            </h1>

            <p className="inner-hero-lead" style={{ color: 'var(--brand-blue, #1C75BD)', fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', fontWeight: 600, marginBottom: '16px', lineHeight: '1.3' }}>
              Ideas. Perspectives. Practical Business Knowledge.
            </p>

            <div style={{ maxWidth: '820px' }}>
              <p style={{ color: 'var(--text-secondary, #475569)', fontSize: '1.0625rem', lineHeight: '1.65', margin: 0 }}>
                Explore articles and perspectives on the changing world of enterprise technology and business management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Content Section */}
      <section className="section">
        <div className="container">

          {/* 1. Upcoming Blog Categories */}
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
                EDITORIAL FOCUS
              </span>
              <h2 style={{ fontSize: '1.375rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                Upcoming Blog Categories:
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
              {BLOGS_DATA.categories.map((cat, idx) => (
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
                    {cat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Initial Blog Topics: (coming soon) */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span className="mono-tag" style={{ color: 'var(--brand-orange)', fontWeight: 700 }}>
                  FORTHCOMING PERSPECTIVES
                </span>
                <span className="mono-tag" style={{ background: 'rgba(235, 100, 62, 0.1)', color: 'var(--brand-orange)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.6875rem', fontWeight: 700 }}>
                  COMING SOON
                </span>
              </div>
              <h2 style={{ fontSize: '1.375rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                Initial Blog Topics:
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '14px' }}>
              {BLOGS_DATA.initialTopics.map((topic, idx) => (
                <div 
                  key={topic.id || idx}
                  style={{ 
                    padding: '20px', 
                    background: 'var(--bg-secondary)', 
                    borderRadius: '10px',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span className="mono-tag" style={{ fontSize: '0.6875rem', color: 'var(--brand-blue)', fontWeight: 700 }}>
                        {topic.category}
                      </span>
                      <span className="mono-tag" style={{ fontSize: '0.6875rem', color: 'var(--brand-orange)', fontWeight: 600 }}>
                        {topic.status}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0, lineHeight: '1.4' }}>
                      {topic.title}
                    </h3>
                  </div>

                  {topic.summary && (
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
                      {topic.summary}
                    </p>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid var(--border-light)' }}>
                    <span className="mono-tag" style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                      {topic.readTime}
                    </span>
                    <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8125rem', color: 'var(--brand-blue)', fontWeight: 600, textDecoration: 'none' }}>
                      <span>Request Preview</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
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
                <span>PRACTICAL BUSINESS KNOWLEDGE</span>
              </div>
              <h3 style={{ marginTop: '8px', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Stay Informed on Enterprise Technology &amp; ERP Trends
              </h3>
            </div>
            <p className="commitment-text" style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--text-primary)', margin: 0 }}>
              Explore articles and perspectives on the changing world of enterprise technology, ERP adoption, and business management.
            </p>
            <div className="commitment-actions" style={{ marginTop: '24px' }}>
              <Button to="/insights" variant="primary" size="md" icon="arrow">
                Explore All Articles
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
