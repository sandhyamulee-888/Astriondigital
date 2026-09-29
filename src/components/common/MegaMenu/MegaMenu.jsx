import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './MegaMenu.css';

export default function MegaMenu({ item, isOpen, onClose }) {
  if (!isOpen || !item?.megaMenu) return null;

  const { tag, headline, featured, columns } = item.megaMenu;

  return (
    <div 
      className="megamenu-dropdown"
      role="region"
      aria-label={`${item.label} sub-navigation`}
    >
      <div className="container megamenu-inner">
        {/* Left Editorial Header Column */}
        <div className="megamenu-editorial">
          <div className="mono-label megamenu-tag">{tag}</div>
          <p className="megamenu-headline">{headline}</p>

          {featured && (
            <div className="megamenu-featured">
              <span className="mono-tag featured-badge">FEATURED PERSPECTIVE</span>
              <h4 className="featured-title">{featured.title}</h4>
              <p className="featured-desc">{featured.description}</p>
              <Link 
                to={featured.href} 
                className="featured-link"
                onClick={onClose}
              >
                <span>Read Blueprint</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>

        {/* Content Columns with Thin Dividers */}
        <div className="megamenu-columns-grid">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="megamenu-col">
              <h5 className="megamenu-col-heading mono-tag">{col.heading}</h5>
              <ul className="megamenu-links-list">
                {col.items.map((subItem, itemIdx) => (
                  <li key={itemIdx} className="megamenu-list-item">
                    <Link
                      to={subItem.href}
                      className="megamenu-link"
                      onClick={onClose}
                    >
                      <div className="megamenu-link-header">
                        <span className="megamenu-link-title">{subItem.title}</span>
                        <ArrowUpRight size={13} className="megamenu-link-arrow" />
                      </div>
                      {subItem.desc && (
                        <p className="megamenu-link-desc">{subItem.desc}</p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Subtle Bar with Quick Link */}
      <div className="megamenu-bottom-bar">
        <div className="container bottom-bar-inner">
          <span className="mono-tag">ASTRION DIGITAL ARCHITECTURE</span>
          <Link to={item.href} className="view-all-link" onClick={onClose}>
            <span>View All {item.label}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
