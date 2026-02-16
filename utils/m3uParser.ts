
import { Channel } from '../types';
import { LOCAL_ICONS_PATH } from '../constants';

/**
 * Parser resiliente para listas M3U/M3U8.
 * Focado em extrair Nome e URL, ignorando lixo e corrigindo tags malformadas.
 */
export function parseM3U(content: string): Channel[] {
  if (!content) return [];

  const lines = content.split(/\r?\n/);
  const channels: Channel[] = [];
  
  let tempMetadata: Partial<Channel> = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // 1. Identifica metadados (#EXTINF)
    if (line.toUpperCase().startsWith('#EXTINF:')) {
      // Extração robusta de atributos via regex flexível
      const tvgId = (line.match(/tvg-id="?([^"]*)"?/i)?.[1] || '').trim();
      let tvgLogo = (line.match(/tvg-logo="?([^"]*)"?/i)?.[1] || '').trim();
      const groupTitle = (line.match(/group-title="?([^"]*)"?/i)?.[1] || '').trim();
      
      // O nome do canal é SEMPRE o que vem depois da última vírgula na linha EXTINF
      const commaIndex = line.lastIndexOf(',');
      let name = '';
      if (commaIndex !== -1) {
        name = line.substring(commaIndex + 1).trim();
      }

      // Se não houver logo mas houver ID, tenta o fallback local
      if (!tvgLogo && tvgId) {
        tvgLogo = `${LOCAL_ICONS_PATH}${tvgId}.png`;
      }

      // Detecta qualidade no nome
      const qualityMatch = name.match(/\((240p|480p|576p|720p|1080p|4K)\)/i);
      const quality = qualityMatch ? qualityMatch[1] : null;

      const isBrazilian = tvgId.includes('.br@') || tvgId.endsWith('.br') || 
                          groupTitle.toLowerCase().includes('brasil') || 
                          name.toLowerCase().includes('brasil');

      tempMetadata = {
        id: tvgId || `id-${Math.random().toString(36).substr(2, 9)}`,
        name: name.replace(/\[Geo-blocked\]|\[Not 24\/7\]/g, '').trim(),
        logo: tvgLogo,
        groups: groupTitle.split(/[;|]/).map(g => g.trim()).filter(Boolean),
        quality,
        isBrazilian,
        geoBlocked: line.includes('[Geo-blocked]'),
        notAlwaysOn: line.includes('[Not 24/7]'),
        tvgId,
        source: 'm3u'
      };
      continue;
    }

    // 2. Identifica Headers VLCOPT (Opcional)
    if (line.toUpperCase().startsWith('#EXTVLCOPT:')) {
      if (!tempMetadata.httpHeaders) tempMetadata.httpHeaders = {};
      if (line.includes('http-referrer=')) {
        tempMetadata.httpHeaders.referrer = line.split('http-referrer=')[1].trim();
      }
      if (line.includes('http-user-agent=')) {
        tempMetadata.httpHeaders.userAgent = line.split('http-user-agent=')[1].trim();
      }
      continue;
    }

    // 3. Identifica a URL (Deve começar com http ou ser um path válido)
    if (line.startsWith('http') || line.includes('://')) {
      const url = line.split(/\s/)[0]; // Remove qualquer lixo após a URL na mesma linha

      // Se encontramos uma URL mas não tínhamos metadados prévios (lista sem #EXTINF)
      // criamos um nome baseado no final da URL
      const finalName = tempMetadata.name || url.split('/').pop()?.split('?')[0] || 'Canal Sem Nome';

      // Validação Final: Só insere se tiver Nome e URL
      if (finalName && url) {
        channels.push({
          id: tempMetadata.id || `url-${Math.random().toString(36).substr(2, 9)}`,
          name: finalName,
          logo: tempMetadata.logo || '',
          url: url,
          groups: tempMetadata.groups?.length ? tempMetadata.groups : ['Geral'],
          quality: tempMetadata.quality || null,
          isBrazilian: !!tempMetadata.isBrazilian,
          isPortuguese: !!tempMetadata.isPortuguese,
          geoBlocked: !!tempMetadata.geoBlocked,
          notAlwaysOn: !!tempMetadata.notAlwaysOn,
          tvgId: tempMetadata.tvgId || '',
          source: 'm3u',
          httpHeaders: tempMetadata.httpHeaders || {}
        });
      }

      // Reseta metadados para o próximo canal
      tempMetadata = {};
    }
  }

  return channels;
}
