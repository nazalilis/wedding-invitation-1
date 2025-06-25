<script setup>
	import menu from "./menu.vue";
	import navbar from "./navbar.vue";
</script>

<template>
	<div class="drawer drawer-end">
		<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col">
			<navbar />
			<!-- Page content here -->
			Content
		</div>
		<div class="drawer-side">
			<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
			<ul class="menu bg-base-200 min-h-full w-80 p-4">
				<menu />
			</ul>
		</div>
	</div>
</template>

<style scoped></style>
