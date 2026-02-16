
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Settings, Tv, LogIn } from 'lucide-react';
import { CastButton } from '../cast/CastButton';
import { useAuth } from '../../contexts/AuthContext';
import { UserProfile } from '../auth/UserProfile';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <header className={`sticky top-0 z-50 glass h-16 px-4 md:px-8 flex items-center justify-between border-b border-white/5 ${className}`}>
      <div 
        onClick={() => navigate('/')} 
        className="flex items-center gap-2 cursor-pointer group"
      >
        <div className="w-10 h-10 bg-gradient-to-tr from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center shadow-lg shadow-accent-primary/20 group-hover:rotate-12 transition-transform">
          <Tv className="text-bg-primary" size={24} strokeWidth={3} />
        </div>
        <h1 className="font-title text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary">
          StreamTV <span className="text-accent-primary">Brasil</span>
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <CastButton variant="header" />
        
        <button 
          onClick={() => navigate('/buscar')}
          className="p-2.5 rounded-full hover:bg-white/5 text-text-secondary hover:text-white transition-all"
          aria-label="Buscar"
        >
          <Search size={20} />
        </button>

        {isAuthenticated ? (
          <UserProfile />
        ) : (
          <button 
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 px-4 py-2 bg-accent-primary/10 hover:bg-accent-primary/20 text-accent-primary rounded-full transition-all border border-accent-primary/20 group"
          >
            <LogIn size={18} className="group-hover:translate-x-0.5 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest hidden sm:inline">Acesso</span>
          </button>
        )}

        <button 
          onClick={() => navigate('/configuracoes')}
          className="p-2.5 rounded-full hover:bg-white/5 text-text-secondary hover:text-white transition-all"
          aria-label="Configurações"
        >
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
};
