
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Channel } from '../../types';
import { Badge } from '../ui/Badge';
import { Heart, Play, Youtube } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { useTVStore } from '../../store/tvStore';
import { CastButton } from '../cast/CastButton';

interface ChannelCardProps {
  channel: Channel;
}

export const ChannelCard: React.FC<ChannelCardProps> = ({ channel }) => {
  const navigate = useNavigate();
  const { toggleFavorite, favorites } = useStore();
  const { isTV } = useTVStore();
  const [imgError, setImgError] = useState(false);
  const isFav = favorites.includes(channel.id);
  const isYT = channel.source === 'youtube';

  const initials = channel.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div 
      onClick={() => navigate(`/player/${channel.id}`)}
      data-tv-focus
      tabIndex={isTV ? 0 : -1}
      role="button"
      aria-label={`Assistir ${channel.name}`}
      className="group relative bg-bg-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/5 hover:border-accent-primary/50 focus:outline-none focus:ring-4 focus:ring-accent-primary/50 focus:scale-[1.08] focus:z-10"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(`/player/${channel.id}`);
        }
      }}
    >
      <div 
        className={`relative bg-bg-secondary flex items-center justify-center overflow-hidden transition-all duration-300 ${isYT ? 'aspect-video' : 'h-40'}`}
      >
        <div className={`w-full h-full ${isYT ? '' : 'p-6'}`}>
          {!imgError && channel.logo ? (
            <img 
              src={channel.logo} 
              alt={channel.name}
              className={`w-full h-full transition-transform duration-700 group-hover:scale-110 group-focus:scale-110 ${isYT ? 'object-cover' : 'object-contain'}`}
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-bg-card to-bg-secondary font-bold text-accent-primary opacity-50 text-4xl">
              {initials}
            </div>
          )}
        </div>
        
        {/* Source Badge */}
        {isYT && (
          <div className="absolute top-2 right-2 z-30">
            <div className="bg-red-600 p-1.5 rounded-full shadow-lg">
              <Youtube size={14} className="text-white" />
            </div>
          </div>
        )}

        {/* Quality/Live Badge */}
        <div className="absolute bottom-2 left-2 flex gap-1">
          {isYT && <Badge variant="red" className="flex items-center gap-1">YouTube</Badge>}
          {channel.quality && <Badge variant="gray">{channel.quality}</Badge>}
        </div>

        {/* Cast Action */}
        <div className="absolute top-2 left-2 z-20 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
          <CastButton variant="card" channel={channel} />
        </div>

        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-accent-primary flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300">
            <Play className="text-white fill-current ml-1" size={32} />
          </div>
        </div>
      </div>

      <div className="p-4 bg-bg-card">
        <div className="flex justify-between items-start gap-3">
          <h3 className="channel-name font-bold text-text-primary group-hover:text-accent-primary transition-colors line-clamp-2 text-sm leading-snug h-10">
            {channel.name}
          </h3>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(channel.id);
            }}
            className="text-text-secondary hover:text-accent-live transition-colors shrink-0"
          >
            <Heart 
              size={20} 
              className={isFav ? 'fill-accent-live text-accent-live' : ''} 
            />
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[10px] text-text-secondary uppercase font-bold tracking-wider truncate">
            {channel.groups[0] || 'Geral'}
          </span>
          {channel.isBrazilian && <span className="text-[10px]">🇧🇷</span>}
        </div>
      </div>
    </div>
  );
};
