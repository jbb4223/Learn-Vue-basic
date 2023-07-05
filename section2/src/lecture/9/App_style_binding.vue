<template>
	<div>
		<div :style="styleObject">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
			accusantium, adipisci aspernatur assumenda culpa delectus deleniti
			deserunt dignissimos eligendi est libero maiores, nisi non numquam
			pariatur repellat repellendus, sit voluptatibus!
		</div>
		<button v-on:click="fontSize--">-</button>
		<button v-on:click="fontSize++">+</button>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '13px',
		// });
		const fontSize = ref(13);
		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});
		return {
			fontSize,
			styleObject,
		};
	},
};
</script>

<style lang="scss" scoped></style>
