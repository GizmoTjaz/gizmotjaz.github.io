export default defineNuxtConfig({
	target: "static",
	ssr: true,
	app: {
		head: {
			title: "GizmoTjaz",
			htmlAttrs: {
				lang: "en"
			},
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ hid: "description", name: "description", content: "Portfolio of my projects." }
			],
			link: [],
			script: [
				{ src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js", type: "module" }
			]
		},
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
