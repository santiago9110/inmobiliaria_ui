
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // La configuración de PostCSS se gestiona en postcss.config.js
});
