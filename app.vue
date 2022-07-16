<template>
	<div class="page-container">
		<section v-if="name && avatarUrl" class="profile-container">
			<Head>
				<Title>{{ name }}</Title>
			</Head>
			<img
				class="profile-avatar"
				:src="avatarUrl"
				alt="Profile picture"
			>
			<div class="information-container">
				<h1 class="name-label">{{ name }}</h1>
				<section class="contact-container">
					<ContactButton service="github" :url="githubUrl" />
				</section>
			</div>
		</section>
	</div>
</template>

<script lang="ts">

	// Modules
	import { defineComponent } from "vue";

	// Local Components
	import ContactButton from "@components/ContactButton.vue";

	// Types
	interface GitHubResponse {
		name: string;
		avatar_url: string;
	}

	export default defineComponent({
		name: "App",
		components: {
			ContactButton
		},
		data () {
			return {
				name: null as string | null,
				avatarUrl: null as string | null
			};
		},
		computed: {
			githubUsername (): string {
				return $nuxt.$config.public.GITHUB_USERNAME;
			},
			githubUrl (): string {
				return `https://www.github.com/${this.githubUsername}`;
			}
		},
		async mounted () {

			const res = await $fetch<GitHubResponse>(`https://api.github.com/users/${this.githubUsername}`);

			this.name = res.name;
			this.avatarUrl = res.avatar_url;
		}
	});

</script>

<style lang="scss">

	@font-face {
		font-family: "Roboto";
		src: url("~/assets/fonts/Roboto-Regular.ttf") format("truetype");
		font-weight: normal;
		font-display: swap;
	}

	@font-face {
		font-family: "Roboto";
		src: url("~/assets/fonts/Roboto-Bold.ttf") format("truetype");
		font-weight: bold;
		font-display: swap;
	}

	body {
		background-color: #0d0d0d;
		font-family: Roboto;
	}

	h1 {
		color: #FFF;
	}

	.page-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.profile-container {

		display: flex;

		width: 600px;
		padding: 1.5em;
		background-color: #281d33;
		border-radius: 1em;
	}

	.profile-avatar {
		width: auto;
		height: 200px;
		border-radius: 50%;
	}

	.information-container {

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		flex: 1;
		padding-left: 2em;
	}

	.name-label {
		font-size: 4em;
		margin-top: 1rem;
		margin-bottom: 2rem;
	}

	.contact-container {

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		width: 100%;
		height: 2.5em;
	}

	@media only screen and (max-width: calc(600px + 2 * 1.5em + 1em)) {

		.profile-container {
			width: 90%;
		}

		.name-label {
			font-size: 3em;
			margin-bottom: 1rem;
		}

		.profile-avatar {
			height: 150px;
		}

		.contact-container {
			height: 2em;
		}

	}

</style>