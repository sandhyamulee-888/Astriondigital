import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Target, CheckCircle2, User } from 'lucide-react';
import { ABOUT_HERO, VISION_MISSION, OUR_APPROACH, LEADERSHIP_SECTION, LEADERSHIP_PROFILES } from '../../data/about';
import Button from '../../components/common/Button/Button';
import './AboutPage.css';

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);

  return (
    <div className="inner-page about-main-page">

      {/* ========================================================
          SECTION 1 — ABOUT ASTRION DIGITAL
          ======================================================== */}
      <section id="about-astrion" className="inner-hero-section about-hero-section" aria-label="About Astrion Digital Overview">
        <div className="inner-hero-bg" aria-hidden="true">
          <img src="/solutions-bg.jpg" alt="" className="inner-hero-bg-img" />
          <div className="inner-hero-overlay"></div>
        </div>

        <div className="container inner-hero-container">
          <div className="inner-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">ABOUT ASTRION DIGITAL</span>
          </div>

          <div className="inner-hero-content about-hero-constrained">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              {ABOUT_HERO.badge}
            </div>

            <h1 className="inner-hero-title about-hero-headline">
              {ABOUT_HERO.heading}
            </h1>

            <div className="about-intro-narrative">
              {ABOUT_HERO.introParagraphs.map((paragraph, idx) => (
                <p key={idx} className="about-intro-paragraph">{paragraph}</p>
              ))}
            </div>

            <div className="about-commitment-card">
              <div className="commitment-accent-bar" aria-hidden="true" />
              <div className="commitment-content">
                <span className="mono-label commitment-badge">OUR COMMITMENT</span>
                <p className="commitment-statement">{ABOUT_HERO.commitment}</p>
              </div>
            </div>

            <div className="inner-hero-actions about-hero-actions">
              <Button to={ABOUT_HERO.ctaPrimary.href} variant="primary" size="lg" icon="arrow">
                {ABOUT_HERO.ctaPrimary.label}
              </Button>
              <Button to={ABOUT_HERO.ctaSecondary.href} variant="secondary" size="lg">
                {ABOUT_HERO.ctaSecondary.label}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2 — VISION & MISSION
          ======================================================== */}
      <section id="vision-mission" className="vision-mission-dedicated-section" aria-label="Vision and Mission">
        <div className="container">
          <div className="about-section-header">
            <span className="mono-label about-section-tag">{VISION_MISSION.tag}</span>
            <h2 className="about-section-heading">{VISION_MISSION.heading}</h2>
          </div>

          <div className="vm-cards-container">
            {/* Vision Card */}
            <div className="vm-card vm-card--vision">
              <div className="vm-card-head">
                <div className="vm-card-icon-wrap vm-card-icon-wrap--vision">
                  <Compass size={24} />
                </div>
                <span className="vm-card-tag mono-label">{VISION_MISSION.vision.tag}</span>
              </div>
              <h3 className="vm-card-heading">{VISION_MISSION.vision.title}</h3>
              <p className="vm-card-text">{VISION_MISSION.vision.description}</p>
            </div>

            {/* Mission Card */}
            <div className="vm-card vm-card--mission">
              <div className="vm-card-head">
                <div className="vm-card-icon-wrap vm-card-icon-wrap--mission">
                  <Target size={24} />
                </div>
                <span className="vm-card-tag mono-label">{VISION_MISSION.mission.tag}</span>
              </div>
              <h3 className="vm-card-heading">{VISION_MISSION.mission.title}</h3>
              <p className="vm-card-text">{VISION_MISSION.mission.description}</p>
            </div>
          </div>

          {/* We Strive To */}
          <div className="strive-block-card">
            <div className="strive-header">
              <span className="strive-tag mono-label">CORE OBJECTIVES</span>
              <h3 className="strive-title">{VISION_MISSION.striveHeading}</h3>
            </div>
            <ul className="strive-items-list">
              {VISION_MISSION.strivePoints.map((point, idx) => (
                <li key={idx} className="strive-item-row">
                  <CheckCircle2 className="strive-check-icon" size={18} aria-hidden="true" />
                  <span className="strive-item-text">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3 — OUR APPROACH
          ======================================================== */}
      <section id="approach" className="approach-dedicated-section" aria-label="Our Approach">
        <div className="container">
          <div className="about-section-header">
            <span className="mono-label about-section-tag">{OUR_APPROACH.tag}</span>
            <h2 className="about-section-heading">{OUR_APPROACH.heading}</h2>
          </div>

          <div className="approach-intro-block">
            {OUR_APPROACH.intro.map((para, idx) => (
              <p key={idx} className="approach-intro-para">{para}</p>
            ))}
          </div>

          <div className="approach-principles-grid">
            {OUR_APPROACH.principles.map((principle) => (
              <div key={principle.num} className="principle-card">
                <div className="principle-card-top">
                  <span className="principle-num mono-label">{principle.num}</span>
                </div>
                <h3 className="principle-title">{principle.title}</h3>
                <p className="principle-desc">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4 — LEADERSHIP
          ======================================================== */}
      <section id="leadership" className="leadership-dedicated-section" aria-label="Leadership">
        <div className="container">
          <div className="about-section-header">
            <span className="mono-label about-section-tag">{LEADERSHIP_SECTION.tag}</span>
            <h2 className="about-section-heading">{LEADERSHIP_SECTION.heading}</h2>
          </div>

          <div className="leadership-intro-block">
            {LEADERSHIP_SECTION.intro.map((para, idx) => (
              <p key={idx} className="leadership-intro-para">{para}</p>
            ))}
          </div>

          <div className="leadership-profiles-grid">
            {LEADERSHIP_PROFILES.map((profile) => (
              <div key={profile.id} className="corporate-profile-card">
                <div className="profile-photo-frame">
                  <div className="profile-placeholder-graphic">
                    <User size={40} aria-hidden="true" />
                  </div>
                </div>
                <div className="profile-details-body">
                  <span className="profile-role-badge mono-label">{profile.slotLabel}</span>
                  <h3 className="profile-full-name">{profile.role}</h3>
                  <p className="profile-bio-text">{profile.placeholderDesc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="leadership-management-note">
            <span className="note-badge mono-label">NOTE</span>
            <p className="note-text">{LEADERSHIP_SECTION.note}</p>
          </div>
        </div>
      </section>

    </div>
  );
}
