import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Compass, 
  Target, 
  Users, 
  Handshake, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles,
  Zap,
  Lock,
  Globe,
  Building2
} from 'lucide-react';
import { ABOUT_ASTRION, VISION_MISSION, LEADERSHIP, PARTNERS } from '../../data/about';
import { APPROACH_PHASES } from '../../data/approach';
import Button from '../../components/common/Button/Button';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../components/common/Motion/ScrollReveal';
import './AboutPage.css';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      icon: <ShieldCheck size={22} />,
      title: 'Architectural Determinism',
      desc: 'We engineer zero-failure-tolerant systems where state transitions, data provenance, and automated workflows are mathematically verifiable.'
    },
    {
      icon: <Zap size={22} />,
      title: 'Outcome-Driven Speed',
      desc: 'Moving from boardroom strategy to production software with agile value stream mapping and continuous automated deployment gates.'
    },
    {
      icon: <Lock size={22} />,
      title: 'Zero-Trust by Default',
      desc: 'Security is not a perimeter patch—it is baked into every API contract, database schema, and microservice mesh from day one.'
    },
    {
      icon: <Globe size={22} />,
      title: 'Operational Sovereignty',
      desc: 'We build open, modular, multi-cloud platforms that eliminate vendor lock-in and keep complete control in our clients’ hands.'
    }
  ];

  return (
    <div className="inner-page about-main-page">
      {/* Top Hero Section */}
      <section className="inner-hero-section">
        <div className="inner-hero-bg" aria-hidden="true">
          <img src="/solutions-bg.jpg" alt="" className="inner-hero-bg-img" />
          <div className="inner-hero-overlay"></div>
        </div>

        <div className="container inner-hero-container">
          <div className="inner-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">ABOUT ASTRION DIGITAL</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              CORPORATE BRAND // ASTRION DIGITAL
            </div>

            <h1 className="inner-hero-title">
              The Company Behind Intelligent Enterprise Software.
            </h1>

            <div className="about-subhead-badge mono-tag">
              Enterprise Software Products &bull; Innovation &bull; Business Technology
            </div>

            <p className="inner-hero-lead">
              {ABOUT_ASTRION.lead}
            </p>

            <div className="inner-hero-actions">
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Schedule Strategic Briefing
              </Button>
              <Button to="/xenedion" variant="secondary" size="lg">
                Discover XENedion ERP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Corporate Positioning Statement */}
      <section className="section about-narrative-section">
        <div className="container">
          <div className="about-split-grid">
            {/* Left Column: Official Positioning Statement */}
            <div className="about-narrative-col">
              <div className="mono-label section-tag">CORPORATE POSITIONING STATEMENT</div>
              <h2 className="narrative-heading">
                Engineering intelligent technology products that help businesses operate with precision.
              </h2>
              
              <div className="corporate-statement-block">
                <p className="statement-lead-para">
                  {ABOUT_ASTRION.lead}
                </p>
                <p className="statement-flagship-para">
                  {ABOUT_ASTRION.flagshipStatement}
                </p>
                <div className="statement-foundation-callout">
                  <CheckCircle2 size={18} className="callout-icon" />
                  <span>{ABOUT_ASTRION.foundationStatement}</span>
                </div>
              </div>

              <div className="about-callout-quote">
                <p className="quote-text">
                  “Astrion Digital provides the corporate foundation for product development, innovation, growth, and long-term vision—establishing a sustainable platform ecosystem for modern industry.”
                </p>
                <span className="quote-author mono-tag">— Executive Leadership, Astrion Digital Private Limited</span>
              </div>
            </div>

            {/* Right Column: 4 Key Proof Metrics */}
            <div className="about-stats-col">
              <div className="stats-matrix-grid">
                {ABOUT_ASTRION.stats.map((stat, idx) => (
                  <div key={idx} className="stat-matrix-card">
                    <div className="stat-matrix-number mono-tag">{stat.num}</div>
                    <div className="stat-matrix-label mono-label">{stat.label}</div>
                    <p className="stat-matrix-desc">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Recommended Brand Architecture */}
      <section className="section brand-architecture-section section-alt">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">
              <Layers size={14} />
              <span>BRAND ARCHITECTURE</span>
            </div>
            <h2 className="section-title-compact">Recommended Brand Architecture</h2>
            <p className="section-desc-compact">
              Clear institutional distinction between parent company stewardship and dedicated product execution.
            </p>
          </div>

          <div className="brand-architecture-grid">
            {/* Parent Company Card */}
            <div className="brand-arch-card parent-arch-card">
              <div className="arch-card-top">
                <span className="mono-tag arch-entity-type">PARENT COMPANY / CORPORATE ENTITY</span>
                <span className="mono-tag arch-role-tag">GOVERNANCE &amp; IP</span>
              </div>
              <h3 className="arch-entity-heading">ASTRION DIGITAL</h3>
              <div className="arch-pillars-bar mono-tag">
                Product Ownership &bull; Strategy &bull; Innovation &bull; Growth
              </div>
              <p className="arch-card-summary">
                Astrion Digital Private Limited operates as an enterprise software product company. It provides the legal, strategic, capital, and technical foundation to own, incubate, and grow mission-critical platforms.
              </p>
              <ul className="arch-responsibilities-list">
                <li>
                  <CheckCircle2 size={15} />
                  <span><strong>Product Ownership:</strong> Full IP ownership, engineering governance, and architecture control.</span>
                </li>
                <li>
                  <CheckCircle2 size={15} />
                  <span><strong>Strategic Stewardship:</strong> Corporate roadmaps, capital allocation, and enterprise partnerships.</span>
                </li>
                <li>
                  <CheckCircle2 size={15} />
                  <span><strong>Continuous Innovation:</strong> Applied AI research, workflow automation, and distributed systems.</span>
                </li>
                <li>
                  <CheckCircle2 size={15} />
                  <span><strong>Long-Term Growth:</strong> Multi-product portfolio expansion without changing company identity.</span>
                </li>
              </ul>
            </div>

            {/* Flagship Product Card */}
            <div className="brand-arch-card flagship-arch-card">
              <div className="arch-card-top">
                <span className="mono-tag arch-entity-type orange">FLAGSHIP ENTERPRISE SOFTWARE PRODUCT</span>
                <span className="mono-tag arch-role-tag orange">OPERATIONAL PLATFORM</span>
              </div>
              <h3 className="arch-entity-heading">XENedion</h3>
              <div className="arch-pillars-bar mono-tag orange">
                &ldquo;One Platform. Your Entire Business.&rdquo;
              </div>
              <p className="arch-card-summary">
                An integrated enterprise resource planning (ERP) platform engineered to connect core business functions, streamline operations, and deliver complete operational visibility.
              </p>
              <ul className="arch-responsibilities-list">
                <li>
                  <CheckCircle2 size={15} className="orange-check" />
                  <span><strong>Core Platform Modules:</strong> CRM, Sales, Orders, Purchasing, Inventory, Warehouse, Finance, HR, Logistics, Analytics.</span>
                </li>
                <li>
                  <CheckCircle2 size={15} className="orange-check" />
                  <span><strong>Autonomous Intelligence:</strong> Embedded AI agent loops and real-time operational telemetry.</span>
                </li>
                <li>
                  <CheckCircle2 size={15} className="orange-check" />
                  <span><strong>Unified Data Model:</strong> Sub-second ledger transactions without batch synchronization friction.</span>
                </li>
                <li>
                  <CheckCircle2 size={15} className="orange-check" />
                  <span><strong>Enterprise Security:</strong> Field-level zero-trust RBAC and immutable cryptographic audit logging.</span>
                </li>
              </ul>

              <div className="arch-card-action">
                <Button to="/xenedion" variant="primary" size="md" icon="arrow">
                  Explore XENedion Platform
                </Button>
              </div>
            </div>
          </div>

          {/* Why This Positioning Works Subsection */}
          <div className="why-positioning-block">
            <div className="why-header">
              <span className="mono-label">STRATEGIC RATIONALE</span>
              <h3>Why This Positioning Works</h3>
            </div>
            <div className="why-cards-grid">
              {ABOUT_ASTRION.whyPositioningWorks.map((item, idx) => {
                const whyIcons = [<Building2 size={20} />, <Layers size={20} />, <ShieldCheck size={20} />];
                return (
                  <div key={item.id || idx} className="why-card">
                    <div className="why-icon-box">{whyIcons[idx] || <CheckCircle2 size={20} />}</div>
                    <h4 className="why-title">{item.title}</h4>
                    <p className="why-desc">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section about-values-section">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">GOVERNANCE &amp; PRINCIPLES</div>
            <h2 className="section-title-compact">The architectural tenets behind every software product we build.</h2>
            <p className="section-desc-compact">
              Every line of code, infrastructure mesh, and AI workflow we deploy adheres to strict engineering guardrails.
            </p>
          </div>

          <div className="values-cards-grid">
            {coreValues.map((val, idx) => (
              <div key={idx} className="value-item-card">
                <div className="value-icon-box">{val.icon}</div>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Navigation Explore Hub */}
      <section className="section about-subnav-section">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">ABOUT ASTRION SUB-SECTIONS</div>
            <h2 className="section-title-compact">Explore the full organizational architecture.</h2>
          </div>

          <div className="about-subpages-grid">
            <Link to="/about/vision-mission" className="about-subpage-card">
              <div className="subpage-card-top">
                <Compass size={20} className="subpage-icon" />
                <ArrowUpRight size={16} className="subpage-arrow" />
              </div>
              <h3 className="subpage-title">Vision &amp; Mission</h3>
              <p className="subpage-desc">The guiding principles driving our enterprise solutions and future roadmap.</p>
              <span className="mono-tag subpage-link-text">Read Principles →</span>
            </Link>

            <Link to="/about/approach" className="about-subpage-card">
              <div className="subpage-card-top">
                <Target size={20} className="subpage-icon" />
                <ArrowUpRight size={16} className="subpage-arrow" />
              </div>
              <h3 className="subpage-title">Our Approach</h3>
              <p className="subpage-desc">Four-phase transformation methodology: Discover, Design, Build, and Evolve.</p>
              <span className="mono-tag subpage-link-text">View Methodology →</span>
            </Link>

            <Link to="/about/leadership" className="about-subpage-card">
              <div className="subpage-card-top">
                <Users size={20} className="subpage-icon" />
                <ArrowUpRight size={16} className="subpage-arrow" />
              </div>
              <h3 className="subpage-title">Leadership Team</h3>
              <p className="subpage-desc">Executive technologists, systems architects, and industrial domain specialists.</p>
              <span className="mono-tag subpage-link-text">Meet Leadership →</span>
            </Link>

            <Link to="/about/partners" className="about-subpage-card">
              <div className="subpage-card-top">
                <Handshake size={20} className="subpage-icon" />
                <ArrowUpRight size={16} className="subpage-arrow" />
              </div>
              <h3 className="subpage-title">Strategic Partners</h3>
              <p className="subpage-desc">Global alliances with AWS, Azure, GCP, SAP, Snowflake, and HashiCorp.</p>
              <span className="mono-tag subpage-link-text">View Alliances →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Bar */}
      <section className="section about-cta-section">
        <div className="container">
          <div className="about-cta-banner">
            <div className="about-cta-text">
              <span className="mono-label">STRATEGIC ENGAGEMENTS</span>
              <h3>Ready to modernize your mission-critical core?</h3>
              <p>Schedule a confidential briefing directly with Astrion enterprise systems architects.</p>
            </div>
            <div className="about-cta-btn-wrap">
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
