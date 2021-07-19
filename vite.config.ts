import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import config from './parse.env'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path')
console.log(config)
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/common/style/common.scss";
          @import "src/common/style/variables.scss";
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      _c: resolve(__dirname, 'src/components'),
      _u: resolve(__dirname, 'src/utils'),
      _a: resolve(__dirname, 'src/api')
    }
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..', '/src']
    }
  }
})
