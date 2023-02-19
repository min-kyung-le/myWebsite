<template>
	<div ref="target" id="home3" class="box-snaps home-3 holster-in-box">
		<div
			v-for="(m, idx) of menus"
			:key="m.link"
			:id="['list' + (idx + 1)]"
			:class="['list list' + (idx + 1)]"
			@click="goPage(m.link)">
			<svg
				:class="['arrow-right-black-svg' + (idx + 1)]"
				width="0"
				height="100%"
				viewBox="0 -10 94 60"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style="opacity: 1">
				<g clip-path="url(#clip0_651_11245)">
					<path
						d="M0.5 29.5H94L81 17"
						class="arrow-right-black"
						stroke="#242424"
						stroke-linecap="round"
						stroke-linejoin="round"></path>
					<path
						d="M0.5 29.5H94L81 42"
						class="arrow-right-black"
						stroke="#242424"
						stroke-linecap="round"
						stroke-linejoin="round"></path>
				</g>
				<defs>
					<clipPath id="clip0_651_11245">
						<rect class="arrow-right-black" width="94" height="60" fill="#242424"></rect>
					</clipPath>
				</defs>
			</svg>
			{{ m.name }}
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
let tl = gsap.timeline()
gsap.registerPlugin(ScrollTrigger)
let moveOver
export default {
	name: 'Home3',
	data() {
		return {
			menus: [
				{ name: 'HOME', link: '/' },
				{ name: 'GRAPH', link: '/graph' },
				{ name: 'CAREER', link: '/career' },
				{ name: 'CONTACT', link: '/contact' },
			],
		}
	},
	mounted() {
		this.slideEffect()
		this.hoverEffect()
	},
	methods: {
		goPage(link) {
			this.$router.push(link)
		},
		slideEffect() {
			for (let n = 1; n <= this.menus.length; n++) {
				gsap.to('.list' + n, {
					scrollTrigger: {
						trigger: '.home-3',
						start: 'top' + '+=' + n * 75 + ' center',
						endTrigger: '.home-3',
						end: 'top center',
						ease: 'power2.easeInOut',
						toggleActions: 'restart none resume reset',
					},
					delay: 0.2,
					y: -20,
					duration: 0.5,
					opacity: 1,
				})
			}
		},
		hoverEffect() {
			let thisId = ''
			document.getElementById('home3').addEventListener('mouseover', e => {
				thisId = e.target.id
				if (thisId.indexOf('list') != -1) {
					tl.to('.arrow-right-black-svg' + thisId.charAt(thisId.length - 1), {
						width: '125px',
						duration: 0.2,
						ease: 'power3.easeInOut',
					})
					moveOver = 1
				}
			})
			document.getElementById('home3').addEventListener('mouseout', e => {
				thisId = e.target.id

				if (thisId.indexOf('list') != -1) {
					tl.to('.arrow-right-black-svg' + thisId.charAt(thisId.length - 1), {
						width: '0px',
						duration: 0.2,
						ease: 'power2.easeInOut',
						overwrite: true,
						onComplete: () => {
							if (moveOver === 1) {
								moveOver = 0
							}
						},
					})
				}
			})
		},
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
	background-color: #242424;
	padding: 8px 4px 5px 4px;
	height: 80px;
	border-bottom: solid 1px #f1f1f1;
	opacity: 0;
	transform: translateY(20px);
}

.list:hover {
	background-color: #f1f1f1;
	color: #242424;
	transition: 0.2s ease-in-out;
	animation-iteration-count: 1;
}

.home-3 {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
</style>
