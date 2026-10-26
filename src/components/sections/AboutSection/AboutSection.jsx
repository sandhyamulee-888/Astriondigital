import React from 'react';
import { Database, Zap, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../common/Motion/ScrollReveal';
import './AboutSection.css';

export default function AboutSection() {
  const customerCards = [
    {
      num: '01',
      title: 'One Single Source of Truth',
      desc: 'All your teams—from the warehouse floor to accounting—work off the exact same live numbers. No more mismatched reports.',
      icon: <Database size={24} />,
      accentColor: '#00D2FF'
    },
    {
      num: '02',
      title: 'Zero Manual Busywork',
      desc: 'Automate invoices, purchase orders, and stock reordering so your staff can focus on growing the company.',
      icon: <Zap size={24} />,
      accentColor: '#FF6B35'
    },
    {
      num: '03',
      title: 'Quick, Effortless Deployment',
      desc: 'Get migrated and running in weeks, not years, with guided onboarding and simple team training.',
      icon: <Clock size={24} />,
      accentColor: '#10B981'
    },
    {
      num: '04',
      title: 'Bank-Grade Data Security',
      desc: 'Built-in data encryption, role-based user permissions, and reliable cloud backups ensure your business data is always safe.',
      icon: <ShieldCheck size={24} />,
      accentColor: '#818CF8'
    }
  ];

  return (
    <section className="section about-section why-astrion-speed-section" id="why-astrion" aria-labelledby="why-astrion-heading">
      <div className="about-ambient-glow" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <ScrollReveal yOffset={24}>
          <div className="why-speed-header text-center">
            <div className="mono-label why-speed-tag">
              <span>WHY ASTRION DIGITAL</span>
            </div>
            <h2 id="why-astrion-heading" className="why-speed-headline">
              Built for Speed.{' '}
              <span className="why-speed-gradient">Designed for Total Clarity.</span>
            </h2>
            <p className="why-speed-subhead">
              Most enterprise software is too slow, too complicated, and takes years to install. We built our platform to give you instant visibility without the headache.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Customer-Focused Advantage Cards */}
        <StaggerContainer staggerDelay={0.08} className="why-speed-cards-grid">
          {customerCards.map((card, idx) => (
            <StaggerItem key={idx}>
              <div className="why-speed-card">
                <div className="why-speed-card-top">
                  <div 
                    className="why-speed-icon-box"
                    style={{ 
                      color: card.accentColor,
                      backgroundColor: `${card.accentColor}14`,
                      borderColor: `${card.accentColor}30`
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="why-speed-card-title">{card.title}</h3>
                </div>
                <p className="why-speed-card-desc">{card.desc}</p>
                <div className="why-speed-card-footer">
                  <CheckCircle2 size={15} style={{ color: card.accentColor }} />
                  <span className="mono-tag why-speed-pill">CUSTOMER ADVANTAGE</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

