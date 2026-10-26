import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FileText, 
  Layers, 
  ArrowUpRight, 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Terminal,
  Cpu,
  Database
} from 'lucide-react';
import { INSIGHTS } from '../../data/insights';
import { CASE_STUDIES } from '../../data/caseStudies';
import Button from '../../components/common/Button/Button';
import './InsightsPage.css';

export default function InsightsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inner-page insights-main-page">
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
            <span className="breadcrumb-current">INSIGHTS</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              INSIGHTS // PRACTICAL GUIDES &amp; CASE STUDIES
            </div>

            <h1 className="inner-hero-title">
              Practical Guides, ERP Insights &amp; Customer Stories
            </h1>

            <p className="inner-hero-lead">
              Learn how growing businesses modernize their operations with XENedion ERP. Explore practical guides, real customer success stories, and expert resources on finance, inventory, and business automation.
            </p>

            <div className="insights-quick-nav">
              <Link to="/insights/blog" className="quick-nav-pill mono-tag">
                <Terminal size={14} />
                <span>ARTICLES &amp; UPDATES</span>
              </Link>
              <Link to="/insights/case-studies" className="quick-nav-pill mono-tag">
                <FileText size={14} />
                <span>CUSTOMER SUCCESS STORIES</span>
              </Link>
              <Link to="/insights/resources" className="quick-nav-pill mono-tag">
                <BookOpen size={14} />
                <span>GUIDES &amp; WHITEPAPERS</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Insights Content Grid */}
      <section className="section insights-hub-section">
        <div className="container">
          
          {/* Section 1: Featured Architecture Articles */}
          <div className="insights-section-header">
            <div>
              <span className="mono-tag section-eyebrow">LATEST RESOURCES</span>
              <h2 className="section-title">ERP Guides, Best Practices &amp; Articles</h2>
            </div>
            <Link to="/insights/blog" className="section-view-all mono-tag">
              <span>VIEW ALL ARTICLES</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="insights-cards-grid">
            {INSIGHTS.map((item) => (
              <div key={item.id} className="insight-card">
                <div className="insight-card-meta">
                  <span className="insight-category-badge mono-tag">{item.category}</span>
                </div>

                <span className="insight-label mono-tag">{item.label}</span>
                <h3 className="insight-card-title">
                  <Link to={item.link}>{item.title}</Link>
                </h3>
                <p className="insight-card-excerpt">{item.excerpt}</p>

                <div className="insight-card-footer">
                  <span className="insight-date mono-tag">{item.date}</span>
                  <Link to={item.link} className="insight-read-btn">
                    <span>Read Analysis</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Section 2: Transformation Case Studies Highlight */}
          <div className="insights-section-header case-studies-margin">
            <div>
              <span className="mono-tag section-eyebrow">CUSTOMER SUCCESS STORIES</span>
              <h2 className="section-title">Real Results from Real Businesses</h2>
            </div>
            <Link to="/insights/case-studies" className="section-view-all mono-tag">
              <span>VIEW ALL STORIES</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="featured-case-study-hero">
            {CASE_STUDIES.filter(cs => cs.featured).map((cs) => (
              <div key={cs.id} className="case-study-featured-card">
                <div className="case-study-badge-row">
                  <span className="mono-tag cs-badge">{cs.tag}</span>
                  <span className="mono-tag cs-industry">{cs.industry}</span>
                </div>
                <h3 className="case-study-hero-title">{cs.title}</h3>
                <p className="case-study-hero-desc">{cs.description}</p>
                
                <div className="case-study-deliverables">
                  <span className="mono-tag deliverables-label">CORE DELIVERABLES:</span>
                  <div className="deliverables-grid">
                    {cs.deliverables.map((deliv, idx) => (
                      <div key={idx} className="deliverable-item">
                        <CheckCircle2 size={14} className="deliv-check" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="case-study-tech-row">
                  <div className="tech-tags">
                    {cs.technologies.map((t, idx) => (
                      <span key={idx} className="tech-tag mono-tag">{t}</span>
                    ))}
                  </div>
                  <Button to="/insights/case-studies" variant="primary" size="sm" icon="arrow">
                    Read Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Section 3: Architecture Playbooks & Downloads */}
          <div className="resources-banner-box">
            <div className="resources-banner-content">
              <span className="mono-tag resources-eyebrow">FREE DOWNLOADS</span>
              <h3>Get Free Implementation Checklists &amp; Migration Guides</h3>
              <p>
                Download step-by-step checklists, ROI calculators, and plain-English guides for moving your finance, inventory, and operations into XENedion — without disrupting your day-to-day business.
              </p>
              <div className="resources-actions">
                <Button to="/insights/resources" variant="primary" size="md" icon="arrow">
                  Browse Free Resources
                </Button>
              </div>
            </div>
            <div className="resources-graphic" aria-hidden="true">
              <div className="graphic-blueprint-card">
                <BookOpen size={20} className="blueprint-icon" />
                <div className="blueprint-title mono-tag">ERP MIGRATION CHECKLIST</div>
                <div className="blueprint-bar"></div>
                <div className="blueprint-bar short"></div>
              </div>
              <div className="graphic-blueprint-card offset">
                <Database size={20} className="blueprint-icon" />
                <div className="blueprint-title mono-tag">ROI CALCULATOR GUIDE</div>
                <div className="blueprint-bar"></div>
                <div className="blueprint-bar medium"></div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
