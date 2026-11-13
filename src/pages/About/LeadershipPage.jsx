import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, User, Shield } from 'lucide-react';
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
              <span>ABOUT // LEADERSHIP PHILOSOPHY</span>
            </div>

            <h1 className="inner-hero-title">
              {LEADERSHIP.heading}
            </h1>

            <div className="leadership-intro-block" style={{ margin: '16px 0 0 0', textAlign: 'left' }}>
              {LEADERSHIP.intro.map((para, idx) => (
                <p key={idx} className="leadership-intro-para">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile Cards Section */}
      <section className="section">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">
              <span>EXECUTIVE LEADERSHIP</span>
            </div>
            <h2 className="section-title-compact">Leadership Team</h2>
            <p className="section-desc-compact">
              Bringing together deep business domain understanding, software architecture excellence, and hands-on client partnership.
            </p>
          </div>

          <div className="leadership-profiles-grid" style={{ marginTop: '36px' }}>
            {LEADERSHIP.profiles.map((profile) => (
              <div key={profile.id} className="corporate-profile-card">
                <div className="profile-photo-frame" aria-label={`${profile.title} Photo Container`}>
                  <div className="profile-placeholder-graphic">
                    <User size={38} className="placeholder-user-icon" />
                    <span className="mono-tag placeholder-slot-label">{profile.slotLabel}</span>
                  </div>
                </div>

                <div className="profile-details-body">
                  <div className="profile-meta-row">
                    <span className="profile-role-badge mono-label">{profile.role}</span>
                  </div>
                  <h3 className="profile-full-name">{profile.title}</h3>
                  <p className="profile-bio-text">
                    {profile.placeholderDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Understated Corporate Note regarding Final Profiles */}
          <div className="leadership-management-note" style={{ marginTop: '32px' }}>
            <span className="note-badge mono-tag">CORPORATE NOTE</span>
            <p className="note-text">
              {LEADERSHIP.note}
            </p>
          </div>

          {/* Closing Contact Banner */}
          <div className="about-cta-banner" style={{ marginTop: '56px' }}>
            <div className="about-cta-text">
              <span className="mono-label">CONNECT WITH US</span>
              <h3>Explore Enterprise Partnership Opportunities</h3>
              <p>Reach out to our team to discuss technology implementation, custom solutions, or partner programs.</p>
            </div>
            <div className="about-cta-btn-wrap">
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Contact Leadership Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
