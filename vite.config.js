import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {createHtmlPlugin} from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin()
  ],
  server: {
    port: 8080
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: '/index.html',
    },
  },
  base: './',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  }
});
