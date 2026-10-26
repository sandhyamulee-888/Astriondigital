import React, { useState } from 'react';
import './HeroVisual.css';

export default function HeroVisual() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    { id: 'ai', label: 'AI Models', x: 300, y: 70, type: 'intelligence', timing: 'Real-Time', proto: 'Tensor/gRPC', desc: 'Predictive neural routing & enterprise agents' },
    { id: 'cloud', label: 'Cloud & Infra', x: 100, y: 140, type: 'infrastructure', timing: 'High-Speed', proto: 'BGP/K8s', desc: 'Hybrid-cloud orchestration & zero-downtime mesh' },
    { id: 'data', label: 'Data Lakehouse', x: 500, y: 140, type: 'data', timing: 'Streaming', proto: 'Apache Iceberg', desc: 'Real-time streaming telemetry & unified storage' },
    { id: 'integration', label: 'API Mesh', x: 80, y: 280, type: 'network', timing: 'Event-Driven', proto: 'GraphQL/EDA', desc: 'High-throughput distributed enterprise event bus' },
    { id: 'apps', label: 'Core Apps', x: 520, y: 280, type: 'application', timing: 'High-Availability', proto: 'HTTPS/REST', desc: 'Mission-critical distributed enterprise software' },
    { id: 'security', label: 'Cybersecurity', x: 130, y: 420, type: 'security', timing: 'Zero-Trust', proto: 'mTLS/Zero-Trust', desc: 'Zero-trust cryptographic identity fabric' },
    { id: 'automation', label: 'Intelligent Bots', x: 470, y: 420, type: 'automation', timing: 'Automated', proto: 'Event Loops', desc: 'Autonomous background workflow automation' },
    { id: 'xenedion', label: 'XENedion ERP', x: 300, y: 470, type: 'platform', timing: 'Synchronous', proto: 'Core Ledger', desc: 'Unified transactional ERP backbone & operations' },
  ];

  const centerNode = { label: 'ASTRION', x: 300, y: 270 };
  const currentNode = nodes.find((n) => n.id === activeNode);

  return (
    <div className="hero-visual-wrapper" aria-label="Astrion Enterprise Architecture Map">
      {/* SVG Connected Architecture Graph */}
      <svg 
        className="hero-visual-svg" 
        viewBox="0 0 600 540" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(28, 117, 189)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="rgb(235, 100, 62)" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(28, 117, 189)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="rgb(235, 100, 62)" stopOpacity="0.9" />
          </linearGradient>

          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(28, 117, 189, 0.12)" />
            <stop offset="60%" stopColor="rgba(235, 100, 62, 0.04)" />
            <stop offset="100%" stopColor="rgba(28, 117, 189, 0)" />
          </radialGradient>
        </defs>

        {/* Ambient Concentric Orbit Rings */}
        <g className="grid-marks" opacity="0.6">
          <circle cx="300" cy="270" r="140" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="300" cy="270" r="220" stroke="rgba(15, 23, 42, 0.05)" strokeWidth="1" />
          <circle cx="300" cy="270" r="280" fill="url(#centerGlow)" />
        </g>

        {/* Dynamic Connection Lines from Center to Surrounding Nodes */}
        {nodes.map((node) => {
          const isHighlighted = activeNode === node.id;
          return (
            <g key={`conn-${node.id}`}>
              {/* Base line */}
              <line
                x1={centerNode.x}
                y1={centerNode.y}
                x2={node.x}
                y2={node.y}
                stroke={isHighlighted ? 'rgb(28, 117, 189)' : 'rgba(15, 23, 42, 0.14)'}
                strokeWidth={isHighlighted ? 2.5 : 1.25}
                strokeOpacity={isHighlighted ? 1 : 0.7}
              />
              {/* Animated data flow pulses */}
              <line
                x1={centerNode.x}
                y1={centerNode.y}
                x2={node.x}
                y2={node.y}
                stroke="url(#pulseGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 8"
                className="flow-line"
              />
            </g>
          );
        })}

        {/* Inter-Node Mesh Lines */}
        <line x1="100" y1="140" x2="300" y2="70" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="300" y1="70" x2="500" y2="140" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="80" y1="280" x2="130" y2="420" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="520" y1="280" x2="470" y2="420" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="130" y1="420" x2="300" y2="470" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="470" y1="420" x2="300" y2="470" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1" strokeDasharray="3 6" />

        {/* Central ASTRION System Core Node */}
        <g className="center-node-group">
          <circle cx={centerNode.x} cy={centerNode.y} r="48" fill="#FFFFFF" stroke="rgb(28, 117, 189)" strokeWidth="2.5" className="anim-glow" />
          <circle cx={centerNode.x} cy={centerNode.y} r="40" fill="#F8FAFC" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1" />
          <text 
            x={centerNode.x} 
            y={centerNode.y + 4} 
            textAnchor="middle" 
            className="svg-center-text"
          >
            ASTRION
          </text>
          <text 
            x={centerNode.x} 
            y={centerNode.y + 18} 
            textAnchor="middle" 
            className="svg-center-subtext"
          >
            SYSTEM CORE
          </text>
        </g>

        {/* Peripheral System Nodes */}
        {nodes.map((node) => {
          const isNodeActive = activeNode === node.id;
          const isOrangeAccent = node.id === 'xenedion' || node.id === 'security' || node.id === 'automation';
          const nodeColor = isOrangeAccent ? 'rgb(235, 100, 62)' : 'rgb(28, 117, 189)';
          
          return (
            <g
              key={node.id}
              className={`node-group ${isNodeActive ? 'active' : ''}`}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Outer Ring */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isNodeActive ? 24 : 19}
                fill="#FFFFFF"
                stroke={isNodeActive ? nodeColor : 'rgba(15, 23, 42, 0.16)'}
                strokeWidth={isNodeActive ? 2.5 : 1.5}
                className={isNodeActive ? 'anim-glow' : ''}
              />
              {/* Inner Node Accent */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isNodeActive ? 8 : 6}
                fill={nodeColor}
                className="anim-pulse"
              />
              {/* Label */}
              <text
                x={node.x}
                y={node.y + (node.y > 300 ? 36 : -26)}
                textAnchor="middle"
                className={`svg-node-label ${isNodeActive ? 'active' : ''}`}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Simple Trust Metrics Strip */}
      <div className="visual-telemetry-badge" style={{ justifyContent: 'center' }}>
        <div className="telemetry-details" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', width: '100%' }}>
          <span className="mono-tag" style={{ color: '#10b981', fontWeight: 600, letterSpacing: '0.04em' }}>
            ✓ 100% Real-Time Sync
          </span>
          <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>|</span>
          <span className="mono-tag" style={{ color: '#00d2ff', fontWeight: 600, letterSpacing: '0.04em' }}>
            ✓ Cloud-Based &amp; Secure
          </span>
          <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>|</span>
          <span className="mono-tag" style={{ color: '#ff6b35', fontWeight: 600, letterSpacing: '0.04em' }}>
            ✓ Built to Scale
          </span>
        </div>
      </div>
    </div>
  );
}
