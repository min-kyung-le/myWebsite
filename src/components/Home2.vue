<template>
	<div ref="target" class="box-snaps">
		<div class="a"></div>
		<div class="secense" :style="setStyle">
			<div class="secense-1">Lorem ipsum dolor sit, amet consectetur</div>
			<div class="secense-2">adipisicing elit. Inventore, placeat?</div>
			<div class="secense-3">Voluptate ratione corrupti ipsam laborum</div>
			<div class="secense-4">fugit itaque nostrum debitis sint. Similique,</div>
			<div class="secense-5">deleniti culpa! Atque quas maxime,</div>
			<div class="secense-6">praesentium voluptatem esse impedit!</div>
			<div class="front front-1"></div>
			<div class="front front-2"></div>
			<div class="front front-3"></div>
			<div class="front front-4"></div>
			<div class="front front-5"></div>
			<div class="front front-6"></div>
			<div class="secense-done"></div>
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

let tl = gsap.timeline()
let noPaddingInnerWidth = window.innerWidth - 160
export default {
	name: 'Home2',
	data() {
		return {
			textarea: [
				'Lorem ipsum dolor sit, amet consectetur',
				'adipisicing elit. Inventore, placeat?',
				'Voluptate ratione corrupti ipsam laborum',
				'fugit itaque nostrum debitis sint. Similique,',
				'deleniti culpa! Atque quas maxime,',
				'praesentium voluptatem esse impedit!',
			],
		}
	},
	computed: {
		setStyle() {
			return 'width: ' + noPaddingInnerWidth + 'px;'
		},
	},
	mounted() {
		this.circleSqure()
		this.isTypeing()
	},
	methods: {
		isTypeing() {
			let rough =
				'rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })'
			tl.to('.front-1', {
				scrollTrigger: {
					trigger: '.secense-1',
					start: 'center bottom-=40',
					end: 'bottom center',
					scrub: 2,
				},
				text: {
					value: this.textarea[0],
					delimiter: '',
				},
				ease: rough,
			})
				.to('.front-2', {
					scrollTrigger: {
						trigger: '.secense-2',
						start: 'center bottom-=60',
						end: 'bottom center',
						scrub: 2,
					},
					text: {
						value: this.textarea[1],
						delimiter: '',
					},
					ease: rough,
				})
				.to('.front-3', {
					scrollTrigger: {
						trigger: '.secense-3',
						start: 'top bottom',
						end: 'center center',
						scrub: 2,
					},
					text: {
						value: this.textarea[2],
						delimiter: '',
					},
					ease: rough,
				})
				.to('.front-4', {
					scrollTrigger: {
						trigger: '.secense-4',
						start: 'top bottom',
						end: 'top center+=60',
						scrub: 2,
					},
					text: {
						value: this.textarea[3],
						delimiter: '',
					},
					ease: rough,
				})
				.to('.front-5', {
					scrollTrigger: {
						trigger: '.secense-5',
						start: 'top bottom-=40',
						end: 'center bottom',
						scrub: 2,
					},
					text: {
						value: this.textarea[4],
						delimiter: '',
					},
					ease: rough,
				})
				.to('.front-6', {
					scrollTrigger: {
						trigger: '.secense-6',
						start: 'top bottom-=40',
						end: 'bottom bottom',
						scrub: 2,
					},
					text: {
						value: this.textarea[5],
						delimiter: '',
					},
					ease: rough,
				})
		},
		circleSqure() {
			let tl2 = gsap.timeline().to(
				'.a',
				{
					x: '+=1100',
					yoyo: true,
					rotation: 1080,
					// duration: 6,
					ease: 'back.out(1.7)',
				},
				{
					x: '-=1100',
					yoyo: true,
					rotation: -1080,
					// duration: 6,
					ease: 'back.out(1.7)',
				}
			)

			ScrollTrigger.create({
				animation: tl2,
				trigger: '.a',
				start: 'top-=80px center',
				end: 'bottom+=160px center',
				scrub: 5,
			})
		},
	},
}
</script>

<style>
.a {
	width: 100px;
	height: 100px;
	background-color: red;
	margin-bottom: 17px;
	margin-left: 10px;
}
.secense .front {
	position: absolute;
	color: #f1f1f1;
}
.secense .front-1 {
	top: 0;
}
.secense .front-2 {
	top: 83px;
}
.secense .front-3 {
	top: 166px;
}
.secense .front-4 {
	top: 249px;
}
.secense .front-5 {
	top: 330px;
}
.secense .front-6 {
	top: 413px;
}
.secense {
	color: #474747;
	position: absolute;
}

.secense .secense-done {
	color: #f1f1f1;
	z-index: 11;
	opacity: 0;
}

.color-white {
	color: #f1f1f1 !important;
}

.inactive {
	display: none;
}
</style>
