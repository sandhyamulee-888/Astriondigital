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
            <span className="mono-tag footer-inquiries-label">EXPLORE &amp; CONNECT</span>
            <div className="footer-action-links">
              <Link to="/contact" className="footer-talk-link">
                <span>Request a Demo</span>
                <ArrowUpRight size={18} />
              </Link>
              <Link to="/solutions/erp" className="footer-product-pill mono-tag">
                <span>Explore XENedion ERP</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-divider hairline" />

        {/* 4 Sitemap Branches Directory Grid */}
        <div className="footer-columns-grid">
          {/* Column 1: Company & About */}
          <div className="footer-col">
            <h4 className="footer-col-title mono-tag">ABOUT</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Astrion</Link></li>
              <li><Link to="/about/vision-mission">Vision &amp; Mission</Link></li>
              <li><Link to="/about/approach">Our Approach</Link></li>
              <li><Link to="/about/leadership">Leadership</Link></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="footer-col">
            <h4 className="footer-col-title mono-tag">SOLUTIONS</h4>
            <ul className="footer-links">
              <li><Link to="/solutions/erp">XENedion ERP</Link></li>
              <li><Link to="/solutions/digital-transformation">Enterprise Digital Transformation</Link></li>
              <li><Link to="/solutions/ai-intelligent-automation">AI &amp; Intelligent Automation</Link></li>
              <li><Link to="/solutions/cloud-infrastructure">Cloud &amp; Infrastructure</Link></li>
              <li><Link to="/solutions/data-business-intelligence">Data &amp; Business Intelligence</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="footer-col">
            <h4 className="footer-col-title mono-tag">INDUSTRIES</h4>
            <ul className="footer-links">
              <li><Link to="/industries/retail">Retail</Link></li>
              <li><Link to="/industries/distribution">Distribution</Link></li>
              <li><Link to="/industries/manufacturing">Manufacturing</Link></li>
              <li><Link to="/industries/logistics">Logistics</Link></li>
              <li><Link to="/industries/automotive">Automotive</Link></li>
              <li><Link to="/industries/other">Other Industries</Link></li>
            </ul>
          </div>

          {/* Column 4: Partners & Insights */}
          <div className="footer-col">
            <h4 className="footer-col-title mono-tag">PARTNERS &amp; INSIGHTS</h4>
            <ul className="footer-links">
              <li><Link to="/xenedion/partner-program">ERP Partner Program</Link></li>
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
            &copy; 2026 Astrion Digital. All rights reserved.
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
