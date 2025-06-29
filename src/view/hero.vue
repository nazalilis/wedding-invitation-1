<script setup>
	import counter from "../components/countdown.vue";
	import time from "../core/config.vue";
</script>

<template>
	<div class="hero hero-section min-h-screen">
		<div class="hero-overlay backdrop-grayscale-100"></div>
		<div class="hero-content text-neutral-content text-center">
			<div class="max-w-5xl">
				<counter
					:year="time.waktuRes.waktuResepsi.tahun"
					:month="time.waktuRes.waktuResepsi.bulan - 1"
					:date="time.waktuRes.waktuResepsi.tanggal"
					:hour="time.waktuRes.waktuResepsi.jam"
					:minute="time.waktuRes.waktuResepsi.menit"
					:second="time.waktuRes.detik"
					:milisecond="time.waktuRes.milidetik" />
				<a href="#home" class="btn btn-outline btn-secondary">Lihat Undangan</a>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
