<script setup>
	import menuList from "./menu-list.vue";
	import navbar from "./navbar.vue";
	import sidebar from "./sidebar.vue";
	import sectionHome from "./s1Home.vue";
</script>

<template>
	<div class="drawer drawer-end">
		<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
		<div class="relative drawer-content flex flex-col bg-transparent">
			<navbar />
			<!-- Page content here -->
			<sectionHome />
		</div>
		<sidebar />
	</div>
</template>

<style scoped></style>
