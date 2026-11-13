import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_HERO } from '../../data/about';
import Button from '../../components/common/Button/Button';
import './AboutPage.css';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inner-page about-main-page">
      {/* ========================================================
          ABOUT ASTRION DIGITAL: BUILDING BETTER BUSINESSES THROUGH BETTER TECHNOLOGY
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
    </div>
  );
}
