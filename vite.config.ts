import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { alias } from './config/paths';

export default defineConfig({
  plugins: [react()],
  publicDir: './public',
  preview: {
    port: 3000
  },
  server: {
    port: 3000
  },
  base: "/TasksManager/",
  resolve: { alias }
})
