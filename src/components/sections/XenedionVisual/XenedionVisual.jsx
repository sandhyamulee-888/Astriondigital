import React, { useState } from 'react';
import { 
  Users, TrendingUp, FileText, ShoppingBag, Briefcase, 
  Layers, Package, DollarSign, UserCheck, Truck, BarChart3,
  Cpu, Database, ShieldCheck
} from 'lucide-react';
import { XENEDION_DATA } from '../../../data/xenedion';
import './XenedionVisual.css';

export default function XenedionVisual() {
  const [selectedModule, setSelectedModule] = useState(XENEDION_DATA.modules[0]);

  // Icon mapping
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

  return (
    <div className="xenedion-visual-container">
      {/* Visual Top Header / System Status */}
      <div className="visual-top-bar">
        <div className="system-chip">
          <Database size={13} className="chip-icon" />
          <span className="mono-tag">UNIFIED RELATIONAL CORE</span>
        </div>
        <div className="system-chip">
          <Cpu size={13} className="chip-icon" />
          <span className="mono-tag">EVENT-DRIVEN LEDGER</span>
        </div>
        <div className="system-chip">
          <ShieldCheck size={13} className="chip-icon" />
          <span className="mono-tag">ZERO-TRUST AUDITED</span>
        </div>
      </div>

      {/* Main Interactive ERP Diagram Layout */}
      <div className="erp-diagram-layout">
        {/* Module Selector Chips Grid */}
        <div className="modules-mesh-grid">
          <span className="mesh-section-label mono-tag">OPERATIONAL MODULES (11 SUBSYSTEMS)</span>
          <div className="modules-buttons-grid">
            {XENEDION_DATA.modules.map((mod) => {
              const isSelected = selectedModule.id === mod.id;
              return (
                <button
                  key={mod.id}
                  className={`module-chip-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedModule(mod)}
                  onMouseEnter={() => setSelectedModule(mod)}
                >
                  <span className="chip-icon-wrap">{getIcon(mod.name)}</span>
                  <span className="chip-title">{mod.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Central Architecture Inspection Panel */}
        <div className="core-inspect-panel">
          <div className="core-hub-header">
            <div className="core-brand-tag">
              <span className="core-pulse-dot"></span>
              <span className="mono-label">XENEDION SYSTEM CORE</span>
            </div>
            <span className="mono-tag telemetry-text">REAL-TIME TELEMETRY</span>
          </div>

          <div className="core-active-module-display">
            <div className="module-display-top">
              <div className="display-category mono-tag">{selectedModule.category} SUBSYSTEM</div>
              <h4 className="display-title">{selectedModule.name}</h4>
            </div>

            <p className="display-desc">{selectedModule.desc}</p>

            <div className="core-bus-specs">
              <div className="spec-row">
                <span className="spec-key mono-tag">Core Interconnect:</span>
                <span className="spec-val mono-tag">gRPC Event Bus (mTLS)</span>
              </div>
              <div className="spec-row">
                <span className="spec-key mono-tag">Sync Latency:</span>
                <span className="spec-val mono-tag">&lt; 3.2ms ledger write</span>
              </div>
              <div className="spec-row">
                <span className="spec-key mono-tag">State Model:</span>
                <span className="spec-val mono-tag">Strict ACID / Distributed Log</span>
              </div>
            </div>

            {/* Interactive Data Stream Indicator */}
            <div className="data-stream-status">
              <span className="stream-ping mono-tag">DATA STREAM CONNECTED</span>
              <div className="stream-meter">
                <div className="stream-bar-fill"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
