import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Para GitHub Pages usa base: '/novabot-conectanova/'
export default defineConfig({ plugins: [react()], base: './' })
