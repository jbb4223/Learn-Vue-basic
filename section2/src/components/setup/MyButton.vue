<template>
	<div class="p-3 bg-danger">
		<button class="btn btn-primary" type="button" @click="$attrs">
			My Button {{ message }}
		</button>
		<!-- {{ $attrs }} -->
	</div>
</template>

<script>
export default {
	// 부모 컴포넌트에서 속성을 상속받지 않겠다.
	inheritAttrs: false,
};
</script>

<script setup>
import { ref } from 'vue';

const message = ref('message');
</script>

<style lang="scss" scoped></style>
