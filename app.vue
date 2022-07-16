<template>
	<div class="page-container">
		<section v-if="name && avatarUrl" class="profile-container">
			<Head>
				<Title>{{ name }}</Title>
			</Head>
			<ProfileAvatar :url="avatarUrl" />
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
	import ProfileAvatar from "@components/ProfileAvatar.vue";
	import ContactButton from "@components/ContactButton.vue";

	// Types
	interface GitHubResponse {
		name: string;
		avatar_url: string;
	}

	export default defineComponent({
		name: "App",
		components: {
			ProfileAvatar,
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

	body {
		background-color: #0d0d0d;
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
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 80%;
	}

	.information-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding-left: 2rem;
	}

	.name-label {
		font-size: 4rem;
	}

	.contact-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		height: 2.5em;
	}

</style>