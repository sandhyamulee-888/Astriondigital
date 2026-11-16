import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Package, 
  ShoppingBag, 
  DollarSign, 
  UserCheck, 
  Truck, 
  BarChart3, 
  Network, 
  ShieldCheck, 
  Eye, 
  Zap, 
  TrendingUp, 
  Store, 
  Boxes, 
  Factory, 
  Car, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import Button from '../../components/common/Button/Button';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../components/common/Motion/ScrollReveal';
import './XenedionPage.css';

const FUNCTIONAL_AREAS = [
  {
    id: 'crm-sales',
    title: 'CRM & Sales Management',
    desc: 'Manage customer information, sales activities, opportunities, quotations and sales orders through a connected process.',
    icon: <Users size={22} />,
    accentColor: 'var(--brand-blue, #1C75BD)'
  },
  {
    id: 'inventory-warehouse',
    title: 'Inventory & Warehouse Management',
    desc: 'Monitor stock movements, inventory positions, warehouse activities and goods receipts.',
    icon: <Package size={22} />,
    accentColor: 'var(--brand-orange, #EB643E)'
  },
  {
    id: 'procurement-vendor',
    title: 'Procurement & Vendor Management',
    desc: 'Organise vendor information, purchase requirements, purchase orders and goods receipt processes.',
    icon: <ShoppingBag size={22} />,
    accentColor: '#10B981'
  },
  {
    id: 'finance-accounts',
    title: 'Finance & Accounts',
    desc: 'Connect business transactions with financial management, accounting processes and operational reporting.',
    icon: <DollarSign size={22} />,
    accentColor: '#6366F1'
  },
  {
    id: 'hr-management',
    title: 'Human Resource Management',
    desc: 'Organise employee information and support structured HR administration.',
    icon: <UserCheck size={22} />,
    accentColor: '#F59E0B'
  },
  {
    id: 'logistics-management',
    title: 'Logistics Management',
    desc: 'Support logistics operations and improve coordination across business activities.',
    icon: <Truck size={22} />,
    accentColor: '#06B6D4'
  },
  {
    id: 'reporting-analytics',
    title: 'Business Reporting & Analytics',
    desc: 'Bring operational information together to support business monitoring and informed decisions.',
    icon: <BarChart3 size={22} />,
    accentColor: '#EC4899'
  }
];

const WHY_XENEDION = [
  {
    id: 'integrated-operations',
    title: 'Integrated Operations',
    desc: 'Reduce information silos across departments.',
    icon: <Network size={22} />,
    accentColor: 'var(--brand-blue, #1C75BD)'
  },
  {
    id: 'improved-control',
    title: 'Improved Control',
    desc: 'Establish structured workflows and operational processes.',
    icon: <ShieldCheck size={22} />,
    accentColor: 'var(--brand-orange, #EB643E)'
  },
  {
    id: 'better-visibility',
    title: 'Better Visibility',
    desc: 'Access business information across functional areas.',
    icon: <Eye size={22} />,
    accentColor: '#10B981'
  },
  {
    id: 'increased-productivity',
    title: 'Increased Productivity',
    desc: 'Reduce repetitive manual work.',
    icon: <Zap size={22} />,
    accentColor: '#F59E0B'
  },
  {
    id: 'scalable-platform',
    title: 'Scalable Platform',
    desc: 'Support evolving business requirements.',
    icon: <TrendingUp size={22} />,
    accentColor: '#6366F1'
  }
];

const TARGET_SECTORS = [
  {
    id: 'retail',
    title: 'Retail',
    desc: 'Unified store, warehouse, and online operations with live inventory positions, replenishment, and POS workflow connectivity.',
    icon: <Store size={26} />,
    link: '/industries/retail'
  },
  {
    id: 'distribution',
    title: 'Distribution',
    desc: 'Multi-warehouse stock tracking, automated order fulfillment, logistics coordination, and connected supplier workflows.',
    icon: <Boxes size={26} />,
    link: '/industries/distribution'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    desc: 'Structured production planning, raw material procurement, bill of materials tracking, and operational process control.',
    icon: <Factory size={26} />,
    link: '/industries/manufacturing'
  },
  {
    id: 'automotive',
    title: 'Automotive',
    desc: 'Parts traceability, dealership supply chain integration, service billing, and end-to-end inventory governance.',
    icon: <Car size={26} />,
    link: '/industries/automotive'
  }
];

