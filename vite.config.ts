import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      pages: '/src/pages/',
      modules: '/src/modules',
      assets: '/src/assets',
      UI: '/src/UI',
      components: '/src/components',
      context: '/src/context',
      utils: '/src/utils',
      types: '/src/types',
      styles: '/src/styles',
    },
  },
});
