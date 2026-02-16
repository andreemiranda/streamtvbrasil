

import { useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TV_KEYS, isKey } from '../utils/tvKeyCodes';
import { navigateSpatial } from '../utils/spatialNavigation';
import { useTVStore } from '../store/tvStore';
import { useStore } from '../store/useStore';
import { getTVPlatform } from '../utils/tvDetect';

export function useRemoteControl() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isTV, setDialBuffer, clearDial, dialBuffer, showOSD, hideOSD } = useTVStore();
  const { channels, toggleFavorite } = useStore();
  // Fix: Added undefined as initial value to satisfy TypeScript requirement for useRef arguments
  const dialTimeoutRef = useRef<number | undefined>(undefined);
  // Fix: Added undefined as initial value to satisfy TypeScript requirement for useRef arguments
  const osdTimeoutRef = useRef<number | undefined>(undefined);

  const handleChannelChangeByNumber = useCallback((number: string) => {
    const index = parseInt(number, 10) - 1;
    if (index >= 0 && index < channels.length) {
      const channel = channels[index];
      showOSD(channel);
      navigate(`/player/${channel.id}`);
      
      if (osdTimeoutRef.current) window.clearTimeout(osdTimeoutRef.current);
      osdTimeoutRef.current = window.setTimeout(hideOSD, 4000);
    }
    clearDial();
  }, [channels, navigate, clearDial, showOSD, hideOSD]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isTV) return;

    const active = document.activeElement;

    // Navegação
    if (isKey(e, TV_KEYS.UP)) { e.preventDefault(); navigateSpatial('up', active); return; }
    if (isKey(e, TV_KEYS.DOWN)) { e.preventDefault(); navigateSpatial('down', active); return; }
    if (isKey(e, TV_KEYS.LEFT)) { e.preventDefault(); navigateSpatial('left', active); return; }
    if (isKey(e, TV_KEYS.RIGHT)) { e.preventDefault(); navigateSpatial('right', active); return; }
    
    if (isKey(e, TV_KEYS.OK)) {
      if (active && active !== document.body) {
        (active as HTMLElement).click();
      }
      return;
    }

    if (isKey(e, TV_KEYS.BACK)) {
      e.preventDefault();
      if (location.pathname === '/') {
        // Confirmar saída ou minimizar
      } else {
        navigate(-1);
      }
      return;
    }

    // Números para trocar canal
    const key = e.key;
    if (/^[0-9]$/.test(key)) {
      e.preventDefault();
      const newBuffer = dialBuffer + key;
      setDialBuffer(newBuffer);
      
      if (dialTimeoutRef.current) window.clearTimeout(dialTimeoutRef.current);
      dialTimeoutRef.current = window.setTimeout(() => {
        handleChannelChangeByNumber(newBuffer);
      }, 1500);
      return;
    }

    // Atalhos coloridos
    if (isKey(e, TV_KEYS.RED)) {
      e.preventDefault();
      // Se estiver no player, favorita o canal
      const match = location.pathname.match(/\/player\/(.+)/);
      if (match) toggleFavorite(match[1]);
      return;
    }

    if (isKey(e, TV_KEYS.GREEN)) {
      e.preventDefault();
      navigate('/buscar');
      return;
    }
  }, [isTV, location, navigate, dialBuffer, setDialBuffer, handleChannelChangeByNumber, toggleFavorite]);

  useEffect(() => {
    if (!isTV) return;
    
    // Registro Samsung
    const platform = getTVPlatform();
    if (platform === 'samsung') {
      try {
        const tizen = (window as any).tizen;
        if (tizen?.tvinputdevice) {
          tizen.tvinputdevice.registerKeyBatch([
            'ColorF0Red', 'ColorF1Green', 'ColorF2Yellow', 'ColorF3Blue',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
          ]);
        }
      } catch (e) {}
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTV, handleKeyDown]);
}
