
import { Theme } from '../types/theme';

export const neonTheme: Theme = {
  id: 'neon',
  name: 'Neon Nights',
  description: 'Tema cyberpunk com neons vibrantes',
  author: 'StreamTV Brasil',
  isDefault: false,
  isCustom: false,
  
  colors: {
    bgPrimary: '#0d0221',
    bgSecondary: '#1a0b3f',
    bgCard: '#240b58',
    bgOverlay: 'rgba(13, 2, 33, 0.9)',
    
    textPrimary: '#e4f1ff',
    textSecondary: '#a599e9',
    textTertiary: '#6c63ac',
    
    accentPrimary: '#ff00ff',
    accentSecondary: '#00ffff',
    accentLive: '#ff0080',
    accentBlue: '#00d4ff',
    accentGreen: '#39ff14',
    accentRed: '#ff006e',
    accentYellow: '#ffea00',
    
    borderLight: 'rgba(255, 0, 255, 0.2)',
    borderMedium: 'rgba(255, 0, 255, 0.4)',
    borderHeavy: 'rgba(255, 0, 255, 0.6)',
    
    gradientStart: '#ff00ff',
    gradientEnd: '#00ffff',
    
    success: '#39ff14',
    warning: '#ffea00',
    error: '#ff006e',
    info: '#00d4ff'
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
      '3xl': '2rem',
      '4xl': '2.5rem',
      display: 'clamp(2.5rem, 6vw, 4rem)'
    },
    fontWeight: {
      normal: 300,
      medium: 400,
      semibold: 600,
      bold: 700,
      extrabold: 900
    },
    lineHeight: {
      tight: 1.1,
      normal: 1.4,
      relaxed: 1.6
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
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.25rem',
    '3xl': '1.5rem',
    full: '9999px'
  },
  
  shadows: {
    sm: '0 0 10px rgba(255, 0, 255, 0.3)',
    md: '0 0 20px rgba(255, 0, 255, 0.4)',
    lg: '0 0 30px rgba(255, 0, 255, 0.5)',
    xl: '0 0 40px rgba(255, 0, 255, 0.6)',
    '2xl': '0 0 60px rgba(255, 0, 255, 0.7)',
    inner: 'inset 0 0 10px rgba(255, 0, 255, 0.2)'
  },
  
  animations: {
    duration: {
      fast: '200ms',
      normal: '400ms',
      slow: '600ms'
    },
    easing: {
      default: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      in: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
      out: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      inOut: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  },
  
  effects: {
    blur: '12px',
    glassmorphism: true,
    glowOnHover: true,
    particleBackground: true,
    smoothScrolling: true
  }
};
