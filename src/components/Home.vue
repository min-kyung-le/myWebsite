<template>
	<div class="box-snaps-wrap">
		<div ref="app1" class="nav home1-snaps">
			<div class="draw-line"></div>
			<div class="typing"></div>
			<section class="gallery">
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
			<section class="gallery">
				<div class="gtb gallery-text-bg3"></div>
				<div class="gt gallery-text3"></div>
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
		<div class="scroll-down-box">
			<div class="scroll-down">SCROLL DOWN</div>
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
let text = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quam ea sequi nisi illo eveniet sed,
				laborum accusamus nihil enim accusantium laboriosam debitis facere veniam fugit delectus vitae, dolore
				iste.`
let text2 = 'You can see more in the Graph menu.'
let text3 = 'You can see more in the Career menu.'
export default {
	components: {
		Home2,
		Home3,
	},
	data() {
		return {}
	},
	mounted() {
		this.slideLine()
		this.isTyping()
		this.slideImg()
		this.isTyping2()
		this.isTyping3()
		this.isScrollDown()
	},
	methods: {
		slideImg() {
			document.body.style.overflow = 'auto'
			document.scrollingElement.scrollTo(0, 0)

			gsap.utils.toArray('.wrap li').forEach((li, index) => {
				tl.to(li, {
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
			tl.to('.draw-line', {
				delay: 0.7,
				width: window.innerWidth - 5,
				duration: 1,
				ease: 'power2.easeInOut',
			})
		},
		isTyping() {
			tl.to('.typing', {
				text: {
					value: text,
					delimiter: '',
				},
				delay: 0.7,
				duration: 2.5,
				ease: 'power1.inOut',
			})
		},
		isTyping2() {
			const getHeight = window.getComputedStyle(document.querySelector('.wrapper2 li')).height
			document.querySelector('.gallery-text-bg2').style.height = getHeight
			document.querySelector('.gallery-text2').style.height = getHeight

			tl.to('.gallery-text-bg2', {
				opacity: 0.7,
				duration: 0.2,
			})
			tl.to('.gallery-text2', {
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
			document.querySelector('.gallery-text-bg3').style.height = getHeight
			document.querySelector('.gallery-text3').style.height = getHeight

			tl.to('.gallery-text-bg3', {
				opacity: 0.7,
				duration: 0.2,
			})
			tl.to('.gallery-text3', {
				text: {
					value: text3,
					delimiter: '',
				},
				opacity: 1,
				duration: 1.5,
				ease: 'power1.inOut',
			})
		},
		isScrollDown() {
			tl.set('.scroll-down-box', {
				opacity: 1,
			})

			tl.to('#arrow-down', {
				y: 8,
				yoyo: true,
				repeat: 50,
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
.gallery {
	margin-bottom: 20px;
}
.gallery:not(.last) {
	padding-bottom: 1rem;
}

.typing {
	margin: 0 60px;
	min-height: 200px;
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
</style>
