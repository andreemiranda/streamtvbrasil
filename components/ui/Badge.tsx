
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'yellow' | 'red' | 'blue' | 'gray';
  className?: string;
  // Added style property to fix type error in Home.tsx
  style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'gray', className = '', style }) => {
  const variants = {
    green: 'bg-accent-primary/20 text-accent-primary border-accent-primary/30',
    yellow: 'bg-accent-secondary/20 text-accent-secondary border-accent-secondary/30',
    red: 'bg-accent-live/20 text-accent-live border-accent-live/30',
    blue: 'bg-accent-blue/20 text-accent-blue border-accent-blue/30',
    gray: 'bg-white/10 text-white/70 border-white/20',
  };

  return (
    <span 
      className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded border backdrop-blur-sm ${variants[variant]} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
};