import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    host: true, // Permet d'être accessible depuis le réseau
  },
  resolve: {
    alias: {
      '@': './src', // Alias pour simplifier les imports
    },
  },
})
