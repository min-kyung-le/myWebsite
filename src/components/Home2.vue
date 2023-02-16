<template>
	<div ref="target" class="box-snaps">
		<div class="a" style="width: 100px; height: 100px; background-color: red"></div>
		<div class="secense">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, placeat? Voluptate ratione corrupti
			ipsam laborum fugit itaque nostrum debitis sint. Similique, deleniti culpa! Atque quas maxime, praesentium
			voluptatem esse impedit!
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

export default {
	name: 'Home2',
	mounted() {
		gsap.to('.secense', {
			scrollTrigger: {
				trigger: '.secense',
				scrub: true,
			},
			text: {
				value: 'da',
				newClass: 'class2',
				delimiter: '',
			},
			ease: 'power2',
		})
	},
}
</script>

<style></style>
