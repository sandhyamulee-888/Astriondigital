import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FileDown, 
  Layers, 
  ArrowUpRight, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Download,
  Lock,
  FileCode2,
  FolderGit2
} from 'lucide-react';
import Button from '../../components/common/Button/Button';
import './InsightsPage.css';

const RESOURCES = [
  {
    id: 'strangler-fig-playbook',
    type: 'ARCHITECTURE BLUEPRINT',
    format: 'PDF / SPEC (34 PAGES)',
    title: 'The Enterprise Strangler Fig Architecture Blueprint',
    description: 'A complete step-by-step engineering framework for decoupling monolithic core ERP systems into event-driven services with zero business downtime.',
    topics: ['Event Proxy Architecture', 'Dual-Write Reconciliation', 'Canary Rollout Strategies', 'Database De-coupling Patterns'],
    downloadCount: 'Principal Architect Verified'
  },
  {
    id: 'zero-trust-cloud-framework',
    type: 'SECURITY SPECIFICATION',
    format: 'PDF / BENCHMARK (28 PAGES)',
    title: 'Multi-Tier Zero-Trust Security Specification for Hybrid Cloud',
    description: 'Cryptographic workload identity design, SPIFFE/SPIRE deployment patterns, and micro-segmentation topologies for distributed enterprise networks.',
    topics: ['Cryptographic Workload Attestation', 'Automated mTLS Mesh', 'Least-Privilege RBAC Matrix', 'Audit Trail Immutability'],
    downloadCount: 'Security Governance Standard'
  },
  {
    id: 'xenedion-integration-spec',
    type: 'INTEGRATION PROTOCOL',
    format: 'OPENAPI / SPECIFICATION (42 PAGES)',
    title: 'XENedion Enterprise Integration Protocol & Event Bus Guide',
    description: 'Technical reference documentation covering webhook topologies, REST/GraphQL endpoints, Kafka event schemas, and legacy database connector bridges.',
    topics: ['Event Payload Schemas', 'High-Throughput Ingestion', 'Error Retry Queues', 'Legacy JDBC Bridge Config'],
    downloadCount: 'Developer Reference Guide'
  },
  {
    id: 'agentic-ai-guardrails',
    type: 'WHITE PAPER',
    format: 'PDF / WHITEPAPER (24 PAGES)',
    title: 'Deterministic Guardrails for Enterprise Agentic AI',
    description: 'How to design deterministic finite state machines, schema validation gates, and human-in-the-loop policies for autonomous enterprise AI workflows.',
    topics: ['JSON Schema Enforcers', 'Threshold Escalation Logic', 'Audit Log Provenance', 'Model Evaluation Rig'],
    downloadCount: 'Applied AI Whitepaper'
  }
];

export default function ResourcesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inner-page resources-main-page">
      {/* Hero Section */}
      <section className="inner-hero-section">
        <div className="inner-hero-bg" aria-hidden="true">
          <img src="/solutions-bg.jpg" alt="" className="inner-hero-bg-img" />
          <div className="inner-hero-overlay"></div>
        </div>

        <div className="container inner-hero-container">
          <div className="inner-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            <Link to="/insights">INSIGHTS</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">RESOURCES &amp; BLUEPRINTS</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              INSIGHTS // REFERENCE ARCHITECTURES &amp; PLAYBOOKS
            </div>

            <h1 className="inner-hero-title">
              Enterprise engineering resources and reference architectures.
            </h1>

            <p className="inner-hero-lead">
              Download comprehensive technical blueprints, migration playbooks, and integration specifications authored by Astrion's systems architects.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Cards Grid */}
      <section className="section">
        <div className="container">
          <div className="resources-grid-list">
            {RESOURCES.map((res) => (
              <div key={res.id} className="resource-item-card">
                <div className="resource-card-top">
                  <span className="resource-type mono-tag">{res.type}</span>
                  <span className="resource-format mono-tag">{res.format}</span>
                </div>

                <h2 className="resource-title">{res.title}</h2>
                <p className="resource-desc">{res.description}</p>

                <div className="resource-topics-box">
                  <span className="topics-label mono-tag">TOPICS COVERED:</span>
                  <div className="topics-pills">
                    {res.topics.map((t, idx) => (
                      <span key={idx} className="topic-pill mono-tag">
                        <CheckCircle2 size={12} className="topic-check" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="resource-card-footer">
                  <span className="resource-badge mono-tag">{res.downloadCount}</span>
                  <Button to="/contact" variant="primary" size="sm" icon="arrow">
                    Request Document Access
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Consultation Banner */}
          <div className="commitment-card">
            <div className="commitment-header">
              <div className="mono-label">
                <ShieldCheck size={16} />
                <span>CUSTOM BLUEPRINT REQUEST</span>
              </div>
              <h3>Require a custom architectural blueprint for your environment?</h3>
            </div>
            <p className="commitment-text">
              Our engineering team can create customized system architecture diagrams, data dictionary specs, and cloud deployment guides tailored to your internal enterprise systems.
            </p>
            <div className="commitment-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Request Architecture Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
