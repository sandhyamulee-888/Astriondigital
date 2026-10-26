import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Brain, Cpu, CheckCircle2, ShieldCheck, ArrowRight, Zap, TrendingUp, RefreshCw } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import './XenedionPage.css';

export default function XenedionAIPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aiCapabilities = [
    {
      icon: <Brain size={20} />,
      title: 'Autonomous Ledger Reconciliation',
      desc: '3-way automated matching across purchase orders, receiving slips, and vendor invoices with anomaly flagging.'
    },
    {
      icon: <TrendingUp size={20} />,
      title: 'Predictive Demand & Reorder AI',
      desc: 'Machine learning forecasting models analyzing seasonal trends, lead times, and supplier velocity to prevent stock-outs.'
    },
    {
      icon: <Zap size={20} />,
      title: 'Dynamic Quote & Margin Optimization',
      desc: 'Real-time algorithm calculating optimal contract pricing based on material cost fluctuations and inventory tiers.'
    },
    {
      icon: <RefreshCw size={20} />,
      title: 'Automated Exception Handling',
      desc: 'Autonomous agent bots resolving routine transaction mismatches and routing non-standard escalations to human reviewers.'
    }
  ];

  return (
    <div className="inner-page xenedion-ai-page">
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
            <span className="breadcrumb-current">AI &amp; AUTOMATION</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <Sparkles size={14} />
              <span>XENEDION // EMBEDDED AI &amp; AUTOMATION</span>
            </div>

            <h1 className="inner-hero-title">
              Embedded AI: Put Everyday Operations on Autopilot
            </h1>

            <p className="inner-hero-lead">
              Smart forecasting to predict inventory shortages, detect duplicate bills, and identify delayed shipments before they hurt your business.
            </p>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="section">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">AUTONOMOUS OPERATING LOOPS</div>
            <h2 className="section-title-compact">AI integrated into every enterprise transaction.</h2>
            <p className="section-desc-compact">
              Deterministic, schema-validated agentic workflows operating with strict privacy and mathematical accuracy.
            </p>
          </div>

          <div className="values-cards-grid" style={{ marginBottom: '48px' }}>
            {aiCapabilities.map((cap, idx) => (
              <div key={idx} className="value-item-card">
                <div className="value-icon-box" style={{ color: 'var(--brand-orange)', backgroundColor: 'var(--brand-orange-light)' }}>
                  {cap.icon}
                </div>
                <h3 className="value-title">{cap.title}</h3>
                <p className="value-desc">{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* Guardrails Card */}
          <div className="commitment-card">
            <div className="commitment-header">
              <div className="mono-label">
                <ShieldCheck size={16} />
                <span>ENTERPRISE GUARDRAILS</span>
              </div>
              <h3>Zero Data Retention &amp; Provable Lineage</h3>
            </div>
            <p className="commitment-text">
              All inferencing runs on private enterprise clusters with zero public training exposure. Every automated action is logged into an immutable audit journal with prompt, parameters, and confidence metrics.
            </p>
            <div className="commitment-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Schedule AI Architecture Demo
              </Button>
              <Button to="/solutions/ai-intelligent-automation" variant="secondary" size="md">
                Explore Enterprise AI Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
