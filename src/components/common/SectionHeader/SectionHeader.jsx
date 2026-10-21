import React from 'react';
import './SectionHeader.css';

export default function SectionHeader({
  label,
  icon,
  title,
  description,
  theme = 'light', // 'light' or 'dark'
  align = 'left',  // 'left' or 'center'
  action,
  className = ''
}) {
  return (
    <div className={`section-header-block theme-${theme} align-${align} ${className}`}>
      {label && (
        <div className="section-label mono-label">
          {icon && <span className="section-label-icon">{icon}</span>}
          <span>{label}</span>
        </div>
      )}
      <div className="section-title-wrap">
        <h2 className="section-heading">{title}</h2>
        {action && <div className="section-action">{action}</div>}
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
