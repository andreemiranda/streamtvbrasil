
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, Heart, Clock, Settings, Tv } from 'lucide-react';
import { useTVStore } from '../../store/tvStore';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isTV } = useTVStore();

  const navItems = [
    { icon: Home, label: 'Início', path: '/' },
    { icon: Search, label: 'Buscar', path: '/buscar' },
    { icon: Heart, label: 'Favoritos', path: '/favoritos' },
    { icon: Clock, label: 'Histórico', path: '/historico' },
    { icon: Settings, label: 'Configurações', path: '/configuracoes' },
  ];

  return (
    <aside className="hidden lg:flex flex-col border-r border-white/5 bg-bg-primary h-screen sticky top-0" style={{ width: 'var(--sidebar-width)' }}>
      <div className="p-8 flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-tr from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center shadow-lg shadow-accent-primary/20">
          <Tv className="text-bg-primary" size={24} strokeWidth={3} />
        </div>
        <h1 className="font-title text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary">
          StreamTV <span className="text-accent-primary">Brasil</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <button
              key={item.path}
              data-tv-focus
              tabIndex={isTV ? 0 : -1}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-4 px-4 py-3 rounded-[var(--btn-radius)] transition-all w-full text-left focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:bg-accent-primary/10 ${isActive ? 'bg-accent-primary/10 text-accent-primary font-bold' : 'text-text-secondary hover:bg-white/5 hover:text-white focus:text-accent-primary'}`}
              style={{ fontSize: 'var(--text-label)' }}
            >
              <Icon size={22} />
              <span>{item.label}</span>
              {isActive && <div className="ml-auto w-1.5 h-1.5 bg-accent-primary rounded-full" />}
            </button>
          );
        })}
      </nav>
      
      <div className="p-8 mt-auto">
        <div className="p-4 bg-bg-card rounded-2xl border border-white/5 text-center">
          <p className="text-text-secondary mb-2 uppercase tracking-widest font-bold" style={{ fontSize: 'var(--text-caption)' }}>Premium</p>
          <div className="text-accent-primary font-bold" style={{ fontSize: 'var(--text-body-sm)' }}>{isTV ? 'Smart TV Ativada' : 'Modo Web'}</div>
        </div>
      </div>
    </aside>
  );
};
