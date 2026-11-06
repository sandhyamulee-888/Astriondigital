import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layers, ArrowRight } from 'lucide-react';
import './FloatingERPButton.css';

export default function FloatingERPButton() {
  const location = useLocation();
  const isAlreadyOnERP = location.pathname === '/solutions/erp' || location.pathname === '/xenedion';

  const handleClick = (e) => {
    if (isAlreadyOnERP) {
      // If already on the ERP page, smoothly scroll to the top hero or modules
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="floating-erp-container" aria-label="Quick Access to XENedion ERP">
      <Link
        to="/solutions/erp"
        onClick={handleClick}
        className="floating-erp-btn"
        aria-label="XENedion ERP"
        title="XENedion ERP Platform"
      >
        <Layers size={17} className="floating-erp-icon" aria-hidden="true" />
        <span className="floating-erp-label">XENedion ERP</span>
        <ArrowRight size={15} className="floating-erp-arrow" aria-hidden="true" />
      </Link>
    </div>
  );
}
