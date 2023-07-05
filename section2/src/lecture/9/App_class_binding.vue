<template>
	<div>
		<div
			class="text"
			:class="[isActive ? 'active-class' : 'class', errorClass, classObject]"
		>
			텍스트입니다.
		</div>
		<button v-on:click="toggle">toggle</button>
		<button v-on:click="toggleError">toggleError</button>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);
		// const classObject = reactive({
		// 	active: true,
		// 	'text-danger': true,
		// });

		// computed로 구현가능
		const classObject = computed(() => {
			return {
				active: true && true,
				'text-danger': true && true,
				'text-blue': true,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('error');

		const toggle = () => {
			isActive.value = !isActive.value;
		};
		const toggleError = () => {
			hasError.value = !hasError.value;
		};
		return {
			isActive,
			hasError,
			classObject,
			activeClass,
			errorClass,
			toggle,
			toggleError,
		};
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
</style>
