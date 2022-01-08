<template>
	<div class="project-card">
		<div class="project-details">
			<div class="project-info">
				<img
					v-if="project.logo"
					class="project-logo"
					:src="project.logo"
					alt="Project logo"
				>
				<h2 class="project-title">{{ project.name }}</h2>
			</div>
			<p>{{ project.description }}</p>
		</div>
		<div class="project-languages-container">
			<ProjectLanguage
				v-for="(language, index) of project.languages"
				class="project-language"
				:key="index"
				:language="language"
			/>
		</div>
		<div class="project-controls">
			<ProjectControl
				icon="open-outline"
				:location="project.url"
			/>
		</div>
	</div>
</template>

<script>

	// Components
	import ProjectControl from "@/components/ProjectControl.vue";

	export default {
		name: "ProjectCard",
		components: {
			ProjectControl
		},
		props: {
			project: {
				type: Object,
				required: true
			}
		}
	};

</script>

<style scoped lang="scss">

	.project-card {
		position: relative;
		background-color: #222;
		background: linear-gradient(180deg, rgba(34,34,34,1) 80%, rgba(0,0,0,1) 200%);
		background-repeat: no-repeat;
		border-radius: .5rem;
		margin-bottom: .5rem;
	}

	.project-details {

		padding-left: 15px;

		* {
			text-align: left;
		}

		.project-info {
			margin-top: 15px;
			margin-bottom: 5px;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-content: center;
			align-items: center;

			.project-logo {
				width: auto;
				height: 29px;
				margin-right: 5px;
			}

			.project-title {
				margin-top: 0;
				margin-bottom: 0;
			}
		}
	}

	.project-languages-container {

		position: absolute;
		right: 0;
		top: 0;
		padding-right: 10px;
		padding-top: 15px;

		.project-language {
			display: inline-flex;
			flex-direction: row;
		}
	}

	.project-controls {
		position: absolute;
		right: 0;
		bottom: 0;
		padding-right: 10px;
		padding-bottom: 10px;
	}

	@media screen and (max-width: 1050px) {

		.project-title {
			font-size: 15px;
		}

		.project-logo {
			height: 15px;
		}

	}

</style>
