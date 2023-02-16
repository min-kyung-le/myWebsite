<template>
	<div ref="target" class="large-font">
		<div class="holster">
			<div class="box-snaps-wrap" id="scr-t">
				<div ref="app1" class="home-con box-snaps erasers">
					<div class="con typing"></div>
					<div class="con typing"></div>
					<div class="con typing"></div>
					<div v-for="idx in erasers" :class="['eraser eraser' + idx]" :key="idx"></div>
				</div>
				<Home2 ref="app2"></Home2>
				<Home3 ref="app3"></Home3>
				<Home4 ref="app4"></Home4>
			</div>
		</div>
	</div>
</template>

<script>
import Home2 from '@/components/Home2.vue'
import Home3 from '@/components/Home3.vue'
import Home4 from '@/components/Home4.vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

let tl = gsap.timeline()

let text = 'Aron McGuire Design Director @2023'

let innerHeight = window.innerHeight
let onePageHeight = Math.round(innerHeight / 4)

export default {
	components: {
		Home2,
		Home3,
		Home4,
	},
	data() {
		return {
			erasers: 4,
		}
	},
	mounted() {
		for (let i = 0; i < 10; i++) {
			this.isTyping()
		}
	},
	methods: {
		async isTyping() {
			tl.to('.typing', {
				text: {
					value: text,
					delimiter: '',
				},
				duration: 2.5,
				ease: 'power1.inOut',
			})

			await this.setEasersBg()
		},
		setEasersBg() {
			let str = ''
			for (let i = 1; i < 5; i++) {
				str = '.eraser' + i

				if (i != 0)
					tl.set(str, {
						y: onePageHeight * (i - 1),
					})

				tl.to(
					str,
					{
						width: '100%',
						duration: 0.35,
						ease: 'power1.inOut',
					},
					'>'
				)
			}

			tl.from(
				'.typing',
				{
					text: {
						value: '',
						delimiter: '',
					},
					duration: 0.3,
					ease: 'power1.inOut',
				},
				'>'
			)

			for (let i = 4; i > 0; i--) {
				str = '.eraser' + i

				tl.to(
					str,
					{
						width: '0%',
						duration: 0.35,
						ease: 'power1.inOut',
					},
					'>'
				)
			}
		},
	},
}
</script>

<style>
.home-con {
	display: flex;
	justify-content: space-between;
}
.con {
	width: 400px;
	padding-top: 110px;
}
.erasers .eraser {
	width: 0;
	height: 180px;
	position: absolute;
	right: 0;
	top: 0;
	background-color: #fff;
}
</style>
