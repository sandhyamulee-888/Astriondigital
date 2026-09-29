import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-container">
        {/* Top Brand & Tagline Tier */}
        <div className="footer-top-tier">
          <div className="footer-brand-block">
            <Link to="/" className="footer-logo">
              <img 
                src={theme === 'dark' ? '/logo-dark.png' : '/logo.png'} 
                alt="Astrion Digital" 
                className="footer-logo-img" 
              />
            </Link>
            <p className="footer-tagline">
              Engineering intelligence into every enterprise.
            </p>
            <div className="footer-meta-label mono-tag">
              ENTERPRISE PLATFORMS &bull; MISSION-CRITICAL SYSTEMS &bull; AI ARCHITECTURE
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

        {/* 4 Multi-Column Directory */}
        <div className="footer-columns-grid">
          {/* Column 1: Solutions */}
          <div className="footer-col">
            <h4 className="footer-col-title mono-tag">SOLUTIONS</h4>
            <ul className="footer-links">
              <li><Link to="/solutions/digital-transformation">Digital Transformation</Link></li>
              <li><Link to="/solutions/ai-intelligent-automation">AI & Automation</Link></li>
              <li><Link to="/solutions/software-development">Software Development</Link></li>
              <li><Link to="/solutions/erp">ERP Solutions</Link></li>
              <li><Link to="/solutions/cybersecurity">Cybersecurity</Link></li>
              <li><Link to="/solutions/cloud-infrastructure">Cloud & Infrastructure</Link></li>
              <li><Link to="/solutions/data-business-intelligence">Data & BI</Link></li>
              <li><Link to="/solutions/integration-api">Integration & API</Link></li>
            </ul>
          </div>

          {/* Column 2: XENedion ERP */}
          <div className="footer-col">
            <h4 className="footer-col-title mono-tag">XENEDION ERP</h4>
            <ul className="footer-links">
              <li><Link to="/xenedion">Platform Overview</Link></li>
              <li><Link to="/xenedion/modules">Modular Core</Link></li>
              <li><Link to="/xenedion/industries">Industry Blueprints</Link></li>
              <li><Link to="/xenedion/ai-automation">AI & Workflow Automation</Link></li>
              <li><Link to="/xenedion/integrations">Enterprise Integrations</Link></li>
              <li><Link to="/xenedion/implementation">Implementation Methodology</Link></li>
              <li><Link to="/xenedion/partner-program">Partner Program</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-col">
            <h4 className="footer-col-title mono-tag">COMPANY</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Astrion</Link></li>
              <li><Link to="/about/vision-mission">Vision & Mission</Link></li>
              <li><Link to="/about/approach">Our Approach</Link></li>
              <li><Link to="/about/leadership">Leadership</Link></li>
              <li><Link to="/about/partners">Strategic Partners</Link></li>
              <li><Link to="/contact">Contact & Offices</Link></li>
            </ul>
          </div>

          {/* Column 4: Insights & Legal */}
          <div className="footer-col">
            <h4 className="footer-col-title mono-tag">INSIGHTS</h4>
            <ul className="footer-links">
              <li><Link to="/insights/blog">Technical Journal & Blog</Link></li>
              <li><Link to="/insights/case-studies">Transformation Case Studies</Link></li>
              <li><Link to="/insights/resources">Architecture Whitepapers</Link></li>
            </ul>

            <div className="footer-subgroup">
              <h4 className="footer-col-title mono-tag">NETWORKS</h4>
              <ul className="footer-links">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="external-footer-link">
                    <span>LinkedIn</span>
                    <ArrowUpRight size={13} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider hairline" />

        {/* Bottom Legal & Copyright Tier */}
        <div className="footer-bottom-tier">
          <p className="copyright-text">
            &copy; {currentYear} Astrion Digital. All rights reserved. Architectural and enterprise platforms engineered for scale.
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
