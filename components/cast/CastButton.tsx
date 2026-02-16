
import React, { useCallback } from 'react';
// Fix: Removed non-existent CastConnected icon and used Cast instead
import { Cast, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCast } from '../../hooks/useCast';
import { Channel } from '../../types';

type CastButtonVariant = 'player' | 'header' | 'card' | 'mini';

interface CastButtonProps {
  variant?: CastButtonVariant;
  channel?: Channel;
  className?: string;
}

export function CastButton({ variant = 'player', channel, className }: CastButtonProps) {
  const { castState, castChannel, castScreen, stopCast, method } = useCast();

  const isConnected = castState === 'connected';
  const isConnecting = castState === 'connecting';

  const handleClick = useCallback(async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isConnected) {
      await stopCast();
      return;
    }

    if (channel) {
      await castChannel(channel);
    } else {
      await castScreen();
    }
  }, [isConnected, channel, castChannel, castScreen, stopCast]);

  if (method === 'none') return null;

  const label = isConnected
    ? 'Parar transmissão'
    : isConnecting
    ? 'Conectando...'
    : channel
    ? `Transmitir ${channel.name}`
    : 'Transmitir para TV';

  return (
    <motion.button
      className={`cast-btn cast-btn--${variant} ${isConnected ? 'cast-btn--connected' : ''} ${className ?? ''}`}
      onClick={handleClick}
      disabled={isConnecting}
      aria-label={label}
      title={label}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.06 }}
      data-tv-focus
    >
      <AnimatePresence mode="wait">
        {isConnecting ? (
          <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Loader2 className="cast-icon cast-icon--spin" />
          </motion.span>
        ) : isConnected ? (
          <motion.span key="connected" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
            {/* Fix: Replaced CastConnected with Cast */}
            <Cast className="cast-icon cast-icon--connected" />
          </motion.span>
        ) : (
          <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Cast className="cast-icon" />
          </motion.span>
        )}
      </AnimatePresence>

      {(variant === 'player' || variant === 'header') && (
        <span className="cast-btn-label">
          {isConnected ? 'Transmitindo' : isConnecting ? 'Conectando...' : 'Transmitir'}
        </span>
      )}

      {isConnected && (
        <motion.span
          className="cast-connected-dot"
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}
