<template>
	<div ref="target" id="home3" class="box-snaps home-3">
		<div
			href="name-box"
			:id="['list' + (idx + 1)]"
			:class="['list list' + (idx + 1)]"
			v-for="(m, idx) of menu"
			:key="m">
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
			<div :class="['name-box name-box' + (idx + 1)]">{{ m.name }}</div>
		</div>
	</div>
</template>

<script>
let text = [{ name: 'Forma Brands' }, { name: 'Function Health' }, { name: 'Calexo' }, { name: 'HP Omen' }]

import { gsap } from 'gsap'
let tl = gsap.timeline()
export default {
	name: 'Home3',
	data() {
		return {
			menu: text,
			spal: [],
		}
	},
	mounted() {
		let thisId = ''
		document.getElementById('home3').addEventListener('mouseover', e => {
			thisId = e.target.id

			if (thisId.indexOf('list') != -1) {
				tl.to('.name-box' + thisId.charAt(thisId.length - 1), {
					x: 100,
					duration: 0.2,
					ease: 'power1.inOut',
				})
			}
		})
		document.getElementById('home3').addEventListener('mouseout', e => {
			thisId = e.target.id
			console.log(thisId)

			if (thisId.indexOf('list') != -1) {
				tl.to('.name-box' + thisId.charAt(thisId.length - 1), {
					x: 0,
					duration: 0.2,
					ease: 'power1.inOut',
				})
			}
		})
	},
	methods: {
		setWidthBox() {
			// padding-left 80, padding-right 80
			let setWidth = window.innerWidth - 160
			let boxs = document.getElementsByClassName('name-box')
			for (let box of boxs) {
				box.style.width = setWidth + 'px'
			}
		},
	},
}
</script>

<style>
.list {
	font-size: 3.2rem;
	color: #f1f1f1;
	/* background-color: #242424; */
	background-color: yellow;
	padding: 1px 4px 2px 4px;
	height: 80px;
	margin-bottom: 10px;
}

.name-box {
	display: inline-block;
	position: absolute;
	left: 98px;
	padding-top: 28px;
	height: 80px;
}

.name-box-old {
	display: inline-block;
	position: absolute;
	left: 70px;
	padding-top: 28px;
	height: 80px;
}
.name-box-old:hover {
	animation-name: boxmove;
	animation-duration: 500ms;
	animation-fill-mode: forwards;
}

.name-box-old:before {
	animation-name: boxmoveback;
	animation-duration: 500ms;
	animation-fill-mode: forwards;
}

.list:hover {
	background-color: #f1f1f1;
	color: #242424;
	transition: 0.2s ease-in-out;
	animation-iteration-count: 1;
}

@keyframes boxmoveback {
	0% {
		left: 300px;
	}
	100% {
		left: 100px;
	}
}

@-webkit-keyframes boxmoveback {
	0% {
		left: 300px;
	}
	100% {
		left: 100px;
	}
}

@keyframes boxmove {
	0% {
		left: 100px;
	}
	100% {
		left: 300px;
	}
}

@-webkit-keyframes jaehee {
	0% {
		left: 100px;
	}
	100% {
		left: 300px;
	}
}

.home-3 {
	display: flex;
	flex-direction: column;
}
</style>
