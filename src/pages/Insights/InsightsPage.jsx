import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FileText, 
  FileDown,
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Award,
  Download,
  Layers,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { 
  INSIGHTS_PAGE_DATA, 
  BLOGS_DATA, 
  CASE_STUDIES_DATA, 
  RESOURCES_DATA 
} from '../../data/insights';
import Button from '../../components/common/Button/Button';
import './InsightsPage.css';

export default function InsightsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inner-page insights-main-page">
      {/* Hero Section */}
      <section className="inner-hero-section" style={{ paddingBottom: '24px' }}>
        <div className="inner-hero-bg" aria-hidden="true">
          <img src="/solutions-bg.jpg" alt="" className="inner-hero-bg-img" />
          <div className="inner-hero-overlay"></div>
        </div>

        <div className="container inner-hero-container">
          <div className="inner-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">INSIGHTS</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              INSIGHTS // PRACTICAL KNOWLEDGE
            </div>

            <h1 className="inner-hero-title" style={{ marginBottom: '10px' }}>
              Insights
            </h1>

            <p className="inner-hero-lead" style={{ color: 'var(--brand-blue, #1C75BD)', fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', fontWeight: 600, marginBottom: '16px', lineHeight: '1.3' }}>
              Knowledge That Helps Businesses Move Forward.
            </p>

            <div style={{ maxWidth: '780px' }}>
              {INSIGHTS_PAGE_DATA.introParagraphs.map((para, idx) => (
                <p key={idx} style={{ color: 'var(--text-secondary, #475569)', fontSize: '1.0625rem', lineHeight: '1.65', marginBottom: idx === 0 ? '10px' : 0 }}>
                  {para}
                </p>
              ))}
            </div>

            <div className="insights-quick-nav">
              <a href="#blogs" className="quick-nav-pill mono-tag">
                <FileText size={14} />
                <span>BLOGS</span>
              </a>
              <a href="#case-studies" className="quick-nav-pill mono-tag">
                <Award size={14} />
                <span>CASE STUDIES</span>
              </a>
              <a href="#resources" className="quick-nav-pill mono-tag">
                <BookOpen size={14} />
                <span>RESOURCES</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Insights Content Grid */}
      <section className="section insights-hub-section" style={{ paddingTop: '28px' }}>
        <div className="container">
          
          {/* ========================================================
              SECTION: BLOGS
              ======================================================== */}
          <div id="blogs" style={{ scrollMarginTop: '110px' }}>
            <div className="insights-section-header">
              <div>
                <span className="mono-tag section-eyebrow">BLOGS</span>
                <h2 className="section-title">{BLOGS_DATA.headline}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '6px', maxWidth: '720px' }}>
                  {BLOGS_DATA.description}
                </p>
              </div>
              <Button to={BLOGS_DATA.ctaHref} variant="primary" size="sm" icon="arrow">
                {BLOGS_DATA.ctaText}
              </Button>
            </div>

            {/* Upcoming Blog Categories */}
            <div style={{ marginBottom: '24px' }}>
              <span className="mono-tag" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '10px' }}>
                UPCOMING BLOG CATEGORIES:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {BLOGS_DATA.categories.map((cat, idx) => (
                  <span 
                    key={idx} 
                    className="mono-tag"
                    style={{ 
                      padding: '5px 12px', 
                      background: 'var(--bg-secondary)', 
                      border: '1px solid var(--border-light)', 
                      borderRadius: '6px',
                      color: 'var(--text-primary)',
                      fontSize: '0.8125rem'
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Initial Blog Topics Grid */}
            <div style={{ marginBottom: '16px' }}>
              <span className="mono-tag" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '14px' }}>
                INITIAL BLOG TOPICS: (COMING SOON)
              </span>
              <div className="insights-cards-grid">
                {BLOGS_DATA.initialTopics.map((topic, idx) => {
                  const isFeatured = idx === 0;
                  return (
                    <div 
                      key={topic.id} 
                      className={`insight-card ${isFeatured ? 'featured-insight-card' : ''}`}
                      style={isFeatured ? { gridColumn: '1 / -1', background: 'linear-gradient(135deg, rgba(28, 117, 189, 0.03) 0%, #FFFFFF 100%)', borderColor: 'rgba(28, 117, 189, 0.25)' } : {}}
                    >
                      <div className="insight-card-meta">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="insight-category-badge mono-tag">{topic.category}</span>
                          {isFeatured && (
                            <span className="mono-tag" style={{ background: 'rgba(28, 117, 189, 0.1)', color: 'var(--brand-blue)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.6875rem', fontWeight: 700 }}>
                              FEATURED TOPIC
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="insight-card-title" style={{ fontSize: isFeatured ? '1.1875rem' : '1.0625rem', marginTop: '6px' }}>
                        <Link to={BLOGS_DATA.ctaHref}>{topic.title}</Link>
                      </h3>
                      <p className="insight-card-excerpt" style={{ fontSize: '0.875rem' }}>
                        {topic.summary}
                      </p>

                      <div className="insight-card-footer" style={{ justifyContent: 'flex-end' }}>
                        <Link to={BLOGS_DATA.ctaHref} className="insight-read-btn">
                          <span>Read Topic</span>
                          <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ========================================================
              SECTION: CASE STUDIES
              ======================================================== */}
          <div id="case-studies" style={{ scrollMarginTop: '110px' }}>
            <div className="insights-section-header case-studies-margin">
              <div>
                <span className="mono-tag section-eyebrow">CASE STUDIES</span>
                <h2 className="section-title">{CASE_STUDIES_DATA.headline}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: '1.6', marginTop: '8px', maxWidth: '780px', marginBottom: '8px' }}>
                  {CASE_STUDIES_DATA.lead}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', maxWidth: '780px', margin: 0 }}>
                  {CASE_STUDIES_DATA.description}
                </p>
              </div>
              <Button to={CASE_STUDIES_DATA.ctaHref} variant="primary" size="sm" icon="arrow">
                {CASE_STUDIES_DATA.ctaText}
              </Button>
            </div>

            {/* Case Studies Format Architecture */}
            <div 
              style={{ 
                background: '#FFFFFF', 
                border: '1px solid var(--border-light)', 
                borderRadius: '16px', 
                padding: '28px',
                marginBottom: '28px',
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)'
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <span className="mono-tag" style={{ color: 'var(--brand-blue)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                  STRUCTURED DOCUMENTATION
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                  Our Case studies have the following format:
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
                {CASE_STUDIES_DATA.formatSteps.map((step, idx) => (
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
                    <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Commitment Box */}
            <div 
              className="commitment-card"
              style={{
                background: 'linear-gradient(135deg, rgba(28, 117, 189, 0.04) 0%, rgba(248, 250, 252, 0.95) 100%)',
                border: '1px solid rgba(28, 117, 189, 0.2)',
                borderRadius: '14px',
                padding: '24px 28px',
                marginBottom: '48px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: 'var(--brand-blue)' }}>
                <ShieldCheck size={18} />
                <span className="mono-tag" style={{ fontWeight: 700 }}>OUR COMMITMENT TO TRANSPARENCY</span>
              </div>
              <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.65', color: 'var(--text-primary)' }}>
                <strong>Commitment:</strong> {CASE_STUDIES_DATA.commitment}
              </p>
              <div style={{ marginTop: '18px' }}>
                <Button to={CASE_STUDIES_DATA.ctaHref} variant="primary" size="md" icon="arrow">
                  {CASE_STUDIES_DATA.ctaText}
                </Button>
              </div>
            </div>
          </div>

          {/* ========================================================
              SECTION: RESOURCES
              ======================================================== */}
          <div id="resources" style={{ scrollMarginTop: '110px' }}>
            <div className="insights-section-header">
              <div>
                <span className="mono-tag section-eyebrow">RESOURCES</span>
                <h2 className="section-title">{RESOURCES_DATA.headline}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '6px', maxWidth: '780px' }}>
                  {RESOURCES_DATA.lead}
                </p>
              </div>
              <Button to={RESOURCES_DATA.ctaHref} variant="primary" size="sm" icon="arrow">
                {RESOURCES_DATA.ctaText}
              </Button>
            </div>

            {/* Resource Topics You Will Find Here */}
            <div style={{ marginBottom: '28px' }}>
              <span className="mono-tag" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '10px' }}>
                RESOURCE TOPICS YOU WILL FIND HERE:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {RESOURCES_DATA.topics.map((top, idx) => (
                  <span 
                    key={idx} 
                    className="mono-tag"
                    style={{ 
                      padding: '6px 14px', 
                      background: 'rgba(28, 117, 189, 0.06)', 
                      border: '1px solid rgba(28, 117, 189, 0.2)', 
                      borderRadius: '6px',
                      color: 'var(--brand-blue)',
                      fontSize: '0.8125rem',
                      fontWeight: 600
                    }}
                  >
                    • {top}
                  </span>
                ))}
              </div>
            </div>

            {/* Downloadable Resources Cards */}
            <div>
              <span className="mono-tag" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '14px' }}>
                DOWNLOADABLE RESOURCES:
              </span>
              <div className="resources-grid-list">
                {RESOURCES_DATA.downloadables.map((item, idx) => {
                  const isFeatured = idx === 0;
                  return (
                    <Link 
                      key={item.id} 
                      to="/contact" 
                      className={`resource-item-card ${isFeatured ? 'featured-resource-card' : ''}`}
                      aria-label={`Explore ${item.title}`}
                    >
                      <div className="resource-card-top">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <span className="resource-type mono-tag">{item.category}</span>
                          <span className="mono-tag" style={{ background: 'rgba(235, 100, 62, 0.1)', color: 'var(--brand-orange, #EB643E)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.6875rem', fontWeight: 700 }}>
                            Coming Soon
                          </span>
                          {isFeatured && <span className="featured-pill mono-tag">FEATURED GUIDE</span>}
                        </div>
                        <span className="resource-format mono-tag">
                          <span>{item.format}</span>
                        </span>
                      </div>

                      <h3 className="resource-title">{item.title}</h3>
                      <p className="resource-desc" style={{ marginBottom: 0 }}>{item.desc}</p>
                    </Link>
                  );
                })}
              </div>

              {/* Section Level CTA */}
              <div className="resources-section-cta">
                <Button to={RESOURCES_DATA.ctaHref} variant="primary" size="md" icon="arrow">
                  {RESOURCES_DATA.ctaText}
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
