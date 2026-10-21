import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-container">
        {/* Top Brand & Tagline Tier */}
        <div className="footer-top-tier">
          <div className="footer-brand-block">
            <Link to="/" className="footer-logo">
              <img 
                src="/logo.png" 
                alt="Astrion Digital" 
                className="footer-logo-img" 
              />
            </Link>
            <p className="footer-tagline">
              The Company Behind Intelligent Enterprise Software.
            </p>
            <div className="footer-meta-label mono-tag">
              ENTERPRISE SOFTWARE PRODUCTS &bull; INNOVATION &bull; BUSINESS TECHNOLOGY
            </div>
          </div>

          <div className="footer-contact-direct">
            <span className="mono-tag footer-inquiries-label">CONNECT WITH ARCHITECTS</span>
            <Link to="/contact" className="footer-talk-link">
              <span>Schedule Strategic Briefing</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        <div className="footer-divider hairline" />

        {/* 5 Multi-Column Directory Matching Sitemap Hierarchy */}
        <div className="footer-columns-grid">
          {/* Column 1: About */}
          <div className="footer-col">
            <h4 className="footer-col-title mono-tag">ABOUT</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Astrion</Link></li>
              <li><Link to="/about/vision-mission">Vision &amp; Mission</Link></li>
              <li><Link to="/about/approach">Our Approach</Link></li>
              <li><Link to="/about/leadership">Leadership</Link></li>
              <li><Link to="/about/partners">Strategic Partners</Link></li>
              <li><Link to="/contact">Contact &amp; Briefings</Link></li>
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
              <li><Link to="/solutions/data-business-intelligence">Data &amp; BI</Link></li>
              <li><Link to="/solutions/integration-api">Integration &amp; API</Link></li>
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
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="external-footer-link"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider hairline" />

        {/* Bottom Legal & Copyright Tier */}
        <div className="footer-bottom-tier">
          <p className="copyright-text">
            &copy; {currentYear} Astrion Digital Private Limited. All rights reserved. The corporate foundation for intelligent enterprise software and flagship platform XENedion ERP.
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