export default function XenedionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inner-page xenedion-official-page">

      {/* ========================================================
          SECTION 1: HERO SECTION
          ======================================================== */}
      <section className="inner-hero-section xenedion-hero-v2" aria-label="XENedion ERP Overview">
        <div className="container">
          <div className="inner-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            <Link to="/solutions">SOLUTIONS</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">XENEDION ERP</span>
          </div>

          <div className="xenedion-hero-grid">
            <div className="xenedion-hero-text">
              <div className="mono-label xenedion-hero-tag">
                <span className="badge-dot"></span>
                <span>ENTERPRISE SOLUTIONS // XENEDION ERP</span>
              </div>

              <h1 className="xenedion-hero-heading">
                XENedion ERP
              </h1>

              <p className="xenedion-hero-tagline">
                One Platform. Every Business Function. Complete Control.
              </p>

              <div className="xenedion-hero-narrative">
                <p>
                  XENedion is an integrated Enterprise Resource Planning platform designed to simplify and streamline the way businesses manage their operations.
                </p>
                <p>
                  Businesses often operate with disconnected applications, spreadsheets and manual processes. This creates information gaps, duplication of work and limited visibility across departments.
                </p>
                <p>
                  XENedion brings essential business functions together in a unified ERP environment, enabling organisations to manage their operations more effectively.
                </p>
              </div>

              <div className="xenedion-hero-actions">
                <Button to="/contact" variant="primary" size="lg" icon="arrow">
                  Request a Product Demonstration
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Talk to Our Team
                </Button>
              </div>
            </div>

            <div className="xenedion-hero-visual-col">
              <div className="xenedion-visual-card">
                <img 
                  src="/images/solutions/xenedion-erp-product-3d.webp" 
                  alt="XENedion ERP Connected Platform Environment"
                  className="xenedion-product-img"
                />
                <div className="xenedion-visual-badge">
                  <CheckCircle2 size={16} className="visual-badge-icon" />
                  <span>Integrated Business Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: A CONNECTED BUSINESS MANAGEMENT PLATFORM
          ======================================================== */}
      <section className="section xenedion-functional-section" aria-label="Functional Areas">
        <div className="container">
          <ScrollReveal yOffset={20}>
            <div className="xenedion-section-header">
              <span className="mono-label xenedion-section-tag">KEY FUNCTIONAL AREAS</span>
              <h2 className="xenedion-section-title">
                A Connected Business Management Platform
              </h2>
              <p className="xenedion-section-subhead">
                Essential business functions unified within a single ERP operating environment.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.06} className="functional-cards-grid">
            {FUNCTIONAL_AREAS.map((func) => (
              <StaggerItem key={func.id}>
                <div className="functional-area-card">
                  <div className="functional-card-top">
                    <div 
                      className="functional-icon-wrap"
                      style={{ 
                        color: func.accentColor,
                        backgroundColor: `${func.accentColor}12`,
                        borderColor: `${func.accentColor}28`
                      }}
                    >
                      {func.icon}
                    </div>
                    <span className="functional-num mono-label">{func.num}</span>
                  </div>
                  <h3 className="functional-card-title">{func.title}</h3>
                  <p className="functional-card-desc">{func.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: WHY XENEDION?
          ======================================================== */}
      <section className="section xenedion-why-section" aria-label="Why XENedion">
        <div className="container">
          <ScrollReveal yOffset={20}>
            <div className="xenedion-section-header">
              <span className="mono-label xenedion-section-tag">VALUE PROPOSITION</span>
              <h2 className="xenedion-section-title">
                Why XENedion?
              </h2>
              <p className="xenedion-section-subhead">
                Eliminate disconnected applications and establish an integrated operational foundation.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.08} className="why-xenedion-grid">
            {WHY_XENEDION.map((benefit) => (
              <StaggerItem key={benefit.id}>
                <div className="why-benefit-card">
                  <div 
                    className="why-benefit-icon"
                    style={{ 
                      color: benefit.accentColor,
                      backgroundColor: `${benefit.accentColor}12`,
                      borderColor: `${benefit.accentColor}28`
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="why-benefit-title">{benefit.title}</h3>
                  <p className="why-benefit-desc">{benefit.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: WHO IS XENEDION FOR?
          ======================================================== */}
      <section className="section xenedion-sectors-section" aria-label="Who Is XENedion For">
        <div className="container">
          <ScrollReveal yOffset={20}>
            <div className="xenedion-section-header">
              <span className="mono-label xenedion-section-tag">INDUSTRY BLUEPRINTS</span>
              <h2 className="xenedion-section-title">
                Who Is XENedion For?
              </h2>
              <div className="xenedion-sectors-intro">
                <p>
                  XENedion is designed for businesses that want to move beyond disconnected systems and establish an integrated operating environment.
                </p>
                <p>
                  Whether you are managing retail outlets, distribution networks, manufacturing operations or automotive businesses, XENedion provides a common platform to manage your business processes.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="target-sectors-grid">
            {TARGET_SECTORS.map((sector) => (
              <Link 
                key={sector.id} 
                to={sector.link}
                className="target-sector-card"
              >
                <div className="sector-card-header">
                  <div className="sector-icon-box">
                    {sector.icon}
                  </div>
                  <span className="sector-arrow-indicator">
                    <ArrowRight size={16} />
                  </span>
                </div>

                <h3 className="sector-card-title">{sector.title}</h3>
                <p className="sector-card-desc">{sector.desc}</p>
                <span className="sector-explore-link mono-label">
                  Explore {sector.title} Solutions →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: FINAL CALL TO ACTION
          ======================================================== */}
      <section className="section xenedion-final-cta-section" aria-label="Call to Action">
        <div className="container">
          <div className="xenedion-cta-box">
            <div className="xenedion-cta-content">
              <span className="mono-label xenedion-cta-tag">GET STARTED</span>
              <h2 className="xenedion-cta-headline">
                Discover how XENedion can transform your business operations.
              </h2>
              <p className="xenedion-cta-lead">
                Connect with our specialists for a comprehensive product walkthrough configured around your operational workflows.
              </p>
              <div className="xenedion-cta-button-group">
                <Button to="/contact" variant="primary" size="lg" icon="arrow">
                  Request a Product Demonstration
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Talk to Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
