import React, { useState } from 'react';
import { 
  Users, TrendingUp, FileText, ShoppingBag, Briefcase, 
  Layers, Package, DollarSign, UserCheck, Truck, BarChart3,
  Cpu, Database, ShieldCheck, Zap, Activity
} from 'lucide-react';
import { XENEDION_DATA } from '../../../data/xenedion';
import './XenedionVisual.css';

const MODULE_METRICS = {
  crm: { kpi: 'Comprehensive Pipeline Visibility', protocol: 'mTLS 1.3 Event Stream', speed: 'Live Lead Routing' },
  sales: { kpi: 'Automated Rev-Rec', protocol: 'Deterministic Event Bus', speed: 'Instant Approvals' },
  orders: { kpi: 'Synchronized Allocation', protocol: 'mTLS 1.3 Event Stream', speed: 'Dynamic Routing' },
  purchasing: { kpi: '3-Way Match Verified', protocol: 'Deterministic Event Bus', speed: 'Automated PO Dispatch' },
  vendor: { kpi: 'Continuous SLA Tracking', protocol: 'mTLS 1.3 Event Stream', speed: 'Automated RFQ Portal' },
  inventory: { kpi: 'Multi-Site Real-Time', protocol: 'Deterministic Event Bus', speed: 'Predictive Reorder' },
  warehouse: { kpi: 'Wave Pick Optimization', protocol: 'mTLS 1.3 Event Stream', speed: 'Guided Workflows' },
  finance: { kpi: 'Continuous Real-Time Close', protocol: 'Deterministic Ledger', speed: 'Multi-Currency Core' },
  hr: { kpi: 'Single Workforce Record', protocol: 'mTLS 1.3 Event Stream', speed: 'Automated Payroll Sync' },
  logistics: { kpi: 'Carrier Mesh API', protocol: 'Deterministic Event Bus', speed: 'Dynamic Route Optimization' },
  analytics: { kpi: 'Continuous OLAP Telemetry', protocol: 'Streaming Ingestion', speed: 'Real-time Aggregations' }
};

