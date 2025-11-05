import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// ✅ Agrega esto
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['animejs'],
  },
})
