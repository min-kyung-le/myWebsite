<template>
	<div class="close-bg" style="background-color: var(--black); width: 100vw; position: absolute; left: 0; z-index: 1">
		<Menus v-if="isShow" :isShow="isShow" :setClass="setClass" @isCloseMenu="menuBtn"></Menus>
	</div>
	<div class="menuBtn">
		<svg
			@click="menuBtn(!isShow)"
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="26"
			fill="currentColor"
			class="bi bi-list"
			viewBox="0 0 16 16">
			<path
				fill-rule="evenodd"
				d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
		</svg>
	</div>
</template>

<script>
import { gsap } from 'gsap'
import Menus from '@/layout/Menus.vue'

let tl = gsap.timeline()

export default {
	components: {
		Menus,
	},
	data() {
		return {
			setClass: 'menus',
			isShow: false,
		}
	},
	methods: {
		menuBtn(val) {
			this.isShow = val

			if (val)
				tl.to('.close-bg', {
					height: '100vh',
				})
			if (!val)
				tl.to('.close-bg', {
					height: 0,
					duration: 1,
				})
		},
	},
}
</script>

<style></style>
