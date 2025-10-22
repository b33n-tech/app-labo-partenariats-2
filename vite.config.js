import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Important : remplacer 'animateur-webapp' par le nom exact de ton repo GitHub
export default defineConfig({
  plugins: [react()],
  base: '/app-labo-partenariats-2/'
})
