
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

export const EnhancedChannelCard: React.FC<ChannelCardProps> = ({ channel }) => {
  const navigate = useNavigate();
  const { toggleFavorite, favorites } = useStore();
  const { isTV } = useTVStore();
  const [imgError, setImgError] = useState(false);
  const [iconError, setIconError] = useState(false);
  
  const isFav = favorites.includes(channel.id);
  const isYT = channel.source === 'youtube';

  const displayThumbnail = channel.thumbnailUrl || channel.logo;
  const displayIcon = channel.iconUrl || channel.logo;
  const initials = channel.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div 
      onClick={() => navigate(`/player/${channel.id}`)}
      data-tv-focus
      tabIndex={isTV ? 0 : -1}
      className="group relative bg-bg-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 hover:scale-[1.05] hover:shadow-2xl border border-white/5 hover:border-accent-primary/50 focus:outline-none focus:ring-4 focus:ring-accent-primary/50"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(`/player/${channel.id}`);
        }
      }}
    >
      {/* Thumbnail Grande */}
      <div className="relative aspect-video bg-bg-secondary overflow-hidden">
        {!imgError && displayThumbnail ? (
          <img 
            src={displayThumbnail}
            alt={channel.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-bg-card to-bg-secondary">
            <span className="text-6xl opacity-20">📺</span>
          </div>
        )}
        
        {/* Overlay de Play */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-accent-primary flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Play className="text-white fill-current ml-1" size={32} />
          </div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex gap-2">
          {isYT && (
            <Badge variant="red" className="flex items-center gap-1">
              <Youtube size={12} /> YouTube
            </Badge>
          )}
          {channel.quality && <Badge variant="gray">{channel.quality}</Badge>}
        </div>

        {/* Cast Action */}
        <div className="absolute top-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <CastButton variant="card" channel={channel} />
        </div>
      </div>
      
      {/* Informações */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Ícone pequeno do canal */}
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-white/10 bg-bg-secondary flex items-center justify-center">
            {!iconError && displayIcon ? (
              <img 
                src={displayIcon} 
                alt="" 
                className="w-full h-full object-contain p-1"
                onError={() => setIconError(true)}
              />
            ) : (
              <span className="text-xs font-bold text-accent-primary">{initials}</span>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-text-primary line-clamp-1 text-sm mb-0.5 group-hover:text-accent-primary transition-colors">
              {channel.name}
            </h3>
            <p className="text-[10px] text-text-secondary uppercase font-bold tracking-wider">
              {channel.groups[0] || 'Geral'} {channel.isBrazilian && '• 🇧🇷'}
            </p>
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(channel.id);
            }}
            className="shrink-0 p-1 text-text-secondary hover:text-accent-live transition-colors"
          >
            <Heart 
              size={18} 
              className={isFav ? 'fill-accent-live text-accent-live' : ''} 
            />
          </button>
        </div>
      </div>
    </div>
  );
};
