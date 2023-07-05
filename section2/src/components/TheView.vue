<template>
	<main class="container py-4">
		<div class="container text-center">
			<div class="row g-3">
				<div class="col col-4"><app-card /></div>
				<div class="col col-4"><AppCard /></div>
				<div class="col col-4"><app-card /></div>
				<div class="col col-4"><AppCard /></div>
				<div class="col col-4"><app-card /></div>
				<div class="col col-4"><AppCard /></div>
			</div>
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
export default {
	components: {
		AppCard,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
