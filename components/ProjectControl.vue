<template>
	<div class="project-control">
		<a :href="location">
			<ion-icon :name="icon" />
		</a>
	</div>
</template>

<script>

	export default {
		name: "ProjectControl",
		props: {
			icon: {
				type: String,
				required: true
			},
			location: {
				type: String,
				required: true
			}
		}
	};

</script>

<style scoped lang="scss">

    .project-control {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
    }

    ion-icon {
        font-size: 25px;
		cursor: pointer;
    }

    @media screen and (max-width: 1050px) {

        ion-icon {
            font-size: 15px;
        }

    }

</style>
