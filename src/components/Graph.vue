<template>
	<div>
		<Home3 isMenuShow="isMenuShow" />
		<div class="menuBtn" @click="menuBtn">MENU</div>
		<div class="graph-wrapper">
			<div class="graph-wrap">
				<div class="inbox">
					<div>오늘의 매출</div>
					<Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
				</div>
				<div class="inbox">
					<div>오늘의 매출2</div>
					<Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Home3 from '@/components/Home3.vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
	components: { Home3, Bar },
	data() {
		return {
			isMenuShow: true,
			chartData: {
				labels: ['January', 'February', 'March'],
				datasets: [{ label: '바 차트', data: [40, 20, 12] }],
			},
			chartOptions: {
				responsive: true,
			},
		}
	},
	methods: {
		menuBtn() {
			this.isMenuShow = true
		},
	},
}
</script>

<style></style>
