<template>
    <div class="project-card">
        <div class="project-details">
			<div class="project-info">
				<img v-if="project.logo" :src="project.logo" class="project-logo">
            	<h2 class="project-title">{{ project.name }}</h2>
			</div>
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

	.project-info {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-content: center;
	}

    .project-title {
        margin-top: 15px;
		margin-bottom: 5px;
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

    .project-controls {
        position: absolute;
        right: 0;
        bottom: 0;
        padding-right: 10px;
        padding-bottom: 10px;
    }

	.project-logo {
		width: auto;
		height: 29px;
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