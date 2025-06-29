<script setup>
	import menuList from "./menu-list.vue";
	import themeChange from "./themeController.vue";
</script>

<template>
	<!-- Navbar -->
	<div class="sticky top-0 bg-base backdrop-blur-lg">
		<div class="navbar container mx-auto w-full">
			<a href="#" class="mx-2 flex-1 pb-2 pt-4 px-2 text-5xl font-sacramento">Khode's Wedding</a>
			<div class="hidden flex-none sm:block">
				<ul class="menu menu-horizontal text-base-content">
					<menuList />
				</ul>
			</div>
			<themeChange />
			<div class="flex-none sm:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</label>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
