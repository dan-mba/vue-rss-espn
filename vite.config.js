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
  base: './',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  }
});
