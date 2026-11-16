import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Handshake, 
  TrendingUp, 
  Boxes, 
  FileText, 
  Users, 
  DollarSign, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { PARTNERS } from '../../data/about';
import Button from '../../components/common/Button/Button';
import './AboutPage.css';

const WHY_PARTNER = [
  {
    id: 'opportunity',
    title: 'Business Opportunity',
    desc: 'Participate in the growing enterprise software and ERP market.',
    icon: <TrendingUp size={22} />
  },
  {
    id: 'portfolio',
    title: 'Product Portfolio',
    desc: 'Offer an integrated ERP solution covering multiple business functions.',
    icon: <Boxes size={22} />
  },
  {
    id: 'sales-enablement',
    title: 'Sales Enablement',
    desc: 'Access product information, presentations and sales support.',
    icon: <FileText size={22} />
  },
  {
    id: 'implementation-support',
    title: 'Implementation Support',
    desc: 'Collaborate on customer onboarding, configuration and implementation.',
    icon: <Users size={22} />
  },
  {
    id: 'recurring-revenue',
    title: 'Recurring Revenue Potential',
    desc: 'Build a sustainable business through ERP licensing and customer relationships.',
    icon: <DollarSign size={22} />
  },
  {
    id: 'long-term-collaboration',
    title: 'Long-Term Collaboration',
    desc: 'Develop a mutually beneficial relationship with Astrion Digital.',
    icon: <ShieldCheck size={22} />
  }
];

const WHO_CAN_PARTNER = [
  'Regional sales and distribution partners.',
  'Industry-specific solution providers.',
  'Technology service providers.',
  'Independent business consultants.',
  'ERP implementation consultants.',
  'IT consulting companies.'
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Partner Enquiry',
    desc: 'Express your interest in joining our partner network.'
  },
  {
    step: '02',
    title: 'Evaluation',
    desc: 'We understand your business, market reach and capabilities.'
  },
  {
    step: '03',
    title: 'Partner Onboarding',
    desc: 'Get familiar with XENedion and the partner framework.'
  },
  {
    step: '04',
    title: 'Business Development',
    desc: 'Identify and engage prospective customers.'
  },
  {
    step: '05',
    title: 'Implementation & Growth',
    desc: 'Work with Astrion Digital to onboard customers and develop long-term relationships.'
  }
];

