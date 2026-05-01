import React from 'react';

interface SectionDividerProps {
  variant?: 'dark' | 'light' | 'gradient';
  className?: string;
}

/**
 * Visual break between consecutive dark sections.
 * Prevents the "dark blob" effect when multiple dark backgrounds
 * are stacked without differentiation.
 */
const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'dark', className = '' }) => {
  if (variant === 'gradient') {
    return (
      <div className={`h-px bg-gradient-to-r from-transparent via-dfw-red/30 to-transparent ${className}`} aria-hidden="true" />
    );
  }

  if (variant === 'light') {
    return (
      <div className={`h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent ${className}`} aria-hidden="true" />
    );
  }

  // Default dark variant
  return (
    <div className={`h-px bg-gradient-to-r from-transparent via-white/10 to-transparent ${className}`} aria-hidden="true" />
  );
};

export default SectionDivider;
