import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 base: './',
 plugins: [react()],
 server: {
  watch: {
   ignored: ['**/~$*', '**/~WRL*.tmp']
  }
 },
 build: {
  outDir: 'dist',
  emptyOutDir: true,
  rollupOptions: {
   output: {
    entryFileNames: 'app.js',
    chunkFileNames: 'app.js',
    assetFileNames: 'app.[ext]'
   }
  }
 }
})
