import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig } from 'vite';

interface ViteCustomConfig extends UserConfig {
  test?: {
    environment?: 'jsdom' | 'node' | 'happy-dom';
  };
}

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./setupVitest.ts']
  },
} as ViteCustomConfig);
