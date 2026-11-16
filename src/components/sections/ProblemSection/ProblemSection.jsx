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
              Managing a growing business shouldn't mean managing an endless collection of applications, spreadsheets and manual processes.
            </h2>
            <div className="problem-narrative">
              <p>
                Disconnected systems create operational bottlenecks, limit visibility and prevent businesses from reaching their full potential. Astrion Digital helps businesses move beyond fragmented operations with integrated enterprise technology that connects people, processes and information – creating a smarter, more agile and scalable business.
              </p>
              <p>
                Your sales, procurement, inventory, finance and operations are interconnected. Yet, when they operate in silos, your business loses the visibility and coordination needed to perform at its best. Astrion Digital bridges these gaps with intelligent enterprise solutions that unify business processes, turn information into actionable insights and create a connected foundation for operational excellence.
              </p>
              <p>
                Disconnected applications, scattered spreadsheets and manual workflows create unnecessary complexity. They consume valuable time, restrict visibility and make business growth harder to manage. Astrion Digital simplifies this complexity with integrated enterprise technology that connects your operations, empowers your teams and puts you in control of your business.
              </p>
            </div>
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
