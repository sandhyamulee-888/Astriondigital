import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  CheckCircle2, 
  Server, 
  Scale, 
  Eye, 
  AlertCircle
} from 'lucide-react';
import './LegalPage.css';

const LEGAL_DOCS = {
  privacy: {
    tag: 'LEGAL & PRIVACY',
    title: 'Enterprise Privacy Policy',
    lastUpdated: 'October 2026',
    summary: 'Astrion Digital is committed to safeguarding client organizational data, telemetry streams, and confidential enterprise records under global data protection frameworks.',
    sections: [
      {
        title: '1. Data Governance & Architecture Boundaries',
        content: 'Astrion processes enterprise client data strictly within bounded operational scopes defined in master service agreements (MSAs). We do not sell, broker, or monetize client data. All analytical and telemetry pipelines are segregated using multi-tenant or single-tenant cryptographically isolated partitions.'
      },
      {
        title: '2. Telemetry and System Logs',
        content: 'System telemetry, error stacks, and audit logs captured through XENedion and custom enterprise integrations are stored in encrypted, immutable lakehouse repositories. Logs are retained in compliance with client-specified data retention policies and regulatory mandates.'
      },
      {
        title: '3. Data Sovereignty & Geographic Residency',
        content: 'Clients retain full control over data residency jurisdictions. Astrion provisions hybrid-cloud and on-premise infrastructure configurations designed to ensure data remains strictly within authorized regional sovereign boundaries.'
      },
      {
        title: '4. Third-Party Integrations & Sub-Processors',
        content: 'All third-party cloud infrastructure providers, telemetry brokers, and API vendors engaged by Astrion undergo comprehensive third-party security, encryption, and compliance risk assessments prior to onboarding.'
      }
    ]
  },
  terms: {
    tag: 'TERMS OF SERVICE',
    title: 'Enterprise Terms of Service',
    lastUpdated: 'October 2026',
    summary: 'These terms govern the access and utilization of Astrion Digital consulting architectures, XENedion ERP software modules, and technical engineering deliverables.',
    sections: [
      {
        title: '1. Master Services & Statement of Work',
        content: 'All enterprise engagements, architectural consulting deliverables, and software licensing terms are governed by executed Statements of Work (SOW) referencing our Master Services Agreement.'
      },
      {
        title: '2. Intellectual Property & Deliverables',
        content: 'Custom software modules, workflows, and integrations engineered specifically for the client transfer to client ownership upon milestone completion and settlement, while core proprietary framework backbones remain licensed under Astrion platform terms.'
      },
      {
        title: '3. Service Level Agreements (SLAs)',
        content: 'Mission-critical production deployments are supported by Tier-1 enterprise SLAs defined in applicable customer contracts, detailing high availability targets, incident response escalation protocols, and dedicated engineering support [Specific SLA Metrics Subject to Contractual Agreement].'
      },
      {
        title: '4. Limitation of Liability & Warranty',
        content: 'Astrion warrants that all software deliverables conform in all material respects to architectural specifications and pass comprehensive vulnerability scans prior to production release.'
      }
    ]
  },
  security: {
    tag: 'SECURITY GOVERNANCE',
    title: 'Enterprise Security & Compliance',
    lastUpdated: 'October 2026',
    summary: 'Astrion maintains defense-in-depth security standards engineered to safeguard mission-critical systems, distributed microservices, and client databases.',
    sections: [
      {
        title: '1. Zero-Trust Security Architecture',
        content: 'All internal architectures and client deployments adhere to zero-trust principles. Every inter-service RPC communication requires Mutual TLS (mTLS) with cryptographically validated SPIFFE/SPIRE workload identities.'
      },
      {
        title: '2. Cryptographic Controls & Encryption',
        content: 'Data in transit is encrypted using TLS 1.3 with forward secrecy. Data at rest is encrypted using AES-256 with client-managed or dedicated hardware security module (HSM) encryption keys.'
      },
      {
        title: '3. Vulnerability Management & Penetration Testing',
        content: 'Astrion mandates automated static application security testing (SAST), dynamic testing (DAST), and annual third-party black-box/gray-box penetration testing for all software releases.'
      },
      {
        title: '4. Continuous Audit & Compliance Guardrails',
        content: 'Our compliance automation pipelines continuously audit cloud posture (CSPM), container images, and IAM role drift, alerting operations centers to any deviation from baseline hardening standards.'
      }
    ]
  }
};

export default function LegalPage({ docType }) {
  const location = useLocation();
  
  // Determine doc type from prop or path
  let currentDoc = docType;
  if (!currentDoc) {
    if (location.pathname.includes('privacy')) currentDoc = 'privacy';
    else if (location.pathname.includes('terms')) currentDoc = 'terms';
    else if (location.pathname.includes('security')) currentDoc = 'security';
    else currentDoc = 'privacy';
  }

  const doc = LEGAL_DOCS[currentDoc] || LEGAL_DOCS.privacy;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentDoc]);

  return (
    <div className="inner-page legal-page">
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
            <span className="breadcrumb-current">LEGAL &amp; GOVERNANCE</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              ASTRION DIGITAL // {doc.tag}
            </div>

            <h1 className="inner-hero-title">{doc.title}</h1>

            <p className="inner-hero-lead">{doc.summary}</p>
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="section legal-main-section">
        <div className="container legal-layout-container">
          <div className="legal-grid-layout">
            
            {/* Nav Sidebar */}
            <aside className="legal-sidebar">
              <div className="sidebar-sticky-box">
                <span className="mono-tag sidebar-label">LEGAL DIRECTORY</span>
                <nav className="legal-nav-menu">
                  <Link 
                    to="/privacy" 
                    className={`legal-nav-link ${currentDoc === 'privacy' ? 'active' : ''}`}
                  >
                    <Eye size={15} />
                    <span>Privacy Policy</span>
                  </Link>

                  <Link 
                    to="/terms" 
                    className={`legal-nav-link ${currentDoc === 'terms' ? 'active' : ''}`}
                  >
                    <Scale size={15} />
                    <span>Terms of Service</span>
                  </Link>

                  <Link 
                    to="/security" 
                    className={`legal-nav-link ${currentDoc === 'security' ? 'active' : ''}`}
                  >
                    <ShieldCheck size={15} />
                    <span>Security Governance</span>
                  </Link>
                </nav>

                <div className="legal-security-contact">
                  <span className="mono-tag sec-contact-title">LEGAL / DPO CONTACT</span>
                  <a href="mailto:legal@astriondigital.com" className="sec-contact-email">
                    legal@astriondigital.com
                  </a>
                </div>
              </div>
            </aside>

            {/* Document Content */}
            <div className="legal-document-content">
              <div className="document-card">
                <div className="document-header">
                  <div>
                    <h2 className="doc-main-title">{doc.title}</h2>
                    <span className="doc-meta mono-tag">LAST REVISED: {doc.lastUpdated}</span>
                  </div>
                </div>

                <div className="doc-sections-list">
                  {doc.sections.map((sec, idx) => (
                    <div key={idx} className="doc-section-block">
                      <h3 className="doc-section-title">{sec.title}</h3>
                      <p className="doc-section-body">{sec.content}</p>
                    </div>
                  ))}
                </div>

                <div className="doc-footer-assurance">
                  <ShieldCheck size={18} className="doc-shield" />
                  <p>
                    Astrion Digital aligns its platforms with enterprise security frameworks, least-privilege access controls, and data encryption mandates [Security questionnaires and audit packages subject to business verification]. For compliance inquiries, contact our team.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
