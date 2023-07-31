
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
    css: ['@/assets/css/main.scss'],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            ]
        }
    }
})
