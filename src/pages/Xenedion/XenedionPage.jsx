import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  TrendingUp, 
  FileText, 
  ShoppingBag, 
  Briefcase, 
  Package, 
  DollarSign, 
  UserCheck, 
  Truck, 
  BarChart3,
  Network,
  Clock,
  Zap
} from 'lucide-react';
import { XENEDION_DATA } from '../../data/xenedion';
import Button from '../../components/common/Button/Button';
import XenedionVisual from '../../components/sections/XenedionVisual/XenedionVisual';
import ScrollReveal from '../../components/common/Motion/ScrollReveal';
import './XenedionPage.css';

export default function XenedionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const corePillars = [
    {
      num: '01',
      title: 'One Shared Single Source of Truth',
      desc: 'When an order is created, inventory is reserved immediately and accounting records update in real time. No nocturnal syncing. No data lag.'
    },
    {
      num: '02',
      title: 'Built-In Everyday Automation',
      desc: 'Automatic 3-way invoice matching, smart inventory reorder points, and automated customer notifications eliminate hours of tedious busywork.'
    },
    {
      num: '03',
      title: 'Enterprise Security & Permissions',
      desc: 'Granular role-based access keeps sensitive company salaries, customer pricing, and financial ledgers strictly protected.'
    },
    {
      num: '04',
      title: 'Fast Deployment in Weeks',
      desc: 'Ready-to-use industry templates and structured data migration allow your team to go live smoothly in weeks, not multi-year delays.'
    }
  ];

  const subpages = [
    { 
      title: 'All ERP Modules', 
      href: '/xenedion/modules', 
      desc: 'Finance, Inventory, Procurement, Sales, HR, Logistics, and Real-Time Business Intelligence.' 
    },
    { 
      title: 'Industry Blueprints', 
      href: '/xenedion/industries', 
      desc: 'Pre-configured workflows tailored specifically for Manufacturing, Distribution, Retail, and Automotive.' 
    },
    { 
      title: 'Embedded AI & Automation', 
      href: '/xenedion/ai-automation', 
      desc: 'Smart forecasting to predict shortages, detect duplicate bills, and flag shipping delays.' 
    },
    { 
      title: 'Integrations & APIs', 
      href: '/xenedion/integrations', 
      desc: 'Pre-built connectors to sync bank feeds, eCommerce platforms, third-party logistics, and CRM tools.' 
    },
    { 
      title: 'Implementation Process', 
      href: '/xenedion/implementation', 
      desc: 'Smooth onboarding with dedicated data migration, step-by-step team training, and go-live assistance.' 
    },
    { 
      title: 'Partner Program', 
      href: '/xenedion/partner-program', 
      desc: 'Build and grow your consulting agency by implementing XENedion for your local enterprise clients.' 
    }
  ];

  return (
    <div className="inner-page xenedion-page">
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
            <span className="breadcrumb-current">XENEDION ERP</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              FLAGSHIP PRODUCT // XENEDION ERP
            </div>

            <h1 className="inner-hero-title">
              One Platform. Your Entire Business.
            </h1>

            <div className="about-subhead-badge mono-tag">
              Integrated Enterprise Resource Planning (ERP) Platform
            </div>

            <p className="inner-hero-lead">
              XENedion is a modern, all-in-one ERP platform that connects your finance, inventory, sales, purchasing, HR, and operations in real time — so every team always works from the same live data. Say goodbye to spreadsheet chaos and disconnected tools.
            </p>

            {/* Core Metrics Proof Bar */}
            <div className="hero-metrics-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              margin: '28px 0',
              maxWidth: '880px'
            }}>
              {XENEDION_DATA.coreMetrics.map((metric, mIdx) => (
                <div key={mIdx} style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{ color: '#ff6b35', fontSize: '1.75rem', fontWeight: 700, fontFamily: 'monospace' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff', marginTop: '4px' }}>
                    {metric.label}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#999', marginTop: '4px' }}>
                    {metric.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="statement-foundation-callout" style={{ marginBottom: '28px', maxWidth: '880px' }}>
              <CheckCircle2 size={18} className="callout-icon" />
              <span>Built and continuously maintained by Astrion Digital — a dedicated enterprise software company committed to cloud reliability, regular updates, and long-term customer success.</span>
            </div>

            <div className="inner-hero-actions">
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Request a Demo
              </Button>
              <Button to="/xenedion/modules" variant="secondary" size="lg">
                Explore All Modules
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Platform Visual */}
      <section className="section xenedion-visual-section">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">ALL OPERATIONS CONNECTED</div>
            <h2 className="section-title-compact">Explore the Connected XENedion Ecosystem</h2>
            <p className="section-desc-compact">
              See how sales, inventory, finance, and logistics communicate instantly through one shared core.
            </p>
          </div>

          <div className="xenedion-visual-holder">
            <XenedionVisual />
          </div>
        </div>
      </section>

      {/* 5 Core Modules Deep-Dive Cards */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">CORE ERP MODULES</div>
            <h2 className="section-title-compact">Everything You Need to Run Your Business</h2>
            <p className="section-desc-compact">
              Built to replace multiple fragmented subscriptions with one clean, unified platform.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginTop: '32px'
          }}>
            {XENEDION_DATA.coreModules.map((mod) => (
              <div key={mod.id} style={{
                background: '#13151a',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '10px' }}>{mod.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '20px', lineHeight: 1.5 }}>
                  {mod.summary}
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <span className="mono-tag" style={{ color: '#ff6b35', fontSize: '0.75rem', display: 'block', marginBottom: '12px' }}>
                    KEY BENEFITS:
                  </span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {mod.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.85rem',
                        color: '#ddd',
                        marginBottom: '8px'
                      }}>
                        <CheckCircle2 size={15} style={{ color: '#ff6b35', flexShrink: 0, marginTop: '2px' }} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Button to="/xenedion/modules" variant="secondary" size="md">
              View Detailed Module Directory →
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Capabilities & Differentiators */}
      <section className="section">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">THE XENEDION ADVANTAGE</div>
            <h2 className="section-title-compact">Why Growing Companies Choose XENedion</h2>
          </div>

          <div className="xenedion-features-grid">
            {corePillars.map((feat, fIdx) => (
              <div key={fIdx} className="xenedion-feature-card">
                <h3 className="xenedion-feat-title">{feat.title}</h3>
                <p className="xenedion-feat-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Pages Matrix */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">EXPLORE THE PLATFORM</div>
            <h2 className="section-title-compact">Everything Around the XENedion Ecosystem</h2>
          </div>

          <div className="xenedion-subpages-grid">
            {subpages.map((sub, idx) => (
              <Link key={idx} to={sub.href} className="xenedion-sub-card">
                <div className="xenedion-sub-top">
                  <span className="mono-tag">EXPLORE</span>
                  <ArrowUpRight size={16} className="xenedion-sub-arrow" />
                </div>
                <h3 className="xenedion-sub-title">{sub.title}</h3>
                <p className="xenedion-sub-desc">{sub.desc}</p>
                <span className="mono-tag xenedion-sub-link">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="section">
        <div className="container">
          <div className="xenedion-cta-banner">
            <div className="xenedion-cta-text">
              <span className="mono-label">READY FOR A DEMO?</span>
              <h3>See XENedion configured for your specific industry.</h3>
              <p>Schedule a live 15-minute walkthrough to see how XENedion can unite your operations.</p>
            </div>
            <div className="xenedion-cta-actions">
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
