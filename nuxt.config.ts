
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    runtimeConfig: {
        apiSecret: process.env.API_SECRET,
        public: {
            baseURL: process.env.BASE_URL,
        },
    },
    css: ['@/assets/css/main.scss']
})
