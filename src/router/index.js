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
		},
		{
			path: '/graph',
			component: Graph,
		},
	],
})

export default router
