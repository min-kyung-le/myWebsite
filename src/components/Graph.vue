<template>
	<div>
		<div class="graph-wrapper">
			<Footer v-if="isMenuShow" @isCloseMenu="menuBtn"></Footer>
			<div v-else class="menuBtn" @click="menuBtn(true)">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="26"
					fill="currentColor"
					class="bi bi-list"
					viewBox="0 0 16 16">
					<path
						fill-rule="evenodd"
						d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
				</svg>
			</div>
			<div class="graph-wrap">
				<div class="inbox">
					<div>Line Chart Sample</div>
					<Line :data="chartData" :options="chartOptions" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Footer from '@/layout/Footer.vue'
import { Line } from 'vue-chartjs'
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
	CategoryScale,
	LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale)

export default {
	components: { Footer, Line },
	data() {
		return {
			isMenuShow: false,
			chartData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'First Dataset',
						data: [65, 59, 80, 81, 56, 55, 40],
						fill: false,
						borderColor: 'rgb(75, 192, 192)',
					},
					{
						label: 'second Dataset',
						data: [81, 80, 55, 40, 56, 65, 59],
						fill: false,
						borderColor: 'rgb(75, 192, 192)',
					},
				],
			},
			chartOptions: {
				maintainAspectRatio: false,
			},
		}
	},
	methods: {
		menuBtn(val) {
			this.isMenuShow = val
		},
	},
}
</script>

<style></style>
