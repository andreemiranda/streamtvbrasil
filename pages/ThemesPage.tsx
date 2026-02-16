
import React, { useState } from 'react';
import { useThemeStore } from '../store/themeStore';
import { ThemeCard } from '../components/themes/ThemeCard';
import { ThemeEditor } from '../components/themes/ThemeEditor';
import { Plus, Download, Upload, Palette, RefreshCw, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../types/theme';

export const ThemesPage: React.FC = () => {
  const navigate = useNavigate();
  const { themes, customThemes, currentTheme, setTheme, addCustomTheme, updateCustomTheme, importTheme, resetToDefault } = useThemeStore();
  const [showEditor, setShowEditor] = useState(false);
  const [editingTheme, setEditingTheme] = useState<Theme | null>(null);
  
  const handleImport = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const text = await file.text();
        try {
          importTheme(text);
        } catch (error) {
          alert('Erro ao importar tema. Verifique o formato do arquivo.');
        }
      }
    };
    
    input.click();
  };
  
  const handleCreateNew = () => {
    const newTheme: Theme = {
      ...currentTheme,
      id: `custom_${Date.now()}`,
      name: 'Meu Novo Tema',
      isCustom: true,
      isDefault: false,
      author: 'Você'
    };
    setEditingTheme(newTheme);
    setShowEditor(true);
  };

  const handleReset = () => {
    if (confirm('Deseja realmente apagar todos os seus temas personalizados e voltar ao padrão?')) {
      resetToDefault();
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 pb-32 animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors text-xs font-bold uppercase tracking-widest mb-4"
          >
            <ArrowLeft size={14} /> Voltar para Configurações
          </button>
          <h1 className="text-5xl font-title font-black mb-2 flex items-center gap-4">
            <Palette size={48} className="text-accent-primary" /> 
            Estilos & Temas
          </h1>
          <p className="text-text-secondary text-lg font-medium">
            Transforme completamente o visual do seu StreamTV Brasil.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleCreateNew}
            className="bg-accent-primary text-bg-primary px-6 py-3.5 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl shadow-accent-primary/20"
          >
            <Plus size={20} strokeWidth={3} /> CRIAR NOVO
          </button>
          <button
            onClick={handleImport}
            className="bg-bg-card text-text-primary px-6 py-3.5 rounded-2xl font-bold hover:bg-bg-secondary transition-all flex items-center gap-2 border border-white/10"
          >
            <Upload size={20} /> IMPORTAR
          </button>
          <button
            onClick={handleReset}
            className="bg-red-500/10 text-red-500 p-3.5 rounded-2xl hover:bg-red-500/20 transition-all border border-red-500/20"
            title="Resetar tudo"
          >
            <RefreshCw size={20} />
          </button>
        </div>
      </div>
      
      {/* Official Themes */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <h2 className="text-xl font-black uppercase tracking-widest text-text-tertiary">Temas Oficiais</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map(theme => (
            <ThemeCard
              key={theme.id}
              theme={theme}
              isActive={currentTheme.id === theme.id}
              onSelect={() => setTheme(theme.id)}
              onEdit={() => {
                setEditingTheme(theme);
                setShowEditor(true);
              }}
            />
          ))}
        </div>
      </section>
      
      {/* Custom Themes */}
      {customThemes.length > 0 && (
        <section className="animate-in slide-in-from-bottom-8 duration-700">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent-primary/20" />
            <h2 className="text-xl font-black uppercase tracking-widest text-accent-primary">Meus Temas</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent-primary/20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {customThemes.map(theme => (
              <ThemeCard
                key={theme.id}
                theme={theme}
                isActive={currentTheme.id === theme.id}
                onSelect={() => setTheme(theme.id)}
                onEdit={() => {
                  setEditingTheme(theme);
                  setShowEditor(true);
                }}
                canDelete={true}
              />
            ))}
          </div>
        </section>
      )}
      
      {/* Theme Editor Modal */}
      {showEditor && editingTheme && (
        <ThemeEditor
          theme={editingTheme}
          onClose={() => {
            setShowEditor(false);
            setEditingTheme(null);
          }}
          onSave={(updatedTheme) => {
            if (updatedTheme.isCustom) {
              if (customThemes.find(t => t.id === updatedTheme.id)) {
                updateCustomTheme(updatedTheme.id, updatedTheme);
              } else {
                addCustomTheme(updatedTheme);
              }
            } else {
              // Permitir duplicar oficiais ao tentar salvar
              const newCustom = { 
                ...updatedTheme, 
                id: `copy_${Date.now()}`, 
                isCustom: true, 
                isDefault: false,
                name: `${updatedTheme.name} (Editado)`
              };
              addCustomTheme(newCustom);
              setTheme(newCustom.id);
            }
            setShowEditor(false);
            setEditingTheme(null);
          }}
        />
      )}

      {/* Info Card */}
      <div className="mt-20 p-8 bg-gradient-to-br from-bg-card to-bg-secondary rounded-[32px] border border-white/5 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
         <div className="w-20 h-20 bg-accent-primary/20 rounded-3xl flex items-center justify-center text-accent-primary">
            <Palette size={40} />
         </div>
         <div className="flex-1 text-center md:text-left">
            <h4 className="text-xl font-bold mb-2">Comunidade de Estilos</h4>
            <p className="text-text-secondary leading-relaxed">
              Você pode exportar seus temas como arquivos JSON e compartilhá-los com outros usuários do StreamTV. Toda a configuração de cores, tipografia e efeitos será preservada.
            </p>
         </div>
      </div>
    </div>
  );
};
