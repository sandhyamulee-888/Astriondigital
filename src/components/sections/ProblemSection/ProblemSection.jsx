import React from 'react';
import { Database, Clock, EyeOff, AlertTriangle } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../common/Motion/ScrollReveal';
import './ProblemSection.css';

export default function ProblemSection() {
  const problems = [
    {
      num: '01',
      title: 'Data Trapped in Silos',
      text: 'When finance, sales, and warehouse teams use separate tools, nobody sees the real picture or true inventory.',
      icon: <Database size={24} />
    },
    {
      num: '02',
      title: 'Costly Manual Busywork',
      text: 'Copy-pasting data across spreadsheets wastes hundreds of hours every month and creates expensive billing mistakes.',
      icon: <Clock size={24} />
    },
    {
      num: '03',
      title: 'Flying Blind on Decisions',
      text: "Without unified real-time data, leadership can only react to last month's numbers instead of driving proactive growth.",
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
              Disconnected Tools and Scattered Spreadsheets Are Holding Businesses Back.
            </h2>
            <p className="problem-subtitle" style={{ maxWidth: '720px', margin: '14px auto 0', color: 'var(--text-secondary, #94a3b8)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              When growing companies rely on fragmented software, operations slow down and communication breaks. Astrion Digital solves this by developing unified, intelligent software products.
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
