import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const BUNDLE_NAME = env.BUNDLE_NAME || 'bundle'

  return {
    plugins: [
      react(),
    ],
    
    resolve: {
      alias: [
        { find: '@', replacement: fileURLToPath(new URL('src', import.meta.url)) },
      ],
    },

    build: {
      minify: true,

      rollupOptions: {
        input: {
          [BUNDLE_NAME]: 'src/index.jsx'
        },
      }
    }
  }
})
