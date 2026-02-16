
import { create } from 'zustand';
import { Channel, AppImages } from '../types';
import { parseM3U } from '../utils/m3uParser';
import { SAMPLE_M3U } from '../constants';
import { fetchYouTubeData } from '../utils/youtube';

interface AppState {
  channels: Channel[];
  youtubeChannels: Channel[];
  manualChannels: Channel[];
  playlistUrl: string;
  favorites: string[];
  history: { channelId: string; timestamp: number }[];
  isLoading: boolean;
  error: string | null;
  appImages: AppImages;
  
  setChannels: (channels: Channel[]) => void;
  addChannelsBatch: (newChannels: Channel[]) => { added: number, skipped: number, duplicates: number };
  addManualChannel: (channel: Channel) => void;
  deleteOldestChannels: (count: number) => void;
  clearM3UChannels: () => void;
  setPlaylistUrl: (url: string) => void;
  loadPlaylist: (url?: string) => Promise<void>;
  refreshYouTubeFeeds: () => Promise<void>;
  toggleFavorite: (channelId: string) => void;
  addToHistory: (channelId: string) => void;
  setLoading: (loading: boolean) => void;
  searchGlobal: (query: string) => Promise<Channel[]>;
  setAppImage: (key: keyof AppImages | string, url: string) => void;
}

