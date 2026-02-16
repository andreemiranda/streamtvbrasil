
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { useAuth } from '../contexts/AuthContext';
import { isAdmin } from '../config/admins';
import { Badge } from '../components/ui/Badge';
import { 
  Trash2, 
  Upload, 
  Link, 
  Check, 
  Database, 
  PlusCircle,
  Image as ImageIcon,
  ChevronRight,
  Palette,
  ShieldAlert,
  Lock
} from 'lucide-react';
import { parseM3U } from '../utils/m3uParser';
import { motion } from 'framer-motion';

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { channels, playlistUrl, setPlaylistUrl, loadPlaylist, addChannelsBatch, clearM3UChannels } = useStore();
  
  const [tempUrl, setTempUrl] = useState(playlistUrl);
  const [isSuccess, setIsSuccess] = useState(false);
  const [importStats, setImportStats] = useState<{ added: number, skipped: number, duplicates: number } | null>(null);

  // Verificação de privilégios
  const isUserAdmin = isAdmin(user?.email);

  if (!isUserAdmin) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
        <div className="w-24 h-24 bg-red-500/10 rounded-[32px] flex items-center justify-center text-red-500 border border-red-500/20 mb-8 shadow-2xl shadow-red-500/5">
          <ShieldAlert size={48} strokeWidth={2.5} />
        </div>
        <h2 className="text-3xl font-title font-black mb-4">Acesso Negado</h2>
        <p className="text-text-secondary max-w-md mx-auto mb-10 leading-relaxed font-medium">
          O seu e-mail (<span className="text-white font-bold">{user?.email}</span>) não possui permissão para gerenciar a produção deste sistema.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => navigate('/')}
            className="px-10 py-4 bg-bg-card border border-white/10 rounded-2xl font-black text-sm hover:bg-white/5 transition-all uppercase tracking-widest"
          >
            Voltar para Início
          </button>
          <button 
            className="px-10 py-4 bg-accent-primary text-bg-primary rounded-2xl font-black text-sm hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-xl shadow-accent-primary/20"
          >
            Solicitar Acesso
          </button>
        </div>
      </div>
    );
  }

  const m3uCount = channels.filter(c => c.source === 'm3u').length;

  const handleUpdateUrl = async () => {
    if (!tempUrl) return;
    setPlaylistUrl(tempUrl);
    await loadPlaylist(tempUrl);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 4000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const content = event.target?.result as string;
      try {
        const parsed = parseM3U(content).map(c => ({ ...c, source: 'm3u' as const }));
        const stats = addChannelsBatch(parsed);
        setImportStats(stats);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setImportStats(null);
        }, 8000);
      } catch (err) {
        alert('Erro ao processar arquivo M3U');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleClearAll = () => {
    if (confirm('Tem certeza que deseja apagar TODOS os canais da lista M3U?')) {
      clearM3UChannels();
    }
  };

  return (
    <div className="px-4 md:px-8 py-8 max-w-3xl mx-auto animate-in slide-in-from-right-4 duration-300 pb-32">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-4xl font-title font-black mb-1">Central Admin</h2>
          <div className="flex items-center gap-2 text-accent-primary">
            <Lock size={12} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Painel de Controle Protegido</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
           <Badge variant="green" className="py-1 px-3 mb-1">ADMINISTRADOR</Badge>
           <span className="text-[9px] text-text-tertiary font-bold">{user?.email}</span>
        </div>
      </div>
      
      <div className="space-y-6">
        {/* Quick Actions Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          <button 
            onClick={() => navigate('/configuracoes/adicionar')}
            className="flex items-center gap-4 bg-accent-primary/5 border border-accent-primary/10 p-6 rounded-[24px] hover:bg-accent-primary/10 transition-all text-left group"
          >
            <div className="w-14 h-14 bg-accent-primary rounded-2xl flex items-center justify-center shadow-xl shadow-accent-primary/20 group-hover:scale-110 transition-transform">
              <PlusCircle className="text-bg-primary" size={28} strokeWidth={2.5} />
            </div>
            <div>
              <h4 className="font-black text-accent-primary text-sm uppercase tracking-wider">Adicionar Canal</h4>
              <p className="text-[11px] text-text-tertiary mt-0.5 font-bold">Inserção manual de vídeos</p>
            </div>
            <ChevronRight className="ml-auto text-accent-primary/30" size={20} />
          </button>

          <button 
            onClick={() => navigate('/configuracoes/imagens')}
            className="flex items-center gap-4 bg-accent-blue/5 border border-accent-blue/10 p-6 rounded-[24px] hover:bg-accent-blue/10 transition-all text-left group"
          >
            <div className="w-14 h-14 bg-accent-blue rounded-2xl flex items-center justify-center shadow-xl shadow-accent-blue/20 group-hover:scale-110 transition-transform">
              <ImageIcon className="text-white" size={28} />
            </div>
            <div>
              <h4 className="font-black text-accent-blue text-sm uppercase tracking-wider">Imagens do App</h4>
              <p className="text-[11px] text-text-tertiary mt-0.5 font-bold">Logos e Thumbnails</p>
            </div>
            <ChevronRight className="ml-auto text-accent-blue/30" size={20} />
          </button>

          <button 
            onClick={() => navigate('/configuracoes/temas')}
            className="flex items-center gap-4 bg-accent-secondary/5 border border-accent-secondary/10 p-6 rounded-[24px] hover:bg-accent-secondary/10 transition-all text-left group md:col-span-2"
          >
            <div className="w-14 h-14 bg-accent-secondary rounded-2xl flex items-center justify-center shadow-xl shadow-accent-secondary/20 group-hover:scale-110 transition-transform">
              <Palette className="text-bg-primary" size={28} strokeWidth={2.5} />
            </div>
            <div>
              <h4 className="font-black text-accent-secondary text-sm uppercase tracking-wider">Estilos & Temas</h4>
              <p className="text-[11px] text-text-tertiary mt-0.5 font-bold">Personalização completa da interface visual do sistema</p>
            </div>
            <ChevronRight className="ml-auto text-accent-secondary/30" size={20} />
          </button>
        </div>

        {/* Playlist Section */}
        <div className="bg-bg-card rounded-[32px] p-8 border border-white/5 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] rotate-12">
            <Database size={120} />
          </div>

          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-accent-primary">
                <Database size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-widest">Banco M3U</h3>
                <p className="text-[10px] text-text-tertiary font-bold">Sincronização de listas remotas</p>
              </div>
            </div>
            <Badge variant="green" className="py-1 px-4">{m3uCount} CANAIS</Badge>
          </div>

          <div className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-tertiary flex items-center gap-2">
                <Link size={12} /> Sincronizar URL
              </label>
              <div className="flex gap-3">
                <input 
                  type="url"
                  value={tempUrl}
                  onChange={(e) => setTempUrl(e.target.value)}
                  placeholder="https://exemplo.com/lista.m3u"
                  className="flex-1 bg-bg-secondary border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary transition-all text-sm font-bold"
                />
                <button 
                  onClick={handleUpdateUrl}
                  className="bg-accent-primary text-bg-primary px-8 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.03] active:scale-[0.97] transition-all shadow-xl shadow-accent-primary/20"
                >
                  {isSuccess && !importStats ? <Check size={20} strokeWidth={3} /> : 'Processar'}
                </button>
              </div>
            </div>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
              <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.4em]"><span className="bg-bg-card px-6 text-text-tertiary">OU</span></div>
            </div>

            <div className="flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-[24px] p-10 hover:border-accent-primary/50 hover:bg-accent-primary/5 transition-all relative cursor-pointer group">
              <input type="file" accept=".m3u,.m3u8" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
              <div className="w-16 h-16 bg-bg-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Upload className="text-text-tertiary group-hover:text-accent-primary transition-colors" size={32} />
              </div>
              <p className="text-sm font-black uppercase tracking-widest">Subir Arquivo local</p>
              <p className="text-[10px] text-text-tertiary mt-2 font-bold">Formatos suportados: .m3u, .m3u8</p>
            </div>

            {importStats && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-bg-secondary border border-accent-primary/20 p-5 rounded-[24px] space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-accent-primary font-black text-[10px] uppercase tracking-widest">
                  <Check size={14} strokeWidth={3} /> Relatório de Importação
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-accent-primary/10 p-4 rounded-2xl text-center border border-accent-primary/10">
                    <p className="text-accent-primary font-black text-xl">{importStats.added}</p>
                    <p className="text-[8px] text-text-tertiary font-black uppercase tracking-tighter mt-1">Novos</p>
                  </div>
                  <div className="bg-accent-live/10 p-4 rounded-2xl text-center border border-accent-live/10">
                    <p className="text-accent-live font-black text-xl">{importStats.duplicates}</p>
                    <p className="text-[8px] text-text-tertiary font-black uppercase tracking-tighter mt-1">Duplicados</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl text-center border border-white/5">
                    <p className="text-white/60 font-black text-xl">{importStats.skipped}</p>
                    <p className="text-[8px] text-text-tertiary font-black uppercase tracking-tighter mt-1">Limitados</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-bg-card rounded-[32px] p-8 border border-red-500/10 shadow-xl overflow-hidden relative group">
           <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-[0.02] transition-opacity">
              <Trash2 size={100} />
           </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500">
               <Trash2 size={24} />
            </div>
            <div>
               <h3 className="text-xl font-black uppercase tracking-widest text-red-500">Zona de Perigo</h3>
               <p className="text-[10px] text-text-tertiary font-bold uppercase tracking-widest">Ações Irreversíveis</p>
            </div>
          </div>
          <button 
            onClick={handleClearAll}
            disabled={m3uCount === 0}
            className="w-full py-5 bg-red-500 text-white rounded-[20px] font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-red-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
          >
            REMOVER TODOS OS CANAIS DA GRADE
          </button>
          <p className="text-[9px] text-text-tertiary text-center mt-4 font-black uppercase tracking-widest">Cuidado: Esta ação irá limpar completamente o banco de dados M3U local.</p>
        </div>
      </div>
    </div>
  );
};
