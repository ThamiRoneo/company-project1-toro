import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    // Proxy the Instagram RSS feed so the browser fetch avoids CORS.
    proxy: {
      '/ig-feed': {
        target: 'https://rss-bridge.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ig-feed/, ''),
      },
    },
  },
})
