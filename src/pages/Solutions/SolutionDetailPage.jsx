import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Database,
  ArrowUpRight
} from 'lucide-react';
import { SOLUTIONS } from '../../data/solutions';
import Button from '../../components/common/Button/Button';
import ScrollReveal from '../../components/common/Motion/ScrollReveal';
import './SolutionDetailPage.css';

export default function SolutionDetailPage({ slugOverride }) {
  const params = useParams();
  const slug = slugOverride || params.slug || params.id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Match the solution by ID or aliasId
  const solution = SOLUTIONS.find((s) => s.id === slug || s.aliasId === slug);

  if (!solution) {
    // If not found, fallback to solutions index
    return <Navigate to="/solutions" replace />;
  }

  // Find index for next/prev navigation
  const currentIndex = SOLUTIONS.findIndex((s) => s.id === solution.id);
  const prevSolution = currentIndex > 0 ? SOLUTIONS[currentIndex - 1] : SOLUTIONS[SOLUTIONS.length - 1];
  const nextSolution = currentIndex < SOLUTIONS.length - 1 ? SOLUTIONS[currentIndex + 1] : SOLUTIONS[0];

  return (
    <div className="solution-detail-page">
      {/* Detail Page Hero Banner */}
      <div className="solution-hero-banner">
        <div className="solution-hero-bg" aria-hidden="true">
          <img src="/solutions-bg.jpg" alt="" className="solution-hero-bg-img" />
          <div className="solution-hero-overlay"></div>
        </div>

        <div className="container solution-hero-container">
          {/* Breadcrumb Hierarchy */}
          <div className="solution-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            <Link to="/solutions">SOLUTIONS</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">{solution.title.toUpperCase()}</span>
          </div>

          <div className="solution-hero-content">
            <div className="mono-label solution-hero-badge">
              <span className="badge-cat">{solution.categoryLabel}</span>
              <span className="badge-sep">•</span>
              <span className="badge-tag">{solution.title}</span>
            </div>

            <h1 className="solution-page-title">
              {solution.headline || solution.title}
            </h1>

            <p className="solution-page-lead">
              {solution.shortDesc}
            </p>

            <div className="solution-hero-actions">
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Request a Demo
              </Button>
              <Button to="/solutions" variant="outline" size="lg">
                View All Capabilities
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Solution Content Container */}
      <div className="section solution-content-section">
        <div className="container solution-layout-grid">
          {/* Left Column: Deep Dive & Deliverables */}
          <div className="solution-main-col">
            {/* Overview Section */}
            <ScrollReveal yOffset={20}>
              <div className="solution-block">
                <div className="mono-label block-label">CAPABILITY OVERVIEW</div>
                <h2 className="block-title">How This Solves Your Core Operational Problems</h2>
                <p className="block-text-lead">{solution.overview}</p>
                {solution.problemSolved && (
                  <div className="solution-arch-highlight">
                    <span className="arch-label mono-tag">THE PROBLEM WE SOLVE</span>
                    <p className="arch-desc">{solution.problemSolved}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Scope of Deliverables / Services */}
            <ScrollReveal yOffset={20} delay={0.1}>
              <div className="solution-block">
                <div className="mono-label block-label">KEY BENEFITS &amp; FEATURES</div>
                <h2 className="block-title">What We Deliver for Your Business</h2>
                <div className="solution-services-grid">
                  {solution.services.map((item, index) => (
                    <div key={index} className="solution-service-card">
                      <div className="service-card-body">
                        <div className="service-card-icon-title">
                          <CheckCircle2 size={16} className="service-card-check" />
                          <h3 className="service-card-title">{item}</h3>
                        </div>
                        <p className="service-card-text">
                          Configured to fit your daily workflows with zero disruption to active business.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Enterprise Impact / Outcomes */}
            <ScrollReveal yOffset={20} delay={0.15}>
              <div className="solution-block solution-impact-block">
                <div className="mono-label block-label">MEASURABLE RESULTS</div>
                <h2 className="block-title">The Real Business Impact</h2>
                <div className="solution-metric-banner">
                  <div className="metric-banner-icon">
                    <Sparkles size={24} />
                  </div>
                  <div className="metric-banner-text">
                    <span className="metric-highlight-value">{solution.metrics}</span>
                    <span className="metric-highlight-label">Proven results across growing enterprises</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Sidebar: Contextual Metadata & Navigation */}
          <aside className="solution-sidebar">
            <div className="solution-sidebar-sticky">
              {/* Solution Summary Card */}
              <div className="solution-sidebar-card">
                <h3 className="sidebar-card-title">Solution Overview</h3>
                <div className="sidebar-meta-list">
                  <div className="sidebar-meta-item">
                    <span className="meta-label mono-tag">CATEGORY</span>
                    <span className="meta-value">{solution.categoryLabel}</span>
                  </div>
                  <div className="sidebar-meta-item">
                    <span className="meta-label mono-tag">DEPLOYMENT MODEL</span>
                    <span className="meta-value">On-Premises / Private Cloud / Hybrid</span>
                  </div>
                  <div className="sidebar-meta-item">
                    <span className="meta-label mono-tag">GOVERNANCE LEVEL</span>
                    <span className="meta-value">Zero-Trust Architecture Controls [Pending Review]</span>
                  </div>
                  <div className="sidebar-meta-item">
                    <span className="meta-label mono-tag">ENGAGEMENT MODEL</span>
                    <span className="meta-value">Dedicated Core Team &amp; Architecture Guild</span>
                  </div>
                </div>

                <div className="sidebar-card-action">
                  <Button to="/contact" variant="primary" size="md" fullWidth icon="arrow">
                    Schedule Consultation
                  </Button>
                </div>
              </div>

              {/* Quick Navigation to Other Solutions */}
              <div className="solution-sidebar-card sidebar-nav-card">
                <h4 className="sidebar-nav-title mono-tag">ALL SOLUTIONS</h4>
                <div className="sidebar-nav-links">
                  {SOLUTIONS.map((s) => (
                    <Link
                      key={s.id}
                      to={`/solutions/${s.id}`}
                      className={`sidebar-nav-item ${s.id === solution.id ? 'active' : ''}`}
                    >
                      <span className="sidebar-nav-dot"></span>
                      <span className="sidebar-nav-name">{s.title}</span>
                      {s.id === solution.id && <span className="sidebar-nav-active-tag mono-tag">ACTIVE</span>}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Prev / Next Pagination Bar */}
      <div className="solution-pagination-bar">
        <div className="container solution-pagination-container">
          <Link to={`/solutions/${prevSolution.id}`} className="pagination-btn prev">
            <ArrowLeft size={16} />
            <div className="pagination-text">
              <span className="pagination-direction mono-tag">PREVIOUS SOLUTION</span>
              <span className="pagination-name">{prevSolution.title}</span>
            </div>
          </Link>

          <Link to="/solutions" className="pagination-hub-link mono-tag">
            <Layers size={14} />
            <span>SOLUTIONS DIRECTORY</span>
          </Link>

          <Link to={`/solutions/${nextSolution.id}`} className="pagination-btn next">
            <div className="pagination-text">
              <span className="pagination-direction mono-tag">NEXT SOLUTION</span>
              <span className="pagination-name">{nextSolution.title}</span>
            </div>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
