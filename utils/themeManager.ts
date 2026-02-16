
import { Theme } from '../types/theme';

export class ThemeManager {
  private static instance: ThemeManager;
  private currentTheme: Theme | null = null;
  
  static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }
  
  applyTheme(theme: Theme): void {
    this.currentTheme = theme;
    const root = document.documentElement;
    
    // Aplicar cores
    Object.entries(theme.colors).forEach(([key, value]) => {
      const cssVar = this.convertToCssVar(key);
      root.style.setProperty(cssVar, value);
    });
    
    // Aplicar tipografia
    Object.entries(theme.typography.fontFamily).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value);
    });
    
    Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
      root.style.setProperty(`--text-${key}`, value);
    });
    
    Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
      root.style.setProperty(`--font-weight-${key}`, value.toString());
    });
    
    Object.entries(theme.typography.lineHeight).forEach(([key, value]) => {
      root.style.setProperty(`--line-height-${key}`, value.toString());
    });
    
    // Aplicar espaçamentos
    Object.entries(theme.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });
    
    // Aplicar border radius
    Object.entries(theme.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--radius-${key}`, value);
    });
    
    // Aplicar sombras
    Object.entries(theme.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });
    
    // Aplicar animações
    Object.entries(theme.animations.duration).forEach(([key, value]) => {
      root.style.setProperty(`--duration-${key}`, value);
    });
    
    Object.entries(theme.animations.easing).forEach(([key, value]) => {
      root.style.setProperty(`--easing-${key}`, value);
    });
    
    // Aplicar efeitos
    root.style.setProperty('--blur', theme.effects.blur);
    root.classList.toggle('glassmorphism', theme.effects.glassmorphism);
    root.classList.toggle('glow-on-hover', theme.effects.glowOnHover);
    root.classList.toggle('particle-bg', theme.effects.particleBackground);
    root.classList.toggle('smooth-scroll', theme.effects.smoothScrolling);
    
    // Salvar no localStorage
    localStorage.setItem('streamtv_current_theme', theme.id);
  }
  
  private convertToCssVar(key: string): string {
    // Converte camelCase para kebab-case
    const kebabCase = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    return `--${kebabCase}`;
  }
  
  getCurrentTheme(): Theme | null {
    return this.currentTheme;
  }
  
  exportTheme(theme: Theme): string {
    return JSON.stringify(theme, null, 2);
  }
  
  importTheme(themeJson: string): Theme {
    return JSON.parse(themeJson);
  }
}
