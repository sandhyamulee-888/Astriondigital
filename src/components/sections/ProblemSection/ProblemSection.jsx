import React from 'react';
import { Database, Clock, EyeOff, AlertTriangle } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../common/Motion/ScrollReveal';
import './ProblemSection.css';

export default function ProblemSection() {
  const problems = [
    {
      num: '01',
      title: 'Scattered Information',
      text: 'When sales, finance, and warehouse teams use different apps, nobody has the complete picture or knows exact stock levels.',
      icon: <Database size={24} />
    },
    {
      num: '02',
      title: 'Hours Lost to Manual Work',
      text: 'Copying and updating data across multiple spreadsheets wastes valuable hours every week and leads to costly errors.',
      icon: <Clock size={24} />
    },
    {
      num: '03',
      title: 'Hard to Make Fast Decisions',
      text: 'Without live numbers in one place, managers must rely on outdated reports instead of making quick, confident choices.',
      icon: <EyeOff size={24} />
    }
  ];

  return (
    <section className="section problem-section" id="problem" aria-labelledby="problem-heading">
      <div className="container">
        <ScrollReveal yOffset={24}>
          <div className="problem-header text-center">
            <div className="mono-label problem-tag">
              <AlertTriangle size={14} className="problem-tag-icon" />
              <span>THE OPERATIONAL CHALLENGE</span>
            </div>
            <h2 id="problem-heading" className="problem-title">
              Using Too Many Apps and Spreadsheets Slows Your Business Down.
            </h2>
            <p className="problem-subtitle" style={{ maxWidth: '720px', margin: '14px auto 0', color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              When teams use different tools for daily work, tasks take longer and mistakes happen. Astrion Digital brings all your operations together into one simple, smart platform.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.1} className="problem-cards-grid">
          {problems.map((card, idx) => (
            <StaggerItem key={idx}>
              <div className="problem-card">
                <div className="problem-card-top">
                  <div className="problem-icon-wrapper">
                    {card.icon}
                  </div>
                  <h3 className="problem-card-title">{card.title}</h3>
                </div>
                <p className="problem-card-text">{card.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
