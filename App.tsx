
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useStore } from './store/useStore';
import { useTVStore } from './store/tvStore';
import { useThemeStore } from './store/themeStore';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { detectSmartTV } from './utils/tvDetect';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { Sidebar } from './components/layout/Sidebar';
import { Home } from './pages/Home';
import { PlayerPage } from './pages/PlayerPage';
import { SearchPage } from './pages/SearchPage';
import { SettingsPage } from './pages/SettingsPage';
import { AddChannelPage } from './pages/AddChannelPage';
import { AppImagesPage } from './pages/AppImagesPage';
import { ThemesPage } from './pages/ThemesPage';
import { LoginPage } from './pages/LoginPage';
import { IntroScreen } from './components/intro/IntroScreen';
import { useRemoteControl } from './hooks/useRemoteControl';
import { ChannelDial } from './components/tv/ChannelDial';
import { ChannelOSD } from './components/tv/ChannelOSD';
import { TVHelpBar } from './components/tv/TVHelpBar';
import { CastStatusBar } from './components/cast/CastStatusBar';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RemoteControlManager = () => {
  useRemoteControl();
  return null;
};

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isPlayer = location.pathname.startsWith('/player');
  const isLogin = location.pathname === '/login';
  const { isTV } = useTVStore();

  if (isPlayer || isLogin) return <>{children}</>;

  return (
    <div className={`min-h-screen bg-bg-primary text-text-primary lg:flex ${isTV ? 'tv-mode' : ''}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <CastStatusBar />
        <Header className="lg:hidden" />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
        {!isTV && <BottomNav />}
      </div>
    </div>
  );
};

export default function App() {
  const { loadPlaylist } = useStore();
  const { setTVMode, isTV } = useTVStore();
  const themeStore = useThemeStore();
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem('intro_seen');
  });

  useEffect(() => {
    const isTVDevice = detectSmartTV();
    setTVMode(isTVDevice);
    loadPlaylist();
  }, [setTVMode, loadPlaylist]);

  if (showIntro) {
    return (
      <IntroScreen
        onComplete={() => {
          sessionStorage.setItem('intro_seen', 'true');
          setShowIntro(false);
        }}
      />
    );
  }

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <RemoteControlManager />
        <MainLayout>
          {isTV && (
            <>
              <ChannelDial />
              <ChannelOSD />
              <TVHelpBar />
            </>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/player/:id" element={<PlayerPage />} />
            <Route path="/buscar" element={<SearchPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/favoritos" element={<div className="p-8"><h2 className="section-title mb-6">Meus Favoritos</h2><p className="text-text-secondary">Seus canais favoritos aparecerão aqui.</p></div>} />
            <Route path="/historico" element={<div className="p-8"><h2 className="section-title mb-6">Meu Histórico</h2><p className="text-text-secondary">Últimos canais assistidos.</p></div>} />
            
            {/* Rotas Protegidas */}
            <Route path="/configuracoes" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
            <Route path="/configuracoes/adicionar" element={<ProtectedRoute><AddChannelPage /></ProtectedRoute>} />
            <Route path="/configuracoes/imagens" element={<ProtectedRoute><AppImagesPage /></ProtectedRoute>} />
            <Route path="/configuracoes/temas" element={<ProtectedRoute><ThemesPage /></ProtectedRoute>} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainLayout>
      </Router>
    </AuthProvider>
  );
}
