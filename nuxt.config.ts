// Modules
import { defineNuxtConfig } from "nuxt";
import eslintPlugin from "vite-plugin-eslint";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	typescript: {
		strict: true
	},
	vite: {
		plugins: [
			eslintPlugin()
		]
	},
	alias: {
		"@components": "/components"
	},
	runtimeConfig: {
		public: {
			GITHUB_USERNAME: process.env.GITHUB_USERNAME
		}
	}
});
