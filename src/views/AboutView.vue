<template>
	<h2>aboutView</h2>
	<p>{{ $route.path }}</p>
	<button class="btn btn-primary" @click="$router.push('/')">
		Home으로 이동
	</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
console.log('router.path:', router.path);
</script>

<style lang="scss" scoped></style>
