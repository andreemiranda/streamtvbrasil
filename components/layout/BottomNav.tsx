
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, Heart, Clock, Settings } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Início', path: '/' },
    { icon: Search, label: 'Buscar', path: '/buscar' },
    { icon: Heart, label: 'Favoritos', path: '/favoritos' },
    { icon: Clock, label: 'Histórico', path: '/historico' },
    { icon: Settings, label: 'Config', path: '/configuracoes' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/5 px-2 py-2 md:hidden safe-area-inset-bottom">
      <ul className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <li key={item.path} className="flex-1">
              <button 
                onClick={() => navigate(item.path)}
                className={`w-full flex flex-col items-center justify-center gap-1 transition-all duration-300 ${isActive ? 'text-accent-primary' : 'text-text-secondary'}`}
              >
                <div className={`p-1 rounded-lg transition-colors ${isActive ? 'bg-accent-primary/10' : ''}`}>
                  <Icon size={22} />
                </div>
                <span className="text-[10px] font-medium">{item.label}</span>
                {isActive && <div className="w-1 h-1 bg-accent-primary rounded-full" />}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
