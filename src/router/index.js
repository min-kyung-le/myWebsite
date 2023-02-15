import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import Graph from '@/components/Graph.vue'
import Career from '@/components/Career.vue'
import Contact from '@/components/Contact.vue'
import 'animate.css'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: Home,
			meta: {
				enterClass: '',
				leaveClass: 'animate__animated animate__fadeOutLeft',
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
		{
			path: '/career',
			component: Career,
			meta: {
				enterClass: 'animate__animated animate__fadeInRight',
				leaveClass: 'animate__animated animate__fadeOutLeft',
			},
		},
		{
			path: '/contact',
			component: Contact,
			meta: {
				enterClass: 'animate__animated animate__fadeInRight',
				leaveClass: 'animate__animated animate__fadeOutLeft',
			},
		},
	],
})

export default router
