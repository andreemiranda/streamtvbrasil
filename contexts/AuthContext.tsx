
import React, { createContext, useContext, useState, useEffect } from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

interface UserProfile {
  email: string;
  displayName: string;
  photoURL: string;
  uid: string;
}

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  isAuthenticated: boolean;
  signInWithGoogle: () => void;
  signOut: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

const CLIENT_ID = "287722530264-aoh6sge31ooh5r6n8d0ihuhvppk4eofk.apps.googleusercontent.com";

/**
 * Componente interno que contém a lógica de login.
 * Deve obrigatoriamente ser filho de GoogleOAuthProvider.
 */
const AuthLogicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Carregar usuário do localStorage ao iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem('streamtv_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (err) {
        localStorage.removeItem('streamtv_user');
      }
    }
    setLoading(false);
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setLoading(true);
        setError(null);
        
        // Buscar informações do usuário usando o access token
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`
          }
        });
        
        if (!res.ok) throw new Error('Falha ao obter perfil do Google');
        
        const info = await res.json();
        
        const userData: UserProfile = {
          email: info.email,
          displayName: info.name,
          photoURL: info.picture,
          uid: info.sub // ID único do Google
        };
        
        setUser(userData);
        localStorage.setItem('streamtv_user', JSON.stringify(userData));
        localStorage.setItem('streamtv_token', tokenResponse.access_token);
        
        console.log('✅ Login bem-sucedido:', userData.displayName);
      } catch (err: any) {
        setError(err.message || 'Erro ao processar login');
      } finally {
        setLoading(false);
      }
    },
    onError: () => {
      setError('O login do Google falhou ou foi cancelado');
      setLoading(false);
    }
  });

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('streamtv_user');
    localStorage.removeItem('streamtv_token');
    console.log('✅ Logout realizado');
  };

  const value: AuthContextType = {
    user,
    loading,
    isAuthenticated: !!user,
    signInWithGoogle: login,
    signOut,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Provedor principal que envolve o app com o contexto do Google OAuth.
 */
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <AuthLogicProvider>
        {children}
      </AuthLogicProvider>
    </GoogleOAuthProvider>
  );
};
