<template>
	<img
		class="profile-avatar"
		:src="url"
		alt="Profile picture"
	>
</template>

<script lang="ts">

	// Modules
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "ProfileAvatar",
		props: {
			url: {
				type: String,
				required: true
			}
		}
	});

</script>

<style lang="scss" scoped>

	.profile-avatar {
		width: 200px;
		height: 200px;
		border-radius: 50%;
	}

</style>