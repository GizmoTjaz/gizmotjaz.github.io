<template>
    <div class="project-card">
        <div class="project-details">
            <h2 class="project-title">{{ project.name }}</h2>
            <p>{{ project.description }}</p>
        </div>
        <div class="project-languages-container">
            <div
                class="project-languages"
                v-for="(language, index) of project.languages"
                :key="index"
            >
                <ProjectLanguage :language="language" />
            </div>
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
    import ProjectControl from "../components/ProjectControl";

    export default {
        name: "ProjectCard",
        props: [ "project" ],
        data () {
            return {
                isOpen: false
            }
        },
        components: {
            ProjectControl
        },
        methods: {
            dropdownProject () {
                this.isOpen = !this.isOpen;
            }
        }
    }

</script>

<style scoped>

    .project-card {
        position: relative;
        background-color: #222;
        background: linear-gradient(180deg, rgba(34,34,34,1) 80%, rgba(0,0,0,1) 200%);
        background-repeat: no-repeat;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    .project-details * {
        text-align: left;
    }

    .project-details {
        padding-left: 15px;
    }

    .project-title {
        margin-top: 15px;
    }

    .project-languages-container {
        position: absolute;
        right: 0;
        top: 0;
        padding-right: 10px;
        padding-top: 15px;
    }

    .project-languages {
        display: inline-flex;
        flex-direction: row;
    }

    .project-languages * {
        margin-left: 3px;
    }

    .project-controls {
        position: absolute;
        right: 0;
        bottom: 0;
        padding-right: 10px;
        padding-bottom: 10px;
    }

</style>