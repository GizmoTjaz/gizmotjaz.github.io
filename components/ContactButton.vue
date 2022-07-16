<template>
	<img
		class="contact-icon"
		:src="iconUrl"
		:alt="altText"
	>
</template>

<script lang="ts">

	// Modules
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "ContactButton",
		props: {
			service: {
				type: String,
				required: true
			}
		},
		computed: {
			iconUrl (): string {
				return `/icons/${this.service}.svg`;
			},
			altText (): string {
				return `${this.service} icon`;
			}
		}
	});

</script>

<style lang="scss" scoped>

	.contact-icon {
		color: #FFF;
	}

</style>