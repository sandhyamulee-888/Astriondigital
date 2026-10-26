import React from 'react';
import { Zap, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../common/Motion/ScrollReveal';
import './WhyAstrionSection.css';

export default function WhyAstrionSection() {
  const points = [
    {
      num: '01',
      title: 'Dedicated Product Engineering',
      text: 'We are an enterprise software company, not a generic agency. We design, own, and continually innovate our software platforms with long-term vision.',
      icon: <Zap size={24} />,
      accent: 'var(--brand-blue)'
    },
    {
      num: '02',
      title: 'Unified Operational Core',
      text: 'XENedion unites your sales, inventory, finance, and operations in real time—eliminating messy spreadsheets and manual data re-entry forever.',
      icon: <Sparkles size={24} />,
      accent: 'var(--brand-orange)'
    },
    {
      num: '03',
      title: 'Continuous Innovation & Scale',
      text: 'Built on dependable cloud architecture with bank-grade security, embedded AI automation, and seamless multi-branch scalability.',
      icon: <TrendingUp size={24} />,
      accent: '#10B981'
    }
  ];

  return (
    <section className="section why-astrion-section" id="why-us" aria-labelledby="why-heading">
      <div className="container">
        <ScrollReveal yOffset={24}>
          <div className="why-header text-center">
            <div className="mono-label why-tag">
              <span>WHY ASTRION DIGITAL</span>
            </div>
            <h2 id="why-heading" className="why-title">
              Enterprise Software Built for Long-Term Business Growth.
            </h2>
            <p style={{ maxWidth: '680px', margin: '14px auto 0', color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              We provide the corporate foundation, technology innovation, and dependable engineering backing so your business can operate with total clarity.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.1} className="why-cards-grid">
          {points.map((point, idx) => (
            <StaggerItem key={idx}>
              <div className="why-card-item">
                <div className="why-card-top-row">
                  <div className="why-icon-box" style={{ color: point.accent, background: `${point.accent}14` }}>
                    {point.icon}
                  </div>
                  <h3 className="why-card-heading">{point.title}</h3>
                </div>
                <p className="why-card-copy">{point.text}</p>
                <div className="why-card-footer">
                  <CheckCircle2 size={15} style={{ color: point.accent }} />
                  <span className="why-card-pill mono-tag">PRODUCT PILLAR</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
