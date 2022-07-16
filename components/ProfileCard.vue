<template>
	<section class="profile-container">
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
</template>

<script lang="ts">

	// Modules
	import { defineComponent } from "vue";

	// Local Components
	import ContactButton from "@components/ContactButton.vue";

	export default defineComponent({
		name: "ProfileCard",
		components: {
			ContactButton
		},
		props: {
			name: {
				type: String,
				default: "Name"
			},
			avatarUrl: {
				type: String,
				default: ""
			}
		},
		computed: {
			githubUsername (): string {
				return $nuxt.$config.public.GITHUB_USERNAME;
			},
			githubUrl (): string {
				return `https://www.github.com/${this.githubUsername}`;
			}
		}
	});

</script>

<style lang="scss" scoped>

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