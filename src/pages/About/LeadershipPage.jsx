import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Shield, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { LEADERSHIP } from '../../data/about';
import Button from '../../components/common/Button/Button';
import './AboutPage.css';

export default function LeadershipPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inner-page leadership-page">
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
            <span className="breadcrumb-current">LEADERSHIP</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <Users size={14} />
              <span>ABOUT // LEADERSHIP TEAM</span>
            </div>

            <h1 className="inner-hero-title">
              Leadership: The Team Behind Intelligent Enterprise Software.
            </h1>

            <p className="inner-hero-lead">
              Experienced software architects, product engineers, and operational leaders committed to delivering dependable enterprise software platforms that help growing businesses run with clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="section">
        <div className="container">
          <div className="leadership-cards-deep-grid">
            {LEADERSHIP.map((leader) => (
              <div key={leader.id} className="leader-profile-card">
                <div className="leader-card-header-bar">
                  <div className="leader-avatar-circle">
                    <span className="mono-tag leader-initials">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="leader-identity">
                    <h2 className="leader-full-name">{leader.name}</h2>
                    <span className="leader-corporate-role mono-label">{leader.role}</span>
                  </div>
                </div>

                <div className="leader-domain-highlight mono-tag">
                  <span className="domain-label">SPECIALTY:</span> {leader.domain}
                </div>

                <p className="leader-biography">{leader.bio}</p>

                <div className="leader-credentials-box">
                  <Award size={14} className="cred-icon" />
                  <span className="mono-tag cred-text">{leader.credentials}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Governance Model */}
          <div className="governance-model-card">
            <div className="gov-header">
              <div className="mono-label">
                <Shield size={16} />
                <span>ARCHITECTURAL GOVERNANCE</span>
              </div>
              <h3>Hands-On Senior Technical Oversight</h3>
            </div>
            <p className="gov-desc">
              At Astrion, senior leadership is not detached from code and architecture. Every project is assigned an Executive Architect who participates in design reviews, schema validations, and cutover governance.
            </p>
            <div className="gov-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Connect with an Executive Architect
              </Button>
              <Button to="/about/partners" variant="secondary" size="md">
                View Technology Partners
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
