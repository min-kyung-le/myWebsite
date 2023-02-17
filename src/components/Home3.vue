<template>
	<div ref="target" class="box-snaps">
		<div :id="['list' + (idx + 1)]" :class="['list list' + (idx + 1)]" v-for="(m, idx) of menu" :key="m">
			<svg
				class="arrow-right-black-svg"
				width="15%"
				height="100%"
				viewBox="0 0 94 60"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style="opacity: 1">
				<g clip-path="url(#clip0_651_11245)">
					<path
						d="M0.5 29.5H94L81 17"
						class="arrow-right-black"
						stroke="#111013"
						stroke-linecap="round"
						stroke-linejoin="round"></path>
					<path
						d="M0.5 29.5H94L81 42"
						class="arrow-right-black"
						stroke="#111013"
						stroke-linecap="round"
						stroke-linejoin="round"></path>
				</g>
				<defs>
					<clipPath id="clip0_651_11245">
						<rect class="arrow-right-black" width="94" height="60" fill="#111013"></rect>
					</clipPath>
				</defs>
			</svg>
			<div class="name-box">{{ m.name }}</div>
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap'
let text = [{ name: 'Forma Brands' }, { name: 'Function Health' }, { name: 'Calexo' }, { name: 'HP Omen' }]

export default {
	name: 'Home3',
	data() {
		return {
			menu: text,
			spal: [],
		}
	},
	mounted() {
		this.$nextTick(() => {
			gsap.set(['.name-box', '.arrow-right-black'], {
				x: -200,
			})
		})
	},

	// 		let lists = document.getElementsByClassName('list')
	// 		for (let i = 1; i <= lists.length; i++) {
	// 			let targets = ['.name-box' + i, '.arrow-right-black' + i]
	// 			lists[i].addEventListener('mouseover', () => {
	// 				tl.to(targets, {
	// 					x: 200,
	// 				})
	// 			})
	// 			lists[i].addEventListener('mouseleave', () => {
	// 				tl.to(targets, {
	// 					x: -200,
	// 				})
	// 			})
	// 		}
	// 	})
	// },
}
</script>

<style>
.list {
	color: #f1f1f1;
	background-color: #242424;
	padding: 1px 4px 2px 4px;
	height: 80px;
	margin-bottom: 10px;
}

.list:hover {
	background-color: #f1f1f1;
	color: #242424;
	transition: 0.2s ease-in-out;
	animation-name: arrowright;
	animation-duration: 2s;
	animation-duration: leaner;
	animation-iteration-count: 3;
	animation-direction: alternate;
	animation-fill-mode: forwards;
}
.name-box {
	display: inline-block;
}

@keyframes arrowright {
	0% {
		left: 100px;
	}
	100% {
		left: 300px;
	}
}

@-webkit-keyframes arrowright {
	0% {
		left: 100px;
	}
	100% {
		left: 300px;
	}
}
</style>
