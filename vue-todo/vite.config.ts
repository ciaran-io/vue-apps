import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({reactivityTransform: true}),
    Components({
      dts: true,
      resolvers: [
        IconsResolver(
          { prefix: 'icon' }
        )
      ],
    }),
    Icons({
      // experimental
      autoInstall: true,
    }),
    AutoImport({
      imports: ['vue','vue-router', 'pinia',
        { '@/stores/todos': ['useTodoStore'] }],
      dts: true, // or a custom path
      eslintrc: {
        enabled: true, // <-- this
      },
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
