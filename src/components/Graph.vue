<template>
	<div class="graph-home">
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
		<div class="graph-wrapper">
			<div class="graph-wrap">
				<div>Line Chart Sample</div>
				<Line :data="chartData" :options="chartOptions" />
			</div>
			<div class="table-wrap">
				<vue-good-table :columns="columns" :rows="rows" />
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

import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next'

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale)
export default {
	components: { Footer, Line, VueGoodTable },
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
			columns: [
				{
					label: 'Name',
					field: 'name',
				},
				{
					label: 'Age',
					field: 'age',
					type: 'number',
				},
				{
					label: 'Created On',
					field: 'createdAt',
					type: 'date',
					dateInputFormat: 'yyyy-MM-dd',
					dateOutputFormat: 'MMM do yy',
				},
				{
					label: 'Percent',
					field: 'score',
					type: 'percentage',
				},
			],
			rows: [
				{ id: 1, name: 'John', age: 20, createdAt: '', score: 0.03343 },
				{ id: 2, name: 'Jane', age: 24, createdAt: '2011-10-31', score: 0.03343 },
				{ id: 3, name: 'Susan', age: 16, createdAt: '2011-10-30', score: 0.03343 },
				{ id: 4, name: 'Chris', age: 55, createdAt: '2011-10-11', score: 0.03343 },
				{ id: 5, name: 'Dan', age: 40, createdAt: '2011-10-21', score: 0.03343 },
				{ id: 6, name: 'John', age: 20, createdAt: '2011-10-31', score: 0.03343 },
			],
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
