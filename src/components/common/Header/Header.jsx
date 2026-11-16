import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../../../data/navigation';
import NavDropdown from './NavDropdown';
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

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMenuId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (itemId) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMenuId(itemId);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenuId(null);
    }, 180);
  };

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
              {NAV_ITEMS.map((item, index) => {
                const isOpen = activeMenuId === item.id;
                const hasDropdown = Boolean(item.megaMenu?.columns?.length);

                const isCurrentRoute = location.pathname === item.href || 
                  (item.href !== '/' && location.pathname.startsWith(item.href)) ||
                  (item.id === 'partners' && location.pathname === '/about/partners');

                if (!hasDropdown) {
                  return (
                    <li key={item.id} className="nav-item">
                      <Link 
                        to={item.href} 
                        className={`nav-button ${isCurrentRoute ? 'is-route-active' : ''}`}
                      >
                        <span className="nav-button-label">{item.label}</span>
                      </Link>
                    </li>
                  );
                }

                // Smart positioning:
                // About (1), Solutions (2) -> left-aligned to button
                // Industries (3) -> centered under button
                // Partners (4), Insights (5) -> right-aligned to button
                let align = 'left';
                if (index === 3) align = 'center';
                else if (index >= 4) align = 'right';

                return (
                  <li
                    key={item.id}
                    className="nav-item"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                  >
                    <button
                      className={`nav-button ${isCurrentRoute ? 'is-route-active' : ''} ${isOpen ? 'is-open' : ''}`}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => setActiveMenuId(isOpen ? null : item.id)}
                    >
                      <span className="nav-button-label">{item.label}</span>
                      {item.badge && <span className="nav-badge">{item.badge}</span>}
                      <ChevronDown size={14} className={`nav-chevron ${isOpen ? 'open' : ''}`} />
                    </button>

                    {/* Common Nav Dropdown Component for All Menu Items */}
                    {isOpen && (
                      <NavDropdown
                        item={item}
                        align={align}
                        onClose={() => setActiveMenuId(null)}
                        onMouseEnter={() => {
                          if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                        }}
                        onMouseLeave={handleMouseLeave}
                      />
                    )}
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
      </header>

      {/* Mobile Navigation Full-screen Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}
