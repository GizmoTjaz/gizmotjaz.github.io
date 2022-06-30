<template>
	<div>
		<section v-if="name && avatarUrl">
			<ProfileAvatar :src="avatarUrl" />
			<h1>{{ name }}</h1>
		</section>
	</div>
</template>

<script lang="ts">

	// Modules
	import { defineComponent } from "vue";

	// Local Components
	import ProfileAvatar from "@components/ProfileAvatar.vue";

	// Types
	interface GitHubResponse {
		name: string;
		avatar_url: string;
	}

	export default defineComponent({
		name: "App",
		components: {
			ProfileAvatar
		},
		data () {
			return {
				name: null as string | null,
				avatarUrl: null as string | null
			};
		},
		async mounted () {

			const res = await $fetch<GitHubResponse>(`https://api.github.com/users/${$nuxt.$config.public.GITHUB_USERNAME}`);

			this.name = res.name;
			this.avatarUrl = res.avatar_url;
		}
	});

</script>