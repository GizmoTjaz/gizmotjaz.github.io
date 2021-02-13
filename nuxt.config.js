export default {
  target: "static",
  head: {
    title: "GizmoTjaz",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Portfolio of my greatest projects." }
    ],
    link: [
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" }
    ],
    script: [
      { src: "https://unpkg.com/ionicons@5.4.0/dist/ionicons.js" }
    ]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [],
  modules: [
    "@nuxtjs/axios"
  ],
  build: {}
}
