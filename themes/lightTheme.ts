import { Theme } from '../types/theme';

export const lightTheme: Theme = {
  id: 'light',
  name: 'Clean & Light',
  description: 'Tema claro e minimalista',
  author: 'StreamTV Brasil',
  isDefault: false,
  isCustom: false,
  
  colors: {
    bgPrimary: '#ffffff',
    bgSecondary: '#f8f9fa',
    bgCard: '#f1f3f5',
    bgOverlay: 'rgba(255, 255, 255, 0.95)',
    
    textPrimary: '#212529',
    textSecondary: '#495057',
    textTertiary: '#868e96',
    
    accentPrimary: '#2563eb',
    accentSecondary: '#1e40af',
    accentLive: '#dc2626',
    accentBlue: '#3b82f6',
    accentGreen: '#16a34a',
    accentRed: '#dc2626',
    accentYellow: '#ca8a04',
    
    borderLight: '#e9ecef',
    borderMedium: '#dee2e6',
    borderHeavy: '#adb5bd',
    
    gradientStart: '#2563eb',
    gradientEnd: '#7c3aed',
    
    success: '#16a34a',
    warning: '#ca8a04',
    error: '#dc2626',
    info: '#3b82f6'
  },
  
  typography: {
    fontFamily: {
      title: "'Inter', sans-serif",
      body: "'Inter', sans-serif",
      mono: "'JetBrains Mono', monospace"
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
      display: 'clamp(2.5rem, 6vw, 4.5rem)'
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    lineHeight: {
      tight: 1.25,
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
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px'
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
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
    blur: '8px',
    glassmorphism: false,
    glowOnHover: false,
    particleBackground: false,
    smoothScrolling: true
  }
};