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
  Zap, 
  Lock, 
  Globe, 
  Building2,
  Cpu,
  Layers2
} from 'lucide-react';
import { ABOUT_ASTRION } from '../../data/about';
import Button from '../../components/common/Button/Button';
import './AboutPage.css';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              ENTERPRISE SOFTWARE FOR GROWING BUSINESSES
            </div>

            <h1 className="inner-hero-title">
              One Platform to Connect, Automate & Run Your Entire Business.
            </h1>

            <div className="about-subhead-badge mono-tag">
              Enterprise Software Products &bull; Innovation &bull; Business Technology
            </div>

            <p className="inner-hero-lead">
              Astrion Digital builds modern software that brings your finance, inventory, sales, and operations together in real time — helping growing businesses replace messy spreadsheets and disconnected tools with one easy-to-use system.
            </p>

            <div className="inner-hero-actions">
              <Button to="/xenedion" variant="primary" size="lg" icon="arrow">
                Explore XENedion ERP
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Corporate Positioning Statement */}
      <section className="section about-narrative-section">
        <div className="container">
          <div className="about-split-grid">
            {/* Left Column: Core Positioning Statement */}
            <div className="about-narrative-col">
              <div className="mono-label section-tag">WHO WE ARE &amp; WHAT WE BUILD</div>
              <h2 className="narrative-heading">
                We build software that connects your entire business — so your teams can move faster and work smarter.
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
                  “We establish Astrion as the company behind intelligent software products—giving growing businesses one dependable platform to unite their entire enterprise.”
                </p>
                <span className="quote-author mono-tag">— Astrion Digital Corporate Leadership</span>
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

      {/* Section 2: Key Operational Pillars */}
      <section className="section about-values-section section-alt">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">WHY BUSINESSES CHOOSE US</div>
            <h2 className="section-title-compact">Why Growing Companies Run on Astrion</h2>
            <p className="section-desc-compact">
              Purpose-built software. Real results. Zero complexity.
            </p>
          </div>

          <div className="values-cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {ABOUT_ASTRION.keyPillars.map((pillar, idx) => {
              const icons = [
                <Layers2 key="1" size={24} />,
                <ShieldCheck key="2" size={24} />,
                <Zap key="3" size={24} />,
                <Building2 key="4" size={24} />
              ];
              return (
                <div key={pillar.id || idx} className="value-item-card">
                  <div className="value-icon-box">{icons[idx % icons.length]}</div>
                  <h3 className="value-title">{pillar.title}</h3>
                  <p className="value-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Recommended Brand Architecture */}
      <section className="section brand-architecture-section">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">
              <Layers size={14} />
              <span>THE COMPANY &amp; THE PRODUCT</span>
            </div>
            <h2 className="section-title-compact">Astrion Digital Builds. XENedion Runs Your Business.</h2>
            <p className="section-desc-compact">
              Astrion Digital is the software company. XENedion is the product your team will use every day — an all-in-one ERP built to connect every part of your business.
            </p>
          </div>

          <div className="brand-architecture-grid">
            {/* The Company Card */}
            <div className="brand-arch-card parent-arch-card">
              <div className="arch-card-top">
                <span className="mono-tag arch-entity-type">THE COMPANY BEHIND THE PLATFORM</span>
                <span className="mono-tag arch-role-tag">ENTERPRISE SOFTWARE</span>
              </div>
              <h3 className="arch-entity-heading">ASTRION DIGITAL</h3>
              <div className="arch-pillars-bar mono-tag">
                Dedicated Engineering &bull; Reliable Cloud &bull; Continuous Updates &bull; Expert Support
              </div>
              <p className="arch-card-summary">
                Astrion Digital Private Limited is the enterprise software product company that designs, develops, and maintains our technology platforms. We provide continuous updates, reliable infrastructure, and sustained product backing.
              </p>
              <ul className="arch-responsibilities-list">
                <li>
                  <CheckCircle2 size={15} />
                  <span><strong>Product Ownership:</strong> Direct development, proprietary IP, and automated cloud testing.</span>
                </li>
                <li>
                  <CheckCircle2 size={15} />
                  <span><strong>Corporate Strategy:</strong> Long-term governance, sustained capital backing, and strategic roadmap execution.</span>
                </li>
                <li>
                  <CheckCircle2 size={15} />
                  <span><strong>Continuous Innovation:</strong> Practical AI automation, smart workflows, and performance optimization.</span>
                </li>
                <li>
                  <CheckCircle2 size={15} />
                  <span><strong>Enterprise Growth:</strong> Scalable foundation built to introduce future software products without altering company identity.</span>
                </li>
              </ul>
            </div>

            {/* The ERP Product Card */}
            <div className="brand-arch-card flagship-arch-card">
              <div className="arch-card-top">
                <span className="mono-tag arch-entity-type orange">FLAGSHIP ENTERPRISE SOFTWARE PRODUCT</span>
                <span className="mono-tag arch-role-tag orange">WHAT CLIENTS USE</span>
              </div>
              <h3 className="arch-entity-heading">XENedion</h3>
              <div className="arch-pillars-bar mono-tag orange">
                &ldquo;One Platform. Your Entire Business.&rdquo;
              </div>
              <p className="arch-card-summary">
                XENedion is the integrated enterprise resource planning platform designed to connect core business functions, streamline operations, and provide better visibility across the organization.
              </p>
              <ul className="arch-responsibilities-list">
                <li>
                  <CheckCircle2 size={15} className="orange-check" />
                  <span><strong>Integrated Modules:</strong> Finance, Inventory, Purchasing, Sales &amp; CRM, HR &amp; Payroll, and Operations.</span>
                </li>
                <li>
                  <CheckCircle2 size={15} className="orange-check" />
                  <span><strong>Embedded AI:</strong> Automatic invoice matching, reorder alerts, and smart shipment tracking.</span>
                </li>
                <li>
                  <CheckCircle2 size={15} className="orange-check" />
                  <span><strong>Real-Time Data:</strong> One shared database ensuring your inventory and financial ledgers stay 100% in sync.</span>
                </li>
                <li>
                  <CheckCircle2 size={15} className="orange-check" />
                  <span><strong>Fast Deployment:</strong> Up and running in weeks with ready-to-use templates tailored to your industry.</span>
                </li>
              </ul>

              <div className="arch-card-action">
                <Button to="/xenedion" variant="primary" size="md" icon="arrow">
                  Explore XENedion ERP
                </Button>
              </div>
            </div>
          </div>

          {/* Why This Positioning Works Card Block */}
          <div style={{ marginTop: '48px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '32px' }}>
            <div className="mono-label" style={{ color: '#ff6b35', marginBottom: '8px' }}>
              WHAT THIS MEANS FOR YOU
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>
              3 Things You Can Expect From Astrion Digital
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{ color: '#00d2ff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '8px' }}>
                  01 // A Focused Software Product
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  We are not a general IT agency or a consulting firm. We build one powerful product — XENedion — and make it the best ERP for growing businesses.
                </p>
              </div>
              <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{ color: '#ff6b35', fontWeight: 600, fontSize: '0.95rem', marginBottom: '8px' }}>
                  02 // Always Improving, Always Available
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  It allows us to introduce additional software products under Astrion in the future without having to change the company’s core identity or market messaging.
                </p>
              </div>
              <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{ color: '#10b981', fontWeight: 600, fontSize: '0.95rem', marginBottom: '8px' }}>
                  03 // A Long-Term Partner, Not a Vendor
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  Astrion owns, builds, and supports XENedion end-to-end. That means one team responsible for your success — from day one implementation to ongoing growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Navigation Explore Hub */}
      <section className="section about-subnav-section section-alt">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">LEARN MORE ABOUT US</div>
            <h2 className="section-title-compact">Explore Astrion Digital</h2>
          </div>

          <div className="about-subpages-grid">
            <Link to="/about/vision-mission" className="about-subpage-card">
              <div className="subpage-card-top">
                <Compass size={20} className="subpage-icon" />
                <ArrowUpRight size={16} className="subpage-arrow" />
              </div>
              <h3 className="subpage-title">Mission &amp; Values</h3>
              <p className="subpage-desc">Our mission to replace messy, disconnected tools with clean, intelligent software.</p>
              <span className="mono-tag subpage-link-text">Read Mission &amp; Values →</span>
            </Link>

            <Link to="/about/approach" className="about-subpage-card">
              <div className="subpage-card-top">
                <Target size={20} className="subpage-icon" />
                <ArrowUpRight size={16} className="subpage-arrow" />
              </div>
              <h3 className="subpage-title">How We Work</h3>
              <p className="subpage-desc">Three simple steps: Understand the Bottlenecks, Deploy the Platform, and Evolve.</p>
              <span className="mono-tag subpage-link-text">View Our Approach →</span>
            </Link>

            <Link to="/about/leadership" className="about-subpage-card">
              <div className="subpage-card-top">
                <Users size={20} className="subpage-icon" />
                <ArrowUpRight size={16} className="subpage-arrow" />
              </div>
              <h3 className="subpage-title">Leadership</h3>
              <p className="subpage-desc">Experienced software architects and operational leaders committed to your success.</p>
              <span className="mono-tag subpage-link-text">Meet Our Leaders →</span>
            </Link>

            <Link to="/about/partners" className="about-subpage-card">
              <div className="subpage-card-top">
                <Handshake size={20} className="subpage-icon" />
                <ArrowUpRight size={16} className="subpage-arrow" />
              </div>
              <h3 className="subpage-title">Strategic Partners</h3>
              <p className="subpage-desc">Collaborating with leading cloud infrastructure and regional implementation partners.</p>
              <span className="mono-tag subpage-link-text">View Strategic Partners →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Bar */}
      <section className="section about-cta-section">
        <div className="container">
          <div className="about-cta-banner">
            <div className="about-cta-text">
              <span className="mono-label">READY TO GET STARTED?</span>
              <h3>Ready to simplify how your business operates?</h3>
              <p>Schedule a quick 15-minute walkthrough to see how Astrion Digital and XENedion can help your team.</p>
            </div>
            <div className="about-cta-btn-wrap">
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
