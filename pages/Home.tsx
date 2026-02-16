
import React, { useMemo, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { CategorySection } from '../components/home/CategorySection';
import { Badge } from '../components/ui/Badge';
import { Footer } from '../components/layout/Footer';
import { Youtube, Play, Music, Film, Radio, Star, Layout, Tv } from 'lucide-react';

export const Home: React.FC = () => {
  const { 
    channels, 
    youtubeChannels, 
    manualChannels, 
    isLoading, 
    refreshYouTubeFeeds,
    appImages
  } = useStore();

  useEffect(() => {
    refreshYouTubeFeeds();
  }, [refreshYouTubeFeeds]);

  const allChannels = useMemo(() => [...manualChannels, ...channels], [manualChannels, channels]);

  const brazilianChannels = useMemo(() => 
    allChannels.filter(c => c.isBrazilian), 
  [allChannels]);

  const moviesChannels = useMemo(() => 
    allChannels.filter(c => c.groups.includes('Movies') || c.groups.includes('Filmes')),
  [allChannels]);

  const musicChannels = useMemo(() => 
    allChannels.filter(c => c.groups.includes('Music') || c.groups.includes('Música')),
  [allChannels]);

  const ytLiveMusic = useMemo(() => 
    youtubeChannels.filter(c => c.groups.includes('YouTube Live') && !c.name.toLowerCase().includes('camara')),
  [youtubeChannels]);

  const ytMovies = useMemo(() => 
    youtubeChannels.filter(c => c.groups.includes('YouTube Filmes')),
  [youtubeChannels]);

  const ytPlaylists = useMemo(() => 
    youtubeChannels.filter(c => c.source === 'youtube' && c.isPlaylist),
  [youtubeChannels]);

  const ytCamara = useMemo(() => 
    youtubeChannels.find(c => c.name.toLowerCase().includes('camara pedro afonso')),
  [youtubeChannels]);

  if (isLoading && allChannels.length === 0) {
    return (
      <div className="p-8 space-y-8">
        <div className="animate-pulse bg-bg-card h-[400px] rounded-3xl" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => <div key={i} className="animate-pulse bg-bg-card h-64 rounded-2xl" />)}
        </div>
      </div>
    );
  }

  const heroImage = appImages.heroBackground || "https://images.unsplash.com/photo-1593784991095-a205039470b6?auto=format&fit=crop&q=80&w=1920";

  return (
    <div className="pb-0 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="px-[clamp(16px,4vw,64px)] mt-6">
        <div 
          onClick={() => ytCamara && (window.location.hash = `/player/${ytCamara.id}`)}
          className="relative h-[clamp(300px,40vw,600px)] w-full rounded-[40px] overflow-hidden group shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] cursor-pointer border border-white/5"
        >
          <img 
            src={ytCamara?.logo || heroImage} 
            alt="Destaque" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/60 via-transparent to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-[clamp(24px,6vw,64px)] w-full md:w-3/4">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="red" className="flex items-center gap-2 py-1.5 px-4 rounded-full border-none bg-accent-live shadow-[0_0_20px_rgba(255,59,59,0.4)]">
                <Radio size={14} className="animate-pulse" /> EM DESTAQUE
              </Badge>
              {manualChannels.length > 0 && <Badge variant="green" className="py-1.5 px-4 rounded-full">MEUS CONTEÚDOS</Badge>}
            </div>
            
            <h2 className="font-title font-extrabold mb-6 text-white leading-[1.1] drop-shadow-2xl" style={{ fontSize: 'var(--text-display)' }}>
              {ytCamara?.name || "Premium IPTV Experience"}
            </h2>
            
            <p className="text-text-secondary text-lg mb-8 max-w-xl line-clamp-2 font-medium">
              Explore milhares de canais ao vivo, filmes e conteúdos exclusivos com a melhor experiência brasileira.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-accent-primary text-bg-primary font-black px-12 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 text-lg shadow-xl shadow-accent-primary/20">
                <Play size={24} fill="currentColor" /> ASSISTIR AGORA
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white font-bold px-12 py-4 rounded-2xl hover:bg-white/20 transition-all border border-white/10">
                DETALHES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Meus Conteúdos (Adicionados Manualmente) */}
      {manualChannels.length > 0 && (
        <CategorySection 
          title="Meus Adicionados" 
          icon={<Star size={28} />} 
          channels={manualChannels}
          accentColor="accent-secondary"
        />
      )}

      {/* Música & Vaquejada */}
      <CategorySection 
        title="Música & Vaquejada" 
        icon={<Music size={28} />} 
        channels={[...musicChannels, ...ytLiveMusic]}
        accentColor="accent-primary"
      />

      {/* Filmes */}
      <CategorySection 
        title="Cinema & Filmes" 
        icon={<Film size={28} />} 
        channels={[...moviesChannels, ...ytMovies]}
        accentColor="accent-blue"
      />

      {/* Brasil */}
      <CategorySection 
        title="Canais do Brasil" 
        icon={<Tv size={28} />} 
        channels={brazilianChannels}
        accentColor="accent-primary"
      />

      {/* Playlists */}
      {ytPlaylists.length > 0 && (
        <CategorySection 
          title="Playlists Marcantes" 
          icon={<Youtube size={28} />} 
          channels={ytPlaylists}
          accentColor="accent-live"
        />
      )}

      {/* Footer info banner */}
      <div className="mt-20 py-20 border-t border-white/5 bg-gradient-to-b from-white/5 to-transparent text-center px-4">
        <p className="text-text-secondary font-bold tracking-widest text-xs uppercase mb-4">Tecnologia Híbrida M3U + YouTube</p>
        <p className="text-text-secondary/40 text-sm max-w-lg mx-auto leading-relaxed">
          O StreamTV Brasil oferece acesso descentralizado ao entretenimento. Adicione suas próprias fontes e personalize sua experiência.
        </p>
      </div>

      <Footer />
    </div>
  );
};
