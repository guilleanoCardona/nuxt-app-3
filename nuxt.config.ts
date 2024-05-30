// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //devtools: { enabled: true },
  /* alias: {
    '@': '/<rootDir>/public',
  }, */
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: '/css/global.css'
        }
      ]
    }
  }
  /* css: [
    "@/assets/css/global.css"
  ] */
});
