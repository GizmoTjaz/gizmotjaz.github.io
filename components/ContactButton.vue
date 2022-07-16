<template>
	<inline-svg
		class="contact-icon"
		:src="iconUrl"
	/>
</template>

<script lang="ts">

	// Modules
	import { defineComponent } from "vue";

	// Components
	import InlineSvg from "vue-inline-svg";

	export default defineComponent({
		name: "ContactButton",
		components: {
			InlineSvg
		},
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
		width: 1rem;
		height: 1rem;
	}

</style>