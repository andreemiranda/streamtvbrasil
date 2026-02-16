
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  GoogleAuthProvider
} from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Monitorar estado de autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      
      // Salvar dados básicos do usuário no localStorage para persistência rápida
      if (user) {
        localStorage.setItem('streamtv_user', JSON.stringify({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        }));
      } else {
        localStorage.removeItem('streamtv_user');
      }
    });

    return () => unsubscribe();
  }, []);

  // Login com Google
  const signInWithGoogle = async () => {
    try {
      setError(null);
      setLoading(true);
      
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Login bem-sucedido:', result.user);
      
    } catch (err: any) {
      console.error('Erro no login:', err);
      
      let errorMessage = 'Erro ao fazer login';
      
      switch (err.code) {
        case 'auth/popup-closed-by-user':
          errorMessage = 'Login cancelado pelo usuário';
          break;
        case 'auth/popup-blocked':
          errorMessage = 'Popup bloqueado. Permita popups para este site.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Erro de conexão. Verifique sua internet.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Muitas tentativas. Aguarde um momento.';
          break;
        default:
          errorMessage = err.message || 'Erro desconhecido ao fazer login';
      }
      
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const signOut = async () => {
    try {
      setError(null);
      await firebaseSignOut(auth);
      console.log('Logout bem-sucedido');
    } catch (err: any) {
      console.error('Erro no logout:', err);
      setError('Erro ao fazer logout');
      throw err;
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    isAuthenticated: !!user,
    signInWithGoogle,
    signOut,
    error
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
