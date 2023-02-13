import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import Graph from '@/components/Graph.vue'
import Career from '@/components/Career.vue'
import Contact from '@/components/Contact.vue'
import 'animate.css'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/work',
			component: Graph,
		},
		{
			path: '/career',
			component: Career,
		},
		{
			path: '/contact',
			component: Contact,
		},
	],
})

export default router
