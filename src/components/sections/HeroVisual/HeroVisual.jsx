import React, { useState } from 'react';
import './HeroVisual.css';

export default function HeroVisual() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    { id: 'ai', label: 'AI Models', x: 300, y: 70, type: 'intelligence', latency: '12ms', proto: 'Tensor/gRPC' },
    { id: 'cloud', label: 'Cloud & Infra', x: 100, y: 140, type: 'infrastructure', latency: '4ms', proto: 'BGP/K8s' },
    { id: 'data', label: 'Data Lakehouse', x: 500, y: 140, type: 'data', latency: '8ms', proto: 'Apache Iceberg' },
    { id: 'integration', label: 'API Mesh', x: 80, y: 280, type: 'network', latency: '2ms', proto: 'GraphQL/EDA' },
    { id: 'apps', label: 'Core Apps', x: 520, y: 280, type: 'application', latency: '5ms', proto: 'HTTPS/REST' },
    { id: 'security', label: 'Cybersecurity', x: 130, y: 420, type: 'security', latency: '1ms', proto: 'mTLS/Zero-Trust' },
    { id: 'automation', label: 'Intelligent Bots', x: 470, y: 420, type: 'automation', latency: '15ms', proto: 'Event Loops' },
    { id: 'xenedion', label: 'XENedion ERP', x: 300, y: 470, type: 'platform', latency: '3ms', proto: 'Core Ledger' },
  ];

  const centerNode = { label: 'ASTRION', x: 300, y: 270 };

  return (
    <div className="hero-visual-wrapper" aria-hidden="true">
      <svg 
        className="hero-visual-svg" 
        viewBox="0 0 600 540" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(28, 117, 189)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="rgb(235, 100, 62)" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(28, 117, 189)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="rgb(235, 100, 62)" stopOpacity="0.9" />
          </linearGradient>

          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(28, 117, 189)" stopOpacity="0.14" />
            <stop offset="60%" stopColor="rgb(235, 100, 62)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="rgb(28, 117, 189)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Grid Marks */}
        <g className="grid-marks" opacity="0.4">
          <circle cx="300" cy="270" r="140" stroke="var(--border-light)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="300" cy="270" r="220" stroke="var(--border-subtle)" strokeWidth="1" />
          <circle cx="300" cy="270" r="280" fill="url(#centerGlow)" />
        </g>

        {/* Connection Lines from Center to Surrounding Nodes */}
        {nodes.map((node) => {
          const isHighlighted = activeNode === node.id;
          return (
            <g key={`conn-${node.id}`}>
              {/* Static subtle base line */}
              <line
                x1={centerNode.x}
                y1={centerNode.y}
                x2={node.x}
                y2={node.y}
                stroke={isHighlighted ? 'rgb(28, 117, 189)' : 'var(--border-medium)'}
                strokeWidth={isHighlighted ? 2 : 1}
                strokeOpacity={isHighlighted ? 0.95 : 0.6}
                transition="all 0.3s ease"
              />
              {/* Animated packet flow line */}
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

        {/* Cross mesh interconnects */}
        <line x1="100" y1="140" x2="300" y2="70" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="300" y1="70" x2="500" y2="140" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="80" y1="280" x2="130" y2="420" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="520" y1="280" x2="470" y2="420" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="130" y1="420" x2="300" y2="470" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="470" y1="420" x2="300" y2="470" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 6" />

        {/* Central ASTRION Node */}
        <g className="center-node-group">
          <circle cx={centerNode.x} cy={centerNode.y} r="46" fill="var(--bg-card)" stroke="rgb(28, 117, 189)" strokeWidth="2.5" className="anim-glow" />
          <circle cx={centerNode.x} cy={centerNode.y} r="38" fill="var(--bg-secondary)" stroke="var(--border-light)" strokeWidth="1" />
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

        {/* Peripheral Nodes */}
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
              {/* Node Outer Ring */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isNodeActive ? 22 : 18}
                fill="var(--bg-card)"
                stroke={isNodeActive ? nodeColor : 'var(--border-medium)'}
                strokeWidth={isNodeActive ? 2 : 1.5}
                className={isNodeActive ? 'anim-glow' : ''}
                transition="all 0.25s ease"
              />
              {/* Inner Node Accent */}
              <circle
                cx={node.x}
                cy={node.y}
                r="6"
                fill={nodeColor}
                className="anim-pulse"
              />
              {/* Label */}
              <text
                x={node.x}
                y={node.y + (node.y > 300 ? 34 : -26)}
                textAnchor="middle"
                className={`svg-node-label ${isNodeActive ? 'active' : ''}`}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Floating Status Badge */}
      <div className="visual-telemetry-badge">
        <div className="telemetry-indicator">
          <span className="telemetry-dot"></span>
          <span className="telemetry-live mono-tag">SYSTEM FABRIC ACTIVE</span>
        </div>
        <div className="telemetry-details">
          <span className="mono-tag">
            {activeNode 
              ? `${nodes.find(n => n.id === activeNode)?.label} // ${nodes.find(n => n.id === activeNode)?.proto}` 
              : '8 Connected Enterprise Nodes // 99.999% SLA'
            }
          </span>
        </div>
      </div>
    </div>
  );
}
