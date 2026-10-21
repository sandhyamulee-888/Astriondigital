import React, { useState, useEffect } from 'react';
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
  Network
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

  const xenedionFeatures = [
    {
      num: '01',
      title: 'Unified Relational & Event Core',
      desc: 'Zero batch synchronizations. Instantaneous ledger updates across financial accounting, inventory, and procurement in sub-4ms transactions.'
    },
    {
      num: '02',
      title: 'Autonomous Ledger Intelligence',
      desc: 'Embedded AI agent loops that autonomously perform 3-way invoice matching, predictive reorder calculations, and cash flow forecasting.'
    },
    {
      num: '03',
      title: 'Granular Zero-Trust RBAC',
      desc: 'Field-level access control, immutable cryptographic audit logging, and automated SOC2 / ISO compliance reporting.'
    },
    {
      num: '04',
      title: 'Modular Strangler Deployment',
      desc: 'Adopt module-by-module to decommission legacy ERP systems smoothly without business disruption or high-risk cutovers.'
    }
  ];

  const subpages = [
    { title: 'Integrated Modules', href: '/xenedion/modules', desc: 'CRM, Sales, Orders, Purchasing, Inventory, Warehouse, Finance, HR, Logistics, Analytics.' },
    { title: 'Industry Blueprints', href: '/xenedion/industries', desc: 'Pre-configured domain templates for Manufacturing, Distribution, Retail, and Automotive.' },
    { title: 'Embedded AI & Automation', href: '/xenedion/ai-automation', desc: 'Agentic process execution, dynamic pricing, and automated inventory balancing.' },
    { title: 'Integrations & API Fabric', href: '/xenedion/integrations', desc: 'gRPC event bus, REST/GraphQL gateways, legacy mainframe and EDI bridges.' },
    { title: 'Implementation Methodology', href: '/xenedion/implementation', desc: 'Phased rollout framework with automated data reconciliation and pilot validation.' },
    { title: 'Partner Program', href: '/xenedion/partner-program', desc: 'Certified VAR and Systems Integrator enablement tiers and co-delivery model.' }
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
            <span className="breadcrumb-current">XENEDION ERP PLATFORM</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              FLAGSHIP ENTERPRISE SOFTWARE PRODUCT // ASTRION DIGITAL
            </div>

            <h1 className="inner-hero-title">
              XENedion: One Platform. Your Entire Business.
            </h1>

            <div className="about-subhead-badge mono-tag">
              Integrated Enterprise Resource Planning (ERP) Platform
            </div>

            <p className="inner-hero-lead">
              An integrated enterprise resource planning platform designed to connect core business functions, streamline operations, and provide better visibility across the organization.
            </p>

            <div className="statement-foundation-callout" style={{ marginBottom: '28px', maxWidth: '780px' }}>
              <CheckCircle2 size={18} className="callout-icon" />
              <span>Astrion Digital provides the corporate foundation for XENedion&apos;s product development, innovation, growth, and long-term vision.</span>
            </div>

            <div className="inner-hero-actions">
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Request XENedion Demo
              </Button>
              <Button to="/xenedion/modules" variant="secondary" size="lg">
                Explore 11 Modules
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Platform Visual */}
      <section className="section xenedion-visual-section">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">LIVE OPERATIONAL CORE</div>
            <h2 className="section-title-compact">Explore the connected XENedion ecosystem.</h2>
            <p className="section-desc-compact">
              Click on any module below to inspect its data contract, event latency, and real-time ledger telemetry.
            </p>
          </div>

          <div className="xenedion-visual-holder">
            <XenedionVisual />
          </div>
        </div>
      </section>

      {/* Platform Capabilities & Differentiators */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">ARCHITECTURAL FOUNDATION</div>
            <h2 className="section-title-compact">Why leading enterprises run on XENedion.</h2>
          </div>

          <div className="xenedion-features-grid">
            {xenedionFeatures.map((feat, fIdx) => (
              <div key={fIdx} className="xenedion-feature-card">
                <h3 className="xenedion-feat-title">{feat.title}</h3>
                <p className="xenedion-feat-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Pages Matrix */}
      <section className="section">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">PLATFORM SUITE NAVIGATION</div>
            <h2 className="section-title-compact">Deep dive into the XENedion architecture.</h2>
          </div>

          <div className="xenedion-subpages-grid">
            {subpages.map((sub, idx) => (
              <Link key={idx} to={sub.href} className="xenedion-sub-card">
                <div className="xenedion-sub-top">
                  <span className="mono-tag">SUBSYSTEM</span>
                  <ArrowUpRight size={16} className="xenedion-sub-arrow" />
                </div>
                <h3 className="xenedion-sub-title">{sub.title}</h3>
                <p className="xenedion-sub-desc">{sub.desc}</p>
                <span className="mono-tag xenedion-sub-link">Explore Subsystem →</span>
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
              <span className="mono-label">DISCOVERY &amp; DEMO</span>
              <h3>Evaluate XENedion for your operating model.</h3>
              <p>Schedule a customized architectural walkthrough with our platform engineering team.</p>
            </div>
            <div className="xenedion-cta-actions">
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Schedule Platform Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