export default function PartnersPage() {
  const location = useLocation();
  const isDirectPartners = location.pathname === '/partners';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inner-page partners-page">
      {/* Hero */}
      <section className="inner-hero-section">
        <div className="inner-hero-bg" aria-hidden="true">
          <div className="inner-hero-overlay"></div>
        </div>

        <div className="container inner-hero-container">
          <div className="inner-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            {!isDirectPartners && (
              <>
                <Link to="/about">ABOUT</Link>
                <span className="breadcrumb-slash">/</span>
              </>
            )}
            <span className="breadcrumb-current">{isDirectPartners ? "PARTNERS" : "STRATEGIC PARTNERS"}</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <Handshake size={14} />
              <span>{isDirectPartners ? "PARTNERS // BUSINESS OPPORTUNITIES" : "ABOUT // STRATEGIC PARTNERS"}</span>
            </div>

            <h1 className="inner-hero-title">
              Build Business Opportunities. Grow With Astrion Digital.
            </h1>

            <p className="inner-hero-lead">
              We believe a strong partner ecosystem is essential to making enterprise technology accessible to more businesses.
            </p>

            <div className="partner-hero-extra-text">
              <p>
                Astrion Digital welcomes technology consultants, ERP implementation professionals, business advisors and organisations interested in expanding their service portfolios through XENedion.
              </p>
              <p>
                Our ERP Partner Program is designed to create mutually beneficial business opportunities through product enablement, sales support and implementation collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Partners Content Section */}
      <section className="section partners-content-section">
        <div className="container">

          {/* Section: ERP Partner Program Overview */}
          <div className="partner-program-overview-box">
            <span className="mono-label">ERP PARTNER PROGRAM</span>
            <h2>A Partnership That Creates Opportunities.</h2>
            <p>
              Partner with Astrion Digital to take XENedion ERP to businesses looking to improve their operational efficiency and business management capabilities.
            </p>
          </div>

          {/* Section: Why Partner With Astrion Digital? */}
          <div className="partner-section-header">
            <span className="mono-label partner-section-tag">VALUE &amp; ADVANTAGES</span>
            <h2 className="partner-section-title">Why Partner With Astrion Digital?</h2>
            <p className="partner-section-subhead">
              Key business and technology benefits of collaborating with our enterprise ecosystem.
            </p>
          </div>

          <div className="why-partner-grid">
            {WHY_PARTNER.map((item) => (
              <div key={item.id} className="why-partner-card">
                <div className="why-partner-icon-box">
                  {item.icon}
                </div>
                <h3 className="why-partner-title">{item.title}</h3>
                <p className="why-partner-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Section: Who Can Become a Partner? */}
          <div className="partner-section-header">
            <span className="mono-label partner-section-tag">PARTNER PROFILES</span>
            <h2 className="partner-section-title">Who Can Become a Partner?</h2>
            <p className="partner-section-subhead">
              We welcome enquiries from:
            </p>
          </div>

          <div className="who-partner-grid">
            {WHO_CAN_PARTNER.map((profile, idx) => (
              <div key={idx} className="who-partner-card">
                <CheckCircle2 size={20} className="who-partner-icon" />
                <span className="who-partner-text">{profile}</span>
              </div>
            ))}
          </div>

          {/* Section: How the Partnership Works */}
          <div className="partner-section-header">
            <span className="mono-label partner-section-tag">PARTNERSHIP LIFECYCLE</span>
            <h2 className="partner-section-title">How the Partnership Works</h2>
            <p className="partner-section-subhead">
              A structured, step-by-step onboarding journey to shared growth.
            </p>
          </div>

          <div className="how-it-works-grid">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.title} className="how-step-card">
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA: Become a XENedion ERP Partner */}
          <div className="partner-program-cta-box">
            <div className="partner-cta-content">
              <span className="mono-label partner-cta-tag">GET STARTED</span>
              <h2 className="partner-cta-heading">Become a XENedion ERP Partner</h2>
              <p className="partner-cta-desc">
                Partner with Astrion Digital to take XENedion ERP to businesses looking to improve their operational efficiency and business management capabilities.
              </p>
            </div>
            <div className="partner-cta-action">
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Become a XENedion ERP Partner
              </Button>
            </div>
          </div>

          {/* ========================================================
              EXISTING CONTENT (PRESERVED IN FULL)
              ======================================================== */}
          <div className="existing-allies-header">
            <div className="partner-section-header">
              <span className="mono-label partner-section-tag">GLOBAL ALLIANCES</span>
              <h2 className="partner-section-title">Strategic Partners: Global Infrastructure &amp; Implementation Allies</h2>
              <p className="partner-section-subhead">
                Collaborating with leading cloud infrastructure and regional implementation partners to deliver reliable software deployment worldwide.
              </p>
            </div>
          </div>

          <div className="partners-deep-grid">
            {PARTNERS.map((partner) => (
              <div key={partner.id} className="partner-deep-card">
                <div className="partner-card-header-row">
                  <span className="partner-tier-badge mono-label">{partner.tier}</span>
                  <span className="partner-cat-badge mono-tag">{partner.category}</span>
                </div>

                <h2 className="partner-title">{partner.name}</h2>
                <p className="partner-description">{partner.desc}</p>

                <div className="partner-technologies-box">
                  <span className="mono-tag tech-box-label">SUPPORTED CAPABILITIES &amp; CONNECTORS</span>
                  <div className="partner-chips-wrap">
                    {partner.tech.map((t, idx) => (
                      <span key={idx} className="partner-tech-pill mono-tag">
                        <CheckCircle2 size={12} className="tech-check-icon" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ecosystem Commitment */}
          <div className="ecosystem-banner">
            <div className="ecosystem-text">
              <span className="mono-label">SOVEREIGNTY &amp; OPEN STANDARDS</span>
              <h3>Open Standards &amp; Architecture Portability</h3>
              <p>
                Our integration architecture relies strictly on industry-standard protocols—OpenAPI, gRPC, OpenTofu, Delta Lake, and Kubernetes—ensuring your enterprise maintains comprehensive operational portability across all infrastructure environments.
              </p>
            </div>
            <div className="ecosystem-actions">
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Discuss Ecosystem Integration
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
