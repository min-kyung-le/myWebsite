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
export default {
	components: {
		Home2,
		Home3,
		Home4,
	},
	data() {
		return {
			sentence: 'Aron McGuire Design Director @2023',
			erasers: 4,
		}
	},
	mounted() {
		let tl = gsap.timeline()

		tl.to('.typing', {
			trigger: '.typing',
			text: {
				value: this.sentence,
				delimiter: '',
			},
			//repeat: -1,
			//repeatDelay: 3,
			duration: 3.5,
			ease: 'power1.inOut',
		})

		let str = ''
		for (let i = 1; i < 5; i++) {
			str = '.eraser' + i
			console.log(str)

			if (i != 0)
				tl.set(str, {
					height: 180 * i,
				})

			tl.to(
				str,
				{
					width: '100%',
					duration: 1.5,
					ease: 'power1.inOut',
				},
				'>'
			)
		}
	},
}
</script>

<style>
.home-con {
	display: flex;
	justify-content: space-evenly;
}
.con {
	width: 400px;
	padding-top: 110px;
}
.erasers .eraser {
	width: 0;
	height: 180px;
	position: fixed;
	right: 0;
	top: 0;
	background-color: #fff;
}
</style>
