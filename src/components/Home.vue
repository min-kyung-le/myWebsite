<template>
	<div class="box-snaps-wrap">
		<div ref="app1" class="nav home1-snaps">
			<div class="dl draw-line"></div>
			<div class="typing-wrap">
				<div class="span-wrap">
					<div class="typing"></div>
					<span id="cursor">|</span>
				</div>
			</div>
			<div class="dl draw-line2"></div>
			<div class="scroll-down-box">
				<div class="scroll-down">{{ scrollDownText }}</div>
				<div id="arrow-down" class="scroll-down">
					<svg
						fill="#e9ebec"
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
			<section class="gallery g1">
				<div class="gtb gallery-text-bg2"></div>
				<div class="gt gallery-text2"></div>
				<ul class="wrap wrapper2">
					<li>
						<img height="330" src="@/assets/imgs/1.png" width="630" />
					</li>
					<li>
						<img height="330" src="@/assets/imgs/22.png" width="630" />
					</li>
					<li>
						<img height="330" src="@/assets/imgs/3.png" width="630" />
					</li>
					<li>
						<img height="330" src="@/assets/imgs/4.png" width="630" />
					</li>
					<li>
						<img height="330" src="@/assets/imgs/5.png" width="630" />
					</li>
				</ul>
			</section>
			<section class="gallery g2">
				<div class="gtb gallery-text-bg3"></div>
				<div class="gt gallery-text3"></div>
				<div class="gtb gallery-text-bg4"></div>
				<div class="gt gallery-text4"></div>
				<ul class="wrap wrapper3">
					<li>
						<img height="330" src="@/assets/imgs/1.png" width="630" />
					</li>
					<li>
						<img height="330" src="@/assets/imgs/22.png" width="630" />
					</li>
					<li>
						<img height="330" src="@/assets/imgs/3.png" width="630" />
					</li>
					<li>
						<img height="330" src="@/assets/imgs/4.png" width="630" />
					</li>
					<li>
						<img height="330" src="@/assets/imgs/5.png" width="630" />
					</li>
				</ul>
			</section>
		</div>
		<Home2 ref="app2"></Home2>
		<Home3 ref="app3"></Home3>
	</div>
</template>

<script>
import Home2 from '@/components/Home2.vue'
import Home3 from '@/components/Home3.vue'

import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

