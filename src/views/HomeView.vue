<template>
	<h2>home view</h2>
	<!-- <p>{{ $route }}</p>
	<p>{{ $router }}</p> -->
	<button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
	<hr class="my-4" />
	<!-- <div class="row g-3">
		<div v-for="(item, index) in items" :key="index" class="col-4">
			<AppCard>{{ item }}</AppCard>
		</div>
	</div> -->
	<AppGrid :items="items" v-slot="{ item }" col-calss="col-3">
		<AppCard>{{ item }}</AppCard>
	</AppGrid>
	<hr class="my-4" />
	<!-- <h2>{{ person.name }}</h2>
	<button class="btn btn-primary" @click="person.say">click person</button> -->
	<h2>{{ position }}</h2>
	<h2>x: {{ x }}</h2>
	<h2>y: {{ y }}</h2>
</template>

<script>
export default {
	created() {
		// console.log(this.$person.name);
		// this.$person.say();
	},
};
</script>

<script setup>
import { useRouter } from 'vue-router';
import { reactive, ref, toRefs } from 'vue';
const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};

const items = ref(['사과', '딸기', '포도', '바나나']);
// const person = inject('person');

const position = reactive({
	x: 100,
	y: 1000,
});

const { x, y } = toRefs(position);
</script>

<style lang="scss" scoped></style>
