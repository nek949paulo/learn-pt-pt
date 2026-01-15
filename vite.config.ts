import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Loads .env, .env.local, .env.production, etc.
  const env = loadEnv(mode, '.', '');

  /**
   * GitHub Pages tip:
   * - If you deploy to https://<user>.github.io/<repo>/ then you MUST set base to "/<repo>/".
   * - We read it from VITE_BASE so you don't have to edit this file every time.
   */
  const base = env.VITE_BASE || '/';

  return {
    base,
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      // Only needed if your app actually uses Gemini:
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      },
    },
  };
});
