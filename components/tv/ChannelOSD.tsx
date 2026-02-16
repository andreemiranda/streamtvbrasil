
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTVStore } from '../../store/tvStore';

export const ChannelOSD: React.FC = () => {
  const { activeOSDChannel, isOSDVisible } = useTVStore();

  if (!activeOSDChannel) return null;

  return (
    <AnimatePresence>
      {isOSDVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-8 left-8 right-8 z-[9999] flex justify-center"
        >
          <div className="bg-bg-card/90 border border-white/5 backdrop-blur-xl rounded-2xl p-4 flex items-center gap-6 shadow-2xl max-w-2xl w-full">
            <div className="w-20 h-20 bg-white/5 rounded-xl flex items-center justify-center p-2">
               <img src={activeOSDChannel.logo} alt="" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-extrabold text-white truncate">{activeOSDChannel.name}</h2>
              <p className="text-text-secondary font-medium">{activeOSDChannel.groups[0]}</p>
              <div className="flex items-center gap-3 mt-2">
                 <span className="bg-accent-live px-2 py-0.5 rounded text-[10px] font-black uppercase text-white animate-pulse">Ao Vivo</span>
                 {activeOSDChannel.quality && <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] font-bold text-white/70 uppercase">{activeOSDChannel.quality}</span>}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
