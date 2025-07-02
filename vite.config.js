import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: 'nn11.mdoy',
  build: {
    outDir: 'docs',
  },
  test: {
    environment: 'jsdom',
    exclude: ['e2e/*', 'node_modules/**/*'], // Исключение тестов из node_modules
    deps: {
      inline: ['vue'],
    },
  },
});