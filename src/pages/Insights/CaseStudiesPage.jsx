import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  CheckCircle2, 
  ArrowUpRight, 
  Building2, 
  Layers, 
  Cpu, 
  TrendingUp, 
  ShieldCheck,
  Server,
  Zap
} from 'lucide-react';
import { CASE_STUDIES } from '../../data/caseStudies';
import Button from '../../components/common/Button/Button';
import './InsightsPage.css';

const DETAILED_CASE_STUDIES = [
  {
    id: 'industrial-manufacturing-modernization',
    industry: 'Discrete & Process Manufacturing',
    clientType: 'Multi-Plant Industrial Equipment Manufacturer',
    title: 'Multi-Plant Operational Consolidation & Core Modernization',
    challenge: 'The enterprise operated 5 disparate legacy ERP and MRP installations across North American and European production facilities. Real-time shop-floor tracking was non-existent, causing multi-day delays in inventory reconciliation and excessive buffer stock costs.',
    solution: 'Astrion designed an event-driven XENedion ERP backbone integrating shop-floor IoT telemetry, automated BOM propagation, and zero-trust hybrid cloud deployment.',
    results: [
      'Single consolidated ERP backbone replacing 5 disconnected legacy systems',
      'Continuous real-time visibility into multi-site raw material allocations',
      'Automated production order routing aligned with machine availability',
      'Accelerated production cycle lead times across all operating plants [Metric Pending Verification]',
      'Near-zero error rate in Bill of Materials (BOM) propagation'
    ],
    technologies: ['XENedion Core Platform', 'Shop-Floor IoT Telemetry', 'Kafka Event Mesh', 'Zero-Trust Cloud'],
    architectureHighlights: 'Real-time sensor ingestion pipelines push machine telemetry to edge gateways, continuously calculating OEE and triggering proactive maintenance tickets directly inside the financial ledger.'
  },
  {
    id: 'global-distribution-fulfillment',
    industry: 'Wholesale & Logistics Distribution',
    clientType: 'National Consumer Goods Distributor',
    title: 'Real-Time Order Routing & Cross-Dock Orchestration',
    challenge: 'A high-velocity distribution network processing large volumes of daily orders suffered from picking bottlenecks, manual carrier allocation, and frequent inventory desynchronization between distribution centers.',
    solution: 'Astrion deployed an intelligent warehouse management and dynamic order mesh, introducing automated wave picking, cross-dock optimization, and dynamic carrier rate comparison.',
    results: [
      'Real-time automated order allocation across regional fulfillment hubs',
      'High-precision order picking accuracy using ruggedized mobile guided picking',
      'Automated EDI 850 / 856 transaction processing with suppliers',
      'Significant reduction in warehouse dwell times for cross-docked shipments'
    ],
    technologies: ['Order Mesh Engine', 'Warehouse Management System', 'B2B EDI Gateway', 'Predictive Route AI'],
    architectureHighlights: 'Dynamic routing engine automatically assesses carrier performance metrics, regional shipping costs, and dock door availability to schedule dispatch without manual intervention.'
  },
  {
    id: 'enterprise-fleet-logistics',
    industry: 'Supply Chain & Transportation',
    clientType: 'Multi-Modal Freight & Fleet Operator',
    title: 'Autonomous Fleet Telematics & Dynamic Route Optimization',
    challenge: 'Managing an expansive fleet of freight vehicles with disparate GPS systems and paper-based proof of delivery resulted in unpredictable customer arrival estimates and delayed freight invoicing.',
    solution: 'Astrion engineered a centralized telematics ingestion pipeline paired with automated electronic proof of delivery (ePOD) and dynamic re-routing algorithms.',
    results: [
      'Real-time vehicle telemetry tracking with continuous data streaming',
      'Automated electronic proof of delivery triggering instantaneous freight invoicing',
      'Dynamic weather and traffic rerouting reducing fleet fuel consumption and idle time',
      'Full regulatory compliance with ELD and driver rest hour mandates'
    ],
    technologies: ['Telematics Ingestion Pipeline', 'Route Optimization Engine', 'Mobile ePOD Application', 'FinOps Billing Engine'],
    architectureHighlights: 'Direct OBD-II telematics streams are correlated with weather radar and traffic models to calculate dynamic arrival windows, notifying distribution hubs of delays proactively.'
  }
];

export default function CaseStudiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inner-page case-studies-main-page">
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
            <span className="breadcrumb-current">CASE STUDIES</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              INSIGHTS // CUSTOMER SUCCESS STORIES
            </div>

            <h1 className="inner-hero-title">
              Customer Success Stories &amp; Case Studies
            </h1>

            <p className="inner-hero-lead">
              Real stories of how companies cut administrative time and lowered overhead costs using Astrion platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Detailed Grid */}
      <section className="section">
        <div className="container">
          <div className="case-studies-detailed-list">
            {DETAILED_CASE_STUDIES.map((cs, idx) => (
              <div key={cs.id} className="case-study-full-card">
                <div className="cs-full-header">
                  <div className="cs-full-meta">
                    <span className="mono-tag cs-num">CASE BRIEF</span>
                    <span className="mono-tag cs-industry-tag">{cs.industry}</span>
                  </div>
                  <h2 className="cs-full-title">{cs.title}</h2>
                  <span className="cs-client-type mono-tag">ENGAGEMENT PROFILE: {cs.clientType}</span>
                </div>

                <div className="cs-problem-solution-grid">
                  <div className="cs-column challenge">
                    <h3 className="cs-col-heading">Operational Challenge</h3>
                    <p className="cs-col-text">{cs.challenge}</p>
                  </div>
                  <div className="cs-column solution">
                    <h3 className="cs-col-heading">Astrion Architecture &amp; Solution</h3>
                    <p className="cs-col-text">{cs.solution}</p>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="cs-arch-highlight-box">
                  <span className="mono-tag arch-label">SYSTEM ARCHITECTURE HIGHLIGHT:</span>
                  <p className="arch-text">{cs.architectureHighlights}</p>
                </div>

                {/* Measured Business Results */}
                <div className="cs-results-box">
                  <span className="mono-tag results-label">DOCUMENTED OUTCOMES &amp; KPIS:</span>
                  <div className="results-grid">
                    {cs.results.map((res, rIdx) => (
                      <div key={rIdx} className="result-item">
                        <CheckCircle2 size={16} className="result-check" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="cs-card-bottom">
                  <div className="cs-tech-stack">
                    <span className="mono-tag tech-label">DEPLOYED PLATFORMS:</span>
                    <div className="tech-pills">
                      {cs.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-pill mono-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <Button to="/contact" variant="primary" size="sm" icon="arrow">
                    Request Similar Blueprint
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="commitment-card">
            <div className="commitment-header">
              <div className="mono-label">
                <ShieldCheck size={16} />
                <span>ENTERPRISE CASE STUDY WORKSHOP</span>
              </div>
              <h3>Explore an in-depth transformation case study session</h3>
            </div>
            <p className="commitment-text">
              Meet with our solution architects to review reference architectures, integration patterns, and rollout milestones relevant to your organization's specific technical landscape.
            </p>
            <div className="commitment-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Book Architecture Workshop
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
