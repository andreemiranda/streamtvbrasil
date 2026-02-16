
import { Theme } from '../types/theme';

export const oceanTheme: Theme = {
  id: 'ocean',
  name: 'Ocean Breeze',
  description: 'Tema inspirado no oceano',
  author: 'StreamTV Brasil',
  isDefault: false,
  isCustom: false,
  
  colors: {
    bgPrimary: '#0a1929',
    bgSecondary: '#0d2841',
    bgCard: '#173854',
    bgOverlay: 'rgba(10, 25, 41, 0.9)',
    
    textPrimary: '#e0f2fe',
    textSecondary: '#7dd3fc',
    textTertiary: '#38bdf8',
    
    accentPrimary: '#06b6d4',
    accentSecondary: '#0891b2',
    accentLive: '#f43f5e',
    accentBlue: '#0ea5e9',
    accentGreen: '#10b981',
    accentRed: '#f43f5e',
    accentYellow: '#fbbf24',
    
    borderLight: 'rgba(6, 182, 212, 0.1)',
    borderMedium: 'rgba(6, 182, 212, 0.2)',
    borderHeavy: 'rgba(6, 182, 212, 0.4)',
    
    gradientStart: '#06b6d4',
    gradientEnd: '#3b82f6',
    
    success: '#10b981',
    warning: '#fbbf24',
    error: '#f43f5e',
    info: '#0ea5e9'
  },
  
  typography: {
    fontFamily: {
      title: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif",
      mono: "'Fira Code', monospace"
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      display: 'clamp(2rem, 5vw, 3.5rem)'
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75
    }
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem'
  },
  
  borderRadius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.5rem',
    full: '9999px'
  },
  
  shadows: {
    sm: '0 2px 4px 0 rgba(6, 182, 212, 0.1)',
    md: '0 4px 8px 0 rgba(6, 182, 212, 0.15)',
    lg: '0 8px 16px 0 rgba(6, 182, 212, 0.2)',
    xl: '0 12px 24px 0 rgba(6, 182, 212, 0.25)',
    '2xl': '0 16px 32px 0 rgba(6, 182, 212, 0.3)',
    inner: 'inset 0 2px 4px 0 rgba(6, 182, 212, 0.1)'
  },
  
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },
  
  effects: {
    blur: '10px',
    glassmorphism: true,
    glowOnHover: true,
    particleBackground: false,
    smoothScrolling: true
  }
};
