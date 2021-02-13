<template>
  <div id="container">
    <div v-if="profilePicture">
      <img id="profile-picture" :src="profilePicture" alt="My GitHub profile picture">
    </div>
    <h1>Projects</h1>
    <div id="project-container" v-for="(project, index) in projects" :key="index">
      <ProjectCard :project="project" />
    </div>
  </div>
</template>

<script>

  // Components
  import ProjectCard from "../components/ProjectCard";

  // Variables
  import config from "../assets/config.json";

  export default {
    name: "index",
    components: {
      ProjectCard
    },
    data () {
      return {
        projects: config.projects,
        profilePicture: null
      };
    },
    async mounted () {

      const pfp = await this.$axios.$get("https://api.github.com/users/GizmoTjaz");
      this.profilePicture = pfp.avatar_url;

    }
  }

</script>

<style scoped>

  #container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #project-container {
    width: 70%;
    display: flex;
    flex-direction: column;
  }

  #profile-picture {
    width: 360px;
    height: 360px;
    border-radius: 100%;
  }

</style>