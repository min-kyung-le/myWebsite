<template>
	<div ref="target" class="large-font">
		<div class="holster">
			<div class="box-snaps-wrap" id="scr-t">
				<div ref="app1" class="home-con box-snaps erasers">
					<div class="con typing"></div>
					<div class="con typing"></div>
					<div class="con typing"></div>
					<div v-for="idx in erasers" :class="['eraser eraser' + idx]" :key="idx"></div>
					<div v-for="idx in erasers" :class="['eraser-black eraser-black' + idx]" :key="idx"></div>
					<div class="scroll-down-box">
						<div class="scroll-down">SCROLL DOWN</div>
						<div id="arrow-down" class="scroll-down">
							<svg
								fill="#fff"
								enable-background="new 0 0 50 50"
								height="20px"
								id="arrow-down-svg"
								version="1.1"
								viewBox="0 0 50 50"
								width="20px"
								xml:space="preserve"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink">
								<rect fill="none" height="50" width="50" />
								<polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
							</svg>
						</div>
					</div>
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

function repeatAll(func) {
	return new Promise(resolve => {
		setTimeout(() => {
			func
			resolve()
		}, 0)
	})
}

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
		repeatAll(this.isTypingWhite())
			.then(() => repeatAll(this.setEasersWhite()))
			.then(() => repeatAll(this.isTypingBlack()))
			.then(() => repeatAll(this.setEsaserBlack()))
			.then(() => repeatAll(this.isTypingWhite()))

		tl.to('#arrow-down', {
			y: 3.5,
			yoyo: true,
			repeat: 10,
			duration: 0.3,
			ease: 'power1.inOut',
		})
	},
	methods: {
		isTypingWhite() {
			tl.to('.typing', {
				text: {
					value: text,
					delimiter: '',
				},
				color: '#fff',
				duration: 2.5,
				ease: 'power1.inOut',
			})
		},
		isTypingBlack() {
			tl.to('.typing', {
				text: {
					value: text,
					delimiter: '',
				},
				color: '#000',
				duration: 2.5,
				ease: 'power1.inOut',
			})
		},
		setEsaserBlack() {
			let str = ''
			// 검정 지우개
			for (let i = 1; i < 5; i++) {
				str = '.eraser-black' + i

				tl.set(str, {
					y: onePageHeight * (i - 1),
				})
				tl.to(str, {
					width: '100%',
					duration: 0.35,
					ease: 'power1.inOut',
				})
			}
			tl.from('.typing', {
				text: {
					value: '',
					delimiter: '',
				},
				duration: 0.3,
				ease: 'power1.inOut',
			})
		},
		setEasersWhite() {
			let str = ''
			for (let i = 1; i < 5; i++) {
				str = '.eraser' + i

				tl.set(str, {
					backgroundColor: '#fff',
					y: onePageHeight * (i - 1),
				})

				tl.to(str, {
					width: '100%',
					duration: 0.35,
					ease: 'power1.inOut',
				})
			}
			tl.from('.typing', {
				text: {
					value: '',
					delimiter: '',
				},
				duration: 0.3,
				ease: 'power1.inOut',
			})
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
	padding-top: 90px;
	z-index: 2;
}
.erasers .eraser {
	width: 0;
	height: 180px;
	position: absolute;
	right: 0;
	top: 0;
	background-color: #fff;
}
.erasers .eraser-black {
	width: 0;
	height: 180px;
	position: absolute;
	right: 0;
	top: 0;
	background-color: #000;
}
.scroll-down-box {
	font-size: medium;
	position: fixed;
	bottom: 10px;
	left: 45%;
}
.scroll-down {
	width: 120px;
	padding-top: 2px;
	text-align: center;
	align-content: center;
}
</style>
