
import React from 'react';
import { Channel } from '../../types';
import { EnhancedChannelCard } from '../channel/EnhancedChannelCard';
import { Badge } from '../ui/Badge';
import { ArrowRight } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  icon: React.ReactNode;
  channels: Channel[];
  accentColor?: string;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  icon,
  channels,
  accentColor = 'accent-primary'
}) => {
  // Exibir no máximo 12 canais por linha na home
  const displayChannels = channels.slice(0, 12);
  
  if (channels.length === 0) return null;

  return (
    <section className="mt-12 px-[clamp(16px,4vw,64px)] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
          <div className={`text-${accentColor}`}>
            {icon}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-3xl text-white font-title tracking-tight">{title}</h2>
          <div className="flex gap-2 items-center">
            <Badge variant="blue" className="text-[10px]">{channels.length} conteúdos</Badge>
          </div>
        </div>
      </div>
      
      <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory">
        {displayChannels.map(channel => (
          <div key={channel.id} className="min-w-[280px] md:min-w-[320px] snap-start">
            <EnhancedChannelCard channel={channel} />
          </div>
        ))}
      </div>
      
      {channels.length > 12 && (
        <button className="mt-4 text-text-secondary hover:text-accent-primary transition-colors font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
          Explorar mais em {title} <ArrowRight size={16} />
        </button>
      )}
    </section>
  );
};
