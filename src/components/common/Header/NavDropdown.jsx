import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import './NavDropdown.css';

/**
 * Common NavDropdown Component
 * 
 * Reusable, unified dropdown menu used across all header components:
 * About, Solutions, Industries, Partners, and Insights.
 * 
 * Automatically handles:
 * - Single column vs Multi-column layouts based on items
 * - Column eyebrow headers
 * - Link titles, optional badges, arrow transitions, and descriptions
 * - Unified footer with quick link to overview page
 * - Left or right alignment to prevent clipping
 */
export default function NavDropdown({ item, align = 'left', onClose }) {
  if (!item?.megaMenu?.columns?.length) return null;

  const { columns } = item.megaMenu;
  const isMultiColumn = columns.length > 1;

  return (
    <div
      className={`nav-dropdown-menu ${isMultiColumn ? 'multi-column' : 'single-column'} align-${align}`}
      role="menu"
      aria-label={`${item.label} navigation menu`}
    >
      <div className="nav-dropdown-columns">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="nav-dropdown-col">
            {col.heading && (
              <span className="nav-dropdown-col-heading">
                {col.heading}
              </span>
            )}
            <ul className="nav-dropdown-links-list">
              {col.items.map((subItem, itemIdx) => (
                <li key={itemIdx} role="none" className="nav-dropdown-item">
                  <Link
                    to={subItem.href}
                    className="nav-dropdown-link"
                    role="menuitem"
                    onClick={onClose}
                  >
                    <div className="nav-dropdown-link-header">
                      <span className="nav-dropdown-link-title">
                        {subItem.title}
                      </span>
                      {subItem.badge && (
                        <span className="nav-dropdown-badge">{subItem.badge}</span>
                      )}
                      <ArrowUpRight
                        size={13}
                        className="nav-dropdown-link-arrow"
                        aria-hidden="true"
                      />
                    </div>
                    {subItem.desc && (
                      <p className="nav-dropdown-link-desc">{subItem.desc}</p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Universal Footer Link */}
      <div className="nav-dropdown-footer">
        <Link
          to={item.href}
          className="nav-dropdown-view-all"
          onClick={onClose}
        >
          <span>View All {item.label}</span>
          <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

