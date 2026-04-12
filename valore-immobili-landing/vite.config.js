import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const valutazioneHtmlRewrites = {
  '/valutazione': '/valutazione/index.html',
  '/valutazione/': '/valutazione/index.html',
  '/valutazione/step-1': '/valutazione/step-1.html',
  '/valutazione/step-2': '/valutazione/step-2.html',
  '/valutazione/step-2c': '/valutazione/step-2c.html',
  '/valutazione/step-3': '/valutazione/step-3.html',
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'valutazione-html-rewrites',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const path = req.url?.split('?')[0] ?? ''
          const target = valutazioneHtmlRewrites[path]
          if (target) {
            req.url = target + (req.url?.includes('?') ? '?' + req.url.split('?')[1] : '')
          }
          next()
        })
      },
    },
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.js'],
    include: ['src/**/*.test.{jsx,js}'],
  },
})
