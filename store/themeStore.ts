
import { create } from 'zustand';
import { Theme } from '../types/theme';
import { ThemeManager } from '../utils/themeManager';
import { defaultTheme, neonTheme, lightTheme, oceanTheme } from '../themes';

interface ThemeState {
  themes: Theme[];
  currentTheme: Theme;
  customThemes: Theme[];
  
  // Actions
  setTheme: (themeId: string) => void;
  addCustomTheme: (theme: Theme) => void;
  updateCustomTheme: (themeId: string, updates: Partial<Theme>) => void;
  deleteCustomTheme: (themeId: string) => void;
  duplicateTheme: (themeId: string, newName: string) => void;
  exportTheme: (themeId: string) => string;
  importTheme: (themeJson: string) => void;
  resetToDefault: () => void;
}

const PREDEFINED_THEMES: Theme[] = [
  defaultTheme,
  neonTheme,
  lightTheme,
  oceanTheme
];

export const useThemeStore = create<ThemeState>((set, get) => {
  // Carregar temas personalizados do localStorage
  const savedCustomThemes = JSON.parse(
    localStorage.getItem('streamtv_custom_themes') || '[]'
  );
  
  // Carregar tema atual
  const savedThemeId = localStorage.getItem('streamtv_current_theme') || 'default';
  const allThemes = [...PREDEFINED_THEMES, ...savedCustomThemes];
  const initialTheme = allThemes.find(t => t.id === savedThemeId) || defaultTheme;
  
  // Aplicar tema inicial logo no carregamento
  ThemeManager.getInstance().applyTheme(initialTheme);
  
  return {
    themes: PREDEFINED_THEMES,
    currentTheme: initialTheme,
    customThemes: savedCustomThemes,
    
    setTheme: (themeId) => {
      const state = get();
      const allThemes = [...state.themes, ...state.customThemes];
      const theme = allThemes.find(t => t.id === themeId);
      
      if (theme) {
        ThemeManager.getInstance().applyTheme(theme);
        set({ currentTheme: theme });
      }
    },
    
    addCustomTheme: (theme) => {
      const state = get();
      const newTheme = { ...theme, isCustom: true };
      const newCustomThemes = [...state.customThemes, newTheme];
      
      localStorage.setItem('streamtv_custom_themes', JSON.stringify(newCustomThemes));
      set({ customThemes: newCustomThemes });
    },
    
    updateCustomTheme: (themeId, updates) => {
      const state = get();
      const newCustomThemes = state.customThemes.map(theme =>
        theme.id === themeId ? { ...theme, ...updates } : theme
      );
      
      localStorage.setItem('streamtv_custom_themes', JSON.stringify(newCustomThemes));
      set({ customThemes: newCustomThemes });
      
      if (state.currentTheme.id === themeId) {
        const updatedTheme = newCustomThemes.find(t => t.id === themeId);
        if (updatedTheme) {
          ThemeManager.getInstance().applyTheme(updatedTheme);
          set({ currentTheme: updatedTheme });
        }
      }
    },
    
    deleteCustomTheme: (themeId) => {
      const state = get();
      const newCustomThemes = state.customThemes.filter(t => t.id !== themeId);
      
      localStorage.setItem('streamtv_custom_themes', JSON.stringify(newCustomThemes));
      set({ customThemes: newCustomThemes });
      
      if (state.currentTheme.id === themeId) {
        get().setTheme('default');
      }
    },
    
    duplicateTheme: (themeId, newName) => {
      const state = get();
      const allThemes = [...state.themes, ...state.customThemes];
      const sourcetheme = allThemes.find(t => t.id === themeId);
      
      if (sourcetheme) {
        const newTheme: Theme = {
          ...sourcetheme,
          id: `custom_${Date.now()}`,
          name: newName,
          isCustom: true,
          isDefault: false
        };
        
        get().addCustomTheme(newTheme);
      }
    },
    
    exportTheme: (themeId) => {
      const state = get();
      const allThemes = [...state.themes, ...state.customThemes];
      const theme = allThemes.find(t => t.id === themeId);
      
      if (theme) {
        return ThemeManager.getInstance().exportTheme(theme);
      }
      return '';
    },
    
    importTheme: (themeJson) => {
      try {
        const theme = ThemeManager.getInstance().importTheme(themeJson);
        theme.id = `imported_${Date.now()}`;
        theme.isCustom = true;
        get().addCustomTheme(theme);
      } catch (error) {
        console.error('Erro ao importar tema:', error);
        throw new Error('Formato de tema inválido');
      }
    },
    
    resetToDefault: () => {
      set({ customThemes: [] });
      localStorage.removeItem('streamtv_custom_themes');
      get().setTheme('default');
    }
  };
});
