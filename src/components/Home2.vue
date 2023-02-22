<template>
	<div ref="target" class="box-snaps holster-in-box">
		<div class="a"></div>
		<div class="secense-wrap" :style="setStyle">
			<div class="secense secense-1"></div>
			<div class="secense secense-2"></div>
			<div class="secense secense-3"></div>
			<div class="secense secense-4"></div>
			<div class="secense secense-5"></div>
			<div class="front front-1"></div>
			<div class="front front-2"></div>
			<div class="front front-3"></div>
			<div class="front front-4"></div>
			<div class="front front-5"></div>
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
				'자신있게 말씀드리는 핵심 역량',
				'고객사에 파견되어 근무를 했기 때문에 다양한 사람들과 원활한 소통이 가능합니다.',
				'Javascript, Vue, Vuetify, chart.js로 프론트엔드 웹 개발을 진행했습니다.',
				'JAVA, JPA, Database, Node.js를 이용한 자사솔루션 개발을 진행했습니다.',
				'망설임없이 도전하는 성격으로 최신 IT경향, 웹트렌드에 민감합니다.',
			],
		}
	},
	computed: {
		setStyle() {
			return 'width: ' + noPaddingInnerWidth + 'px;'
		},
	},
	mounted() {
		this.setTextarea()
		let secense = document.getElementsByClassName('secense')
		let fronts = document.getElementsByClassName('front')

		let i = 0
		for (let sec of secense) {
			let setclientHeight = sec.clientHeight * i
			fronts[i].style.top = setclientHeight + 'px'
			i++
		}

		this.circleSqure()
		this.isTypeing()
	},
	methods: {
		setTextarea() {
			gsap.utils.toArray('.secense').forEach((front, index) => {
				tl.set(front, {
					text: {
						value: this.textarea[index],
						delimiter: '',
					},
				})
			})
		},
		isTypeing() {
			let rough =
				'rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })'

			gsap.utils.toArray('.front').forEach((front, index) => {
				tl.to(front, {
					scrollTrigger: {
						trigger: '.secense-' + (index + 1),
						start: 'top-=200 center',
						end: 'bottom-=130 center',
						scrub: 2,
					},
					text: {
						value: this.textarea[index],
						delimiter: '',
					},
					ease: rough,
				})
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
