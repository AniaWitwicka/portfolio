import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { baseCompile } from '@vue/compiler-core'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
