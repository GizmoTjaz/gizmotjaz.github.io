<template>
    <img
        :src="languageIcon"
        :alt="language"
        draggable="false"
        :class="language"
    >
</template>

<script>

    // Variables
    import config from "../assets/config.json";

    export default {
        name: "ProjectLanguage",
        props: [ "language" ],
        computed: {
            languageIcon () {
                return config.languages[this.language];
            }
        }
    }

</script>

<style scoped>

    img {
        width: 25px;
        height: 25px;
        border-radius: 5px;
        margin-left: 3px;
    }
    
    .electron {
        background-color: #EEE;
    }

    @media screen and (max-width: 1050px) {
        
        img {
            width: 15px;
            height: 15px;
            border-radius: 2px;
        }

    }

</style>