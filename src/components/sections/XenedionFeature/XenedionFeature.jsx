import React from 'react';
import { DollarSign, Layers, Users, ShoppingBag } from 'lucide-react';
import Button from '../../common/Button/Button';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../common/Motion/ScrollReveal';
import './XenedionFeature.css';

const PILLAR_ICONS = {
  DollarSign: <DollarSign size={20} />,
  Layers: <Layers size={20} />,
  Users: <Users size={20} />,
  ShoppingBag: <ShoppingBag size={20} />
};

export default function XenedionFeature() {
  const pillars = [
    {
      title: 'CRM & Sales Management',
      desc: 'Manage customer information, sales activities, opportunities, quotations and sales orders through a connected process.',
      icon: 'Users'
    },
    {
      title: 'Inventory & Warehouse Management',
      desc: 'Monitor stock movements, inventory positions, warehouse activities and goods receipts.',
      icon: 'Layers'
    },
    {
      title: 'Procurement & Vendor Management',
      desc: 'Organise vendor information, purchase requirements, purchase orders and goods receipt processes.',
      icon: 'ShoppingBag'
    },
    {
      title: 'Finance & Accounts',
      desc: 'Connect business transactions with financial management, accounting processes and operational reporting.',
      icon: 'DollarSign'
    }
  ];

  return (
    <section className="section xenedion-section" id="xenedion" aria-labelledby="xenedion-heading">
      <div className="xenedion-ambient-glow" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <ScrollReveal yOffset={24}>
          <div className="xenedion-header-row">
            <div className="xenedion-titles">
              <div className="mono-label xenedion-tag">FLAGSHIP PRODUCT // XENEDION ERP</div>
              <h2 id="xenedion-heading" className="product-showcase-title">
                Meet XENedion ERP
              </h2>
              <p className="product-copy">
                One Platform. Every Business Function. Complete Control.
              </p>
              <div className="mono-tag" style={{ color: 'var(--brand-blue, #1c75bd)', marginTop: '12px', fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--brand-blue, #1c75bd)' }}></span>
                <span>Corporate Foundation &bull; Long-Term Vision &bull; Backed by Astrion Digital</span>
              </div>
            </div>

            <div className="xenedion-header-cta">
              <Button
                to="/solutions/erp"
                variant="primary"
                size="lg"
                icon="arrow"
              >
                Explore XENedion ERP
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Grid (4 Core Pillars) */}
        <StaggerContainer staggerDelay={0.08} className="xenedion-pillars-grid">
          {pillars.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="xenedion-pillar-card">
                <div className="pillar-card-top">
                  <div className="pillar-icon-box">
                    {PILLAR_ICONS[item.icon] || <Layers size={20} />}
                  </div>
                  <h3 className="pillar-title">{item.title}</h3>
                </div>
                <p className="pillar-desc">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
