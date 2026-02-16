
export interface Channel {
  id: string;
  name: string;
  logo: string; // URL da thumbnail/ícone do canal principal
  url: string;
  groups: string[];
  quality: string | null;
  isBrazilian: boolean;
  isPortuguese: boolean;
  geoBlocked: boolean;
  notAlwaysOn: boolean;
  tvgId: string;
  source: 'm3u' | 'youtube' | 'manual';
  ytId?: string;
  isPlaylist?: boolean;
  
  // NOVOS CAMPOS PARA THUMBNAILS E ÍCONES
  thumbnailUrl?: string; // URL da thumbnail principal
  iconUrl?: string; // URL do ícone do canal (menor, para lista)
  customThumbnail?: boolean; // Se o usuário fez upload manual
  description?: string;
  tags?: string[];
  
  httpHeaders?: {
    referrer?: string;
    userAgent?: string;
  };
}

export type Category = {
  id: string;
  label: string;
  icon: string;
};

export interface AppImages {
  heroBackground?: string;
  logo?: string;
  defaultChannelIcon?: string;
  categoryIcons?: Record<string, string>;
  loadingPlaceholder?: string;
}

export interface PlaylistState {
  channels: Channel[];
  favorites: string[]; // IDs
  history: { channelId: string; timestamp: number }[];
  isLoading: boolean;
  error: string | null;
}
