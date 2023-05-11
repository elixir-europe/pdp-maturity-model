// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
    target: 'static',
    buildModules: [
    '@nuxt/image',
    ],
    ssr: false,
    app: {
        baseURL: '/fosp-maturity-model/',
    },
    css: ['vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',],
    build: {
        transpile: ['vuetify', '@pinia/nuxt'],
    },
    hooks: {
        'vite:extendConfig': (config) => {
            config.plugins.push(
                vuetify({
                    styles: { configFile: resolve('./settings.scss') },
                })
            )
        }
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    modules: [[
        '@pinia/nuxt',
        {
            autoImports: ['defineStore', 'acceptHMRUpdate'],
        },
    ],
    [
        '@nuxt/content'
      ]
    ],
  components: [{
    path: './components',
    global: true
    }],
    imports: {
        dirs: ['stores'],
    },
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
})
