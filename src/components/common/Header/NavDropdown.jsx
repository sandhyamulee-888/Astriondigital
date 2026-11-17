import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Target,
  Layers,
  Users,
  Boxes,
  Cpu,
  Sparkles,
  Cloud,
  BarChart3,
  ShoppingBag,
  Truck,
  Factory,
  Navigation,
  Car,
  Globe,
  Award,
  Handshake,
  Shirt,
  FileText,
  TrendingUp,
  FolderKanban,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import './NavDropdown.css';

/**
 * Universal Icon Mapping for all Astrion Digital navigation items.
 * Professional enterprise icons matching Design Shifu style.
 */
const ICON_MAP = {
  // About
  'About Astrion': Building2,
  'Vision & Mission': Target,
  'Our Approach': Layers,
  'Leadership': Users,

  // Solutions
  'XENedion ERP': Boxes,
  'Enterprise Digital Transformation': Cpu,
  'AI & Intelligent Automation': Sparkles,
  'Cloud & Infrastructure': Cloud,
  'Data & Business Intelligence': BarChart3,

  // Industries
  'Retail': ShoppingBag,
  'Distribution': Truck,
  'Manufacturing': Factory,
  'Garments': Shirt,
  'Automotive': Car,
  'Other Industries': Globe,

  // Partners
  'ERP Partner Program': Award,
  'Become a Partner': Handshake,
  'Partner Inquiries': Handshake,

  // Insights
  'Blog': FileText,
  'Case Studies': TrendingUp,
  'Resources': FolderKanban,
};

/**
 * Common Floating NavDropdown Component (Side-by-Side 2-Column Grid)
 * 
 * Recreates the exact premium, unified floating dropdown panel:
 * - Side-by-side 2-column layout across all components
 * - Rounded corners (20-24px) with soft diffuse shadow and subtle border
 * - Vertical item arrangement inside cards:
 *    - Professional icon box on the left (40x40px, rounded 10px)
 *    - Menu heading on the right
 *    - Description below
 * - Soft grey hover background with subtle orange left indicator
 * - Bottom callout bar with quick overview link
 */
export default function NavDropdown({
  item,
  align = 'left',
  onClose,
  onMouseEnter,
  onMouseLeave
}) {
  if (!item?.megaMenu?.columns?.length) return null;

  // Flatten all items into a side-by-side 2-column grid
  const allItems = item.megaMenu.columns.flatMap((col) => col.items);
  const isCompact = allItems.length <= 2;

  return (
    <div
      className={`nav-dropdown-panel align-${align} ${isCompact ? 'panel-compact' : ''}`}
      role="menu"
      aria-label={`${item.label} menu`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Top visual pointer caret connected to nav button */}
      <div className="nav-dropdown-caret" aria-hidden="true" />

      {/* Side-by-Side 2-Column Grid */}
      <div className="nav-dropdown-grid-2col">
        {allItems.map((subItem, itemIdx) => {
          const IconComponent = ICON_MAP[subItem.title] || Boxes;

          return (
            <Link
              key={itemIdx}
              to={subItem.href}
              className="nav-dropdown-card"
              role="menuitem"
              onClick={onClose}
            >
              {/* Subtle Left Orange Accent Line on hover */}
              <span className="nav-card-accent-line" aria-hidden="true" />

              {/* Professional Rounded Icon Box */}
              <div className="nav-card-icon-box" aria-hidden="true">
                <IconComponent size={19} className="nav-card-icon" />
              </div>

              {/* Text Container: Heading + Description */}
              <div className="nav-card-body">
                <div className="nav-card-header">
                  <span className="nav-card-title">{subItem.title}</span>
                  {subItem.badge && (
                    <span className="nav-card-badge">{subItem.badge}</span>
                  )}
                  <ArrowUpRight
                    size={13}
                    className="nav-card-arrow"
                    aria-hidden="true"
                  />
                </div>
                {subItem.desc && (
                  <p className="nav-card-desc">{subItem.desc}</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Common Bottom Bar */}
      <div className="nav-dropdown-bottom-bar">
        <div className="nav-bottom-left">
          <span className="nav-bottom-kicker mono-tag">ASTRION</span>
          <span className="nav-bottom-desc">Enterprise Platform</span>
        </div>
        <Link
          to={item.href}
          className="nav-bottom-action-link"
          onClick={onClose}
        >
          <span>View All {item.label}</span>
          <ArrowRight size={13} className="nav-bottom-arrow" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
