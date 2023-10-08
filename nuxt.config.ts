// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  // alias: {
  //   "class-validator": "class-validator/cjs/index.js",
  // },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  css: ["@/assets/css/custom.css", "@/assets/css/theme.css"],
});
