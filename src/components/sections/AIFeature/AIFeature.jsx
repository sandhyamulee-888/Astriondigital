import React, { useState } from 'react';
import { Database, Brain, Cpu, Workflow, CheckCircle, ArrowDown } from 'lucide-react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Button from '../../common/Button/Button';
import ScrollReveal from '../../common/Motion/ScrollReveal';
import './AIFeature.css';

export default function AIFeature() {
  const [activeStep, setActiveStep] = useState(1);

  const architectureLayers = [
    {
      id: 0,
      name: 'Enterprise Data',
      icon: <Database size={20} />,
      badge: 'INGESTION LAYER',
      tech: 'Lakehouses, ERP Ledgers, Telemetry & IoT',
      desc: 'Raw relational databases, document repositories, and streaming real-time event topics indexed with lineage tracking.'
    },
    {
      id: 1,
      name: 'AI Models',
      icon: <Brain size={20} />,
      badge: 'REASONING LAYER',
      tech: 'Domain LLMs, RAG Pipelines & Embeddings',
      desc: 'Private fine-tuned language models and predictive regressors evaluated against deterministic accuracy guardrails.'
    },
    {
      id: 2,
      name: 'Automation',
      icon: <Cpu size={20} />,
      badge: 'EXECUTION LAYER',
      tech: 'Autonomous Agents, Event Loops & Bots',
      desc: 'Orchestrated execution routines translating model inferences into structured API commands without manual entry.'
    },
    {
      id: 3,
      name: 'Business Workflows',
      icon: <Workflow size={20} />,
      badge: 'INTEGRATION LAYER',
      tech: 'ERP Triggers, Procurement & Fulfillment',
      desc: 'Contextual integration with human-in-the-loop approval thresholds, audit journals, and state validation.'
    },
    {
      id: 4,
      name: 'Decisions & Actions',
      icon: <CheckCircle size={20} />,
      badge: 'OUTCOME LAYER',
      tech: 'Deterministic Outcomes & Real-Time Impact',
      desc: 'Automated inventory rebalancing, dynamic quote generation, predictive maintenance dispatches, and ledger reconciliation.'
    }
  ];

  return (
    <section className="section ai-section" id="ai-intelligence" aria-labelledby="ai-heading">
      <div className="container">
        <ScrollReveal yOffset={28}>
          <SectionHeader
            label="AI & INTELLIGENT AUTOMATION"
            title="AI that works inside the enterprise."
            description="Astrion bridges the chasm between experimental machine learning prototypes and dependable enterprise production. We build deterministic AI architectures that operate directly within transactional workflows."
            action={
              <Button
                to="/solutions/ai-intelligent-automation"
                variant="outline"
                size="md"
                icon="arrow"
              >
                Explore AI & Intelligent Automation
              </Button>
            }
          />
        </ScrollReveal>

        {/* 5-Tier Data Architecture Visual */}
        <ScrollReveal yOffset={36} delay={0.1}>
          <div className="ai-pipeline-grid">
          {/* Vertical Flow Diagram */}
          <div className="ai-architecture-stack">
            {architectureLayers.map((layer, idx) => {
              const isSelected = activeStep === layer.id;
              return (
                <React.Fragment key={layer.id}>
                  <div
                    className={`ai-layer-card ${isSelected ? 'active' : ''}`}
                    onClick={() => setActiveStep(layer.id)}
                    onMouseEnter={() => setActiveStep(layer.id)}
                  >
                    <div className="layer-header">
                      <div className="layer-icon-wrap">{layer.icon}</div>
                      <div className="layer-title-group">
                        <span className="mono-tag layer-badge">{layer.badge}</span>
                        <h4 className="layer-name">{layer.name}</h4>
                      </div>
                    </div>

                    <div className="layer-tech mono-tag">{layer.tech}</div>
                  </div>

                  {idx < architectureLayers.length - 1 && (
                    <div className="ai-connector-node">
                      <div className="connector-line">
                        <div className="connector-pulse-dot"></div>
                      </div>
                      <ArrowDown size={14} className="connector-arrow" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Deep Architectural Inspection Panel */}
          <div className="ai-detail-panel">
            <div className="ai-panel-inner">
              <span className="mono-label ai-panel-tag">
                ARCHITECTURE DETAIL // {architectureLayers[activeStep].badge}
              </span>
              <h3 className="ai-panel-layer-name">{architectureLayers[activeStep].name}</h3>
              <p className="ai-panel-layer-desc">{architectureLayers[activeStep].desc}</p>

              <div className="ai-specs-card">
                <span className="mono-tag specs-title">ENTERPRISE GUARDRAILS</span>
                <div className="specs-list">
                  <div className="spec-item">
                    <span className="spec-label mono-tag">Deterministic Bounds:</span>
                    <span className="spec-val">Schema-validated JSON outputs</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label mono-tag">Data Sovereignty:</span>
                    <span className="spec-val">Zero data retention on public inference models</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label mono-tag">Audit Trail:</span>
                    <span className="spec-val">Full token & prompt provenance in SIEM logs</span>
                  </div>
                </div>
              </div>

              <div className="ai-panel-cta-wrap">
                <Button
                  to="/solutions/ai-intelligent-automation"
                  variant="primary"
                  size="md"
                  icon="arrow"
                >
                  Explore AI Solutions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
      </div>
    </section>
  );
}
