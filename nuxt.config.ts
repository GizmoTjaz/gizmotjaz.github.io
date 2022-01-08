import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
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
		link: [],
		script: [
			{ src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js", type: "module" }
		]
	},
	css: [
		"@/styles/global.scss"
	],
	vue: {
		compilerOptions: {
			isCustomElement: tag => tag === "ion-icon"
		}
	}
})
