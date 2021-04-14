import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {minifyHtml} from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    vue(),
    minifyHtml()
  ],
  server: {
    port: 8080
  },
  build: {
    outDir: 'docs'
  },
  base: './'
});