
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, Auth } from 'firebase/auth';

/**
 * Nota: Utilizamos uma estratégia híbrida para acessar as variáveis de ambiente.
 * Em ambientes Vite/Netlify, o padrão é import.meta.env.
 */
const env = (import.meta as any).env || (typeof process !== 'undefined' ? process.env : {});

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID
};

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let googleProvider: GoogleAuthProvider | undefined;

// Inicialização segura para evitar que erros de credenciais travem o app
if (firebaseConfig.apiKey && firebaseConfig.apiKey !== 'undefined') {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({
      prompt: 'select_account'
    });
    console.log('✅ Firebase inicializado (opcional)');
  } catch (error) {
    console.warn('⚠️ Falha ao inicializar Firebase (configurações inválidas):', error);
  }
} else {
  console.log('ℹ️ Firebase não configurado. Utilizando Google OAuth Direto.');
}

export { auth, googleProvider };
export default app;
