import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SOLUTIONS } from '../../../data/solutions';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../common/Motion/ScrollReveal';
import './SolutionsGrid.css';

export default function SolutionsGrid() {
  return (
    <section className="section solutions-section" id="capabilities" aria-labelledby="capabilities-heading">
      <div className="container">
        <ScrollReveal yOffset={28}>
          <SectionHeader
            label="01 / CAPABILITIES"
            title="Technology that connects the entire enterprise."
            description="Astrion delivers cohesive multi-disciplinary technology capabilities designed to modernize core operating infrastructure, automate complex workflows, and unlock sustained enterprise scale."
            action={
              <Link to="/solutions" className="arrow-link">
                <span>View All Capabilities</span>
                <ArrowUpRight size={16} />
              </Link>
            }
          />
        </ScrollReveal>

        {/* Palantir-Style Staggered Editorial Capability Grid */}
        <StaggerContainer staggerDelay={0.07} className="capabilities-grid">
          {SOLUTIONS.map((item) => (
            <StaggerItem key={item.id}>
              <Link
                to={`/solutions/${item.id}`}
                className="capability-card"
              >
                <div className="capability-card-inner">
                  <div className="capability-top">
                    <span className="capability-number mono-tag">{item.num}</span>
                    <div className="capability-arrow-wrap">
                      <ArrowUpRight size={18} className="capability-arrow" />
                    </div>
                  </div>

                  <div className="capability-body">
                    <h3 className="capability-title">{item.title}</h3>
                    <div className="capability-tagline mono-tag">{item.tagline}</div>
                    <p className="capability-desc">{item.shortDesc}</p>
                  </div>

                  <div className="capability-bottom">
                    <span className="capability-explore-text">Explore Capability</span>
                    <div className="capability-hairline"></div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
