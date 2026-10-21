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
            <span className="breadcrumb-current">VISION &amp; MISSION</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <Compass size={14} />
              <span>ABOUT // CORPORATE PRINCIPLES</span>
            </div>

            <h1 className="inner-hero-title">
              Vision &amp; Mission: The foundation powering intelligent software products.
            </h1>

            <p className="inner-hero-lead">
              Astrion Digital Private Limited is focused on developing technology products that help businesses operate more efficiently, intelligently, and effectively. We provide the corporate foundation for XENedion's product development, innovation, growth, and long-term vision.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Core Cards Grid */}
      <section className="section">
        <div className="container">
          <div className="inner-vm-large-grid">
            {/* Vision Card */}
            <div className="vm-large-card vision">
              <div className="vm-card-badge mono-label">
                <Compass size={16} />
                <span>{VISION_MISSION.vision.tag}</span>
              </div>
              <h2 className="vm-card-title">{VISION_MISSION.vision.title}</h2>
              <blockquote className="vm-statement-quote">
                "{VISION_MISSION.vision.description}"
              </blockquote>

              <div className="vm-pillars-block">
                <span className="mono-tag vm-pillars-heading">STRATEGIC ANCHORS</span>
                <div className="vm-pillars-list">
                  {VISION_MISSION.vision.pillars.map((pillar, idx) => (
                    <div key={idx} className="vm-pillar-item">
                      <CheckCircle2 size={16} className="pillar-check-icon" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="vm-large-card mission">
              <div className="vm-card-badge mono-label orange">
                <Target size={16} />
                <span>{VISION_MISSION.mission.tag}</span>
              </div>
              <h2 className="vm-card-title">{VISION_MISSION.mission.title}</h2>
              <blockquote className="vm-statement-quote">
                "{VISION_MISSION.mission.description}"
              </blockquote>

              <div className="vm-pillars-block">
                <span className="mono-tag vm-pillars-heading">OPERATIONAL PILLARS</span>
                <div className="vm-pillars-list">
                  {VISION_MISSION.mission.pillars.map((pillar, idx) => (
                    <div key={idx} className="vm-pillar-item">
                      <CheckCircle2 size={16} className="pillar-check-icon orange" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Foundation Commitment Block */}
          <div className="commitment-card">
            <div className="commitment-header">
              <div className="mono-label">
                <Award size={16} />
                <span>EXECUTIVE COMMITMENT</span>
              </div>
              <h3>Guaranteed Product Innovation &amp; Long-Term Stewardship</h3>
            </div>
            <p className="commitment-text">
              Astrion Digital provides the corporate foundation for XENedion's product development, innovation, growth, and long-term vision. We are committed to developing software platforms that connect core business functions, streamline operations, and provide clear operational visibility without compromise.
            </p>
            <div className="commitment-actions">
              <Button to="/xenedion" variant="primary" size="md" icon="arrow">
                Discover XENedion ERP Platform
              </Button>
              <Button to="/about" variant="secondary" size="md">
                View Brand Architecture
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
