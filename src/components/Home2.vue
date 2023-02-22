<template>
	<div ref="target" class="box-snaps holster-in-box">
		<div class="a"></div>
		<div class="secense" :style="setStyle">
			<div id="sec" class="secense-1">Lorem ipsum dolor sit, amet consectetur</div>
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
		let sec = document.getElementById('sec')
		let fronts = document.getElementsByClassName('front')
		let clientHeight = sec.clientHeight

		let i = 0
		for (let front of fronts) {
			let setclientHeight = clientHeight * i
			front.style.top = setclientHeight + 'px'
			i++
		}

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
					start: 'top-=50 center',
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
						start: 'top-=50 center',
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
						start: 'top-=50 center',
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
						start: 'top-=50 center',
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
						start: 'top-=50 center',
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
						start: 'top-=50 center',
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

<style></style>
