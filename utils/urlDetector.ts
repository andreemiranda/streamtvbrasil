
export interface DetectedUrlInfo {
  type: 'youtube' | 'video' | 'audio' | 'playlist' | 'stream' | 'unknown';
  format?: string;
  isPlaylist?: boolean;
  videoId?: string;
  suggestedThumbnail?: string;
}

export function detectUrlType(url: string): DetectedUrlInfo {
  if (!url) return { type: 'unknown' };

  // YouTube
  // Regex para vídeo: https://www.youtube.com/watch?v=ID ou https://youtu.be/ID
  // Regex para playlist: https://www.youtube.com/playlist?list=ID
  const ytVideoRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const ytPlaylistRegex = /youtube\.com\/playlist\?list=([a-zA-Z0-9_-]+)/;
  
  const playlistMatch = url.match(ytPlaylistRegex);
  if (playlistMatch) {
    return {
      type: 'youtube',
      isPlaylist: true,
      videoId: playlistMatch[1],
      // Thumbnails de playlists via API são melhores, mas como fallback:
      suggestedThumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop'
    };
  }

  const videoMatch = url.match(ytVideoRegex);
  if (videoMatch) {
    const videoId = videoMatch[1];
    return {
      type: 'youtube',
      isPlaylist: false,
      videoId: videoId,
      suggestedThumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    };
  }
  
  // Arquivos de vídeo diretos
  const videoFormats = ['.mp4', '.webm', '.mkv', '.avi', '.mov', '.flv'];
  if (videoFormats.some(ext => url.toLowerCase().includes(ext))) {
    return {
      type: 'video',
      format: url.split('.').pop()?.split('?')[0].toLowerCase()
    };
  }
  
  // Playlists M3U/M3U8
  if (url.toLowerCase().includes('.m3u') || url.toLowerCase().includes('.m3u8')) {
    return {
      type: 'playlist',
      format: url.includes('.m3u8') ? 'm3u8' : 'm3u'
    };
  }
  
  // Arquivos de áudio
  const audioFormats = ['.mp3', '.aac', '.flac', '.ogg', '.wav'];
  if (audioFormats.some(ext => url.toLowerCase().includes(ext))) {
    return {
      type: 'audio',
      format: url.split('.').pop()?.split('?')[0].toLowerCase()
    };
  }
  
  // Streaming genérico
  if (url.startsWith('http')) {
    return {
      type: 'stream'
    };
  }
  
  return {
    type: 'unknown'
  };
}
