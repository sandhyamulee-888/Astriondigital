import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../../../data/navigation';
import MegaMenu from '../MegaMenu/MegaMenu';
import MobileNav from '../MobileNav/MobileNav';
import Button from '../Button/Button';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Scroll listener for sticky header height & blur transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route changes
  useEffect(() => {
    setActiveMenuId(null);
    setIsMobileNavOpen(false);
  }, [location.pathname]);

  // Handle escape key to close mega menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMenuId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = (itemId) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMenuId(itemId);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenuId(null);
    }, 150);
  };

  const activeItem = NAV_ITEMS.find((item) => item.id === activeMenuId);

  return (
    <>
      <header
        ref={navRef}
        className={`site-header ${isScrolled ? 'scrolled' : ''} ${activeMenuId ? 'menu-active' : ''}`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container header-container">
          {/* Logo / Official Astrion Brand */}
          <Link to="/" className="brand-logo" aria-label="Astrion Digital Homepage">
            <img 
              src="/logo.png" 
              alt="Astrion Digital" 
              className="brand-logo-img" 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {NAV_ITEMS.map((item) => {
                const isActive = activeMenuId === item.id;
                if (!item.megaMenu) {
                  return (
                    <li key={item.id} className="nav-item">
                      <Link 
                        to={item.href} 
                        className={`nav-button ${location.pathname === item.href ? 'is-active' : ''}`}
                      >
                        <span className="nav-button-label">{item.label}</span>
                      </Link>
                    </li>
                  );
                }
                return (
                  <li
                    key={item.id}
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                  >
                    <button
                      className={`nav-button ${isActive ? 'is-active' : ''}`}
                      aria-expanded={isActive}
                      aria-haspopup="true"
                      onClick={() => setActiveMenuId(isActive ? null : item.id)}
                    >
                      <span className="nav-button-label">{item.label}</span>
                      {item.badge && <span className="nav-badge">{item.badge}</span>}
                      <ChevronDown size={14} className={`nav-chevron ${isActive ? 'open' : ''}`} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action CTA on Right */}
          <div className="header-actions">
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              className="header-cta"
            >
              Request a Demo
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-trigger"
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Panel */}
        <MegaMenu
          item={activeItem}
          isOpen={Boolean(activeMenuId && activeItem?.megaMenu)}
          onClose={() => setActiveMenuId(null)}
        />
      </header>

      {/* Mobile Navigation Full-screen Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}
