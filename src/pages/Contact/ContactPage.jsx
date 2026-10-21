import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  Building2, 
  Globe, 
  Sparkles,
  Layers,
  Cpu,
  ArrowRight,
  Lock,
  Zap,
  ChevronDown,
  Database,
  FileCode2,
  Check,
  Award
} from 'lucide-react';
import './ContactPage.css';

const FOCUS_DOMAINS = [
  { id: 'enterprise-digital-transformation', label: 'Digital Transformation', icon: <Layers size={14} /> },
  { id: 'xenedion-erp', label: 'XENedion ERP Platform', icon: <Cpu size={14} /> },
  { id: 'ai-intelligent-automation', label: 'AI & Intelligent Automation', icon: <Sparkles size={14} /> },
  { id: 'cybersecurity-governance', label: 'Cybersecurity & Governance', icon: <ShieldCheck size={14} /> },
  { id: 'cloud-infrastructure', label: 'Cloud & Infrastructure', icon: <Globe size={14} /> },
  { id: 'data-intelligence', label: 'Data & Business Intelligence', icon: <Database size={14} /> },
  { id: 'custom-software', label: 'Custom Software Development', icon: <FileCode2 size={14} /> }
];

const TIMELINE_OPTIONS = [
  { id: 'immediate', label: 'Immediate', sublabel: 'Less than 30 Days' },
  { id: '3-6-months', label: '3–6 Months', sublabel: 'Optimal Flight' },
  { id: '6-12-months', label: '6–12 Months', sublabel: 'Fiscal Roadmap' },
  { id: 'strategic-eval', label: 'Strategic', sublabel: 'Feasibility Phase' }
];

const OFFICE_LOCATIONS = [
  {
    region: 'North America & Global HQ',
    city: 'Global Headquarters & Systems Engineering',
    address: 'Astrion Digital Innovation Center',
    focus: 'Enterprise Architecture & Cloud Labs',
    hours: 'Mon - Fri: 08:00 - 18:00 EST',
    status: 'Active Labs'
  },
  {
    region: 'Europe, Middle East & Africa',
    city: 'EMEA Enterprise Delivery Hub',
    address: 'Astrion Regional Solutions Hub',
    focus: 'XENedion Deployment & Regional Support',
    hours: 'Mon - Fri: 08:30 - 17:30 GMT',
    status: 'Active Hub'
  },
  {
    region: 'Asia-Pacific & Australasia',
    city: 'Asia-Pacific Technology Center',
    address: 'Astrion Systems & Engineering Labs',
    focus: 'Data Mesh & Telematics R&D',
    hours: 'Mon - Fri: 09:00 - 18:00 SGT',
    status: 'Active Labs'
  }
];

const BRIEFING_EXPECTATIONS = [
  'Executive review of current ERP & infrastructure topology',
  'Identification of technical debt, latency, and integration bottlenecks',
  'Applicable reference architectures and Strangler Fig rollout models',
  'Phased implementation timeline and preliminary resource roadmap'
];

