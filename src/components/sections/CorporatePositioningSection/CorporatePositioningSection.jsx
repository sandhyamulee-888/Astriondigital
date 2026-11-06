import React from 'react';
import { 
  Building2, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Cloud,
  ArrowUpRight
} from 'lucide-react';
import ScrollReveal from '../../common/Motion/ScrollReveal';
import './CorporatePositioningSection.css';

export default function CorporatePositioningSection() {
  const cards = [
    {
      id: 'product-led',
      titleLine1: 'Product-',
      titleLine2: 'Led',
      tag: 'SOFTWARE COMPANY',
      desc: 'Dedicated enterprise software product engineering and long-term vision',
      icon: <Cpu size={22} />
    },
    {
      id: 'xenedion',
      titleLine1: 'XENedion',
      titleLine2: '',
      tag: 'FLAGSHIP ERP',
      desc: 'One Platform. Your Entire Business. Connecting core operations in real time',
      icon: <Layers size={22} />
    },
    {
      id: 'core-pillars',
      titleLine1: 'Core',
      titleLine2: 'Pillars',
      tag: 'CORPORATE MTRX',
      desc: 'Product Ownership • Strategy • Innovation • Growth',
      icon: <Building2 size={22} />
    },
    {
      id: 'cloud-native',
      titleLine1: 'Cloud-',
      titleLine2: 'Native',
      tag: 'ENTERPRISE TECH',
      desc: 'Bank-grade security, encrypted database protection, and high-uptime cloud hosting',
      icon: <Cloud size={22} />
    }
  ];

  return (
    <section className="section corporate-positioning-section" aria-label="Corporate Positioning Statement">
      <div className="container">
        <div className="positioning-split-grid">
          {/* Left Column: Corporate Positioning Statement */}
          <ScrollReveal yOffset={24} className="positioning-left-col">
            <div className="mono-label positioning-category-tag">
              <Building2 size={13} className="category-tag-icon" />
              <span>CORPORATE POSITIONING STATEMENT</span>
            </div>

            <h2 className="positioning-main-headline">
              Astrion Digital provides the corporate foundation for intelligent enterprise software
            </h2>

            <div className="positioning-statement-card">
              <p className="statement-lead-paragraph">
                Astrion Digital is an enterprise software company focused on developing technology products that help businesses operate more efficiently, intelligently, and effectively.
              </p>

              <p className="statement-secondary-paragraph">
                Our flagship product, XENedion, is an integrated enterprise resource planning platform designed to connect core business functions, streamline operations, and provide better visibility across the organization.
              </p>

              <div className="statement-foundation-pill">
                <CheckCircle2 size={18} className="foundation-pill-icon" />
                <span>
                  Astrion Digital provides the corporate foundation for XENedion's product development, innovation, growth, and long-term vision.
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: 2x2 Matrix Cards with Dedicated Icons */}
          <div className="positioning-right-col">
            <div className="positioning-cards-2x2-grid">
              {cards.map((card, idx) => (
                <ScrollReveal 
                  key={card.id} 
                  yOffset={20} 
                  delay={0.06 * (idx + 1)}
                  className="positioning-matrix-card"
                >
                  <div className="card-top-header">
                    <h3 className="card-big-title mono-tag">
                      <span>{card.titleLine1}</span>
                      {card.titleLine2 && <br />}
                      {card.titleLine2 && <span>{card.titleLine2}</span>}
                    </h3>
                    <div className="card-icon-pill" aria-hidden="true">
                      {card.icon}
                    </div>
                  </div>

                  <div className="card-tag-wrapper">
                    <span className="card-mono-tag mono-tag">{card.tag}</span>
                  </div>

                  <p className="card-description-text">
                    {card.desc}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
