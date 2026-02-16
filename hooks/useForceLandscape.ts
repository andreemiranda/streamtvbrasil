
import { useCallback } from 'react';

export function useForceLandscape() {
  const lock = useCallback(async () => {
    // Tenta usar a API nativa de bloqueio de orientação
    try {
      // @ts-ignore
      if (screen.orientation && screen.orientation.lock) {
        // @ts-ignore
        await screen.orientation.lock('landscape').catch(() => {
          // Fallback se a API falhar ou for negada
          document.documentElement.classList.add('player-force-landscape');
        });
      } else {
        document.documentElement.classList.add('player-force-landscape');
      }
    } catch (err) {
      document.documentElement.classList.add('player-force-landscape');
    }
    
    // Sempre garante que a classe CSS está presente para o fallback visual (essencial para tablets)
    document.documentElement.classList.add('player-force-landscape');
  }, []);

  const unlock = useCallback(() => {
    try {
      // @ts-ignore
      if (screen.orientation && screen.orientation.unlock) {
        // @ts-ignore
        screen.orientation.unlock();
      }
    } catch (err) {}
    document.documentElement.classList.remove('player-force-landscape');
  }, []);

  return { lock, unlock };
}
