import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Target, CheckCircle2, Sparkles } from 'lucide-react';
import { VISION_MISSION, ABOUT_HERO } from '../../data/about';
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
              <span>ABOUT // PURPOSE &amp; DIRECTION</span>
            </div>

            <h1 className="inner-hero-title">
              Our Vision &amp; Mission
            </h1>

            <p className="inner-hero-lead">
              To empower businesses with intelligent, integrated and accessible technology that transforms the way they operate, compete and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Core Cards Grid */}
      <section className="section">
        <div className="container">
          <div className="vm-dedicated-grid">
            {/* Vision Card */}
            <div className="vm-dedicated-card vision-card">
              <div className="vm-card-top-row">
                <span className="mono-label vm-pill blue">
                  <Compass size={14} />
                  <span>{VISION_MISSION.vision.tag}</span>
                </span>
              </div>
              <h2 className="vm-dedicated-title">{VISION_MISSION.vision.title}</h2>
              <p className="vm-dedicated-statement">
                &ldquo;{VISION_MISSION.vision.description}&rdquo;
              </p>
            </div>

            {/* Mission Card */}
            <div className="vm-dedicated-card mission-card">
              <div className="vm-card-top-row">
                <span className="mono-label vm-pill orange">
                  <Target size={14} />
                  <span>{VISION_MISSION.mission.tag}</span>
                </span>
              </div>
              <h2 className="vm-dedicated-title">{VISION_MISSION.mission.title}</h2>
              <p className="vm-dedicated-statement">
                &ldquo;{VISION_MISSION.mission.description}&rdquo;
              </p>
            </div>
          </div>

          {/* We Strive To: Core Objectives Block */}
          <div className="strive-block-card" style={{ marginBottom: '40px' }}>
            <div className="strive-header">
              <div className="mono-label strive-tag">
                <Sparkles size={14} />
                <span>CORE OBJECTIVES</span>
              </div>
              <h3 className="strive-title">{VISION_MISSION.striveHeading}</h3>
            </div>

            <div className="strive-items-list">
              {VISION_MISSION.strivePoints.map((point, idx) => (
                <div key={idx} className="strive-item-row">
                  <span className="strive-check-icon" aria-hidden="true">
                    <CheckCircle2 size={18} />
                  </span>
                  <p className="strive-item-text">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment Block */}
          <div className="about-commitment-card" style={{ margin: '0' }}>
            <div className="commitment-content">
              <span className="mono-label commitment-badge">OUR COMMITMENT</span>
              <p className="commitment-statement">
                {ABOUT_HERO.commitment}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
