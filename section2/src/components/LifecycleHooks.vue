<template>
	<div class="container py-4">
		<input ref="inputRef" type="text" value="hello world!" />
		<hr />
		<button @click="visible = !visible">Toggle Child</button>
		<LifecycleChild v-if="visible"></LifecycleChild>
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import LifecycleChild from '@/components/LifecycleChild.vue';
export default {
	components: {
		LifecycleChild,
	},
	// beforeCreate 와 create 의 기능을 setup으로 대체함
	setup() {
		// console.log('setup');
		const inputRef = ref(null);
		const message = ref('');
		const visible = ref(false);
		// onBeforeMount(() => {
		// 	console.log('onBeforeMount', inputRef.value);
		// });
		// onMounted(() => {
		// 	console.log('onMounted', inputRef.value.value);
		// });
		// onBeforeUpdate(() => {
		// 	console.log('onBeforeUpdate', message.value);
		// 	console.log(
		// 		'DOM Content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });
		// onUpdated(() => {
		// 	console.log('onUpdated', message.value);
		// 	console.log(
		// 		'DOM Content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });
		return { inputRef, message, visible };
	},
	// beforeCreate() {
	// 	console.log('beforeCreate');
	// 	console.log(this);
	// },
	// created() {
	// 	console.log('created');
	// 	console.log(this);
	// },
};
</script>

<style lang="scss" scoped></style>
