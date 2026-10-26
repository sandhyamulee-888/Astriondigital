import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Factory, 
  Truck, 
  ShoppingCart, 
  Briefcase, 
  Car, 
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Workflow,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { INDUSTRIES } from '../../data/industries';
import Button from '../../components/common/Button/Button';
import './IndustryDetailPage.css';

// Rich industry-specific extended details
const INDUSTRY_DETAILS = {
  manufacturing: {
    heroMetric: 'Accelerated production cycle lead times and synchronized BOM accuracy',
    challenges: [
      'Disjointed shop-floor telemetry disconnected from enterprise financial ledgers',
      'Unplanned machine downtime caused by reactive rather than predictive maintenance',
      'Complex multi-level Bill of Materials (BOM) reconciliation across global plants',
      'Manual quality inspection bottlenecks slowing dispatch and increasing scrap rates'
    ],
    architecture: [
      { step: '01', title: 'Shop-Floor Telemetry', desc: 'IoT sensor arrays and PLC connectors ingest machine status, cycle times, and vibration metrics in real-time intervals.' },
      { step: '02', title: 'Edge Event Processing', desc: 'Local gateways filter anomalies, calculate real-time OEE, and detect impending component fatigue.' },
      { step: '03', title: 'XENedion MES Sync', desc: 'Continuous bidirectional sync automatically triggers work order updates, inventory depletion, and dynamic labor scheduling.' },
      { step: '04', title: 'Closed-Loop Quality', desc: 'Automated vision inspections update lot records, preventing non-conforming batches from moving to packaging.' }
    ],
    useCases: [
      { title: 'Discrete Automotive Parts Assembly', result: 'Synchronized 14 assembly lines across 3 plants with just-in-time material delivery.' },
      { title: 'Process Chemicals Formulation', result: 'Automated recipe management with strict temperature and mix-ratio compliance logging.' },
      { title: 'Heavy Industrial Equipment', result: 'Enabled serial-tracked warranty records and predictive field servicing dispatch.' }
    ]
  },
  distribution: {
    heroMetric: 'High-precision order fulfillment with automated cross-dock routing',
    challenges: [
      'Fragmented warehouse management leading to stockouts and duplicate inventory buffers',
      'Inefficient manual pick-and-pack routing causing fulfillment delays in high-volume hubs',
      'Lack of real-time EDI sync with supplier replenishment pipelines',
      'Complex B2B multi-tier pricing contracts requiring error-prone manual reconciliations'
    ],
    architecture: [
      { step: '01', title: 'Omni-Channel Ingestion', desc: 'Orders stream via EDI 850, B2B eCommerce portals, and API connectors into a centralized allocation engine.' },
      { step: '02', title: 'Dynamic Stock Allocation', desc: 'AI-assisted routing selects the optimal fulfillment center based on proximity, stock velocity, and carrier rates.' },
      { step: '03', title: 'Optimized Wave Picking', desc: 'Pickers receive dynamic shortest-path routes on ruggedized mobile devices with barcode verification.' },
      { step: '04', title: 'Automated Carrier Dispatch', desc: 'System generates shipping labels, assigns dock doors, and dispatches EDI 856 ASN notices instantly.' }
    ],
    useCases: [
      { title: 'Multi-Regional Consumer Goods Wholesaler', result: 'Unified 6 regional distribution centers into a single automated inventory pool.' },
      { title: 'Cold-Chain Pharmaceutical Logistics', result: 'Enforced continuous temperature telemetry and lot-controlled FEFO routing.' },
      { title: 'Industrial MRO Parts Distribution', result: 'Automated vendor-managed inventory (VMI) with self-replenishing customer bins.' }
    ]
  },
  retail: {
    heroMetric: 'Unified omnichannel inventory ledger with real-time synchronized stock data',
    challenges: [
      'Siloed physical store POS systems unable to reflect online stock in real time',
      'High rate of stockouts and overstock due to inaccurate regional demand forecasting',
      'Friction in omnichannel returns, buy-online-pickup-in-store (BOPIS), and ship-from-store',
      'Fragmented customer loyalty profiles separated between web and brick-and-mortar stores'
    ],
    architecture: [
      { step: '01', title: 'Unified POS & Digital Sync', desc: 'High-throughput event streams capture all transactions across web, mobile app, and physical store POS.' },
      { step: '02', title: 'Universal Stock Ledger', desc: 'Single source of truth updates available-to-promise (ATP) inventory in real-time globally.' },
      { step: '03', title: 'Predictive Demand Sensing', desc: 'Machine learning algorithms analyze seasonal trends, local weather, and promotions to automate reorders.' },
      { step: '04', title: 'Frictionless Omnichannel', desc: 'Store associates fulfill online orders directly from store shelves with intelligent mobile guided workflows.' }
    ],
    useCases: [
      { title: 'National Apparel & Footwear Chain', result: 'Enabled ship-from-store across regional retail locations, optimizing fulfillment costs.' },
      { title: 'Specialty Electronics Retailer', result: 'Unified customer loyalty profiles and omnichannel warranty tracking.' },
      { title: 'Luxury Goods & Accessories', result: 'Implemented strict serial tracking and VIP customer concierge clienteling workflows.' }
    ]
  },
  logistics: {
    heroMetric: 'Real-time freight tracking with automated route transit optimization',
    challenges: [
      'Blind spots in transit visibility between carrier dispatch and customer dock delivery',
      'Manual carrier freight billing leading to audit disputes and delayed settlement cycles',
      'Static route planning unable to dynamically adapt to weather, traffic, and border delays',
      'Stringent electronic logging device (ELD) and hazardous materials regulatory compliance'
    ],
    architecture: [
      { step: '01', title: 'Fleet Telematics Ingestion', desc: 'GPS, OBD-II, and IoT temperature sensor streams feed continuous vehicle telemetry into Astrion Data Mesh.' },
      { step: '02', title: 'Dynamic Route Optimization', desc: 'Algorithms continuously calculate optimal multi-stop corridors considering fuel burn and driver hours.' },
      { step: '03', title: 'Automated Exception Handling', desc: 'Smart alerts notify dispatchers of temperature excursions, geofence breaches, or ETA deviations.' },
      { step: '04', title: 'Electronic Proof of Delivery', desc: 'Digital signatures and photos trigger automated freight invoicing and instantaneous carrier payout.' }
    ],
    useCases: [
      { title: 'Intermodal Freight Operator', result: 'Synchronized rail, ocean, and long-haul trucking container handoffs with real-time tracking.' },
      { title: 'Last-Mile Delivery Network', result: 'Optimized high-density daily urban delivery stops with real-time dynamic traffic rerouting.' },
      { title: 'Hazardous Chemical Transporter', result: 'Enforced full regulatory chain-of-custody logging and automated emergency dispatch protocols.' }
    ]
  },
  'professional-services': {
    heroMetric: 'Optimized consultant utilization with automated multi-currency milestone billing',
    challenges: [
      'Low visibility into future consultant availability leading to over-hiring or staffing shortfalls',
      'Manual spreadsheet-based time tracking causing billing disputes and revenue leakage',
      'Complex multi-entity, multi-currency accounting for cross-border client engagements',
      'Lack of real-time project profitability dashboards during active engagement delivery'
    ],
    architecture: [
      { step: '01', title: 'Resource & Skill Ontology', desc: 'Centralized talent catalog categorizes staff competencies, certifications, clearance levels, and availability.' },
      { step: '02', title: 'Predictive Staffing Match', desc: 'Automated staffing engine matches project staffing requirements against consultant skills and utilization targets.' },
      { step: '03', title: 'Automated Time & Expense', desc: 'Mobile time capture with receipt OCR routes approvals directly into project milestone accounting.' },
      { step: '04', title: 'Real-Time Margin Ledger', desc: 'Dynamic calculations compute project gross margin, burn rate, and projected completion costs daily.' }
    ],
    useCases: [
      { title: 'Global Management Consulting Firm', result: 'Automated global resource staffing and multi-entity tax compliance across 14 countries.' },
      { title: 'Enterprise IT Engineering Practice', result: 'Integrated agile sprint velocity with milestone billing and revenue recognition.' },
      { title: 'Architecture & Design Advisory', result: 'Streamlined fixed-fee vs. time-and-materials project accounting with real-time margin visibility.' }
    ]
  },
  automotive: {
    heroMetric: 'Comprehensive component serialization and just-in-sequence (JIS) compliance',
    challenges: [
      'Stringent OEM just-in-sequence delivery penalties for line-stoppage errors',
      'Multi-tier supplier component traceability required for recall prevention and audit defense',
      'Engineering change orders (ECO) failing to propagate across complex sub-tier BOMs',
      'Stringent IATF 16949 quality compliance and PPAP documentation overhead'
    ],
    architecture: [
      { step: '01', title: 'OEM Broadcast Ingestion', desc: 'Direct EDI 866 JIS feeds parse vehicle production sequences directly from OEM assembly plants.' },
      { step: '02', title: 'Sequence Queue Sequencing', desc: 'Shop-floor robotic cells and pick stations organize module sub-assemblies in exact OEM rack order.' },
      { step: '03', title: 'Full Serial Traceability', desc: 'Every bolt torque, weld parameter, and electronic serial number binds to the vehicle identification number (VIN).' },
      { step: '04', title: 'Automated PPAP & Audit', desc: 'Quality records compile automatically, providing complete audit readiness for OEM compliance inspections.' }
    ],
    useCases: [
      { title: 'Tier-1 Cockpit & Seating Supplier', result: 'Achieved consistent on-time JIS delivery to major automotive assembly plants with continuous operational reliability.' },
      { title: 'Electric Vehicle Battery Pack Assembler', result: 'Enforced cell-level thermal testing data capture and automated battery pack genealogy.' },
      { title: 'Chassis & Stamping Manufacturer', result: 'Automated press machine die wear monitoring and closed-loop dimensional inspection.' }
    ]
  },
  other: {
    heroMetric: 'Bespoke enterprise platforms engineered for mission-critical specialized domains',
    challenges: [
      'Off-the-shelf software failing to accommodate unique regulatory or operational constraints',
      'Complex legacy architectures that resist standard off-the-shelf modernization approaches',
      'Stringent data sovereignty, air-gapped security, or specialized hardware interface needs',
      'Fragmented operational workflows crossing multiple proprietary enterprise tools'
    ],
    architecture: [
      { step: '01', title: 'Domain Discovery & Modeling', desc: 'Deep technical analysis maps operational physics, regulatory requirements, and legacy data flows.' },
      { step: '02', title: 'Custom Architecture Design', desc: 'Astrion engineers a modular architecture combining XENedion core with specialized microservices.' },
      { step: '03', title: 'Enterprise Integration Mesh', desc: 'Robust API bridges and message queues connect specialized domain hardware, SCADA, or legacy mainframes.' },
      { step: '04', title: 'Continuous Governance', desc: 'Automated compliance testing, observability, and SLA monitoring ensure long-term platform resilience.' }
    ],
    useCases: [
      { title: 'Life Sciences & Medical Devices', result: 'Delivered 21 CFR Part 11 compliant operational tracking and electronic batch records.' },
      { title: 'Energy & Utilities Infrastructure', result: 'Engineered asset lifecycle management and remote substation telemetry consolidation.' },
      { title: 'Aerospace Components Fabrication', result: 'Implemented AS9100 quality traceability with digital material cert verification.' }
    ]
  }
};

