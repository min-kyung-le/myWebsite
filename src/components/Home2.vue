<template>
	<div ref="target" class="box-snaps">
		<div class="a"></div>
		<div class="secense">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, placeat? Voluptate ratione corrupti
			ipsam laborum fugit itaque nostrum debitis sint. Similique, deleniti culpa! Atque quas maxime, praesentium
			voluptatem esse impedit!
			<div class="secense-front"></div>
			<div class="secense-done">{{ this.text }}</div>
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
export default {
	name: 'Home2',
	data() {
		return {
			text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, placeat? Voluptate ratione corrupti
				ipsam laborum fugit itaque nostrum debitis sint. Similique, deleniti culpa! Atque quas maxime,
				praesentium voluptatem esse impedit!`,
		}
	},
	mounted() {
		this.circleSqure()
		this.isTypeing()

		tl.set('.secense-done', {
			scrollTrigger: {
				trigger: '.secense',
				start: 'center center',
				scrub: true,
				markers: false,
			},
			opacity: 1,
		})
	},
	methods: {
		isTypeing() {
			tl.to('.secense-front', {
				scrollTrigger: {
					trigger: '.secense-front',
					start: 'top center',
					scrub: 2,
				},
				text: {
					value: this.text,
					delimiter: '',
				},
				ease: 'rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })',
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
				start: 'top+=100px center',
				end: 'bottom+=360px center',
				scrub: 5,
				markers: true,
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
.secense .secense-front {
	position: absolute;
	top: 0;
	color: #f1f1f1;
	z-index: 10;
}
.secense {
	color: #474747;
	position: absolute;
}

.secense .secense-done {
	position: absolute;
	top: 0;
	color: #f1f1f1;
	z-index: 11;
	opacity: 0;
}

.color-white {
	color: #f1f1f1 !important;
}
</style>
