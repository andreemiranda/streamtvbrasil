
import { Channel } from '../types';

// A chave será injetada automaticamente via process.env.API_KEY
const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export async function fetchYouTubeData(query: string, type: 'video' | 'playlist' = 'video', isLive = false): Promise<Channel[]> {
  if (!API_KEY) return [];
  
  try {
    const params = new URLSearchParams({
      part: 'snippet',
      maxResults: '20',
      q: query,
      regionCode: 'BR',
      relevanceLanguage: 'pt',
      key: API_KEY,
      type: type,
    });

    if (isLive) {
      params.append('eventType', 'live');
    } else if (type === 'video') {
      params.append('videoDuration', 'long'); // Prioriza vídeos longos e filmes
    }

    const response = await fetch(`${BASE_URL}/search?${params.toString()}`);
    const data = await response.json();

    if (!data.items) return [];

    return data.items.map((item: any) => {
      const id = item.id.videoId || item.id.playlistId;
      return {
        id: `yt-${id}`,
        name: item.snippet.title,
        logo: item.snippet.thumbnails.high.url, // URL direta do YouTube
        url: item.id.videoId 
          ? `https://www.youtube.com/watch?v=${item.id.videoId}` 
          : `https://www.youtube.com/playlist?list=${item.id.playlistId}`,
        groups: [isLive ? 'YouTube Live' : (type === 'playlist' ? 'Playlists' : 'YouTube Filmes')],
        quality: 'HD',
        isBrazilian: true,
        isPortuguese: true,
        geoBlocked: false,
        notAlwaysOn: false,
        tvgId: '',
        source: 'youtube',
        ytId: id,
        isPlaylist: !!item.id.playlistId,
      };
    });
  } catch (error) {
    console.error('YouTube API Error:', error);
    return [];
  }
}
