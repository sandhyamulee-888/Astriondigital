import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowUpRight, 
  Users, 
  TrendingUp, 
  FileText, 
  ShoppingBag, 
  Briefcase, 
  Layers, 
  Package, 
  DollarSign, 
  UserCheck, 
  Truck, 
  BarChart3, 
  Cpu,
  Database,
  Zap,
  ShieldCheck,
  ShoppingCart
} from 'lucide-react';
import { XENEDION_DATA } from '../../data/xenedion';
import Button from '../../components/common/Button/Button';
import XenedionVisual from '../../components/sections/XenedionVisual/XenedionVisual';
import ScrollReveal from '../../components/common/Motion/ScrollReveal';
import './XenedionPage.css';

export default function XenedionPage({ isSolutionSection = false }) {
  const location = useLocation();
  const isSolutionsPath = isSolutionSection || location.pathname.startsWith('/solutions');
  const [activeCategory, setActiveCategory] = useState('All Modules');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToModules = (e) => {
    if (e) e.preventDefault();
    const elem = document.getElementById('modules-directory');
    if (elem) {
      const yOffset = -90;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const categories = [
    'All Modules',
    ...Array.from(new Set(XENEDION_DATA.modules.map((m) => m.category)))
  ];

  const getModuleIcon = (id) => {
    switch (id) {
      case 'auth':
      case 'user-management-auth':
        return <ShieldCheck size={18} />;
      case 'inventory':
        return <Layers size={18} />;
      case 'sales':
        return <TrendingUp size={18} />;
      case 'purchasing':
        return <ShoppingBag size={18} />;
      case 'pos':
        return <ShoppingCart size={18} />;
      case 'crm':
        return <Users size={18} />;
      case 'gst-compliance':
      case 'compliance':
        return <FileText size={18} />;
      case 'finance':
      case 'finance-accounts':
        return <DollarSign size={18} />;
      case 'reports':
      case 'analytics':
        return <BarChart3 size={18} />;
      default:
        return <Cpu size={18} />;
    }
  };

  const filteredModules = activeCategory === 'All Modules'
    ? XENEDION_DATA.modules
    : XENEDION_DATA.modules.filter(m => m.category.toLowerCase() === activeCategory.toLowerCase());

  const corePillars = [
    {
      title: 'One Shared Single Source of Truth',
      desc: 'When an order is created, inventory is reserved immediately and accounting records update in real time. No nocturnal syncing. No data lag.',
      icon: <Database size={20} />,
      accent: 'var(--brand-blue, #1c75bd)',
      bg: 'rgba(28, 117, 189, 0.08)'
    },
    {
      title: 'Built-In Everyday Automation',
      desc: 'Automatic 3-way invoice matching, smart inventory reorder points, and automated customer notifications eliminate hours of tedious busywork.',
      icon: <Zap size={20} />,
      accent: 'var(--brand-orange, #eb643e)',
      bg: 'rgba(235, 100, 62, 0.08)'
    },
    {
      title: 'Enterprise Security & Permissions',
      desc: 'Granular role-based access keeps sensitive company salaries, customer pricing, and financial ledgers strictly protected.',
      icon: <ShieldCheck size={20} />,
      accent: '#10b981',
      bg: 'rgba(16, 185, 129, 0.08)'
    },
    {
      title: 'Fast Deployment in Weeks',
      desc: 'Ready-to-use industry templates and structured data migration allow your team to go live smoothly in weeks, not multi-year delays.',
      icon: <TrendingUp size={20} />,
      accent: '#8b5cf6',
      bg: 'rgba(139, 92, 246, 0.08)'
    }
  ];

  const ecosystemCards = [
    { 
      title: 'All ERP Modules', 
      href: '#modules-directory',
      isAnchor: true,
      desc: 'Finance, inventory, sales, purchasing, HR, and warehousing configured for enterprise control.' 
    },
    { 
      title: 'Industry Blueprints', 
      href: '/industries', 
      desc: 'Pre-configured workflows tailored specifically for Manufacturing, Distribution, Retail, and Automotive.' 
    },
    { 
      title: 'Embedded AI & Automation', 
      href: '/solutions/ai-intelligent-automation', 
      desc: 'Smart forecasting to predict shortages, detect duplicate bills, and flag shipping delays.' 
    },
    { 
      title: 'Integrations & APIs', 
      href: '/solutions/integration-api', 
      desc: 'Pre-built connectors to sync bank feeds, eCommerce platforms, third-party logistics, and CRM tools.' 
    },
    { 
      title: 'Implementation Process', 
      href: '/about/approach', 
      desc: 'Smooth onboarding with dedicated data migration, step-by-step team training, and go-live assistance.' 
    },
    { 
      title: 'Partner Program', 
      href: '/about/partners', 
      desc: 'Build and grow your consulting agency by implementing XENedion for your local enterprise clients.' 
    }
  ];

  return (
    <div className="inner-page xenedion-page">
      {/* ========================================================
          SECTION 1: HERO SECTION
          ======================================================== */}
      <section className="inner-hero-section xenedion-erp-hero">
        <div className="xenedion-hero-bg-layer" aria-hidden="true">
          <img 
            src="/images/solutions/xenedion-erp-product-3d.webp" 
            alt="XENedion Integrated ERP Platform" 
            className="xenedion-hero-bg-img" 
          />
        </div>

        <div className="container inner-hero-container">
          <div className="inner-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            {isSolutionsPath && (
              <>
                <Link to="/solutions">SOLUTIONS</Link>
                <span className="breadcrumb-slash">/</span>
              </>
            )}
            <span className="breadcrumb-current">XENEDION ERP</span>
          </div>

          <div className="inner-hero-content xenedion-hero-content-constrained">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              FLAGSHIP PRODUCT // XENEDION ERP
            </div>

            <h1 className="inner-hero-title">
              One Platform. Your Entire Business
            </h1>

            <div className="about-subhead-badge mono-tag">
              Integrated Enterprise Resource Planning (ERP) Platform
            </div>

            <p className="inner-hero-lead">
              XENedion is a modern, all-in-one ERP platform that connects your finance, inventory, sales, purchasing, HR, and operations in real time — so every team always works from the same live data. Say goodbye to spreadsheet chaos and disconnected tools.
            </p>

            <div className="statement-foundation-callout xenedion-hero-callout">
              <CheckCircle2 size={18} className="callout-icon" />
              <span>Built and continuously maintained by Astrion Digital — a dedicated enterprise software company committed to cloud reliability, regular updates, and long-term customer success.</span>
            </div>

            <div className="inner-hero-actions">
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Request a Demo
              </Button>
              <Button onClick={scrollToModules} variant="secondary" size="lg">
                Explore All Modules
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: COMPLETE MODULE DIRECTORY (9 Module Cards)
          ======================================================== */}
      <section className="section" id="modules-directory">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">FULL COMPONENT BREAKDOWN</div>
            <h2 className="section-title-compact">Explore All Operational Modules</h2>
            <p className="section-desc-compact">
              Filter by operational function to see how each tool connects to your workflow.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="modules-filter-row">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`module-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 11 Module Cards Grid */}
          <div className="modules-directory-grid">
            {filteredModules.map((mod) => (
              <div key={mod.id} className="dir-module-card">
                <div className="dir-module-top">
                  <div className="dir-module-icon-wrap">
                    {getModuleIcon(mod.id)}
                  </div>
                  <span className="dir-module-cat-tag mono-tag">
                    {mod.category}
                  </span>
                </div>

                <h3 className="dir-module-title">{mod.name}</h3>
                {mod.desc ? <p className="dir-module-desc">{mod.desc}</p> : null}

                <ul className="dir-module-bullets">
                  {mod.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="dir-module-bullet-item">
                      <span className="dir-module-bullet-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="dir-module-footer mono-tag">
                  {mod.badges && mod.badges.length >= 2 ? (
                    <>
                      <span>{mod.badges[0]}</span>
                      <span>{mod.badges[1]}</span>
                    </>
                  ) : mod.badges && mod.badges.length === 1 ? (
                    <span>{mod.badges[0]}</span>
                  ) : (
                    <>
                      <span>100% REAL-TIME SYNC</span>
                      <span>SHARED LEDGER</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: CONNECTED XENedion ECOSYSTEM (Interactive)
          ======================================================== */}
      <section className="section xenedion-visual-section section-alt">
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

      {/* ========================================================
          SECTION 5: WHY GROWING COMPANIES CHOOSE XENedion
          ======================================================== */}
      <section className="section why-growing-section">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">THE XENEDION ADVANTAGE</div>
            <h2 className="section-title-compact">Why Growing Companies Choose XENedion</h2>
          </div>

          <div className="why-growing-side-by-side">
            {/* Visual Image Column */}
            <div className="why-growing-image-col">
              <img 
                src="/images/astrion-why-growing-companies.png" 
                alt="Connected Enterprise Operations, Real-Time Data Synchronization, and Workflow Automation" 
                className="why-growing-banner-img" 
              />
            </div>

            {/* 4 Cards Grid Column (2x2) */}
            <div className="why-growing-cards-grid">
              {corePillars.map((feat, fIdx) => (
                <div key={fIdx} className="xenedion-feature-card">
                  <div className="feat-card-header">
                    <div 
                      className="feat-icon-box"
                      style={{ color: feat.accent, backgroundColor: feat.bg }}
                    >
                      {feat.icon}
                    </div>
                  </div>
                  <h3 className="xenedion-feat-title">{feat.title}</h3>
                  <p className="xenedion-feat-desc">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: XENedion ECOSYSTEM (6 Cards)
          ======================================================== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">EXPLORE THE PLATFORM</div>
            <h2 className="section-title-compact">Everything Around the XENedion Ecosystem</h2>
          </div>

          <div className="xenedion-subpages-grid">
            {ecosystemCards.map((sub, idx) => {
              if (sub.isAnchor) {
                return (
                  <a 
                    key={idx} 
                    href={sub.href} 
                    onClick={scrollToModules}
                    className="xenedion-sub-card"
                  >
                    <div className="xenedion-sub-top">
                      <span className="mono-tag">EXPLORE</span>
                      <ArrowUpRight size={16} className="xenedion-sub-arrow" />
                    </div>
                    <h3 className="xenedion-sub-title">{sub.title}</h3>
                    <p className="xenedion-sub-desc">{sub.desc}</p>
                    <span className="mono-tag xenedion-sub-link">Learn More →</span>
                  </a>
                );
              }
              return (
                <Link key={idx} to={sub.href} className="xenedion-sub-card">
                  <div className="xenedion-sub-top">
                    <span className="mono-tag">EXPLORE</span>
                    <ArrowUpRight size={16} className="xenedion-sub-arrow" />
                  </div>
                  <h3 className="xenedion-sub-title">{sub.title}</h3>
                  <p className="xenedion-sub-desc">{sub.desc}</p>
                  <span className="mono-tag xenedion-sub-link">Learn More →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 7: DEMO CTA
          ======================================================== */}
      <section className="section">
        <div className="container">
          <div className="xenedion-cta-banner">
            <div className="xenedion-cta-text">
              <span className="mono-label">READY FOR A DEMO?</span>
              <h3>See XENedion configured for your specific industry.</h3>
              <p>Schedule a 15-minute walkthrough to see how XENedion can unite your operations.</p>
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
