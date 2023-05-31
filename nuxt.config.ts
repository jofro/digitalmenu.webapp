// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     modules: [
        '@pinia/nuxt'
     ],
     postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
     }
})
