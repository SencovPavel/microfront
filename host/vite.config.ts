import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        userInfoMf: 'http://localhost:3001/remoteEntry.js',
        achievementsListMf: 'http://localhost:3002/remoteEntry.js',
        leaderboardMf: 'http://localhost:3003/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'mobx', 'mobx-react-lite', 'styled-components'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3000,
  },
})
