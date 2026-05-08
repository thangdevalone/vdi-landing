// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'M-VDI - Giải pháp máy tính ảo',
      meta: [
        { name: 'description', content: 'Giải pháp chuyển đổi số và máy tính ảo an toàn, linh hoạt M-VDI' }
      ]
    }
  },
  vite: {
    server: {
      allowedHosts: ['thang3000.ermis.network', 'clouddesktop.vn']
    }
  },
  nitro: {
    preset: 'cloudflare-pages'
  }
})