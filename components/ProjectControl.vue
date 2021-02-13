<template>
    <div class="project-control">
        <a :href="location">
            <ion-icon :name="icon"></ion-icon>
        </a>
    </div>
</template>

<script>
    
    export default {
        name: "ProjectControl",
        props: [ "icon", "location" ],
        methods: {
            openLink () {
                location.href = this.location;
            }
        }
    }

</script>

<style scoped>

    .project-control {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
    }

    ion-icon {
        font-size: 25px;
    }

    ion-icon:hover {
        cursor: pointer;
    }

</style>