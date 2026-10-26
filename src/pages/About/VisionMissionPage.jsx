import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Target, CheckCircle2, ArrowRight, Shield, Award } from 'lucide-react';
import { VISION_MISSION } from '../../data/about';
import Button from '../../components/common/Button/Button';
import './AboutPage.css';

export default function VisionMissionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inner-page vision-mission-page">
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
            <span className="breadcrumb-current">MISSION &amp; VALUES</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <Compass size={14} />
              <span>ABOUT // MISSION &amp; VALUES</span>
            </div>

            <h1 className="inner-hero-title">
              Our Mission &amp; Vision: Powering Intelligent Enterprise Software.
            </h1>

            <p className="inner-hero-lead">
              Astrion Digital develops modern technology products that empower businesses to operate more efficiently, intelligently, and effectively. We eliminate manual bottlenecks and connect core operations with clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Core Cards Grid */}
      <section className="section">
        <div className="container">
          <div className="inner-vm-large-grid">
            {/* Mission Card */}
            <div className="vm-large-card mission">
              <div className="vm-card-badge mono-label orange">
                <Target size={16} />
                <span>OUR MISSION</span>
              </div>
              <h2 className="vm-card-title">Clean, Intelligent Software Teams Love Using</h2>
              <blockquote className="vm-statement-quote">
                &ldquo;To develop intelligent enterprise software products that help businesses operate more efficiently, intelligently, and effectively—eliminating spreadsheet chaos and manual busywork.&rdquo;
              </blockquote>

              <div className="vm-pillars-block">
                <span className="mono-tag vm-pillars-heading">WHAT THIS MEANS IN PRACTICE</span>
                <div className="vm-pillars-list">
                  <div className="vm-pillar-item">
                    <CheckCircle2 size={16} className="pillar-check-icon orange" />
                    <span>Eliminate manual data re-entry across finance, warehouse, sales, and HR</span>
                  </div>
                  <div className="vm-pillar-item">
                    <CheckCircle2 size={16} className="pillar-check-icon orange" />
                    <span>Deliver real-time visibility so managers can make decisions with total confidence</span>
                  </div>
                  <div className="vm-pillar-item">
                    <CheckCircle2 size={16} className="pillar-check-icon orange" />
                    <span>Build intuitive, friendly interfaces that employees actually enjoy opening every day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="vm-large-card vision">
              <div className="vm-card-badge mono-label">
                <Compass size={16} />
                <span>OUR VISION</span>
              </div>
              <h2 className="vm-card-title">The Trusted Company Behind Global Enterprise Operations</h2>
              <blockquote className="vm-statement-quote">
                &ldquo;To be the corporate foundation and technology pioneer powering the world&rsquo;s most dependable business software platforms.&rdquo;
              </blockquote>

              <div className="vm-pillars-block">
                <span className="mono-tag vm-pillars-heading">HOW WE MAKE IT HAPPEN</span>
                <div className="vm-pillars-list">
                  <div className="vm-pillar-item">
                    <CheckCircle2 size={16} className="pillar-check-icon" />
                    <span>Unify core operations—finance, supply chain, inventory, and HR—under one roof</span>
                  </div>
                  <div className="vm-pillar-item">
                    <CheckCircle2 size={16} className="pillar-check-icon" />
                    <span>Deploy pre-built industry templates that get clients live in weeks, not years</span>
                  </div>
                  <div className="vm-pillar-item">
                    <CheckCircle2 size={16} className="pillar-check-icon" />
                    <span>Provide continuous development and reliable updates with zero vendor lock-in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Commitment Block */}
          <div className="commitment-card">
            <div className="commitment-header">
              <div className="mono-label">
                <Award size={16} />
                <span>OUR PROMISE</span>
              </div>
              <h3>Enterprise Software Without the Complex Headaches</h3>
            </div>
            <p className="commitment-text">
              We stand behind our software with transparent pricing, rapid implementation, and continuous updates. When your business grows, your software scales seamlessly right alongside you.
            </p>
            <div className="commitment-actions">
              <Button to="/xenedion" variant="primary" size="md" icon="arrow">
                Explore XENedion ERP
              </Button>
              <Button to="/contact" variant="secondary" size="md">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
