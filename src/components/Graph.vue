<template>
	<div class="graph-wrapper">
		<div class="inbox">
			<div>오늘의 매출</div>
			<Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
		</div>
		<Menus />
	</div>
</template>

<script>
import Menus from '@/layout/Menus.vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
	components: { Menus, Bar },
	data() {
		return {
			chartData: {
				labels: ['January', 'February', 'March'],
				datasets: [{ label: '바 차트', data: [40, 20, 12] }],
			},
			chartOptions: {
				responsive: true,
			},
		}
	},
	mounted() {},
}
</script>

<style>
.graph-wrapper {
	display: flex;
	justify-content: center;
	align-items: baseline;
	min-height: 100vh;
}
.graph-wrapper .inbox {
	background-color: #f1f1f1;
	border: solid 1px #f1f1f1;
	border-radius: 10px;
	margin: 0 10px 10px 0;
	color: #242424;
	padding: 15px 12px;
}
</style>
