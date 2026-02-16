
import { Theme } from '../types/theme';

export const defaultTheme: Theme = {
  id: 'default',
  name: 'StreamTV Clássico',
  description: 'Tema padrão escuro com acentos verdes',
  author: 'StreamTV Brasil',
  isDefault: true,
  isCustom: false,
  
  colors: {
    bgPrimary: '#080b0e',
    bgSecondary: '#0f1318',
    bgCard: '#141a20',
    bgOverlay: 'rgba(8, 11, 14, 0.8)',
    
    textPrimary: '#e8edf2',
    textSecondary: '#8a9ab0',
    textTertiary: '#4a5568',
    
    accentPrimary: '#00b37e',
    accentSecondary: '#f0a500',
    accentLive: '#ff3b3b',
    accentBlue: '#1351b4',
    accentGreen: '#00b37e',
    accentRed: '#ff3b3b',
    accentYellow: '#f0a500',
    
    borderLight: 'rgba(255, 255, 255, 0.05)',
    borderMedium: 'rgba(255, 255, 255, 0.1)',
    borderHeavy: 'rgba(255, 255, 255, 0.2)',
    
    gradientStart: '#00b37e',
    gradientEnd: '#009c3b',
    
    success: '#00b37e',
    warning: '#f0a500',
    error: '#ff3b3b',
    info: '#1351b4'
  },
  
  typography: {
    fontFamily: {
      title: "'Syne', 'Plus Jakarta Sans', sans-serif",
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
      display: 'clamp(2.25rem, 5vw + 1rem, 5.5rem)'
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    lineHeight: {
      tight: 1.15,
      normal: 1.6,
      relaxed: 1.8
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
    blur: '10px',
    glassmorphism: true,
    glowOnHover: true,
    particleBackground: false,
    smoothScrolling: true
  }
};
