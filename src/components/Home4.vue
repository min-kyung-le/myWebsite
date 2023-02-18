<template>
	<div ref="target" id="home4" class="box-snaps home4-box">
		<div class="home4-text holster-in-box">About Me</div>
		<div id="home4-bg" class="home4-bg"></div>
	</div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
let tl = gsap.timeline()
let innerWidth = window.innerWidth
let nopaddingInnerWidth = innerWidth - 160

export default {
	name: 'Home4',
	mounted() {
		this.chgScale()
		let master = gsap.timeline()
		master.add(this.chgScale).add(this.chgScale2(), '-=1')
	},
	methods: {
		chgScale() {
			let section = document.getElementById('home4-bg')
			tl.to(section, {
				scrollTrigger: {
					trigger: '#home4',
					start: 'top+=300 center',
					end: '+=10',
					markers: true,
					scrub: 2,
				},
				duration: 0.5,
				width: nopaddingInnerWidth,
				height: '1px',
				ease: 'power1.inout',
			})
			return tl
		},
		chgScale2() {
			let section = document.getElementById('home4-bg')
			tl.to(section, {
				height: '487px',
				ease: 'power1.inout',
			})
			return tl
		},
	},
}
</script>

<style>
.home4-bg {
	width: 0px;
	height: 0px;
	background-color: yellow;
	position: absolute;
	z-index: -1;
}

.home4-box {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.home4-text {
	color: red;
	font-size: 4rem;
}
</style>
