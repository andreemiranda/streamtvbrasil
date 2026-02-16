
import React, { useState } from 'react';
import { Theme } from '../../types/theme';
import { X, Save, Palette, Type, Layout, Activity, Sparkles, ChevronDown, ChevronRight } from 'lucide-react';

interface ThemeEditorProps {
  theme: Theme;
  onClose: () => void;
  onSave: (theme: Theme) => void;
}

export const ThemeEditor: React.FC<ThemeEditorProps> = ({ theme, onClose, onSave }) => {
  const [editedTheme, setEditedTheme] = useState<Theme>({ ...theme });
  const [activeSection, setActiveSection] = useState<string>('colors');

  const updateColor = (key: keyof Theme['colors'], value: string) => {
    setEditedTheme(prev => ({
      ...prev,
      colors: { ...prev.colors, [key]: value }
    }));
  };

  const updateEffect = (key: keyof Theme['effects'], value: any) => {
    setEditedTheme(prev => ({
      ...prev,
      effects: { ...prev.effects, [key]: value }
    }));
  };

  const updateTypography = (parent: keyof Theme['typography'], key: string, value: any) => {
    setEditedTheme(prev => ({
      ...prev,
      typography: {
        ...prev.typography,
        [parent]: { ...(prev.typography[parent] as any), [key]: value }
      }
    }));
  };

  const SectionHeader = ({ id, label, icon: Icon }: { id: string, label: string, icon: any }) => (
    <button
      onClick={() => setActiveSection(activeSection === id ? '' : id)}
      className={`w-full flex items-center justify-between p-4 rounded-xl transition-all mb-2 ${activeSection === id ? 'bg-accent-primary text-bg-primary font-bold' : 'bg-bg-secondary text-text-secondary hover:text-white'}`}
    >
      <div className="flex items-center gap-3">
        <Icon size={20} />
        <span>{label}</span>
      </div>
      {activeSection === id ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
    </button>
  );

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-bg-card w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[32px] border border-white/10 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-title font-bold flex items-center gap-3">
              <Palette className="text-accent-primary" size={28} />
              Editor de Tema
            </h2>
            <input 
              className="bg-transparent border-none text-text-secondary focus:text-white outline-none font-bold mt-1"
              value={editedTheme.name}
              onChange={e => setEditedTheme({...editedTheme, name: e.target.value})}
              placeholder="Nome do Tema"
            />
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-text-secondary">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4 no-scrollbar">
          {/* Colors Section */}
          <SectionHeader id="colors" label="Cores do Sistema" icon={Palette} />
          {activeSection === 'colors' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-bg-secondary/30 rounded-2xl mb-6">
              {Object.entries(editedTheme.colors).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-text-tertiary">{key}</label>
                  <div className="flex gap-2">
                    <input 
                      type="color" 
                      value={value as string}
                      onChange={e => updateColor(key as any, e.target.value)}
                      className="w-10 h-10 rounded-lg overflow-hidden bg-transparent cursor-pointer"
                    />
                    <input 
                      type="text"
                      value={value as string}
                      onChange={e => updateColor(key as any, e.target.value)}
                      className="flex-1 bg-bg-secondary border border-white/10 rounded-lg px-3 text-xs font-mono uppercase"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Typography Section */}
          <SectionHeader id="typography" label="Tipografia" icon={Type} />
          {activeSection === 'typography' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-bg-secondary/30 rounded-2xl mb-6">
               <div className="space-y-4">
                  <label className="text-xs font-bold text-accent-primary uppercase">Fontes</label>
                  {Object.entries(editedTheme.typography.fontFamily).map(([key, val]) => (
                    <div key={key}>
                      <span className="text-[10px] text-text-tertiary uppercase block mb-1">{key}</span>
                      <input 
                        className="w-full bg-bg-secondary border border-white/10 rounded-lg p-2 text-xs"
                        value={val}
                        onChange={e => updateTypography('fontFamily', key, e.target.value)}
                      />
                    </div>
                  ))}
               </div>
               <div className="space-y-4">
                  <label className="text-xs font-bold text-accent-primary uppercase">Tamanhos Base</label>
                  {['sm', 'base', 'xl', 'display'].map(key => (
                    <div key={key}>
                      <span className="text-[10px] text-text-tertiary uppercase block mb-1">{key}</span>
                      <input 
                        className="w-full bg-bg-secondary border border-white/10 rounded-lg p-2 text-xs"
                        value={(editedTheme.typography.fontSize as any)[key]}
                        onChange={e => updateTypography('fontSize', key, e.target.value)}
                      />
                    </div>
                  ))}
               </div>
            </div>
          )}

          {/* Effects Section */}
          <SectionHeader id="effects" label="Efeitos Especiais" icon={Sparkles} />
          {activeSection === 'effects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-bg-secondary/30 rounded-2xl mb-6">
               {Object.entries(editedTheme.effects).map(([key, value]) => (
                 <div key={key} className="flex items-center justify-between p-3 bg-bg-secondary rounded-xl">
                    <span className="text-sm font-bold capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    {typeof value === 'boolean' ? (
                      <input 
                        type="checkbox" 
                        checked={value}
                        onChange={e => updateEffect(key as any, e.target.checked)}
                        className="w-5 h-5 rounded border-white/10 bg-bg-card text-accent-primary"
                      />
                    ) : (
                      <input 
                        className="bg-bg-card border border-white/10 rounded px-2 py-1 text-xs w-20 text-center"
                        value={value as string}
                        onChange={e => updateEffect(key as any, e.target.value)}
                      />
                    )}
                 </div>
               ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-white/5 flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-4 bg-bg-card border border-white/5 rounded-2xl font-bold text-text-secondary hover:bg-white/5 transition-all"
          >
            Descartar
          </button>
          <button 
            onClick={() => onSave(editedTheme)}
            className="flex-[2] py-4 bg-accent-primary text-bg-primary rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-accent-primary/20 flex items-center justify-center gap-3"
          >
            <Save size={24} /> SALVAR ALTERAÇÕES
          </button>
        </div>
      </div>
    </div>
  );
};