export default function IndustryDetailPage({ slugOverride }) {
  const params = useParams();
  const slug = slugOverride || params.slug || params.id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const industry = INDUSTRIES.find((i) => i.id === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const details = INDUSTRY_DETAILS[industry.id] || INDUSTRY_DETAILS.other;

  // Next / Prev navigation
  const currentIndex = INDUSTRIES.findIndex((i) => i.id === industry.id);
  const prevIndustry = currentIndex > 0 ? INDUSTRIES[currentIndex - 1] : INDUSTRIES[INDUSTRIES.length - 1];
  const nextIndustry = currentIndex < INDUSTRIES.length - 1 ? INDUSTRIES[currentIndex + 1] : INDUSTRIES[0];

  const getIndustryIcon = (id) => {
    switch (id) {
      case 'manufacturing': return <Factory size={22} />;
      case 'distribution': return <Truck size={22} />;
      case 'retail': return <ShoppingCart size={22} />;
      case 'logistics': return <Truck size={22} />;
      case 'professional-services': return <Briefcase size={22} />;
      case 'automotive': return <Car size={22} />;
      default: return <Globe size={22} />;
    }
  };

  return (
    <div className="inner-page industry-detail-page">
      {/* Hero */}
      <section className="inner-hero-section industry-detail-hero">
        <div className="inner-hero-bg" aria-hidden="true">
          <img src="/solutions-bg.jpg" alt="" className="inner-hero-bg-img" />
          <div className="inner-hero-overlay"></div>
        </div>

        <div className="container inner-hero-container">
          <div className="inner-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            <Link to="/industries">INDUSTRIES</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">{industry.name.toUpperCase()}</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              INDUSTRIES // {industry.name.toUpperCase()} BLUEPRINT
            </div>

            <h1 className="inner-hero-title">
              {industry.name}: {industry.headline}
            </h1>

            <p className="inner-hero-lead">
              {industry.coreProblemSolved || industry.description}
            </p>

            <div className="inner-hero-actions" style={{ marginTop: '24px' }}>
              <Button to="/contact" variant="primary" size="lg" icon="arrow">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section industry-main-section">
        <div className="container industry-layout-container">
          {/* Challenge ➔ XENedion Solution ➔ Result Formula */}
          {industry.challenge && (
            <div className="industry-csr-block" style={{
              background: '#13151a',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '32px',
              marginBottom: '40px'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                <div style={{ borderLeft: '3px solid #ef4444', paddingLeft: '16px' }}>
                  <span className="mono-tag" style={{ color: '#ef4444', fontSize: '0.75rem', fontWeight: 700 }}>THE CHALLENGE</span>
                  <p style={{ color: '#ddd', fontSize: '0.95rem', marginTop: '8px', lineHeight: 1.5 }}>{industry.challenge}</p>
                </div>
                <div style={{ borderLeft: '3px solid #ff6b35', paddingLeft: '16px' }}>
                  <span className="mono-tag" style={{ color: '#ff6b35', fontSize: '0.75rem', fontWeight: 700 }}>XENEDION SOLUTION</span>
                  <p style={{ color: '#ddd', fontSize: '0.95rem', marginTop: '8px', lineHeight: 1.5 }}>{industry.solution}</p>
                </div>
                <div style={{ borderLeft: '3px solid #10b981', paddingLeft: '16px' }}>
                  <span className="mono-tag" style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: 700 }}>MEASURABLE RESULT</span>
                  <p style={{ color: '#ddd', fontSize: '0.95rem', marginTop: '8px', lineHeight: 1.5 }}>{industry.result}</p>
                </div>
              </div>
            </div>
          )}

          <div className="industry-grid-layout">
            
            {/* Primary Column */}
            <div className="industry-primary-col">
              
              {/* Sector Challenges & Operational Realities */}
              <div className="industry-content-block">
                <div className="block-header">
                  <span className="mono-tag block-eyebrow">CHALLENGES &amp; BOTTLENECKS</span>
                  <h2 className="block-title">Key Operational Hurdles in {industry.name}</h2>
                </div>
                <div className="challenges-grid">
                  {details.challenges.map((chal, idx) => (
                    <div key={idx} className="challenge-card">
                      <div className="challenge-num mono-tag">&bull;</div>
                      <p className="challenge-text">{chal}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* End-to-End Operational Architecture */}
              <div className="industry-content-block">
                <div className="block-header">
                  <span className="mono-tag block-eyebrow">BLUEPRINT ARCHITECTURE</span>
                  <h2 className="block-title">How Astrion Orchestrates {industry.name} Workflows</h2>
                </div>
                <div className="workflow-steps-timeline">
                  {details.architecture.map((step, idx) => (
                    <div key={idx} className="workflow-step-card">
                      <div className="workflow-step-header">
                        <span className="workflow-step-badge mono-tag">WORKFLOW STAGE</span>
                        <h3 className="workflow-step-title">{step.title}</h3>
                      </div>
                      <p className="workflow-step-desc">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Realized Business Outcomes */}
              <div className="industry-content-block">
                <div className="block-header">
                  <span className="mono-tag block-eyebrow">DELIVERED VALUE</span>
                  <h2 className="block-title">Documented Business Outcomes</h2>
                </div>
                <div className="outcomes-checklist-grid">
                  {industry.outcomes.map((out, idx) => (
                    <div key={idx} className="outcome-check-card">
                      <CheckCircle2 size={18} className="outcome-icon" />
                      <div className="outcome-info">
                        <p className="outcome-text">{out}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Representative Use Cases */}
              <div className="industry-content-block">
                <div className="block-header">
                  <span className="mono-tag block-eyebrow">REPRESENTATIVE DEPLOYMENTS</span>
                  <h2 className="block-title">Enterprise Case Implementations</h2>
                </div>
                <div className="use-cases-grid">
                  {details.useCases.map((uc, idx) => (
                    <div key={idx} className="use-case-card">
                      <div className="use-case-top">
                        <span className="mono-tag use-case-tag">CASE BRIEF</span>
                      </div>
                      <h4 className="use-case-title">{uc.title}</h4>
                      <p className="use-case-result">{uc.result}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <aside className="industry-sidebar-col">
              
              {/* XENedion Module Alignment */}
              <div className="sidebar-widget">
                <div className="widget-header">
                  <Layers size={16} className="widget-icon" />
                  <h4 className="widget-title">XENedion Modules for {industry.name}</h4>
                </div>
                <p className="widget-desc">
                  Pre-configured platform modules optimized for this industry's specific workflow demands:
                </p>
                <div className="xenedion-tag-list">
                  {industry.xenedionFocus.map((mod, idx) => (
                    <span key={idx} className="xenedion-module-badge mono-tag">
                      {mod}
                    </span>
                  ))}
                </div>
                <Link to="/xenedion/modules" className="widget-action-link">
                  <span>View full XENedion module spec</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              {/* Capability Matrix */}
              <div className="sidebar-widget">
                <div className="widget-header">
                  <Cpu size={16} className="widget-icon" />
                  <h4 className="widget-title">Integrated Capabilities</h4>
                </div>
                <div className="capability-tag-list">
                  {industry.capabilities.map((cap, idx) => (
                    <span key={idx} className="capability-pill mono-tag">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Briefing Card */}
              <div className="sidebar-widget consultation-widget">
                <div className="widget-header">
                  <ShieldCheck size={16} className="widget-icon" />
                  <h4 className="widget-title">Industry Architecture Session</h4>
                </div>
                <p className="widget-desc">
                  Engage our industry enterprise architects for a comprehensive 45-minute blueprint briefing tailored to your operating footprint.
                </p>
                <Button to="/contact" variant="primary" size="sm" icon="arrow" fullWidth>
                  Request Blueprint Session
                </Button>
              </div>

            </aside>

          </div>

          {/* Next / Previous Industry Navigation */}
          <div className="industry-nav-footer">
            <Link to={`/industries/${prevIndustry.id}`} className="nav-footer-card prev">
              <div className="nav-footer-icon">
                <ArrowLeft size={16} />
              </div>
              <div className="nav-footer-text">
                <span className="mono-tag nav-label">PREVIOUS SECTOR</span>
                <span className="nav-title">{prevIndustry.name}</span>
              </div>
            </Link>

            <Link to="/industries" className="nav-footer-all mono-tag">
              <span>VIEW ALL 7 BLUEPRINTS</span>
            </Link>

            <Link to={`/industries/${nextIndustry.id}`} className="nav-footer-card next">
              <div className="nav-footer-text text-right">
                <span className="mono-tag nav-label">NEXT SECTOR</span>
                <span className="nav-title">{nextIndustry.name}</span>
              </div>
              <div className="nav-footer-icon">
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
