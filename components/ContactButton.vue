<template>
	<a class="contact-anchor" :href="url">
		<inline-svg
			class="contact-icon"
			:src="iconUrl"
		/>
	</a>
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
			},
			url: {
				type: String,
				default: ""
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

	.contact-anchor,
	.contact-icon {
		width: auto;
		height: 100%;
	}

	.contact-icon {
		color: #FFF;
	}

</style>