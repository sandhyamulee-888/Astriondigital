import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle({ className = '', compact = false }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`theme-toggle-segmented ${compact ? 'compact' : ''} ${className}`}
      role="group"
      aria-label="Select color theme"
    >
      <button
        type="button"
        className={`theme-segment-btn ${theme === 'light' ? 'is-active' : ''}`}
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
        aria-label="Switch to Light Theme"
        title="Light Mode"
      >
        <Sun size={15} className="theme-btn-icon" />
        {!compact && <span className="theme-btn-label">Light</span>}
      </button>

      <button
        type="button"
        className={`theme-segment-btn ${theme === 'dark' ? 'is-active' : ''}`}
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
        aria-label="Switch to Dark Theme"
        title="Dark Mode"
      >
        <Moon size={15} className="theme-btn-icon" />
        {!compact && <span className="theme-btn-label">Dark</span>}
      </button>
    </div>
  );
}
