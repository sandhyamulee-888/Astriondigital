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
        ) : rootSection === 'about' && subSlug === 'vision-mission' ? (
          /* =========================================================================
               ABOUT: VISION & MISSION
             ========================================================================= */
          <div className="placeholder-content-card">
            <div className="placeholder-badge mono-label">
              <Compass size={14} />
              <span>ABOUT // GUIDING PRINCIPLES</span>
            </div>

            <h1 className="placeholder-title">Vision &amp; Mission</h1>
            
            <div className="inner-vm-grid">
              <div className="vm-box">
                <span className="mono-label vm-tag">{VISION_MISSION.vision.tag}</span>
                <h3 className="vm-box-title">{VISION_MISSION.vision.title}</h3>
                <p className="vm-desc">"{VISION_MISSION.vision.description}"</p>
                <div className="vm-chips">
                  {VISION_MISSION.vision.pillars.map((p, idx) => (
                    <span key={idx} className="domain-chip mono-tag">{p}</span>
                  ))}
                </div>
              </div>

              <div className="vm-box">
                <span className="mono-label vm-tag orange">{VISION_MISSION.mission.tag}</span>
                <h3 className="vm-box-title">{VISION_MISSION.mission.title}</h3>
                <p className="vm-desc">"{VISION_MISSION.mission.description}"</p>
                <div className="vm-chips">
                  {VISION_MISSION.mission.pillars.map((p, idx) => (
                    <span key={idx} className="domain-chip mono-tag">{p}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="placeholder-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Schedule Strategic Briefing
              </Button>
              <Button to="/#about" variant="secondary" size="md" icon="arrow">
                Back to About Section
              </Button>
            </div>
          </div>
        ) : rootSection === 'about' && subSlug === 'approach' ? (
          /* =========================================================================
               ABOUT: OUR APPROACH
             ========================================================================= */
          <div className="placeholder-content-card">
            <div className="placeholder-badge mono-label">
              <Target size={14} />
              <span>ABOUT // TRANSFORMATION METHODOLOGY</span>
            </div>

            <h1 className="placeholder-title">Our Approach</h1>
            <p className="placeholder-lead">
              Astrion structures enterprise initiatives into four continuous engineering phases that convert strategic ambiguity into scalable, production-tested software.
            </p>

            <div className="approach-phases-vertical">
              {APPROACH_PHASES.map((phase) => (
                <div key={phase.phase} className="approach-phase-card">
                  <div className="phase-card-top">
                    <span className="mono-tag phase-badge">{phase.phase}</span>
                    <h3 className="phase-card-title">{phase.headline}</h3>
                  </div>
                  <p className="phase-card-summary">{phase.summary}</p>
                  <div className="phase-card-artifacts">
                    <span className="mono-tag artifacts-label">KEY ARTIFACTS:</span>
                    <div className="chips-flex-row">
                      {phase.deliverables.map((d, dIdx) => (
                        <span key={dIdx} className="domain-chip mono-tag">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="placeholder-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Start Discovery Phase
              </Button>
              <Button to="/#about" variant="secondary" size="md" icon="arrow">
                Return to Homepage
              </Button>
            </div>
          </div>
        ) : rootSection === 'about' && subSlug === 'leadership' ? (
          /* =========================================================================
               ABOUT: LEADERSHIP
             ========================================================================= */
          <div className="placeholder-content-card">
            <div className="placeholder-badge mono-label">
              <Users size={14} />
              <span>ABOUT // EXECUTIVE TECHNOLOGISTS</span>
            </div>

            <h1 className="placeholder-title">Leadership</h1>
            <p className="placeholder-lead">
              Our executive leadership combines decades of experience in distributed systems architecture, industrial ERP implementations, and production artificial intelligence.
            </p>

            <div className="leadership-page-grid">
              {LEADERSHIP.map((leader) => (
                <div key={leader.id} className="leader-page-card">
                  <h3 className="leader-page-name">{leader.name}</h3>
                  <div className="leader-page-role mono-label">{leader.role}</div>
                  <div className="leader-page-domain mono-tag">{leader.domain}</div>
                  <p className="leader-page-bio">{leader.bio}</p>
                  <span className="leader-page-creds mono-tag">{leader.credentials}</span>
                </div>
              ))}
            </div>

            <div className="placeholder-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Connect with Architects
              </Button>
              <Button to="/#about" variant="secondary" size="md" icon="arrow">
                Return to Homepage
              </Button>
            </div>
          </div>
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
