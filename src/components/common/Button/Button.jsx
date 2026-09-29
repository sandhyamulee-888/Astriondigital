import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './Button.css';

export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost', 'dark-outline'
  size = 'md',        // 'sm', 'md', 'lg'
  icon = 'arrow',     // 'arrow', 'external', 'none'
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const classNames = `btn btn-${variant} btn-${size} ${className}`.trim();

  const renderIcon = () => {
    if (icon === 'arrow') return <ArrowRight className="btn-icon" size={16} />;
    if (icon === 'external') return <ArrowUpRight className="btn-icon" size={16} />;
    return null;
  };

  const content = (
    <>
      <span className="btn-text">{children}</span>
      {renderIcon()}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classNames} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classNames} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classNames} {...props}>
      {content}
    </button>
  );
}
