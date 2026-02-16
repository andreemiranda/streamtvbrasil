
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LogOut, User as UserIcon, Shield, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const UserProfile: React.FC = () => {
  const { user, signOut } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  if (!user) return null;

  const handleSignOut = () => {
    signOut();
    setShowMenu(false);
    window.location.hash = '#/'; // Redireciona para home (HashRouter)
  };

  return (
    <div className="relative">
      {/* Avatar/Botão */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-full pl-1 pr-3 py-1 transition-all border border-white/5 hover:border-accent-primary/30 group"
      >
        <div className="relative">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || 'User'}
              className="w-8 h-8 rounded-full border-2 border-accent-primary group-hover:scale-105 transition-transform"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center">
              <UserIcon className="text-bg-primary" size={16} />
            </div>
          )}
          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-accent-primary rounded-full border-2 border-bg-card" />
        </div>
        <div className="text-left hidden sm:block max-w-[100px]">
          <p className="text-[10px] font-black text-white truncate uppercase tracking-tighter">
            {user.displayName?.split(' ')[0] || 'Usuário'}
          </p>
        </div>
        <ChevronDown size={14} className={`text-text-tertiary transition-transform duration-300 ${showMenu ? 'rotate-180' : ''}`} />
      </button>

      {/* Menu Dropdown */}
      <AnimatePresence>
        {showMenu && (
          <>
            {/* Overlay para fechar o menu */}
            <div
              className="fixed inset-0 z-40 bg-black/20"
              onClick={() => setShowMenu(false)}
            />

            {/* Menu Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute right-0 mt-3 w-64 bg-bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 z-50 overflow-hidden"
            >
              {/* Header do Menu */}
              <div className="p-5 bg-bg-secondary/50 border-b border-white/5">
                <div className="flex flex-col items-center text-center">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'User'}
                      className="w-16 h-16 rounded-full border-4 border-accent-primary/20 mb-3"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-accent-primary flex items-center justify-center mb-3">
                      <UserIcon className="text-bg-primary" size={32} />
                    </div>
                  )}
                  <h4 className="font-bold text-white truncate w-full">
                    {user.displayName || 'Usuário StreamTV'}
                  </h4>
                  <p className="text-xs text-text-secondary truncate w-full mt-0.5">
                    {user.email}
                  </p>
                </div>
              </div>

              {/* Status Section */}
              <div className="px-4 py-3 bg-accent-primary/5 flex items-center justify-between border-b border-white/5">
                 <div className="flex items-center gap-2">
                    <Shield className="text-accent-primary" size={14} />
                    <span className="text-[10px] font-black text-accent-primary uppercase tracking-widest">Sessão Protegida</span>
                 </div>
                 <div className="w-1.5 h-1.5 bg-accent-primary rounded-full animate-pulse" />
              </div>

              {/* Actions */}
              <div className="p-2">
                <button
                  onClick={handleSignOut}
                  className="w-full group flex items-center gap-3 px-4 py-3 hover:bg-red-500/10 rounded-xl transition-all text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                    <LogOut size={16} />
                  </div>
                  <span className="text-sm font-bold text-red-500/80 group-hover:text-red-500 transition-colors">Sair da Conta</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
