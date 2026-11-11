import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
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
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  ShoppingCart
} from 'lucide-react';
import { XENEDION_DATA } from '../../data/xenedion';
import Button from '../../components/common/Button/Button';
import './XenedionPage.css';

export default function XenedionModulesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getIcon = (id, name) => {
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
        break;
    }
    switch (name) {
      case 'User Management & Auth': return <ShieldCheck size={18} />;
      case 'Inventory Management': return <Layers size={18} />;
      case 'Sales & Invoicing': return <TrendingUp size={18} />;
      case 'Purchasing & Procurement': return <ShoppingBag size={18} />;
      case 'Point of Sale (POS)': return <ShoppingCart size={18} />;
      case 'CRM & Customer 360': return <Users size={18} />;
      case 'GST & Statutory Compliance': return <FileText size={18} />;
      case 'Finance & Accounts': return <DollarSign size={18} />;
      case 'Reports & Business Analytics': return <BarChart3 size={18} />;
      case 'CRM': return <Users size={18} />;
      case 'Sales': return <TrendingUp size={18} />;
      case 'Orders': return <FileText size={18} />;
      case 'Purchasing': return <ShoppingBag size={18} />;
      case 'Vendor Management': return <Briefcase size={18} />;
      case 'Inventory': return <Layers size={18} />;
      case 'Warehouse': return <Package size={18} />;
      case 'Finance & Accounting':
      case 'Finance': return <DollarSign size={18} />;
      case 'HR & Payroll':
      case 'HR': return <UserCheck size={18} />;
      case 'Logistics & Dispatch':
      case 'Logistics': return <Truck size={18} />;
      case 'Business Intelligence':
      case 'Analytics': return <BarChart3 size={18} />;
      default: return <Cpu size={18} />;
    }
  };

  const categories = [
    'all',
    ...Array.from(new Set(XENEDION_DATA.modules.map((m) => m.category)))
  ];

  const filteredModules = activeCategory === 'all' || activeCategory === 'All Modules'
    ? XENEDION_DATA.modules
    : XENEDION_DATA.modules.filter(m => m.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="inner-page xenedion-modules-page">
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
            <Link to="/xenedion">XENEDION ERP</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">MODULES</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <Cpu size={14} />
              <span>XENEDION // ALL MODULES</span>
            </div>

            <h1 className="inner-hero-title">
              Complete ERP Modules for Every Department
            </h1>

            <p className="inner-hero-lead">
              Eliminate software silos. XENedion provides dedicated modules across finance, inventory, purchasing, sales, and HR—all connected to one central ledger with real-time updates.
            </p>

            <div className="inner-hero-actions">
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Request a Demo
              </Button>
              <Button to="/xenedion" variant="secondary" size="lg">
                XENedion Overview
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Modules Grid Section */}
      <section className="section">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">FULL COMPONENT BREAKDOWN</div>
            <h2 className="section-title-compact">Explore All Operational Modules</h2>
            <p className="section-desc-compact">Filter by operational function to see how each tool connects to your workflow.</p>
          </div>

          {/* Category Filter */}
          <div className="modules-filter-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`module-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'all' ? 'All Modules' : cat}
              </button>
            ))}
          </div>

          {/* Modules Cards Grid */}
          <div className="modules-grid-full">
            {filteredModules.map((mod) => (
              <div key={mod.id} className="module-card-item">
                <div className="module-card-header">
                  <div className="module-icon-wrap">{getIcon(mod.id, mod.name)}</div>
                  <span className="module-category-tag mono-tag">{mod.category}</span>
                </div>
                <h3 className="module-name">{mod.name}</h3>
                {mod.desc ? <p className="module-desc">{mod.desc}</p> : null}
                
                {mod.bullets && (
                  <div style={{ marginTop: '12px', borderTop: '1px solid var(--border-light, #f1f5f9)', paddingTop: '12px', flex: 1 }}>
                    {mod.bullets.map((b, bIdx) => (
                      <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#475569', marginBottom: '6px' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--brand-blue, #1c75bd)', flexShrink: 0 }} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="module-specs-row mono-tag" style={{ marginTop: '14px' }}>
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

          {/* CTA Box */}
          <div className="commitment-card">
            <div className="commitment-header">
              <div className="mono-label">
                <CheckCircle2 size={16} />
                <span>CLEAN WORKFLOWS</span>
              </div>
              <h3>Ready to see how these modules fit your daily routine?</h3>
            </div>
            <p className="commitment-text">
              We can configure a demo instance populated with sample workflows from your specific industry—showing you quote-to-cash, inventory reordering, and financial reporting in action.
            </p>
            <div className="commitment-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Request a Live Demo
              </Button>
              <Button to="/xenedion/industries" variant="secondary" size="md">
                View Industry Blueprints
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
