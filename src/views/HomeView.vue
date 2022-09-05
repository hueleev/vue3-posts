<template>
	<h2>home view</h2>
	<p>{{ $route }}</p>
	<p>{{ $router }}</p>
	<button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};
</script>

<style lang="scss" scoped></style>