let tl = gsap.timeline()
let text2 = '주 기술 스택 : Javascript, Vue, Vuetify'
let text3 = '보조 기술 스택 : Java, Spring Boot, JPA, Mybatis<br />라이브러리 : GSAP, Chart.js, animation.css'
export default {
	components: {
		Home2,
		Home3,
	},
	data() {
		return {
			scrollDownText: 'YOU CAN SEE MORE CONTENTS!',
		}
	},
	mounted() {
		this.slideLine()
		this.isTyping()
		this.isScrollDown()
		this.slideImg()
		this.isTyping2()
		this.isTyping3()
	},
	methods: {
		slideImg() {
			document.body.style.overflow = 'auto'
			document.scrollingElement.scrollTo(0, 0)

			gsap.utils.toArray('.wrap li').forEach((li, index) => {
				tl.to(li, {
					scrollTrigger: {
						trigger: li,
						scrub: 1,
						start: 'top bottom',
						end: 'bottom top',
					},
					y: -15,
					opacity: 1,
					duration: 0.2,
					delay: index == 0 ? 0.4 : index * 0.1,
				})
			})

			document.body.style.overflow = 'auto'
			document.scrollingElement.scrollTo(0, 0)

			gsap.utils.toArray('section').forEach((section, index) => {
				const w = section.querySelector('.wrap')
				const [x, xEnd] =
					index % 2 ? [w.scrollWidth * -1, 0] : ['100%', (w.scrollWidth - section.offsetWidth) * -1]
				gsap.fromTo(
					w,
					{ x },
					{
						x: xEnd,
						scrollTrigger: {
							trigger: section,
							scrub: 0.5,
						},
					}
				)
			})
		},
		slideLine() {
			gsap.to('.draw-line', {
				delay: 0.7,
				width: window.innerWidth - 5,
				duration: 1,
				ease: 'power2.easeInOut',
			})
			gsap.to('.draw-line2', {
				delay: 1,
				width: window.innerWidth - 5,
				duration: 1,
				ease: 'power2.easeInOut',
			})
		},
		isTyping() {
			const sens = []
			const t1 = '안녕하세요. 만나뵙게 되어 반갑습니다.'
			const t2 = '최신 IT트렌드에 귀기울이는'
			const t3 = '사용자의 입장에서 고민하는'
			const t4 = '프론트엔드 개발자 이민경입니다 :)'
			sens.push(t1, t2, t3, t4)

			tl.to('#cursor', {
				className: 'cursor',
				delay: 0.5,
			})
			let i = 0
			for (let one of sens) {
				i++
				let target = '.typing'
				tl.set(target, {
					width: 'auto',
				}).to(target, {
					text: {
						value: one,
						delimiter: '',
					},
					delay: i == 1 ? 1 : 0.2,
					duration: 1,
					ease: 'steps(12)',
				})

				if (i < sens.length)
					tl.to(target, {
						delay: i == 1 ? 1.5 : 0.2,
						width: 0,
						duration: 1,
						ease: 'steps(12)',
					}).set(target, {
						text: {
							value: '',
							delimiter: '',
						},
					})
			}
		},
		isTyping2() {
			const getHeight = window.getComputedStyle(document.querySelector('.wrapper2 li')).height
			const gtextbg2 = '.gallery-text-bg2'
			const gtext2 = '.gallery-text2'
			document.querySelector(gtextbg2).style.height = getHeight
			document.querySelector(gtext2).style.height = getHeight

			tl.to(gtextbg2, {
				scrollTrigger: {
					trigger: gtextbg2,
					scrub: 3,
					start: 'top bottom',
					end: 'bottom top',
				},
				opacity: 0.7,
				duration: 0.2,
			})
			tl.to(gtext2, {
				scrollTrigger: {
					trigger: gtext2,
					scrub: 8,
					start: 'top-=600 bottom',
					end: 'bottom-=50 center',
				},
				text: {
					value: text2,
					delimiter: '',
				},
				opacity: 1,
				duration: 1.5,
				ease: 'power1.inOut',
			})
		},
		isTyping3() {
			const getHeight = window.getComputedStyle(document.querySelector('.wrapper3 li')).height
			const gtextbg3 = '.gallery-text-bg3'
			const gtext3 = '.gallery-text3'
			document.querySelector(gtextbg3).style.height = getHeight
			document.querySelector(gtext3).style.height = getHeight

			tl.to(gtextbg3, {
				scrollTrigger: {
					trigger: gtextbg3,
					scrub: 5,
					start: 'top bottom',
					end: 'bottom top',
				},
				opacity: 0.7,
				duration: 0.2,
			})
			tl.to(gtext3, {
				scrollTrigger: {
					trigger: gtext3,
					scrub: 5,
					start: 'top-=200 bottom',
					end: 'bottom-=250 center',
				},
				text: {
					preserveSpaces: true,
					value: text3,
					delimiter: '',
				},
				opacity: 1,
				duration: 1.5,
				ease: 'power1.inOut',
			})
		},
		isScrollDown() {
			tl.to('.scroll-down-box', {
				y: -2,
				duration: 1,
				opacity: 1,
			})

			tl.to('#arrow-down', {
				y: 8,
				yoyo: true,
				repeat: 5,
				duration: 0.3,
				ease: 'power1.inOut',
			})
		},
	},
}
</script>

<style>
.nav {
	padding: 60px 0;
}
ul.wrap {
	padding-left: 1rem;
	list-style: none;
}

.wrap li {
	flex-shrink: 0;
	padding-right: 4px;
	opacity: 0;
}
.wrap {
	display: flex;
}
.typing {
	margin: 0 8px 0 60px;
	overflow: hidden;
	height: 38px;
}
.typing-wrap {
	min-height: 450px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 24px;
}
.gtb {
	background-color: var(--black);
	opacity: 0;
	position: absolute;
	z-index: 1;
	margin-top: 1%;
	width: 100vw;
}
.gt {
	opacity: 0;
	position: absolute;
	z-index: 1;
	margin-top: 1%;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
}
.g1 {
	margin-top: 180px;
}
.wrapper3 {
	margin-top: -17px;
}
.gallery-text-bg3 {
	margin-top: -33px;
}
.gallery-text3 {
	margin-top: -37px;
}
.cursor {
	animation: blink 0.7s linear infinite;
	display: inline-block;
	font-size: 28px;
}
#cursor {
	opacity: 0;
}
@keyframes blink {
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
.span-wrap {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
}
</style>
