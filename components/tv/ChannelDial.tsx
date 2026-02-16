
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTVStore } from '../../store/tvStore';

export const ChannelDial: React.FC = () => {
  const { dialBuffer, isDialVisible } = useTVStore();

  return (
    <AnimatePresence>
      {isDialVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 50 }}
          className="fixed top-8 right-8 z-[10000] bg-bg-card/95 border border-accent-primary/50 rounded-2xl p-6 shadow-2xl backdrop-blur-xl flex flex-col items-center gap-2 min-w-[120px]"
        >
          <div className="text-accent-primary font-extrabold text-7xl font-sans tracking-tighter">
            {dialBuffer}
          </div>
          <div className="flex gap-1.5 mt-2">
            {[1, 2, 3].map(i => (
              <div 
                key={i} 
                className={`h-1.5 w-6 rounded-full transition-colors ${i <= dialBuffer.length ? 'bg-accent-primary' : 'bg-white/10'}`} 
              />
            ))}
          </div>
          <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mt-2">Canal</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