export default function XenedionVisual() {
  const [selectedModule, setSelectedModule] = useState(XENEDION_DATA.modules.find(m => m.id === 'finance') || XENEDION_DATA.modules[0]);
  const [simulating, setSimulating] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Ledger', 'Supply Chain', 'Procurement', 'Operations', 'Revenue', 'Customer', 'People', 'Intelligence'];

  const filteredModules = activeCategory === 'All'
    ? XENEDION_DATA.modules
    : XENEDION_DATA.modules.filter(m => m.category === activeCategory);

  const getIcon = (name) => {
    switch (name) {
      case 'CRM': return <Users size={16} />;
      case 'Sales': return <TrendingUp size={16} />;
      case 'Orders': return <FileText size={16} />;
      case 'Purchasing': return <ShoppingBag size={16} />;
      case 'Vendor Management': return <Briefcase size={16} />;
      case 'Inventory': return <Layers size={16} />;
      case 'Warehouse': return <Package size={16} />;
      case 'Finance': return <DollarSign size={16} />;
      case 'HR': return <UserCheck size={16} />;
      case 'Logistics': return <Truck size={16} />;
      case 'Analytics': return <BarChart3 size={16} />;
      default: return <Cpu size={16} />;
    }
  };

  const handleSimulate = () => {
    setSimulating(true);
    setTimeout(() => setSimulating(false), 1200);
  };

  const currentMetrics = MODULE_METRICS[selectedModule.id] || { kpi: 'Real-time Operational Sync', protocol: 'Deterministic Event Bus', speed: 'Event-Driven' };

  return (
    <div className="xenedion-visual-container" aria-label="XENedion ERP Interactive Module Showcase">
      {/* Top Telemetry & Architecture Badges */}
      <div className="visual-top-bar">
        <div className="system-chip">
          <Database size={13} className="chip-icon blue" />
          <span className="mono-tag">UNIFIED RELATIONAL CORE</span>
        </div>
        <div className="system-chip">
          <Cpu size={13} className="chip-icon orange" />
          <span className="mono-tag">EVENT-DRIVEN ACID LEDGER</span>
        </div>
        <div className="system-chip">
          <ShieldCheck size={13} className="chip-icon green" />
          <span className="mono-tag">ZERO-TRUST AUDIT TRAIL</span>
        </div>

        <div className="top-bar-right mono-tag">
          <span className="ping-dot"></span>
          <span>11 CONNECTED SUBSYSTEMS // REAL-TIME SYNCHRONIZATION</span>
        </div>
      </div>

      {/* Main Interactive ERP Layout */}
      <div className="erp-diagram-layout">
        {/* Left Column: Interactive Subsystem Grid */}
        <div className="modules-mesh-grid">
          <div className="mesh-header-row">
            <span className="mesh-section-label mono-tag">SELECT OPERATIONAL SUBSYSTEM</span>
            <span className="mesh-count mono-tag">{filteredModules.length} OF 11</span>
          </div>

          {/* Quick Category Filter Pills */}
          <div className="category-filter-strip">
            {categories.slice(0, 5).map(cat => (
              <button
                key={cat}
                className={`cat-pill-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="modules-buttons-grid">
            {filteredModules.map((mod) => {
              const isSelected = selectedModule.id === mod.id;
              return (
                <button
                  key={mod.id}
                  className={`module-chip-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedModule(mod)}
                  aria-pressed={isSelected}
                >
                  <span className="chip-icon-wrap">{getIcon(mod.name)}</span>
                  <div className="chip-text-wrap">
                    <span className="chip-title">{mod.name}</span>
                    <span className="chip-cat mono-tag">{mod.category}</span>
                  </div>
                  {isSelected && <span className="chip-active-dot"></span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Central Subsystem Inspection & Live Telemetry Panel */}
        <div className="core-inspect-panel">
          <div className="core-hub-header">
            <div className="core-brand-tag">
              <span className="core-pulse-dot"></span>
              <span className="mono-label">XENEDION CORE SUBSYSTEM INSPECTOR</span>
            </div>
            <span className="mono-tag telemetry-status">
              <Activity size={12} className="telemetry-live-icon" />
              STATUS: SYNCED
            </span>
          </div>

          <div className="core-active-module-display">
            <div className="module-display-top">
              <div className="display-meta-row">
                <span className="display-category mono-tag">{selectedModule.category.toUpperCase()} ARCHITECTURE</span>
                <span className="subsystem-id mono-tag">ID // MOD_{selectedModule.id.toUpperCase()}</span>
              </div>
              <h4 className="display-title">{selectedModule.name}</h4>
            </div>

            <p className="display-desc">{selectedModule.desc}</p>

            {/* Live Subsystem Architecture Spec Grid */}
            <div className="core-bus-specs">
              <div className="spec-row">
                <span className="spec-key mono-tag">Architecture Target:</span>
                <span className="spec-val-highlight mono-tag">{currentMetrics.kpi}</span>
              </div>
              <div className="spec-row">
                <span className="spec-key mono-tag">Event Dispatch Channel:</span>
                <span className="spec-val mono-tag">{currentMetrics.protocol}</span>
              </div>
              <div className="spec-row">
                <span className="spec-key mono-tag">Workflow Engine:</span>
                <span className="spec-val mono-tag">{currentMetrics.speed}</span>
              </div>
              <div className="spec-row">
                <span className="spec-key mono-tag">State Storage:</span>
                <span className="spec-val mono-tag">Distributed Ledger // Strict ACID</span>
              </div>
            </div>

            {/* Interactive Transaction Simulation Trigger */}
            <div className="simulator-action-strip">
              <button 
                className={`simulate-btn ${simulating ? 'simulating' : ''}`}
                onClick={handleSimulate}
                disabled={simulating}
              >
                <Zap size={14} className={simulating ? 'anim-pulse' : ''} />
                <span>{simulating ? 'Dispatching Test Event...' : 'Simulate Live Transaction'}</span>
              </button>

              <div className="stream-telemetry-note mono-tag">
                {simulating ? '⚡ Consensus Reached: 0.9ms' : 'Event Bus Idle // Ready'}
              </div>
            </div>

            {/* Interactive Data Stream Indicator */}
            <div className="data-stream-status">
              <div className="stream-header-row">
                <span className="stream-ping mono-tag">REAL-TIME DATA STREAM CONNECTED</span>
                <span className="stream-rate mono-tag">48,920 OPS/SEC</span>
              </div>
              <div className="stream-meter">
                <div className={`stream-bar-fill ${simulating ? 'boost' : ''}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
