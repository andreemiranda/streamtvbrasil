
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Fix: Removed non-existent CastConnected icon and used Cast instead
import { Cast, X } from 'lucide-react';
import { useCast } from '../../hooks/useCast';

export function CastStatusBar() {
  const { castState, currentChannel, stopCast } = useCast();
  const isConnected = castState === 'connected';

  return (
    <AnimatePresence>
      {isConnected && (
        <motion.div
          className="cast-status-bar"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          role="status"
        >
          <div className="cast-status-inner">
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              {/* Fix: Replaced CastConnected with Cast */}
              <Cast className="cast-status-icon" />
            </motion.span>

            <span className="cast-status-text">
              {currentChannel
                ? `Transmitindo: ${currentChannel.name}`
                : 'Transmitindo para a TV'}
            </span>

            {currentChannel?.logo && (
              <img src={currentChannel.logo} alt="" className="cast-status-channel-logo" />
            )}

            <button className="cast-status-stop" onClick={stopCast} data-tv-focus>
              <X size={14} />
              <span>Parar</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
