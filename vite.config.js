import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages: repo is served at https://<username>.github.io/Valentines_2026/
  base: '/Valentines_2026/'
});
