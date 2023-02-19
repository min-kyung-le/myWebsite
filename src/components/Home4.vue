<template>
	<div ref="target" id="home4" class="box-snaps home4-box">
		<section class="home4Section">
			<div class="home4Image image1">
				<div class="textbox">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto enim ex voluptatem minus
					optio perferendis,
				</div>
			</div>
			<div class="home4Image image2">
				<div class="textbox">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto enim ex voluptatem minus
					optio perferendis,
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let tl = gsap.timeline()
gsap.registerPlugin(ScrollTrigger)

export default {
	name: 'Home4',
	mounted() {
		this.scrollPin()
	},
	methods: {
		scrollPin() {
			tl.from('.image2', { xPercent: 100 }).from('.image3', { xPercent: 100 }).from('.image4', { xPercent: 100 })

			ScrollTrigger.create({
				animation: tl,
				trigger: '#home4',
				start: 'center center',
				end: '+=4000',
				scrub: true,
				pin: true,
				anticipatePin: 1,
			})
		},
	},
}
</script>

<style>
.textbox {
	width: 300px;
	font-size: 2.5rem;
}
.home4-box {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 80px;
}
.home4Section {
	position: relative;
}
.image2 {
	position: absolute;
	overflow: hidden;
	top: 0;
	transform: translate(100%, 0px);
}
</style>