const FAQS = [
  {
    id: 'faq-1',
    question: 'What technical artifacts should we prepare for the briefing?',
    answer: 'High-level architecture diagrams, ERP module inventories, data flow maps, or current integration lists are helpful context but not strictly required. Our Principal Architects will guide the architectural discovery systematically during the 45-minute session.'
  },
  {
    id: 'faq-2',
    question: 'How does Astrion handle confidentiality, NDAs, and proprietary IP?',
    answer: 'We execute mutual non-disclosure agreements (NDAs) prior to any detailed architecture disclosures or infrastructure reviews. All client data, schemas, telemetry streams, and operational details remain strictly protected under enterprise-grade governance.'
  },
  {
    id: 'faq-3',
    question: 'How does XENedion integrate with our existing legacy ERP and core databases?',
    answer: 'XENedion employs event-driven Change Data Capture (CDC), bidirectional REST/GraphQL APIs, Kafka event streams, and JDBC connector bridges to synchronize seamlessly with on-premise relational databases and legacy mainframes with zero operational downtime.'
  },
  {
    id: 'faq-4',
    question: 'What is the typical timeline for an enterprise architecture engagement?',
    answer: 'Initial architectural discovery and roadmap definition typically span 2 to 4 weeks. Subsequent delivery sprints follow structured agile milestones with defined risk gates, automated regression verification, and gradual cutover phases.'
  },
  {
    id: 'faq-5',
    question: 'Does Astrion support air-gapped, on-premise, or sovereign cloud deployments?',
    answer: 'Yes. In addition to multi-tenant and single-tenant hybrid cloud architectures on AWS, Azure, and GCP, Astrion engineers fully air-gapped, on-premise, and sovereign cloud deployments compliant with strict defense and national data residency mandates.'
  },
  {
    id: 'faq-6',
    question: 'Can we request a proof-of-concept (PoC) or pilot before full commitment?',
    answer: 'Yes. For qualified enterprise organizations, we engineer targeted 4-week proof-of-concept sandboxes demonstrating real-time legacy sync, telemetry ingestion, or deterministic AI automation within your staging environment.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    jobTitle: '',
    domain: 'enterprise-digital-transformation',
    timeline: '3-6-months',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaqId, setOpenFaqId] = useState('faq-1');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDomainSelect = (domainId) => {
    setFormData((prev) => ({ ...prev, domain: domainId }));
  };

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="inner-page contact-page">
      {/* Centered Hero Section on Pale Blue-Gray Background */}
      <section className="contact-hero-section">
        <div className="container contact-hero-container">
          <div className="contact-hero-content">
            
            {/* Eyebrow Label */}
            <div className="contact-eyebrow-badge mono-tag">
              <span className="eyebrow-dot"></span>
              EXECUTIVE CONSULTATION // CONFIDENTIAL
            </div>

            {/* Main Heading */}
            <h1 className="contact-hero-title">
              Connect with our enterprise engineering leadership.
            </h1>

            {/* Supporting Description */}
            <p className="contact-hero-lead">
              Schedule an executive architectural briefing, request a XENedion ERP demonstration, or formulate customized digital transformation architectures for your global enterprise.
            </p>

            {/* Trust Indicator Badges */}
            <div className="contact-trust-badges">
              <div className="trust-badge mono-tag">
                <Zap size={14} className="trust-badge-icon" />
                <span>24-Hour Architect SLA</span>
              </div>
              <div className="trust-badge mono-tag">
                <ShieldCheck size={14} className="trust-badge-icon" />
                <span>Strict Mutual NDA Protection</span>
              </div>
              <div className="trust-badge mono-tag">
                <Globe size={14} className="trust-badge-icon" />
                <span>Global Advisory (US, EMEA, APAC)</span>
              </div>
              <div className="trust-badge mono-tag">
                <Award size={14} className="trust-badge-icon" />
                <span>ISO 27001 &amp; SOC 2 Type II Certified</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content: Two-Column Layout */}
      <section className="contact-main-content">
        <div className="container">
          <div className="contact-grid">
            
            {/* LEFT COLUMN: Executive Inquiry Form */}
            <div className="contact-left-col">
              <div className="contact-card form-card">
                
                {/* Form Top Header */}
                <div className="form-header">
                  <div className="form-header-row">
                    <span className="confidential-badge mono-tag">
                      <Lock size={12} />
                      EXECUTIVE INQUIRY // CONFIDENTIAL
                    </span>
                    <span className="session-tag mono-tag">45-MIN TECHNICAL DEEP-DIVE</span>
                  </div>

                  <h2 className="form-title">Request Strategic Briefing</h2>
                  <p className="form-subtitle">
                    Directly engage our Principal Enterprise Architects. Provide your organization and project context to receive a tailored architecture analysis and feasibility review.
                  </p>
                </div>

                {submitted ? (
                  <div className="form-submitted-card">
                    <div className="submitted-icon-wrap">
                      <CheckCircle2 size={44} className="submitted-check" />
                    </div>
                    <h3 className="submitted-title">Strategic Briefing Request Received</h3>
                    <p className="submitted-message">
                      Thank you, <strong>{formData.fullName}</strong>. Our enterprise architecture leadership has received your request for <strong>{formData.company}</strong>. A Principal Systems Architect will review your context and reach out directly at <strong>{formData.workEmail}</strong> within 24 business hours.
                    </p>

                    <div className="submitted-summary">
                      <div className="summary-item">
                        <span className="summary-key mono-tag">PRIMARY DOMAIN:</span>
                        <span className="summary-val">{FOCUS_DOMAINS.find(d => d.id === formData.domain)?.label || formData.domain}</span>
                      </div>
                      <div className="summary-item">
                        <span className="summary-key mono-tag">TARGET TIMELINE:</span>
                        <span className="summary-val">{TIMELINE_OPTIONS.find(t => t.id === formData.timeline)?.label} ({TIMELINE_OPTIONS.find(t => t.id === formData.timeline)?.sublabel})</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="reset-form-btn mono-tag"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          workEmail: '',
                          company: '',
                          jobTitle: '',
                          domain: 'enterprise-digital-transformation',
                          timeline: '3-6-months',
                          message: ''
                        });
                      }}
                    >
                      Submit Another Briefing Request
                    </button>
                  </div>
                ) : (
                  <form className="briefing-form" onSubmit={handleSubmit}>
                    
                    {/* SECTION 1: Select Primary Focus Domain */}
                    <div className="form-section">
                      <label className="section-label mono-tag">
                        1. SELECT PRIMARY FOCUS DOMAIN *
                      </label>
                      <div className="domain-pills">
                        {FOCUS_DOMAINS.map((dom) => {
                          const isSelected = formData.domain === dom.id;
                          return (
                            <button
                              type="button"
                              key={dom.id}
                              className={`domain-pill ${isSelected ? 'active' : ''}`}
                              onClick={() => handleDomainSelect(dom.id)}
                            >
                              <span className="pill-icon">{dom.icon}</span>
                              <span className="pill-label">{dom.label}</span>
                              {isSelected && <span className="pill-active-dot"></span>}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* SECTION 2: Enterprise & Leadership Details */}
                    <div className="form-section">
                      <label className="section-label mono-tag">
                        2. ENTERPRISE &amp; LEADERSHIP DETAILS *
                      </label>
                      <div className="fields-grid-2">
                        <div className="field-block">
                          <label htmlFor="fullName" className="field-label">
                            Full Name <span className="req">*</span>
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            placeholder="e.g. Jonathan Vance"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="form-input"
                          />
                        </div>

                        <div className="field-block">
                          <label htmlFor="workEmail" className="field-label">
                            Corporate Work Email <span className="req">*</span>
                          </label>
                          <input
                            type="email"
                            id="workEmail"
                            name="workEmail"
                            required
                            placeholder="name@enterprise.com"
                            value={formData.workEmail}
                            onChange={handleChange}
                            className="form-input"
                          />
                        </div>

                        <div className="field-block">
                          <label htmlFor="company" className="field-label">
                            Enterprise / Organization Name <span className="req">*</span>
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            placeholder="e.g. Apex Global Logistics"
                            value={formData.company}
                            onChange={handleChange}
                            className="form-input"
                          />
                        </div>

                        <div className="field-block">
                          <label htmlFor="jobTitle" className="field-label">
                            Job Title / Leadership Role
                          </label>
                          <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            placeholder="e.g. Chief Technology Officer"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            className="form-input"
                          />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 3: Target Deployment Timeline */}
                    <div className="form-section">
                      <label className="section-label mono-tag">
                        3. TARGET DEPLOYMENT TIMELINE
                      </label>
                      <div className="timeline-grid">
                        {TIMELINE_OPTIONS.map((time) => {
                          const isSelected = formData.timeline === time.id;
                          return (
                            <label
                              key={time.id}
                              className={`timeline-card ${isSelected ? 'active' : ''}`}
                            >
                              <input
                                type="radio"
                                name="timeline"
                                value={time.id}
                                checked={isSelected}
                                onChange={handleChange}
                                className="timeline-radio"
                              />
                              <div className="timeline-indicator">
                                {isSelected && <Check size={11} />}
                              </div>
                              <div className="timeline-text">
                                <span className="timeline-title">{time.label}</span>
                                <span className="timeline-sub">{time.sublabel}</span>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* SECTION 4: Architectural Context & Objectives */}
                    <div className="form-section">
                      <label htmlFor="message" className="section-label mono-tag">
                        4. ARCHITECTURAL CONTEXT &amp; OBJECTIVES
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Outline your current systems footprint, ERP modernization targets, telemetry pipeline needs, integration requirements, or key operational challenges..."
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                      ></textarea>
                    </div>

                    {/* Form Footer */}
                    <div className="form-footer-bar">
                      <div className="nda-badge">
                        <ShieldCheck size={18} className="nda-icon" />
                        <span className="nda-text">
                          Strict confidentiality &amp; mutual NDA executed prior to architecture reviews.
                        </span>
                      </div>

                      <button
                        type="submit"
                        className="submit-cta-btn"
                        disabled={loading}
                      >
                        <span>{loading ? 'Transmitting Request...' : 'Schedule Strategic Briefing'}</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

            {/* RIGHT COLUMN: 3 Supporting White Cards */}
            <aside className="contact-right-col">
              
              {/* Card 1: Direct Enterprise Communications */}
              <div className="contact-card info-card">
                <div className="card-header">
                  <div className="card-icon-box blue">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="card-heading">Direct Enterprise Communications</h3>
                    <span className="card-subheading mono-tag">FORMAL INQUIRIES &amp; RFPS</span>
                  </div>
                </div>

                <div className="pale-rows-list">
                  <div className="pale-row">
                    <span className="row-tag mono-tag">STRATEGIC &amp; SOLUTIONS INQUIRIES</span>
                    <a href="mailto:solutions@astriondigital.com" className="row-link">
                      solutions@astriondigital.com
                    </a>
                  </div>

                  <div className="pale-row">
                    <span className="row-tag mono-tag">SECURITY, DPO &amp; COMPLIANCE</span>
                    <a href="mailto:security@astriondigital.com" className="row-link">
                      security@astriondigital.com
                    </a>
                  </div>

                  <div className="pale-row">
                    <span className="row-tag mono-tag">PARTNER &amp; SI ALLIANCES</span>
                    <a href="mailto:partners@astriondigital.com" className="row-link">
                      partners@astriondigital.com
                    </a>
                  </div>
                </div>

                <div className="guarantee-box">
                  <Clock size={16} className="guarantee-icon" />
                  <div className="guarantee-info">
                    <span className="guarantee-label mono-tag">ARCHITECT RESPONSE GUARANTEE</span>
                    <span className="guarantee-val">Under 24 Business Hours Guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Global Engineering Centers */}
              <div className="contact-card info-card">
                <div className="card-header">
                  <div className="card-icon-box orange">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <h3 className="card-heading">Global Engineering Centers</h3>
                    <span className="card-subheading mono-tag">REGIONAL DELIVERY HUBS</span>
                  </div>
                </div>

                <div className="pale-rows-list">
                  {OFFICE_LOCATIONS.map((loc, idx) => (
                    <div key={idx} className="pale-location-row">
                      <div className="loc-header">
                        <span className="loc-region mono-tag">{loc.region}</span>
                        <span className="loc-status mono-tag">
                          <span className="status-dot"></span>
                          {loc.status}
                        </span>
                      </div>
                      <h4 className="loc-city">{loc.city}</h4>
                      <p className="loc-address">{loc.address}</p>
                      <div className="loc-meta mono-tag">
                        <Cpu size={12} />
                        <span>{loc.focus}</span>
                      </div>
                      <div className="loc-meta mono-tag">
                        <Clock size={12} />
                        <span>{loc.hours}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 3: What to Expect During Your Briefing */}
              <div className="contact-card info-card">
                <div className="card-header">
                  <div className="card-icon-box blue">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h3 className="card-heading">What to Expect During Your Briefing</h3>
                    <span className="card-subheading mono-tag">45-MINUTE ARCHITECTURAL SESSION</span>
                  </div>
                </div>

                <ul className="expectations-checklist">
                  {BRIEFING_EXPECTATIONS.map((item, idx) => (
                    <li key={idx} className="expectation-row">
                      <CheckCircle2 size={16} className="exp-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </aside>

          </div>

          {/* Frequently Asked Questions: Full-Width Card Below */}
          <div className="contact-card faq-card-section">
            <div className="faq-header">
              <div className="faq-badge mono-tag">
                <span className="badge-dot"></span>
                ENGAGEMENT PROTOCOL // ARCHITECTURE FAQ
              </div>
              <h2 className="faq-heading">Frequently Asked Questions</h2>
              <p className="faq-desc">
                Key questions enterprise engineering leaders ask regarding strategic briefings, technical preparation, compliance, and platform integrations.
              </p>
            </div>

            <div className="faq-accordion-list" role="region" aria-label="Frequently Asked Questions">
              {FAQS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id} className={`faq-accordion-row ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question-btn"
                      aria-expanded={isOpen}
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span className="faq-q-title">{faq.question}</span>
                      <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="faq-answer-panel">
                        <p className="faq-answer-text">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
