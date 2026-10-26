import React, { useState } from 'react';
import { Factory, Truck, ShoppingCart, CheckCircle2 } from 'lucide-react';
import Button from '../../common/Button/Button';
import { ScrollReveal } from '../../common/Motion/ScrollReveal';
import './IndustriesSection.css';

export default function IndustriesSection() {
  const tabs = [
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: <Factory size={18} />,
      headline: 'Precision Production & Shop Floor Orchestration',
      description: 'Plan factory floor shifts, manage raw material stock, minimize machine downtime, and track product quality.',
      deliverables: [
        'Shift scheduling and real-time machine capacity planning',
        'Raw materials BOM traceability and automatic replenishment',
        'Predictive maintenance telemetry to eliminate unplanned downtime',
        'End-to-end batch quality tracking and ISO compliance'
      ],
      href: '/industries/manufacturing'
    },
    {
      id: 'distribution-logistics',
      name: 'Distribution & Logistics',
      icon: <Truck size={18} />,
      headline: 'Agile Dispatch & Multi-Node Fleet Visibility',
      description: 'Speed up order dispatch, track fleet routes, and eliminate costly shipping delays.',
      deliverables: [
        'Automated pick, pack, and wave order fulfillment workflows',
        'Real-time GPS vehicle telematics and dynamic route optimization',
        'Multi-depot inventory visibility with automated balancing',
        'Carrier rate comparison and instant e-way bill generation'
      ],
      href: '/industries/logistics'
    },
    {
      id: 'retail-wholesale',
      name: 'Retail & Wholesale',
      icon: <ShoppingCart size={18} />,
      headline: 'Unified Omni-Channel Commercial Operations',
      description: 'Keep retail stores, online orders, and backend stock synchronized without overselling.',
      deliverables: [
        'Single real-time inventory pool across physical stores and eCommerce',
        'Point of Sale (POS) offline-first checkout with auto-sync',
        'Dynamic B2B customer pricing tiers and credit term rules',
        'Automated replenishment triggers based on seasonal sell-through'
      ],
      href: '/industries/retail'
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
              <span>BUILT FOR YOUR INDUSTRY</span>
            </div>
            <h2 id="industries-heading" className="industries-title">
              Custom-Fit for How Your Business Actually Works.
            </h2>
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
              <span className="mono-tag industry-active-badge">INDUSTRY BLUEPRINT</span>
              <h3 className="industry-content-name">{activeTab.name}</h3>
              <p className="industry-content-lead">{activeTab.description}</p>

              <div className="industry-deliverables-list">
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
                  Explore {activeTab.name} Blueprint
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="md"
                >
                  Schedule a Quick Walkthrough
                </Button>
              </div>
            </div>

            <div className="industry-content-right">
              <div className="industry-preview-card">
                <div className="preview-card-header">
                  <div className="preview-dot green"></div>
                  <div className="preview-dot amber"></div>
                  <div className="preview-dot blue"></div>
                  <span className="mono-tag preview-header-title">LIVE OPERATIONS MONITOR</span>
                </div>
                <div className="preview-card-body">
                  <div className="preview-metric-row">
                    <div className="metric-box">
                      <span className="mono-tag metric-tag">SYNC STATUS</span>
                      <span className="metric-status green-text">SYNC: ACTIVE</span>
                    </div>
                    <div className="metric-box">
                      <span className="mono-tag metric-tag">LEDGER INTEGRITY</span>
                      <span className="metric-status green-text">STOCK RECONCILED: 100%</span>
                    </div>
                  </div>
                  <div className="preview-quote-box">
                    <p className="preview-quote-text">
                      &ldquo;Shop-floor operations connected in real time. Automatically alerts managers when raw materials run low or machines require scheduled maintenance.&rdquo;
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
