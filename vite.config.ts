import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  resolve: {
    alias: {
      vue: '@vue/compat'
    }
  },
  plugins: [vue({
    template: {
      compilerOptions: {
        compatConfig: {
          MODE: 3
        }
      }
    }
  })],
})
