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
		link: [],
		script: [
			{ src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" }
		]
	},
	css: [
		"~layouts/global.scss"
	],
	plugins: [],
	components: true,
	buildModules: [],
	modules: [
		"@nuxtjs/axios"
	],
	build: {
		babel: {
			plugins: [
				[ "@babel/plugin-proposal-private-methods", { loose: true } ],
				[ "@babel/plugin-proposal-private-property-in-object", { loose: true } ]
			]
		}
	}
};
