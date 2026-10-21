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
  ArrowUpRight 
} from 'lucide-react';
import { XENEDION_DATA } from '../../data/xenedion';
import Button from '../../components/common/Button/Button';
import './XenedionPage.css';

export default function XenedionModulesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getIcon = (name) => {
    switch (name) {
      case 'CRM': return <Users size={18} />;
      case 'Sales': return <TrendingUp size={18} />;
      case 'Orders': return <FileText size={18} />;
      case 'Purchasing': return <ShoppingBag size={18} />;
      case 'Vendor Management': return <Briefcase size={18} />;
      case 'Inventory': return <Layers size={18} />;
      case 'Warehouse': return <Package size={18} />;
      case 'Finance': return <DollarSign size={18} />;
      case 'HR': return <UserCheck size={18} />;
      case 'Logistics': return <Truck size={18} />;
      case 'Analytics': return <BarChart3 size={18} />;
      default: return <Cpu size={18} />;
    }
  };

  const categories = ['all', 'Customer', 'Revenue', 'Fulfillment', 'Procurement', 'Supply Chain', 'Operations', 'Ledger', 'People', 'Intelligence'];

  const filteredModules = activeCategory === 'all'
    ? XENEDION_DATA.modules
    : XENEDION_DATA.modules.filter(m => m.category === activeCategory);

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
              <span>XENEDION // INTEGRATED SUBSYSTEMS</span>
            </div>

            <h1 className="inner-hero-title">
              Enterprise Operational Modules: Unified under one relational core.
            </h1>

            <p className="inner-hero-lead">
              Eliminate software silos. XENedion provides deep vertical capabilities across every corporate function, sharing a single transactional ledger and instantaneous event distribution bus.
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid Section */}
      <section className="section">
        <div className="container">
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
                  <div className="module-icon-wrap">{getIcon(mod.name)}</div>
                  <span className="module-category-tag mono-tag">{mod.category}</span>
                </div>
                <h2 className="module-name">{mod.name}</h2>
                <p className="module-desc">{mod.desc}</p>
                <div className="module-specs-row mono-tag">
                  <span>REAL-TIME LEDGER SYNC</span>
                  <span>&lt; 3ms LATENCY</span>
                </div>
              </div>
            ))}
          </div>

          {/* Module Architecture Highlights */}
          <div className="commitment-card">
            <div className="commitment-header">
              <div className="mono-label">
                <CheckCircle2 size={16} />
                <span>DATA INTEGRITY GUARANTEE</span>
              </div>
              <h3>ACID-Compliant Distributed Ledger Sync</h3>
            </div>
            <p className="commitment-text">
              When an order is approved in Sales, inventory is instantly reserved across warehouses, procurement schedules are recalibrated, and journal entries post to General Ledger in real-time. Zero nocturnal batch jobs. Zero reconciliation lag.
            </p>
            <div className="commitment-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Request Module Walkthrough
              </Button>
              <Button to="/xenedion/integrations" variant="secondary" size="md">
                Explore Integrations &amp; APIs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
