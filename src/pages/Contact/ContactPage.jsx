import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  Building2, 
  Globe, 
  Sparkles,
  ArrowRight,
  ChevronDown,
  Calendar,
  MessageSquare,
  Users,
  Compass
} from 'lucide-react';
import './ContactPage.css';

const INTEREST_OPTIONS = [
  { value: 'demo', label: 'Request a live product demo' },
  { value: 'inquiry', label: 'General software inquiry' },
  { value: 'partner', label: 'Partner / Reseller program' },
  { value: 'support', label: 'Customer support' }
];

const FAQS = [
  {
    id: 'faq-1',
    question: 'How quickly can we see a live demo of XENedion?',
    answer: 'Usually within 1 to 2 business days. Once you submit the form, our product specialists will reach out with a direct calendar link so you can choose a time that fits your schedule.'
  },
  {
    id: 'faq-2',
    question: 'How is our business data protected?',
    answer: 'We treat your company data with the highest level of security. We never share or sell your contact information, and we execute mutual non-disclosure agreements (NDAs) prior to any deep operational reviews.'
  },
  {
    id: 'faq-3',
    question: 'Can XENedion connect to our existing software and tools?',
    answer: 'Yes. XENedion includes pre-built connectors and standard APIs for banking feeds, eCommerce platforms (Shopify, WooCommerce), 3PL shipping carriers, and CRM software, ensuring your data flows seamlessly without double entry.'
  },
  {
    id: 'faq-4',
    question: 'How long does a typical implementation take?',
    answer: 'Unlike legacy ERPs that drag on for years, most XENedion rollouts take between 4 to 8 weeks thanks to ready-to-use industry templates and structured data migration support.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    company: '',
    interest: 'demo',
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

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="inner-page contact-page">
      {/* Friendly Hero Banner */}
      <section className="contact-hero-section">
        <div className="container contact-hero-container">
          <div className="contact-hero-content">
            <div className="contact-eyebrow-badge mono-tag">
              <span className="eyebrow-dot"></span>
              GET IN TOUCH
            </div>

            <h1 className="contact-hero-title">
              Let’s Start a Conversation.
            </h1>

            <p className="contact-hero-lead">
              Have a question about XENedion ERP or want to see a live demo tailored to your industry? Fill out the form below and our team will get back to you within 24 hours.
            </p>

            <div className="contact-trust-badges">
              <div className="trust-badge mono-tag">
                <Clock size={14} className="trust-badge-icon" />
                <span>Response within 24 Hours</span>
              </div>
              <div className="trust-badge mono-tag">
                <ShieldCheck size={14} className="trust-badge-icon" />
                <span>100% Confidential &bull; Zero Spam</span>
              </div>
              <div className="trust-badge mono-tag">
                <Sparkles size={14} className="trust-badge-icon" />
                <span>Free Tailored Product Walkthrough</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="contact-main-content">
        <div className="container">
          <div className="contact-grid">
            
            {/* LEFT COLUMN: Clean Contact / Demo Form */}
            <div className="contact-left-col">
              <div className="contact-card form-card">
                
                <div className="form-header">
                  <div className="form-header-badge mono-tag">
                    <MessageSquare size={14} />
                    <span>DIRECT INQUIRY</span>
                  </div>
                  <h2 className="form-title">Send Us a Message</h2>
                  <p className="form-subtitle">
                    Tell us about your team’s daily operational bottlenecks and we will prepare a walkthrough tailored to your vertical.
                  </p>
                </div>

                {submitted ? (
                  <div className="form-submitted-card">
                    <div className="submitted-icon-wrap">
                      <CheckCircle2 size={48} className="submitted-check" />
                    </div>
                    <h3 className="submitted-title">Thank You! We’ll Be in Touch Soon.</h3>
                    <p className="submitted-message">
                      We received your message, <strong>{formData.fullName}</strong>. One of our product specialists will reach out to <strong>{formData.workEmail}</strong> within 1 business day with direct calendar availability and helpful resources.
                    </p>

                    <div className="submitted-summary">
                      <div className="summary-item">
                        <span className="summary-key mono-tag">INQUIRY TYPE:</span>
                        <span className="summary-val">
                          {INTEREST_OPTIONS.find((opt) => opt.value === formData.interest)?.label || formData.interest}
                        </span>
                      </div>
                      {formData.company && (
                        <div className="summary-item">
                          <span className="summary-key mono-tag">ORGANIZATION:</span>
                          <span className="summary-val">{formData.company}</span>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      className="reset-form-btn mono-tag"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          workEmail: '',
                          phone: '',
                          company: '',
                          interest: 'demo',
                          message: ''
                        });
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="briefing-form" onSubmit={handleSubmit}>
                    
                    <div className="fields-grid-2">
                      {/* Full Name */}
                      <div className="field-block">
                        <label htmlFor="fullName" className="field-label">
                          Full Name <span className="req">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          placeholder="e.g. John Doe"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>

                      {/* Work Email */}
                      <div className="field-block">
                        <label htmlFor="workEmail" className="field-label">
                          Work Email <span className="req">*</span>
                        </label>
                        <input
                          type="email"
                          id="workEmail"
                          name="workEmail"
                          required
                          placeholder="e.g. john@company.com"
                          value={formData.workEmail}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="field-block">
                        <label htmlFor="phone" className="field-label">
                          Phone Number <span className="req">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="e.g. +1 (555) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>

                      {/* Company Name */}
                      <div className="field-block">
                        <label htmlFor="company" className="field-label">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          placeholder="e.g. Acme Logistics"
                          value={formData.company}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* What are you interested in? Dropdown */}
                    <div className="field-block field-block-full">
                      <label htmlFor="interest" className="field-label">
                        What are you interested in? <span className="req">*</span>
                      </label>
                      <div className="select-wrapper">
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="form-input form-select"
                        >
                          {INTEREST_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={18} className="select-arrow" />
                      </div>
                    </div>

                    {/* Message / Project Details */}
                    <div className="field-block field-block-full">
                      <label htmlFor="message" className="field-label">
                        Message / Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Tell us a little bit about your current operations and what you’re looking to solve..."
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                      ></textarea>
                    </div>

                    {/* Submit Section */}
                    <div className="form-submit-row">
                      <button
                        type="submit"
                        className="submit-cta-btn"
                        disabled={loading}
                      >
                        <span>{loading ? 'Sending Message...' : 'Request a Demo / Send Message'}</span>
                        <ArrowRight size={16} />
                      </button>

                      <div className="form-privacy-note">
                        <ShieldCheck size={14} className="privacy-icon" />
                        <span>We respect your privacy. No spam, ever.</span>
                      </div>
                    </div>

                  </form>
                )}

              </div>
            </div>

            {/* RIGHT COLUMN: 3 Clean, Spaced-Out Sections */}
            <aside className="contact-right-col">
              
              {/* Section: Direct Contact */}
              <div className="contact-card info-card">
                <div className="card-header">
                  <div className="card-icon-box blue">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="card-heading">Direct Contact</h3>
                    <span className="card-subheading mono-tag">DROP US A NOTE ANYTIME</span>
                  </div>
                </div>

                <div className="pale-rows-list">
                  <div className="pale-row">
                    <span className="row-tag mono-tag">SALES &amp; DEMOS</span>
                    <a href="mailto:sales@astriondigital.com" className="row-link">
                      sales@astriondigital.com
                    </a>
                  </div>

                  <div className="pale-row">
                    <span className="row-tag mono-tag">GENERAL INQUIRIES</span>
                    <a href="mailto:info@astriondigital.com" className="row-link">
                      info@astriondigital.com
                    </a>
                  </div>

                  <div className="pale-row">
                    <span className="row-tag mono-tag">PARTNERSHIP PROGRAM</span>
                    <a href="mailto:partners@astriondigital.com" className="row-link">
                      partners@astriondigital.com
                    </a>
                  </div>
                </div>

                <div className="guarantee-box">
                  <Clock size={16} className="guarantee-icon" />
                  <div className="guarantee-info">
                    <span className="guarantee-label mono-tag">RESPONSE COMMITMENT</span>
                    <span className="guarantee-val">We typically respond within 1 business day.</span>
                  </div>
                </div>
              </div>

              {/* Section: What Happens Next? */}
              <div className="contact-card info-card">
                <div className="card-header">
                  <div className="card-icon-box orange">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h3 className="card-heading">What Happens Next?</h3>
                    <span className="card-subheading mono-tag">OUR SIMPLE PROCESS</span>
                  </div>
                </div>

                <div className="next-steps-list">
                  <div className="next-step-item">
                    <div className="next-step-num mono-tag"><CheckCircle2 size={13} /></div>
                    <div className="next-step-content">
                      <h4 className="next-step-title">Quick Intro Call</h4>
                      <p className="next-step-desc">
                        We learn about your workflow bottlenecks and operational goals.
                      </p>
                    </div>
                  </div>

                  <div className="next-step-item">
                    <div className="next-step-num mono-tag"><CheckCircle2 size={13} /></div>
                    <div className="next-step-content">
                      <h4 className="next-step-title">Personalized Demo</h4>
                      <p className="next-step-desc">
                        We show you the exact XENedion modules that solve your daily problems.
                      </p>
                    </div>
                  </div>

                  <div className="next-step-item">
                    <div className="next-step-num mono-tag"><CheckCircle2 size={13} /></div>
                    <div className="next-step-content">
                      <h4 className="next-step-title">Transparent Plan</h4>
                      <p className="next-step-desc">
                        A straightforward rollout timeline and pricing estimate—zero pressure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section: Our Offices / Delivery Hubs */}
              <div className="contact-card info-card">
                <div className="card-header">
                  <div className="card-icon-box blue">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <h3 className="card-heading">Our Offices &amp; Delivery Hubs</h3>
                    <span className="card-subheading mono-tag">GLOBAL TIMEZONE COVERAGE</span>
                  </div>
                </div>

                <div className="pale-rows-list">
                  <div className="pale-location-row">
                    <div className="loc-header">
                      <span className="loc-region mono-tag">NORTH AMERICA</span>
                      <span className="loc-status mono-tag">
                        <span className="status-dot"></span>
                        ONLINE
                      </span>
                    </div>
                    <h4 className="loc-city">Astrion Digital Innovation Hub</h4>
                    <div className="loc-meta mono-tag">
                      <Clock size={12} />
                      <span>Mon–Fri, 9am–6pm EST</span>
                    </div>
                  </div>

                  <div className="pale-location-row">
                    <div className="loc-header">
                      <span className="loc-region mono-tag">INDIA &amp; APAC</span>
                      <span className="loc-status mono-tag">
                        <span className="status-dot"></span>
                        ONLINE
                      </span>
                    </div>
                    <h4 className="loc-city">Asia-Pacific Technology Center</h4>
                    <div className="loc-meta mono-tag">
                      <Clock size={12} />
                      <span>Mon–Fri, 9am–6pm IST</span>
                    </div>
                  </div>

                  <div className="pale-location-row">
                    <div className="loc-header">
                      <span className="loc-region mono-tag">EMEA</span>
                      <span className="loc-status mono-tag">
                        <span className="status-dot"></span>
                        ONLINE
                      </span>
                    </div>
                    <h4 className="loc-city">Regional Operations &amp; Support Hub</h4>
                    <div className="loc-meta mono-tag">
                      <Clock size={12} />
                      <span>Mon–Fri, 9am–6pm GMT</span>
                    </div>
                  </div>
                </div>
              </div>

            </aside>

          </div>

          {/* Frequently Asked Questions: Full-Width Card Below */}
          <div className="contact-card faq-card-section">
            <div className="faq-header">
              <div className="faq-badge mono-tag">
                <span className="badge-dot"></span>
                COMMON QUESTIONS
              </div>
              <h2 className="faq-heading">Frequently Asked Questions</h2>
              <p className="faq-desc">
                Everything you need to know about getting started, scheduling a walkthrough, and implementing XENedion.
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
