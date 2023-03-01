<template>
	<div ref="target" id="home3" :class="'box-snaps holster-in-box ' + setClass">
		<div class="menus-icon-wrap" @click="closeMenu">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0,0,256,256"
				width="50px"
				height="50px"
				fill-rule="nonzero">
				<g
					fill="#ffffff"
					fill-rule="nonzero"
					stroke="none"
					stroke-width="1"
					stroke-linecap="butt"
					stroke-linejoin="miter"
					stroke-miterlimit="10"
					stroke-dasharray=""
					stroke-dashoffset="0"
					font-family="none"
					font-weight="none"
					font-size="none"
					text-anchor="none"
					style="mix-blend-mode: normal">
					<g transform="scale(5.12,5.12)">
						<path
							d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path>
					</g>
				</g>
			</svg>
		</div>
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
						stroke="#252b33"
						stroke-linecap="round"
						stroke-linejoin="round"></path>
					<path
						d="M0.5 29.5H94L81 42"
						class="arrow-right-black"
						stroke="#252b33"
						stroke-linecap="round"
						stroke-linejoin="round"></path>
				</g>
				<defs>
					<clipPath id="clip0_651_11245">
						<rect class="arrow-right-black" width="94" height="60" fill="#252b33"></rect>
					</clipPath>
				</defs>
			</svg>
			{{ m.name }}
		</div>
	</div>
</template>

<script>
import { useToast } from 'vue-toastification'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
let tl = gsap.timeline()
gsap.registerPlugin(ScrollTrigger)
let moveOver
export default {
	name: 'Home3',
	props: {
		isShow: Boolean,
		setClass: String,
	},
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
			if (link == '/graph' || link == '/career') {
				const toast = useToast()
				toast.info('준비 중입니다.')
			} else {
				this.$router.push(link)
			}
		},
		slideEffect() {
			if (this.isShow)
				gsap.to('.menus-icon-wrap', {
					opacity: 1,
					delay: 0.4,
					duration: 0.5,
					y: -20,
				})
			let startNum = this.setClass == 'home-3' ? 75 : 1
			for (let n = 1; n <= this.menus.length; n++) {
				gsap.to('.list' + n, {
					scrollTrigger: {
						trigger: '#home3',
						start: 'top' + '+=' + n * startNum + ' center',
						endTrigger: '#home3',
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
						width: 0,
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
		closeMenu() {
			this.$emit('isCloseMenu', false)
		},
	},
}
</script>

<style></style>
