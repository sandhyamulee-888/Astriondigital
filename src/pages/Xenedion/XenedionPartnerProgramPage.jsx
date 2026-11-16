import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  Boxes, 
  FileText, 
  Users, 
  DollarSign, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import Button from '../../components/common/Button/Button';
import './XenedionPage.css';
import '../About/AboutPage.css';

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

export default function XenedionPartnerProgramPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tiers = [
    {
      title: 'Certified Value-Added Resellers (VARs)',
      desc: 'Regional commercial partners providing localized consulting, licensing distribution, and frontline customer success.',
      badge: 'COMMERCIAL PARTNER'
    },
    {
      title: 'Global Systems Integrators (GSIs)',
      desc: 'Tier-1 enterprise advisory firms co-architecting multi-national XENedion deployments and custom domain extensions.',
      badge: 'INTEGRATION PARTNER'
    },
    {
      title: 'Independent Software Vendors (ISVs)',
      desc: 'Specialized SaaS and industrial IoT hardware providers building native certified plugins on the XENedion API Fabric.',
      badge: 'TECHNOLOGY ALLIANCE'
    }
  ];

  return (
    <div className="inner-page xenedion-partner-program-page">
      {/* Hero */}
      <section className="inner-hero-section">
        <div className="inner-hero-bg" aria-hidden="true">
          <img src="/solutions-bg.jpg" alt="" className="inner-hero-bg-img" />
          <div className="inner-hero-overlay"></div>
        </div>

        <div className="container inner-hero-container">
          <div className="inner-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            <Link to="/partners">PARTNERS</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">ERP PARTNER PROGRAM</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <Handshake size={14} />
              <span>ERP PARTNER PROGRAM // ASTRION DIGITAL</span>
            </div>

            <h1 className="inner-hero-title">
              ERP Partner Program: A Partnership That Creates Opportunities.
            </h1>

            <p className="inner-hero-lead">
              Partner with Astrion Digital to take XENedion ERP to businesses looking to improve their operational efficiency and business management capabilities.
            </p>

            <div className="partner-hero-extra-text">
              <p>
                We believe a strong partner ecosystem is essential to making enterprise technology accessible to more businesses.
              </p>
              <p>
                Our ERP Partner Program is designed to create mutually beneficial business opportunities through product enablement, sales support and implementation collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Program Content Section */}
      <section className="section">
        <div className="container">

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

          {/* Existing Content: Partner Tiers Grid (PRESERVED IN FULL) */}
          <div className="existing-allies-header">
            <div className="section-header-compact">
              <div className="mono-label section-tag">PARTNERSHIP TIERS</div>
              <h2 className="section-title-compact">Empowering partners with world-class enablement</h2>
            </div>
          </div>

          <div className="values-cards-grid" style={{ marginBottom: '48px' }}>
            {tiers.map((tier, idx) => (
              <div key={idx} className="value-item-card">
                <span className="mono-tag" style={{ color: 'var(--brand-blue)', fontWeight: 700, display: 'block', marginBottom: '10px' }}>
                  {tier.badge}
                </span>
                <h3 className="value-title">{tier.title}</h3>
                <p className="value-desc">{tier.desc}</p>
              </div>
            ))}
          </div>

          {/* Existing Content: Partner Benefits Banner (PRESERVED IN FULL) */}
          <div className="commitment-card">
            <div className="commitment-header">
              <div className="mono-label">
                <Award size={16} />
                <span>PARTNER ENABLEMENT &amp; CERTIFICATION</span>
              </div>
              <h3>Direct Access to Core Platform Engineers &amp; Sandbox APIs</h3>
            </div>
            <p className="commitment-text">
              Certified partners receive comprehensive architectural training, dedicated partner sandbox instances, co-marketing collateral, and tier-2 escalation support.
            </p>
            <div className="commitment-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Apply for Partner Certification
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
