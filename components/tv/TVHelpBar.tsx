
import React from 'react';
import { useTVStore } from '../../store/tvStore';

export const TVHelpBar: React.FC = () => {
  const { isTV } = useTVStore();
  
  if (!isTV) return null;

  const items = [
    { color: 'bg-[#ff3b3b]', label: 'Favoritar' },
    { color: 'bg-[#00b37e]', label: 'Buscar' },
    { color: 'bg-[#f0a500]', label: 'Categorias' },
    { color: 'bg-[#1351b4]', label: 'Info' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 flex justify-center gap-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${item.color} shadow-[0_0_8px_rgba(255,255,255,0.2)]`} />
          <span className="text-xs font-bold text-white/60 tracking-wide uppercase">{item.label}</span>
        </div>
      ))}
    </div>
  );
};
