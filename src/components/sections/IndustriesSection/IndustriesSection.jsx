import React, { useState } from 'react';
import { Factory, Truck, ShoppingCart, CheckCircle2, Shirt, Car } from 'lucide-react';
import Button from '../../common/Button/Button';
import { ScrollReveal } from '../../common/Motion/ScrollReveal';
import './IndustriesSection.css';

export default function IndustriesSection() {
  const tabs = [
    {
      id: 'retail',
      name: 'Retail',
      icon: <ShoppingCart size={18} />,
      headline: 'Manage Retail Operations with Greater Control and Visibility.',
      description: 'Retail businesses need to manage customers, sales, inventory and purchasing while maintaining consistency across their operations. XENedion helps retail businesses bring essential operational functions together through an integrated business management platform.',
      deliverables: [
        'Sales and order management',
        'Inventory and stock management',
        'Vendor and purchase management',
        'Goods receipt and warehouse operations',
        'Financial and operational reporting'
      ],
      quote: 'Retail operations connected in real time. Manages customer transactions, multi-channel stock levels, and purchasing workflows within a single system.',
      metric1Label: 'OPERATIONS STATUS',
      metric1Value: 'POS & STOCK: CONNECTED',
      metric2Label: 'REPORTING',
      metric2Value: 'FINANCIAL VISIBILITY: 100%',
      ctaText: 'Explore Retail Solutions',
      href: '/industries/retail'
    },
    {
      id: 'distribution',
      name: 'Distribution',
      icon: <Truck size={18} />,
      headline: 'Connect Your Distribution Operations.',
      description: 'Distribution businesses operate across suppliers, warehouses, sales teams and customers. Maintaining accurate inventory and coordinating orders are essential to efficient operations. XENedion provides an integrated environment to manage key distribution processes and improve operational visibility.',
      deliverables: [
        'Customer and vendor management',
        'Sales orders and procurement',
        'Inventory and warehouse management',
        'Goods receipt and stock movement',
        'Logistics coordination',
        'Business performance reporting'
      ],
      quote: 'Unified distribution environment connecting vendor orders, multi-warehouse stock allocations, goods receipts, and operational performance.',
      metric1Label: 'WAREHOUSE VISIBILITY',
      metric1Value: 'MULTI-FACILITY: LIVE',
      metric2Label: 'ORDER PROCESS',
      metric2Value: 'ALLOCATION: SYNCHRONIZED',
      ctaText: 'Explore Distribution Solutions',
      href: '/industries/distribution'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: <Factory size={18} />,
      headline: 'Bring Greater Structure to Manufacturing Operations.',
      description: 'Manufacturing businesses require coordination between procurement, inventory, production-related activities, warehousing and finance. An integrated business management environment helps businesses improve information flow and establish better operational control. XENedion supports the connected business processes required to manage manufacturing organizations.',
      deliverables: [
        'Procurement and vendor management',
        'Purchase orders and goods receipt',
        'Inventory management',
        'Warehouse operations',
        'Sales and order management',
        'Financial and operational reporting'
      ],
      quote: 'Structured manufacturing management supporting procurement, warehouse coordination, production-related processes, and financial ledger integration.',
      metric1Label: 'PROCUREMENT & PO',
      metric1Value: 'SUPPLIER ORDERS: ACTIVE',
      metric2Label: 'CONTROL',
      metric2Value: 'OPERATIONAL FLOW: UNIFIED',
      ctaText: 'Explore Manufacturing Solutions',
      href: '/industries/manufacturing'
    },
    {
      id: 'garments',
      name: 'Garments',
      icon: <Shirt size={18} />,
      headline: 'Manage Your Garment Business from Procurement to Delivery.',
      description: 'The garment industry involves complex coordination between materials, suppliers, inventory, production activities and customer orders. Businesses need better visibility and control over the movement of materials and finished goods. XENedion provides an integrated platform to connect important business functions and improve operational coordination.',
      deliverables: [
        'Vendor and procurement management',
        'Purchase and goods receipt',
        'Inventory management',
        'Warehouse operations',
        'Customer and sales order management',
        'Financial reporting'
      ],
      quote: 'End-to-end operational coordination for the garment sector, connecting materials, suppliers, inventory movements, and customer order fulfillment.',
      metric1Label: 'MATERIAL TRACKING',
      metric1Value: 'PROCUREMENT TO GOODS: LIVE',
      metric2Label: 'ORDER FULFILLMENT',
      metric2Value: 'DISPATCH STATUS: TRACKED',
      ctaText: 'Explore Garment Industry Solutions',
      href: '/industries/garments'
    },
    {
      id: 'automotive',
      name: 'Automotive',
      icon: <Car size={18} />,
      headline: 'Drive Efficiency Across Automotive Business Operations.',
      description: 'Automotive component manufacturers, distributors and traders operate in an environment where procurement, inventory accuracy, order management and supplier coordination are critical. XENedion helps connect these essential business functions through an integrated ERP platform.',
      deliverables: [
        'Vendor and supplier management',
        'Procurement and purchase orders',
        'Inventory and warehouse management',
        'Customer and sales management',
        'Order processing',
        'Logistics and financial management'
      ],
      quote: 'Essential business functions connected for automotive operations, delivering structured inventory management, supplier coordination, and order processing.',
      metric1Label: 'SUPPLIER CODES',
      metric1Value: 'VENDOR PROCESS: CONNECTED',
      metric2Label: 'INVENTORY ACCURACY',
      metric2Value: 'PARTS TRACKING: ACTIVE',
      ctaText: 'Explore Automotive Solutions',
      href: '/industries/automotive'
    }
  ];

  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section className="section industries-section" id="industries" aria-labelledby="industries-heading">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal yOffset={24}>
          <div className="industries-header text-center">
            <div className="mono-label industries-tag">
              <span>INDUSTRIES</span>
            </div>
            <h2 id="industries-heading" className="industries-title">
              Technology That Understands Your Industry.
            </h2>
            <p style={{ maxWidth: '780px', margin: '14px auto 0', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Every industry has its own operating environment, business processes and challenges. Astrion Digital focuses on delivering integrated business management solutions that address the operational needs of different industries.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigation Pill Strip */}
        <ScrollReveal yOffset={20} delay={0.06}>
          <div className="industries-tabs-bar" role="tablist" aria-label="Industry tabs">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`industry-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  <span className="industry-tab-icon">{tab.icon}</span>
                  <span className="industry-tab-label">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Tab Panel */}
        <ScrollReveal yOffset={24} delay={0.1}>
          <div className="industry-tab-content" key={activeTab.id}>
            <div className="industry-content-left">
              <span className="mono-tag industry-active-badge">INDUSTRY SOLUTION</span>
              <h3 className="industry-content-name">{activeTab.name}</h3>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#0F172A', margin: '6px 0 12px', lineHeight: 1.4 }}>
                {activeTab.headline}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                {(activeTab.paragraphs || [activeTab.description]).map((para, idx) => (
                  <p key={idx} className="industry-content-lead" style={{ margin: 0, lineHeight: '1.6' }}>
                    {para}
                  </p>
                ))}
              </div>

              <div className="industry-deliverables-list">
                <span className="mono-tag" style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-tertiary)', display: 'block', marginBottom: '8px' }}>
                  KEY BUSINESS AREAS:
                </span>
                {activeTab.deliverables.map((item, idx) => (
                  <div key={idx} className="deliverable-item">
                    <CheckCircle2 size={16} className="deliverable-check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="industry-action-row">
                <Button
                  to={activeTab.href}
                  variant="primary"
                  size="md"
                  icon="arrow"
                >
                  {activeTab.ctaText || `Explore ${activeTab.name} Solutions`}
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="md"
                >
                  Request a Product Demonstration
                </Button>
              </div>
            </div>

            <div className="industry-content-right">
              <div className="industry-preview-card">
                <div className="preview-card-header">
                  <div className="preview-dot green"></div>
                  <div className="preview-dot amber"></div>
                  <div className="preview-dot blue"></div>
                  <span className="mono-tag preview-header-title">OPERATIONS MONITOR</span>
                </div>
                <div className="preview-card-body">
                  <div className="preview-metric-row">
                    <div className="metric-box">
                      <span className="mono-tag metric-tag">{activeTab.metric1Label || 'SYNC STATUS'}</span>
                      <span className="metric-status green-text">{activeTab.metric1Value || 'OPERATIONS: LIVE'}</span>
                    </div>
                    <div className="metric-box">
                      <span className="mono-tag metric-tag">{activeTab.metric2Label || 'LEDGER INTEGRITY'}</span>
                      <span className="metric-status green-text">{activeTab.metric2Value || 'STATUS: UNIFIED'}</span>
                    </div>
                  </div>
                  <div className="preview-quote-box">
                    <p className="preview-quote-text">
                      &ldquo;{activeTab.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
