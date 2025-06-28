<script setup>
	import counter from "../components/countdown.vue";

	// export default {
	// 	components: {
	// 		Counter,
	// 	},
	// };
</script>

<template>
	<div class="hero hero-section min-h-screen">
		<div class="hero-overlay"></div>
		<div class="hero-content text-neutral-content text-center">
			<div class="max-w-xl">
				<counter :year="2026" :month="5" :date="28" :hour="15" :minute="50" :second="10" :milisecond="0" />
				<a href="#home" class="btn btn-outline btn-secondary">Lihat Undangan</a>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
