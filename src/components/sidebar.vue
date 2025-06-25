<script setup>
	import menuList from "./menu-list.vue";
</script>

<template>
	<div class="drawer-side">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu side-bar justify-center gap-4 bg-base-200 min-h-full w-80 p-4">
			<menuList />
		</ul>
	</div>
</template>

<style scoped></style>
