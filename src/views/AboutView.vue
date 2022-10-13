<template>
	<h2>aboutView</h2>
	<p>{{ $route.path }}</p>
	<button class="btn btn-primary" @click="$router.push('/')">
		Home으로 이동
	</button>
	<h2>Store</h2>
	<p>counter: {{ counter }}</p>
	<p>counterRef: {{ counter }}</p>
	<p>doubleCount : {{ doubleCount }}</p>
	<p>doubleCountPlusOne : {{ doubleCountPlusOne }}</p>
	<button @click="increment()">Click -</button>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const router = useRoute();
console.log('router.path:', router.path);

const store = useCounterStore();
const { counter, doubleCount, doubleCountPlusOne } = storeToRefs(store);
const { increment } = store;
counter.value = 3; // pinia에서는 state를 바로 변경할 수 있다.
// increment();
// increment();
// increment();
</script>

<style lang="scss" scoped></style>
