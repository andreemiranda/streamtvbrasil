
import { useState, useEffect, useMemo, useCallback } from 'react';
import { IconDefinition, IconCategory } from '../types/icons';
import { channelIcons } from '../icons/channelIcons';
import { musicIcons } from '../icons/musicIcons';
import { sportsIcons } from '../icons/sportsIcons';
import { movieIcons } from '../icons/movieIcons';
import { newsIcons } from '../icons/newsIcons';

export function useIconLibrary() {
  const [customIcons, setCustomIcons] = useState<IconDefinition[]>([]);
  
  // Carregar ícones personalizados do localStorage
  useEffect(() => {
    const saved = localStorage.getItem('streamtv_custom_icons');
    if (saved) {
      setCustomIcons(JSON.parse(saved));
    }
  }, []);
  
  // Combinar todos os ícones
  const allIcons = useMemo(() => [
    ...channelIcons,
    ...musicIcons,
    ...sportsIcons,
    ...movieIcons,
    ...newsIcons,
    ...customIcons
  ], [customIcons]);
  
  // Categorias com contagem
  const categories = useMemo(() => {
    const cats: Record<string, { id: IconCategory; name: string; description: string; count: number }> = {
      channels: { id: 'channels', name: 'Canais', description: 'Ícones de canais de TV', count: 0 },
      categories: { id: 'categories', name: 'Categorias', description: 'Categorias de conteúdo', count: 0 },
      entertainment: { id: 'entertainment', name: 'Entretenimento', description: 'Entretenimento geral', count: 0 },
      music: { id: 'music', name: 'Música', description: 'Instrumentos e música', count: 0 },
      sports: { id: 'sports', name: 'Esportes', description: 'Esportes e atividades', count: 0 },
      news: { id: 'news', name: 'Notícias', description: 'Jornalismo e notícias', count: 0 },
      movies: { id: 'movies', name: 'Filmes', description: 'Cinema e filmes', count: 0 },
      social: { id: 'social', name: 'Social', description: 'Redes sociais', count: 0 },
      tech: { id: 'tech', name: 'Tecnologia', description: 'Tech e gadgets', count: 0 },
      nature: { id: 'nature', name: 'Natureza', description: 'Natureza e ambiente', count: 0 },
      food: { id: 'food', name: 'Comida', description: 'Comidas e bebidas', count: 0 },
      brands: { id: 'brands', name: 'Marcas', description: 'Logos de marcas', count: 0 },
      symbols: { id: 'symbols', name: 'Símbolos', description: 'Símbolos gerais', count: 0 },
      emojis: { id: 'emojis', name: 'Emojis', description: 'Emojis diversos', count: 0 }
    };
    
    allIcons.forEach(icon => {
      if (cats[icon.category]) {
        cats[icon.category].count++;
      }
    });
    
    return Object.values(cats).filter(cat => cat.count > 0);
  }, [allIcons]);
  
  // Buscar ícones
  const searchIcons = useCallback((query: string): IconDefinition[] => {
    const lowerQuery = query.toLowerCase();
    return allIcons.filter(icon =>
      icon.name.toLowerCase().includes(lowerQuery) ||
      icon.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }, [allIcons]);
  
  // Obter ícone por ID
  const getIconById = (id: string): IconDefinition | undefined => {
    return allIcons.find(icon => icon.id === id);
  };
  
  // Adicionar ícone personalizado
  const addCustomIcon = (icon: IconDefinition) => {
    const newCustomIcons = [...customIcons, icon];
    setCustomIcons(newCustomIcons);
    localStorage.setItem('streamtv_custom_icons', JSON.stringify(newCustomIcons));
  };
  
  // Remover ícone personalizado
  const removeCustomIcon = (id: string) => {
    const newCustomIcons = customIcons.filter(icon => icon.id !== id);
    setCustomIcons(newCustomIcons);
    localStorage.setItem('streamtv_custom_icons', JSON.stringify(newCustomIcons));
  };
  
  return {
    icons: allIcons,
    categories,
    customIcons,
    searchIcons,
    getIconById,
    addCustomIcon,
    removeCustomIcon
  };
}
