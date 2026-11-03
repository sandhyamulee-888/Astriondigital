import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-container">
        {/* Top Brand & Tagline Tier */}
        <div className="footer-top-tier">
          <div className="footer-brand-block">
            <Link to="/" className="footer-logo" aria-label="Astrion Digital Homepage">
              <img 
                src="/logo.png" 
                alt="Astrion Digital" 
                className="footer-logo-img" 
              />
            </Link>
            <p className="footer-company-blurb">
              The Company Behind Intelligent Enterprise Software. Astrion Digital provides the corporate foundation and product engineering for XENedion ERP.
            </p>
            <div className="mono-tag" style={{ color: 'var(--brand-orange, #ff6b35)', fontSize: '0.75rem', marginTop: '6px' }}>
              Enterprise Software Products &bull; Innovation &bull; Business Technology
            </div>
          </div>

          <div className="footer-contact-direct">
            <span className="mono-tag footer-inquiries-label">READY TO GET STARTED?</span>
            <Link to="/contact" className="footer-talk-link">
              <span>Request a Demo</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        <div className="footer-divider hairline" />

        {/* 5 Sitemap Branches Columns */}
        <div className="footer-columns-grid">
          {/* Column 1: About */}
          <div className="footer-col">
            <h4 className="footer-col-title mono-tag">ABOUT</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Astrion</Link></li>
              <li><Link to="/about/vision-mission">Vision &amp; Mission</Link></li>
              <li><Link to="/about/approach">Our Approach</Link></li>
              <li><Link to="/about/leadership">Leadership</Link></li>
              <li><Link to="/about/partners">Partners</Link></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="footer-col">
            <h4 className="footer-col-title mono-tag">SOLUTIONS</h4>
            <ul className="footer-links">
              <li><Link to="/solutions/digital-transformation">Digital Transformation</Link></li>
              <li><Link to="/solutions/ai-intelligent-automation">AI &amp; Automation</Link></li>
              <li><Link to="/solutions/software-development">Software Development</Link></li>
              <li><Link to="/solutions/erp">ERP Solutions</Link></li>
              <li><Link to="/solutions/cybersecurity">Cybersecurity</Link></li>
              <li><Link to="/solutions/cloud-infrastructure">Cloud &amp; Infrastructure</Link></li>
            </ul>
          </div>

          {/* Column 3: XENedion ERP */}
          <div className="footer-col">
            <h4 className="footer-col-title mono-tag">XENEDION ERP</h4>
            <ul className="footer-links">
              <li><Link to="/xenedion">Overview</Link></li>
              <li><Link to="/xenedion/modules">Modules</Link></li>
              <li><Link to="/xenedion/industries">Industries</Link></li>
              <li><Link to="/xenedion/ai-automation">AI &amp; Automation</Link></li>
              <li><Link to="/xenedion/integrations">Integrations</Link></li>
              <li><Link to="/xenedion/implementation">Implementation</Link></li>
              <li><Link to="/xenedion/partner-program">Partner Program</Link></li>
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div className="footer-col">
            <h4 className="footer-col-title mono-tag">INDUSTRIES</h4>
            <ul className="footer-links">
              <li><Link to="/industries/manufacturing">Manufacturing</Link></li>
              <li><Link to="/industries/distribution">Distribution</Link></li>
              <li><Link to="/industries/retail">Retail</Link></li>
              <li><Link to="/industries/logistics">Logistics</Link></li>
              <li><Link to="/industries/professional-services">Professional Services</Link></li>
              <li><Link to="/industries/automotive">Automotive</Link></li>
              <li><Link to="/industries/other">Other Industries</Link></li>
            </ul>
          </div>

          {/* Column 5: Insights */}
          <div className="footer-col">
            <h4 className="footer-col-title mono-tag">INSIGHTS</h4>
            <ul className="footer-links">
              <li><Link to="/insights/blog">Blog</Link></li>
              <li><Link to="/insights/case-studies">Case Studies</Link></li>
              <li><Link to="/insights/resources">Resources</Link></li>
              <li><Link to="/contact">Request a Demo</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider hairline" />

        {/* Bottom Legal & Copyright Tier */}
        <div className="footer-bottom-tier">
          <p className="copyright-text">
            &copy; 2026 Astrion Digital Private Limited. All rights reserved.
          </p>

          <ul className="legal-links">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/security">Security Governance</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
