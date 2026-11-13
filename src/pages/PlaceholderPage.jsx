import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Compass, 
  Target, 
  Users, 
  Handshake
} from 'lucide-react';
import Button from '../components/common/Button/Button';
import { SOLUTIONS } from '../data/solutions';
import { INDUSTRIES } from '../data/industries';
import { VISION_MISSION, LEADERSHIP, PARTNERS } from '../data/about';
import { APPROACH_PHASES } from '../data/approach';
import './PlaceholderPage.css';

export default function PlaceholderPage({ title }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const path = location.pathname.replace(/\/$/, '');
  const pathSegments = path.split('/').filter(Boolean);
  const rootSection = pathSegments[0] || '';
  const subSlug = pathSegments[1] || '';

  // Resolve matching sitemap content
  let matchedSolution = null;
  let matchedIndustry = null;

  if (rootSection === 'solutions' && subSlug) {
    matchedSolution = SOLUTIONS.find(s => s.id === subSlug);
  } else if (rootSection === 'industries' && subSlug) {
    matchedIndustry = INDUSTRIES.find(i => i.id === subSlug);
  }

  return (
    <div className="placeholder-page">
      <div className="container placeholder-container">
        {/* Breadcrumb matching Sitemap Hierarchy */}
        <div className="placeholder-breadcrumb mono-tag">
          <Link to="/">HOME</Link>
          {pathSegments.map((segment, idx) => (
            <React.Fragment key={idx}>
              <span className="breadcrumb-separator">/</span>
              <span>{segment.toUpperCase()}</span>
            </React.Fragment>
          ))}
        </div>

        {/* =========================================================================
             SPECIFIC SOLUTION ROUTE
           ========================================================================= */}
        {matchedSolution ? (
          <div className="placeholder-content-card">
            <div className="placeholder-badge mono-label">
              <Cpu size={14} />
              <span>SOLUTIONS // {matchedSolution.tagline}</span>
            </div>

            <h1 className="placeholder-title">{matchedSolution.title}</h1>
            <p className="placeholder-lead">{matchedSolution.shortDesc}</p>
            <p className="placeholder-body">{matchedSolution.overview}</p>

            <div className="placeholder-details-block">
              <span className="mono-tag block-heading">CORE CAPABILITIES &amp; DELIVERABLES</span>
              <ul className="details-checklist">
                {matchedSolution.services.map((srv, idx) => (
                  <li key={idx} className="checklist-item">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="architecture-callout-box">
              <span className="mono-tag callout-label">SYSTEM ARCHITECTURE SPECIFICATION</span>
              <p className="callout-text">{matchedSolution.architecture}</p>
            </div>

            <div className="placeholder-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Schedule Strategic Briefing
              </Button>
              <Button to="/#solutions" variant="secondary" size="md" icon="arrow">
                Explore All Solutions
              </Button>
            </div>
          </div>
        ) : matchedIndustry ? (
          /* =========================================================================
               SPECIFIC INDUSTRY ROUTE
             ========================================================================= */
          <div className="placeholder-content-card">
            <div className="placeholder-badge mono-label">
              <Layers size={14} />
              <span>INDUSTRIES // {matchedIndustry.name.toUpperCase()} BLUEPRINT</span>
            </div>

            <h1 className="placeholder-title">{matchedIndustry.name}</h1>
            <p className="placeholder-lead">{matchedIndustry.headline}</p>
            <p className="placeholder-body">{matchedIndustry.description}</p>

            <div className="placeholder-details-block">
              <span className="mono-tag block-heading">OPERATIONAL OUTCOMES</span>
              <ul className="details-checklist">
                {matchedIndustry.outcomes.map((outcome, idx) => (
                  <li key={idx} className="checklist-item">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="architecture-callout-box">
              <span className="mono-tag callout-label">XENEDION ERP DOMAIN MODULES</span>
              <div className="chips-flex-row">
                {matchedIndustry.xenedionFocus.map((m, idx) => (
                  <span key={idx} className="domain-chip mono-tag">{m}</span>
                ))}
              </div>
            </div>

            <div className="placeholder-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Request Industry Consultation
              </Button>
              <Button to="/#industries" variant="secondary" size="md" icon="arrow">
                View All Industries
              </Button>
            </div>
          </div>
        ) : rootSection === 'about' && (subSlug === 'vision-mission' || subSlug === 'approach' || subSlug === 'leadership') ? (
          /* =========================================================================
             ABOUT: BLANK SECTIONS
             ========================================================================= */
          <div className="placeholder-content-card blank-card" style={{ minHeight: '50vh', border: 'none', background: 'transparent', boxShadow: 'none' }}></div>
        ) : rootSection === 'about' && subSlug === 'partners' ? (
          /* =========================================================================
             ABOUT: PARTNERS
             ========================================================================= */
          <div className="placeholder-content-card">
            <div className="placeholder-badge mono-label">
              <Handshake size={14} />
              <span>ABOUT // ECOSYSTEM ALLIANCES</span>
            </div>

            <h1 className="placeholder-title">Strategic Partners</h1>
            <p className="placeholder-lead">
              Astrion collaborates with tier-1 cloud providers, data lakehouses, cybersecurity authorities, and enterprise platforms to deliver unified solutions.
            </p>

            <div className="partners-page-grid">
              {PARTNERS.map((partner) => (
                <div key={partner.id} className="partner-page-card">
                  <div className="partner-page-header">
                    <span className="mono-label partner-tier-tag">{partner.tier}</span>
                    <span className="mono-tag partner-cat-tag">{partner.category}</span>
                  </div>
                  <h3 className="partner-page-name">{partner.name}</h3>
                  <p className="partner-page-desc">{partner.desc}</p>
                  <div className="chips-flex-row">
                    {partner.tech.map((t, idx) => (
                      <span key={idx} className="domain-chip mono-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="placeholder-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Explore Partner Integrations
              </Button>
              <Button to="/#about" variant="secondary" size="md" icon="arrow">
                Return to Homepage
              </Button>
            </div>
          </div>
        ) : (
          /* =========================================================================
              GENERAL SITEMAP HUB / SECTION PAGE
             ========================================================================= */
          <div className="placeholder-content-card">
            <div className="placeholder-badge mono-label">
              <Layers size={14} />
              <span>ASTRION DIGITAL // SITEMAP ARCHITECTURE</span>
            </div>

            <h1 className="placeholder-title">
              {title || (pathSegments.length > 0 ? pathSegments[pathSegments.length - 1].replace(/-/g, ' ').toUpperCase() : 'ARCHITECTURE HUB')}
            </h1>
            <p className="placeholder-path mono-tag">{location.pathname}</p>

            <p className="placeholder-desc">
              This node is mapped directly within the Astrion Digital sitemap. Explore the full architecture, interactive visualizations, and operational blueprints across our core platforms.
            </p>

            <div className="placeholder-actions">
              <Button to="/" variant="primary" size="md" icon="arrow">
                Return to Homepage
              </Button>
              <Button to="/contact" variant="secondary" size="md" icon="arrow">
                Schedule Strategic Briefing
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
