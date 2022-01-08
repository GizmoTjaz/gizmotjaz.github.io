<template>
	<div class="app-container">
		<img
			v-if="profilePicture"
			class="profile-picture"
			:src="profilePicture"
			alt="My GitHub profile picture"
		>
		<h1>Personal Projects</h1>
		<div
			v-for="(project, index) in personalProjects"
			:key="index"
			class="project-container"
		>
			<ProjectCard :project="project" />
		</div>
		<h1>Gizmo Projects</h1>
		<div
			v-for="(project, index) in gizmoProjects"
			:key="index"
			class="project-container"
		>
			<ProjectCard :project="project" />
		</div>
	</div>
</template>

<script>

	// Components
	import ProjectCard from "@/components/ProjectCard.vue";

	// Variables
	import projects from "@/assets/data/projects.json";

	export default {
		name: "Index",
		components: {
			ProjectCard
		},
		data () {
			return {
				profilePicture: null
			};
		},
		computed: {
			personalProjects: () => projects.personalProjects,
			gizmoProjects: () => projects.gizmoProjects
		},
		async mounted () {

			const data = await (fetch("https://api.github.com/users/GizmoTjaz").then(response => response.json()));

			this.profilePicture = data.avatar_url;
		}
	};

</script>

<style scoped lang="scss">

	.app-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.profile-picture {
		width: auto;
		height: 330px;
		border-radius: 50%;
		margin-top: 2rem;
	}

	.project-container {
		width: 40%;
		display: flex;
		flex-direction: column;
	}

	@media screen and (max-width: 1950px) {

		.project-container {
			width: 60%;
		}

	}

	@media screen and (max-width: 1300px) {

		.profile-picture {
			height: 220px
		}

		.project-container {
			width: 70%;
		}

	}

	@media screen and (max-width: 1050px) {

		.profile-picture {
			height: 150px
		}

		.project-container {
			width: 95%;
		}

	}

</style>
