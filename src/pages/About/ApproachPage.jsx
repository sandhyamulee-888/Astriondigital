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
              <span>HOW WE WORK // PRODUCT-LED EXECUTION</span>
            </div>

            <h1 className="inner-hero-title">
              How We Engineer &amp; Deliver.
            </h1>

            <p className="inner-hero-lead">
              A product-led, three-step methodology: Understand Bottlenecks, Deploy Unified Modules, and Evolve Continuously. Engineered to eliminate operational friction and deliver dependable software without the headaches.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step Delivery Framework */}
      <section className="section">
        <div className="container">
          {/* Phase Selector Tabs */}
          <div className="approach-timeline-tabs">
            {APPROACH_PHASES.map((phase, idx) => (
              <button
                key={idx}
                className={`timeline-tab-btn ${activePhaseIndex === idx ? 'active' : ''}`}
                onClick={() => setActivePhaseIndex(idx)}
              >
                <span className="tab-phase-name">{phase.title}</span>
              </button>
            ))}
          </div>

          {/* Active Phase Deep Dive Card */}
          <div className="approach-deepdive-card">
            <div className="deepdive-header">
              <div className="mono-label deepdive-badge">
                <span>{activePhase.phase}</span>
              </div>
              <h2 className="deepdive-headline">{activePhase.headline}</h2>
              <p className="deepdive-summary">{activePhase.summary}</p>
            </div>

            <div className="deepdive-grid">
              {/* Deliverables Checklist */}
              <div className="deepdive-col">
                <span className="mono-tag deepdive-col-title">WHAT WE DELIVER</span>
                <div className="deliverables-stack">
                  {activePhase.deliverables.map((del, idx) => (
                    <div key={idx} className="deliverable-card">
                      <CheckCircle2 size={16} className="del-check-icon" />
                      <div className="del-text">
                        <h4>{del}</h4>
                        <span className="mono-tag">Actionable Milestone</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phase Architectural Safeguards */}
              <div className="deepdive-col">
                <span className="mono-tag deepdive-col-title">WHAT YOU CAN EXPECT</span>
                <div className="safeguards-box">
                  <div className="safeguard-row">
                    <ShieldCheck size={16} className="safeguard-icon" />
                    <div>
                      <strong>{activePhase.safeguards?.title || 'Operational Security'}</strong>
                      <p>{activePhase.safeguards?.desc || 'Strict data safeguards throughout the process.'}</p>
                    </div>
                  </div>
                  <div className="safeguard-row">
                    <Zap size={16} className="safeguard-icon" />
                    <div>
                      <strong>Fast, Predictable Timelines</strong>
                      <p>Weeks to deploy rather than months or years of stalled implementations.</p>
                    </div>
                  </div>
                  <div className="safeguard-row">
                    <Clock size={16} className="safeguard-icon" />
                    <div>
                      <strong>Dedicated Implementation Team</strong>
                      <p>Direct access to our platform specialists who guide your team every step of the way.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Visual Overview */}
          <div className="approach-all-phases-grid">
            {APPROACH_PHASES.map((item, idx) => (
              <div key={idx} className={`phase-summary-box ${activePhaseIndex === idx ? 'highlighted' : ''}`}>
                <div className="phase-summary-top">
                  <span className="mono-label phase-badge-name">{item.phase}</span>
                </div>
                <h3 className="phase-summary-title">{item.title}</h3>
                <p className="phase-summary-desc">{item.summary}</p>
                <button 
                  className="phase-inspect-btn mono-tag"
                  onClick={() => setActivePhaseIndex(idx)}
                >
                  View Details →
                </button>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="approach-actions-banner">
            <div className="approach-cta-info">
              <span className="mono-label">READY TO GET STARTED?</span>
              <h3>Schedule a workflow walkthrough with our product specialists.</h3>
              <p>We will review your current systems, show you how XENedion fits, and map out a simple onboarding plan.</p>
            </div>
            <div className="approach-cta-btns">
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
