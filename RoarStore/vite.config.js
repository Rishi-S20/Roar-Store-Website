import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://github.com/Rishi-S20/Roar-Store-Website.git',
  plugins: [react()],
})
