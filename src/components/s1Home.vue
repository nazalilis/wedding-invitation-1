<script setup></script>

<template>
	<section id="home" class="hero home-section min-h-screen py-20">
		<div class="hero-overlay bg-transparent"></div>
		<div class="container mx-auto">
			<div class="text-center p-2">
				<h2 class="font-sacramento text-pink-400 font-bold text-6xl">Acara Pernikahan</h2>
				<h3>Diselenggarakan pada 31 Februari 2026 di Gunungkidul, Yogyakarta</h3>
				<p>Olek karena itu, dengan segala hormat, kami bermaksud untuk mengundang Bapak/Ibu/Saudara/i, untuk hadir pada acara pernikahan kami</p>
			</div>
			<div class="couple grid grid-cols-1 md:grid-cols-2 pt-5">
				<div class="flex justify-center items-center gap-3 p-2">
					<div class="text-right">
						<h3 class="font-sacramento text-pink-400 text-4xl">Mr. Kho</h3>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem explicabo voluptate asperiores quis reiciendis saepe?</p>
						<p>
							Putra dari Bpk. XYZ <br />
							dan <br />
							Ibu. ABC
						</p>
					</div>
					<div class="avatar">
						<div class="w-24 h-24 rounded-full">
							<img :src="'/wedding-invitation-1/img/pria.webp'" />
						</div>
					</div>
				</div>
				<div class="flex justify-center items-center gap-3 p-2">
					<div class="avatar">
						<div class="w-24 h-24 rounded-full">
							<img :src="'/wedding-invitation-1/img/wanita.webp'" />
						</div>
					</div>
					<div class="text-left">
						<h3>Mrs. Des</h3>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem explicabo voluptate asperiores quis reiciendis saepe?</p>
						<p>
							Putri dari Bpk. ABC <br />
							dan <br />
							Ibu. XYZ
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
