<template>
  <div id="container">
    <div v-if="profilePicture">
      <img id="profile-picture" :src="profilePicture" alt="My GitHub profile picture">
    </div>
    <h1>Personal Projects</h1>
    <div class="project-container" v-for="(project, index) in personalProjects" :key="index">
      <ProjectCard :project="project" />
    </div>
    <h1>Gizmo Projects</h1>
    <div class="project-container" v-for="(project, index) in gizmoProjects" :key="index">
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
        profilePicture: null
      };
    },
    computed: {
      personalProjects: () => config.personalProjects,
      gizmoProjects: () => config.gizmoProjects
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

  .project-container {
    width: 70%;
    display: flex;
    flex-direction: column;
  }

  #profile-picture {
    width: 330px;
    height: 330px;
    border-radius: 100%;
    margin-top: 20px;
  }

  @media screen and (max-width: 1050px) {
    
    #profile-picture {
      width: 150px;
      height: 150px
    }

    #project-container {
      width: 95%;
    }

  }

</style>