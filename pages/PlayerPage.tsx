
import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { VideoPlayer } from '../components/player/VideoPlayer';
import { ChannelCard } from '../components/channel/ChannelCard';
// Fix: Import Radio icon which was used but missing from imports
import { Radio } from 'lucide-react';

export const PlayerPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { channels, youtubeChannels } = useStore();

  const channel = useMemo(() => {
    // Procura primeiro nos canais M3U, depois nos do YouTube
    const allAvailable = [...channels, ...youtubeChannels];
    return allAvailable.find(c => c.id === id);
  }, [channels, youtubeChannels, id]);

  const relatedChannels = useMemo(() => {
    if (!channel) return [];
    const allAvailable = [...channels, ...youtubeChannels];
    
    return allAvailable
      .filter(c => c.id !== id && (
        c.groups.some(g => channel.groups.includes(g)) || 
        c.source === channel.source
      ))
      .slice(0, 15);
  }, [channel, channels, youtubeChannels, id]);

  if (!channel) return (
    <div className="flex flex-col items-center justify-center h-[80vh] p-8 text-center">
      <div className="w-20 h-20 bg-accent-live/10 rounded-full flex items-center justify-center mb-6">
        <Radio className="text-accent-live" size={40} />
      </div>
      <h2 className="text-2xl font-bold mb-4">Canal não disponível</h2>
      <p className="text-text-secondary mb-8 max-w-md">Este conteúdo pode ter sido removido ou o link está temporariamente indisponível.</p>
      <button onClick={() => navigate('/')} className="px-10 py-3 bg-accent-primary text-bg-primary font-bold rounded-full">Voltar para o Início</button>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row h-screen lg:h-[calc(100vh-64px)] overflow-hidden">
      {/* Main Player Area */}
      <div className="flex-grow bg-black relative">
        <VideoPlayer channel={channel} />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-80 xl:w-96 border-l border-white/5 bg-bg-primary overflow-y-auto no-scrollbar p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-title font-bold text-xl">Relacionados</h3>
        </div>
        <div className="space-y-6">
          {relatedChannels.map(c => (
            <div key={c.id} className="transform transition-all hover:scale-[1.02]">
              <ChannelCard channel={c} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};