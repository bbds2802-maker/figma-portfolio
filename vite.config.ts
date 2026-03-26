import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Plugin to handle figma:asset/ virtual imports - maps to {base}images/ in public folder
function figmaAssetsPlugin() {
  let base = '/'
  return {
    name: 'figma-assets',
    configResolved(config: { base: string }) {
      base = config.base
    },
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        return '\0' + id
      }
    },
    load(id: string) {
      if (id.startsWith('\0figma:asset/')) {
        const filename = id.replace('\0figma:asset/', '')
        return `export default "${base}images/${filename}"`
      }
    }
  }
}

export default defineConfig({
  base: '/figma-portfolio/',
  plugins: [
    react(),
    tailwindcss(),
    figmaAssetsPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
