<template>
	<div class="container py-4">
		{{ msg }}
		<br />
		{{ message }}
		<input v-model="message" type="text" />
		<button @click="sayHello">Click</button>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
		<template v-if="child">{{ child.message }}</template>
		<hr />
		<MyButton class="parent-class"></MyButton>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefsChild from '@/components/setup/TemplateRefsChild.vue';
import MyButton from '@/components/setup/MyButton.vue';
import axios from 'axios';

const msg = 'Hello World';
const message = ref('');
const child = ref(null);

const sayHello = () => {
	alert('Hello World!');
};
defineExpose({ msg });
const response = await axios(
	'https://dummy.restapiexample.com/api/v1/employee/1',
);
console.log('response: ', response);
// async function callApi() {
// 	await axios('https://dummy.restapiexample.com/api/v1/employee/1').then(
// 		response => {
// 			console.log('response: ', response);
// 		},
// 	);
// }
callApi();
</script>

<style lang="scss" scoped></style>
