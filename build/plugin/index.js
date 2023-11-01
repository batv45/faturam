import vue from '@vitejs/plugin-vue'

/**
 * * unocss plugin, atomic css
 * https://github.com/antfu/unocss
 */
import Unocss from 'unocss/vite'

import VueDevTools from 'vite-plugin-vue-devtools'

// rollup packaging analysis plug-in
import visualizer from 'rollup-plugin-visualizer'
// compression
import viteCompression from 'vite-plugin-compression'

import { configHtmlPlugin } from './html'
import { configMockPlugin } from './mock'
import unplugin from './unplugin'

export function createVitePlugins(viteEnv, isBuild) {
  const plugins = [vue(), VueDevTools(), ...unplugin, configHtmlPlugin(viteEnv, isBuild), Unocss()]

  if (viteEnv?.VITE_USE_MOCK) {
    plugins.push(configMockPlugin(isBuild))
  }

  if (viteEnv.VITE_USE_COMPRESS) {
    plugins.push(viteCompression({ algorithm: viteEnv.VITE_COMPRESS_TYPE || 'gzip' }))
  }

  if (isBuild) {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    )
  }

  return plugins
}
