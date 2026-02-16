
import React, { useState, useMemo } from 'react';
import { IconDefinition, IconCategory } from '../../types/icons';
import { useIconLibrary } from '../../hooks/useIconLibrary';
import { Search, Grid, List } from 'lucide-react';

interface IconPickerProps {
  selectedIconId?: string;
  onSelect: (icon: IconDefinition) => void;
  category?: IconCategory;
  size?: 'sm' | 'md' | 'lg';
}

export const IconPicker: React.FC<IconPickerProps> = ({
  selectedIconId,
  onSelect,
  category,
  size = 'md'
}) => {
  const { icons, categories, searchIcons } = useIconLibrary();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<IconCategory | 'all'>(category || 'all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const filteredIcons = useMemo(() => {
    let result = icons;
    
    // Filtrar por categoria
    if (selectedCategory !== 'all') {
      result = result.filter(icon => icon.category === selectedCategory);
    }
    
    // Filtrar por busca
    if (searchQuery) {
      result = searchIcons(searchQuery);
    }
    
    return result;
  }, [icons, selectedCategory, searchQuery, searchIcons]);
  
  const iconSizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  };
  
  return (
    <div className="bg-bg-card rounded-2xl p-6 border border-white/5 flex flex-col h-full max-h-[600px]">
      {/* Header */}
      <div className="mb-6 flex-shrink-0">
        <h3 className="text-xl font-bold mb-4">Biblioteca de Ícones</h3>
        
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por nome ou tag..."
            className="w-full bg-bg-secondary border border-white/10 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-accent-primary transition-all text-sm"
          />
        </div>
        
        {/* Category Filter + View Mode */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 border ${
              selectedCategory === 'all'
                ? 'bg-accent-primary text-bg-primary border-accent-primary'
                : 'bg-bg-secondary text-text-secondary border-white/5 hover:text-white'
            }`}
          >
            Todos ({icons.length})
          </button>
          
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 border ${
                selectedCategory === cat.id
                  ? 'bg-accent-primary text-bg-primary border-accent-primary'
                  : 'bg-bg-secondary text-text-secondary border-white/5 hover:text-white'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
          
          <div className="ml-auto flex gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg border ${
                viewMode === 'grid' ? 'bg-accent-primary text-bg-primary border-accent-primary' : 'bg-bg-secondary text-text-secondary border-white/5'
              }`}
            >
              <Grid size={16} />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg border ${
                viewMode === 'list' ? 'bg-accent-primary text-bg-primary border-accent-primary' : 'bg-bg-secondary text-text-secondary border-white/5'
              }`}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Icons Grid/List */}
      <div className={`
        flex-1 overflow-y-auto pr-2 no-scrollbar
        ${viewMode === 'grid' 
          ? 'grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3' 
          : 'space-y-2'}
      `}>
        {filteredIcons.map(icon => (
          <button
            key={icon.id}
            type="button"
            onClick={() => onSelect(icon)}
            className={`
              ${viewMode === 'grid'
                ? `${iconSizeClasses[size]} flex items-center justify-center`
                : 'flex items-center gap-3 p-3 w-full'}
              rounded-xl transition-all duration-200 border
              ${selectedIconId === icon.id
                ? 'bg-accent-primary/20 border-accent-primary text-accent-primary scale-105 shadow-lg shadow-accent-primary/10'
                : 'bg-bg-secondary border-white/5 text-text-secondary hover:text-white hover:border-white/20 hover:scale-102'
              }
            `}
            title={icon.name}
          >
            {icon.unicode ? (
              <span className={viewMode === 'grid' ? 'text-2xl' : 'text-xl'}>
                {icon.unicode}
              </span>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={viewMode === 'grid' ? 'w-6 h-6' : 'w-5 h-5'}
              >
                <path d={icon.svgPath} />
              </svg>
            )}
            
            {viewMode === 'list' && (
              <div className="flex-1 text-left">
                <p className="text-sm font-bold truncate">{icon.name}</p>
                <p className="text-[10px] uppercase font-black tracking-widest text-text-tertiary">
                  {icon.tags.slice(0, 2).join(', ')}
                </p>
              </div>
            )}
          </button>
        ))}
      </div>
      
      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-text-tertiary flex-shrink-0">
        <span>{filteredIcons.length} RESULTADOS</span>
        {selectedIconId && (
          <button
            type="button"
            onClick={() => onSelect({ id: '', name: '', category: 'symbols', tags: [], svgPath: '' })}
            className="text-accent-primary hover:text-accent-live transition-colors"
          >
            REMOVER SELEÇÃO
          </button>
        )}
      </div>
    </div>
  );
};
