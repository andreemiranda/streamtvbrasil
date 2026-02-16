
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Shield, AlertCircle, Loader2, ArrowLeft } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInWithGoogle, isAuthenticated, loading, error } = useAuth();

  // Pegar a página de onde veio (para redirecionar depois)
  const from = (location.state as any)?.from?.pathname || '/configuracoes';

  // Se já autenticado, redireciona
  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary px-4">
      <div className="max-w-md w-full animate-in fade-in zoom-in duration-500">
        <div className="bg-bg-card rounded-[32px] p-8 md:p-12 shadow-2xl border border-white/5 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-primary/20 blur-[80px] rounded-full" />
          
          <div className="relative z-10">
            {/* Security Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-accent-primary/10 rounded-[24px] flex items-center justify-center border border-accent-primary/20 shadow-xl shadow-accent-primary/5">
                <Shield className="text-accent-primary" size={48} strokeWidth={2.5} />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-title font-black text-center mb-3">Acesso Restrito</h1>
            <p className="text-text-secondary text-center mb-10 text-sm font-medium leading-relaxed">
              Esta área contém configurações críticas do sistema. Faça login para continuar.
            </p>

            {/* Error Message */}
            {error && (
              <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start gap-3 animate-in slide-in-from-top-2">
                <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-xs text-red-500 font-black uppercase tracking-widest">Erro de Acesso</p>
                  <p className="text-xs text-red-400 mt-1 font-bold">{error}</p>
                </div>
              </div>
            )}

            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full bg-white hover:bg-gray-100 text-gray-900 font-black py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-4 shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  <span>AUTENTICANDO...</span>
                </>
              ) : (
                <>
                  <svg width="24" height="24" viewBox="0 0 24 24" className="group-hover:rotate-12 transition-transform">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>CONTINUAR COM GOOGLE</span>
                </>
              )}
            </button>

            {/* Why Login Info */}
            <div className="mt-10 p-5 bg-bg-secondary rounded-2xl border border-white/5 group hover:border-accent-primary/20 transition-colors">
              <div className="flex gap-3">
                <Shield className="text-accent-primary shrink-0" size={18} />
                <p className="text-[11px] text-text-secondary leading-relaxed font-medium">
                  Utilizamos autenticação segura do Google para proteger sua lista de canais e configurações personalizadas contra modificações não autorizadas.
                </p>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-8 text-center">
              <button
                onClick={() => navigate('/')}
                className="text-text-tertiary hover:text-white transition-colors text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 mx-auto"
              >
                <ArrowLeft size={14} /> Voltar para o Início
              </button>
            </div>
          </div>
        </div>
        
        <p className="text-center text-[10px] text-text-tertiary mt-8 font-bold uppercase tracking-[0.2em]">
          Powered by Google Firebase Auth
        </p>
      </div>
    </div>
  );
};
