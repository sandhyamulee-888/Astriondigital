import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Factory, 
  Truck, 
  ShoppingCart, 
  Car, 
  Globe,
  Shirt,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Network,
  Eye,
  TrendingUp,
  Zap
} from 'lucide-react';
import { INDUSTRIES, INDUSTRIES_PAGE_HEADER } from '../../data/industries';
import Button from '../../components/common/Button/Button';
import './IndustryDetailPage.css';

const WHY_XENEDION_BENEFITS = [
  {
    title: 'Integrated Operations',
    desc: 'Reduce information silos across departments and bring essential business functions together.',
    icon: <Network size={20} />
  },
  {
    title: 'Improved Control',
    desc: 'Establish structured workflows, reliable operational processes, and departmental accountability.',
    icon: <ShieldCheck size={20} />
  },
  {
    title: 'Better Visibility',
    desc: 'Access accurate business information and operational reporting across all functional areas in real time.',
    icon: <Eye size={20} />
  },
  {
    title: 'Increased Productivity',
    desc: 'Reduce repetitive manual work, duplicate data entry, and spreadsheet-based tracking.',
    icon: <Zap size={20} />
  },
  {
    title: 'Scalable Platform',
    desc: 'Support evolving business requirements, new facilities, expanding teams, and operational growth.',
    icon: <TrendingUp size={20} />
  }
];

