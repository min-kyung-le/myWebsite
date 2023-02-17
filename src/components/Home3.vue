<template>
	<div ref="target" class="box-snaps">
		<ul class="list-group">
			<div class="bg-box"></div>
			<li class="list" v-for="m in menu" :key="m">{{ m.name }}</li>
		</ul>
	</div>
</template>

<script>
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'

gsap.registerPlugin(Observer)

let text = [{ name: 'Forma Brands' }, { name: 'Function Health' }, { name: 'Calexo' }, { name: 'HP Omen' }]

export default {
	name: 'Home3',
	data() {
		return {
			menu: text,
			spal: [],
		}
	},
	methods: {},
}
</script>

<style>
ul.list-group {
	padding: 0;
}
.list {
	color: black;
	background-color: #f1f1f1;
	padding: 1px 4px;
}

.list-group .bg-box {
	background-color: #f1f1f1;
}
</style>
