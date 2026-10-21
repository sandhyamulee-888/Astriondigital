import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Target, ArrowRight, Clock, Award } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import './XenedionPage.css';

export default function XenedionImplementationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stages = [
    {
      step: '01',
      title: 'Scoping & Architecture Blueprint',
      desc: 'Defining master data models, mapping chart of accounts, configuring BOM hierarchies, and validating integration boundaries.'
    },
    {
      step: '02',
      title: 'Data Migration & Reconciliation',
      desc: 'Automated data cleansing, legacy ledger extraction, and automated parallel run verification to guarantee zero transaction discrepancies.'
    },
    {
      step: '03',
      title: 'Pilot Deployment & User Validation',
      desc: 'Executing sandbox cutovers across representative operational units, conducting user acceptance testing (UAT), and training teams.'
    },
    {
      step: '04',
      title: 'Go-Live & Hypercare SLA',
      desc: 'Deterministic cutover protocol with 24/7 dedicated on-call systems engineers and continuous performance monitoring.'
    }
  ];

  return (
    <div className="inner-page xenedion-implementation-page">
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
            <span className="breadcrumb-current">IMPLEMENTATION</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <Target size={14} />
              <span>XENEDION // RISK-CONTROLLED DEPLOYMENT</span>
            </div>

            <h1 className="inner-hero-title">
              XENedion Implementation: Deterministic rollout with zero operational downtime.
            </h1>

            <p className="inner-hero-lead">
              ERP implementations fail when migration risks are underestimated. Astrion utilizes a proven, data-reconciled deployment framework that keeps your business running smoothly throughout the transition.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Stage Implementation Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">DEPLOYMENT METHODOLOGY</div>
            <h2 className="section-title-compact">Four phases of risk-controlled rollout.</h2>
          </div>

          <div className="values-cards-grid" style={{ marginBottom: '48px' }}>
            {stages.map((stage, idx) => (
              <div key={idx} className="value-item-card">
                <h3 className="value-title">{stage.title}</h3>
                <p className="value-desc">{stage.desc}</p>
              </div>
            ))}
          </div>

          {/* Implementation Assurance */}
          <div className="commitment-card">
            <div className="commitment-header">
              <div className="mono-label">
                <Award size={16} />
                <span>ON-TIME &amp; ON-BUDGET GUARANTEE</span>
              </div>
              <h3>Guaranteed Milestone Delivery with Fixed-Scope Governance</h3>
            </div>
            <p className="commitment-text">
              We align implementation contracts with verified milestone deliverables. Our automated testing frameworks catch data discrepancies prior to cutover, eliminating costly post-launch remediation.
            </p>
            <div className="commitment-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Request Implementation Roadmap
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
