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
              CORPORATE BRAND // ENTERPRISE SOFTWARE PRODUCTS
            </div>

            <h1 className="inner-hero-title">
              The Company Behind Intelligent Enterprise Software.
            </h1>

            <div className="about-subhead-badge mono-tag">
              Enterprise Software Products &bull; Innovation &bull; Business Technology
            </div>

            <p className="inner-hero-lead">
              Astrion Digital Private Limited is an enterprise software company focused on developing technology products that help businesses operate more efficiently, intelligently, and effectively — powered by our flagship platform, XENedion.
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
              <div className="mono-label section-tag">CORPORATE POSITIONING STATEMENT</div>
              <h2 className="narrative-heading">
                Astrion Digital provides the corporate foundation for intelligent enterprise software.
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
                  “It establishes Astrion as the company behind the product, without suggesting that it independently offers consulting, cybersecurity, web development, or other unrelated services.”
                </p>
                <span className="quote-author mono-tag">— Strategic Corporate Brand Positioning</span>
              </div>
            </div>

            {/* Right Column:  Key Proof Metrics */}
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
          <div className="why-positioning-block" style={{ marginTop: '48px' }}>
            <div className="why-header">
              <div className="mono-label" style={{ color: 'var(--brand-orange)', marginBottom: '8px' }}>
                STRATEGIC BRAND RATIONALE
              </div>
              <h3>
                Why This Corporate Positioning Works
              </h3>
            </div>
            <div className="why-cards-grid">
              <div className="why-card">
                <div className="why-num" style={{ color: 'var(--brand-blue)' }}>
                  01 // Software Product Company Focus
                </div>
                <h4 className="why-title">Clean Product Focus</h4>
                <p className="why-desc">
                  It establishes Astrion as the company behind the product, without suggesting that it independently offers consulting, cybersecurity, web development, or other unrelated services.
                </p>
              </div>
              <div className="why-card">
                <div className="why-num" style={{ color: 'var(--brand-orange)' }}>
                  02 // Scalable Multi-Product Future
                </div>
                <h4 className="why-title">Multi-Product Umbrella</h4>
                <p className="why-desc">
                  It also allows you to introduce additional software products under Astrion in the future without having to change the company’s identity or market positioning.
                </p>
              </div>
              <div className="why-card">
                <div className="why-num" style={{ color: '#10b981' }}>
                  03 // Dedicated Corporate Foundation
                </div>
                <h4 className="why-title">Enduring Corporate Backing</h4>
                <p className="why-desc">
                  Astrion Digital directly owns and develops XENedion, providing the corporate foundation, cloud infrastructure, and sustained vision for long-term customer success.
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
