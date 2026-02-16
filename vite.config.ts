import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '');
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      },
    },
    optimizeDeps: {
      include: ['framer-motion'],
      exclude: ['motion-dom'] // Previne a tentativa do Vite de carregar motion-dom separadamente se existir no cache
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'ui-vendor': ['lucide-react', 'framer-motion'],
            'firebase-vendor': ['firebase/app', 'firebase/auth', '@react-oauth/google']
          }
        }
      },
      chunkSizeWarningLimit: 1000,
      commonjsOptions: {
        include: [/framer-motion/, /node_modules/]
      }
    },
    define: {
      'process.env.VITE_GOOGLE_CLIENT_ID': JSON.stringify(env.VITE_GOOGLE_CLIENT_ID)
    }
  };
});