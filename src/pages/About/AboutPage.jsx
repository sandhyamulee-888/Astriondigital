import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Target,
  CheckCircle2,
  ArrowRight,
  Search,
  Network,
  TrendingUp,
  ShieldCheck,
  User,
  Sparkles,
  Building2,
  Layers
} from 'lucide-react';
import {
  ABOUT_HERO,
  VISION_MISSION,
  OUR_APPROACH,
  LEADERSHIP
} from '../../data/about';
import Button from '../../components/common/Button/Button';
import './AboutPage.css';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inner-page about-main-page">
      {/* ========================================================
          1. ABOUT US HERO & OVERVIEW
          ======================================================== */}
      <section className="inner-hero-section about-hero-section" aria-label="About Astrion Digital Overview">
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

            {/* Introduction Narrative */}
            <div className="about-intro-narrative">
              {ABOUT_HERO.introParagraphs.map((paragraph, idx) => (
                <p key={idx} className="about-intro-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Our Commitment Callout */}
            <div className="about-commitment-card">
              <div className="commitment-accent-bar" aria-hidden="true" />
              <div className="commitment-content">
                <span className="mono-label commitment-badge">OUR COMMITMENT</span>
                <p className="commitment-statement">
                  {ABOUT_HERO.commitment}
                </p>
              </div>
            </div>

            {/* CTA Group */}
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
          2. DEDICATED VISION & MISSION SECTION
          ======================================================== */}
      <section className="section vision-mission-dedicated-section" id="vision-mission" aria-label="Vision and Mission">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">
              <Compass size={14} className="tag-icon" />
              <span>{VISION_MISSION.tag}</span>
            </div>
            <h2 className="section-title-compact">Vision &amp; Mission</h2>
            <p className="section-desc-compact">
              Driving sustainable business transformation through purposeful enterprise innovation.
            </p>
          </div>

          {/* Vision & Mission Cards Grid */}
          <div className="vm-dedicated-grid">
            {/* Vision Card */}
            <div className="vm-dedicated-card vision-card">
              <div className="vm-card-top-row">
                <span className="mono-label vm-pill blue">
                  <Compass size={14} />
                  <span>{VISION_MISSION.vision.tag}</span>
                </span>
              </div>
              <h3 className="vm-dedicated-title">{VISION_MISSION.vision.title}</h3>
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
              <h3 className="vm-dedicated-title">{VISION_MISSION.mission.title}</h3>
              <p className="vm-dedicated-statement">
                &ldquo;{VISION_MISSION.mission.description}&rdquo;
              </p>
            </div>
          </div>

          {/* We Strive To: Feature Block */}
          <div className="strive-block-card">
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
        </div>
      </section>

      {/* ========================================================
          3. OUR APPROACH SECTION
          ======================================================== */}
      <section className="section approach-dedicated-section section-alt" id="approach" aria-label="Our Approach">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">
              <Target size={14} className="tag-icon" />
              <span>{OUR_APPROACH.tag}</span>
            </div>
            <h2 className="section-title-compact">{OUR_APPROACH.heading}</h2>
            <div className="approach-intro-block">
              {OUR_APPROACH.intro.map((para, idx) => (
                <p key={idx} className="approach-intro-para">{para}</p>
              ))}
            </div>
          </div>

          {/* 4 Key Principles Grid */}
          <div className="approach-principles-grid">
            {OUR_APPROACH.principles.map((principle, idx) => {
              const icons = [
                <Search key="search" size={20} />,
                <Network key="network" size={20} />,
                <TrendingUp key="trending" size={20} />,
                <ShieldCheck key="shield" size={20} />
              ];
              return (
                <div key={principle.num} className="principle-card">
                  <div className="principle-card-top">
                    <span className="principle-num mono-tag">{principle.num}</span>
                    <span className="principle-icon-wrap" aria-hidden="true">
                      {icons[idx]}
                    </span>
                  </div>
                  <h3 className="principle-title">{principle.title}</h3>
                  <p className="principle-desc">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. LEADERSHIP SECTION
          ======================================================== */}
      <section className="section leadership-dedicated-section" id="leadership" aria-label="Leadership Philosophy">
        <div className="container">
          <div className="section-header-compact">
            <div className="mono-label section-tag">
              <User size={14} className="tag-icon" />
              <span>{LEADERSHIP.tag}</span>
            </div>
            <h2 className="section-title-compact">{LEADERSHIP.heading}</h2>
            
            {/* Leadership Introduction */}
            <div className="leadership-intro-block">
              {LEADERSHIP.intro.map((para, idx) => (
                <p key={idx} className="leadership-intro-para">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Leadership Profiles Layout (Clean corporate profile cards) */}
          <div className="leadership-profiles-grid">
            {LEADERSHIP.profiles.map((profile) => (
              <div key={profile.id} className="corporate-profile-card">
                {/* Photo Aspect-Ratio Frame */}
                <div className="profile-photo-frame" aria-label={`${profile.title} Photo Container`}>
                  <div className="profile-placeholder-graphic">
                    <User size={38} className="placeholder-user-icon" />
                    <span className="mono-tag placeholder-slot-label">{profile.slotLabel}</span>
                  </div>
                </div>

                {/* Profile Details */}
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
          <div className="leadership-management-note">
            <span className="note-badge mono-tag">CORPORATE NOTE</span>
            <p className="note-text">
              {LEADERSHIP.note}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. CLOSING CALL TO ACTION
          ======================================================== */}
      <section className="section about-cta-section section-alt">
        <div className="container">
          <div className="about-cta-banner">
            <div className="about-cta-text">
              <span className="mono-label">READY TO GET STARTED?</span>
              <h3>Ready to simplify how your business operates?</h3>
              <p>Schedule a quick walkthrough to see how Astrion Digital and XENedion can help your team.</p>
            </div>
            <div className="about-cta-btn-wrap">
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
