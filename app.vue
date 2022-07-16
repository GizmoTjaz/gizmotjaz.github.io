<template>
	<div class="page-container">
		<template v-if="name && avatarUrl">
			<ProfileCard :name="name" :avatar-url="avatarUrl" />
		</template>
	</div>
</template>

<script lang="ts">

	// Modules
	import { defineComponent } from "vue";

	// Local Components
	import ProfileCard from "@components/ProfileCard.vue";

	// Types
	interface GitHubResponse {
		name: string;
		avatar_url: string;
	}

	export default defineComponent({
		name: "App",
		components: {
			ProfileCard
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

</style>