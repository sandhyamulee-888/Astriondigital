import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../../../data/navigation';
import { useTheme } from '../../../context/ThemeContext';
import Button from '../Button/Button';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './MobileNav.css';

export default function MobileNav({ isOpen, onClose }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const { theme } = useTheme();

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div 
      className="mobile-nav-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <div className="mobile-nav-header">
        <Link to="/" className="mobile-nav-brand" onClick={onClose}>
          <img 
            src={theme === 'dark' ? '/logo-dark.png' : '/logo.png'} 
            alt="Astrion Digital" 
            className="mobile-brand-logo-img" 
          />
        </Link>
        <div className="mobile-nav-header-actions">
          <ThemeToggle compact={true} />
          <button 
            className="mobile-close-btn"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      <div className="mobile-nav-content">
        <div className="mobile-accordion-list">
          {NAV_ITEMS.map((item) => {
            const isExpanded = expandedSection === item.id;
            return (
              <div key={item.id} className="mobile-accordion-item">
                <button
                  className={`mobile-accordion-trigger ${isExpanded ? 'active' : ''}`}
                  onClick={() => toggleSection(item.id)}
                  aria-expanded={isExpanded}
                >
                  <span className="mobile-trigger-text">
                    {item.label}
                    {item.badge && <span className="mobile-item-badge">{item.badge}</span>}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`mobile-chevron ${isExpanded ? 'rotated' : ''}`} 
                  />
                </button>

                {isExpanded && item.megaMenu && (
                  <div className="mobile-accordion-body">
                    <div className="mobile-sublinks-wrapper">
                      <Link 
                        to={item.href} 
                        className="mobile-sublink overview-link"
                        onClick={onClose}
                      >
                        <span>{item.label} Overview</span>
                        <ArrowRight size={14} />
                      </Link>

                      {item.megaMenu.columns.map((col, colIdx) => (
                        <div key={colIdx} className="mobile-sub-group">
                          <span className="mobile-group-title mono-tag">{col.heading}</span>
                          {col.items.map((subItem, itemIdx) => (
                            <Link
                              key={itemIdx}
                              to={subItem.href}
                              className="mobile-sublink"
                              onClick={onClose}
                            >
                              <span className="sublink-title">{subItem.title}</span>
                              {subItem.desc && (
                                <span className="sublink-snippet">{subItem.desc}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mobile-nav-footer">
          <Button 
            to="/contact" 
            variant="primary" 
            size="lg" 
            className="mobile-cta-btn"
            onClick={onClose}
          >
            Let's Talk
          </Button>

          <div className="mobile-footer-info">
            <span className="mono-tag">ASTRION DIGITAL</span>
            <p className="mobile-tagline">Engineering intelligence into every enterprise.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
