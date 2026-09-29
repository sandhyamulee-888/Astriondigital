import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../../common/Motion/ScrollReveal';
import './TransformationStatement.css';

export default function TransformationStatement() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    { num: '01', title: 'Strategy', desc: 'Enterprise alignment & feasibility' },
    { num: '02', title: 'Technology', desc: 'Resilient modular architecture' },
    { num: '03', title: 'Implementation', desc: 'Deterministic engineering rollout' },
    { num: '04', title: 'Optimisation', desc: 'Telemetry & continuous evolution' }
  ];

  return (
    <section ref={sectionRef} className="section transformation-section" aria-label="Transformation Philosophy">
      <div className="container">
        <ScrollReveal yOffset={30}>
          <div className="statement-header">
            <div className="mono-label statement-label">TRANSFORMATION PRINCIPLE</div>
            <h2 className="statement-quote">
              “Technology should not sit beside the business. <br className="desktop-break" />
              <span className="statement-highlight">It should move the business forward.</span>”
            </h2>
          </div>
        </ScrollReveal>

        {/* 4-Step Pipeline with Animated Line */}
        <ScrollReveal yOffset={35} delay={0.15}>
          <div className="pipeline-wrapper">
            <div className={`pipeline-connecting-track ${inView ? 'animated' : ''}`}>
              <div className="pipeline-fill-line"></div>
            </div>

            <div className="pipeline-steps-grid">
              {steps.map((step, idx) => (
                <div key={idx} className="pipeline-step-item">
                  <div className="step-marker">
                    <span className="step-circle">{step.num}</span>
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                  {idx < steps.length - 1 && (
                    <ArrowRight size={18} className="step-arrow-divider" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