export const useStore = create<AppState>((set, get) => ({
  channels: JSON.parse(localStorage.getItem('streamtv_channels_m3u') || '[]'),
  youtubeChannels: [],
  manualChannels: JSON.parse(localStorage.getItem('streamtv_manual_channels') || '[]'),
  playlistUrl: localStorage.getItem('streamtv_playlist_url') || '',
  favorites: JSON.parse(localStorage.getItem('streamtv_favorites') || '[]'),
  history: JSON.parse(localStorage.getItem('streamtv_history') || '[]'),
  appImages: JSON.parse(localStorage.getItem('streamtv_app_images') || '{}'),
  isLoading: false,
  error: null,

  setChannels: (channels) => {
    localStorage.setItem('streamtv_channels_m3u', JSON.stringify(channels));
    set({ channels, isLoading: false, error: null });
  },

  addChannelsBatch: (newChannels) => {
    const state = get();
    const existingChannels = state.channels;
    
    const existingNames = new Set(existingChannels.map(c => c.name.toLowerCase().trim()));
    const existingUrls = new Set(existingChannels.map(c => c.url.toLowerCase().trim()));
    
    let addedCount = 0;
    let duplicateCount = 0;
    let skippedByLimit = 0;
    const toAdd: Channel[] = [];

    for (const channel of newChannels) {
      if (!channel.name || !channel.url || channel.name === 'Canal Sem Nome') {
        continue;
      }

      const nameKey = channel.name.toLowerCase().trim();
      const urlKey = channel.url.toLowerCase().trim();

      if (existingNames.has(nameKey) || existingUrls.has(urlKey)) {
        duplicateCount++;
        continue;
      }

      if (addedCount >= 500) {
        skippedByLimit++;
        continue;
      }

      toAdd.push(channel);
      addedCount++;
      existingNames.add(nameKey);
      existingUrls.add(urlKey);
    }
    
    const finalChannels = [...existingChannels, ...toAdd];
    localStorage.setItem('streamtv_channels_m3u', JSON.stringify(finalChannels));
    
    set({ channels: finalChannels, isLoading: false });
    
    return {
      added: addedCount,
      duplicates: duplicateCount,
      skipped: skippedByLimit
    };
  },

  addManualChannel: (channel) => {
    const state = get();
    const newManual = [channel, ...state.manualChannels];
    localStorage.setItem('streamtv_manual_channels', JSON.stringify(newManual));
    set({ manualChannels: newManual });
  },

  deleteOldestChannels: (count) => {
    const state = get();
    const m3uChannels = state.channels.filter(c => c.source === 'm3u');
    const nonM3uChannels = state.channels.filter(c => c.source !== 'm3u');
    
    const remainingM3u = m3uChannels.slice(count);
    const finalChannels = [...nonM3uChannels, ...remainingM3u];
    
    localStorage.setItem('streamtv_channels_m3u', JSON.stringify(finalChannels));
    set({ channels: finalChannels });
  },

  clearM3UChannels: () => {
    const state = get();
    const filtered = state.channels.filter(c => c.source !== 'm3u');
    localStorage.setItem('streamtv_channels_m3u', JSON.stringify(filtered));
    set({ channels: filtered });
  },
  
  setPlaylistUrl: (url) => {
    localStorage.setItem('streamtv_playlist_url', url);
    set({ playlistUrl: url });
  },

  loadPlaylist: async (url) => {
    const state = get();
    const targetUrl = url || state.playlistUrl;
    
    if (!targetUrl) {
      if (state.channels.length === 0) {
        const initialChannels = parseM3U(SAMPLE_M3U);
        state.addChannelsBatch(initialChannels);
      }
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const response = await fetch(targetUrl);
      if (!response.ok) throw new Error('Falha ao conectar com o servidor da lista.');
      const m3uContent = await response.text();
      
      const m3uChannels = parseM3U(m3uContent);
      state.addChannelsBatch(m3uChannels);
      
      await state.refreshYouTubeFeeds();
    } catch (err: any) {
      set({ 
        error: err.message || 'Erro ao processar playlist remota.', 
        isLoading: false
      });
    }
  },

  refreshYouTubeFeeds: async () => {
    set({ isLoading: true });
    try {
      const queries = [
        fetchYouTubeData('TV Câmara Pedro Afonso ao vivo', 'video', true),
        fetchYouTubeData('sertanejo raiz vaquejada forró ao vivo', 'video', true),
        fetchYouTubeData('filmes completos dublados 2025', 'video'),
        fetchYouTubeData('as melhores do sertanejo 2025', 'playlist')
      ];
      
      const results = await Promise.all(queries);
      const allYt = results.flat();
      
      set({ youtubeChannels: allYt, isLoading: false });
    } catch (err) {
      console.error('Error refreshing YouTube feeds', err);
      set({ isLoading: false });
    }
  },

  searchGlobal: async (query: string) => {
    const m3uResults = get().channels.filter(c => 
      c.name.toLowerCase().includes(query.toLowerCase())
    );
    const manualResults = get().manualChannels.filter(c =>
      c.name.toLowerCase().includes(query.toLowerCase())
    );
    
    if (query.length > 2) {
      const ytResults = await fetchYouTubeData(query);
      return [...manualResults, ...m3uResults, ...ytResults];
    }
    
    return [...manualResults, ...m3uResults];
  },

  toggleFavorite: (channelId) => set((state) => {
    const isFav = state.favorites.includes(channelId);
    const newFavs = isFav 
      ? state.favorites.filter(id => id !== channelId) 
      : [...state.favorites, channelId];
    localStorage.setItem('streamtv_favorites', JSON.stringify(newFavs));
    return { favorites: newFavs };
  }),

  addToHistory: (channelId) => set((state) => {
    const filtered = state.history.filter(h => h.channelId !== channelId);
    const newHistory = [{ channelId, timestamp: Date.now() }, ...filtered].slice(0, 50);
    localStorage.setItem('streamtv_history', JSON.stringify(newHistory));
    return { history: newHistory };
  }),

  setLoading: (isLoading) => set({ isLoading }),

  setAppImage: (key, url) => set((state) => {
    let newImages = { ...state.appImages };
    if (key.includes('.')) {
      // Para categoryIcons
      const [parent, child] = key.split('.');
      if (parent === 'categoryIcons') {
        newImages.categoryIcons = {
          ...(newImages.categoryIcons || {}),
          [child]: url
        };
      }
    } else {
      (newImages as any)[key] = url;
    }
    localStorage.setItem('streamtv_app_images', JSON.stringify(newImages));
    return { appImages: newImages };
  }),
}));
