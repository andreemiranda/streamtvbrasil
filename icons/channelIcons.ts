
import { IconDefinition } from '../types/icons';

export const channelIcons: IconDefinition[] = [
  {
    id: 'tv-classic',
    name: 'TV Clássica',
    category: 'channels',
    tags: ['tv', 'televisão', 'canal', 'clássico'],
    svgPath: 'M4 6h16v12H4V6zm2 2v8h12V8H6z',
    unicode: '📺'
  },
  {
    id: 'tv-modern',
    name: 'TV Moderna',
    category: 'channels',
    tags: ['tv', 'smart', 'moderno'],
    svgPath: 'M3 3h18v14H3V3zm2 2v10h14V5H5z',
    unicode: '📱'
  },
  {
    id: 'antenna',
    name: 'Antena',
    category: 'channels',
    tags: ['antena', 'sinal', 'transmissão'],
    svgPath: 'M12 2l4 4-4 4V7h-2v3L6 6l4-4zm0 20l-4-4 4-4v3h2v-3l4 4-4 4z'
  },
  {
    id: 'satellite',
    name: 'Satélite',
    category: 'channels',
    tags: ['satélite', 'parabólica', 'dish'],
    svgPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
    unicode: '📡'
  },
  {
    id: 'broadcast',
    name: 'Transmissão',
    category: 'channels',
    tags: ['ao vivo', 'live', 'broadcast'],
    svgPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7v-2z',
    unicode: '📻'
  },
  {
    id: 'play-circle',
    name: 'Play',
    category: 'channels',
    tags: ['play', 'reproduzir', 'stream'],
    svgPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14V8l6 4-6 4z',
    unicode: '▶️'
  },
  {
    id: 'live-dot',
    name: 'Ao Vivo',
    category: 'channels',
    tags: ['ao vivo', 'live', 'ponto vermelho'],
    svgPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
    unicode: '🔴'
  },
  {
    id: 'video-camera',
    name: 'Câmera de Vídeo',
    category: 'channels',
    tags: ['câmera', 'vídeo', 'gravação'],
    svgPath: 'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z',
    unicode: '📹'
  },
  {
    id: 'film-reel',
    name: 'Rolo de Filme',
    category: 'channels',
    tags: ['filme', 'cinema', 'rolo'],
    svgPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
    unicode: '🎞️'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    category: 'channels',
    tags: ['youtube', 'vídeo', 'social'],
    svgPath: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    unicode: '▶️'
  }
];
