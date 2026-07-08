import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

const src = (p) => path.resolve(__dirname, 'src', p);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: src('components'),
      views: src('views'),
      ui: src('ui'),
      meta: src('meta'),
      data: src('data'),
      utils: src('utils'),
      theme: src('theme'),
    },
  },
  server: {
    port: 7700,
    open: true,
    proxy: {
      '/api': 'http://localhost:19362',
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,
  },
});
