import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Graph from '../components/Graph.vue'
import 'animate.css'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home,
			meta: {
				enterClass: 'animate__animated animate__fadeInLeft',
				leaveClass: 'animate__animated animate__fadeOutRight',
			},
		},
		{
			path: '/graph',
			component: Graph,
			meta: {
				enterClass: 'animate__animated animate__fadeInRight',
				leaveClass: 'animate__animated animate__fadeOutLeft',
			},
		},
	],
})

export default router
