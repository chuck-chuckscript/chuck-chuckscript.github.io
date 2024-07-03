import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  base: './',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@components': path.resolve(__dirname, 'src/components'),
    }
  }
})
