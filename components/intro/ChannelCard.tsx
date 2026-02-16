
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Channel } from '../../types';
import { Badge } from '../ui/Badge';
import { Heart, Play } from 'lucide-react';
import { useStore } from '../../store/useStore';

interface ChannelCardProps {
  channel: Channel;
}

export const ChannelCard: React.FC<ChannelCardProps> = ({ channel }) => {
  const navigate = useNavigate();
  const { toggleFavorite, favorites } = useStore();
  const [imgError, setImgError] = useState(false);
  const isFav = favorites.includes(channel.id);

  const initials = channel.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div 
      onClick={() => navigate(`/player/${channel.id}`)}
      className="group relative bg-bg-card rounded-[var(--btn-radius)] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(0,179,126,0.15)] border border-white/5 hover:border-accent-primary/50 focus-within:ring-2 focus-within:ring-accent-primary"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/player/${channel.id}`)}
    >
      <div 
        className="relative bg-bg-secondary flex items-center justify-center overflow-hidden"
        style={{ height: 'var(--card-height)' }}
      >
        <div 
          className="flex items-center justify-center w-full h-full p-[clamp(8px,1.5vw,20px)]"
        >
          {!imgError && channel.logo ? (
            <img 
              src={channel.logo} 
              alt={channel.name}
              className="w-full h-full object-contain transition-transform group-hover:scale-110"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="channel-logo-placeholder font-bold" style={{ fontSize: 'clamp(18px, 3vw, 48px)' }}>
              {initials}
            </div>
          )}
        </div>
        
        {/* Quality Badge */}
        {channel.quality && (
          <div className="absolute bottom-2 right-2">
            <Badge variant="gray" className="badge-quality">{channel.quality}</Badge>
          </div>
        )}

        {/* BR Badge */}
        {channel.isBrazilian && (
          <div className="absolute top-2 left-2">
            <div className="badge-br">🇧🇷 BR</div>
          </div>
        )}

        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div 
            className="rounded-full bg-accent-primary flex items-center justify-center shadow-lg shadow-accent-primary/40 transform translate-y-4 group-hover:translate-y-0 transition-transform"
            style={{ width: 'var(--icon-action)', height: 'var(--icon-action)' }}
          >
            <Play className="text-white fill-current ml-1" size={24} />
          </div>
        </div>
      </div>

      <div className="p-[clamp(8px,1vw,16px)]">
        <div className="flex justify-between items-start gap-2">
          <h3 
            className="channel-name font-semibold text-text-primary group-hover:text-accent-primary transition-colors"
            style={{ fontSize: 'var(--text-channel)' }}
          >
            {channel.name}
          </h3>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(channel.id);
            }}
            className="text-text-secondary hover:text-accent-live transition-colors focus:outline-none"
            style={{ padding: '4px' }}
          >
            <Heart 
              size={20} 
              className={isFav ? 'fill-accent-live text-accent-live' : ''} 
              style={{ width: 'var(--icon-card)', height: 'var(--icon-card)' }}
            />
          </button>
        </div>
        <div className="mt-1 flex gap-1 flex-wrap">
          <span className="channel-badge text-text-secondary" style={{ fontSize: 'var(--text-caption)' }}>
            {channel.groups[0]}
          </span>
          {channel.geoBlocked && <div className="badge-geo px-1 rounded">BLOCK</div>}
        </div>
      </div>
    </div>
  );
};
