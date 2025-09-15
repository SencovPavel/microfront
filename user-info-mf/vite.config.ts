import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Добавляем базовый путь для корректной работы vite preview
  plugins: [
    react(),
    federation({
      name: 'userInfoMf',
      filename: 'remoteEntry.js',
      exposes: {
        './UserInfo': './src/UserInfo.tsx',
      },
      shared: ['react', 'react-dom', 'mobx', 'mobx-react-lite', 'styled-components'],
    }),
  ],
  build: {
    assetsDir: '',
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
      },
    },
  },
  server: {
    port: 3001,
  },
})
