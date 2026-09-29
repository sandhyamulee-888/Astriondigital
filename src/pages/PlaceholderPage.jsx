import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react';
import Button from '../components/common/Button/Button';
import './PlaceholderPage.css';

export default function PlaceholderPage({ title, section }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const displayTitle = title || (pathSegments.length > 0 ? pathSegments[pathSegments.length - 1].replace(/-/g, ' ').toUpperCase() : 'PAGE');

  return (
    <div className="placeholder-page">
      <div className="container placeholder-container">
        {/* Breadcrumb */}
        <div className="placeholder-breadcrumb mono-tag">
          <Link to="/">HOME</Link>
          {pathSegments.map((segment, idx) => (
            <React.Fragment key={idx}>
              <span className="breadcrumb-separator">/</span>
              <span>{segment.toUpperCase()}</span>
            </React.Fragment>
          ))}
        </div>

        <div className="placeholder-content-card">
          <div className="placeholder-badge mono-label">
            <Layers size={14} />
            <span>PHASE 2 ARCHITECTURE SPECIFICATION</span>
          </div>

          <h1 className="placeholder-title">{displayTitle}</h1>
          <p className="placeholder-path mono-tag">{location.pathname}</p>

          <p className="placeholder-desc">
            This route is mapped within the Astrion Digital architecture. Per the Phase 1 implementation instructions, the complete homepage design and global layout system are established first to set the brand's visual identity. Full inner-page templates (SolutionDetailPage, IndustryDetailPage, etc.) will be delivered in the subsequent phase.
          </p>

          <div className="placeholder-actions">
            <Button to="/" variant="primary" size="md" icon="arrow">
              Return to Homepage
            </Button>
            <Button to="/contact" variant="secondary" size="md" icon="arrow">
              Contact Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
