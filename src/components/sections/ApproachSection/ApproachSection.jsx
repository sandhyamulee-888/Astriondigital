import React, { useEffect, useRef, useState } from 'react';
import { APPROACH_PHASES } from '../../../data/approach';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../common/Motion/ScrollReveal';
import './ApproachSection.css';

export default function ApproachSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section approach-section" id="approach" aria-labelledby="approach-heading">
      <div className="container">
        <ScrollReveal yOffset={28}>
          <SectionHeader
            label="04 / HOW WE WORK"
            title="From complexity to measurable transformation."
            description="Astrion structures enterprise initiatives into four continuous engineering phases that convert strategic ambiguity into scalable, production-tested software."
          />
        </ScrollReveal>

        {/* Desktop Horizontal Connected Timeline */}
        <div className="timeline-container">
          <div className={`timeline-track ${inView ? 'active' : ''}`}>
            <div className="timeline-progress-bar"></div>
          </div>

          <StaggerContainer staggerDelay={0.09} className="timeline-phases-grid">
            {APPROACH_PHASES.map((item, idx) => (
              <StaggerItem key={item.num} className="phase-node">
                <div className="phase-marker-row">
                  <div className="phase-number-badge">
                    <span className="mono-tag phase-num">{item.num}</span>
                  </div>
                  <div className="phase-step-name mono-label">{item.phase}</div>
                </div>

                <div className="phase-body">
                  <h4 className="phase-headline">{item.headline}</h4>
                  <p className="phase-summary">{item.summary}</p>

                  <div className="phase-deliverables-box">
                    <span className="mono-tag deliverables-title">KEY ARTIFACTS</span>
                    <ul className="phase-deliverables-list">
                      {item.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="deliverable-item">
                          <span className="deliverable-bullet">&bull;</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
