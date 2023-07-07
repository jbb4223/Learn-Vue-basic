<template>
	<div class="p-3 bg-danger">
		<!--		<button -->
		<!--      class="btn btn-primary" -->
		<!--      type="button" -->
		<!--      v-bind="$attrs"-->
		<!--    >-->
		<button class="btn btn-primary" type="button" @click="sayHello">
			My Button
		</button>
		<!-- {{ $attrs }} -->
	</div>
</template>

<script>
export default {
	// 부모 컴포넌트에서 속성을 상속받지 않겠다.
	// inheritAttrs: false,
	emits: ['click'],
	setup(props, { emit }) {
		// console.log('context.att , context.attrs.onClick);
		// context.attrs.onClick

		const sayHello = () => {
			emit('click');
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
