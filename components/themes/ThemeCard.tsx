
import React from 'react';
import { Theme } from '../../types/theme';
import { Check, Edit2, Copy, Download, Trash2 } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

interface ThemeCardProps {
  theme: Theme;
  isActive: boolean;
  onSelect: () => void;
  onEdit: () => void;
  canDelete?: boolean;
}

export const ThemeCard: React.FC<ThemeCardProps> = ({
  theme,
  isActive,
  onSelect,
  onEdit,
  canDelete = false
}) => {
  const { duplicateTheme, deleteCustomTheme, exportTheme } = useThemeStore();
  
  const handleDuplicate = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newName = prompt('Nome do novo tema:', `${theme.name} (Cópia)`);
    if (newName) {
      duplicateTheme(theme.id, newName);
    }
  };
  
  const handleExport = (e: React.MouseEvent) => {
    e.stopPropagation();
    const json = exportTheme(theme.id);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${theme.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm(`Deseja realmente excluir o tema "${theme.name}"?`)) {
      deleteCustomTheme(theme.id);
    }
  };
  
  return (
    <div
      onClick={onSelect}
      className={`relative bg-bg-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
        isActive
          ? 'border-accent-primary shadow-lg shadow-accent-primary/20 scale-105'
          : 'border-white/5 hover:border-white/20 hover:scale-[1.02]'
      }`}
    >
      {/* Preview Visual */}
      <div
        className="h-40 p-6 flex flex-col items-center justify-center gap-4 transition-all"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.bgPrimary}, ${theme.colors.bgSecondary})`,
        }}
      >
        <div
          className="text-2xl font-bold text-center"
          style={{ 
            color: theme.colors.textPrimary,
            fontFamily: theme.typography.fontFamily.title 
          }}
        >
          {theme.name}
        </div>
        
        <div className="flex gap-3">
          {[theme.colors.accentPrimary, theme.colors.accentSecondary, theme.colors.accentBlue].map((color, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-xl shadow-lg border border-white/10"
              style={{ background: color }}
            />
          ))}
        </div>
      </div>
      
      {/* Info Section */}
      <div className="p-5 bg-bg-secondary/50 backdrop-blur-md">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg truncate">{theme.name}</h3>
            <p className="text-xs text-text-secondary mt-1 line-clamp-1">{theme.description || 'Nenhuma descrição disponível'}</p>
          </div>
          
          {isActive && (
            <div className="bg-accent-primary text-bg-primary p-2 rounded-full shadow-lg">
              <Check size={16} strokeWidth={3} />
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-[10px] text-text-tertiary uppercase font-black tracking-widest">Por {theme.author || 'Anônimo'}</p>
          <div className="flex gap-1">
            {theme.effects.glassmorphism && <div className="w-2 h-2 rounded-full bg-accent-blue" title="Glassmorphism" />}
            {theme.effects.glowOnHover && <div className="w-2 h-2 rounded-full bg-accent-primary" title="Glow on Hover" />}
            {theme.effects.particleBackground && <div className="w-2 h-2 rounded-full bg-accent-yellow" title="Particles" />}
          </div>
        </div>
        
        {/* Actions Row */}
        <div className="grid grid-cols-4 gap-2 mt-5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            className="col-span-1 bg-bg-card hover:bg-bg-primary p-2.5 rounded-xl transition-all flex items-center justify-center group"
            title="Editar"
          >
            <Edit2 size={16} className="text-text-secondary group-hover:text-accent-primary" />
          </button>
          
          <button
            onClick={handleDuplicate}
            className="bg-bg-card hover:bg-bg-primary p-2.5 rounded-xl transition-all flex items-center justify-center group"
            title="Duplicar"
          >
            <Copy size={16} className="text-text-secondary group-hover:text-accent-secondary" />
          </button>
          
          <button
            onClick={handleExport}
            className="bg-bg-card hover:bg-bg-primary p-2.5 rounded-xl transition-all flex items-center justify-center group"
            title="Exportar JSON"
          >
            <Download size={16} className="text-text-secondary group-hover:text-accent-blue" />
          </button>
          
          {canDelete ? (
            <button
              onClick={handleDelete}
              className="bg-red-500/10 hover:bg-red-500/20 p-2.5 rounded-xl transition-all flex items-center justify-center group"
              title="Excluir"
            >
              <Trash2 size={16} className="text-red-500" />
            </button>
          ) : (
             <div className="bg-white/5 rounded-xl flex items-center justify-center">
                <Check size={14} className="text-white/20" />
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
