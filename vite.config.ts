import { defineConfig } from 'vite'
import { cloudflare } from "@cloudflare/vite-plugin";
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react(), cloudflare({ viteEnvironment: { name: 'ssr' } })],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})
