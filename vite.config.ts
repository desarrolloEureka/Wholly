import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // abre automáticamente el navegador
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
