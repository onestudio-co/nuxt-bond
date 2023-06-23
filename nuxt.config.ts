// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    runtimeConfig: {
        // Private config that is only available on the server
        apiSecret: process.env.BASE_URL || 'secret',
        // Config within public will be also exposed to the client
        public: {
            baseURL: process.env.API_SECRET || 'https://api.example.com/',
        },
    },
})
