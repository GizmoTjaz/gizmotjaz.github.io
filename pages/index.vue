<template>
	<div id="container">
		<div v-if="profilePicture">
			<img
				id="profile-picture"
				:src="profilePicture"
				alt="My GitHub profile picture"
			>
		</div>
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
	import ProjectCard from "../components/ProjectCard.vue";

	// Variables
	import projects from "../assets/data/projects.json";

	export default {
		name: "Index",
		components: {
			ProjectCard
		},
		layout: "default",
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
			const pfp = await this.$axios.$get("https://api.github.com/users/GizmoTjaz");
			this.profilePicture = pfp.avatar_url;
		}
	};

</script>

<style scoped lang="scss">

	#container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#profile-picture {
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

		#profile-picture {
			height: 220px
		}

		.project-container {
			width: 70%;
		}

	}

	@media screen and (max-width: 1050px) {

		#profile-picture {
			height: 150px
		}

		.project-container {
			width: 95%;
		}

	}

</style>
