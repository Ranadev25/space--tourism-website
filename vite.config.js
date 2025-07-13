// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        crew: resolve(__dirname, 'pages/crew.html'),
        destination: resolve(__dirname, 'pages/destination.html'),
        technology: resolve(__dirname, 'pages/technology.html'),
      },
    },
  },
});