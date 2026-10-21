import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Network, Cpu, Database, CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import './XenedionPage.css';

export default function XenedionIntegrationsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const integrationTypes = [
    {
      title: 'High-Throughput gRPC Event Bus',
      desc: 'Sub-millisecond internal messaging mesh linking all XENedion modules with strict event ordering and delivery guarantees.',
      badge: 'INTERNAL FABRIC'
    },
    {
      title: 'OpenAPI REST & GraphQL Gateways',
      desc: 'Fully documented, versioned APIs with automated rate-limiting, JWT authentication, and bi-directional webhooks for third-party SaaS.',
      badge: 'CLOUD INTEGRATION'
    },
    {
      title: 'B2B EDI & Supply Chain Bridges',
      desc: 'Native support for ANSI X12, EDIFACT, and AS2 protocols to automate order processing with major retailers and logistics carriers.',
      badge: 'EDI & PROTOCOLS'
    },
    {
      title: 'Legacy Mainframe & SAP Connectors',
      desc: 'Pre-built ETL and real-time streaming connectors for bidirectional data exchange during phased modernization transitions.',
      badge: 'LEGACY BRIDGES'
    }
  ];

  return (
    <div className="inner-page xenedion-integrations-page">
      {/* Hero */}
      <section className="inner-hero-section">
        <div className="inner-hero-bg" aria-hidden="true">
          <img src="/solutions-bg.jpg" alt="" className="inner-hero-bg-img" />
          <div className="inner-hero-overlay"></div>
        </div>

        <div className="container inner-hero-container">
          <div className="inner-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            <Link to="/xenedion">XENEDION ERP</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">INTEGRATIONS &amp; APIS</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <Network size={14} />
              <span>XENEDION // CONNECTED EVENT FABRIC</span>
            </div>

            <h1 className="inner-hero-title">
              XENedion Integrations &amp; APIs: Real-time connectivity across your ecosystem.
            </h1>

            <p className="inner-hero-lead">
              Enterprises run on interconnected networks. XENedion features open, resilient API fabrics, high-throughput gRPC streaming, and legacy connectors that guarantee instantaneous synchronization.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Capabilities Grid */}
      <section className="section">
        <div className="container">
          <div className="values-cards-grid" style={{ marginBottom: '48px' }}>
            {integrationTypes.map((item, idx) => (
              <div key={idx} className="value-item-card">
                <span className="mono-tag" style={{ color: 'var(--brand-blue)', fontWeight: 700, display: 'block', marginBottom: '10px' }}>
                  {item.badge}
                </span>
                <h3 className="value-title">{item.title}</h3>
                <p className="value-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Technical Specs Banner */}
          <div className="commitment-card">
            <div className="commitment-header">
              <div className="mono-label">
                <Zap size={16} />
                <span>API PERFORMANCE SPECIFICATION</span>
              </div>
              <h3>50M+ Daily Event Capacity with 99.999% Delivery SLA</h3>
            </div>
            <p className="commitment-text">
              Built on distributed Kafka clusters and asynchronous message brokers, XENedion handles extreme bursts in transaction volume during peak retail seasons and global supply disruptions without data loss.
            </p>
            <div className="commitment-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Request API Documentation &amp; Sandbox
              </Button>
              <Button to="/solutions/integration-api" variant="secondary" size="md">
                View Integration Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
