import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Add the Node polyfills manually
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env': {}, // Needed for some packages
  },
  optimizeDeps: {
    include: ['buffer'], // Ensures buffer gets bundled
  },
  resolve: {
    alias: {
      buffer: 'buffer/', // Redirect buffer import to polyfill
    },
  },
})
