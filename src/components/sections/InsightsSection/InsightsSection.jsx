import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, FileText, Award, BookOpen } from 'lucide-react';
import { INSIGHTS, INSIGHTS_PAGE_DATA } from '../../../data/insights';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../../common/Motion/ScrollReveal';
import './InsightsSection.css';

export default function InsightsSection() {
  return (
    <section className="section insights-section" id="insights" aria-labelledby="insights-heading">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            label="INSIGHTS // PRACTICAL KNOWLEDGE"
            title={INSIGHTS_PAGE_DATA.headline}
            description={INSIGHTS_PAGE_DATA.description}
            action={
              <Link to="/insights" className="arrow-link">
                <span>Explore All Insights</span>
                <ArrowUpRight size={16} />
              </Link>
            }
          />
        </ScrollReveal>

        {/* 3-Column Editorial Grid for Blogs, Case Studies, and Resources */}
        <StaggerContainer className="insights-editorial-grid" staggerDelay={0.12}>
          {INSIGHTS.map((item) => (
            <StaggerItem key={item.id} className="insight-stagger-item">
              <Link to={item.link} className="insight-editorial-item">
                <div className="insight-item-header">
                  <span className="mono-label insight-category">{item.category}</span>
                  <span className="mono-tag insight-meta">{item.readTime}</span>
                </div>

                <div className="insight-item-label mono-tag">{item.label}</div>
                <h3 className="insight-item-title">{item.title}</h3>
                <p className="insight-item-excerpt">{item.excerpt}</p>

                <div className="insight-item-bottom">
                  <span className="insight-read-link">
                    <span>Explore Section</span>
                    <ArrowUpRight size={15} />
                  </span>
                  <span className="mono-tag insight-date">{item.date}</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