export default function IndustryDetailPage({ slugOverride }) {
  const params = useParams();
  const slug = slugOverride || params.slug || params.id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const industry = INDUSTRIES.find((i) => i.id === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  // Next / Prev navigation
  const currentIndex = INDUSTRIES.findIndex((i) => i.id === industry.id);
  const prevIndustry = currentIndex > 0 ? INDUSTRIES[currentIndex - 1] : INDUSTRIES[INDUSTRIES.length - 1];
  const nextIndustry = currentIndex < INDUSTRIES.length - 1 ? INDUSTRIES[currentIndex + 1] : INDUSTRIES[0];

  const getIndustryIcon = (id) => {
    switch (id) {
      case 'manufacturing': return <Factory size={22} />;
      case 'distribution': return <Truck size={22} />;
      case 'retail': return <ShoppingCart size={22} />;
      case 'garments': return <Shirt size={22} />;
      case 'automotive': return <Car size={22} />;
      default: return <Globe size={22} />;
    }
  };

  return (
    <div className="inner-page industry-detail-page">
      {/* Hero */}
      <section className="inner-hero-section industry-detail-hero">
        <div className="inner-hero-bg" aria-hidden="true">
          <img src="/solutions-bg.jpg" alt="" className="inner-hero-bg-img" />
          <div className="inner-hero-overlay"></div>
        </div>

        <div className="container inner-hero-container">
          <div className="inner-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            <Link to="/industries">INDUSTRIES</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">{industry.name.toUpperCase()}</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              INDUSTRIES // {industry.name.toUpperCase()} SOLUTIONS
            </div>

            <h1 className="inner-hero-title">
              {industry.headline}
            </h1>

            <div className="inner-hero-lead-wrap" style={{ maxWidth: '820px' }}>
              {(industry.paragraphs || [industry.description]).map((para, idx) => (
                <p 
                  key={idx} 
                  className="inner-hero-lead" 
                  style={{ 
                    marginBottom: idx < (industry.paragraphs?.length || 1) - 1 ? '16px' : '0',
                    lineHeight: '1.68'
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="inner-hero-actions" style={{ marginTop: '24px' }}>
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Request a Product Demonstration
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section industry-main-section">
        <div className="container industry-layout-container">
          
          <div className="industry-grid-layout">
            
            {/* Primary Column */}
            <div className="industry-primary-col">
              
              {/* Overview & Operating Context */}
              <div className="industry-content-block" style={{ borderLeft: '4px solid var(--brand-blue)' }}>
                <div className="block-header">
                  <span className="mono-tag block-eyebrow">INTEGRATED OPERATING ENVIRONMENT</span>
                  <h2 className="block-title">Managing {industry.name} Operations with XENedion</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {(industry.paragraphs || [industry.description]).map((para, idx) => (
                    <p key={idx} style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: '1.7', margin: 0 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Key Business Areas (from Reference Document) */}
              <div className="industry-content-block">
                <div className="block-header">
                  <span className="mono-tag block-eyebrow">CORE FUNCTIONAL SCOPE</span>
                  <h2 className="block-title">Key Business Areas Covered in {industry.name}</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginTop: '8px' }}>
                    XENedion brings essential operational functions together into a unified ERP environment, enabling {industry.name.toLowerCase()} businesses to manage operations with greater control and visibility:
                  </p>
                </div>
                
                <div className="outcomes-checklist-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  {(industry.keyBusinessAreas || industry.outcomes).map((area, idx) => (
                    <div key={idx} className="outcome-check-card" style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '18px 20px',
                      background: 'var(--bg-secondary, #F8FAFC)',
                      border: '1px solid var(--border-light, #E2E8F0)',
                      borderRadius: '8px'
                    }}>
                      <CheckCircle2 size={20} style={{ color: 'var(--brand-blue, #1c75bd)', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: 1.4 }}>
                          {area}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why XENedion Section */}
              <div className="industry-content-block">
                <div className="block-header">
                  <span className="mono-tag block-eyebrow">PLATFORM ADVANTAGES</span>
                  <h2 className="block-title">Why XENedion for {industry.name}</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginTop: '8px' }}>
                    Deliver measurable operational control and long-term business value:
                  </p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
                  {WHY_XENEDION_BENEFITS.map((benefit, idx) => (
                    <div key={idx} style={{
                      padding: '20px',
                      background: '#FFFFFF',
                      border: '1px solid var(--border-medium, #CBD5E1)',
                      borderRadius: '8px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                    }}>
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '6px',
                        background: 'rgba(28, 117, 189, 0.08)',
                        color: 'var(--brand-blue, #1c75bd)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '14px'
                      }}>
                        {benefit.icon}
                      </div>
                      <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 6px' }}>
                        {benefit.title}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                        {benefit.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Banner */}
              <div style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                color: '#FFFFFF',
                padding: '40px 36px',
                borderRadius: '12px',
                boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)'
              }}>
                <span className="mono-label" style={{ color: '#FF8A50', fontSize: '0.75rem', display: 'block', marginBottom: '8px' }}>
                  TRANSFORM YOUR OPERATIONS
                </span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#FFFFFF', margin: '0 0 12px' }}>
                  Discover how XENedion can transform your business operations.
                </h2>
                <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.6, maxWidth: '640px', marginBottom: '24px' }}>
                  Move beyond disconnected applications, spreadsheets and manual processes. Talk to our team to see XENedion ERP configured for {industry.name.toLowerCase()} operations.
                </p>
                <div>
                  <Button to="/contact" variant="primary" size="lg" icon="arrow">
                    Request a Product Demonstration
                  </Button>
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <aside className="industry-sidebar-col">
              
              {/* Quick Sector Profile */}
              <div className="sidebar-widget">
                <div className="widget-header">
                  <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'var(--brand-blue-light)', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {getIndustryIcon(industry.id)}
                  </div>
                  <h3 className="widget-title" style={{ marginLeft: '10px' }}>{industry.name} Solutions</h3>
                </div>
                <p className="widget-desc" style={{ marginTop: '10px' }}>
                  Integrated business management platform designed to simplify and streamline operational processes across {industry.name.toLowerCase()} businesses.
                </p>
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '12px', marginTop: '12px' }}>
                  <span className="mono-tag" style={{ display: 'block', fontSize: '0.6875rem', color: 'var(--text-tertiary)', marginBottom: '8px' }}>
                    KEY FUNCTIONAL FOCUS:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {industry.xenedionFocus.map((mod, idx) => (
                      <span key={idx} className="mono-tag" style={{ fontSize: '0.75rem', padding: '3px 8px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: '4px' }}>
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Switch to Other Industries */}
              <div className="sidebar-widget">
                <div className="widget-header">
                  <Layers size={16} className="widget-icon" />
                  <h3 className="widget-title">Other Industry Solutions</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                  {INDUSTRIES.filter(ind => ind.id !== industry.id).map(ind => (
                    <Link
                      key={ind.id}
                      to={ind.href || `/industries/${ind.id}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        borderRadius: '6px',
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        border: '1px solid var(--border-light)',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--brand-blue)';
                        e.currentTarget.style.color = 'var(--brand-blue)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-light)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                      }}
                    >
                      <span>{ind.name}</span>
                      <ArrowUpRight size={14} style={{ color: 'var(--text-tertiary)' }} />
                    </Link>
                  ))}
                </div>
                <div style={{ marginTop: '14px', textAlign: 'center' }}>
                  <Link to="/industries" style={{ fontSize: '0.8125rem', color: 'var(--brand-blue)', fontWeight: 600 }}>
                    View All Industries Overview →
                  </Link>
                </div>
              </div>

              {/* Consultation / Demo Request Card */}
              <div className="sidebar-widget consultation-widget">
                <div className="widget-header">
                  <ShieldCheck size={16} className="widget-icon" />
                  <h3 className="widget-title">Request a Demonstration</h3>
                </div>
                <p className="widget-desc">
                  Connect with Astrion Digital to discuss your operational challenges and explore how XENedion ERP connects your essential business functions.
                </p>
                <Button to="/contact" variant="primary" size="sm" icon="arrow" fullWidth>
                  Request a Product Demonstration
                </Button>
              </div>

            </aside>

          </div>

          {/* Next / Previous Industry Navigation */}
          <div className="industry-nav-footer">
            <Link to={prevIndustry.href || `/industries/${prevIndustry.id}`} className="nav-footer-card prev">
              <div className="nav-footer-icon">
                <ArrowLeft size={16} />
              </div>
              <div className="nav-footer-text">
                <span className="mono-tag nav-label">PREVIOUS INDUSTRY</span>
                <span className="nav-title">{prevIndustry.name}</span>
              </div>
            </Link>

            <Link to="/industries" className="nav-footer-all mono-tag">
              <span>VIEW ALL INDUSTRIES</span>
            </Link>

            <Link to={nextIndustry.href || `/industries/${nextIndustry.id}`} className="nav-footer-card next">
              <div className="nav-footer-text text-right">
                <span className="mono-tag nav-label">NEXT INDUSTRY</span>
                <span className="nav-title">{nextIndustry.name}</span>
              </div>
              <div className="nav-footer-icon">
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
