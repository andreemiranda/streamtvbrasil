
export interface Theme {
  id: string;
  name: string;
  description?: string;
  author?: string;
  isDefault: boolean;
  isCustom: boolean;
  preview?: string; // URL da imagem de preview
  
  // CORES
  colors: {
    // Backgrounds
    bgPrimary: string;
    bgSecondary: string;
    bgCard: string;
    bgOverlay: string;
    
    // Text
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    
    // Accents
    accentPrimary: string;
    accentSecondary: string;
    accentLive: string;
    accentBlue: string;
    accentGreen: string;
    accentRed: string;
    accentYellow: string;
    
    // Borders
    borderLight: string;
    borderMedium: string;
    borderHeavy: string;
    
    // Gradients
    gradientStart?: string;
    gradientEnd?: string;
    
    // Status
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  
  // TIPOGRAFIA
  typography: {
    fontFamily: {
      title: string;
      body: string;
      mono: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      display: string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
    };
    lineHeight: {
      tight: number;
      normal: number;
      relaxed: number;
    };
  };
  
  // ESPAÇAMENTOS
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  
  // RAIOS DE BORDA
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    full: string;
  };
  
  // SOMBRAS
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    inner: string;
  };
  
  // ANIMAÇÕES
  animations: {
    duration: {
      fast: string;
      normal: string;
      slow: string;
    };
    easing: {
      default: string;
      in: string;
      out: string;
      inOut: string;
    };
  };
  
  // EFEITOS ESPECIAIS
  effects: {
    blur: string;
    glassmorphism: boolean;
    glowOnHover: boolean;
    particleBackground: boolean;
    smoothScrolling: boolean;
  };
}
