
import React, { useState, useMemo, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { ChannelCard } from '../components/channel/ChannelCard';
import { Search as SearchIcon, X, Youtube } from 'lucide-react';
import { Channel } from '../types';

export const SearchPage: React.FC = () => {
  const { searchGlobal } = useStore();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Channel[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length >= 2) {
        setIsSearching(true);
        const data = await searchGlobal(query);
        setResults(data);
        setIsSearching(false);
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query, searchGlobal]);

  const m3uResults = results.filter(r => r.source === 'm3u');
  const ytResults = results.filter(r => r.source === 'youtube');

  return (
    <div className="px-4 md:px-8 py-8 animate-in fade-in zoom-in-95">
      <div className="relative max-w-2xl mx-auto mb-10">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
        <input 
          type="text"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busque canais, filmes ou shows (M3U + YouTube)..."
          className="w-full bg-bg-card border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary transition-all text-lg"
        />
        {isSearching && <div className="absolute right-12 top-1/2 -translate-y-1/2 animate-spin text-accent-primary">⏳</div>}
        {query && (
          <button onClick={() => setQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">
            <X size={20} />
          </button>
        )}
      </div>

      <div className="space-y-10">
        {m3uResults.length > 0 && (
          <section>
            <h2 className="text-xl font-bold font-title mb-6 flex items-center gap-2">
              📺 Canais da Lista ({m3uResults.length})
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {m3uResults.map(c => <ChannelCard key={c.id} channel={c} />)}
            </div>
          </section>
        )}

        {ytResults.length > 0 && (
          <section>
            <h2 className="text-xl font-bold font-title mb-6 flex items-center gap-2 text-white">
              <Youtube className="text-[#FF0000]" /> Resultados YouTube ({ytResults.length})
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {ytResults.map(c => <ChannelCard key={c.id} channel={c} />)}
            </div>
          </section>
        )}

        {query.length >= 2 && results.length === 0 && !isSearching && (
          <div className="text-center py-20 text-text-secondary">
            Nenhum resultado encontrado para "{query}"
          </div>
        )}
      </div>
    </div>
  );
};
