import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, CheckCircle2, ArrowRight, Layers, ShieldCheck, Zap, BarChart3, Clock } from 'lucide-react';
import { APPROACH_PHASES } from '../../data/approach';
import Button from '../../components/common/Button/Button';
import './AboutPage.css';

export default function ApproachPage() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activePhase = APPROACH_PHASES[activePhaseIndex];

  return (
    <div className="inner-page approach-page">
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
            <Link to="/about">ABOUT</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">OUR APPROACH</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <Target size={14} />
              <span>ABOUT // TRANSFORMATION METHODOLOGY</span>
            </div>

            <h1 className="inner-hero-title">
              Our Approach: From strategic discovery to continuous autonomous scale .
            </h1>

            <p className="inner-hero-lead">
              Astrion structures complex enterprise modernization initiatives into four rigorous, iterative phases that eliminate deployment risk and deliver production-grade software on deterministic timelines.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Phase Transformation Framework */}
      <section className="section">
        <div className="container">
          {/* Phase Selector Tabs */}
          <div className="approach-timeline-tabs">
            {APPROACH_PHASES.map((phase, idx) => (
              <button
                key={phase.phase || idx}
                className={`timeline-tab-btn ${activePhaseIndex === idx ? 'active' : ''}`}
                onClick={() => setActivePhaseIndex(idx)}
              >
                <span className="tab-num mono-tag">PHASE</span>
                <span className="tab-phase-name">{phase.phase}</span>
              </button>
            ))}
          </div>

          {/* Active Phase Deep Dive Card */}
          <div className="approach-deepdive-card">
            <div className="deepdive-header">
              <div className="mono-label deepdive-badge">
                <span>{activePhase.phase} // ARCHITECTURAL EXECUTION</span>
              </div>
              <h2 className="deepdive-headline">{activePhase.headline}</h2>
              <p className="deepdive-summary">{activePhase.summary}</p>
            </div>

            <div className="deepdive-grid">
              {/* Deliverables Checklist */}
              <div className="deepdive-col">
                <span className="mono-tag deepdive-col-title">KEY ARTIFACTS &amp; DELIVERABLES</span>
                <div className="deliverables-stack">
                  {activePhase.deliverables.map((del, idx) => (
                    <div key={idx} className="deliverable-card">
                      <CheckCircle2 size={16} className="del-check-icon" />
                      <div className="del-text">
                        <h4>{del}</h4>
                        <span className="mono-tag">Production-Tested Milestone</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phase Architectural Safeguards */}
              <div className="deepdive-col">
                <span className="mono-tag deepdive-col-title">ENGINEERING SAFEGUARDS</span>
                <div className="safeguards-box">
                  <div className="safeguard-row">
                    <ShieldCheck size={16} className="safeguard-icon" />
                    <div>
                      <strong>Deterministic Validation</strong>
                      <p>Automated test suites and end-to-end integration contracts verify every transition.</p>
                    </div>
                  </div>
                  <div className="safeguard-row">
                    <Zap size={16} className="safeguard-icon" />
                    <div>
                      <strong>Zero Downtime Cutover</strong>
                      <p>Strangler Fig and canary deployment patterns ensure business continuity.</p>
                    </div>
                  </div>
                  <div className="safeguard-row">
                    <Clock size={16} className="safeguard-icon" />
                    <div>
                      <strong>Continuous Telemetry</strong>
                      <p>Live observability monitors latency, throughput, and error budgets 24/7/365.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complete 4-Phase Visual Overview */}
          <div className="approach-all-phases-grid">
            {APPROACH_PHASES.map((item, idx) => (
              <div key={item.phase || idx} className={`phase-summary-box ${activePhaseIndex === idx ? 'highlighted' : ''}`}>
                <div className="phase-summary-top">
                  <span className="mono-label phase-badge-name">{item.phase}</span>
                </div>
                <h3 className="phase-summary-title">{item.headline}</h3>
                <p className="phase-summary-desc">{item.summary}</p>
                <button 
                  className="phase-inspect-btn mono-tag"
                  onClick={() => setActivePhaseIndex(idx)}
                >
                  Inspect {item.phase} Phase →
                </button>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="approach-actions-banner">
            <div className="approach-cta-info">
              <span className="mono-label">READY TO COMMENCE DISCOVERY?</span>
              <h3>Engage Astrion architects for an initial forensic assessment.</h3>
              <p>We review your current state architecture, identify bottlenecks, and build your target roadmap.</p>
            </div>
            <div className="approach-cta-btns">
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Initiate Discovery Phase
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
